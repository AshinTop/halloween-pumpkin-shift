# 2048 主站嵌入

游戏始终把自身视为有界窗口。推荐对应站点 **2048online.top**，保留主站工具栏，用 iframe 的实际 viewport 计算棋盘尺寸。

```html
<iframe src="https://halloween-pumpkin-shift.crazy3d.org/" title="Pumpkin Shift" width="100%" height="654" allow="fullscreen" scrolling="no" style="display:block;border:0"></iframe>
```

主站已知桌面游戏区为 **1160×654 CSS px**，手机可能使用 `100dvh`；应扣除主站外部工具栏。不要给此游戏套额外强制竖屏比例。

目标验收窗口：1160×654、390×794、390×650、844×340。`ResizeObserver` 按可用空间调整棋盘，短横屏改为左工具栏、右棋盘。窄竖屏的方向按钮高度为 38 px。帮助窗在内部滚动，正文不形成双重滚动条。

浏览器已在 1160×654 和 390×650 验证无文档溢出，第一关普通四步完成三星，以及月光滑移和撤销的资源恢复。其余验收结果由根任务汇总到合集 QA 报告；这里不宣称真实 iOS / Android 实机测试。

键盘焦点在游戏内时生效，触摸有可见方向按钮。音效默认关闭，点击开启后才创建 AudioContext。无父窗口注入、无跨源父 DOM 访问、无后端需求。可在允许脚本的 iframe 内运行；若 sandbox 禁止存储，最佳成绩不持久化，但游戏仍可玩。与站内其他游戏的存档键隔离。
