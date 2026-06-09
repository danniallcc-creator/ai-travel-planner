# AI 旅游路线规划设计师 · TravelMind

> 单文件 React SPA，覆盖**中国大陆 12 城市**的智能旅游路线规划工具，支持一键导入高德地图导航。

## ✨ 核心功能

1. **基本线路规划** — 经典/小众/人文/自然 4 类路线推荐 + 高德地图行程概要 + 一键导入高德导航 deeplink
2. **核心景点攻略** — 三档分类：必玩 TOP1-5 / 次要 TOP6-10 / 小众热度飙升新晋（每景点附打卡点+拍照姿势+1-5 星美食推荐）
3. **出行攻略** — 公共交通 vs 自驾完整对比，含过路费/油费/停车费预估，连续驾驶 3 小时强制休息提醒
4. **住宿攻略** — 基于次日首景点远近自动选址，安全/补给/美食维度评分，高/中/低三档价位推荐
5. **费用预算表** — 机票+住宿+餐饮+本地出行+门票合计，购物预留独立呈现不计入总费用

## 🏙️ 已覆盖城市（12 城）

| 省份 | 代表城市 |
|---|---|
| 北京 / 上海 | 北京、上海 |
| 四川省 | 成都 |
| 浙江省 | 杭州 |
| 陕西省 | 西安 |
| 山西省 | 太原（含平遥/大同/五台山） |
| 广东省 | 广州 |
| 江苏省 | 南京、苏州 |
| 山东省 | 青岛（含泰山/曲阜） |
| 福建省 | 厦门（含土楼/泉州/武夷山） |
| 云南省 | 昆明（含大理/丽江/香格里拉） |

## 🛠 技术栈

- React 18 + ReactDOM (CDN)
- Babel Standalone（in-browser JSX）
- Tailwind CSS（CDN）
- 高德地图 JS API v2.0（Marker + Polyline + uri.amap.com/navigation deeplink）
- 单文件部署：仅 `index.html` + `data.js` 两个文件

## 🚀 部署 / 本地运行

### 在线访问
> 部署在 GitHub Pages: <https://danniallcc-creator.github.io/ai-travel-planner/>

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/danniallcc-creator/ai-travel-planner.git
cd ai-travel-planner

# 启动任意静态服务器（任选其一）
python3 -m http.server 8765
# 或
npx serve .
```

浏览器打开 `http://localhost:8765/`。

## 📁 文件结构

```
ai-travel-planner/
├── index.html       # React SPA 入口（11 个组件，5 阶段流程）
├── data.js          # 城市数据库（CITY_DATABASE × 12 + ROUTE_TYPES + PREFERENCE_QUESTIONS）
└── README.md
```

## 🧭 用户流程

1. **首页对话** — 输入「我想去 XX 地方旅游」自动识别城市
2. **4 步问答** — 预算 / 同行人员 / 出行方式 / 偏好（热门/小众/兼顾）
3. **路线选择** — 4 类路线卡片 + 内嵌高德地图行程预览
4. **完整方案** — 三档景点攻略 + 出行 + 住宿 + 预算
5. **翻页书输出** — 5 页电子书（封面/概要/核心景点/住宿/预算）

## 🗺️ 数据来源 & 局限

- 第一期仅支持中国大陆景点
- 海外景点架构已留口（`isMainlandChina()` 钩子），但当前版本未启用
- 景点数据为编辑团队人工汇编 + 高德 POI 坐标，非实时 API

## 📝 License

MIT
