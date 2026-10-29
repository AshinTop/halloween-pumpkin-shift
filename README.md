[English](README.md) | [简体中文](README.zh-CN.md) | [Español](README.es.md) | [Português (Brasil)](README.pt-BR.md) | [日本語](README.ja.md)

# 🎃 Pumpkin Shift — Halloween Sliding Number Puzzle

**The manor is quiet. Its numbered pumpkins have other plans.** Pumpkin Shift is a cozy Halloween sliding puzzle made for [2048 Online](https://2048online.top/). Put the numbers in order, save a little moonlight for a clever shortcut, and explore twelve rooms plus a daily puzzle. The familiar 8-puzzle and 15-puzzle gain a small, useful twist: Moon Glides.

**[Play online](https://halloween-pumpkin-shift.crazy3d.org/)** · [All Halloween games](https://github.com/AshinTop/halloween-games) · [Embedding guide](EMBEDDING.md) · [Design notes](DESIGN.md)

**Document languages:** English, 简体中文, Español, Português (Brasil), 日本語. **Game interface:** English and Simplified Chinese only; the other README languages do not add in-game translations.

![Pumpkin Shift Halloween sliding puzzle with numbered tiles, an empty square and Moon Glide counters](docs/images/gameplay.jpg)

## A manor full of small discoveries 👻

- **12 campaign rooms:** eight 3×3 boards, followed by four 4×4 boards.
- Two Moon Glides per room, unlimited ordinary slides, and undo that restores spent magic.
- A reproducible 3×3 daily puzzle based on the UTC date.
- Correctly placed tiles glow green. Move targets, stars, optional sound, and original manor artwork give each room a gentle sense of progress.
- A route hint, room selector, and local saves support short sessions without a countdown.

## How to play

Slide the tiles into ascending order, reading left to right and top to bottom, with the empty square in the bottom-right corner. Numbers move into the gap; they do not merge.

A tile directly beside the gap makes an ordinary slide. For a **Moon Glide**, tap a farther tile in the same row or column. The whole intervening line shifts toward the gap. This counts as one move and spends one of the room’s two glides. Diagonal moves are not allowed.

The arrow keys and on-screen direction pad move the **empty square**. This is useful to remember when a tile appears to travel in the opposite direction. Tap tiles when you want direct control over a particular slide or glide.

There is no hard move limit and no timer. Stars reward efficient solutions, but you can finish after passing the target. The campaign targets have verified solution routes; the daily target can be reached along its reverse-shuffle route without magic.

## Controls

| Action | Mouse or touch | Keyboard |
|---|---|---|
| Slide a neighboring tile | Tap the tile | Arrow keys move the gap |
| Use a Moon Glide | Tap a farther aligned tile | Use tile focus and activation |
| Undo | Undo button | Z |
| Ask for a route hint | Hint button | Tab to the button |
| Restart or change rooms | Restart, selector, previous / next | Tab and Enter |

**Trail Hint is a safe route helper, not a shortest-path solver.** Its route can undo your detours and then reverse the room’s original shuffle. Asking for a hint does not move a tile or spend a turn.

## Daily puzzles and saved progress

Campaign and daily boards are built by legal moves from the solved board, so they are solvable. [Room 9](https://halloween-pumpkin-shift.crazy3d.org/?level=9) starts the 4×4 chapter. [Today’s puzzle](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily) follows UTC; [a dated daily link](https://halloween-pumpkin-shift.crazy3d.org/?mode=daily&date=2026-10-31) keeps that exact day.

The current board, best move counts, stars, and preferences are saved locally. Reloading can restore the current game when no link explicitly requests another board. Undo history lasts for the current session.

## FAQ

**Is this another 2048?** It shares a love of numbers, but uses sliding-puzzle rules. Equal numbers never combine.

**Can I waste both glides and get stuck permanently?** Ordinary slides remain available, and undo restores spent glides. Restart brings back the original puzzle.

**Why does a hint suggest backtracking?** The helper follows a known safe route. It does not claim that its next move belongs to the shortest possible solution.

## See the game

![Pumpkin Shift compact layout with numbered board, direction pad and undo controls](docs/images/mobile.jpg)

Actual game interface in a compact browser iframe. This illustrates the layout; it is not a physical-phone performance test.

[Watch the 24-second introduction](https://halloween-pumpkin-shift.crazy3d.org/intro.html) · [Download the captioned MP4](docs/media/intro.mp4). This silent visual tour is assembled from actual game screenshots, not a continuous gameplay recording. The screenshots and video show captured interface states and may predate later visual refinements.

## Embed it on your site

```html
<iframe src="https://halloween-pumpkin-shift.crazy3d.org/"
  title="Pumpkin Shift"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

The layout is designed around 1160×654 desktop, 390×650 portrait and 844×340 landscape iframe windows. No special embed parameter is required. Check the host’s available height, especially when its own toolbar is visible.

The live site uses Cloudflare and is deployed from this GitHub repository. Give the iframe a real height and leave space for the host toolbar. Fullscreen may be provided by the host. See [EMBEDDING.md](EMBEDDING.md) for the integration contract.

## Run locally and check the rules

```sh
python3 -m http.server 4173
```

Serve the repository root, then open [http://localhost:4173/](http://localhost:4173/). The game is static: no build or dependency installation is needed. Use HTTP(S), because direct `file://` access can block ES modules. Node.js is required for the tests.

```sh
npm test
```

The **11 tests** cover campaign solutions and targets, daily generation, glide costs and exhausted magic, hint routes after detours, board boundaries, dated links, and saved-state validation.

The game source does not require an account, remote API, advertising SDK, or external asset CDN. Records stay in browser storage; there is no cloud sync. Cloudflare may add its own hosting scripts and request logs. Optional synthesized audio follows browser sound permissions.

## More moonlit adventures 🍬

- [Pumpkin 2048](https://halloween-2048.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-2048) — Classic merging and Lantern Trials.
- [Ghost Lanterns 3D](https://halloween-3d.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-3d) — Spatial Lights Out with linked lanterns.
- [Haunted Hearts](https://halloween-love-game.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-love-game) — Two ghosts, pressure gates, and a shared lantern.
- [Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/) · [Source](https://github.com/AshinTop/halloween-tripeaks) — Higher-or-lower solitaire and Moon Bridges.

## Credits and a little support

Created for **AshinTop’s Midnight Candy Club** through human-directed AI collaboration in design, programming, writing, testing, and review. The original artwork and synthesized sounds were made for this project. [Design notes](DESIGN.md) explain its intent.

Enjoyed this little adventure? **[Star Pumpkin Shift on GitHub](https://github.com/AshinTop/halloween-pumpkin-shift)** to save it for later and follow updates. Useful issue reports include the game mode or level, browser, window size, and steps that reproduce the problem. Explore the [complete Halloween collection](https://github.com/AshinTop/halloween-games).
