/* Original deterministic sliding-puzzle rules. No DOM or storage dependencies. */
export const LEVELS = [
  {name:['初燃的灯','First light'],size:3,steps:4,seed:101,par:4},
  {name:['门廊上的脚印','Porch prints'],size:3,steps:7,seed:214,par:6},
  {name:['月光长廊','Moon corridor'],size:3,steps:10,seed:319,par:8},
  {name:['黑猫的绕路','The cat’s detour'],size:3,steps:14,seed:428,par:12},
  {name:['松动的砖','Loose stone'],size:3,steps:18,seed:533,par:17},
  {name:['南瓜的秘密','Pumpkin secrets'],size:3,steps:22,seed:647,par:20},
  {name:['藏在钟后的门','Behind the clock'],size:3,steps:26,seed:754,par:24},
  {name:['三更的来客','The midnight guest'],size:3,steps:30,seed:866,par:28},
  {name:['大宅的钥匙','The manor key'],size:4,steps:18,seed:977,par:15},
  {name:['星光阶梯','Starlight stairs'],size:4,steps:28,seed:1081,par:24},
  {name:['最后一扇窗','The final window'],size:4,steps:38,seed:1196,par:34},
  {name:['守夜人归来','Home before dawn'],size:4,steps:48,seed:1208,par:44}
];
export function rng(seed){let x=seed>>>0;return()=>{x=(Math.imul(x,1664525)+1013904223)>>>0;return x/4294967296;};}
export function goal(size){return Array.from({length:size*size},(_,i)=>(i+1)%(size*size));}
export function won(board){return board.every((v,i)=>v===(i+1)%board.length);}
export function adjacent(a,b,n){return Math.abs(a%n-b%n)+Math.abs(Math.floor(a/n)-Math.floor(b/n))===1;}
export function scramble(size,steps,seed){const board=goal(size),r=rng(seed),trail=[];let blank=board.length-1,last=-1;for(let k=0;k<steps;k++){const choices=board.map((_,i)=>i).filter(i=>adjacent(i,blank,size)&&i!==last);const p=choices[Math.floor(r()*choices.length)];trail.push(board[p]);[board[blank],board[p]]=[board[p],0];last=blank;blank=p;}if(won(board)){const p=blank-1;trail.push(board[p]);[board[blank],board[p]]=[board[p],0];}return {board,route:trail.reverse()};}
export function createGame(level=0,daily=null){const index=Number.isInteger(level)&&level>=0&&level<LEVELS.length?level:0;const d=daily?{size:3,steps:28,seed:dateSeed(daily),par:28}:LEVELS[index];const s=scramble(d.size,d.steps,d.seed);return {version:1,level:index,daily:daily||null,size:d.size,board:s.board,route:s.route,moves:0,glides:2,par:d.par};}
export function isDate(date){return typeof date==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(date)&&Number.isFinite(Date.parse(date))&&new Date(date).toISOString().slice(0,10)===date;}
export function dateSeed(date){return /^\d{4}-\d{2}-\d{2}$/.test(date)?Number(date.replaceAll('-','')):20261031;}
export function movable(state,index){const blank=state.board.indexOf(0),n=state.size;if(!Number.isInteger(index)||index<0||index>=state.board.length||index===blank||won(state.board))return false;return adjacent(index,blank,n)||state.glides>0&&(index%n===blank%n||Math.floor(index/n)===Math.floor(blank/n));}
export function move(state,index){if(!movable(state,index))return null;const next={...state,board:[...state.board],route:[...state.route],moves:state.moves+1};let blank=next.board.indexOf(0),n=state.size;const distance=Math.abs(blank%n-index%n)+Math.abs(Math.floor(blank/n)-Math.floor(index/n));if(distance>1)next.glides--;const direction=index>blank?(index%n===blank%n?n:1):(index%n===blank%n?-n:-1);while(blank!==index){const p=blank+direction,value=next.board[p];[next.board[blank],next.board[p]]=[value,0];if(next.route[0]===value)next.route.shift();else next.route.unshift(value);blank=p;}if(won(next.board))next.route=[];return next;}
export function hintIndex(state){return state.route.length?state.board.indexOf(state.route[0]):-1;}
export function stars(state){if(!won(state.board))return 0;return state.moves<=state.par?3:state.moves<=state.par+Math.ceil(state.par*.5)?2:1;}
export function parseStart(search){const p=new URLSearchParams(search);const raw=p.get('level');const n=/^\d+$/.test(raw||'')?Number(raw):1;return {level:n>=1&&n<=LEVELS.length?n-1:0,daily:p.get('mode')==='daily',date:isDate(p.get('date'))?p.get('date'):null};}
export function validState(s){if(!s||typeof s!=='object'||s.version!==1||![3,4].includes(s.size)||!Array.isArray(s.board)||s.board.length!==s.size*s.size||new Set(s.board).size!==s.board.length||!s.board.every(v=>Number.isInteger(v)&&v>=0&&v<s.board.length)||!Number.isInteger(s.level)||s.level<0||s.level>=LEVELS.length||!Number.isInteger(s.moves)||s.moves<0||!Number.isInteger(s.glides)||s.glides<0||s.glides>2||!Array.isArray(s.route)||s.route.length>2000||!Number.isInteger(s.par)||s.par<1||!(s.daily===null||isDate(s.daily)))return false;const b=[...s.board];for(const value of s.route){if(!Number.isInteger(value)||value<1||value>=b.length)return false;const z=b.indexOf(0),i=b.indexOf(value);if(!adjacent(z,i,s.size))return false;[b[z],b[i]]=[value,0];}return won(b);}
export function readRecord(raw){try{const v=JSON.parse(raw);if(!v||typeof v!=='object'||Array.isArray(v))return {};const out={};for(const [key,r] of Object.entries(v)){if(!/^(level-\d+|daily-\d{4}-\d{2}-\d{2})$/.test(key)||!r||typeof r!=='object'||!Number.isInteger(r.moves)||r.moves<1||!Number.isInteger(r.stars)||r.stars<1||r.stars>3)continue;out[key]={moves:r.moves,stars:r.stars};}return out;}catch{return {};}}
