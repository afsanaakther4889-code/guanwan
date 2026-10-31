# 尖叫工业设计教育 · 作品集展示页

一个以作品展示为核心的静态网页。视觉架构参考 Brikken+Co 的编辑式作品集结构，重新组织为「尖叫工业设计教育」的品牌内容：米灰纸感底色、黑色大字号、电光蓝强调色、六栏细网格，以及克制的滚动叙事。

页面只做作品与作品方法展示，不包含招生、报名或联系方式。

## 线上地址

https://jiano-portfolio.surge.sh

当前部署在 Surge.sh，已通过邮箱验证；本仓库保存完整源码、字体与高清图片资源。

## 预览

页面预览图位于 `preview/`。

在项目目录中启动一个本地静态服务器：

```powershell
cd jiano-portfolio
python -m http.server 4173 --bind 127.0.0.1
```

然后打开：

```
http://127.0.0.1:4173/
```

也可以直接双击打开 `index.html`。字体、图片和脚本均为本地资源，不依赖外部 CDN。

## 页面结构

1. 开篇 Loader 与品牌 Hero
2. 关于我们（滚动逐字显色）
3. 精选作品（9 个完整项目，支持点击进入案例层）
4. 细节档案（6 个项目的局部细节，可横向拖拽浏览）
5. 作品方法（滚动驱动的「调研 / 定义 / 叙事」三段式固定场景）
6. 长期主义（6 条作品集手记）
7. 作品问答（手风琴）
8. 蓝色页脚（大字号品牌落款）

## 交互

- 首次进入的加载计数器
- 鼠标跟随光标（桌面端）
- Hero 产品视角的轻微视差与倾斜
- 作品图片滚动视差、悬停放大
- 横向拖拽档案 / 左右按钮
- 滚动驱动的作品方法章节切换
- 全屏案例查看层（ESC 关闭、上一/下一项目、键盘焦点管理）
- 导航锚点平滑滚动、移动端全屏菜单
- `prefers-reduced-motion` 降级支持

## 文件结构

```
jiano-portfolio/
├─ index.html
├─ README.md
└─ assets/
   ├─ css/styles.css
   ├─ js/app.js
   ├─ favicon.svg
   ├─ fonts/
   │  ├─ MiSans-Regular.woff2
   │  ├─ MiSans-Medium.woff2
   │  ├─ MiSans-Demibold.woff2
   │  ├─ MiSans-Heavy.woff2
   │  └─ FONT-LICENSE.txt
   └─ images/
      └─ ...（响应式 WebP 图片）
```

## 字体

页面使用小米 **MiSans**，并按实际文案做了网页子集，共 4 个字重：

- MiSans Regular / Medium / Demibold / Heavy

字体来自小米 HyperOS 官方发布，遵循《MiSans 字体知识产权许可协议》。详见 `assets/fonts/FONT-LICENSE.txt`。

## 图片

图片来自用户提供的 `优秀作品集图\项目合集` 目录。已按页面版式重新裁切、调色并输出为 WebP：

- 案例封面：1920 × 1080 px，附 1200 px 响应式版本
- 作品卡片：1440 × 1080 px（4:3），附 720 px 响应式版本
- 案例内页：1600 × 900 px，附 1200 px 响应式版本
- 细节档案：1200 × 900 px，附 600 px 响应式版本
- Hero 主图：1600 × 2000 px，当前为 Novax 桌面能源项目

所有图片使用 `srcset` / `sizes` 与懒加载，在 Retina 屏幕上会请求高分辨率版本。

## 说明

- 页面中的作品名称、年份与说明为展示用策展文案，可替换为项目的正式信息。
- 当前收录：FoldLight、NetAce、Breathe、Reform、Modo Core、Sukid、Clean Crusader、Tessan、Silvion。
- 页面不包含招生、报名、咨询或课程销售模块。
- 设计参考仅用于版式语言与色彩体系的重构，不复制其品牌资产与内容。
