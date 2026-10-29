[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 🎃 Pumpkin Shift — 万圣节数字滑块拼图

**庄园很安静，南瓜数字却悄悄换了位置。** Pumpkin Shift 是为 [2048 Online](https://2048online.top/) 创作的万圣节数字滑块小游戏。把数字排回顺序，留一点月光给巧妙的捷径，探索十二个房间和每日谜题。经典八数码、十五数码玩法中，加入了每关两次的「月光滑移」。

**[在线试玩](https://halloween-pumpkin-shift.crazy3d.org/)** · [万圣节游戏总合集](https://github.com/AshinTop/halloween-games) · [嵌入说明](EMBEDDING.md) · [设计说明](DESIGN.md)

**文档语言：** English、简体中文、Español、Português (Brasil)、日本語。**游戏界面目前仅支持英语和简体中文**；西班牙语、葡萄牙语和日语版本为完整说明文档，并非已实现的界面翻译。

![Pumpkin Shift 万圣节数字滑块棋盘，展示数字、空格和月光滑移次数](docs/images/gameplay.jpg)

## 南瓜庄园里有什么？👻

- **12 个主线房间**：前八关为 3×3，后四关为 4×4。
- 每关两次月光滑移，普通滑动不限次数；撤销也会返还用掉的魔法。
- 按 UTC 日期生成、可以分享同一局的 3×3 每日谜题。
- 归位的数字会变绿，步数目标、星级和可关闭的音效带来清晰反馈。
- 原创庄园画面、路线提示、关卡选择和本地存档，适合慢慢思考。

## 怎么玩

把数字按从左到右、从上到下的顺序排好，让空格停在右下角。这里的数字只会移动，不会合并。

点击紧邻空格的方块，即可完成一次普通滑动。想使用**月光滑移**，点击与空格同一行或同一列、但距离更远的方块：中间整排数字会朝空格移动。这算一步，同时消耗一次月光滑移。不能斜向移动。

键盘方向键和屏幕方向按钮控制的是**空格的移动方向**，因此数字的移动方向正好相反。想指定某块数字，直接点它会更直观。

没有倒计时，也没有超过步数就失败的限制。星级奖励更有效率的解法，超过目标后仍能完成。主线三星目标都有已验证的解题路线；每日关沿着初始打乱过程的反向路线，就能在不使用魔法的情况下达到目标。

## 操作方式

| 操作 | 鼠标或触屏 | 键盘 |
|---|---|---|
| 移动相邻数字 | 点击方块 | 方向键移动空格 |
| 月光滑移 | 点击同排或同列的较远方块 | 聚焦方块后激活 |
| 撤销 | 撤销按钮 | Z |
| 查看路线提示 | 提示按钮 | Tab 聚焦后激活 |
| 重开或换关 | 重开、关卡选择、前后关 | Tab 和 Enter |

**路线提示提供安全可行的路线，不是最短路求解器。** 它可能先撤回你的绕路，再反向走完最初的打乱过程。查看提示不会替你移动数字，也不消耗步数。

## 每日谜题与进度

主线和每日棋盘都从完成状态经过合法移动生成，因此有解。[第 9 关](https://halloween-pumpkin-shift.crazy3d.org/?level=9) 是 4×4 章节的起点。[今日谜题](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily) 使用 UTC 日期；[指定日期链接](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily&date=2026-10-31) 会保持那一天的题目。

当前棋盘、最佳步数、星级和偏好保存在本浏览器中。没有链接参数明确指定其他棋盘时，刷新可恢复当前游戏。撤销记录只在本次会话中保留。

## 常见问题

**它和 2048 的规则一样吗？** 不一样。这是数字滑块拼图，相同数字不会合并。

**用完月光滑移会永远卡住吗？** 普通滑动仍可继续，撤销能返还魔法，重开则恢复原始题目。

**提示为什么让我往回走？** 提示沿着已知安全路线前进，不保证每一步都属于最短解。

## 图文与视频

![Pumpkin Shift 紧凑窗口，包含数字棋盘、方向键和撤销按钮](docs/images/mobile.jpg)

截图来自真实浏览器中的紧凑 iframe，用于说明布局，不代表实体手机性能测试。

[观看 24 秒介绍视频](https://halloween-pumpkin-shift.crazy3d.org/intro.html) · [下载带字幕 MP4](docs/media/intro.mp4)。视频无声，由实际游戏截图编排而成，并非连续操作录像。截图和视频记录的是拍摄时的界面，可能早于后续视觉细节更新。

## 嵌入你的站点

```html
<iframe src="https://halloween-pumpkin-shift.crazy3d.org/"
  title="Pumpkin Shift"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

布局针对 1160×654 桌面、390×650 竖屏和 844×340 横屏 iframe 窗口设计，不需要额外的嵌入参数。主站有工具栏时，请按实际剩余高度设置窗口。

在线版本通过 GitHub 关联部署到 Cloudflare。请为 iframe 设置实际高度，并给主站工具栏留出空间；全屏入口可由主站提供。详细约定见 [EMBEDDING.md](EMBEDDING.md)。

## 本地运行与规则验证

```sh
python3 -m http.server 4173
```

在仓库根目录启动静态服务，再打开 [http://localhost:4173/](http://localhost:4173/)。游戏无需构建或安装依赖。请使用 HTTP(S)，直接双击 `file://` 页面可能阻止 ES 模块加载。运行测试需要 Node.js。

```sh
npm test
```

**11 项测试**覆盖主线解法和目标、每日生成、滑移消耗与魔法耗尽、绕路后的提示、棋盘边界、日期链接以及存档校验。

游戏源码不依赖账号、远程 API、广告 SDK 或外部素材 CDN。记录保存在当前浏览器，不提供云端同步；Cloudflare 可能另外加入托管脚本与请求日志。可选合成音效遵循浏览器的声音权限。

## 下一段月光小冒险 🍬

- [Pumpkin 2048](https://halloween-2048.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-2048) — 经典合并与灯笼试炼.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-3d) — 带灵魂联动的 3D 熄灯谜题.
- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-love-game) — 双幽灵、压力门与共享灯笼.
- [Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/) · [源码](https://github.com/AshinTop/halloween-tripeaks) — 高低相邻接龙与月亮桥.

## 制作说明与支持

为 **AshinTop 的 Midnight Candy Club** 创作，设计、编程、文案、测试与审查由人类指导的 AI 协作完成。原创插画和浏览器合成声音为本项目制作，创作意图可见 [设计说明](DESIGN.md)。

喜欢这段小冒险？欢迎 **[给 Pumpkin Shift 点一颗 GitHub Star](https://github.com/AshinTop/halloween-pumpkin-shift)**，方便收藏并关注更新。反馈问题时，请附关卡或模式、浏览器、窗口大小和复现步骤。还可以逛逛 [完整万圣节合集](https://github.com/AshinTop/halloween-games)。
