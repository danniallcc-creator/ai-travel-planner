// AI旅游路线规划设计师 - 数据层
// 第一期：中国大陆热门城市景点数据库
// 数据结构：城市 -> 4类路线 -> 景点(必玩/次要/小众) -> 攻略详情

window.CITY_DATABASE = {
  '北京': {
    code: 'beijing',
    coord: [116.4074, 39.9042],
    bestSeason: '春季(4-5月)、秋季(9-10月)',
    routes: {
      classic: {
        name: '北京经典5日深度游',
        days: 5,
        tagline: '一次走完帝都所有标志性地标',
        spots: ['故宫博物院', '天安门广场', '八达岭长城', '颐和园', '天坛', '王府井', '南锣鼓巷'],
        dayPlan: [
          { day: 1, theme: '皇城核心', list: ['天安门广场', '故宫博物院', '景山公园', '王府井'], hours: 9 },
          { day: 2, theme: '皇家园林', list: ['颐和园', '圆明园', '清华大学'], hours: 8 },
          { day: 3, theme: '雄关漫道', list: ['八达岭长城', '十三陵'], hours: 10 },
          { day: 4, theme: '祭祀文化', list: ['天坛公园', '前门大街', '大栅栏'], hours: 7 },
          { day: 5, theme: '胡同人文', list: ['南锣鼓巷', '什刹海', '恭王府', '798艺术区'], hours: 8 }
        ]
      },
      niche: {
        name: '北京小众秘境4日',
        days: 4,
        tagline: '避开人潮，发现真正的北京',
        spots: ['古北水镇', '箭扣长城', '红螺寺', '法源寺', '国子监', '五道营胡同'],
        dayPlan: [
          { day: 1, theme: '古韵水乡', list: ['古北水镇', '司马台长城夜游'], hours: 10 },
          { day: 2, theme: '野长城探险', list: ['箭扣长城', '慕田峪长城'], hours: 9 },
          { day: 3, theme: '禅意时光', list: ['红螺寺', '雁栖湖'], hours: 8 },
          { day: 4, theme: '京城文脉', list: ['法源寺', '国子监', '五道营胡同', '雍和宫'], hours: 7 }
        ]
      },
      culture: {
        name: '北京人文6日游',
        days: 6,
        tagline: '深度感受千年帝都的文化脉络',
        spots: ['故宫', '国家博物馆', '首都博物馆', '颐和园', '雍和宫', '老舍故居', '齐白石故居'],
        dayPlan: [
          { day: 1, theme: '中华文明', list: ['国家博物馆', '天安门'], hours: 8 },
          { day: 2, theme: '紫禁城', list: ['故宫博物院(深度讲解)', '景山公园'], hours: 9 },
          { day: 3, theme: '皇家园林', list: ['颐和园(全园)', '北大未名湖'], hours: 8 },
          { day: 4, theme: '民国记忆', list: ['首都博物馆', '老舍故居', '梅兰芳纪念馆'], hours: 7 },
          { day: 5, theme: '宗教文化', list: ['雍和宫', '孔庙', '国子监', '法源寺'], hours: 8 },
          { day: 6, theme: '艺术之旅', list: ['798艺术区', '中央美院美术馆', '齐白石故居'], hours: 7 }
        ]
      },
      nature: {
        name: '北京自然风景4日',
        days: 4,
        tagline: '京郊群山、湖泊与红叶',
        spots: ['雁栖湖', '香山公园', '百花山', '十渡风景区', '怀柔水库'],
        dayPlan: [
          { day: 1, theme: '山水画卷', list: ['雁栖湖', '红螺寺'], hours: 8 },
          { day: 2, theme: '红叶满山', list: ['香山公园', '玉泉山'], hours: 7 },
          { day: 3, theme: '京西大峡谷', list: ['十渡风景区', '野三坡'], hours: 10 },
          { day: 4, theme: '高山草甸', list: ['百花山', '怀柔水库'], hours: 9 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '故宫博物院',
          rank: 1,
          intro: '世界五大宫之首，明清两代24位皇帝的皇宫，馆藏文物186万件。建议预留4-6小时游览。',
          coord: [116.397, 39.918],
          photoSpots: [
            { name: '太和殿前广场', pose: '从远处全景拍摄，人物站立画面下三分之一处，抬头望向太和殿，使用广角呈现宏伟感' },
            { name: '角楼', pose: '从筒子河北岸逆光拍摄角楼倒影，黄昏时分最佳，人物背对镜头剪影效果' },
            { name: '御花园', pose: '与古树合影，蹲下半身仰拍，让树枝形成天然画框' }
          ],
          food: [
            { name: '茶汤李', star: 5, desc: '百年老字号，黏稠香甜' },
            { name: '驴打滚', star: 4, desc: '北京传统小吃' },
            { name: '芸豆卷', star: 4, desc: '清宫御膳传承' }
          ],
          duration: 5,
          ticket: 60,
          tip: '需提前7天官网预约，周一闭馆(节假日除外)'
        },
        {
          name: '八达岭长城',
          rank: 2,
          intro: '万里长城最具代表性段落，1987年列入世界文化遗产，毛主席"不到长城非好汉"的题词地。',
          coord: [116.024, 40.354],
          photoSpots: [
            { name: '北八楼', pose: '登顶后回头俯拍蜿蜒长城，人物半侧身张开双臂' },
            { name: '好汉碑', pose: '正面合影，比"V"或竖大拇指，注意避开人潮(早7点前最佳)' },
            { name: '烽火台', pose: '从烽火台门洞向外取景做画框，人物远处剪影' }
          ],
          food: [
            { name: '炸酱面', star: 5, desc: '景区附近老北京面馆' },
            { name: '驴肉火烧', star: 4, desc: '香酥可口' }
          ],
          duration: 4,
          ticket: 40,
          tip: '建议早7点入园避开旅游团高峰'
        },
        {
          name: '天安门广场',
          rank: 3,
          intro: '世界最大城市广场之一，每日清晨升旗仪式震撼人心，人民英雄纪念碑及毛主席纪念堂坐落于此。',
          coord: [116.397, 39.908],
          photoSpots: [
            { name: '天安门城楼前', pose: '正面合影，人物站立中线，画面对称' },
            { name: '人民英雄纪念碑', pose: '使用低机位仰拍，人物侧身面向纪念碑' },
            { name: '升旗台', pose: '清晨升旗仪式，长焦捕捉国旗与朝阳画面' }
          ],
          food: [
            { name: '全聚德烤鸭(前门店)', star: 5, desc: '百年老字号烤鸭' },
            { name: '便宜坊焖炉烤鸭', star: 5, desc: '另一种烤鸭流派' }
          ],
          duration: 2,
          ticket: 0,
          tip: '需安检+实名预约，建议清晨5点观看升旗(夏季)'
        },
        {
          name: '颐和园',
          rank: 4,
          intro: '中国现存规模最大的皇家园林，世界文化遗产，慈禧太后的避暑行宫。',
          coord: [116.265, 39.999],
          photoSpots: [
            { name: '十七孔桥', pose: '冬至前后拍"金光穿洞"奇观，长焦压缩' },
            { name: '佛香阁', pose: '昆明湖对岸拍佛香阁全景，人物站立湖边背影' },
            { name: '长廊', pose: '画中游，半蹲取低角度，长廊延伸至远处' }
          ],
          food: [
            { name: '听鹂馆', star: 4, desc: '宫廷御膳改良菜' },
            { name: '颐和园莲花酥', star: 4, desc: '景区特色点心' }
          ],
          duration: 4,
          ticket: 30,
          tip: '建议从北宫门入园，下行游览体力消耗少'
        },
        {
          name: '天坛',
          rank: 5,
          intro: '明清两代皇帝祭天之所，世界文化遗产，独特的圆形建筑群展示古代天人合一思想。',
          coord: [116.412, 39.882],
          photoSpots: [
            { name: '祈年殿', pose: '正面对称构图，人物站立中轴线' },
            { name: '回音壁', pose: '体验回音效果，墙边侧身合影' },
            { name: '圜丘', pose: '俯拍圆形构造，人物站立中心石' }
          ],
          food: [
            { name: '南来顺', star: 4, desc: '北京清真小吃' },
            { name: '天坛公园肉饼', star: 4, desc: '景区门口老字号' }
          ],
          duration: 3,
          ticket: 30,
          tip: '清晨6点开门，可看到大爷大妈晨练'
        }
      ],
      secondary: [
        {
          name: '南锣鼓巷',
          rank: 6,
          intro: '老北京最具人气的胡同商业街，元大都棋盘式格局，保存完好的四合院聚集地。',
          coord: [116.403, 39.939],
          photoSpots: [
            { name: '主巷入口牌楼', pose: '人物站在牌楼下，长焦拉远' },
            { name: '帽儿胡同', pose: '复古旗袍打卡，仿民国风' }
          ],
          food: [
            { name: '文宇奶酪', star: 5, desc: '老北京双皮奶' },
            { name: '吴裕泰冰淇淋', star: 4, desc: '茶味冰淇淋' }
          ],
          duration: 2.5,
          ticket: 0,
          tip: '工作日游客较少，周末人挤人'
        },
        {
          name: '什刹海',
          rank: 7,
          intro: '京城唯一具有水乡风情的开放式景区，前海、后海、西海三个相连水域，老北京最爱的避暑地。',
          coord: [116.385, 39.939],
          photoSpots: [
            { name: '银锭桥', pose: '夕阳下逆光剪影' },
            { name: '后海酒吧街', pose: '夜景灯光下人物侧脸' }
          ],
          food: [
            { name: '烤肉季', star: 5, desc: '后海老字号烤肉' },
            { name: '爆肚冯', star: 4, desc: '京味小吃' }
          ],
          duration: 3,
          ticket: 0,
          tip: '夏季有荷花，可乘船游览'
        },
        {
          name: '雍和宫',
          rank: 8,
          intro: '清代雍正皇帝府邸改建的藏传佛教寺庙，京城香火最旺、保存最完好的皇家寺庙。',
          coord: [116.418, 39.948],
          photoSpots: [
            { name: '万福阁', pose: '仰拍18米高弥勒佛' },
            { name: '法轮殿', pose: '殿前合影，注意不可在殿内拍照' }
          ],
          food: [
            { name: '簋街小龙虾', star: 5, desc: '北京夜宵地标' }
          ],
          duration: 2,
          ticket: 25,
          tip: '初一十五烧香人最多，平日清静'
        },
        {
          name: '798艺术区',
          rank: 9,
          intro: '原国营电子工业老厂区改造，中国最具代表性的当代艺术聚集地。',
          coord: [116.494, 39.985],
          photoSpots: [
            { name: '红砖墙涂鸦', pose: '后背墙街头风' },
            { name: '工业管道', pose: '蒸汽朋克感工业风' }
          ],
          food: [
            { name: '大苹果咖啡', star: 4, desc: '798老牌咖啡馆' }
          ],
          duration: 3,
          ticket: 0,
          tip: '周一部分画廊休息'
        },
        {
          name: '王府井',
          rank: 10,
          intro: '北京最著名的商业街，集购物、餐饮、文化于一体，王府井书店、东方新天地、王府井小吃街尽在咫尺。',
          coord: [116.418, 39.914],
          photoSpots: [
            { name: '步行街牌楼', pose: '正面合影或与霓虹灯合影' }
          ],
          food: [
            { name: '东来顺涮羊肉', star: 5, desc: '清真涮肉鼻祖' },
            { name: '王府井小吃街', star: 3, desc: '游客向小吃街(本地人较少去)' }
          ],
          duration: 2,
          ticket: 0,
          tip: '小吃街本地人不推荐，主推老字号餐厅'
        }
      ],
      hidden: [
        {
          name: '箭扣长城',
          rank: 11,
          intro: '近期搜索热度暴涨，野长城代表，未经修缮，险峻原始，资深驴友最爱。',
          trend: '+186% 近3月热度',
          coord: [116.5, 40.42],
          photoSpots: [
            { name: '鹰飞倒仰', pose: '险峻处俯拍，注意安全' },
            { name: '北京结', pose: '日出云海大片' }
          ],
          food: [
            { name: '渤海镇虹鳟鱼', star: 4, desc: '景区附近农家乐' }
          ],
          duration: 6,
          ticket: 0,
          tip: '需当地向导，不建议无经验者前往'
        },
        {
          name: '法源寺',
          rank: 12,
          intro: '北京城内最古老的寺庙之一，因小说《北京法源寺》近期热度飙升，丁香花季尤其美丽。',
          trend: '+124% 近3月热度',
          coord: [116.376, 39.881],
          photoSpots: [
            { name: '丁香树下', pose: '4月花季，紫白丁香花海' }
          ],
          food: [
            { name: '牛街清真小吃', star: 5, desc: '寺庙旁边的牛街' }
          ],
          duration: 1.5,
          ticket: 5,
          tip: '4月丁香节最佳，平日游客很少'
        },
        {
          name: '国子监',
          rank: 13,
          intro: '元明清三代国家最高学府，琉璃牌坊精美绝伦，文艺青年新晋打卡地。',
          trend: '+98% 近3月热度',
          coord: [116.412, 39.948],
          photoSpots: [
            { name: '琉璃牌坊', pose: '汉服合影最佳' },
            { name: '辟雍殿', pose: '环水建筑全景' }
          ],
          food: [
            { name: '五道营胡同咖啡', star: 4, desc: '文艺小店云集' }
          ],
          duration: 1.5,
          ticket: 30,
          tip: '与孔庙联票，周一闭馆'
        }
      ]
    },
    transport: {
      airport: '北京首都国际机场/大兴国际机场',
      mainStation: '北京站/北京西站/北京南站',
      publicTransit: { metroDailyCost: 30, taxiAvg: 25, busCost: 2 },
      driving: { tollPerDay: 50, fuelPer100km: 60, parking: 50 }
    },
    accommodation: {
      luxury: [
        { name: '北京王府井希尔顿', loc: '王府井商圈', price: 1380, star: 5, perks: '靠近故宫、天安门，商业便利' },
        { name: '北京瑰丽酒店', loc: '国贸CBD', price: 2280, star: 5, perks: '奢华标杆，地铁直达' }
      ],
      mid: [
        { name: '亚朵S王府井店', loc: '王府井', price: 580, star: 4, perks: '地铁1号线，性价比高' },
        { name: '全季东直门店', loc: '东直门', price: 480, star: 4, perks: '机场快线起点' }
      ],
      budget: [
        { name: '汉庭前门店', loc: '前门', price: 280, star: 3, perks: '步行至天安门' },
        { name: '7天连锁西单店', loc: '西单', price: 220, star: 3, perks: '商圈核心' }
      ]
    }
  },

  '上海': {
    code: 'shanghai',
    coord: [121.4737, 31.2304],
    bestSeason: '春季(3-5月)、秋季(9-11月)',
    routes: {
      classic: {
        name: '上海经典4日',
        days: 4,
        tagline: '魔都地标一网打尽',
        spots: ['外滩', '南京路步行街', '东方明珠', '豫园', '上海迪士尼', '田子坊', '新天地'],
        dayPlan: [
          { day: 1, theme: '魔都地标', list: ['外滩', '南京路步行街', '东方明珠夜景'], hours: 9 },
          { day: 2, theme: '海派文化', list: ['豫园', '城隍庙', '田子坊', '新天地'], hours: 8 },
          { day: 3, theme: '梦幻迪士尼', list: ['上海迪士尼乐园'], hours: 12 },
          { day: 4, theme: '法租界漫步', list: ['武康路', '思南公馆', '上海博物馆'], hours: 7 }
        ]
      },
      niche: {
        name: '上海小众文艺3日',
        days: 3,
        tagline: '上海腔调，小众秘境',
        spots: ['1933老场坊', '愚园路', '思南公馆', '杨树浦水厂', '徐家汇藏书楼'],
        dayPlan: [
          { day: 1, theme: '工业风遗存', list: ['1933老场坊', '杨树浦水厂', '杨浦滨江'], hours: 8 },
          { day: 2, theme: '梧桐区漫步', list: ['愚园路', '武康大楼', '安福路'], hours: 7 },
          { day: 3, theme: '老上海记忆', list: ['思南公馆', '徐家汇藏书楼', '复兴公园'], hours: 7 }
        ]
      },
      culture: {
        name: '上海人文5日',
        days: 5,
        tagline: '从开埠到现代的百年风华',
        spots: ['上海博物馆', '中共一大会址', '宋庆龄故居', '巴金故居', '鲁迅故居', '上海历史博物馆'],
        dayPlan: [
          { day: 1, theme: '海派文化', list: ['上海博物馆', '上海历史博物馆'], hours: 8 },
          { day: 2, theme: '红色记忆', list: ['中共一大会址', '中共二大会址', '新天地'], hours: 7 },
          { day: 3, theme: '名人故居', list: ['宋庆龄故居', '巴金故居', '蔡元培故居'], hours: 7 },
          { day: 4, theme: '左翼文学', list: ['鲁迅纪念馆', '多伦路文化名人街'], hours: 7 },
          { day: 5, theme: '艺术殿堂', list: ['西岸美术馆', '余德耀美术馆', '龙美术馆'], hours: 8 }
        ]
      },
      nature: {
        name: '上海自然风景3日',
        days: 3,
        tagline: '都市旁的水乡与海岛',
        spots: ['朱家角古镇', '崇明岛', '佘山国家森林公园', '滴水湖'],
        dayPlan: [
          { day: 1, theme: '水乡古韵', list: ['朱家角古镇', '青浦淀山湖'], hours: 9 },
          { day: 2, theme: '生态海岛', list: ['崇明岛东滩湿地', '西沙明珠湖'], hours: 10 },
          { day: 3, theme: '都市山林', list: ['佘山国家森林公园', '辰山植物园'], hours: 8 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '外滩',
          rank: 1,
          intro: '万国建筑博览群，上海最具代表性的天际线，黄浦江两岸夜景璀璨。',
          coord: [121.490, 31.240],
          photoSpots: [
            { name: '陈毅广场', pose: '以陆家嘴三件套为背景，人物侧身远眺' },
            { name: '外滩源', pose: '老建筑前复古风留影' },
            { name: '黄浦江观光平台', pose: '夜景灯光下逆光剪影' }
          ],
          food: [
            { name: '外滩三号', star: 5, desc: 'Jean Georges高端法餐' },
            { name: '南翔小笼(豫园店)', star: 5, desc: '百年老字号小笼包' }
          ],
          duration: 2,
          ticket: 0,
          tip: '夜景19:00后最美，周末人多需提前排队'
        },
        {
          name: '上海迪士尼乐园',
          rank: 2,
          intro: '中国大陆首座迪士尼主题乐园，全球第六座，是亚洲最大的迪士尼乐园。',
          coord: [121.667, 31.144],
          photoSpots: [
            { name: '奇幻童话城堡', pose: '正面对称构图，城堡完整入镜' },
            { name: '米奇大街', pose: '与卡通玩偶互动合影' }
          ],
          food: [
            { name: '园内米奇造型小吃', star: 4, desc: '主题餐饮体验感强' }
          ],
          duration: 12,
          ticket: 599,
          tip: '建议下载迪士尼官方APP预约FastPass'
        },
        {
          name: '东方明珠塔',
          rank: 3,
          intro: '高468米，曾为亚洲第一高塔，上海地标性建筑。',
          coord: [121.498, 31.240],
          photoSpots: [
            { name: '滨江大道', pose: '逆光剪影，仰拍东方明珠' },
            { name: '玻璃栈道', pose: '俯拍脚下都市风景' }
          ],
          food: [
            { name: '旋转餐厅', star: 4, desc: '塔上267米高空旋转餐厅' }
          ],
          duration: 2.5,
          ticket: 220,
          tip: '建议黄昏上塔同时看白天和夜景'
        },
        {
          name: '南京路步行街',
          rank: 4,
          intro: '中华商业第一街，全长1033米，老字号与时尚品牌并存。',
          coord: [121.480, 31.236],
          photoSpots: [
            { name: '世纪广场', pose: '与"南京路步行街"标识合影' },
            { name: '观光小火车', pose: '小火车前竖大拇指' }
          ],
          food: [
            { name: '沈大成糕团', star: 5, desc: '上海老字号糕团' },
            { name: '小杨生煎', star: 5, desc: '特色生煎包' }
          ],
          duration: 2.5,
          ticket: 0,
          tip: '步行街全长可以坐观光小火车'
        },
        {
          name: '豫园',
          rank: 5,
          intro: '明代私家园林，江南古典园林典范，与城隍庙连为一体的文化商业区。',
          coord: [121.493, 31.227],
          photoSpots: [
            { name: '九曲桥', pose: '蜿蜒石桥上的曲径感' },
            { name: '玉玲珑石', pose: '与著名太湖石合影' }
          ],
          food: [
            { name: '南翔馒头店', star: 5, desc: '百年老字号小笼包(总店)' },
            { name: '豫园老字号美食广场', star: 4, desc: '集中各类小吃' }
          ],
          duration: 3,
          ticket: 40,
          tip: '春节灯会期间格外热闹'
        }
      ],
      secondary: [
        {
          name: '田子坊',
          rank: 6,
          intro: '由石库门里弄改造的创意园区，文艺青年聚集地。',
          coord: [121.470, 31.211],
          photoSpots: [{ name: '弄堂口', pose: '老上海风情人物半身像' }],
          food: [{ name: '田子坊咖啡馆', star: 4, desc: '众多文艺咖啡馆' }],
          duration: 2,
          ticket: 0,
          tip: '弄堂错综复杂，建议慢慢逛'
        },
        {
          name: '新天地',
          rank: 7,
          intro: '石库门建筑改造的高端商业街区，融合中西文化。',
          coord: [121.476, 31.222],
          photoSpots: [{ name: '石库门门头', pose: '复古风合影' }],
          food: [{ name: 'Tian一', star: 5, desc: '米其林餐厅' }],
          duration: 2.5,
          ticket: 0,
          tip: '夜晚酒吧最热闹'
        },
        {
          name: '武康路', rank: 8,
          intro: '梧桐成荫的法租界老街，武康大楼是网红打卡地标。',
          coord: [121.430, 31.211],
          photoSpots: [{ name: '武康大楼正面', pose: '马路对面长焦拍全景' }],
          food: [{ name: '武康路面包房', star: 4, desc: '网红面包店' }],
          duration: 2, ticket: 0,
          tip: '早上人少，可以慢慢拍'
        },
        {
          name: '上海博物馆', rank: 9,
          intro: '中国大型综合性博物馆，藏有青铜器、陶瓷等百万件文物。',
          coord: [121.469, 31.229],
          photoSpots: [{ name: '青铜器馆', pose: '与商周青铜器合影' }],
          food: [{ name: '博物馆咖啡厅', star: 3, desc: '简餐' }],
          duration: 3, ticket: 0,
          tip: '周一闭馆，需提前预约'
        },
        {
          name: '城隍庙', rank: 10,
          intro: '上海的道教庙宇，历史悠久，香火鼎盛，紧邻豫园。',
          coord: [121.493, 31.225],
          photoSpots: [{ name: '城隍庙正门', pose: '正面合影' }],
          food: [{ name: '上海老饭店', star: 5, desc: '本帮菜代表' }],
          duration: 1.5, ticket: 10,
          tip: '与豫园一起游览'
        }
      ],
      hidden: [
        {
          name: '杨浦滨江',
          rank: 11,
          intro: '近期热度飙升的工业风滨江步道，原杨树浦发电厂等老厂房改造。',
          trend: '+167% 近3月热度',
          coord: [121.531, 31.273],
          photoSpots: [{ name: '杨树浦水厂', pose: '工业管道前ins风' }],
          food: [{ name: '滨江咖啡', star: 4, desc: '工业风咖啡馆' }],
          duration: 3, ticket: 0,
          tip: '骑行最佳，全长15公里'
        },
        {
          name: '安福路',
          rank: 12,
          intro: '小众文艺街区，被称为"上海最有腔调的街"，话剧艺术中心所在地。',
          trend: '+143% 近3月热度',
          coord: [121.443, 31.216],
          photoSpots: [{ name: '梧桐树下', pose: '法式街拍' }],
          food: [{ name: 'Lokal', star: 5, desc: '欧式咖啡店' }],
          duration: 2, ticket: 0,
          tip: '周末有市集'
        }
      ]
    },
    transport: {
      airport: '上海浦东国际机场/虹桥国际机场',
      mainStation: '上海站/上海虹桥站/上海南站',
      publicTransit: { metroDailyCost: 25, taxiAvg: 30, busCost: 2 },
      driving: { tollPerDay: 60, fuelPer100km: 60, parking: 80 }
    },
    accommodation: {
      luxury: [
        { name: '上海外滩华尔道夫', loc: '外滩', price: 2580, star: 5, perks: '外滩源核心位置' },
        { name: '上海浦东丽思卡尔顿', loc: '陆家嘴', price: 2180, star: 5, perks: '正对外滩' }
      ],
      mid: [
        { name: '亚朵S外滩店', loc: '南京东路', price: 680, star: 4, perks: '地铁2/10号线' },
        { name: '美居徐汇店', loc: '徐家汇', price: 580, star: 4, perks: '商圈核心' }
      ],
      budget: [
        { name: '汉庭人民广场店', loc: '人民广场', price: 320, star: 3, perks: '地铁多线交汇' },
        { name: '7天连锁陆家嘴店', loc: '陆家嘴', price: 280, star: 3, perks: '紧邻东方明珠' }
      ]
    }
  },

  '成都': {
    code: 'chengdu',
    coord: [104.066, 30.572],
    bestSeason: '春季(3-5月)、秋季(9-11月)',
    routes: {
      classic: {
        name: '成都经典4日',
        days: 4,
        tagline: '巴蜀文化精华游',
        spots: ['宽窄巷子', '锦里', '武侯祠', '大熊猫繁育研究基地', '春熙路', '杜甫草堂'],
        dayPlan: [
          { day: 1, theme: '蜀都印象', list: ['宽窄巷子', '人民公园', '春熙路'], hours: 8 },
          { day: 2, theme: '三国胜地', list: ['武侯祠', '锦里古街'], hours: 7 },
          { day: 3, theme: '萌宠之旅', list: ['大熊猫繁育研究基地', '熊猫主题餐厅'], hours: 8 },
          { day: 4, theme: '诗圣故里', list: ['杜甫草堂', '青羊宫', '文殊院'], hours: 8 }
        ]
      },
      niche: {
        name: '成都小众玩法3日',
        days: 3,
        tagline: '老成都本地人才知的街巷',
        spots: ['玉林路', '望平街', '彭镇老茶馆', '东郊记忆'],
        dayPlan: [
          { day: 1, theme: '小酒馆文化', list: ['玉林路', '小酒馆音乐现场'], hours: 7 },
          { day: 2, theme: '复古工业', list: ['东郊记忆', '339电视塔'], hours: 7 },
          { day: 3, theme: '老茶馆烟火', list: ['彭镇观音阁老茶馆', '黄龙溪古镇'], hours: 9 }
        ]
      },
      culture: {
        name: '成都人文5日',
        days: 5,
        tagline: '诗书三国蜀文化全方位',
        spots: ['四川博物院', '三星堆遗址', '金沙遗址博物馆', '武侯祠', '杜甫草堂'],
        dayPlan: [
          { day: 1, theme: '神秘古蜀', list: ['金沙遗址博物馆', '青羊宫'], hours: 7 },
          { day: 2, theme: '三星堆奇观', list: ['三星堆博物馆(广汉)'], hours: 9 },
          { day: 3, theme: '三国蜀汉', list: ['武侯祠', '锦里', '永陵博物馆'], hours: 8 },
          { day: 4, theme: '诗书风流', list: ['杜甫草堂', '望江楼公园', '四川博物院'], hours: 8 },
          { day: 5, theme: '禅意茶香', list: ['文殊院', '彭镇老茶馆'], hours: 7 }
        ]
      },
      nature: {
        name: '成都周边自然风景5日',
        days: 5,
        tagline: '雪山、温泉、彩林',
        spots: ['都江堰', '青城山', '九寨沟', '黄龙', '海螺沟'],
        dayPlan: [
          { day: 1, theme: '世界遗产', list: ['都江堰水利工程', '青城前山'], hours: 9 },
          { day: 2, theme: '问道仙山', list: ['青城后山', '住山顶看日出'], hours: 8 },
          { day: 3, theme: '九寨童话', list: ['九寨沟(包车前往)'], hours: 12 },
          { day: 4, theme: '黄龙仙境', list: ['黄龙五彩池'], hours: 10 },
          { day: 5, theme: '蜀山之王', list: ['海螺沟冰川'], hours: 11 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '宽窄巷子',
          rank: 1,
          intro: '由宽巷子、窄巷子和井巷子组成，老成都的"千年少城"缩影，川西民居保存最完整。',
          coord: [104.061, 30.671],
          photoSpots: [
            { name: '宽巷子入口', pose: '青砖灰瓦背景，复古风' },
            { name: '茶馆门口', pose: '坐在竹椅上喝茶看书' }
          ],
          food: [
            { name: '钟水饺', star: 5, desc: '百年老字号红油水饺' },
            { name: '伤心凉粉', star: 5, desc: '川西经典小吃' },
            { name: '三大炮糍粑', star: 4, desc: '现做现卖现吃' }
          ],
          duration: 2.5, ticket: 0,
          tip: '工作日下午人少，傍晚最热闹'
        },
        {
          name: '大熊猫繁育研究基地',
          rank: 2,
          intro: '世界最大的大熊猫人工繁育研究基地，可看到不同年龄段的大熊猫。',
          coord: [104.146, 30.737],
          photoSpots: [
            { name: '幼儿园', pose: '熊猫宝宝抢镜的高萌合影' },
            { name: '太阳产房', pose: '玻璃外拍熊猫' }
          ],
          food: [
            { name: '园内熊猫主题餐厅', star: 3, desc: '主题餐饮' }
          ],
          duration: 4, ticket: 55,
          tip: '早上8:30入园看熊猫吃竹子最活跃'
        },
        {
          name: '武侯祠',
          rank: 3,
          intro: '中国唯一的君臣合祀祠庙，纪念诸葛亮、刘备等三国蜀汉君臣。',
          coord: [104.045, 30.643],
          photoSpots: [
            { name: '诸葛亮殿', pose: '殿前肃立合影' },
            { name: '红墙竹影', pose: '红墙外的著名网红墙' }
          ],
          food: [
            { name: '老妈蹄花', star: 5, desc: '街对面的成都名菜' }
          ],
          duration: 3, ticket: 50,
          tip: '与锦里相连，可一起游览'
        },
        {
          name: '锦里古街',
          rank: 4,
          intro: '成都最古老最具商业气息的步行街之一，浓缩巴蜀文化精华。',
          coord: [104.043, 30.643],
          photoSpots: [
            { name: '锦里牌坊', pose: '夜景灯笼下合影' },
            { name: '川剧变脸戏台', pose: '看川剧表演' }
          ],
          food: [
            { name: '锦里小吃街', star: 4, desc: '汇聚川味小吃' },
            { name: '糖画', star: 5, desc: '现场制作非遗糖画' }
          ],
          duration: 2.5, ticket: 0,
          tip: '夜晚最美，与武侯祠紧邻'
        },
        {
          name: '杜甫草堂',
          rank: 5,
          intro: '"诗圣"杜甫流寓成都期间故居，5世纪前历代官员名士营建。',
          coord: [104.029, 30.660],
          photoSpots: [
            { name: '茅屋故居', pose: '茅屋前合影，复刻"安得广厦千万间"意境' },
            { name: '万佛楼', pose: '楼上俯拍园林' }
          ],
          food: [
            { name: '陈麻婆豆腐', star: 5, desc: '附近的成都名菜' }
          ],
          duration: 3, ticket: 50,
          tip: '春节梅花最美'
        }
      ],
      secondary: [
        {
          name: '春熙路',
          rank: 6,
          intro: '成都最繁华商圈，IFS熊猫雕塑爬墙网红地。',
          coord: [104.080, 30.658],
          photoSpots: [{ name: 'IFS爬墙熊猫', pose: '街对面长焦拍熊猫屁股' }],
          food: [{ name: '钟水饺(春熙店)', star: 5, desc: '老字号' }],
          duration: 2, ticket: 0, tip: '夜晚购物最方便'
        },
        {
          name: '人民公园', rank: 7,
          intro: '成都人最爱的市民公园，鹤鸣茶社闻名遐迩。',
          coord: [104.062, 30.672],
          photoSpots: [{ name: '鹤鸣茶社', pose: '竹椅喝茶日常街拍' }],
          food: [{ name: '鹤鸣茶社', star: 5, desc: '百年茶馆' }],
          duration: 2.5, ticket: 0, tip: '周末看相亲角'
        },
        {
          name: '青羊宫', rank: 8,
          intro: '西南地区最大的道教宫观，建于唐代。',
          coord: [104.043, 30.667],
          photoSpots: [{ name: '八卦亭', pose: '道教文化主题' }],
          food: [{ name: '宫内素斋', star: 4, desc: '道家素食' }],
          duration: 1.5, ticket: 10, tip: '与文殊院形成宗教游线路'
        },
        {
          name: '文殊院', rank: 9,
          intro: '成都市内保存最完整的佛教寺庙。',
          coord: [104.080, 30.682],
          photoSpots: [{ name: '院内古树', pose: '禅意构图' }],
          food: [{ name: '文殊院素斋', star: 5, desc: '寺内素斋' }],
          duration: 1.5, ticket: 5, tip: '初一十五人多'
        },
        {
          name: '都江堰', rank: 10,
          intro: '世界文化遗产，2200多年前李冰父子修建的水利工程。',
          coord: [103.616, 31.001],
          photoSpots: [{ name: '安澜索桥', pose: '索桥晃动惊险感' }],
          food: [{ name: '尤兔头', star: 4, desc: '成都名小吃' }],
          duration: 4, ticket: 80, tip: '与青城山联票更划算'
        }
      ],
      hidden: [
        {
          name: '彭镇观音阁老茶馆',
          rank: 11,
          intro: '百年老茶馆，老成都市井烟火气最浓的地方，近年成为摄影师圣地。',
          trend: '+178% 近3月热度',
          coord: [103.965, 30.601],
          photoSpots: [{ name: '茶馆内', pose: '逆光老人抽烟泡茶' }],
          food: [{ name: '茶馆盖碗茶', star: 5, desc: '10元一杯坐一天' }],
          duration: 3, ticket: 0,
          tip: '早7-9点光线最佳，不允许商业拍摄'
        },
        {
          name: '玉林路',
          rank: 12,
          intro: '赵雷《成都》歌曲让其爆红，小酒馆文化集中地。',
          trend: '+115% 近3月热度',
          coord: [104.084, 30.640],
          photoSpots: [{ name: '小酒馆', pose: '门口合影' }],
          food: [{ name: '玉林串串香', star: 5, desc: '成都串串代表' }],
          duration: 3, ticket: 0,
          tip: '夜晚7点后人多'
        },
        {
          name: '东郊记忆',
          rank: 13,
          intro: '由原国营红光电子管厂改造的工业风文创园，近期成为汉服打卡圣地。',
          trend: '+89% 近3月热度',
          coord: [104.139, 30.667],
          photoSpots: [{ name: '老火车皮', pose: '工业风蒸汽朋克' }],
          food: [{ name: '园内特色餐厅', star: 4, desc: '多种风味' }],
          duration: 2.5, ticket: 0,
          tip: '周末常有Live演出'
        }
      ]
    },
    transport: {
      airport: '成都双流国际机场/天府国际机场',
      mainStation: '成都站/成都东站/成都南站',
      publicTransit: { metroDailyCost: 22, taxiAvg: 20, busCost: 2 },
      driving: { tollPerDay: 40, fuelPer100km: 55, parking: 35 }
    },
    accommodation: {
      luxury: [
        { name: '成都瑞吉酒店', loc: '春熙路', price: 1580, star: 5, perks: '商圈核心' },
        { name: '钓鱼台精品酒店', loc: '宽窄巷子旁', price: 1980, star: 5, perks: '川西园林风' }
      ],
      mid: [
        { name: '亚朵宽窄巷子店', loc: '宽窄巷子', price: 480, star: 4, perks: '步行可达' },
        { name: '希岸春熙店', loc: '春熙路', price: 380, star: 4, perks: '商圈中心' }
      ],
      budget: [
        { name: '汉庭天府广场店', loc: '天府广场', price: 220, star: 3, perks: '地铁1/2号线' },
        { name: '7天熊猫基地店', loc: '熊猫基地附近', price: 180, star: 3, perks: '看熊猫便利' }
      ]
    }
  },

  '杭州': {
    code: 'hangzhou',
    coord: [120.155, 30.274],
    bestSeason: '春季(3-5月)、秋季(9-11月)',
    routes: {
      classic: {
        name: '杭州经典3日',
        days: 3,
        tagline: '人间天堂西子湖畔',
        spots: ['西湖', '灵隐寺', '雷峰塔', '河坊街', '宋城', '千岛湖'],
        dayPlan: [
          { day: 1, theme: '西湖十景', list: ['断桥残雪', '苏堤春晓', '雷峰塔', '三潭印月'], hours: 9 },
          { day: 2, theme: '灵隐禅意', list: ['灵隐寺', '飞来峰', '法喜寺'], hours: 7 },
          { day: 3, theme: '南宋皇城', list: ['河坊街', '南宋御街', '宋城千古情'], hours: 9 }
        ]
      },
      niche: {
        name: '杭州小众秘境3日',
        days: 3,
        tagline: '寻找江南腔调',
        spots: ['法喜寺', '九溪十八涧', '满觉陇', '茅家埠'],
        dayPlan: [
          { day: 1, theme: '禅意秘境', list: ['法喜寺', '永福寺', '梅家坞'], hours: 8 },
          { day: 2, theme: '溪山林径', list: ['九溪十八涧', '茶博物馆', '云栖竹径'], hours: 7 },
          { day: 3, theme: '桂花雨弄', list: ['满觉陇赏桂', '茅家埠', '杨公堤'], hours: 7 }
        ]
      },
      culture: {
        name: '杭州人文4日',
        days: 4,
        tagline: '南宋遗韵江南文脉',
        spots: ['浙江省博物馆', '良渚遗址', '南宋御街', '中国茶叶博物馆', '岳王庙'],
        dayPlan: [
          { day: 1, theme: '良渚文明', list: ['良渚博物院', '良渚古城遗址'], hours: 9 },
          { day: 2, theme: '南宋皇朝', list: ['南宋御街', '岳王庙', '凤凰山遗址'], hours: 8 },
          { day: 3, theme: '禅茶一味', list: ['中国茶叶博物馆', '龙井村', '梅家坞'], hours: 7 },
          { day: 4, theme: '艺术殿堂', list: ['浙江省博物馆', '中国丝绸博物馆'], hours: 8 }
        ]
      },
      nature: {
        name: '杭州自然风景5日',
        days: 5,
        tagline: '湖山溪谷田园诗',
        spots: ['西湖', '千岛湖', '富春江', '天目山', '太子湾公园'],
        dayPlan: [
          { day: 1, theme: '湖光山色', list: ['西湖游船', '太子湾公园'], hours: 8 },
          { day: 2, theme: '碧波万顷', list: ['千岛湖游船', '梅峰岛'], hours: 10 },
          { day: 3, theme: '富春山居', list: ['富春江漂流', '富阳龙门古镇'], hours: 9 },
          { day: 4, theme: '原始森林', list: ['天目山大树王国'], hours: 9 },
          { day: 5, theme: '田园诗意', list: ['西溪湿地', '云栖竹径'], hours: 8 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '西湖',
          rank: 1,
          intro: '世界文化遗产，"上有天堂下有苏杭"的千年名湖，西湖十景每个都是绝美打卡点。',
          coord: [120.149, 30.247],
          photoSpots: [
            { name: '断桥', pose: '雪后断桥不断的经典构图' },
            { name: '雷峰塔', pose: '夕照山远眺雷峰夕照' },
            { name: '苏堤', pose: '柳浪闻莺，春日绿意盎然' }
          ],
          food: [
            { name: '楼外楼', star: 5, desc: '西湖醋鱼鼻祖' },
            { name: '知味观', star: 4, desc: '杭州小吃集合' }
          ],
          duration: 5, ticket: 0,
          tip: '建议骑行环湖一周，全程约12公里'
        },
        {
          name: '灵隐寺',
          rank: 2,
          intro: '中国佛教十大古刹之一，济公活佛传说源地。',
          coord: [120.099, 30.241],
          photoSpots: [
            { name: '飞来峰石刻', pose: '与五代石刻佛像合影' },
            { name: '大雄宝殿', pose: '殿前合影' }
          ],
          food: [
            { name: '灵隐寺素斋', star: 5, desc: '名声在外的素斋' }
          ],
          duration: 3, ticket: 75,
          tip: '初一十五烧香人极多'
        },
        {
          name: '雷峰塔',
          rank: 3,
          intro: '《白蛇传》传说之塔，西湖南岸地标，登塔可览西湖全貌。',
          coord: [120.149, 30.231],
          photoSpots: [
            { name: '塔下原塔遗址', pose: '与原雷峰塔遗址合影' },
            { name: '塔顶观景台', pose: '俯瞰西湖全景' }
          ],
          food: [{ name: '苏堤春晓附近餐厅', star: 4, desc: '湖景餐厅' }],
          duration: 1.5, ticket: 40,
          tip: '黄昏看雷峰夕照'
        },
        {
          name: '千岛湖',
          rank: 4,
          intro: '世界最大人工湖之一，1078个岛屿星罗棋布，水质优良。',
          coord: [119.018, 29.605],
          photoSpots: [
            { name: '梅峰岛观景台', pose: '俯瞰千岛美景' },
            { name: '游船甲板', pose: '湖风吹起头发的电影感' }
          ],
          food: [{ name: '淳鱼头', star: 5, desc: '千岛湖招牌美食' }],
          duration: 8, ticket: 130,
          tip: '需从杭州乘车2.5小时'
        },
        {
          name: '河坊街',
          rank: 5,
          intro: '清河坊是杭州最具老杭州韵味的历史街区。',
          coord: [120.169, 30.245],
          photoSpots: [{ name: '吴山广场', pose: '老牌坊合影' }],
          food: [
            { name: '定胜糕', star: 4, desc: '杭州传统糕点' },
            { name: '葱包桧儿', star: 4, desc: '杭州小吃' }
          ],
          duration: 2.5, ticket: 0,
          tip: '夜晚最热闹'
        }
      ],
      secondary: [
        {
          name: '宋城', rank: 6,
          intro: '中国主题公园前三甲，《宋城千古情》演出震撼。',
          coord: [120.092, 30.187],
          photoSpots: [{ name: '宋城牌坊', pose: '汉服打卡' }],
          food: [{ name: '宋城小吃街', star: 4, desc: '主题美食' }],
          duration: 5, ticket: 320, tip: '《千古情》必看'
        },
        {
          name: '西溪湿地', rank: 7,
          intro: '《非诚勿扰》取景地，江南三大湿地之一。',
          coord: [120.072, 30.278],
          photoSpots: [{ name: '深潭口', pose: '芦苇荡乘船' }],
          food: [{ name: '西溪餐厅', star: 4, desc: '湿地特色' }],
          duration: 4, ticket: 80, tip: '春秋季最美'
        },
        {
          name: '岳王庙', rank: 8,
          intro: '南宋抗金名将岳飞祠庙，"精忠报国"主题。',
          coord: [120.137, 30.255],
          photoSpots: [{ name: '岳飞像前', pose: '肃立合影' }],
          food: [{ name: '附近知味观', star: 4, desc: '杭州老字号' }],
          duration: 1.5, ticket: 25, tip: '紧邻苏堤'
        },
        {
          name: '南宋御街', rank: 9,
          intro: '南宋皇朝中轴线，仿古街区。',
          coord: [120.169, 30.250],
          photoSpots: [{ name: '御街牌坊', pose: '汉服适合' }],
          food: [{ name: '高银街美食', star: 4, desc: '本地小吃' }],
          duration: 2, ticket: 0, tip: '与河坊街相通'
        },
        {
          name: '太子湾公园', rank: 10,
          intro: '春季郁金香花海最美，免费开放。',
          coord: [120.137, 30.225],
          photoSpots: [{ name: '郁金香花海', pose: '花田仰拍' }],
          food: [{ name: '附近茶馆', star: 4, desc: '龙井茶' }],
          duration: 1.5, ticket: 0, tip: '3-4月花期'
        }
      ],
      hidden: [
        {
          name: '法喜寺',
          rank: 11,
          intro: '近期网红寺庙，因"求姻缘灵验"在小红书爆火。',
          trend: '+213% 近3月热度',
          coord: [120.099, 30.225],
          photoSpots: [{ name: '寺内古树', pose: '禅意构图' }],
          food: [{ name: '寺内素面', star: 5, desc: '10元素面爆款' }],
          duration: 2, ticket: 10,
          tip: '工作日去人少'
        },
        {
          name: '九溪十八涧',
          rank: 12,
          intro: '徒步秘境，九溪烟树是文人雅士最爱。',
          trend: '+98% 近3月热度',
          coord: [120.106, 30.196],
          photoSpots: [{ name: '溪间踩石', pose: '溪水中跳跃' }],
          food: [{ name: '九溪农家乐', star: 4, desc: '土菜' }],
          duration: 3, ticket: 0,
          tip: '夏天最凉爽'
        }
      ]
    },
    transport: {
      airport: '杭州萧山国际机场',
      mainStation: '杭州站/杭州东站/杭州南站',
      publicTransit: { metroDailyCost: 25, taxiAvg: 20, busCost: 2 },
      driving: { tollPerDay: 35, fuelPer100km: 60, parking: 40 }
    },
    accommodation: {
      luxury: [
        { name: '杭州西子湖四季酒店', loc: '西湖边', price: 3580, star: 5, perks: '湖景房' },
        { name: '杭州安缦法云', loc: '灵隐寺', price: 4280, star: 5, perks: '隐世禅意' }
      ],
      mid: [
        { name: '亚朵S西湖店', loc: '西湖核心', price: 680, star: 4, perks: '步行可达西湖' },
        { name: '维也纳武林广场店', loc: '武林广场', price: 480, star: 4, perks: '商圈中心' }
      ],
      budget: [
        { name: '汉庭西湖店', loc: '西湖南线', price: 320, star: 3, perks: '骑行环湖便利' },
        { name: '7天连锁灵隐寺店', loc: '灵隐景区', price: 280, star: 3, perks: '寺庙游便利' }
      ]
    }
  },

  '西安': {
    code: 'xian',
    coord: [108.939, 34.341],
    bestSeason: '春季(3-5月)、秋季(9-11月)',
    routes: {
      classic: {
        name: '西安经典4日',
        days: 4,
        tagline: '十三朝古都帝王陵',
        spots: ['秦始皇兵马俑', '华清池', '大雁塔', '钟鼓楼', '回民街', '古城墙', '陕西历史博物馆'],
        dayPlan: [
          { day: 1, theme: '古城风貌', list: ['古城墙', '钟鼓楼', '回民街'], hours: 8 },
          { day: 2, theme: '盛唐气象', list: ['大雁塔', '大唐不夜城', '陕西历史博物馆'], hours: 9 },
          { day: 3, theme: '千古一帝', list: ['秦始皇兵马俑', '华清池', '骊山'], hours: 10 },
          { day: 4, theme: '佛道圣地', list: ['法门寺', '小雁塔', '碑林博物馆'], hours: 9 }
        ]
      },
      niche: {
        name: '西安小众探秘3日',
        days: 3,
        tagline: '老西安人才知道的角落',
        spots: ['永兴坊', '青曲社', '化觉巷清真大寺', '广仁寺'],
        dayPlan: [
          { day: 1, theme: '陕西美食', list: ['永兴坊', '洒金桥', '老菜场'], hours: 8 },
          { day: 2, theme: '相声茶馆', list: ['青曲社相声', '茶坊夜话'], hours: 6 },
          { day: 3, theme: '回汉文化', list: ['化觉巷清真大寺', '广仁寺(藏传)'], hours: 7 }
        ]
      },
      culture: {
        name: '西安人文5日',
        days: 5,
        tagline: '十三朝古都全貌',
        spots: ['陕西历史博物馆', '碑林博物馆', '汉阳陵', '乾陵', '大唐西市博物馆'],
        dayPlan: [
          { day: 1, theme: '通史回顾', list: ['陕西历史博物馆(深度)'], hours: 7 },
          { day: 2, theme: '碑刻艺术', list: ['碑林博物馆', '小雁塔'], hours: 8 },
          { day: 3, theme: '汉风唐韵', list: ['汉阳陵', '汉景帝陵'], hours: 9 },
          { day: 4, theme: '盛唐遗存', list: ['乾陵', '永泰公主墓', '懿德太子墓'], hours: 10 },
          { day: 5, theme: '丝路文化', list: ['大唐西市博物馆', '大慈恩寺'], hours: 8 }
        ]
      },
      nature: {
        name: '西安自然风景4日',
        days: 4,
        tagline: '华山论剑黄河九曲',
        spots: ['华山', '太白山', '翠华山', '黄河壶口瀑布'],
        dayPlan: [
          { day: 1, theme: '险峻华山', list: ['华山东峰看日出', '南峰长空栈道'], hours: 12 },
          { day: 2, theme: '太白积雪', list: ['太白山天然氧吧'], hours: 9 },
          { day: 3, theme: '终南山系', list: ['翠华山天池'], hours: 8 },
          { day: 4, theme: '黄河奇观', list: ['壶口瀑布(壶口至西安4小时)'], hours: 11 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '秦始皇兵马俑',
          rank: 1,
          intro: '世界第八大奇迹，世界文化遗产，秦始皇陵陪葬坑。',
          coord: [109.273, 34.385],
          photoSpots: [
            { name: '一号坑', pose: '俯拍兵马俑阵列' },
            { name: '将军俑', pose: '与高级军官俑合影' }
          ],
          food: [{ name: '骊山农家乐', star: 4, desc: '关中风味' }],
          duration: 4, ticket: 120,
          tip: '建议请讲解员，故事多'
        },
        {
          name: '大雁塔',
          rank: 2,
          intro: '玄奘法师存放佛经之处，著名西安地标。',
          coord: [108.964, 34.220],
          photoSpots: [
            { name: '大雁塔正面', pose: '北广场喷泉前合影' },
            { name: '大唐不夜城', pose: '夜景汉服街拍' }
          ],
          food: [
            { name: '老孙家泡馍', star: 5, desc: '西安名小吃' },
            { name: '大唐不夜城小吃街', star: 4, desc: '汇集各类陕菜' }
          ],
          duration: 3, ticket: 50,
          tip: '夜晚音乐喷泉表演震撼'
        },
        {
          name: '古城墙',
          rank: 3,
          intro: '中国保存最完整的古代城垣，建于明洪武年间。',
          coord: [108.940, 34.265],
          photoSpots: [
            { name: '永宁门', pose: '城墙下的迎宾仪式' },
            { name: '城墙上骑行', pose: '骑行剪影' }
          ],
          food: [{ name: '西羊市', star: 5, desc: '回民街' }],
          duration: 3, ticket: 54,
          tip: '骑行环城墙13公里'
        },
        {
          name: '陕西历史博物馆',
          rank: 4,
          intro: '中国最早的国家级现代化大型博物馆，藏品丰富。',
          coord: [108.964, 34.224],
          photoSpots: [{ name: '镇馆之宝', pose: '与唐代壁画合影' }],
          food: [{ name: '附近大唐美食', star: 4, desc: '回民风味' }],
          duration: 4, ticket: 0,
          tip: '需提前7天预约'
        },
        {
          name: '回民街',
          rank: 5,
          intro: '西安最著名的小吃聚集地，回族饮食文化代表。',
          coord: [108.939, 34.262],
          photoSpots: [{ name: '街口牌楼', pose: '美食小吃合影' }],
          food: [
            { name: '老米家泡馍', star: 5, desc: '回民街老字号' },
            { name: '贾三灌汤包子', star: 5, desc: '招牌灌汤包' },
            { name: '盛志望麻酱酿皮', star: 4, desc: '陕西凉皮' }
          ],
          duration: 2.5, ticket: 0,
          tip: '本地人推荐西羊市，更地道'
        }
      ],
      secondary: [
        {
          name: '钟鼓楼', rank: 6,
          intro: '钟楼鼓楼遥相呼应，西安市中心地标。',
          coord: [108.940, 34.260],
          photoSpots: [{ name: '钟楼正面', pose: '夜景灯光合影' }],
          food: [{ name: '钟楼附近回民街', star: 5, desc: '近邻' }],
          duration: 1.5, ticket: 50, tip: '钟鼓楼联票'
        },
        {
          name: '华清池', rank: 7,
          intro: '杨贵妃沐浴的皇家温泉，《长恨歌》大型实景演出。',
          coord: [109.211, 34.363],
          photoSpots: [{ name: '汤池遗址', pose: '复刻贵妃出浴' }],
          food: [{ name: '临潼石榴', star: 4, desc: '当地特产' }],
          duration: 3, ticket: 120, tip: '《长恨歌》必看'
        },
        {
          name: '大唐不夜城', rank: 8,
          intro: '盛唐主题街区，夜晚灯光绚烂如电影场景。',
          coord: [108.969, 34.213],
          photoSpots: [{ name: '不倒翁小姐姐', pose: '互动表演' }],
          food: [{ name: '不夜城小吃街', star: 4, desc: '主题美食' }],
          duration: 2.5, ticket: 0, tip: '夜晚去最佳'
        },
        {
          name: '小雁塔', rank: 9,
          intro: '荐福寺塔，西安博物院所在地。',
          coord: [108.939, 34.243],
          photoSpots: [{ name: '塔下合影', pose: '古朴砖塔' }],
          food: [{ name: '附近德发长饺子馆', star: 5, desc: '老字号' }],
          duration: 2, ticket: 0, tip: '免费但需预约'
        },
        {
          name: '碑林博物馆', rank: 10,
          intro: '中国古代碑刻艺术宝库，藏石刻3000余块。',
          coord: [108.944, 34.255],
          photoSpots: [{ name: '镇馆昭陵六骏', pose: '与石马合影' }],
          food: [{ name: '书院门小吃', star: 4, desc: '文人街美食' }],
          duration: 3, ticket: 75, tip: '与古城墙连游'
        }
      ],
      hidden: [
        {
          name: '永兴坊',
          rank: 11,
          intro: '陕西非物质文化遗产美食街区，因"摔碗酒"短视频爆红。',
          trend: '+167% 近3月热度',
          coord: [108.949, 34.270],
          photoSpots: [{ name: '摔碗酒', pose: '一饮而尽摔碗' }],
          food: [{ name: 'biangbiang面', star: 5, desc: '陕西特色面' }],
          duration: 2, ticket: 0,
          tip: '摔碗酒5元一碗'
        },
        {
          name: '广仁寺',
          rank: 12,
          intro: '陕西唯一藏传佛教寺院，因樱花和白塔登上小红书热门。',
          trend: '+138% 近3月热度',
          coord: [108.940, 34.279],
          photoSpots: [{ name: '白塔与樱花', pose: '4月樱花季最佳' }],
          food: [{ name: '寺内素斋', star: 4, desc: '藏式素食' }],
          duration: 1.5, ticket: 0,
          tip: '4月樱花季人多'
        }
      ]
    },
    transport: {
      airport: '西安咸阳国际机场',
      mainStation: '西安站/西安北站',
      publicTransit: { metroDailyCost: 18, taxiAvg: 18, busCost: 2 },
      driving: { tollPerDay: 30, fuelPer100km: 55, parking: 25 }
    },
    accommodation: {
      luxury: [
        { name: '西安W酒店', loc: '高新区', price: 1580, star: 5, perks: '现代奢华' },
        { name: '西安君悦酒店', loc: '城墙外', price: 1380, star: 5, perks: '商务首选' }
      ],
      mid: [
        { name: '亚朵钟楼店', loc: '钟楼', price: 480, star: 4, perks: '步行至回民街' },
        { name: '希岸大雁塔店', loc: '大雁塔', price: 380, star: 4, perks: '不夜城旁' }
      ],
      budget: [
        { name: '汉庭钟楼店', loc: '钟楼', price: 220, star: 3, perks: '市中心' },
        { name: '7天连锁回民街店', loc: '回民街', price: 180, star: 3, perks: '美食便利' }
      ]
    }
  },

  '太原': {
    code: 'taiyuan',
    province: '山西省',
    coord: [112.5489, 37.8706],
    bestSeason: '春末夏初(5-6月)、秋季(9-10月)',
    routes: {
      classic: {
        name: '山西经典5日游',
        days: 5,
        tagline: '太原+平遥+大同，晋商三宝一次看完',
        spots: ['平遥古城', '云冈石窟', '应县木塔', '晋祠', '乔家大院', '悬空寺'],
        dayPlan: [
          { day: 1, theme: '太原古韵', list: ['晋祠', '太原博物馆', '柳巷'], hours: 8 },
          { day: 2, theme: '晋商古镇', list: ['平遥古城(全景)', '日昇昌票号', '县衙'], hours: 9 },
          { day: 3, theme: '大宅深院', list: ['乔家大院', '王家大院'], hours: 8 },
          { day: 4, theme: '北魏石窟', list: ['云冈石窟', '大同古城'], hours: 9 },
          { day: 5, theme: '空中楼阁', list: ['悬空寺', '应县木塔'], hours: 9 }
        ]
      },
      niche: {
        name: '山西小众宝藏4日',
        days: 4,
        tagline: '避开人潮的晋北秘境',
        spots: ['雁门关', '广胜寺', '碛口古镇', '李家山村', '后沟古村'],
        dayPlan: [
          { day: 1, theme: '黄河边的晋商古镇', list: ['碛口古镇', '李家山村'], hours: 9 },
          { day: 2, theme: '元代戏台与琉璃', list: ['广胜寺', '洪洞大槐树'], hours: 8 },
          { day: 3, theme: '原始村落', list: ['后沟古村', '榆次老城'], hours: 7 },
          { day: 4, theme: '雁门关风云', list: ['雁门关', '代县文庙'], hours: 8 }
        ]
      },
      culture: {
        name: '山西人文6日深度',
        days: 6,
        tagline: '中华文明从这里出发',
        spots: ['山西博物院', '晋祠', '平遥古城', '云冈石窟', '应县木塔', '五台山'],
        dayPlan: [
          { day: 1, theme: '青铜瑰宝', list: ['山西博物院(全程讲解)'], hours: 6 },
          { day: 2, theme: '三晋之祖', list: ['晋祠(圣母殿宋代彩塑)'], hours: 6 },
          { day: 3, theme: '票号金融', list: ['平遥古城', '日昇昌', '中国票号博物馆'], hours: 9 },
          { day: 4, theme: '北魏佛国', list: ['云冈石窟(深度讲解)'], hours: 6 },
          { day: 5, theme: '木结构奇迹', list: ['应县木塔', '华严寺'], hours: 8 },
          { day: 6, theme: '佛教圣地', list: ['五台山(显通寺、塔院寺)'], hours: 9 }
        ]
      },
      nature: {
        name: '山西山水4日',
        days: 4,
        tagline: '太行山、黄河与高原',
        spots: ['壶口瀑布', '王莽岭', '历山舜王坪', '北武当山'],
        dayPlan: [
          { day: 1, theme: '黄河咆哮', list: ['壶口瀑布', '克难坡'], hours: 9 },
          { day: 2, theme: '太行之巅', list: ['王莽岭', '挂壁公路'], hours: 9 },
          { day: 3, theme: '高山草甸', list: ['历山舜王坪'], hours: 9 },
          { day: 4, theme: '北武当雄峰', list: ['北武当山'], hours: 8 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '平遥古城',
          rank: 1,
          intro: '世界文化遗产，保存最完整的明清县城，明清金融业发祥地。建议日游夜游各一次。',
          coord: [112.176, 37.201],
          photoSpots: [
            { name: '城墙南门', pose: '清晨登城墙俯拍古城屋脊连绵' },
            { name: '日昇昌票号', pose: '账房格局复古服饰拍摄' },
            { name: '又见平遥剧场前', pose: '夜晚红灯笼下逆光人像' }
          ],
          food: [
            { name: '平遥牛肉(冠云)', star: 5, desc: '中华老字号' },
            { name: '碗托', star: 4, desc: '平遥三宝小吃' }
          ],
          duration: 6,
          ticket: 125,
          tip: '通票含22个景点，3天内有效'
        },
        {
          name: '云冈石窟',
          rank: 2,
          intro: '世界文化遗产，北魏皇家石窟，5-13窟为精华，第20窟露天大佛是云冈名片。',
          coord: [113.139, 40.110],
          photoSpots: [
            { name: '第20窟露天大佛', pose: '正前方仰拍，留出佛像头顶蓝天' },
            { name: '5-6窟前廊', pose: '木构窟檐下木雕细节' },
            { name: '昙曜广场', pose: '五大佛雕塑全景' }
          ],
          food: [
            { name: '大同刀削面', star: 5, desc: '大同特色面食' },
            { name: '羊杂', star: 4, desc: '本地早餐首选' }
          ],
          duration: 4,
          ticket: 120,
          tip: '建议请讲解或租电子讲解器'
        },
        {
          name: '晋祠',
          rank: 3,
          intro: '中国现存最早皇家园林，圣母殿、鱼沼飞梁、献殿被誉为晋祠三大国宝建筑。',
          coord: [112.434, 37.717],
          photoSpots: [
            { name: '圣母殿前', pose: '宋代彩塑，殿外侧拍古柏与殿宇' },
            { name: '鱼沼飞梁', pose: '十字桥水中倒影对称构图' }
          ],
          food: [
            { name: '太原头脑', star: 4, desc: '清晨限定养生汤食' },
            { name: '过油肉', star: 5, desc: '山西名菜' }
          ],
          duration: 3,
          ticket: 80,
          tip: '景区在太原西南25公里，公交848直达'
        },
        {
          name: '悬空寺',
          rank: 4,
          intro: '建于北魏，悬挂在恒山翠屏峰半崖，李白书"壮观"二字，世界十大奇险建筑之一。',
          coord: [113.704, 39.671],
          photoSpots: [
            { name: '悬空寺正面广场', pose: '仰拍寺庙立柱悬空全景' },
            { name: '寺内栈道', pose: '回望栈道，恐高慎选' }
          ],
          food: [
            { name: '浑源凉粉', star: 5, desc: '当地名小吃' }
          ],
          duration: 2,
          ticket: 130,
          tip: '门票含登临，体重过重者建议仅外观'
        },
        {
          name: '应县木塔',
          rank: 5,
          intro: '世界三大奇塔之一，全木结构无一钉，辽代建筑，已矗立近千年。',
          coord: [113.191, 39.554],
          photoSpots: [
            { name: '塔前广场', pose: '正面对称构图，红墙黄叶映衬' }
          ],
          food: [
            { name: '应县牛腰', star: 4, desc: '本地油炸面食小吃' }
          ],
          duration: 1.5,
          ticket: 50,
          tip: '目前仅限二层登临'
        }
      ],
      secondary: [
        { name: '乔家大院', rank: 6, intro: '清代晋商民居代表，《大红灯笼高高挂》拍摄地。', coord: [112.382, 37.354], photoSpots: [{ name: '德兴堂', pose: '红灯笼下汉服' }], food: [{ name: '乔家小院饺子', star: 4, desc: '景区餐饮' }], duration: 2, ticket: 115, tip: '建议请讲解' },
        { name: '王家大院', rank: 7, intro: '"王家归来不看院"，清代私家大院之首。', coord: [111.755, 36.846], photoSpots: [{ name: '高家崖', pose: '院落层层叠叠俯拍' }], food: [{ name: '灵石饸烙面', star: 4, desc: '当地面食' }], duration: 3, ticket: 55, tip: '建议留3小时游览' },
        { name: '五台山', rank: 8, intro: '中国佛教四大名山之首，文殊菩萨道场。', coord: [113.594, 39.038], photoSpots: [{ name: '黛螺顶', pose: '俯瞰台怀镇全景' }], food: [{ name: '五台山台蘑炖鸡', star: 5, desc: '当地特色' }], duration: 8, ticket: 135, tip: '海拔较高注意保暖' },
        { name: '壶口瀑布', rank: 9, intro: '黄河第一壶，气势磅礴。', coord: [110.475, 36.130], photoSpots: [{ name: '观瀑台', pose: '长曝光拍水雾' }], food: [{ name: '吉县苹果', star: 4, desc: '当地名特产' }], duration: 3, ticket: 90, tip: '雨季水势更大但更危险' },
        { name: '雁门关', rank: 10, intro: '中华第一关，杨家将故事发生地。', coord: [112.892, 39.180], photoSpots: [{ name: '关城门洞', pose: '门洞做画框拍摄' }], food: [{ name: '代县熬鱼', star: 4, desc: '代县特色' }], duration: 3, ticket: 90, tip: '常年风大注意防风' }
      ],
      hidden: [
        { name: '碛口古镇', rank: 11, intro: '黄河边晋商水旱码头，至今保留明清原貌。', trend: '+154% 近3月热度', coord: [110.806, 37.626], photoSpots: [{ name: '黑龙庙', pose: '日落黄河沿岸全景' }], food: [{ name: '碛口面塑', star: 4, desc: '当地手作' }], duration: 4, ticket: 0, tip: '住一晚体验夜晚黄河' },
        { name: '广胜寺', rank: 12, intro: '元代戏台壁画珍品，飞虹塔琉璃艺术巅峰。', trend: '+108% 近3月热度', coord: [111.703, 36.290], photoSpots: [{ name: '飞虹塔', pose: '琉璃塔身细节特写' }], food: [{ name: '洪洞醪糟', star: 4, desc: '当地小吃' }], duration: 2.5, ticket: 80, tip: '上下寺务必都看' },
        { name: '李家山村', rank: 13, intro: '吴冠中眼中"汉墓",梯田式窑洞村落。', trend: '+92% 近3月热度', coord: [110.795, 37.611], photoSpots: [{ name: '半山腰俯拍', pose: '层层窑洞如画' }], food: [{ name: '黄河鲤鱼', star: 5, desc: '当地新鲜河鱼' }], duration: 3, ticket: 30, tip: '可与碛口连游' }
      ]
    },
    transport: {
      airport: '太原武宿国际机场',
      mainStation: '太原站/太原南站',
      publicTransit: { metroDailyCost: 25, taxiAvg: 20, busCost: 1 },
      driving: { tollPerDay: 80, fuelPer100km: 60, parking: 30 }
    },
    accommodation: {
      luxury: [
        { name: '太原万豪酒店', loc: '小店区', price: 1080, star: 5, perks: '机场快线通达' },
        { name: '平遥洪善驿', loc: '平遥古城内', price: 880, star: 5, perks: '古城内精品民宿' }
      ],
      mid: [
        { name: '亚朵柳巷店', loc: '柳巷', price: 480, star: 4, perks: '太原市中心商圈' },
        { name: '云冈维景酒店', loc: '大同云冈', price: 420, star: 4, perks: '近云冈石窟' }
      ],
      budget: [
        { name: '汉庭迎泽公园店', loc: '迎泽公园', price: 220, star: 3, perks: '步行可达晋祠汽车站' },
        { name: '7天连锁平遥古城店', loc: '平遥北门外', price: 200, star: 3, perks: '步行入古城' }
      ]
    }
  },

  '广州': {
    code: 'guangzhou',
    province: '广东省',
    coord: [113.2644, 23.1291],
    bestSeason: '秋冬季(10-3月)',
    routes: {
      classic: {
        name: '广州经典4日',
        days: 4,
        tagline: '美食之都+岭南文化',
        spots: ['广州塔', '陈家祠', '沙面岛', '上下九步行街', '白云山', '长隆欢乐世界', '珠江夜游'],
        dayPlan: [
          { day: 1, theme: '羊城地标', list: ['广州塔', '海心沙', '珠江夜游'], hours: 8 },
          { day: 2, theme: '岭南文化', list: ['陈家祠', '沙面岛', '上下九'], hours: 8 },
          { day: 3, theme: '欢乐长隆', list: ['长隆欢乐世界'], hours: 11 },
          { day: 4, theme: '羊城八景', list: ['白云山', '越秀公园', '北京路'], hours: 8 }
        ]
      },
      niche: {
        name: '广州小众市井3日',
        days: 3,
        tagline: '老广的市井烟火气',
        spots: ['永庆坊', '东山口', '海珠湿地', '龟岗大马路', '红专厂'],
        dayPlan: [
          { day: 1, theme: '老城焕新', list: ['永庆坊', '李小龙故居', '荔枝湾'], hours: 8 },
          { day: 2, theme: '小红楼区', list: ['东山口', '龟岗大马路', '新河浦'], hours: 7 },
          { day: 3, theme: '艺术湿地', list: ['红专厂', '海珠湿地'], hours: 8 }
        ]
      },
      culture: {
        name: '广州人文5日',
        days: 5,
        tagline: '海上丝路与近代革命',
        spots: ['南越王博物院', '陈家祠', '黄埔军校旧址', '中山纪念堂', '十三行博物馆'],
        dayPlan: [
          { day: 1, theme: '南越古国', list: ['南越王博物院'], hours: 6 },
          { day: 2, theme: '岭南建筑', list: ['陈家祠', '广东民间工艺博物馆'], hours: 7 },
          { day: 3, theme: '海上丝路', list: ['十三行博物馆', '沙面建筑群'], hours: 7 },
          { day: 4, theme: '黄埔军魂', list: ['黄埔军校旧址', '辛亥革命纪念馆'], hours: 7 },
          { day: 5, theme: '近代风云', list: ['中山纪念堂', '广州起义纪念馆', '农讲所旧址'], hours: 8 }
        ]
      },
      nature: {
        name: '广州自然3日',
        days: 3,
        tagline: '都市山水与湿地',
        spots: ['白云山', '海珠湿地', '从化温泉', '帽峰山'],
        dayPlan: [
          { day: 1, theme: '羊城肺叶', list: ['白云山', '麓湖公园'], hours: 8 },
          { day: 2, theme: '湿地生态', list: ['海珠湿地公园'], hours: 7 },
          { day: 3, theme: '温泉养生', list: ['从化温泉', '石门国家森林公园'], hours: 9 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '广州塔(小蛮腰)',
          rank: 1,
          intro: '高600米，世界第二高塔，独特扭转造型，登顶可俯瞰珠江全景。',
          coord: [113.319, 23.106],
          photoSpots: [
            { name: '海心沙公园', pose: '隔江拍摄塔身全景，黄昏蓝调最佳' },
            { name: '蜘蛛侠栈道', pose: '塔顶户外长椅人物背景全城' }
          ],
          food: [
            { name: '璇玑旋转餐厅', star: 5, desc: '塔上自助' }
          ],
          duration: 3,
          ticket: 150,
          tip: '日落+夜景套票最划算'
        },
        {
          name: '陈家祠',
          rank: 2,
          intro: '岭南建筑明珠，集广东民间工艺三绝(石雕/木雕/砖雕)之大成。',
          coord: [113.241, 23.128],
          photoSpots: [
            { name: '中进聚贤堂前', pose: '屋脊灰塑全景仰拍' },
            { name: '后院花罩', pose: '雕花门框做画框' }
          ],
          food: [
            { name: '陶陶居酒家', star: 5, desc: '广府茶点老字号' },
            { name: '银记肠粉', star: 5, desc: '布拉肠鼻祖' }
          ],
          duration: 2.5,
          ticket: 10,
          tip: '一号线陈家祠站直达'
        },
        {
          name: '沙面岛',
          rank: 3,
          intro: '清末英法租界，留存150余栋西洋建筑，欧陆风情写真胜地。',
          coord: [113.241, 23.107],
          photoSpots: [
            { name: '露德圣母堂前', pose: '哥特尖顶+鲜花构图' },
            { name: '沙面大街', pose: '老榕树+欧式洋楼街景' }
          ],
          food: [
            { name: '胜记云吞面', star: 4, desc: '本地老味道' }
          ],
          duration: 2,
          ticket: 0,
          tip: '建议早上8-10点游客最少'
        },
        {
          name: '长隆欢乐世界',
          rank: 4,
          intro: '中国大型主题乐园之一，过山车王国，包含十环过山车、垂直过山车等极限项目。',
          coord: [113.328, 22.989],
          photoSpots: [
            { name: '十环过山车前', pose: '巨大轨道做背景' }
          ],
          food: [
            { name: '园内餐饮', star: 3, desc: '主题餐厅多样' }
          ],
          duration: 10,
          ticket: 350,
          tip: '建议工作日去人少'
        },
        {
          name: '珠江夜游',
          rank: 5,
          intro: '一江两岸尽收眼底，从天字码头出发，夜色中广州塔与海心桥灯光秀美轮美奂。',
          coord: [113.265, 23.117],
          photoSpots: [
            { name: '游船甲板', pose: '人物背对珠江夜景剪影' }
          ],
          food: [
            { name: '船上自助', star: 3, desc: '可选含餐套餐' }
          ],
          duration: 1.5,
          ticket: 100,
          tip: '推荐天字码头8点首班船'
        }
      ],
      secondary: [
        { name: '上下九步行街', rank: 6, intro: '骑楼商业街，广府小吃集散地。', coord: [113.246, 23.119], photoSpots: [{ name: '骑楼街景', pose: '老街拱廊纵深拍摄' }], food: [{ name: '南信双皮奶', star: 5, desc: '老字号必吃' }], duration: 3, ticket: 0, tip: '夜市最热闹' },
        { name: '白云山', rank: 7, intro: '羊城第一秀，"白云晚望"羊城八景之首。', coord: [113.310, 23.179], photoSpots: [{ name: '摩星岭', pose: '最高峰俯瞰广州城' }], food: [{ name: '山顶素食', star: 3, desc: '景区餐饮' }], duration: 5, ticket: 5, tip: '建议缆车上山' },
        { name: '越秀公园', rank: 8, intro: '广州城市象征"五羊雕塑"所在地。', coord: [113.272, 23.144], photoSpots: [{ name: '五羊雕塑', pose: '广州市标合影' }], food: [{ name: '北京路小吃', star: 4, desc: '步行可达' }], duration: 2, ticket: 0, tip: '与镇海楼连游' },
        { name: '北京路步行街', rank: 9, intro: '广州千年商业中轴，宋代古道遗迹露天展示。', coord: [113.265, 23.128], photoSpots: [{ name: '千年古道', pose: '透明玻璃下古道俯拍' }], food: [{ name: '太平馆西餐厅', star: 4, desc: '广州本土西餐百年' }], duration: 3, ticket: 0, tip: '夜晚最热闹' },
        { name: '南越王博物院', rank: 10, intro: '西汉南越王赵眜墓原址，丝缕玉衣镇馆。', coord: [113.255, 23.139], photoSpots: [{ name: '丝缕玉衣展区', pose: '珍宝细节拍摄(注意闪光禁用)' }], food: [{ name: '大可以餐厅', star: 4, desc: '附近老广料理' }], duration: 2.5, ticket: 0, tip: '免费需预约' }
      ],
      hidden: [
        { name: '永庆坊', rank: 11, intro: '老西关骑楼活化改造，文创+网红店密集。', trend: '+201% 近3月热度', coord: [113.246, 23.119], photoSpots: [{ name: '李小龙故居', pose: '功夫主题摆姿势' }], food: [{ name: '宝华面店', star: 5, desc: '老字号竹升面' }], duration: 3, ticket: 0, tip: '推荐傍晚去' },
        { name: '东山口', rank: 12, intro: '红砖小洋楼+独立设计师店，文艺青年聚集地。', trend: '+178% 近3月热度', coord: [113.293, 23.124], photoSpots: [{ name: '龟岗大马路红砖墙', pose: '复古色调拍摄' }], food: [{ name: '东山口手冲咖啡馆', star: 5, desc: '小众精品店' }], duration: 4, ticket: 0, tip: '小店多周一闭' },
        { name: '海珠湿地', rank: 13, intro: '城央天然湿地，候鸟天堂，亲子徒步圣地。', trend: '+115% 近3月热度', coord: [113.336, 23.073], photoSpots: [{ name: '观鸟台', pose: '长焦拍鸟' }], food: [{ name: '湿地餐厅', star: 3, desc: '园区简餐' }], duration: 4, ticket: 20, tip: '清晨观鸟最佳' }
      ]
    },
    transport: {
      airport: '广州白云国际机场',
      mainStation: '广州站/广州南站/广州东站',
      publicTransit: { metroDailyCost: 35, taxiAvg: 22, busCost: 2 },
      driving: { tollPerDay: 60, fuelPer100km: 65, parking: 60 }
    },
    accommodation: {
      luxury: [
        { name: '广州文华东方酒店', loc: '天河CBD', price: 2080, star: 5, perks: '城市核心奢华' },
        { name: '广州瑰丽酒店', loc: '珠江新城', price: 2680, star: 5, perks: '正对小蛮腰' }
      ],
      mid: [
        { name: '亚朵珠江新城店', loc: '珠江新城', price: 580, star: 4, perks: 'CBD地铁直达' },
        { name: '维也纳长隆店', loc: '长隆景区', price: 480, star: 4, perks: '园区接驳便利' }
      ],
      budget: [
        { name: '汉庭北京路店', loc: '北京路步行街', price: 280, star: 3, perks: '商圈核心' },
        { name: '7天连锁公园前店', loc: '公园前地铁', price: 220, star: 3, perks: '一二号线换乘' }
      ]
    }
  },

  '南京': {
    code: 'nanjing',
    province: '江苏省',
    coord: [118.7969, 32.0603],
    bestSeason: '春季(3-4月)、秋季(10-11月)',
    routes: {
      classic: {
        name: '南京经典4日',
        days: 4,
        tagline: '六朝古都，民国风华',
        spots: ['中山陵', '夫子庙', '总统府', '明孝陵', '玄武湖', '南京博物院', '老门东'],
        dayPlan: [
          { day: 1, theme: '钟山风景', list: ['中山陵', '明孝陵', '美龄宫'], hours: 9 },
          { day: 2, theme: '民国记忆', list: ['总统府', '梅园新村', '颐和路民国公馆区'], hours: 8 },
          { day: 3, theme: '秦淮风韵', list: ['夫子庙', '秦淮河画舫', '老门东', '中华门'], hours: 8 },
          { day: 4, theme: '人文胜地', list: ['南京博物院', '玄武湖', '鸡鸣寺'], hours: 8 }
        ]
      },
      niche: {
        name: '南京小众文艺3日',
        days: 3,
        tagline: '梧桐荫下的小众秘境',
        spots: ['浦口火车站', '颐和路', '清凉山公园', '石头城遗址', '南京艺术学院'],
        dayPlan: [
          { day: 1, theme: '民国铁路', list: ['浦口火车站', '渡江胜利纪念馆'], hours: 7 },
          { day: 2, theme: '梧桐区', list: ['颐和路', '南京艺术学院', '先锋书店'], hours: 7 },
          { day: 3, theme: '城西小众', list: ['清凉山公园', '石头城遗址', '乌龙潭公园'], hours: 7 }
        ]
      },
      culture: {
        name: '南京人文5日',
        days: 5,
        tagline: '六朝金陵深度',
        spots: ['南京博物院', '六朝博物馆', '明孝陵', '朝天宫', '瞻园', '侵华日军南京大屠杀遇难同胞纪念馆'],
        dayPlan: [
          { day: 1, theme: '博物百年', list: ['南京博物院'], hours: 7 },
          { day: 2, theme: '六朝遗韵', list: ['六朝博物馆', '朝天宫', '甘熙故居'], hours: 7 },
          { day: 3, theme: '明清辉煌', list: ['明孝陵', '瞻园', '熙南里'], hours: 8 },
          { day: 4, theme: '园林之美', list: ['瞻园', '愚园(胡家花园)', '随园'], hours: 6 },
          { day: 5, theme: '勿忘历史', list: ['侵华日军南京大屠杀遇难同胞纪念馆', '雨花台'], hours: 7 }
        ]
      },
      nature: {
        name: '南京山水3日',
        days: 3,
        tagline: '钟山玄武的山水画卷',
        spots: ['玄武湖', '紫金山', '栖霞山', '老山国家森林公园'],
        dayPlan: [
          { day: 1, theme: '湖光山色', list: ['玄武湖环湖', '鸡鸣寺'], hours: 7 },
          { day: 2, theme: '紫金主峰', list: ['紫金山天文台', '头陀岭'], hours: 8 },
          { day: 3, theme: '秋染栖霞', list: ['栖霞山(秋季最美)'], hours: 7 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '中山陵',
          rank: 1,
          intro: '孙中山先生陵寝，建筑师吕彦直设计，"自由钟"意象，392级台阶象征当时全国人口。',
          coord: [118.853, 32.058],
          photoSpots: [
            { name: '博爱牌坊', pose: '中线对称构图，仰拍蓝天白云' },
            { name: '台阶顶端回望', pose: '中山陵392级台阶纵深感' }
          ],
          food: [
            { name: '南京大牌档', star: 5, desc: '本帮老字号' },
            { name: '小郑酥烧饼', star: 4, desc: '街边老字号' }
          ],
          duration: 3,
          ticket: 0,
          tip: '免费需预约，周一闭馆'
        },
        {
          name: '夫子庙·秦淮风光带',
          rank: 2,
          intro: '六朝金粉地，孔庙学宫科举博物馆+秦淮河画舫夜游一体。',
          coord: [118.788, 32.022],
          photoSpots: [
            { name: '大成殿前', pose: '夜景红灯笼下汉服合影' },
            { name: '画舫上', pose: '坐船拍两岸灯火' }
          ],
          food: [
            { name: '秦淮八绝', star: 5, desc: '永和园+蒋有记+奇芳阁' }
          ],
          duration: 4,
          ticket: 50,
          tip: '夜晚最美，元宵节灯会盛大'
        },
        {
          name: '总统府',
          rank: 3,
          intro: '中国近代史活化石，太平天国天王府+民国总统府旧址，建筑融合中西。',
          coord: [118.795, 32.046],
          photoSpots: [
            { name: '正门子超楼', pose: '民国大门正面合影' },
            { name: '煦园太平湖', pose: '园林水景中式构图' }
          ],
          food: [
            { name: '李记锅贴', star: 5, desc: '南京老字号' }
          ],
          duration: 3,
          ticket: 35,
          tip: '需2小时以上，建议请讲解'
        },
        {
          name: '明孝陵',
          rank: 4,
          intro: '世界文化遗产，朱元璋陵寝，神道两侧石象生石翁仲精美。',
          coord: [118.831, 32.055],
          photoSpots: [
            { name: '神道石象路', pose: '秋季银杏路+石兽长廊' },
            { name: '明楼', pose: '红墙黄瓦正面构图' }
          ],
          food: [
            { name: '梅花茶坊', star: 4, desc: '景区茶歇' }
          ],
          duration: 3,
          ticket: 70,
          tip: '与中山陵景区联票更划算'
        },
        {
          name: '南京博物院',
          rank: 5,
          intro: '中国三大博物馆之一，43万件藏品，民国馆完整还原民国南京街景。',
          coord: [118.828, 32.043],
          photoSpots: [
            { name: '民国馆', pose: '复古服装街景写真' },
            { name: '历史馆青铜', pose: '镇馆之宝细节(禁闪光)' }
          ],
          food: [
            { name: '南博茶餐厅', star: 4, desc: '院内民国风茶点' }
          ],
          duration: 4,
          ticket: 0,
          tip: '需预约，周一闭馆'
        }
      ],
      secondary: [
        { name: '玄武湖', rank: 6, intro: '皇家园林湖泊，南京"翡翠项链"。', coord: [118.794, 32.077], photoSpots: [{ name: '环湖步道', pose: '春樱秋桂背景人像' }], food: [{ name: '湖畔茶座', star: 3, desc: '休闲简餐' }], duration: 3, ticket: 0, tip: '免门票，划船另收' },
        { name: '老门东', rank: 7, intro: '复建明清街区，南京小吃文创地。', coord: [118.785, 32.014], photoSpots: [{ name: '老城墙下', pose: '青砖小巷复古调' }], food: [{ name: '蓝老大糖粥藕', star: 5, desc: '老门东必吃' }], duration: 3, ticket: 0, tip: '夜景灯笼最美' },
        { name: '中华门', rank: 8, intro: '世界最大瓮城，明城墙保存最完整段。', coord: [118.778, 32.011], photoSpots: [{ name: '城墙顶', pose: '俯拍马道与瓮城' }], food: [{ name: '门东牛肉锅贴', star: 4, desc: '城墙下小吃' }], duration: 2, ticket: 50, tip: '可步行整段明城墙' },
        { name: '鸡鸣寺', rank: 9, intro: '"南朝四百八十寺"之首，3月樱花路著名。', coord: [118.798, 32.060], photoSpots: [{ name: '鸡鸣寺路樱花', pose: '3月樱花隧道' }], food: [{ name: '鸡鸣寺素面', star: 5, desc: '寺内供应' }], duration: 2, ticket: 10, tip: '3月樱花季人多' },
        { name: '颐和路民国公馆', rank: 10, intro: '梧桐街+民国老洋房，电影场景常拍地。', coord: [118.781, 32.066], photoSpots: [{ name: '颐和路12号片区', pose: '梧桐叶下复古' }], food: [{ name: '马台街小吃', star: 4, desc: '街区附近老南京' }], duration: 2, ticket: 0, tip: '深秋落叶最美' }
      ],
      hidden: [
        { name: '浦口火车站', rank: 11, intro: '朱自清《背影》原型站，民国铁路博物馆。', trend: '+167% 近3月热度', coord: [118.711, 32.108], photoSpots: [{ name: '老月台', pose: '铁轨怀旧大片' }], food: [{ name: '浦口大桥老馆子', star: 4, desc: '本地家常' }], duration: 3, ticket: 0, tip: '免费但需预约' },
        { name: '清凉山·扫叶楼', rank: 12, intro: '南唐避暑行宫遗址，绿树阴中静谧无人。', trend: '+98% 近3月热度', coord: [118.760, 32.066], photoSpots: [{ name: '崇正书院', pose: '古建斗拱细节' }], food: [{ name: '清凉门小吃', star: 4, desc: '街区老馆' }], duration: 2, ticket: 5, tip: '工作日游客极少' },
        { name: '先锋书店五台山店', rank: 13, intro: '"中国最美书店"，地下停车场改造文化地标。', trend: '+87% 近3月热度', coord: [118.778, 32.046], photoSpots: [{ name: '十字架斜坡', pose: '书架长廊纵深' }], food: [{ name: '书店咖啡', star: 4, desc: '店内自营' }], duration: 1.5, ticket: 0, tip: '名书签可买带走' }
      ]
    },
    transport: {
      airport: '南京禄口国际机场',
      mainStation: '南京站/南京南站',
      publicTransit: { metroDailyCost: 28, taxiAvg: 22, busCost: 2 },
      driving: { tollPerDay: 70, fuelPer100km: 60, parking: 40 }
    },
    accommodation: {
      luxury: [
        { name: '南京金陵饭店', loc: '新街口', price: 1280, star: 5, perks: '城市地标老牌五星' },
        { name: '南京涵碧楼', loc: '玄武湖畔', price: 2280, star: 5, perks: '设计酒店湖景' }
      ],
      mid: [
        { name: '亚朵新街口店', loc: '新街口', price: 520, star: 4, perks: '一二号线换乘' },
        { name: '美居中山陵店', loc: '苜蓿园地铁', price: 460, star: 4, perks: '近中山陵' }
      ],
      budget: [
        { name: '汉庭夫子庙店', loc: '夫子庙', price: 260, star: 3, perks: '步行至秦淮河' },
        { name: '7天连锁老门东店', loc: '老门东', price: 220, star: 3, perks: '景区附近' }
      ]
    }
  },

  '苏州': {
    code: 'suzhou',
    province: '江苏省',
    coord: [120.5853, 31.2989],
    bestSeason: '春季(3-5月)、秋季(9-11月)',
    routes: {
      classic: {
        name: '苏州经典3日',
        days: 3,
        tagline: '园林甲天下',
        spots: ['拙政园', '留园', '虎丘', '寒山寺', '平江路', '苏州博物馆', '观前街'],
        dayPlan: [
          { day: 1, theme: '园林之首', list: ['拙政园', '苏州博物馆', '狮子林'], hours: 8 },
          { day: 2, theme: '园林之冠', list: ['留园', '虎丘', '寒山寺'], hours: 9 },
          { day: 3, theme: '姑苏水乡', list: ['平江路', '观前街', '山塘街夜游'], hours: 7 }
        ]
      },
      niche: {
        name: '苏州小众水乡3日',
        days: 3,
        tagline: '远离人潮的姑苏',
        spots: ['同里古镇', '木渎古镇', '甪直古镇', '光福镇'],
        dayPlan: [
          { day: 1, theme: '退思园同里', list: ['同里古镇', '退思园'], hours: 8 },
          { day: 2, theme: '诗意木渎', list: ['木渎古镇', '严家花园', '虹饮山房'], hours: 7 },
          { day: 3, theme: '甪直水巷', list: ['甪直古镇', '保圣寺'], hours: 7 }
        ]
      },
      culture: {
        name: '苏州人文4日',
        days: 4,
        tagline: '吴文化深度浸润',
        spots: ['苏州博物馆', '拙政园', '昆曲博物馆', '苏州丝绸博物馆', '碑刻博物馆'],
        dayPlan: [
          { day: 1, theme: '贝聿铭杰作', list: ['苏州博物馆', '忠王府'], hours: 7 },
          { day: 2, theme: '园林文化', list: ['拙政园', '狮子林', '园林博物馆'], hours: 8 },
          { day: 3, theme: '昆曲评弹', list: ['昆曲博物馆', '评弹博物馆', '平江路茶馆听评弹'], hours: 7 },
          { day: 4, theme: '丝绸文明', list: ['苏州丝绸博物馆', '碑刻博物馆', '文庙'], hours: 7 }
        ]
      },
      nature: {
        name: '苏州山水3日',
        days: 3,
        tagline: '太湖与香山',
        spots: ['太湖', '西山岛', '东山岛', '天平山'],
        dayPlan: [
          { day: 1, theme: '太湖明珠', list: ['西山明月湾古村', '林屋洞', '石公山'], hours: 9 },
          { day: 2, theme: '东山碧螺', list: ['东山岛雕花楼', '陆巷古村'], hours: 8 },
          { day: 3, theme: '红叶天平', list: ['天平山', '范仲淹纪念馆'], hours: 7 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '拙政园',
          rank: 1,
          intro: '中国四大名园之首，明代园林代表，世界文化遗产。',
          coord: [120.629, 31.325],
          photoSpots: [
            { name: '远香堂前', pose: '荷塘+亭台对称构图' },
            { name: '小飞虹廊桥', pose: '廊桥水景做画框' }
          ],
          food: [
            { name: '松鹤楼', star: 5, desc: '苏帮菜老字号' },
            { name: '桃花源记', star: 4, desc: '园林餐厅' }
          ],
          duration: 3,
          ticket: 90,
          tip: '建议早开园进入避人潮'
        },
        {
          name: '留园',
          rank: 2,
          intro: '中国四大名园之一，清代园林代表，建筑空间艺术巅峰。',
          coord: [120.604, 31.324],
          photoSpots: [
            { name: '冠云峰前', pose: '太湖石+建筑古典构图' },
            { name: '曲廊', pose: '漏窗+人物剪影' }
          ],
          food: [
            { name: '得月楼', star: 5, desc: '苏式糕点' }
          ],
          duration: 2.5,
          ticket: 55,
          tip: '与拙政园联票更优惠'
        },
        {
          name: '虎丘',
          rank: 3,
          intro: '"吴中第一名胜"，斜塔(虎丘塔)与吴王阖闾墓所在。',
          coord: [120.585, 31.343],
          photoSpots: [
            { name: '虎丘塔下', pose: '斜塔仰角拍摄' },
            { name: '剑池', pose: '神秘古迹细节' }
          ],
          food: [
            { name: '虎丘豆腐花', star: 4, desc: '景区门口小吃' }
          ],
          duration: 2.5,
          ticket: 80,
          tip: '虎丘塔斜度堪比比萨斜塔'
        },
        {
          name: '苏州博物馆',
          rank: 4,
          intro: '贝聿铭封山之作，传统园林+现代极简的完美融合。',
          coord: [120.629, 31.325],
          photoSpots: [
            { name: '主庭院', pose: '白墙黑瓦+片石假山' },
            { name: '茶室', pose: '几何线条窗景' }
          ],
          food: [
            { name: '博物馆茶室', star: 4, desc: '苏式糕点' }
          ],
          duration: 2.5,
          ticket: 0,
          tip: '需预约，周一闭馆'
        },
        {
          name: '平江路',
          rank: 5,
          intro: '保存最完好的姑苏古街，"水陆并行、河街相邻"双棋盘格局。',
          coord: [120.629, 31.314],
          photoSpots: [
            { name: '思婆桥', pose: '小桥流水汉服' },
            { name: '猫的天空之城', pose: '文艺小店窗前' }
          ],
          food: [
            { name: '哑巴生煎', star: 5, desc: '本地老字号' },
            { name: '鸡爪', star: 4, desc: '酥香入味' }
          ],
          duration: 3,
          ticket: 0,
          tip: '夜晚灯笼最美'
        }
      ],
      secondary: [
        { name: '狮子林', rank: 6, intro: '元代园林代表，假山迷宫趣味十足。', coord: [120.633, 31.323], photoSpots: [{ name: '假山深处', pose: '迷宫感构图' }], food: [{ name: '采芝斋', star: 5, desc: '苏式糖果老字号' }], duration: 2, ticket: 40, tip: '与拙政园相邻' },
        { name: '寒山寺', rank: 7, intro: '"姑苏城外寒山寺，夜半钟声到客船"。', coord: [120.567, 31.310], photoSpots: [{ name: '寒山寺钟楼', pose: '红墙古钟特写' }], food: [{ name: '枫桥糕团店', star: 4, desc: '寺旁小吃' }], duration: 1.5, ticket: 20, tip: '元旦撞钟最热闹' },
        { name: '观前街', rank: 8, intro: '苏州第一商业老街，玄妙观坐镇。', coord: [120.626, 31.310], photoSpots: [{ name: '玄妙观广场', pose: '老街市集' }], food: [{ name: '黄天源糕团', star: 5, desc: '百年苏式糕团' }], duration: 2, ticket: 0, tip: '夜晚最热闹' },
        { name: '山塘街', rank: 9, intro: '"七里山塘"白居易开凿，水陆并行老街。', coord: [120.595, 31.336], photoSpots: [{ name: '通贵桥', pose: '夜景画舫灯火' }], food: [{ name: '采芝斋山塘店', star: 4, desc: '老字号' }], duration: 2.5, ticket: 0, tip: '夜游最美' },
        { name: '同里古镇', rank: 10, intro: '退思园所在，江南六大古镇之一。', coord: [120.715, 31.166], photoSpots: [{ name: '三桥(太平/吉利/长庆)', pose: '小桥流水拱桥' }], food: [{ name: '袜底酥', star: 4, desc: '同里特色点心' }], duration: 5, ticket: 100, tip: '建议住一晚体验夜景' }
      ],
      hidden: [
        { name: '木渎古镇', rank: 11, intro: '吴中第一镇，乾隆六下江南均临此。', trend: '+148% 近3月热度', coord: [120.479, 31.265], photoSpots: [{ name: '严家花园', pose: '园林深处听戏' }], food: [{ name: '石家饭店鲃肺汤', star: 5, desc: '木渎名菜' }], duration: 4, ticket: 78, tip: '比同里游客少很多' },
        { name: '明月湾古村', rank: 12, intro: '太湖西山岛上千年古村，藏在山林深处。', trend: '+126% 近3月热度', coord: [120.273, 31.108], photoSpots: [{ name: '古樟王', pose: '千年古樟下' }], food: [{ name: '太湖三白', star: 5, desc: '当地特色' }], duration: 3, ticket: 50, tip: '春季碧螺春茶季最佳' },
        { name: '昆曲博物馆', rank: 13, intro: '中国第一座昆曲博物馆，每周末定期演出。', trend: '+88% 近3月热度', coord: [120.625, 31.313], photoSpots: [{ name: '古戏台', pose: '檐下戏台仰拍' }], food: [{ name: '茶馆点心', star: 4, desc: '听戏配茶' }], duration: 2, ticket: 0, tip: '免费需预约' }
      ]
    },
    transport: {
      airport: '苏州无机场，使用上海虹桥/无锡硕放/上海浦东',
      mainStation: '苏州站/苏州北站/苏州园区站',
      publicTransit: { metroDailyCost: 22, taxiAvg: 18, busCost: 1 },
      driving: { tollPerDay: 50, fuelPer100km: 55, parking: 30 }
    },
    accommodation: {
      luxury: [
        { name: '苏州W酒店', loc: '工业园区金鸡湖', price: 1880, star: 5, perks: '湖景设计酒店' },
        { name: '吴宫泛太平洋酒店', loc: '盘门景区', price: 1080, star: 5, perks: '园林式园景房' }
      ],
      mid: [
        { name: '亚朵观前街店', loc: '观前街', price: 520, star: 4, perks: '商圈核心' },
        { name: '美居拙政园店', loc: '拙政园边', price: 480, star: 4, perks: '步行至景区' }
      ],
      budget: [
        { name: '汉庭平江路店', loc: '平江路口', price: 260, star: 3, perks: '步行至古街' },
        { name: '7天连锁山塘店', loc: '山塘街', price: 220, star: 3, perks: '老街附近' }
      ]
    }
  },

  '青岛': {
    code: 'qingdao',
    province: '山东省',
    coord: [120.3826, 36.0671],
    bestSeason: '夏季(6-9月)',
    routes: {
      classic: {
        name: '山东经典5日(青岛+泰山+曲阜)',
        days: 5,
        tagline: '海滨+泰山+三孔',
        spots: ['八大关', '栈桥', '崂山', '泰山', '三孔(曲阜)', '台东夜市'],
        dayPlan: [
          { day: 1, theme: '红瓦绿树', list: ['栈桥', '小青岛', '八大关', '第二海水浴场'], hours: 8 },
          { day: 2, theme: '海上仙山', list: ['崂山(巨峰+太清宫)'], hours: 9 },
          { day: 3, theme: '泰山日出', list: ['泰山(夜爬看日出)'], hours: 12 },
          { day: 4, theme: '儒家圣地', list: ['曲阜三孔(孔府/孔庙/孔林)'], hours: 8 },
          { day: 5, theme: '青岛美食', list: ['台东夜市', '啤酒博物馆', '万象城'], hours: 7 }
        ]
      },
      niche: {
        name: '青岛小众老街3日',
        days: 3,
        tagline: '德式老城与渔村',
        spots: ['鱼山路', '大学路', '小麦岛', '渔人码头'],
        dayPlan: [
          { day: 1, theme: '鱼山文人', list: ['鱼山路', '大学路', '老舍故居'], hours: 7 },
          { day: 2, theme: '小红墙网红', list: ['信号山', '总督府旧址', '青岛书房'], hours: 7 },
          { day: 3, theme: '海角秘境', list: ['小麦岛', '燕儿岛山公园', '渔人码头'], hours: 7 }
        ]
      },
      culture: {
        name: '山东人文6日',
        days: 6,
        tagline: '齐鲁文化深度行',
        spots: ['青岛博物馆', '栈桥', '泰山', '曲阜三孔', '济南趵突泉', '大明湖'],
        dayPlan: [
          { day: 1, theme: '德式建筑', list: ['天主教堂', '总督府旧址', '迎宾馆'], hours: 7 },
          { day: 2, theme: '青岛海防', list: ['青岛博物馆', '海军博物馆'], hours: 7 },
          { day: 3, theme: '五岳之首', list: ['泰山天街+岱庙'], hours: 11 },
          { day: 4, theme: '至圣先师', list: ['孔庙', '孔府', '孔林'], hours: 8 },
          { day: 5, theme: '泉水甲天下', list: ['趵突泉', '大明湖', '芙蓉街'], hours: 8 },
          { day: 6, theme: '海岛回归', list: ['崂山太清宫', '青岛啤酒博物馆'], hours: 8 }
        ]
      },
      nature: {
        name: '山东山海4日',
        days: 4,
        tagline: '崂山泰山一并征服',
        spots: ['崂山', '泰山', '蓬莱阁', '日照海滨'],
        dayPlan: [
          { day: 1, theme: '海上名山', list: ['崂山(巨峰索道)'], hours: 9 },
          { day: 2, theme: '岱宗夫如何', list: ['泰山(中天门索道)'], hours: 10 },
          { day: 3, theme: '人间仙境', list: ['蓬莱阁', '八仙渡海口'], hours: 8 },
          { day: 4, theme: '阳光海岸', list: ['日照万平口', '太公岛'], hours: 8 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '栈桥',
          rank: 1,
          intro: '青岛地标，1892年清军码头，伸入海中440米，回澜阁中式飞檐。',
          coord: [120.318, 36.058],
          photoSpots: [
            { name: '回澜阁前', pose: '海浪+回澜阁仰拍' },
            { name: '栈桥引桥', pose: '清晨或日落人少时漫步' }
          ],
          food: [
            { name: '春和楼', star: 5, desc: '鲁菜百年老字号' }
          ],
          duration: 1.5,
          ticket: 0,
          tip: '退潮时可下沙滩'
        },
        {
          name: '八大关',
          rank: 2,
          intro: '万国建筑博览会，二十多国别墅风格集萃，"东方第二瑞士"。',
          coord: [120.350, 36.057],
          photoSpots: [
            { name: '花石楼', pose: '德国古堡式建筑' },
            { name: '居庸关路紫薇花', pose: '夏季紫色花海街道' }
          ],
          food: [
            { name: '小红楼牛排', star: 4, desc: '老式西餐' }
          ],
          duration: 3,
          ticket: 0,
          tip: '建议骑行游览'
        },
        {
          name: '崂山',
          rank: 3,
          intro: '海上第一名山，道教圣地，太清宫蒲松龄写就《聊斋志异》多篇。',
          coord: [120.620, 36.165],
          photoSpots: [
            { name: '巨峰顶', pose: '云海日出大片' },
            { name: '太清宫前', pose: '古道观+古树' }
          ],
          food: [
            { name: '崂山海鲜', star: 5, desc: '景区附近渔家' }
          ],
          duration: 8,
          ticket: 90,
          tip: '巨峰+太清宫一日游较紧凑，建议分两天'
        },
        {
          name: '泰山',
          rank: 4,
          intro: '五岳独尊，世界自然与文化双遗产，登泰山而小天下。',
          coord: [117.122, 36.250],
          photoSpots: [
            { name: '玉皇顶', pose: '日出云海' },
            { name: '南天门', pose: '陡峭石阶仰拍' }
          ],
          food: [
            { name: '泰山三美', star: 5, desc: '白菜豆腐水' }
          ],
          duration: 12,
          ticket: 115,
          tip: '夜爬18盘观日出经典'
        },
        {
          name: '曲阜三孔',
          rank: 5,
          intro: '世界文化遗产，孔子故里，孔庙孔府孔林一票联通。',
          coord: [116.991, 35.595],
          photoSpots: [
            { name: '大成殿', pose: '孔庙正殿全景' },
            { name: '孔林古树', pose: '万木森森拱卫孔墓' }
          ],
          food: [
            { name: '孔府宴', star: 5, desc: '中国第一官府菜' }
          ],
          duration: 6,
          ticket: 140,
          tip: '联票3天有效，含三孔'
        }
      ],
      secondary: [
        { name: '青岛啤酒博物馆', rank: 6, intro: '青啤百年史，含原浆品鉴。', coord: [120.339, 36.077], photoSpots: [{ name: '老厂房', pose: '工业风建筑' }], food: [{ name: '啤酒大虾', star: 5, desc: '青岛人最爱' }], duration: 2.5, ticket: 80, tip: '凭票送两杯啤酒' },
        { name: '小麦岛', rank: 7, intro: '小红书爆红的免费海岛公园。', coord: [120.428, 36.080], photoSpots: [{ name: '草坪+海岸线', pose: '日落金光人像' }], food: [{ name: '岛上简餐', star: 3, desc: '海边咖啡' }], duration: 2, ticket: 0, tip: '夏季傍晚最美' },
        { name: '台东商业街', rank: 8, intro: '青岛最大夜市，海鲜烧烤一条街。', coord: [120.378, 36.078], photoSpots: [{ name: '夜市灯火', pose: '人头攒动夜景' }], food: [{ name: '海鲜烧烤', star: 5, desc: '现场加工' }], duration: 3, ticket: 0, tip: '夜晚最热闹' },
        { name: '济南趵突泉', rank: 9, intro: '"天下第一泉"，李清照纪念馆所在。', coord: [117.014, 36.660], photoSpots: [{ name: '趵突泉池', pose: '三股泉涌特写' }], food: [{ name: '芙蓉街小吃', star: 4, desc: '老济南味道' }], duration: 2.5, ticket: 40, tip: '与大明湖联游' },
        { name: '蓬莱阁', rank: 10, intro: '中国四大名楼，八仙过海传说源地。', coord: [120.752, 37.819], photoSpots: [{ name: '蓬莱阁主楼', pose: '海上观楼' }], food: [{ name: '蓬莱小面', star: 4, desc: '当地特色' }], duration: 4, ticket: 100, tip: '海市蜃楼可遇不可求' }
      ],
      hidden: [
        { name: '大学路+鱼山路', rank: 11, intro: '小红墙文艺街区，民国老建筑林立。', trend: '+193% 近3月热度', coord: [120.336, 36.064], photoSpots: [{ name: '小红墙', pose: '红墙绿树拐角网红打卡' }], food: [{ name: '青岛书房咖啡', star: 4, desc: '老建筑改造书店' }], duration: 3, ticket: 0, tip: '工作日上午人少' },
        { name: '燕儿岛山公园', rank: 12, intro: '青岛人本地秘境，礁石海岸看日出。', trend: '+136% 近3月热度', coord: [120.434, 36.058], photoSpots: [{ name: '礁石栈道', pose: '礁石+海浪长曝光' }], food: [{ name: '渔人码头海鲜', star: 5, desc: '渔民现卖' }], duration: 2.5, ticket: 0, tip: '日出时分最美' },
        { name: '台儿庄古城', rank: 13, intro: '运河古城，抗战遗址重建，夜景媲美乌镇。', trend: '+97% 近3月热度', coord: [117.734, 34.561], photoSpots: [{ name: '运河水街', pose: '夜景灯火画舫' }], food: [{ name: '台儿庄运河特色', star: 4, desc: '当地小吃' }], duration: 6, ticket: 160, tip: '可住古城内体验夜晚' }
      ]
    },
    transport: {
      airport: '青岛胶东国际机场',
      mainStation: '青岛站/青岛北站',
      publicTransit: { metroDailyCost: 25, taxiAvg: 20, busCost: 1 },
      driving: { tollPerDay: 70, fuelPer100km: 60, parking: 35 }
    },
    accommodation: {
      luxury: [
        { name: '青岛涵碧楼', loc: '崂山区', price: 2280, star: 5, perks: '滨海设计酒店' },
        { name: '青岛海天大酒店', loc: '香港中路', price: 1380, star: 5, perks: '老牌商务地标' }
      ],
      mid: [
        { name: '亚朵八大关店', loc: '八大关', price: 580, star: 4, perks: '步行至景区' },
        { name: '美居栈桥店', loc: '栈桥', price: 480, star: 4, perks: '老城核心' }
      ],
      budget: [
        { name: '汉庭台东店', loc: '台东商圈', price: 280, star: 3, perks: '夜市便利' },
        { name: '7天连锁火车站店', loc: '青岛站', price: 220, star: 3, perks: '交通便利' }
      ]
    }
  },

  '厦门': {
    code: 'xiamen',
    province: '福建省',
    coord: [118.0894, 24.4798],
    bestSeason: '秋冬季(10-3月)',
    routes: {
      classic: {
        name: '厦门经典4日',
        days: 4,
        tagline: '鼓浪屿+环岛路+土楼',
        spots: ['鼓浪屿', '南普陀寺', '厦门大学', '环岛路', '中山路', '南靖土楼', '曾厝垵'],
        dayPlan: [
          { day: 1, theme: '海上花园', list: ['鼓浪屿(全岛)'], hours: 9 },
          { day: 2, theme: '人文厦大', list: ['南普陀寺', '厦门大学', '白城沙滩'], hours: 8 },
          { day: 3, theme: '土楼世遗', list: ['南靖田螺坑+云水谣土楼群'], hours: 11 },
          { day: 4, theme: '滨海骑行', list: ['环岛路', '黄厝海滩', '中山路', '曾厝垵'], hours: 8 }
        ]
      },
      niche: {
        name: '厦门小众文艺3日',
        days: 3,
        tagline: '文青的厦门腔调',
        spots: ['沙坡尾', '八市', '顶澳仔猫街', '园博苑', '集美学村'],
        dayPlan: [
          { day: 1, theme: '老厦门市井', list: ['沙坡尾', '八市', '中山路'], hours: 7 },
          { day: 2, theme: '猫与艺术', list: ['顶澳仔猫街', '海湾公园'], hours: 6 },
          { day: 3, theme: '陈嘉庚学村', list: ['集美学村', '集美鳌园', '园博苑'], hours: 8 }
        ]
      },
      culture: {
        name: '福建人文5日',
        days: 5,
        tagline: '土楼+海丝文化',
        spots: ['福建土楼', '泉州开元寺', '厦门博物馆', '陈嘉庚故居', '古老华侨建筑'],
        dayPlan: [
          { day: 1, theme: '厦门人文', list: ['南普陀寺', '厦门博物馆', '华侨博物院'], hours: 8 },
          { day: 2, theme: '土楼传奇', list: ['南靖田螺坑', '塔下村', '云水谣'], hours: 11 },
          { day: 3, theme: '泉州海丝', list: ['开元寺', '清净寺', '泉州海外交通史博物馆'], hours: 9 },
          { day: 4, theme: '泉州古城', list: ['西街+东西塔', '关岳庙', '中山路骑楼'], hours: 8 },
          { day: 5, theme: '集美风骨', list: ['集美学村', '陈嘉庚故居', '鳌园'], hours: 8 }
        ]
      },
      nature: {
        name: '福建山海4日',
        days: 4,
        tagline: '武夷山+海岛',
        spots: ['武夷山', '霞浦滩涂', '环岛路', '鼓浪屿日光岩'],
        dayPlan: [
          { day: 1, theme: '丹山碧水', list: ['武夷山九曲溪+天游峰'], hours: 10 },
          { day: 2, theme: '霞浦风光', list: ['霞浦北岐滩涂日落', '小皓海滩'], hours: 8 },
          { day: 3, theme: '环岛海滨', list: ['环岛路骑行', '黄厝沙滩'], hours: 7 },
          { day: 4, theme: '鼓浪望海', list: ['日光岩', '皓月园', '菽庄花园'], hours: 7 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '鼓浪屿',
          rank: 1,
          intro: '世界文化遗产，琴岛万国建筑博览，无车小岛，闽南文化与西洋风情交融。',
          coord: [118.071, 24.443],
          photoSpots: [
            { name: '日光岩顶', pose: '俯瞰整岛红顶建筑' },
            { name: '菽庄花园', pose: '亭台与海景' }
          ],
          food: [
            { name: '叶氏麻糍', star: 5, desc: '百年小吃' },
            { name: '原巷口鱼丸', star: 5, desc: '鼓浪屿名小吃' }
          ],
          duration: 8,
          ticket: 100,
          tip: '需提前订船票，五大景点联票'
        },
        {
          name: '厦门大学',
          rank: 2,
          intro: '陈嘉庚创办，"中国最美校园"之一，芙蓉湖+情人谷+白城沙滩串成线。',
          coord: [118.099, 24.435],
          photoSpots: [
            { name: '芙蓉隧道', pose: '涂鸦隧道艺术墙' },
            { name: '上弦场', pose: '看台俯瞰沙滩' }
          ],
          food: [
            { name: '厦大芙蓉餐厅', star: 4, desc: '校园食堂' }
          ],
          duration: 3,
          ticket: 0,
          tip: '需预约入校，节假日不开放'
        },
        {
          name: '南普陀寺',
          rank: 3,
          intro: '闽南佛教圣地，与厦大相邻，五老峰下千年古刹。',
          coord: [118.097, 24.439],
          photoSpots: [
            { name: '大悲殿', pose: '红墙翘檐特写' },
            { name: '五老峰俯瞰', pose: '寺庙与厦大全景' }
          ],
          food: [
            { name: '南普陀素斋', star: 5, desc: '佛门名斋' }
          ],
          duration: 2,
          ticket: 0,
          tip: '免费需预约'
        },
        {
          name: '南靖土楼',
          rank: 4,
          intro: '世界文化遗产，土楼王(承启楼)+田螺坑五朵金花+云水谣古道。',
          coord: [117.183, 24.502],
          photoSpots: [
            { name: '田螺坑观景台', pose: '"四菜一汤"五楼俯拍' },
            { name: '云水谣榕树下', pose: '《云水谣》电影场景' }
          ],
          food: [
            { name: '南靖客家菜', star: 4, desc: '土楼内农家' }
          ],
          duration: 8,
          ticket: 130,
          tip: '从厦门高铁2小时可达'
        },
        {
          name: '环岛路',
          rank: 5,
          intro: '"中国最美马拉松赛道"，骑行/跑步看大海，黄厝段最美。',
          coord: [118.149, 24.439],
          photoSpots: [
            { name: '一国两制宣传墙', pose: '面向金门' },
            { name: '椰风寨', pose: '椰树+大海' }
          ],
          food: [
            { name: '黄厝海鲜大排档', star: 4, desc: '海边大排档' }
          ],
          duration: 4,
          ticket: 0,
          tip: '租自行车环岛骑行最佳'
        }
      ],
      secondary: [
        { name: '中山路', rank: 6, intro: '骑楼商业街，闽南老字号美食一条街。', coord: [118.082, 24.452], photoSpots: [{ name: '骑楼街景', pose: '老南洋骑楼夜景' }], food: [{ name: '黄则和花生汤', star: 5, desc: '百年老字号' }], duration: 2.5, ticket: 0, tip: '夜晚最热闹' },
        { name: '曾厝垵', rank: 7, intro: '"中国最文艺渔村"，民宿+小吃+文创聚集。', coord: [118.140, 24.437], photoSpots: [{ name: '渔村巷子', pose: '彩色文艺墙绘' }], food: [{ name: '土笋冻', star: 4, desc: '闽南特色' }], duration: 3, ticket: 0, tip: '夜晚灯笼最美' },
        { name: '集美学村', rank: 8, intro: '陈嘉庚倡建，"嘉庚风格"建筑群代表。', coord: [118.103, 24.575], photoSpots: [{ name: '南薰楼', pose: '中西合璧建筑' }], food: [{ name: '集美鱼丸', star: 4, desc: '当地小吃' }], duration: 3, ticket: 0, tip: '免费开放' },
        { name: '泉州开元寺', rank: 9, intro: '世界文化遗产，闽南佛教第一名刹，东西塔为标志。', coord: [118.583, 24.913], photoSpots: [{ name: '东西塔', pose: '南北对称构图' }], food: [{ name: '面线糊', star: 5, desc: '泉州名小吃' }], duration: 3, ticket: 0, tip: '从厦门动车45分钟' },
        { name: '武夷山', rank: 10, intro: '世界双遗产，丹霞地貌+九曲溪竹筏漂流。', coord: [117.677, 27.732], photoSpots: [{ name: '天游峰顶', pose: '九曲溪俯瞰' }], food: [{ name: '武夷山小吃', star: 4, desc: '当地特色' }], duration: 8, ticket: 140, tip: '高铁直达' }
      ],
      hidden: [
        { name: '沙坡尾', rank: 11, intro: '老厦门避风坞改造，咖啡馆+渔船共存。', trend: '+182% 近3月热度', coord: [118.085, 24.443], photoSpots: [{ name: '渔船与咖啡馆', pose: '怀旧文艺' }], food: [{ name: '沙坡尾咖啡馆', star: 4, desc: '设计师店' }], duration: 2.5, ticket: 0, tip: '夜晚酒吧氛围佳' },
        { name: '八市(第八菜市场)', rank: 12, intro: '老厦门最有烟火气的菜市场，藏着无数小吃。', trend: '+143% 近3月热度', coord: [118.082, 24.453], photoSpots: [{ name: '市井摊位', pose: '热腾腾烟火气' }], food: [{ name: '阿杰五香', star: 5, desc: '本地老味道' }], duration: 2, ticket: 0, tip: '清晨人最多' },
        { name: '霞浦滩涂', rank: 13, intro: '"中国最美滩涂"，摄影圣地。', trend: '+105% 近3月热度', coord: [120.001, 26.892], photoSpots: [{ name: '北岐滩涂', pose: '日出日落剪影' }], food: [{ name: '霞浦海鲜', star: 5, desc: '当地新鲜海产' }], duration: 6, ticket: 0, tip: '需查潮汐表' }
      ]
    },
    transport: {
      airport: '厦门高崎国际机场',
      mainStation: '厦门站/厦门北站',
      publicTransit: { metroDailyCost: 22, taxiAvg: 18, busCost: 1 },
      driving: { tollPerDay: 60, fuelPer100km: 60, parking: 30 }
    },
    accommodation: {
      luxury: [
        { name: '厦门海湾凯宾斯基', loc: '观音山海岸', price: 1880, star: 5, perks: '海景房+私家沙滩' },
        { name: '鼓浪屿英南别墅', loc: '鼓浪屿', price: 1580, star: 5, perks: '岛上百年别墅改造' }
      ],
      mid: [
        { name: '亚朵中山路店', loc: '中山路', price: 580, star: 4, perks: '步行至轮渡码头' },
        { name: '美居环岛路店', loc: '黄厝段', price: 520, star: 4, perks: '面海客房' }
      ],
      budget: [
        { name: '汉庭曾厝垵店', loc: '曾厝垵', price: 280, star: 3, perks: '渔村文艺氛围' },
        { name: '7天连锁火车站店', loc: '厦门站', price: 220, star: 3, perks: '交通便利' }
      ]
    }
  },

  '昆明': {
    code: 'kunming',
    province: '云南省',
    coord: [102.7123, 25.0406],
    bestSeason: '四季宜居，3-5月最佳',
    routes: {
      classic: {
        name: '云南经典7日(昆大丽)',
        days: 7,
        tagline: '春城+大理+丽江一线穿',
        spots: ['石林', '滇池', '大理古城', '洱海', '丽江古城', '玉龙雪山', '虎跳峡'],
        dayPlan: [
          { day: 1, theme: '春城风光', list: ['滇池', '海埂大坝', '云南民族村'], hours: 8 },
          { day: 2, theme: '阿诗玛故乡', list: ['石林风景区', '九乡溶洞'], hours: 9 },
          { day: 3, theme: '大理古城', list: ['大理古城', '崇圣寺三塔', '洱海双廊'], hours: 8 },
          { day: 4, theme: '苍山洱海', list: ['苍山索道', '喜洲古镇', '洱海环湖'], hours: 9 },
          { day: 5, theme: '丽江古城', list: ['丽江古城', '木府', '黑龙潭', '酒吧街'], hours: 8 },
          { day: 6, theme: '玉龙雪山', list: ['玉龙雪山+蓝月谷+冰川索道'], hours: 10 },
          { day: 7, theme: '虎跳奇观', list: ['虎跳峡', '束河古镇'], hours: 9 }
        ]
      },
      niche: {
        name: '云南小众秘境4日',
        days: 4,
        tagline: '远离人潮的香格里拉',
        spots: ['普者黑', '坝美', '罗平油菜花', '弥勒东风韵'],
        dayPlan: [
          { day: 1, theme: '世外桃源', list: ['坝美村'], hours: 8 },
          { day: 2, theme: '荷塘月色', list: ['普者黑(青龙山+仙人洞)'], hours: 9 },
          { day: 3, theme: '万亩花海', list: ['罗平油菜花海', '九龙瀑布'], hours: 8 },
          { day: 4, theme: '葡萄艺术', list: ['弥勒东风韵小镇', '湖泉生态园'], hours: 7 }
        ]
      },
      culture: {
        name: '云南人文6日',
        days: 6,
        tagline: '多民族文化深度行',
        spots: ['云南省博物馆', '建水古城', '丽江木府', '香格里拉松赞林寺', '腾冲和顺古镇'],
        dayPlan: [
          { day: 1, theme: '云南通史', list: ['云南省博物馆', '官渡古镇'], hours: 7 },
          { day: 2, theme: '建水临安', list: ['建水古城', '朱家花园', '燕子洞'], hours: 8 },
          { day: 3, theme: '滇南瑰宝', list: ['元阳哈尼梯田'], hours: 9 },
          { day: 4, theme: '木氏土司', list: ['丽江木府', '黑龙潭', '丽江古城'], hours: 8 },
          { day: 5, theme: '小布达拉', list: ['噶丹·松赞林寺', '独克宗古城'], hours: 9 },
          { day: 6, theme: '侨乡和顺', list: ['和顺古镇', '腾冲热海'], hours: 9 }
        ]
      },
      nature: {
        name: '云南自然5日',
        days: 5,
        tagline: '雪山湖泊与梯田',
        spots: ['玉龙雪山', '泸沽湖', '梅里雪山', '元阳梯田'],
        dayPlan: [
          { day: 1, theme: '玉龙雪山', list: ['玉龙雪山+蓝月谷+冰川公园'], hours: 10 },
          { day: 2, theme: '神秘女儿国', list: ['泸沽湖环湖+里格半岛'], hours: 11 },
          { day: 3, theme: '日照金山', list: ['梅里雪山(飞来寺观景台)'], hours: 9 },
          { day: 4, theme: '哈尼梯田', list: ['元阳梯田(多依树+老虎嘴)'], hours: 10 },
          { day: 5, theme: '春城归途', list: ['西山龙门', '滇池'], hours: 7 }
        ]
      }
    },
    attractions: {
      mustSee: [
        {
          name: '石林风景区',
          rank: 1,
          intro: '世界自然遗产，2.7亿年喀斯特地貌，"阿诗玛"故乡，奇峰异石如剑如戟。',
          coord: [103.330, 24.808],
          photoSpots: [
            { name: '大石林', pose: '剑峰群仰拍' },
            { name: '阿诗玛石', pose: '少数民族服饰合影' }
          ],
          food: [
            { name: '彝族烤全羊', star: 5, desc: '景区附近彝家乐' }
          ],
          duration: 4,
          ticket: 130,
          tip: '电瓶车30元另收，建议步行'
        },
        {
          name: '滇池',
          rank: 2,
          intro: '云南最大高原湖泊，海埂大坝冬季红嘴鸥来访，"五百里滇池"之美。',
          coord: [102.690, 24.852],
          photoSpots: [
            { name: '海埂大坝', pose: '冬季喂海鸥' },
            { name: '西山龙门', pose: '俯瞰滇池全景' }
          ],
          food: [
            { name: '建新园过桥米线', star: 5, desc: '昆明老字号' }
          ],
          duration: 4,
          ticket: 0,
          tip: '11月-3月红嘴鸥季最美'
        },
        {
          name: '大理古城+洱海',
          rank: 3,
          intro: '南诏国都遗址，苍山洱海间的千年古城，环洱海骑行/自驾必体验。',
          coord: [100.156, 25.692],
          photoSpots: [
            { name: '洱海生态廊道', pose: '海菜花/网红玻璃球' },
            { name: '崇圣寺三塔', pose: '苍山下三塔倒影' }
          ],
          food: [
            { name: '酸辣鱼', star: 5, desc: '大理白族特色' },
            { name: '喜洲粑粑', star: 4, desc: '街边小吃' }
          ],
          duration: 8,
          ticket: 0,
          tip: '建议环洱海自驾2天'
        },
        {
          name: '丽江古城+玉龙雪山',
          rank: 4,
          intro: '世界文化遗产，纳西木府文化+玉龙雪山+蓝月谷一线游。',
          coord: [100.234, 26.872],
          photoSpots: [
            { name: '丽江古城大水车', pose: '古城地标' },
            { name: '蓝月谷', pose: '冰川蓝水奇观' }
          ],
          food: [
            { name: '腊排骨火锅', star: 5, desc: '丽江名菜' },
            { name: '丽江粑粑', star: 4, desc: '街边小吃' }
          ],
          duration: 12,
          ticket: 230,
          tip: '雪山套票含氧气瓶，3-5月雪量最佳'
        },
        {
          name: '崇圣寺三塔',
          rank: 5,
          intro: '大理国皇家寺院，千寻塔1100年屹立，与苍山雪、洱海月相映。',
          coord: [100.142, 25.703],
          photoSpots: [
            { name: '聚影池', pose: '三塔倒影对称构图' }
          ],
          food: [
            { name: '寺旁素斋', star: 4, desc: '清淡养生' }
          ],
          duration: 2,
          ticket: 75,
          tip: '电瓶车上行节省体力'
        }
      ],
      secondary: [
        { name: '云南民族村', rank: 6, intro: '26个民族村寨集中展示，泼水节常驻。', coord: [102.682, 24.952], photoSpots: [{ name: '傣族泼水', pose: '夏季每日表演' }], food: [{ name: '云南十八怪美食广场', star: 4, desc: '小吃集合' }], duration: 4, ticket: 90, tip: '与滇池连游' },
        { name: '九乡风景区', rank: 7, intro: '"地下天宫"溶洞奇观，与石林联游。', coord: [103.371, 25.145], photoSpots: [{ name: '神田', pose: '钟乳石如梯田' }], food: [{ name: '彝家小吃', star: 4, desc: '景区附近' }], duration: 3, ticket: 90, tip: '注意洞内防滑' },
        { name: '香格里拉松赞林寺', rank: 8, intro: '"小布达拉宫"，云南藏传佛教第一寺。', coord: [99.703, 27.866], photoSpots: [{ name: '寺前湖泊', pose: '寺与雪山倒影' }], food: [{ name: '酥油茶+糌粑', star: 4, desc: '藏餐体验' }], duration: 3, ticket: 115, tip: '海拔3380米，注意高反' },
        { name: '元阳哈尼梯田', rank: 9, intro: '世界文化遗产，哈尼族千年梯田，云海日出大片。', coord: [102.835, 23.137], photoSpots: [{ name: '多依树日出', pose: '云雾梯田金光' }], food: [{ name: '哈尼蘸水鸡', star: 5, desc: '当地特色' }], duration: 5, ticket: 100, tip: '11月-3月最美' },
        { name: '腾冲和顺古镇', rank: 10, intro: '中国第一魅力名镇，侨乡文化深厚。', coord: [98.474, 25.026], photoSpots: [{ name: '双虹桥', pose: '古镇水景' }], food: [{ name: '大救驾(炒饵块)', star: 5, desc: '腾冲名菜' }], duration: 4, ticket: 55, tip: '与腾冲热海连游' }
      ],
      hidden: [
        { name: '坝美村', rank: 11, intro: '陶渊明笔下"世外桃源"现实版，需穿洞乘船入村。', trend: '+227% 近3月热度', coord: [104.992, 24.022], photoSpots: [{ name: '入村洞口', pose: '神秘秘境感' }], food: [{ name: '壮家簸箕宴', star: 4, desc: '当地特色' }], duration: 5, ticket: 100, tip: '从昆明需7小时车程' },
        { name: '普者黑', rank: 12, intro: '《三生三世十里桃花》取景地，喀斯特+万亩荷花。', trend: '+165% 近3月热度', coord: [104.083, 24.122], photoSpots: [{ name: '青龙山顶', pose: '俯瞰湖泊喀斯特' }], food: [{ name: '辣椒鸡', star: 4, desc: '彝族风味' }], duration: 6, ticket: 95, tip: '7-8月荷花季最美' },
        { name: '弥勒东风韵小镇', rank: 13, intro: '艺术家罗旭打造的红砖艺术建筑群，葡萄酒庄园。', trend: '+118% 近3月热度', coord: [103.418, 24.408], photoSpots: [{ name: '万花筒艺术馆', pose: '红砖建筑独特造型' }], food: [{ name: '葡萄酒+西餐', star: 4, desc: '酒庄餐厅' }], duration: 4, ticket: 0, tip: '从昆明1.5小时高铁' }
      ]
    },
    transport: {
      airport: '昆明长水国际机场',
      mainStation: '昆明站/昆明南站',
      publicTransit: { metroDailyCost: 25, taxiAvg: 18, busCost: 2 },
      driving: { tollPerDay: 80, fuelPer100km: 65, parking: 25 }
    },
    accommodation: {
      luxury: [
        { name: '昆明洲际酒店', loc: '滇池度假区', price: 1280, star: 5, perks: '滇池湖景' },
        { name: '丽江悦榕庄', loc: '丽江束河', price: 3280, star: 5, perks: '雪山美景庭院别墅' }
      ],
      mid: [
        { name: '亚朵翠湖店', loc: '翠湖公园', price: 520, star: 4, perks: '昆明老城核心' },
        { name: '丽江花间堂', loc: '丽江古城', price: 680, star: 4, perks: '纳西风情精品民宿' }
      ],
      budget: [
        { name: '汉庭翠湖店', loc: '翠湖', price: 240, star: 3, perks: '步行至云大' },
        { name: '7天连锁丽江古城店', loc: '丽江古城北门', price: 220, star: 3, perks: '步入古城' }
      ]
    }
  }
};

// 4类路线类型定义
window.ROUTE_TYPES = {
  classic: { label: '经典路线', icon: '🏛️', color: '#d4af37', desc: '热门必去地标全覆盖' },
  niche: { label: '小众路线', icon: '🌿', color: '#7fb069', desc: '避开人潮发现真正的目的地' },
  culture: { label: '人文路线', icon: '📜', color: '#c4634b', desc: '历史文化深度沉浸' },
  nature: { label: '自然风景', icon: '⛰️', color: '#4a90b8', desc: '山水田园生态游' }
};

// 偏好画像问题
window.PREFERENCE_QUESTIONS = [
  {
    id: 'budget',
    q: '本次旅游预算大约多少？',
    type: 'number',
    placeholder: '例如：5000',
    suffix: '元/人',
    icon: '💰'
  },
  {
    id: 'companions',
    q: '本次出行是否有小孩或老人同行？',
    type: 'select',
    options: [
      { value: 'none', label: '都是成年人' },
      { value: 'kids', label: '有小孩(<12岁)' },
      { value: 'elder', label: '有老人(>65岁)' },
      { value: 'both', label: '小孩老人都有' }
    ],
    icon: '👨‍👩‍👧'
  },
  {
    id: 'transport',
    q: '本次计划主要采用什么出行方式？',
    type: 'select',
    options: [
      { value: 'public', label: '公共交通(地铁/公交/打车)' },
      { value: 'rentcar', label: '租车自驾' },
      { value: 'owncar', label: '自己开车' },
      { value: 'mixed', label: '混合方式' }
    ],
    icon: '🚗'
  },
  {
    id: 'preference',
    q: '更偏好哪类景点？',
    type: 'select',
    options: [
      { value: 'hot', label: '热门景点(必打卡地标)' },
      { value: 'niche', label: '小众景点(深度避坑)' },
      { value: 'both', label: '兼顾(经典+小众)' }
    ],
    icon: '🎯'
  }
];

console.log('[CITY_DATABASE] Loaded:', Object.keys(window.CITY_DATABASE).length, 'cities');
