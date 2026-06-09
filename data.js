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
  },

  '重庆': {
    code: 'chongqing',
    province: '重庆市',
    coord: [106.5516, 29.5630],
    bestSeason: '春秋最佳(3-5月/9-11月)，夏季极热',
    routes: {
      classic: {
        name: '重庆经典4日',
        days: 4,
        tagline: '魔幻山城+火锅江湖',
        spots: ['洪崖洞', '解放碑', '磁器口', '长江索道', '武隆天坑', '大足石刻'],
        dayPlan: [
          { day: 1, theme: '魔幻山城', list: ['解放碑', '洪崖洞', '长江索道', '南山一棵树夜景'], hours: 8 },
          { day: 2, theme: '古镇人文', list: ['磁器口', '白公馆', '渣滓洞', '李子坝轻轨穿楼'], hours: 8 },
          { day: 3, theme: '世遗石刻', list: ['大足石刻(宝顶山+北山)'], hours: 9 },
          { day: 4, theme: '天坑地缝', list: ['武隆天生三桥', '龙水峡地缝'], hours: 10 }
        ]
      },
      niche: {
        name: '重庆小众3日',
        days: 3,
        tagline: '山城腹地的隐秘江湖',
        spots: ['交通茶馆', '山城步道', '鹅岭二厂', '弹子石老街', '黄桷坪涂鸦街'],
        dayPlan: [
          { day: 1, theme: '老重庆', list: ['交通茶馆', '山城步道', '十八梯'], hours: 7 },
          { day: 2, theme: '文创艺术', list: ['鹅岭二厂', '黄桷坪涂鸦街', '川美'], hours: 7 },
          { day: 3, theme: '江岸秘境', list: ['弹子石老街', '龙门浩老街', '南滨路'], hours: 7 }
        ]
      },
      culture: {
        name: '重庆人文5日',
        days: 5,
        tagline: '抗战陪都+巴渝文化深度行',
        spots: ['大足石刻', '三峡博物馆', '人民大礼堂', '白公馆', '钓鱼城'],
        dayPlan: [
          { day: 1, theme: '三峡文明', list: ['中国三峡博物馆', '人民大礼堂'], hours: 7 },
          { day: 2, theme: '红岩精神', list: ['白公馆', '渣滓洞', '红岩革命纪念馆'], hours: 8 },
          { day: 3, theme: '世遗佛教', list: ['大足石刻(全程讲解)'], hours: 9 },
          { day: 4, theme: '古战场', list: ['钓鱼城(合川)'], hours: 8 },
          { day: 5, theme: '巴渝古镇', list: ['磁器口', '湖广会馆', '罗汉寺'], hours: 7 }
        ]
      },
      nature: {
        name: '重庆山水4日',
        days: 4,
        tagline: '喀斯特奇观+长江峡谷',
        spots: ['武隆天生三桥', '芙蓉洞', '黑山谷', '金佛山'],
        dayPlan: [
          { day: 1, theme: '天坑奇观', list: ['武隆天生三桥', '龙水峡地缝'], hours: 9 },
          { day: 2, theme: '溶洞王国', list: ['芙蓉洞', '芙蓉江'], hours: 8 },
          { day: 3, theme: '峡谷秘境', list: ['黑山谷(全程步道)'], hours: 9 },
          { day: 4, theme: '南方雪山', list: ['金佛山'], hours: 8 }
        ]
      }
    },
    attractions: {
      mustSee: [
        { name: '洪崖洞', rank: 1, intro: '魔幻山城地标，11层吊脚楼群夜晚灯火通明如千与千寻现实版，重庆必打卡NO.1。', coord: [106.578, 29.562], photoSpots: [{ name: '千厮门大桥', pose: '隔江拍夜景全景' }, { name: '11层平台', pose: '俯瞰嘉陵江' }], food: [{ name: '花市豌杂面', star: 5, desc: '重庆小面标杆' }], duration: 2.5, ticket: 0, tip: '晚6点亮灯后最美' },
        { name: '武隆天生三桥', rank: 2, intro: '世界自然遗产，三座天然石拱桥+天坑群，变形金刚4取景地。', coord: [107.747, 29.327], photoSpots: [{ name: '天龙桥下', pose: '仰拍桥洞天光' }, { name: '天福官驿', pose: '电影取景点' }], food: [{ name: '武隆碗碗羊肉', star: 4, desc: '当地特色' }], duration: 4, ticket: 135, tip: '需预留整日' },
        { name: '大足石刻', rank: 3, intro: '世界文化遗产，唐宋摩崖石刻5万余尊，宝顶山大佛湾为核心。', coord: [105.703, 29.700], photoSpots: [{ name: '千手观音', pose: '金碧辉煌修复后' }, { name: '卧佛', pose: '31米释迦涅槃像' }], food: [{ name: '大足邮亭鲫鱼', star: 5, desc: '当地名菜' }], duration: 4, ticket: 115, tip: '建议请讲解' },
        { name: '磁器口古镇', rank: 4, intro: '千年巴渝古镇，明清建筑+老茶馆+非遗手艺，小重庆称号。', coord: [106.448, 29.580], photoSpots: [{ name: '古镇牌坊', pose: '老街纵深' }], food: [{ name: '陈麻花', star: 5, desc: '磁器口特产' }, { name: '毛血旺', star: 5, desc: '磁器口发源' }], duration: 3, ticket: 0, tip: '工作日人少' },
        { name: '长江索道', rank: 5, intro: '唯一跨长江城市客运索道，万里长江第一条空中走廊。', coord: [106.585, 29.558], photoSpots: [{ name: '索道车厢内', pose: '江景全景' }], food: [{ name: '好又来酸辣粉', star: 5, desc: '网红小吃' }], duration: 1, ticket: 20, tip: '单程4分钟，建议南→北' }
      ],
      secondary: [
        { name: '解放碑', rank: 6, intro: '重庆CBD地标，西南最繁华商圈。', coord: [106.578, 29.558], photoSpots: [{ name: '碑下', pose: '标志性合影' }], food: [{ name: '八一好吃街', star: 5, desc: '小吃一条街' }], duration: 2, ticket: 0, tip: '夜晚灯火最美' },
        { name: '李子坝轻轨穿楼', rank: 7, intro: '轻轨2号线穿越居民楼，魔幻城市名片。', coord: [106.519, 29.553], photoSpots: [{ name: '观景平台', pose: '列车穿楼瞬间' }], food: [{ name: '梯坎豆花', star: 4, desc: '附近老店' }], duration: 0.5, ticket: 0, tip: '等一班车约3分钟' },
        { name: '南山一棵树', rank: 8, intro: '俯瞰渝中半岛夜景最佳观景台。', coord: [106.584, 29.533], photoSpots: [{ name: '观景台', pose: '长曝光城市夜景' }], food: [{ name: '南山泉水鸡', star: 5, desc: '南山名菜' }], duration: 2, ticket: 30, tip: '日落后45分钟最美' },
        { name: '人民大礼堂', rank: 9, intro: '仿天坛造型，重庆地标建筑。', coord: [106.555, 29.558], photoSpots: [{ name: '正面广场', pose: '对称构图' }], food: [{ name: '洞子火锅', star: 5, desc: '防空洞内吃火锅' }], duration: 1, ticket: 10, tip: '与三峡博物馆隔广场' },
        { name: '芙蓉洞', rank: 10, intro: '世界三大洞穴之一，钟乳石种类数世界第一。', coord: [107.900, 29.232], photoSpots: [{ name: '辉煌大厅', pose: '彩灯钟乳石' }], food: [{ name: '武隆烤鱼', star: 4, desc: '当地特色' }], duration: 2.5, ticket: 120, tip: '洞内恒温15℃' }
      ],
      hidden: [
        { name: '交通茶馆', rank: 11, intro: '重庆最后的老茶馆，原汁原味山城市井生活。', trend: '+245% 近3月热度', coord: [106.449, 29.580], photoSpots: [{ name: '茶馆内景', pose: '烟雾缭绕老重庆' }], food: [{ name: '盖碗茶', star: 5, desc: '10元一碗' }], duration: 2, ticket: 0, tip: '下午最有氛围' },
        { name: '鹅岭二厂', rank: 12, intro: '老印刷厂改造文创园，从你的全世界路过取景地。', trend: '+156% 近3月热度', coord: [106.537, 29.561], photoSpots: [{ name: '天台', pose: '俯瞰两江' }], food: [{ name: '二厂咖啡', star: 4, desc: '文艺空间' }], duration: 2.5, ticket: 0, tip: '文创店周一多休' },
        { name: '黑山谷', rank: 13, intro: '亚洲最大生态峡谷，全程13km步道+浮桥+栈道。', trend: '+108% 近3月热度', coord: [106.966, 28.864], photoSpots: [{ name: '悬空栈道', pose: '峡谷深处' }], food: [{ name: '万盛烤全羊', star: 4, desc: '景区附近' }], duration: 6, ticket: 100, tip: '建议北门进' }
      ]
    },
    transport: {
      airport: '重庆江北国际机场',
      mainStation: '重庆北站/重庆西站',
      publicTransit: { metroDailyCost: 30, taxiAvg: 20, busCost: 2 },
      driving: { tollPerDay: 80, fuelPer100km: 65, parking: 50 }
    },
    accommodation: {
      luxury: [
        { name: '重庆洲际酒店', loc: '解放碑', price: 1580, star: 5, perks: '俯瞰两江' },
        { name: '柏联温泉酒店', loc: '北碚', price: 2280, star: 5, perks: '温泉度假' },
        { name: '丽晶酒店', loc: '江北嘴', price: 1380, star: 5, perks: '江景无敌' }
      ],
      mid: [
        { name: '亚朵解放碑店', loc: '解放碑', price: 520, star: 4, perks: '步行至洪崖洞' },
        { name: '美居南滨路店', loc: '南滨路', price: 480, star: 4, perks: '江景房' },
        { name: '全季磁器口店', loc: '磁器口', price: 420, star: 4, perks: '古镇旁' }
      ],
      budget: [
        { name: '汉庭解放碑店', loc: '解放碑', price: 280, star: 3, perks: '商圈核心' },
        { name: '7天连锁磁器口店', loc: '磁器口', price: 220, star: 3, perks: '古镇旁' },
        { name: '如家朝天门店', loc: '朝天门', price: 240, star: 3, perks: '码头便利' }
      ]
    }
  },

  '长沙': {
    code: 'changsha',
    province: '湖南省',
    coord: [112.9388, 28.2282],
    bestSeason: '春秋最佳(3-5月/9-11月)',
    routes: {
      classic: {
        name: '长沙经典3日',
        days: 3,
        tagline: '橘洲看万山红遍+美食天堂',
        spots: ['橘子洲', '岳麓山', '太平街', '湖南省博物馆', '坡子街'],
        dayPlan: [
          { day: 1, theme: '湘江风光', list: ['橘子洲', '岳麓山', '岳麓书院', '爱晚亭'], hours: 8 },
          { day: 2, theme: '文化探索', list: ['湖南省博物馆(马王堆)', '天心阁', '简牍博物馆'], hours: 8 },
          { day: 3, theme: '美食漫步', list: ['太平街', '坡子街', '黄兴路步行街'], hours: 7 }
        ]
      },
      niche: {
        name: '长沙文艺3日',
        days: 3,
        tagline: '超级文和友之外的长沙',
        spots: ['谢子龙影像艺术馆', '后湖艺术区', '白果园', '化龙池'],
        dayPlan: [
          { day: 1, theme: '艺术地标', list: ['谢子龙影像艺术馆', '李自健美术馆', '后湖艺术区'], hours: 7 },
          { day: 2, theme: '老城巷弄', list: ['白果园', '都正街', '化龙池'], hours: 7 },
          { day: 3, theme: '文艺漫游', list: ['止间书店', '长沙当代美术馆', '裕湘纱厂'], hours: 7 }
        ]
      },
      culture: {
        name: '长沙人文4日',
        days: 4,
        tagline: '湖湘文化源头',
        spots: ['湖南省博物馆', '岳麓书院', '铜官窑', '贾谊故居'],
        dayPlan: [
          { day: 1, theme: '辛追之谜', list: ['湖南省博物馆(辛追夫人+T形帛画)'], hours: 6 },
          { day: 2, theme: '千年学府', list: ['岳麓书院', '中国书院博物馆', '爱晚亭'], hours: 7 },
          { day: 3, theme: '陶瓷之源', list: ['铜官窑国家考古遗址公园', '铜官古镇'], hours: 8 },
          { day: 4, theme: '近代湖湘', list: ['贾谊故居', '第一师范', '开福寺'], hours: 7 }
        ]
      },
      nature: {
        name: '长沙周边山水3日',
        days: 3,
        tagline: '岳麓红叶+大围山',
        spots: ['岳麓山', '大围山', '浏阳河'],
        dayPlan: [
          { day: 1, theme: '麓山红叶', list: ['岳麓山', '爱晚亭', '麓山寺'], hours: 7 },
          { day: 2, theme: '杜鹃花海', list: ['大围山国家森林公园'], hours: 9 },
          { day: 3, theme: '浏阳古镇', list: ['浏阳河', '文家市秋收起义纪念馆'], hours: 8 }
        ]
      }
    },
    attractions: {
      mustSee: [
        { name: '橘子洲', rank: 1, intro: '湘江中央5km长洲，毛泽东青年艺术雕塑32米高，独立寒秋湘江北去诗境地。', coord: [112.959, 28.191], photoSpots: [{ name: '毛泽东青年雕塑', pose: '正面仰拍+蓝天' }, { name: '洲头', pose: '远眺湘江两岸' }], food: [{ name: '臭豆腐', star: 5, desc: '黑色经典' }], duration: 3, ticket: 0, tip: '免费需预约' },
        { name: '岳麓山', rank: 2, intro: '中国四大书院之首岳麓书院所在，千年学府传承不断，爱晚亭红叶全国知名。', coord: [112.932, 28.186], photoSpots: [{ name: '爱晚亭', pose: '深秋红叶合影' }, { name: '岳麓书院大门', pose: '惟楚有才对联' }], food: [{ name: '帅哥烧饼', star: 4, desc: '网红小吃' }], duration: 4, ticket: 50, tip: '书院票50元山门免费' },
        { name: '湖南省博物馆', rank: 3, intro: '马王堆汉墓出土辛追夫人/T形帛画/素纱单衣等国宝，新馆2017年开放。', coord: [112.980, 28.212], photoSpots: [{ name: '辛追展厅', pose: '2100年不腐之谜(禁闪光)' }], food: [{ name: '博物馆简餐', star: 3, desc: '内部餐厅' }], duration: 4, ticket: 0, tip: '需预约周一闭馆' },
        { name: '太平街', rank: 4, intro: '长沙最完整明清古街，贾谊故居所在，湘菜小吃集散地。', coord: [112.972, 28.196], photoSpots: [{ name: '贾谊故居门前', pose: '古建汉服' }], food: [{ name: '文和友', star: 5, desc: '排队名店' }, { name: '茶颜悦色', star: 5, desc: '长沙茶饮名片' }], duration: 3, ticket: 0, tip: '夜晚人最多' },
        { name: '坡子街', rank: 5, intro: '长沙美食第一街，火宫殿/向群锅饺等老字号林立。', coord: [112.968, 28.193], photoSpots: [{ name: '火宫殿牌坊', pose: '老字号招牌' }], food: [{ name: '火宫殿臭豆腐', star: 5, desc: '百年老字号' }, { name: '糖油粑粑', star: 5, desc: '湘味小吃' }], duration: 3, ticket: 0, tip: '晚6点后最热闹' }
      ],
      secondary: [
        { name: '天心阁', rank: 6, intro: '长沙古城标志，始建于明代。', coord: [112.979, 28.189], photoSpots: [{ name: '城楼', pose: '古城墙合影' }], food: [{ name: '天心阁小吃', star: 4, desc: '老街' }], duration: 2, ticket: 32, tip: '含古城墙' },
        { name: 'IFS国金中心', rank: 7, intro: 'KAWS雕塑打卡点，城市观景台。', coord: [112.976, 28.195], photoSpots: [{ name: 'KAWS雕塑', pose: '楼顶巨型公仔' }], food: [{ name: '楼内美食', star: 4, desc: '高端商场' }], duration: 2, ticket: 0, tip: '7楼空中花园免费' },
        { name: '铜官窑', rank: 8, intro: '唐代外销瓷窑址，世界釉下彩发源地。', coord: [112.812, 28.375], photoSpots: [{ name: '遗址公园', pose: '古窑体验' }], food: [{ name: '铜官土菜', star: 4, desc: '当地农家' }], duration: 4, ticket: 60, tip: '可体验制陶' },
        { name: '开福寺', rank: 9, intro: '千年古刹，长沙香火最旺之地。', coord: [112.984, 28.221], photoSpots: [{ name: '大雄宝殿', pose: '红墙古树' }], food: [{ name: '素面', star: 4, desc: '斋饭' }], duration: 1.5, ticket: 0, tip: '免费开放' },
        { name: '黄兴路步行街', rank: 10, intro: '长沙最繁华商业街。', coord: [112.976, 28.192], photoSpots: [{ name: '步行街中心', pose: '夜市霓虹' }], food: [{ name: '茶颜悦色(总店)', star: 5, desc: '必喝' }], duration: 2, ticket: 0, tip: '与太平街相连' }
      ],
      hidden: [
        { name: '谢子龙影像艺术馆', rank: 11, intro: '清水混凝土建筑，免费摄影艺术殿堂。', trend: '+198% 近3月热度', coord: [112.912, 28.172], photoSpots: [{ name: '极简建筑外观', pose: '建筑线条构图' }], food: [{ name: '馆内咖啡', star: 4, desc: '文艺空间' }], duration: 2, ticket: 0, tip: '需预约周一闭馆' },
        { name: '白果园', rank: 12, intro: '长沙老城核心巷弄，程潜公馆等历史建筑。', trend: '+134% 近3月热度', coord: [112.974, 28.199], photoSpots: [{ name: '巷弄深处', pose: '老长沙生活' }], food: [{ name: '巷子口粉面', star: 5, desc: '本地老味道' }], duration: 2, ticket: 0, tip: '清晨最有烟火气' },
        { name: '后湖艺术区', rank: 13, intro: '湖南师大旁的文创社区，独立书店+画廊+手作。', trend: '+112% 近3月热度', coord: [112.940, 28.180], photoSpots: [{ name: '湖边步道', pose: '文艺氛围' }], food: [{ name: '独立咖啡馆', star: 4, desc: '精品手冲' }], duration: 2.5, ticket: 0, tip: '周末市集' }
      ]
    },
    transport: {
      airport: '长沙黄花国际机场',
      mainStation: '长沙站/长沙南站',
      publicTransit: { metroDailyCost: 25, taxiAvg: 18, busCost: 2 },
      driving: { tollPerDay: 60, fuelPer100km: 60, parking: 30 }
    },
    accommodation: {
      luxury: [
        { name: '长沙W酒店', loc: '湘江畔', price: 1580, star: 5, perks: '江景设计酒店' },
        { name: '瑞吉酒店', loc: '国金中心', price: 1880, star: 5, perks: 'CBD核心' },
        { name: '长沙君悦', loc: '五一商圈', price: 1380, star: 5, perks: '步行至太平街' }
      ],
      mid: [
        { name: '亚朵五一广场店', loc: '五一广场', price: 520, star: 4, perks: '步行至太平街' },
        { name: '维也纳橘子洲店', loc: '橘子洲', price: 420, star: 4, perks: '近景区' },
        { name: '全季坡子街店', loc: '坡子街', price: 460, star: 4, perks: '美食一条街' }
      ],
      budget: [
        { name: '汉庭太平街店', loc: '太平街', price: 260, star: 3, perks: '老城核心' },
        { name: '7天连锁火车站店', loc: '长沙站', price: 200, star: 3, perks: '交通便利' },
        { name: '如家五一路店', loc: '五一广场', price: 230, star: 3, perks: '商圈地铁口' }
      ]
    }
  },

  '南昌': {
    code: 'nanchang',
    province: '江西省',
    coord: [115.8579, 28.6820],
    bestSeason: '春秋最佳(3-5月/9-11月)，秋天赏候鸟',
    routes: {
      classic: {
        name: '南昌经典3日',
        days: 3,
        tagline: '滕王阁+八一起义+鄱阳湖',
        spots: ['滕王阁', '八一广场', '绳金塔', '秋水广场', '鄱阳湖'],
        dayPlan: [
          { day: 1, theme: '英雄之城', list: ['八一广场', '八一起义纪念馆', '滕王阁', '秋水广场'], hours: 8 },
          { day: 2, theme: '千年名塔', list: ['绳金塔', '万寿宫', '南昌之星摩天轮'], hours: 7 },
          { day: 3, theme: '湖光山色', list: ['鄱阳湖(候鸟保护区)', '梅岭'], hours: 9 }
        ]
      },
      niche: {
        name: '南昌小众2日',
        days: 2,
        tagline: '赣江畔的烟火人间',
        spots: ['万寿宫历史文化街区', '进贤仓', '699文化创意园'],
        dayPlan: [
          { day: 1, theme: '老城巷弄', list: ['万寿宫历史街区', '进贤仓', '叠山路'], hours: 7 },
          { day: 2, theme: '文创漫步', list: ['699文化创意园', '樟树林文化生活公园'], hours: 6 }
        ]
      },
      culture: {
        name: '南昌人文4日',
        days: 4,
        tagline: '物华天宝人杰地灵',
        spots: ['滕王阁', '八一起义纪念馆', '海昏侯博物馆', '梅岭'],
        dayPlan: [
          { day: 1, theme: '千古名篇', list: ['滕王阁', '滕王阁序碑廊'], hours: 5 },
          { day: 2, theme: '军旗升起', list: ['八一起义纪念馆', '朱德旧居', '贺龙指挥部'], hours: 7 },
          { day: 3, theme: '海昏侯国', list: ['海昏侯国遗址博物馆(刘贺墓)'], hours: 6 },
          { day: 4, theme: '西山禅韵', list: ['梅岭', '翠岩禅寺', '狮子峰'], hours: 8 }
        ]
      },
      nature: {
        name: '南昌生态3日',
        days: 3,
        tagline: '鄱阳湖候鸟+梅岭',
        spots: ['鄱阳湖', '梅岭', '象湖'],
        dayPlan: [
          { day: 1, theme: '候鸟天堂', list: ['鄱阳湖候鸟保护区', '吴城古镇'], hours: 9 },
          { day: 2, theme: '梅岭秋色', list: ['梅岭风景区', '狮子峰', '太平心街'], hours: 8 },
          { day: 3, theme: '城市绿肺', list: ['象湖公园', '八大山人纪念馆'], hours: 6 }
        ]
      }
    },
    attractions: {
      mustSee: [
        { name: '滕王阁', rank: 1, intro: '江南三大名楼之首，因王勃滕王阁序而名扬天下，落霞与孤鹜齐飞秋水共长天一色。', coord: [115.883, 28.682], photoSpots: [{ name: '阁前广场', pose: '仰拍全楼与蓝天' }, { name: '顶层', pose: '俯瞰赣江+秋水广场' }], food: [{ name: '南昌拌粉', star: 5, desc: '江西早餐标配' }], duration: 2.5, ticket: 45, tip: '夜晚亮灯更壮观' },
        { name: '八一广场', rank: 2, intro: '南昌起义纪念塔所在，英雄城地标，全国最大城市中心广场之一。', coord: [115.893, 28.677], photoSpots: [{ name: '八一纪念塔', pose: '军旗雕塑前' }], food: [{ name: '瓦罐汤', star: 5, desc: '南昌特色' }], duration: 1.5, ticket: 0, tip: '纪念馆需预约' },
        { name: '绳金塔', rank: 3, intro: '千年古塔+美食街，南昌镇城之宝，始建于唐代。', coord: [115.880, 28.668], photoSpots: [{ name: '塔前', pose: '古塔全景' }], food: [{ name: '绳金塔美食街', star: 5, desc: '南昌小吃集散地' }, { name: '白糖糕', star: 5, desc: '传统点心' }], duration: 2, ticket: 0, tip: '塔身外观免费，美食街夜市最旺' },
        { name: '鄱阳湖', rank: 4, intro: '中国第一大淡水湖，冬季白鹤等候鸟数十万只，世界最重要湿地之一。', coord: [116.167, 29.117], photoSpots: [{ name: '候鸟保护区', pose: '万鸟齐飞(冬季)' }], food: [{ name: '鄱阳湖银鱼', star: 5, desc: '时令湖鲜' }], duration: 5, ticket: 45, tip: '11-3月候鸟季最佳' },
        { name: '秋水广场', rank: 5, intro: '亚洲最大音乐喷泉，赣江畔夜景打卡圣地。', coord: [115.856, 28.668], photoSpots: [{ name: '喷泉全景', pose: '夜晚灯光+水柱' }], food: [{ name: '广场夜市', star: 4, desc: '烧烤小吃' }], duration: 1.5, ticket: 0, tip: '每晚8:00喷泉表演' }
      ],
      secondary: [
        { name: '八一起义纪念馆', rank: 6, intro: '南昌起义总指挥部旧址，军旗升起的地方。', coord: [115.896, 28.681], photoSpots: [{ name: '旧址大门', pose: '红色建筑' }], food: [{ name: '附近赣菜馆', star: 4, desc: '辣椒炒肉' }], duration: 2.5, ticket: 0, tip: '免费需预约' },
        { name: '海昏侯博物馆', rank: 7, intro: '2015年考古大发现，刘贺墓出土文物万余件。', coord: [115.718, 28.802], photoSpots: [{ name: '金饼展厅', pose: '385枚金饼震撼' }], food: [{ name: '博物馆简餐', star: 3, desc: '内部' }], duration: 3, ticket: 0, tip: '需预约，城北较远' },
        { name: '梅岭', rank: 8, intro: '南昌后花园，西山国家森林公园。', coord: [115.738, 28.720], photoSpots: [{ name: '狮子峰', pose: '云海日出' }], food: [{ name: '梅岭农家菜', star: 4, desc: '土鸡汤' }], duration: 4, ticket: 30, tip: '自驾1h' },
        { name: '万寿宫历史街区', rank: 9, intro: '南昌老城改造典范，明清商业街重现。', coord: [115.886, 28.673], photoSpots: [{ name: '牌坊', pose: '古街纵深' }], food: [{ name: '南昌炒粉', star: 5, desc: '锅气十足' }], duration: 2, ticket: 0, tip: '夜市热闹' },
        { name: '南昌之星', rank: 10, intro: '世界第三高摩天轮160米，俯瞰全城。', coord: [115.830, 28.660], photoSpots: [{ name: '摩天轮', pose: '夜晚LED灯光' }], food: [{ name: '赣江畔餐厅', star: 4, desc: '江景位' }], duration: 1.5, ticket: 50, tip: '日落时段最美' }
      ],
      hidden: [
        { name: '699文化创意园', rank: 11, intro: '废旧厂房改造的文创街区，南昌798。', trend: '+167% 近3月热度', coord: [115.918, 28.672], photoSpots: [{ name: '涂鸦墙', pose: '文艺合影' }], food: [{ name: '园内咖啡', star: 4, desc: '精品店' }], duration: 2, ticket: 0, tip: '周末活动多' },
        { name: '进贤仓', rank: 12, intro: '南昌最老的街巷之一，清代粮仓遗址。', trend: '+89% 近3月热度', coord: [115.892, 28.685], photoSpots: [{ name: '老巷深处', pose: '烟火日常' }], food: [{ name: '老南昌米粉', star: 5, desc: '清晨必吃' }], duration: 1.5, ticket: 0, tip: '早起最佳' },
        { name: '八大山人纪念馆', rank: 13, intro: '明末清初画坛巨匠朱耷纪念馆，青云谱道院所在。', trend: '+125% 近3月热度', coord: [115.895, 28.623], photoSpots: [{ name: '道院园林', pose: '古建+荷花(夏)' }], food: [{ name: '素斋', star: 4, desc: '清幽' }], duration: 2, ticket: 0, tip: '周一闭馆' }
      ]
    },
    transport: {
      airport: '南昌昌北国际机场',
      mainStation: '南昌站/南昌西站',
      publicTransit: { metroDailyCost: 20, taxiAvg: 15, busCost: 2 },
      driving: { tollPerDay: 50, fuelPer100km: 55, parking: 25 }
    },
    accommodation: {
      luxury: [
        { name: '南昌力高皇冠假日', loc: '红谷滩', price: 980, star: 5, perks: '赣江江景' },
        { name: '南昌香格里拉', loc: '红谷滩CBD', price: 1180, star: 5, perks: 'CBD核心' },
        { name: '嘉莱特精典酒店', loc: '八一广场', price: 880, star: 5, perks: '老城中心' }
      ],
      mid: [
        { name: '亚朵滕王阁店', loc: '滕王阁旁', price: 420, star: 4, perks: '步行至滕王阁' },
        { name: '全季八一广场店', loc: '八一广场', price: 380, star: 4, perks: '地铁直达' },
        { name: '维也纳绳金塔店', loc: '绳金塔', price: 350, star: 4, perks: '美食街旁' }
      ],
      budget: [
        { name: '汉庭八一广场店', loc: '八一广场', price: 220, star: 3, perks: '核心位置' },
        { name: '7天连锁火车站店', loc: '南昌站', price: 180, star: 3, perks: '交通便利' },
        { name: '如家滕王阁店', loc: '滕王阁', price: 200, star: 3, perks: '景区步行圈' }
      ]
    }
  }
};

// ========== 山西省新增9城市 ==========

// 大同
window.CITY_DATABASE['大同'] = {
  "code": "datong",
  "province": "山西省",
  "coord": [
    113.295,
    40.09
  ],
  "bestSeason": "5-10月，夏秋最佳，避暑胜地，秋季天高气爽",
  "routes": {
    "classic": {
      "name": "石窟古建经典之旅",
      "days": 3,
      "tagline": "穿越千年，感受北魏王朝的石窟艺术与古建瑰宝",
      "spots": [
        "云冈石窟",
        "大同古城墙",
        "华严寺",
        "悬空寺",
        "恒山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "石窟艺术与古城风貌",
          "list": [
            "云冈石窟",
            "大同古城墙"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "辽金古建精华",
          "list": [
            "华严寺",
            "善化寺",
            "九龙壁"
          ],
          "hours": 6
        },
        {
          "day": 3,
          "theme": "悬空奇观与北岳登临",
          "list": [
            "悬空寺",
            "恒山"
          ],
          "hours": 8
        }
      ]
    },
    "niche": {
      "name": "大同秘境探索",
      "days": 2,
      "tagline": "避开人潮，发现大同鲜为人知的地质奇观与古刹",
      "spots": [
        "善化寺",
        "九龙壁",
        "大同土林",
        "大同火山群"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "古城深度文化游",
          "list": [
            "善化寺",
            "九龙壁",
            "法华寺"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "地质奇观探秘",
          "list": [
            "大同土林",
            "大同火山群"
          ],
          "hours": 7
        }
      ]
    },
    "culture": {
      "name": "北魏文化深度游",
      "days": 3,
      "tagline": "追溯北魏文明，解读千年石刻密码与佛教艺术",
      "spots": [
        "云冈石窟",
        "华严寺",
        "善化寺",
        "大同博物馆"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "北魏石刻艺术",
          "list": [
            "云冈石窟",
            "大同博物馆"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "辽金佛教文化",
          "list": [
            "华严寺",
            "善化寺",
            "法华寺"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "边塞历史遗迹",
          "list": [
            "悬空寺",
            "恒山"
          ],
          "hours": 8
        }
      ]
    },
    "nature": {
      "name": "塞北自然风光",
      "days": 2,
      "tagline": "探索塞北大地独特的地质地貌与自然奇观",
      "spots": [
        "恒山",
        "大同土林",
        "大同火山群",
        "桑干河湿地"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "北岳恒山登高",
          "list": [
            "恒山",
            "悬空寺"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "地质自然奇观",
          "list": [
            "大同土林",
            "大同火山群"
          ],
          "hours": 7
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "云冈石窟",
        "rank": 1,
        "intro": "世界文化遗产，中国四大石窟之一，始建于北魏和平年间，现存主要洞窟45个，大小窟龛252个，石雕造像51000余尊，是中国规模最大的古代石窟群之一。",
        "coord": [
          113.133,
          40.11
        ],
        "photoSpots": [
          {
            "name": "第20窟露天大佛前",
            "pose": "正面仰拍大佛全景"
          },
          {
            "name": "第6窟中心塔柱",
            "pose": "侧面拍摄精美浮雕"
          }
        ],
        "food": [
          {
            "name": "凤临阁烧麦",
            "star": 5,
            "desc": "大同百年老字号，招牌百花烧麦皮薄馅大"
          },
          {
            "name": "东方削面",
            "star": 4,
            "desc": "正宗大同刀削面，汤浓面筋"
          }
        ],
        "duration": 4,
        "ticket": 120,
        "tip": "建议请讲解员或租电子导览，旺季建议早上8:30前到达避开人流"
      },
      {
        "name": "悬空寺",
        "rank": 2,
        "intro": "始建于北魏太和十五年，距今已有1500多年历史，是中国仅存的高空绝壁木构建筑，集建筑力学、美学、宗教于一体，被誉为\"天下巨观\"。",
        "coord": [
          113.731,
          39.676
        ],
        "photoSpots": [
          {
            "name": "山脚观景台",
            "pose": "拍摄悬空寺全貌与翠屏峰合影"
          },
          {
            "name": "寺内栈道",
            "pose": "俯拍峡谷深渊"
          }
        ],
        "food": [
          {
            "name": "浑源凉粉",
            "star": 5,
            "desc": "浑源县特色小吃，酸辣爽口"
          },
          {
            "name": "羊杂汤",
            "star": 4,
            "desc": "大同特色早餐，暖胃驱寒"
          }
        ],
        "duration": 2,
        "ticket": 125,
        "tip": "登临票含入园和登寺，限量发售，旺季务必提前网上预约"
      },
      {
        "name": "华严寺",
        "rank": 3,
        "intro": "始建于辽重熙七年，中国现存最大、最完整的辽金佛教寺院，大雄宝殿为中国现存最大的佛殿之一，寺内薄伽教藏殿的辽代彩塑堪称国宝。",
        "coord": [
          113.293,
          40.094
        ],
        "photoSpots": [
          {
            "name": "大雄宝殿前广场",
            "pose": "正面拍摄殿堂全景"
          },
          {
            "name": "华严宝塔上",
            "pose": "俯瞰古城全景"
          }
        ],
        "food": [
          {
            "name": "兔头",
            "star": 4,
            "desc": "大同特色美食，麻辣鲜香"
          },
          {
            "name": "黄糕",
            "star": 4,
            "desc": "大同传统主食，软糯可口"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "可登华严宝塔俯瞰古城全貌，傍晚登塔光线最佳"
      },
      {
        "name": "恒山",
        "rank": 4,
        "intro": "五岳之北岳，自古兵家必争之地，道教名山，主峰天峰岭海拔2016.1米，山势险峻，群峰竞秀，有\"人天北柱\"\"绝塞名山\"之称。",
        "coord": [
          113.73,
          39.68
        ],
        "photoSpots": [
          {
            "name": "恒宗殿前",
            "pose": "仰拍恒山主峰"
          },
          {
            "name": "会仙府",
            "pose": "拍摄云雾缭绕的道观"
          }
        ],
        "food": [
          {
            "name": "浑源凉粉",
            "star": 5,
            "desc": "恒山脚下必吃，配辣椒油绝佳"
          },
          {
            "name": "恒山黄芪茶",
            "star": 3,
            "desc": "当地特产养生茶饮"
          }
        ],
        "duration": 5,
        "ticket": 45,
        "tip": "可与悬空寺同游，建议先游悬空寺再登恒山，注意防晒"
      },
      {
        "name": "大同古城墙",
        "rank": 5,
        "intro": "始建于明洪武五年，周长7.24公里，是中国现存较为完整的明代古城墙之一，夜景灯光秀绚丽壮观，城墙上可骑行或步行环城览胜。",
        "coord": [
          113.287,
          40.092
        ],
        "photoSpots": [
          {
            "name": "永泰门城楼",
            "pose": "夜间拍摄灯光城墙倒影"
          },
          {
            "name": "城墙上东南角",
            "pose": "骑行时拍摄古城全景"
          }
        ],
        "food": [
          {
            "name": "龙聚祥烧麦",
            "star": 5,
            "desc": "古城内知名烧麦馆，多种口味"
          },
          {
            "name": "大同刀削面",
            "star": 5,
            "desc": "街头面馆随处可见正宗风味"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "夜景灯光秀通常在晚8点，建议傍晚登城等待，城墙上可租自行车"
      }
    ],
    "secondary": [
      {
        "name": "九龙壁",
        "rank": 6,
        "intro": "建于明洪武年间，是中国现存规模最大、建筑年代最早的龙壁，长45.5米，高8米，壁面426块琉璃构件拼砌而成，九条巨龙翻腾欲飞。",
        "coord": [
          113.296,
          40.093
        ],
        "photoSpots": [
          {
            "name": "壁前广场",
            "pose": "正面平拍九龙壁全景"
          },
          {
            "name": "倒影池旁",
            "pose": "拍摄龙壁水中倒影"
          }
        ],
        "food": [
          {
            "name": "九转大肠面",
            "star": 3,
            "desc": "附近小馆特色面食"
          },
          {
            "name": "碗托",
            "star": 4,
            "desc": "大同传统小吃，酸辣开胃"
          }
        ],
        "duration": 1,
        "ticket": 10,
        "tip": "与代王府相邻可一并游览，倒影池拍照效果最佳"
      },
      {
        "name": "善化寺",
        "rank": 7,
        "intro": "始建于唐开元年间，中国现存最完整的辽金寺院之一，大雄宝殿为辽代遗构，殿内金代泥塑二十四诸天为雕塑艺术珍品，造型生动传神。",
        "coord": [
          113.292,
          40.088
        ],
        "photoSpots": [
          {
            "name": "大雄宝殿前",
            "pose": "拍摄辽代木构建筑细节"
          },
          {
            "name": "五龙壁前",
            "pose": "与明代五龙壁合影"
          }
        ],
        "food": [
          {
            "name": "素斋",
            "star": 3,
            "desc": "寺内素斋馆提供简餐"
          },
          {
            "name": "刀削面",
            "star": 4,
            "desc": "寺外街巷有多家面馆"
          }
        ],
        "duration": 1.5,
        "ticket": 50,
        "tip": "游客较少，是静心感受辽金建筑与雕塑艺术的好去处"
      },
      {
        "name": "法华寺",
        "rank": 8,
        "intro": "始建于明代，寺内法华塔为大同古城标志性建筑之一，塔高18米，白色覆钵式喇嘛塔，是研究明代佛教建筑的重要实物资料。",
        "coord": [
          113.298,
          40.091
        ],
        "photoSpots": [
          {
            "name": "塔前庭院",
            "pose": "仰拍白色法华塔"
          },
          {
            "name": "寺院侧廊",
            "pose": "拍摄塔与古建同框"
          }
        ],
        "food": [
          {
            "name": "凉粉",
            "star": 3,
            "desc": "周边摊位出售浑源凉粉"
          },
          {
            "name": "烧麦",
            "star": 4,
            "desc": "步行可达凤临阁品尝"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "免费开放，游览时间短，适合与周边景点串联"
      },
      {
        "name": "大同博物馆",
        "rank": 9,
        "intro": "国家一级博物馆，馆藏文物七万余件，以北魏文物最为丰富，展示大同从远古到明清的历史变迁，司马金龙墓出土文物和北魏陶俑为镇馆之宝。",
        "coord": [
          113.282,
          40.085
        ],
        "photoSpots": [
          {
            "name": "北魏展厅",
            "pose": "拍摄精美陶俑与壁画"
          },
          {
            "name": "博物馆外观",
            "pose": "拍摄现代建筑设计"
          }
        ],
        "food": [
          {
            "name": "馆内咖啡",
            "star": 3,
            "desc": "博物馆内设休闲区"
          },
          {
            "name": "周边面馆",
            "star": 4,
            "desc": "出馆步行可达多家面馆"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "周一闭馆，建议预留2小时以上，免费讲解时段值得关注"
      },
      {
        "name": "代王府",
        "rank": 10,
        "intro": "明代朱元璋第十三子代王朱桂的王府遗址复建，占地面积大，建筑群规模宏大，再现明代王府的恢弘气势，是了解明代藩王文化的重要窗口。",
        "coord": [
          113.297,
          40.095
        ],
        "photoSpots": [
          {
            "name": "承运殿前",
            "pose": "正面拍摄王府大殿"
          },
          {
            "name": "王府花园",
            "pose": "拍摄古典园林景观"
          }
        ],
        "food": [
          {
            "name": "王府周边小吃",
            "star": 3,
            "desc": "古城内各类小吃摊点"
          },
          {
            "name": "刀削面",
            "star": 4,
            "desc": "附近老字号面馆"
          }
        ],
        "duration": 1.5,
        "ticket": 60,
        "tip": "可与九龙壁一同游览，两者相距不远"
      }
    ],
    "hidden": [
      {
        "name": "大同土林",
        "rank": 11,
        "intro": "位于大同县杜庄村，华北地区罕见的土林地貌，经亿万年风雨侵蚀形成的奇特景观，造型各异，如同外星球表面，日出日落时分光影效果极佳。",
        "coord": [
          113.45,
          40.02
        ],
        "photoSpots": [
          {
            "name": "土林高处观景台",
            "pose": "俯拍土林全景"
          },
          {
            "name": "土林沟壑中",
            "pose": "仰拍奇特造型剪影"
          }
        ],
        "food": [
          {
            "name": "农家饭",
            "star": 3,
            "desc": "村中农家院提供地道饭菜"
          }
        ],
        "duration": 2,
        "ticket": 48,
        "tip": "建议日出或日落时分前往，光线最美，注意防晒防风",
        "trend": "+120% 近3月热度"
      },
      {
        "name": "大同火山群",
        "rank": 12,
        "intro": "大同盆地东部的第四纪火山群，是中国六大著名火山群之一，保存完好的火山锥30余座，金山、黑山、狼窝山等形态各异，地质科普价值极高。",
        "coord": [
          113.6,
          40.1
        ],
        "photoSpots": [
          {
            "name": "金山火山口",
            "pose": "拍摄火山口与周围草原"
          },
          {
            "name": "昊天寺火山",
            "pose": "拍摄火山锥全景"
          }
        ],
        "food": [
          {
            "name": "阳高杏脯",
            "star": 3,
            "desc": "当地特产小食"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "自驾前往最方便，适合地质爱好者和摄影发烧友",
        "trend": "+95% 近3月热度"
      },
      {
        "name": "觉山寺塔",
        "rank": 13,
        "intro": "位于灵丘县，始建于北魏太和七年，现存砖塔为辽代重建，高44.23米，十三级密檐式砖塔，塔内保存辽代壁画和砖雕，是研究辽代建筑艺术的珍贵实物。",
        "coord": [
          114.32,
          39.38
        ],
        "photoSpots": [
          {
            "name": "塔前广场",
            "pose": "仰拍辽代密檐塔全貌"
          },
          {
            "name": "塔内一层",
            "pose": "拍摄砖雕细节"
          }
        ],
        "food": [
          {
            "name": "灵丘苦荞茶",
            "star": 3,
            "desc": "灵丘特产养生饮品"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "距离市区较远约120公里，适合深度游爱好者",
        "trend": "+80% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "大同云冈机场（大同市区西约15公里）",
    "mainStation": "大同站/大同南站（高铁）",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 25,
      "busCost": "市区公交1-2元，旅游专线5-10元"
    },
    "driving": {
      "tollPerDay": 80,
      "fuelPer100km": 65,
      "parking": "景区停车10-20元/次，古城周边5元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "大同云冈建国宾馆",
        "loc": "平城区迎宾街",
        "price": 680,
        "star": 5,
        "perks": "五星级老牌酒店，近古城，早餐丰盛"
      },
      {
        "name": "大同金地豪生大酒店",
        "loc": "平城区永泰南路",
        "price": 580,
        "star": 5,
        "perks": "市中心地段，房间宽敞，服务专业"
      },
      {
        "name": "大同万达广场美华酒店",
        "loc": "平城区开源街",
        "price": 520,
        "star": 4,
        "perks": "新装修，近商圈，停车方便"
      }
    ],
    "mid": [
      {
        "name": "大同凯悦花园酒店",
        "loc": "平城区魏都大道",
        "price": 320,
        "star": 4,
        "perks": "性价比高，步行可达古城"
      },
      {
        "name": "大同雁北宾馆",
        "loc": "平城区迎宾东路",
        "price": 280,
        "star": 3,
        "perks": "老牌宾馆，环境幽静，停车免费"
      },
      {
        "name": "大同云冈美居酒店",
        "loc": "平城区南环路",
        "price": 350,
        "star": 4,
        "perks": "法式风格，靠近高铁站"
      }
    ],
    "budget": [
      {
        "name": "大同798青年旅舍",
        "loc": "平城区鼓楼西街",
        "price": 80,
        "star": 3,
        "perks": "古城内，氛围好，适合背包客"
      },
      {
        "name": "汉庭大同古城酒店",
        "loc": "平城区大西街",
        "price": 150,
        "star": 3,
        "perks": "连锁品质，位置好，干净整洁"
      },
      {
        "name": "如家大同火车站店",
        "loc": "平城区站前街",
        "price": 130,
        "star": 2,
        "perks": "靠近火车站，交通便利"
      }
    ]
  }
};

// 晋中
window.CITY_DATABASE['晋中'] = {
  "code": "jinzhong",
  "province": "山西省",
  "coord": [
    112.736,
    37.687
  ],
  "bestSeason": "4-10月，春秋最佳，古城漫步舒适宜人",
  "routes": {
    "classic": {
      "name": "晋商大院经典之旅",
      "days": 3,
      "tagline": "走进晋商故里，领略明清大院建筑与汇通天下的传奇",
      "spots": [
        "平遥古城",
        "乔家大院",
        "王家大院",
        "双林寺"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "平遥古城全览",
          "list": [
            "平遥古城",
            "日升昌票号",
            "平遥县衙"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "晋商大院巡礼",
          "list": [
            "乔家大院",
            "王家大院"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "彩塑艺术与古镇收尾",
          "list": [
            "双林寺",
            "镇国寺",
            "平遥古城漫步"
          ],
          "hours": 6
        }
      ]
    },
    "niche": {
      "name": "古堡秘境寻踪",
      "days": 2,
      "tagline": "探索千年古堡地下迷宫，发现晋中鲜为人知的一面",
      "spots": [
        "张壁古堡",
        "双林寺",
        "镇国寺",
        "平遥古城"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "地下古堡探秘",
          "list": [
            "张壁古堡",
            "绵山"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "千年古刹巡访",
          "list": [
            "双林寺",
            "镇国寺"
          ],
          "hours": 6
        }
      ]
    },
    "culture": {
      "name": "晋商文化深度游",
      "days": 4,
      "tagline": "深入解读晋商精神，从票号到大院的商业文明密码",
      "spots": [
        "平遥古城",
        "日升昌票号",
        "乔家大院",
        "王家大院",
        "渠家大院"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "票号与古城",
          "list": [
            "平遥古城",
            "日升昌票号",
            "协同庆钱庄"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "晋商大院文化",
          "list": [
            "乔家大院",
            "渠家大院"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "民间故宫探秘",
          "list": [
            "王家大院",
            "资寿寺"
          ],
          "hours": 7
        },
        {
          "day": 4,
          "theme": "彩塑与古城收尾",
          "list": [
            "双林寺",
            "平遥古城"
          ],
          "hours": 6
        }
      ]
    },
    "nature": {
      "name": "绵山自然之旅",
      "days": 2,
      "tagline": "登临介子推隐居之地，感受绵山自然与人文交融之美",
      "spots": [
        "绵山",
        "张壁古堡",
        "平遥古城"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "绵山自然风光",
          "list": [
            "绵山",
            "水涛沟",
            "栖贤谷"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "古堡与平原",
          "list": [
            "张壁古堡",
            "平遥古城"
          ],
          "hours": 6
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "平遥古城",
        "rank": 1,
        "intro": "世界文化遗产，中国保存最完整的明清古县城，城墙周长6.4公里，城内街巷格局完整，票号、镖局、县衙等历史遗存丰富，是了解中国古代城市与金融文化的活化石。",
        "coord": [
          112.176,
          37.189
        ],
        "photoSpots": [
          {
            "name": "南城门（迎薰门）",
            "pose": "正面拍摄城门与城墙全景"
          },
          {
            "name": "明清街市楼",
            "pose": "登楼俯拍古城街巷"
          }
        ],
        "food": [
          {
            "name": "平遥牛肉",
            "star": 5,
            "desc": "冠云牌百年老字号，肉质紧实鲜香"
          },
          {
            "name": "莜面栲栳栳",
            "star": 5,
            "desc": "山西特色面食，蘸酱食用"
          }
        ],
        "duration": 6,
        "ticket": 125,
        "tip": "通票含22个景点，建议2天游完，古城内可乘电瓶车"
      },
      {
        "name": "乔家大院",
        "rank": 2,
        "intro": "始建于清乾隆年间，晋商大院代表，占地面积8724平方米，有6个大院20个小院313间房屋，整体布局呈双\"喜\"字形，被誉为\"北方民居建筑明珠\"。",
        "coord": [
          112.408,
          37.403
        ],
        "photoSpots": [
          {
            "name": "大院正门",
            "pose": "拍摄\"乔家大院\"牌匾与门楼"
          },
          {
            "name": "中院照壁",
            "pose": "拍摄精美砖雕与百寿图"
          }
        ],
        "food": [
          {
            "name": "乔家八碗",
            "star": 4,
            "desc": "乔家传统宴席菜品"
          },
          {
            "name": "祁县酥梨",
            "star": 3,
            "desc": "当地时令水果"
          }
        ],
        "duration": 3,
        "ticket": 115,
        "tip": "建议请导游讲解，了解乔家经商之道与建筑寓意"
      },
      {
        "name": "王家大院",
        "rank": 3,
        "intro": "有\"民间故宫\"之称，总面积25万平方米，是清代民居建筑的集大成者，建筑规模宏大，砖雕、木雕、石雕\"三雕\"艺术精湛，是晋商文化的实物百科全书。",
        "coord": [
          111.78,
          36.93
        ],
        "photoSpots": [
          {
            "name": "高家崖建筑群",
            "pose": "俯拍层叠院落全景"
          },
          {
            "name": "红门堡城墙",
            "pose": "拍摄堡墙与远山"
          }
        ],
        "food": [
          {
            "name": "灵石骨累",
            "star": 4,
            "desc": "灵石特色面食小吃"
          },
          {
            "name": "碗托",
            "star": 4,
            "desc": "灵石当地传统小吃"
          }
        ],
        "duration": 3,
        "ticket": 55,
        "tip": "面积很大建议穿舒适鞋，高家崖和红门堡两个区域都值得细看"
      },
      {
        "name": "绵山",
        "rank": 4,
        "intro": "介子推隐居之地，清明节发源地，集自然山水与人文古迹于一体，悬崖建筑群令人叹为观止，水涛沟瀑布群清凉宜人，被誉为\"天然氧吧\"。",
        "coord": [
          111.97,
          36.87
        ],
        "photoSpots": [
          {
            "name": "云峰寺",
            "pose": "拍摄悬崖建筑奇观"
          },
          {
            "name": "水涛沟瀑布",
            "pose": "拍摄瀑布与溪谷"
          }
        ],
        "food": [
          {
            "name": "绵山素斋",
            "star": 4,
            "desc": "山上寺庙提供的素斋"
          },
          {
            "name": "介休贯馅糖",
            "star": 3,
            "desc": "介休特产甜食"
          }
        ],
        "duration": 6,
        "ticket": 110,
        "tip": "景区内有换乘车，建议安排一整天，山顶住宿可看日出"
      },
      {
        "name": "双林寺",
        "rank": 5,
        "intro": "始建于北齐，以彩塑闻名于世，现存2056尊彩塑造像被誉为\"东方彩塑艺术宝库\"，千手观音和韦驮像为其中极品，造型精美，色彩鲜艳，栩栩如生。",
        "coord": [
          112.15,
          37.18
        ],
        "photoSpots": [
          {
            "name": "千佛殿",
            "pose": "拍摄韦驮像侧面（禁止闪光灯）"
          },
          {
            "name": "寺门前",
            "pose": "拍摄古寺全景"
          }
        ],
        "food": [
          {
            "name": "平遥牛肉",
            "star": 4,
            "desc": "附近餐馆均有供应"
          },
          {
            "name": "碗托",
            "star": 4,
            "desc": "平遥特色小吃"
          }
        ],
        "duration": 2,
        "ticket": 35,
        "tip": "殿内禁止拍照和闪光灯，建议用肉眼细细欣赏彩塑之美"
      }
    ],
    "secondary": [
      {
        "name": "镇国寺",
        "rank": 6,
        "intro": "始建于五代北汉天会七年，万佛殿为中国现存最古老的木构建筑之一，殿内11尊五代彩塑为全国寺观中仅存的五代作品，具有极高的历史和艺术价值。",
        "coord": [
          112.2,
          37.25
        ],
        "photoSpots": [
          {
            "name": "万佛殿前",
            "pose": "拍摄五代木构建筑全貌"
          },
          {
            "name": "殿内",
            "pose": "远观五代彩塑（禁拍照）"
          }
        ],
        "food": [
          {
            "name": "平遥碗托",
            "star": 3,
            "desc": "返回平遥途中可品尝"
          }
        ],
        "duration": 1.5,
        "ticket": 30,
        "tip": "位置较偏建议包车前往，五代木构建筑全国仅此一例"
      },
      {
        "name": "张壁古堡",
        "rank": 7,
        "intro": "始建于十六国时期，面积仅0.12平方公里，却集军事防御、宗教信仰、生产生活于一体，地下三层立体隧道长达万米，是中国罕见的古代袖珍城堡。",
        "coord": [
          111.85,
          36.89
        ],
        "photoSpots": [
          {
            "name": "古堡南门",
            "pose": "拍摄古堡入口与夯土墙"
          },
          {
            "name": "地道内",
            "pose": "拍摄地下通道光影"
          }
        ],
        "food": [
          {
            "name": "介休担担面",
            "star": 4,
            "desc": "介休特色面食"
          },
          {
            "name": "银条",
            "star": 3,
            "desc": "介休特产腌菜"
          }
        ],
        "duration": 3,
        "ticket": 60,
        "tip": "地下通道较窄较暗，建议带手电和外套，注意低矮处碰头"
      },
      {
        "name": "日升昌票号",
        "rank": 8,
        "intro": "创建于清道光三年（1823年），是中国第一家票号，开创了中国金融业的先河，鼎盛时期\"汇通天下\"，对中国近代金融发展产生了深远影响。",
        "coord": [
          112.175,
          37.188
        ],
        "photoSpots": [
          {
            "name": "票号正厅",
            "pose": "拍摄柜台与汇兑场景复原"
          },
          {
            "name": "后院",
            "pose": "拍摄晋商生活空间"
          }
        ],
        "food": [
          {
            "name": "莜面栲栳栳",
            "star": 4,
            "desc": "古城内多家餐馆供应"
          },
          {
            "name": "平遥牛肉",
            "star": 5,
            "desc": "真空包装可带走"
          }
        ],
        "duration": 1.5,
        "ticket": 125,
        "tip": "含在平遥古城通票中，建议配合古城整体游览"
      },
      {
        "name": "平遥县衙",
        "rank": 9,
        "intro": "始建于元至正六年，是中国现存规模最大的古代县衙，占地2.6万平方米，前后六进院落，完整展示了中国古代县级行政机构的格局，每日有县太爷升堂表演。",
        "coord": [
          112.173,
          37.187
        ],
        "photoSpots": [
          {
            "name": "大堂前",
            "pose": "拍摄公堂与\"明镜高悬\"匾"
          },
          {
            "name": "后花园",
            "pose": "拍摄衙署园林景观"
          }
        ],
        "food": [
          {
            "name": "油糕",
            "star": 3,
            "desc": "衙门街小吃摊有售"
          },
          {
            "name": "莜面",
            "star": 4,
            "desc": "古城内饭馆均可品尝"
          }
        ],
        "duration": 1.5,
        "ticket": 125,
        "tip": "含在通票中，升堂表演每天固定时间，注意查看当日时刻表"
      },
      {
        "name": "渠家大院",
        "rank": 10,
        "intro": "始建于清乾隆年间，祁县渠氏家族的宅院，有\"渠半城\"之称，建筑布局严谨，砖雕木雕精美，是了解晋商渠家商业帝国的重要窗口。",
        "coord": [
          112.356,
          37.358
        ],
        "photoSpots": [
          {
            "name": "主院正厅",
            "pose": "拍摄清代民居陈设"
          },
          {
            "name": "砖雕门楼",
            "pose": "拍摄精美砖雕细节"
          }
        ],
        "food": [
          {
            "name": "祁县酥梨",
            "star": 3,
            "desc": "祁县特产水果"
          },
          {
            "name": "熏肘子",
            "star": 4,
            "desc": "祁县特色美食"
          }
        ],
        "duration": 1.5,
        "ticket": 40,
        "tip": "游客较少，可安静欣赏，与乔家大院相距不远可串联"
      }
    ],
    "hidden": [
      {
        "name": "资寿寺",
        "rank": 11,
        "intro": "始建于唐代，位于灵石县，寺内明代彩塑十八罗汉头曾被盗后追回，轰动一时，彩塑造型精美，色彩保存完好，是山西明代彩塑的上乘之作。",
        "coord": [
          111.82,
          36.87
        ],
        "photoSpots": [
          {
            "name": "大雄宝殿",
            "pose": "拍摄彩塑罗汉（禁闪光灯）"
          },
          {
            "name": "寺前山道",
            "pose": "拍摄山间古寺全景"
          }
        ],
        "food": [
          {
            "name": "灵石骨累",
            "star": 3,
            "desc": "灵石特色小食"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "位置偏僻需自驾或包车，可与王家大院同游",
        "trend": "+85% 近3月热度"
      },
      {
        "name": "常家庄园",
        "rank": 12,
        "intro": "清代儒商常氏家族的庄园，现存宅院仅为原规模的四分之一，但园林建筑精美，有\"中国最大民间祠堂群\"之称，是晋商文化中儒商精神的典型代表。",
        "coord": [
          112.59,
          37.54
        ],
        "photoSpots": [
          {
            "name": "静园",
            "pose": "拍摄古典园林水景"
          },
          {
            "name": "常氏祠堂",
            "pose": "拍摄祠堂建筑群"
          }
        ],
        "food": [
          {
            "name": "榆次老城小吃",
            "star": 3,
            "desc": "附近可品尝当地小吃"
          }
        ],
        "duration": 3,
        "ticket": 80,
        "tip": "庄园面积大，建议安排半天时间，游客较少体验好",
        "trend": "+70% 近3月热度"
      },
      {
        "name": "后沟古村",
        "rank": 13,
        "intro": "位于榆次区，有\"中国民间文化活化石\"之称，保存完好的明清窑洞建筑群，古村排水系统精巧，18座庙宇散布其间，是中国农耕文化的缩影。",
        "coord": [
          112.62,
          37.5
        ],
        "photoSpots": [
          {
            "name": "村口古槐",
            "pose": "拍摄古村入口全景"
          },
          {
            "name": "窑洞院落",
            "pose": "拍摄黄土高原窑洞民居"
          }
        ],
        "food": [
          {
            "name": "农家饭",
            "star": 4,
            "desc": "村民自营农家院，地道山西味"
          }
        ],
        "duration": 3,
        "ticket": 40,
        "tip": "村中道路为土路，建议穿运动鞋，适合体验乡村慢生活",
        "trend": "+110% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "无本地机场，最近为太原武宿机场（距晋中市区约20公里）",
    "mainStation": "晋中站（高铁）/平遥古城站（高铁）",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 20,
      "busCost": "市区公交1元，平遥古城内电瓶车30元/天"
    },
    "driving": {
      "tollPerDay": 70,
      "fuelPer100km": 60,
      "parking": "景区停车10-20元/次，平遥古城外停车场20元/天"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "平遥麒麟阁大饭店",
        "loc": "平遥古城南大街",
        "price": 780,
        "star": 5,
        "perks": "古城内顶级酒店，明清建筑风格，位置绝佳"
      },
      {
        "name": "平遥饭店",
        "loc": "平遥古城西大街",
        "price": 680,
        "star": 5,
        "perks": "百年老店改造，晋商文化主题，庭院优美"
      },
      {
        "name": "祁县昭馀古城酒店",
        "loc": "祁县昭馀古城内",
        "price": 520,
        "star": 4,
        "perks": "古城核心位置，安静典雅"
      }
    ],
    "mid": [
      {
        "name": "平遥锦宅",
        "loc": "平遥古城内",
        "price": 350,
        "star": 4,
        "perks": "精品民宿风格，古色古香，老板热情"
      },
      {
        "name": "平遥会馆",
        "loc": "平遥古城南大街",
        "price": 300,
        "star": 3,
        "perks": "晋商主题客栈，位置好，性价比高"
      },
      {
        "name": "榆次万豪美爵酒店",
        "loc": "榆次区迎宾路",
        "price": 380,
        "star": 4,
        "perks": "现代商务酒店，设施齐全"
      }
    ],
    "budget": [
      {
        "name": "平遥天元奎客栈",
        "loc": "平遥古城内",
        "price": 120,
        "star": 3,
        "perks": "古城内老院子改造，氛围温馨"
      },
      {
        "name": "平遥协同庆客栈",
        "loc": "平遥古城南大街",
        "price": 100,
        "star": 3,
        "perks": "窑洞风格住宿，体验晋商生活"
      },
      {
        "name": "汉庭晋中榆次店",
        "loc": "榆次区新建路",
        "price": 140,
        "star": 3,
        "perks": "连锁品质保证，交通便利"
      }
    ]
  }
};

// 忻州
window.CITY_DATABASE['忻州'] = {
  "code": "xinzhou",
  "province": "山西省",
  "coord": [
    112.733,
    38.417
  ],
  "bestSeason": "5-10月，夏季避暑胜地，秋季层林尽染最为壮观",
  "routes": {
    "classic": {
      "name": "五台山朝圣经典",
      "days": 3,
      "tagline": "朝拜文殊道场，感悟千年佛教圣地的庄严与宁静",
      "spots": [
        "五台山",
        "菩萨顶",
        "殊像寺",
        "五爷庙",
        "黛螺顶"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "台怀镇核心寺庙群",
          "list": [
            "五爷庙",
            "殊像寺",
            "菩萨顶",
            "显通寺"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "大朝台之路",
          "list": [
            "东台望海峰",
            "北台叶斗峰",
            "黛螺顶"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "山间古刹探幽",
          "list": [
            "南禅寺",
            "佛光寺",
            "塔院寺"
          ],
          "hours": 7
        }
      ]
    },
    "niche": {
      "name": "边塞雄关探秘",
      "days": 2,
      "tagline": "登临天下九塞之首，探寻千年边塞的金戈铁马",
      "spots": [
        "雁门关",
        "忻州古城",
        "河边民俗博物馆"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "雄关漫道",
          "list": [
            "雁门关",
            "边贸街"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "古城与民俗",
          "list": [
            "忻州古城",
            "河边民俗博物馆"
          ],
          "hours": 6
        }
      ]
    },
    "culture": {
      "name": "佛教文化朝圣之旅",
      "days": 4,
      "tagline": "深度朝礼五台圣境，探访中国最古老的唐代木构建筑",
      "spots": [
        "五台山",
        "佛光寺",
        "南禅寺",
        "雁门关"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "初识五台",
          "list": [
            "塔院寺",
            "五爷庙",
            "显通寺"
          ],
          "hours": 7
        },
        {
          "day": 2,
          "theme": "朝台礼佛",
          "list": [
            "菩萨顶",
            "黛螺顶",
            "殊像寺"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "唐代古建巡礼",
          "list": [
            "佛光寺",
            "南禅寺"
          ],
          "hours": 7
        },
        {
          "day": 4,
          "theme": "边塞文化",
          "list": [
            "雁门关",
            "忻州古城"
          ],
          "hours": 7
        }
      ]
    },
    "nature": {
      "name": "芦芽山自然探秘",
      "days": 3,
      "tagline": "探秘万年冰洞与高山草甸，感受管涔山的原始自然之美",
      "spots": [
        "芦芽山",
        "万年冰洞",
        "汾河源头",
        "悬棺栈道"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "万年冰洞奇观",
          "list": [
            "万年冰洞",
            "悬棺栈道"
          ],
          "hours": 7
        },
        {
          "day": 2,
          "theme": "芦芽山登高",
          "list": [
            "芦芽山",
            "马仑草原",
            "情人谷"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "汾源探幽",
          "list": [
            "汾河源头",
            "天池"
          ],
          "hours": 5
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "五台山",
        "rank": 1,
        "intro": "世界文化遗产，中国佛教四大名山之首，文殊菩萨道场，现存寺院47座，其中佛光寺和南禅寺为中国现存最古老的木构建筑，北台叶斗峰海拔3061米为华北屋脊。",
        "coord": [
          113.593,
          39.08
        ],
        "photoSpots": [
          {
            "name": "菩萨顶108级台阶",
            "pose": "仰拍皇家寺庙气势"
          },
          {
            "name": "东台望海峰",
            "pose": "拍摄日出云海"
          }
        ],
        "food": [
          {
            "name": "台蘑炖鸡",
            "star": 5,
            "desc": "五台山特产台蘑，鲜香无比"
          },
          {
            "name": "五台山素斋",
            "star": 4,
            "desc": "寺庙提供的素斋简餐"
          }
        ],
        "duration": 10,
        "ticket": 135,
        "tip": "旺季车辆限行需乘景区大巴，台怀镇住宿需提前预订，温差大备厚衣"
      },
      {
        "name": "雁门关",
        "rank": 2,
        "intro": "天下九塞之首，\"中华第一关\"，自古兵家必争之地，关城依山而建，长城蜿蜒其上，杨家将、昭君出塞等历史故事均与此关有关，是感受边塞文化的绝佳之地。",
        "coord": [
          112.87,
          39.19
        ],
        "photoSpots": [
          {
            "name": "关城门楼",
            "pose": "拍摄\"雁门关\"匾额与雄关全貌"
          },
          {
            "name": "长城遗址",
            "pose": "拍摄蜿蜒长城与苍茫群山"
          }
        ],
        "food": [
          {
            "name": "代县熬鱼",
            "star": 4,
            "desc": "代县特色菜，鲜美可口"
          },
          {
            "name": "代县黄酒",
            "star": 4,
            "desc": "千年酿造工艺，醇香甘甜"
          }
        ],
        "duration": 4,
        "ticket": 90,
        "tip": "山上风大温度低，建议带防风外套，自驾注意山路弯道"
      },
      {
        "name": "忻州古城",
        "rank": 3,
        "intro": "始建于东汉，重修后的忻州古城汇聚了山西各地美食和非遗文化，城墙保存完好，城内街巷古朴，夜晚灯火辉煌，是休闲漫步品尝小吃的理想场所。",
        "coord": [
          112.728,
          38.415
        ],
        "photoSpots": [
          {
            "name": "北城门楼",
            "pose": "夜间拍摄古城灯光"
          },
          {
            "name": "古城美食街",
            "pose": "拍摄热闹街巷氛围"
          }
        ],
        "food": [
          {
            "name": "忻州蒸肉",
            "star": 5,
            "desc": "忻州名小吃，猪肉蒸制酥烂"
          },
          {
            "name": "高粱面鱼鱼",
            "star": 4,
            "desc": "当地特色面食"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "夜间灯光效果极佳，建议傍晚前往，美食街品种丰富"
      },
      {
        "name": "芦芽山",
        "rank": 4,
        "intro": "管涔山脉主峰，海拔2739米，集高山草甸、原始森林、万年冰洞于一体，被称为\"北方香格里拉\"，生态环境原始，动植物资源丰富，是户外徒步的绝佳目的地。",
        "coord": [
          112.1,
          38.88
        ],
        "photoSpots": [
          {
            "name": "马仑草原",
            "pose": "拍摄高山草甸与牛羊"
          },
          {
            "name": "芦芽山主峰",
            "pose": "拍摄云海与群峰"
          }
        ],
        "food": [
          {
            "name": "宁武蘑菇",
            "star": 4,
            "desc": "管涔山野生蘑菇"
          },
          {
            "name": "莜面",
            "star": 4,
            "desc": "晋北特色主食"
          }
        ],
        "duration": 6,
        "ticket": 120,
        "tip": "山路较长需体力，建议穿登山鞋带干粮，与万年冰洞同游"
      },
      {
        "name": "万年冰洞",
        "rank": 5,
        "intro": "形成于新生代第四纪冰川期，距今约300万年，洞内常年温度零下4-6度，冰柱、冰帘、冰瀑千姿百态，是中国目前已知的最大冰洞，堪称地下冰雕艺术宫殿。",
        "coord": [
          112.07,
          38.89
        ],
        "photoSpots": [
          {
            "name": "冰洞内部",
            "pose": "拍摄冰柱与灯光交辉"
          },
          {
            "name": "洞口",
            "pose": "拍摄洞口与周围山体"
          }
        ],
        "food": [
          {
            "name": "宁武莜面",
            "star": 3,
            "desc": "宁武当地特色面食"
          }
        ],
        "duration": 2,
        "ticket": 120,
        "tip": "洞内温度低需穿棉衣（可租），台阶湿滑注意安全"
      }
    ],
    "secondary": [
      {
        "name": "佛光寺",
        "rank": 6,
        "intro": "始建于北魏，东大殿为唐大中十一年（857年）重建，是中国现存最古老、最完整的唐代木构建筑，殿内唐代塑像、壁画和题记并称\"四绝\"，被梁思成称为\"中国第一国宝\"。",
        "coord": [
          113.38,
          38.87
        ],
        "photoSpots": [
          {
            "name": "东大殿前",
            "pose": "拍摄唐代斗拱与屋檐"
          },
          {
            "name": "祖师塔",
            "pose": "拍摄北魏古塔"
          }
        ],
        "food": [
          {
            "name": "台蘑面",
            "star": 3,
            "desc": "附近农家简单饭菜"
          }
        ],
        "duration": 2,
        "ticket": 35,
        "tip": "距五台山约50公里需包车，建筑爱好者必去"
      },
      {
        "name": "南禅寺",
        "rank": 7,
        "intro": "大殿建于唐建中三年（782年），是中国现存最古老的木构建筑，比佛光寺东大殿还早75年，殿内17尊唐代彩塑保存完好，造型丰满生动，具有鲜明的唐代风格。",
        "coord": [
          113.23,
          38.74
        ],
        "photoSpots": [
          {
            "name": "大殿正面",
            "pose": "拍摄唐代木构建筑全貌"
          },
          {
            "name": "殿内彩塑",
            "pose": "远观唐代塑像（禁拍照）"
          }
        ],
        "food": [
          {
            "name": "五台烩菜",
            "star": 3,
            "desc": "附近村镇小餐馆"
          }
        ],
        "duration": 1,
        "ticket": 10,
        "tip": "寺院不大但历史价值极高，可与佛光寺串联游览"
      },
      {
        "name": "显通寺",
        "rank": 8,
        "intro": "五台山规模最大、历史最悠久的寺院，始建于东汉永平年间，与洛阳白马寺同为中国最早的佛教寺院之一，铜殿和无梁殿为建筑珍品，是五台山佛教文化的核心。",
        "coord": [
          113.592,
          39.082
        ],
        "photoSpots": [
          {
            "name": "铜殿前",
            "pose": "拍摄全铜铸造的明代铜殿"
          },
          {
            "name": "无梁殿",
            "pose": "拍摄砖拱结构建筑"
          }
        ],
        "food": [
          {
            "name": "台蘑炒鸡蛋",
            "star": 4,
            "desc": "寺庙附近餐馆有售"
          }
        ],
        "duration": 2,
        "ticket": 10,
        "tip": "位于台怀镇中心，与塔院寺相邻可步行串联"
      },
      {
        "name": "河边民俗博物馆",
        "rank": 9,
        "intro": "原为阎锡山故居，位于定襄县河边村，建筑群规模庞大，中西合璧风格独特，现辟为民俗博物馆，展示晋北地区丰富的民俗文化，是了解近代山西的窗口。",
        "coord": [
          112.96,
          38.53
        ],
        "photoSpots": [
          {
            "name": "阎府大门",
            "pose": "拍摄中西合璧建筑群"
          },
          {
            "name": "民俗展厅",
            "pose": "拍摄民间器物陈列"
          }
        ],
        "food": [
          {
            "name": "定襄蒸肉",
            "star": 5,
            "desc": "定襄名吃，猪肉制作酥烂醇香"
          },
          {
            "name": "高粱面鱼鱼",
            "star": 4,
            "desc": "定襄特色面食"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "距忻州市区约40公里，可包车前往，建议预留2小时"
      },
      {
        "name": "汾河源头",
        "rank": 10,
        "intro": "位于宁武县管涔山麓，山西母亲河汾河的发源地，泉水从山间涌出，清澈甘冽，周围森林茂密，环境幽静，是探源寻幽和亲近自然的好去处。",
        "coord": [
          112.05,
          38.85
        ],
        "photoSpots": [
          {
            "name": "源头碑",
            "pose": "与汾河源头标志合影"
          },
          {
            "name": "溪谷步道",
            "pose": "拍摄清澈溪流与森林"
          }
        ],
        "food": [
          {
            "name": "山野菜",
            "star": 3,
            "desc": "附近农家提供的山野菜"
          }
        ],
        "duration": 2,
        "ticket": 30,
        "tip": "与芦芽山景区相邻可一同游览，秋季景色最佳"
      }
    ],
    "hidden": [
      {
        "name": "老牛湾",
        "rank": 11,
        "intro": "位于偏关县，黄河与长城在此握手交汇，形成壮丽的峡谷风光，老牛湾村古朴宁静，黄河水碧绿如玉，长城敌楼巍然屹立，是摄影爱好者的天堂。",
        "coord": [
          111.45,
          39.57
        ],
        "photoSpots": [
          {
            "name": "老牛湾观景台",
            "pose": "拍摄黄河与长城交汇全景"
          },
          {
            "name": "村中窑洞",
            "pose": "拍摄古村与黄河背景"
          }
        ],
        "food": [
          {
            "name": "黄河鲤鱼",
            "star": 5,
            "desc": "老牛湾农家黄河鱼，鲜嫩美味"
          }
        ],
        "duration": 4,
        "ticket": 96,
        "tip": "距忻州市区约200公里需自驾，适合安排2天含住宿",
        "trend": "+150% 近3月热度"
      },
      {
        "name": "禹王洞",
        "rank": 12,
        "intro": "位于忻州市东南，华北地区最大的溶洞之一，洞内钟乳石千姿百态，有\"华北第一洞\"之称，洞深约2000米，恒温10度左右，四季皆可游览。",
        "coord": [
          112.78,
          38.35
        ],
        "photoSpots": [
          {
            "name": "洞内大厅",
            "pose": "拍摄钟乳石群与灯光效果"
          },
          {
            "name": "洞口",
            "pose": "拍摄洞口与山体全景"
          }
        ],
        "food": [
          {
            "name": "忻州蒸肉",
            "star": 4,
            "desc": "返回市区可品尝"
          }
        ],
        "duration": 2,
        "ticket": 60,
        "tip": "洞内温度低需带外套，台阶湿滑注意安全",
        "trend": "+75% 近3月热度"
      },
      {
        "name": "顿村温泉",
        "rank": 13,
        "intro": "位于忻州市北郊，水质富含多种矿物质，水温适中，是山西著名的温泉疗养地，泡温泉解乏养生，适合旅途修整，周边配套设施完善。",
        "coord": [
          112.7,
          38.48
        ],
        "photoSpots": [
          {
            "name": "温泉度假区",
            "pose": "休闲拍摄度假环境"
          }
        ],
        "food": [
          {
            "name": "温泉鱼",
            "star": 3,
            "desc": "温泉水养殖的特色鱼"
          }
        ],
        "duration": 3,
        "ticket": 128,
        "tip": "适合旅途疲劳后放松，建议安排半天，自带泳衣",
        "trend": "+90% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "五台山机场（忻州市定襄县，距市区约40公里）",
    "mainStation": "忻州西站（高铁）/忻州站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 20,
      "busCost": "市区公交1元，五台山景区大巴包含在门票中"
    },
    "driving": {
      "tollPerDay": 90,
      "fuelPer100km": 70,
      "parking": "景区停车15-30元/次，五台山旺季停车困难建议早到"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "五台山万豪酒店",
        "loc": "五台山台怀镇",
        "price": 880,
        "star": 5,
        "perks": "五台山核心区域，设施一流，可观山景"
      },
      {
        "name": "五台山友谊宾馆",
        "loc": "五台山台怀镇",
        "price": 680,
        "star": 4,
        "perks": "老牌高端酒店，近五爷庙，服务周到"
      },
      {
        "name": "忻州泛华大酒店",
        "loc": "忻州市七一北路",
        "price": 520,
        "star": 4,
        "perks": "市区最大酒店，设施齐全"
      }
    ],
    "mid": [
      {
        "name": "五台山栖贤阁",
        "loc": "五台山台怀镇",
        "price": 350,
        "star": 3,
        "perks": "步行可达核心寺庙群，安静舒适"
      },
      {
        "name": "忻州云中河景区酒店",
        "loc": "忻州市云中河",
        "price": 280,
        "star": 3,
        "perks": "近云中河景区，环境优美"
      },
      {
        "name": "五台山银龙山庄",
        "loc": "五台山台怀镇",
        "price": 320,
        "star": 3,
        "perks": "山庄式住宿，环境清幽"
      }
    ],
    "budget": [
      {
        "name": "五台山农家院",
        "loc": "五台山台怀镇",
        "price": 100,
        "star": 2,
        "perks": "当地农家经营，朴素温馨"
      },
      {
        "name": "忻州汉庭酒店",
        "loc": "忻州市长征街",
        "price": 140,
        "star": 3,
        "perks": "连锁品质，市中心位置"
      },
      {
        "name": "忻州如家酒店",
        "loc": "忻州市和平路",
        "price": 120,
        "star": 2,
        "perks": "交通便利，干净卫生"
      }
    ]
  }
};

// 临汾
window.CITY_DATABASE['临汾'] = {
  "code": "linfen",
  "province": "山西省",
  "coord": [
    111.517,
    36.084
  ],
  "bestSeason": "4-10月，春季花开，秋季壶口水量充沛最为壮观",
  "routes": {
    "classic": {
      "name": "黄河根祖经典之旅",
      "days": 3,
      "tagline": "追寻华夏文明之根，感受黄河壶口的磅礴力量",
      "spots": [
        "壶口瀑布",
        "尧庙",
        "洪洞大槐树",
        "广胜寺"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "华夏根祖寻根",
          "list": [
            "尧庙",
            "华门",
            "洪洞大槐树"
          ],
          "hours": 7
        },
        {
          "day": 2,
          "theme": "黄河壶口奇观",
          "list": [
            "壶口瀑布",
            "克难坡"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "琉璃宝塔与古城",
          "list": [
            "广胜寺",
            "苏三监狱",
            "临汾鼓楼"
          ],
          "hours": 6
        }
      ]
    },
    "niche": {
      "name": "远古文明探秘",
      "days": 2,
      "tagline": "探寻四千年前的华夏第一都，揭开上古文明的面纱",
      "spots": [
        "陶寺遗址",
        "尧庙",
        "广胜寺",
        "洪洞大槐树"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "远古都城探秘",
          "list": [
            "陶寺遗址",
            "尧庙"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "古建与寻根",
          "list": [
            "广胜寺",
            "洪洞大槐树"
          ],
          "hours": 6
        }
      ]
    },
    "culture": {
      "name": "华夏文明寻根之旅",
      "days": 3,
      "tagline": "从尧都到明代移民，追溯中华文明的起源与传承",
      "spots": [
        "尧庙",
        "华门",
        "洪洞大槐树",
        "苏三监狱",
        "陶寺遗址"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "尧都文明",
          "list": [
            "尧庙",
            "华门",
            "陶寺遗址"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "寻根与古建",
          "list": [
            "洪洞大槐树",
            "广胜寺",
            "苏三监狱"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "黄河文化",
          "list": [
            "壶口瀑布",
            "克难坡"
          ],
          "hours": 8
        }
      ]
    },
    "nature": {
      "name": "黄河山水自然之旅",
      "days": 2,
      "tagline": "黄河之滨与乾坤湾奇景，感受大自然的鬼斧神工",
      "spots": [
        "壶口瀑布",
        "乾坤湾",
        "云丘山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "黄河奇观",
          "list": [
            "壶口瀑布",
            "克难坡"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "山水画卷",
          "list": [
            "乾坤湾",
            "云丘山"
          ],
          "hours": 7
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "壶口瀑布",
        "rank": 1,
        "intro": "黄河上最大的黄色瀑布，中国第二大瀑布，黄河水从30余米宽的河道猛然跌入50米深的壶口之中，声势震天，水雾弥天，四季景色各异，被誉为\"天下黄河一壶收\"。",
        "coord": [
          110.45,
          36.17
        ],
        "photoSpots": [
          {
            "name": "主瀑布观景台",
            "pose": "拍摄瀑布正面水雾飞溅"
          },
          {
            "name": "龙洞观景台",
            "pose": "低角度拍摄黄河水奔涌"
          }
        ],
        "food": [
          {
            "name": "吉县苹果",
            "star": 5,
            "desc": "吉县特产，脆甜多汁"
          },
          {
            "name": "黄河大鲤鱼",
            "star": 4,
            "desc": "当地餐馆特色菜"
          }
        ],
        "duration": 3,
        "ticket": 100,
        "tip": "4-5月桃花汛和9-10月秋雨季节水量最大最壮观，注意防水防雾"
      },
      {
        "name": "尧庙",
        "rank": 2,
        "intro": "始建于西晋，为纪念华夏文明始祖帝尧所建，是中国首座国祭帝尧的庙宇，现存建筑为清代重修，庙内五凤楼和尧井为标志性景观，是追寻华夏文明起源的重要场所。",
        "coord": [
          111.523,
          36.077
        ],
        "photoSpots": [
          {
            "name": "五凤楼",
            "pose": "拍摄标志性楼阁建筑"
          },
          {
            "name": "尧井",
            "pose": "拍摄古井与亭阁"
          }
        ],
        "food": [
          {
            "name": "牛肉丸子面",
            "star": 5,
            "desc": "临汾标志性美食，麻辣鲜香"
          },
          {
            "name": "羊杂碎",
            "star": 4,
            "desc": "临汾早餐首选"
          }
        ],
        "duration": 2,
        "ticket": 40,
        "tip": "与华门相邻可一同游览，了解尧都文化建议请讲解"
      },
      {
        "name": "洪洞大槐树",
        "rank": 3,
        "intro": "明代大规模移民的出发地，\"问我祖先在何处，山西洪洞大槐树\"广为传唱，是中华民族寻根祭祖的圣地，每年清明举办大型祭祖大典，海内外华人络绎不绝。",
        "coord": [
          111.69,
          36.26
        ],
        "photoSpots": [
          {
            "name": "大槐树根雕大门",
            "pose": "拍摄标志性根雕门"
          },
          {
            "name": "祭祖堂",
            "pose": "拍摄百家姓牌位"
          }
        ],
        "food": [
          {
            "name": "洪洞饸饹面",
            "star": 4,
            "desc": "洪洞特色面食，筋道爽滑"
          },
          {
            "name": "赵城羊汤",
            "star": 4,
            "desc": "洪洞赵城特色汤品"
          }
        ],
        "duration": 2,
        "ticket": 80,
        "tip": "可在祭祖堂找到自己姓氏的牌位，清明前后有盛大祭祖活动"
      },
      {
        "name": "广胜寺",
        "rank": 4,
        "intro": "始建于东汉，分上寺、下寺和水神庙三部分，飞虹塔为中国现存最大最完整的琉璃塔，高47.31米，金碧辉煌，下寺元代壁画为稀世珍品，水神庙明代壁画精美绝伦。",
        "coord": [
          111.74,
          36.3
        ],
        "photoSpots": [
          {
            "name": "飞虹塔下",
            "pose": "仰拍琉璃塔全景"
          },
          {
            "name": "水神庙内",
            "pose": "观赏元代壁画（禁拍照）"
          }
        ],
        "food": [
          {
            "name": "洪洞饸饹面",
            "star": 4,
            "desc": "附近餐馆有售"
          },
          {
            "name": "赵城羊汤",
            "star": 3,
            "desc": "洪洞传统汤品"
          }
        ],
        "duration": 3,
        "ticket": 55,
        "tip": "飞虹塔在阳光下五彩斑斓最为壮观，建议晴天下午前往"
      },
      {
        "name": "华门",
        "rank": 5,
        "intro": "为纪念帝尧开国而建，高50米，被誉为\"天下第一门\"，建筑气势恢宏，内部展示华夏五千年文明史，登高可俯瞰临汾全城，是临汾的城市地标建筑。",
        "coord": [
          111.52,
          36.075
        ],
        "photoSpots": [
          {
            "name": "华门广场",
            "pose": "仰拍华门全景"
          },
          {
            "name": "华门顶层",
            "pose": "俯瞰临汾城区全貌"
          }
        ],
        "food": [
          {
            "name": "牛肉丸子面",
            "star": 5,
            "desc": "返回市区品尝正宗味道"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "与尧庙相邻可步行串联，傍晚登门观日落效果佳"
      }
    ],
    "secondary": [
      {
        "name": "苏三监狱",
        "rank": 6,
        "intro": "始建于明洪武年间，因京剧《苏三起解》而闻名全国，是中国现存唯一一座明代形制的监狱，虎头牢和死囚牢保存完好，是了解古代司法制度和戏曲文化的独特景点。",
        "coord": [
          111.688,
          36.258
        ],
        "photoSpots": [
          {
            "name": "虎头牢门",
            "pose": "拍摄标志性虎头牢门"
          },
          {
            "name": "苏三塑像",
            "pose": "与苏三塑像合影"
          }
        ],
        "food": [
          {
            "name": "洪洞饸饹面",
            "star": 4,
            "desc": "洪洞县城美食"
          }
        ],
        "duration": 1,
        "ticket": 40,
        "tip": "景区不大，与大槐树同在洪洞县可一并游览"
      },
      {
        "name": "陶寺遗址",
        "rank": 7,
        "intro": "距今约4300-3900年的新石器时代晚期遗址，被学术界认为是最早的\"中国\"所在地，出土了世界上最早的观象台遗迹和铜铃等重要文物，是探索中华文明起源的关键遗址。",
        "coord": [
          111.48,
          35.89
        ],
        "photoSpots": [
          {
            "name": "观象台复原展示",
            "pose": "拍摄天文观测复原场景"
          },
          {
            "name": "遗址展厅",
            "pose": "拍摄出土文物展示"
          }
        ],
        "food": [
          {
            "name": "襄汾油粉饭",
            "star": 4,
            "desc": "襄汾特色小吃"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "目前遗址博物馆建设中，建议提前查询开放情况"
      },
      {
        "name": "云丘山",
        "rank": 8,
        "intro": "位于乡宁县，道教名山，素有\"河汾第一名胜\"之称，自然景观秀丽，有五龙宫、八宝宫等道教建筑群，冰洞群为其特色景观，每年中和节庙会盛况空前。",
        "coord": [
          110.87,
          35.87
        ],
        "photoSpots": [
          {
            "name": "五龙宫",
            "pose": "拍摄山间道教建筑群"
          },
          {
            "name": "冰洞内",
            "pose": "拍摄冰洞奇景"
          }
        ],
        "food": [
          {
            "name": "乡宁饸饹",
            "star": 4,
            "desc": "乡宁特色面食"
          },
          {
            "name": "翅果油",
            "star": 3,
            "desc": "当地特产食用油"
          }
        ],
        "duration": 5,
        "ticket": 80,
        "tip": "距临汾市区约80公里需自驾，冰洞群需穿棉衣"
      },
      {
        "name": "克难坡",
        "rank": 9,
        "intro": "位于吉县壶口镇附近，抗战时期阎锡山的第二战区长官部所在地，保留有大量抗战遗迹和窑洞建筑，是了解抗战历史的重要遗址，与壶口瀑布相邻可串联游览。",
        "coord": [
          110.48,
          36.2
        ],
        "photoSpots": [
          {
            "name": "阎锡山旧居",
            "pose": "拍摄窑洞式建筑"
          },
          {
            "name": "黄河远眺",
            "pose": "拍摄黄河峡谷风光"
          }
        ],
        "food": [
          {
            "name": "吉县苹果",
            "star": 4,
            "desc": "当地特产水果"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "与壶口瀑布相距不远，自驾可顺路参观"
      },
      {
        "name": "临汾鼓楼",
        "rank": 10,
        "intro": "始建于明代，临汾古城的标志性建筑，楼阁三层，飞檐翘角，夜间灯光璀璨，周围是临汾老城区最热闹的商业街区，可以感受临汾的市井烟火气息。",
        "coord": [
          111.519,
          36.085
        ],
        "photoSpots": [
          {
            "name": "鼓楼广场",
            "pose": "夜间拍摄灯光鼓楼"
          },
          {
            "name": "老街巷",
            "pose": "拍摄市井生活场景"
          }
        ],
        "food": [
          {
            "name": "油粉饭",
            "star": 4,
            "desc": "临汾特色早餐"
          },
          {
            "name": "牛肉丸子面",
            "star": 5,
            "desc": "鼓楼附近老字号"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "夜景很美，适合晚间散步，周边小吃街值得一逛"
      }
    ],
    "hidden": [
      {
        "name": "乾坤湾",
        "rank": 11,
        "intro": "位于永和县，黄河在此形成320度的天然大转弯，形似太极乾坤图，气势恢宏，被称为\"天下黄河第一湾\"，周围黄土高原地貌苍凉壮美，是摄影爱好者的天堂。",
        "coord": [
          110.73,
          36.63
        ],
        "photoSpots": [
          {
            "name": "乾坤湾观景台",
            "pose": "俯拍黄河大转弯全景"
          },
          {
            "name": "日出观景台",
            "pose": "拍摄黄河日出"
          }
        ],
        "food": [
          {
            "name": "永和红枣",
            "star": 4,
            "desc": "永和特产，个大味甜"
          }
        ],
        "duration": 3,
        "ticket": 80,
        "tip": "位置偏远需自驾，日出日落时分最为壮观，建议住一晚",
        "trend": "+160% 近3月热度"
      },
      {
        "name": "丁村遗址",
        "rank": 12,
        "intro": "位于襄汾县，是旧石器时代中期的典型遗址，出土了大量石器和古人类化石，距今约10万年，是研究中国古人类演化的重要地点，丁村民居也保存完好具有特色。",
        "coord": [
          111.45,
          35.85
        ],
        "photoSpots": [
          {
            "name": "丁村民居",
            "pose": "拍摄明清民居建筑群"
          },
          {
            "name": "遗址展示区",
            "pose": "拍摄出土文物"
          }
        ],
        "food": [
          {
            "name": "襄汾油粉饭",
            "star": 3,
            "desc": "襄汾特色小吃"
          }
        ],
        "duration": 2,
        "ticket": 20,
        "tip": "考古爱好者值得一去，与陶寺遗址可串联",
        "trend": "+65% 近3月热度"
      },
      {
        "name": "仙洞沟",
        "rank": 13,
        "intro": "位于尧都区西南，相传为帝尧与鹿仙女成婚之地，峡谷幽深，瀑布飞流，自然生态良好，夏季清凉避暑，有\"天然空调\"之称，是周末休闲的好去处。",
        "coord": [
          111.35,
          35.95
        ],
        "photoSpots": [
          {
            "name": "峡谷瀑布",
            "pose": "拍摄瀑布与峡谷"
          },
          {
            "name": "林间步道",
            "pose": "拍摄幽静山林"
          }
        ],
        "food": [
          {
            "name": "山野菜",
            "star": 3,
            "desc": "附近农家饭菜"
          }
        ],
        "duration": 3,
        "ticket": 40,
        "tip": "距市区约30公里，适合周末半日游，夏季最佳",
        "trend": "+85% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "临汾尧都机场（临汾市区南约10公里）",
    "mainStation": "临汾西站（高铁）/临汾站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 18,
      "busCost": "市区公交1-2元，壶口瀑布旅游专线30元"
    },
    "driving": {
      "tollPerDay": 80,
      "fuelPer100km": 65,
      "parking": "景区停车10-20元/次，壶口景区停车20元"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "临汾金都花园大酒店",
        "loc": "尧都区鼓楼南大街",
        "price": 580,
        "star": 5,
        "perks": "临汾顶级酒店，花园式环境，设施齐全"
      },
      {
        "name": "临汾五洲皇冠酒店",
        "loc": "尧都区迎宾大道",
        "price": 480,
        "star": 4,
        "perks": "近高铁站，商务配套完善"
      },
      {
        "name": "洪洞大槐树民俗饭店",
        "loc": "洪洞县古槐北路",
        "price": 420,
        "star": 4,
        "perks": "寻根主题酒店，文化氛围浓"
      }
    ],
    "mid": [
      {
        "name": "临汾天鹅大酒店",
        "loc": "尧都区平阳北街",
        "price": 300,
        "star": 3,
        "perks": "市中心位置，出行方便"
      },
      {
        "name": "临汾金海湾酒店",
        "loc": "尧都区滨河路",
        "price": 280,
        "star": 3,
        "perks": "近汾河公园，环境好"
      },
      {
        "name": "吉县壶口人家客栈",
        "loc": "吉县壶口镇",
        "price": 250,
        "star": 3,
        "perks": "近壶口瀑布，黄土风情"
      }
    ],
    "budget": [
      {
        "name": "如家临汾鼓楼店",
        "loc": "尧都区鼓楼东大街",
        "price": 130,
        "star": 2,
        "perks": "靠近鼓楼商圈，交通方便"
      },
      {
        "name": "汉庭临汾火车站店",
        "loc": "尧都区车站街",
        "price": 140,
        "star": 3,
        "perks": "靠近火车站，出行便利"
      },
      {
        "name": "壶口农家住宿",
        "loc": "吉县壶口镇",
        "price": 80,
        "star": 2,
        "perks": "农家体验，可听黄河入眠"
      }
    ]
  }
};

// 运城
window.CITY_DATABASE['运城'] = {
  "code": "yuncheng",
  "province": "山西省",
  "coord": [
    111.003,
    35.022
  ],
  "bestSeason": "3-11月，春季盐湖花开，秋季气候宜人最舒适",
  "routes": {
    "classic": {
      "name": "关公故里经典之旅",
      "days": 3,
      "tagline": "拜关公、登鹳雀楼、赏盐湖奇景，感受河东文明",
      "spots": [
        "解州关帝庙",
        "运城盐湖",
        "鹳雀楼",
        "普救寺"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "关公文化与盐湖奇观",
          "list": [
            "解州关帝庙",
            "运城盐湖",
            "池神庙"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "黄河名楼与爱情传说",
          "list": [
            "鹳雀楼",
            "普救寺",
            "黄河大铁牛"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "壁画瑰宝与名人故里",
          "list": [
            "永乐宫",
            "司马光祠"
          ],
          "hours": 7
        }
      ]
    },
    "niche": {
      "name": "河东秘境之旅",
      "days": 2,
      "tagline": "远离人潮，探寻运城乡村的古朴之美与非遗文化",
      "spots": [
        "池神庙",
        "司马光祠",
        "堆云洞",
        "凤凰谷"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "盐文化探秘",
          "list": [
            "池神庙",
            "运城盐湖",
            "河东博物馆"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "名人故里寻踪",
          "list": [
            "司马光祠",
            "堆云洞"
          ],
          "hours": 5
        }
      ]
    },
    "culture": {
      "name": "河东文化深度游",
      "days": 3,
      "tagline": "从元代壁画到唐代名楼，领略河东大地千年文化底蕴",
      "spots": [
        "永乐宫",
        "鹳雀楼",
        "解州关帝庙",
        "普救寺"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "壁画艺术殿堂",
          "list": [
            "永乐宫",
            "广仁王庙"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "关公与名楼",
          "list": [
            "解州关帝庙",
            "鹳雀楼",
            "普救寺"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "盐文化与名人",
          "list": [
            "运城盐湖",
            "池神庙",
            "司马光祠"
          ],
          "hours": 6
        }
      ]
    },
    "nature": {
      "name": "盐湖自然风光",
      "days": 2,
      "tagline": "探秘中国死海，感受盐湖四季变幻的自然奇观",
      "spots": [
        "运城盐湖",
        "池神庙",
        "中条山",
        "凤凰谷"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "盐湖奇观",
          "list": [
            "运城盐湖",
            "池神庙",
            "盐湖生态公园"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "中条山风光",
          "list": [
            "中条山",
            "凤凰谷",
            "五老峰"
          ],
          "hours": 7
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "解州关帝庙",
        "rank": 1,
        "intro": "始建于隋开皇九年（589年），是中国现存规模最大、保存最完好的关帝庙，被誉为\"武庙之祖\"，占地22万平方米，建筑群气势恢宏，是海内外关帝信仰的中心。",
        "coord": [
          110.85,
          34.92
        ],
        "photoSpots": [
          {
            "name": "崇宁殿前",
            "pose": "拍摄主殿全貌与盘龙石柱"
          },
          {
            "name": "春秋楼",
            "pose": "拍摄三层楼阁建筑"
          }
        ],
        "food": [
          {
            "name": "解州羊肉泡馍",
            "star": 5,
            "desc": "解州特色早餐，汤鲜肉嫩"
          },
          {
            "name": "运城大盘鸡",
            "star": 4,
            "desc": "运城改良版大盘鸡"
          }
        ],
        "duration": 3,
        "ticket": 60,
        "tip": "每年9月关公文化节最热闹，建议请讲解了解关公生平与建筑寓意"
      },
      {
        "name": "运城盐湖",
        "rank": 2,
        "intro": "有\"中国死海\"之称，东西长30公里，总面积132平方公里，是世界三大硫酸钠型内陆盐湖之一，夏季盐花结晶五彩斑斓，可以体验盐水漂浮和天然黑泥浴。",
        "coord": [
          111.05,
          34.96
        ],
        "photoSpots": [
          {
            "name": "盐湖观景台",
            "pose": "俯拍五彩盐田全景"
          },
          {
            "name": "盐湖步道",
            "pose": "拍摄盐花结晶特写"
          }
        ],
        "food": [
          {
            "name": "运城锅巴",
            "star": 4,
            "desc": "当地特产零食"
          },
          {
            "name": "闻喜煮饼",
            "star": 5,
            "desc": "闻喜名产，外酥内软"
          }
        ],
        "duration": 3,
        "ticket": 198,
        "tip": "漂浮体验含在门票内，夏季最佳，注意防晒，盐水有刺痛感"
      },
      {
        "name": "鹳雀楼",
        "rank": 3,
        "intro": "因王之涣\"白日依山尽，黄河入海流\"千古名诗而闻名天下，始建于北周，现楼为2002年重建，高73.9米，气势雄伟，登楼可远眺黄河与中条山，感受\"更上一层楼\"的意境。",
        "coord": [
          110.29,
          34.87
        ],
        "photoSpots": [
          {
            "name": "楼前广场",
            "pose": "拍摄鹳雀楼全貌"
          },
          {
            "name": "楼顶观景层",
            "pose": "拍摄黄河远眺与中条山"
          }
        ],
        "food": [
          {
            "name": "永济扯面",
            "star": 4,
            "desc": "永济特色面食，宽厚筋道"
          },
          {
            "name": "永济饺子",
            "star": 4,
            "desc": "永济传统面食"
          }
        ],
        "duration": 2,
        "ticket": 45,
        "tip": "登楼远望黄河景色最佳时间为下午，光线柔和适合拍照"
      },
      {
        "name": "普救寺",
        "rank": 4,
        "intro": "始建于唐武则天时期，因元稹《莺莺传》和王实甫《西厢记》中的张生与崔莺莺爱情故事而闻名，被誉为\"爱情圣地\"，寺内莺莺塔为中国四大回音建筑之一。",
        "coord": [
          110.31,
          34.88
        ],
        "photoSpots": [
          {
            "name": "莺莺塔前",
            "pose": "拍摄古塔与寺院全景"
          },
          {
            "name": "西厢书房",
            "pose": "拍摄故事场景复原"
          }
        ],
        "food": [
          {
            "name": "永济牛肉饺子",
            "star": 4,
            "desc": "永济特色面食"
          }
        ],
        "duration": 2,
        "ticket": 45,
        "tip": "可在莺莺塔前击掌体验回音效果，与鹳雀楼相距不远可串联"
      },
      {
        "name": "永乐宫",
        "rank": 5,
        "intro": "始建于元代，是中国现存最大最完整的元代道教宫观，三清殿内的《朝元图》壁画高4.26米、长94.68米，绘有286个道教人物，是中国古代壁画的巅峰之作。",
        "coord": [
          110.67,
          34.72
        ],
        "photoSpots": [
          {
            "name": "三清殿外",
            "pose": "拍摄元代建筑全貌"
          },
          {
            "name": "壁画展厅",
            "pose": "欣赏壁画复制品（殿内禁拍）"
          }
        ],
        "food": [
          {
            "name": "芮城麻片",
            "star": 4,
            "desc": "芮城特产甜食"
          },
          {
            "name": "芮城卤肉",
            "star": 4,
            "desc": "当地特色肉食"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "殿内壁画禁止拍照，建议租用讲解器深入了解壁画艺术"
      }
    ],
    "secondary": [
      {
        "name": "司马光祠",
        "rank": 6,
        "intro": "为纪念北宋著名政治家、史学家司马光而建，位于夏县鸣条岗，司马光墓在祠后，祠内展示《资治通鉴》编纂历史及司马光生平事迹，是了解宋代政治文化的重要窗口。",
        "coord": [
          111.28,
          35.15
        ],
        "photoSpots": [
          {
            "name": "祠堂正殿",
            "pose": "拍摄司马光塑像与殿宇"
          },
          {
            "name": "余庆禅院",
            "pose": "拍摄宋代风格禅院"
          }
        ],
        "food": [
          {
            "name": "夏县粉条",
            "star": 3,
            "desc": "夏县特色小吃"
          }
        ],
        "duration": 1.5,
        "ticket": 20,
        "tip": "位置较偏需自驾，适合历史文化爱好者"
      },
      {
        "name": "池神庙",
        "rank": 7,
        "intro": "始建于唐大历十四年，为祭祀盐池之神所建，是中国唯一祭祀盐神的庙宇，庙内三座大殿并列，建筑格局独特，碑刻众多，反映了古代盐业经济的重要地位。",
        "coord": [
          111.06,
          34.97
        ],
        "photoSpots": [
          {
            "name": "三大殿前",
            "pose": "拍摄三座并列大殿"
          },
          {
            "name": "盐池远眺",
            "pose": "从庙内远望盐湖"
          }
        ],
        "food": [
          {
            "name": "稷山麻花",
            "star": 4,
            "desc": "稷山名产，酥脆可口"
          }
        ],
        "duration": 1.5,
        "ticket": 20,
        "tip": "与盐湖相邻可一并游览，了解盐文化的历史渊源"
      },
      {
        "name": "五老峰",
        "rank": 8,
        "intro": "位于永济市，道教名山，相传为五老授《河图》《洛书》之处，主峰玉柱峰海拔1896米，山势险峻，道教建筑依山而建，云海日出景色壮观，有\"东华山\"之称。",
        "coord": [
          110.45,
          34.82
        ],
        "photoSpots": [
          {
            "name": "玉柱峰顶",
            "pose": "拍摄云海与群峰"
          },
          {
            "name": "南天门",
            "pose": "拍摄险峻山道与建筑"
          }
        ],
        "food": [
          {
            "name": "永济扯面",
            "star": 4,
            "desc": "下山后可品尝"
          }
        ],
        "duration": 5,
        "ticket": 70,
        "tip": "登山需体力，建议穿运动鞋带水，日出需住山顶"
      },
      {
        "name": "黄河大铁牛",
        "rank": 9,
        "intro": "位于永济市古蒲州城西门外，铸造于唐开元十二年（724年），原为蒲津渡浮桥的地锚，每尊重约30吨，是中国现存最大的古代铸铁文物，体现了唐代高超的铸造工艺。",
        "coord": [
          110.31,
          34.87
        ],
        "photoSpots": [
          {
            "name": "铁牛广场",
            "pose": "与唐代铁牛合影"
          },
          {
            "name": "铁人侧面",
            "pose": "拍摄铁人铸造细节"
          }
        ],
        "food": [
          {
            "name": "永济饺子",
            "star": 4,
            "desc": "附近餐馆有售"
          }
        ],
        "duration": 1,
        "ticket": 20,
        "tip": "与鹳雀楼、普救寺在同一片区可串联游览"
      },
      {
        "name": "广仁王庙",
        "rank": 10,
        "intro": "位于芮城县，正殿建于唐大和五年（831年），是中国现存第二古老的木构建筑，仅次于南禅寺大殿，殿内梁架结构为典型唐代风格，是研究唐代建筑的重要实例。",
        "coord": [
          110.68,
          34.71
        ],
        "photoSpots": [
          {
            "name": "正殿正面",
            "pose": "拍摄唐代木构建筑"
          },
          {
            "name": "殿内梁架",
            "pose": "拍摄唐代建筑内部结构"
          }
        ],
        "food": [
          {
            "name": "芮城麻片",
            "star": 3,
            "desc": "芮城特产甜食"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "与永乐宫相距不远，建筑爱好者不可错过"
      }
    ],
    "hidden": [
      {
        "name": "堆云洞",
        "rank": 11,
        "intro": "位于稷山县城西，始建于元代，道教宫观建在山间洞穴之中，洞内建筑层层叠叠如同堆云，故名\"堆云洞\"，是山西罕见的洞穴式建筑群，小巧精致别有洞天。",
        "coord": [
          110.93,
          35.58
        ],
        "photoSpots": [
          {
            "name": "洞口",
            "pose": "拍摄层叠建筑与山体"
          },
          {
            "name": "洞内楼阁",
            "pose": "拍摄精巧建筑空间"
          }
        ],
        "food": [
          {
            "name": "稷山麻花",
            "star": 5,
            "desc": "稷山名产，正宗酥脆"
          },
          {
            "name": "稷山板枣",
            "star": 4,
            "desc": "稷山特产干果"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "位置不太显眼容易错过，导航准确地址，适合古建爱好者",
        "trend": "+70% 近3月热度"
      },
      {
        "name": "凤凰谷",
        "rank": 12,
        "intro": "位于盐湖区死海附近，峡谷内植被茂密，溪水潺潺，有天然氧吧之称，谷内奇石众多，瀑布飞流，四季景色各异，是运城近郊休闲徒步的好去处。",
        "coord": [
          111.12,
          34.92
        ],
        "photoSpots": [
          {
            "name": "峡谷入口",
            "pose": "拍摄翠谷与溪流"
          },
          {
            "name": "瀑布群",
            "pose": "拍摄飞瀑与奇石"
          }
        ],
        "food": [
          {
            "name": "农家饭",
            "star": 3,
            "desc": "谷口农家院提供简餐"
          }
        ],
        "duration": 3,
        "ticket": 30,
        "tip": "夏季清凉避暑，适合亲子游，注意防滑",
        "trend": "+100% 近3月热度"
      },
      {
        "name": "后土祠",
        "rank": 13,
        "intro": "位于万荣县，始建于汉代，是中国最古老的祭祀后土（大地之母）的庙宇，秋风楼为祠内标志性建筑，汉武帝曾在此写下《秋风辞》，是研究中国古代祭祀文化的重要遗址。",
        "coord": [
          110.65,
          35.37
        ],
        "photoSpots": [
          {
            "name": "秋风楼",
            "pose": "拍摄汉代风格楼阁"
          },
          {
            "name": "祠前广场",
            "pose": "拍摄后土祠全景"
          }
        ],
        "food": [
          {
            "name": "万荣凉粉",
            "star": 4,
            "desc": "万荣特色小吃"
          }
        ],
        "duration": 1.5,
        "ticket": 15,
        "tip": "位置偏僻需自驾，秋季去最应景，可吟诵《秋风辞》",
        "trend": "+55% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "运城张孝机场（运城市区东北约15公里）",
    "mainStation": "运城北站（高铁）/运城站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 18,
      "busCost": "市区公交1-2元，永济方向旅游专线15元"
    },
    "driving": {
      "tollPerDay": 70,
      "fuelPer100km": 60,
      "parking": "景区停车10-15元/次，市区停车3元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "运城恒泽大酒店",
        "loc": "盐湖区红旗西街",
        "price": 520,
        "star": 5,
        "perks": "运城最好的商务酒店，位置核心"
      },
      {
        "name": "运城建国饭店",
        "loc": "盐湖区河东东街",
        "price": 480,
        "star": 5,
        "perks": "老牌高端酒店，服务一流"
      },
      {
        "name": "永济鹳雀楼度假酒店",
        "loc": "永济市蒲州镇",
        "price": 450,
        "star": 4,
        "perks": "近鹳雀楼，黄河风情"
      }
    ],
    "mid": [
      {
        "name": "运城盐湖大酒店",
        "loc": "盐湖区解放南路",
        "price": 280,
        "star": 3,
        "perks": "近盐湖，可观盐田日落"
      },
      {
        "name": "运城金鑫大酒店",
        "loc": "盐湖区河东西街",
        "price": 260,
        "star": 3,
        "perks": "市中心位置，出行方便"
      },
      {
        "name": "芮城大酒店",
        "loc": "芮城县永乐路",
        "price": 220,
        "star": 3,
        "perks": "近永乐宫，县城最佳选择"
      }
    ],
    "budget": [
      {
        "name": "如家运城河东街店",
        "loc": "盐湖区河东街",
        "price": 120,
        "star": 2,
        "perks": "连锁品质，位置好"
      },
      {
        "name": "汉庭运城火车站店",
        "loc": "盐湖区站前路",
        "price": 130,
        "star": 3,
        "perks": "靠近火车站，交通便利"
      },
      {
        "name": "永济锦江之星",
        "loc": "永济市舜都大道",
        "price": 110,
        "star": 2,
        "perks": "靠近景区，干净整洁"
      }
    ]
  }
};

// 长治
window.CITY_DATABASE['长治'] = {
  "code": "changzhi",
  "province": "山西省",
  "coord": [
    113.113,
    36.191
  ],
  "bestSeason": "5-10月，夏季避暑胜地，太行山峡谷绿意盎然",
  "routes": {
    "classic": {
      "name": "太行山水经典之旅",
      "days": 3,
      "tagline": "深入太行腹地，领略八百里太行最壮美的山水画卷",
      "spots": [
        "太行山大峡谷(八泉峡)",
        "通天峡",
        "太行水乡",
        "上党门"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "八泉峡太行精华",
          "list": [
            "太行山大峡谷(八泉峡)",
            "红豆峡"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "峡谷与水乡",
          "list": [
            "通天峡",
            "太行水乡"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "上党古韵",
          "list": [
            "上党门",
            "法兴寺",
            "老顶山"
          ],
          "hours": 6
        }
      ]
    },
    "niche": {
      "name": "太行深处秘境",
      "days": 2,
      "tagline": "走进太行山最原生态的村落与峡谷，远离喧嚣",
      "spots": [
        "太行山大峡谷(八泉峡)",
        "太行水乡",
        "岳家寨"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "太行深谷探秘",
          "list": [
            "太行山大峡谷(八泉峡)",
            "紫团山"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "古村与水乡",
          "list": [
            "岳家寨",
            "太行水乡"
          ],
          "hours": 7
        }
      ]
    },
    "culture": {
      "name": "红色太行文化之旅",
      "days": 3,
      "tagline": "追溯太行精神，感受抗战年代的峥嵘岁月与上党文明",
      "spots": [
        "八路军太行纪念馆",
        "太行山大峡谷(八泉峡)",
        "上党门",
        "法兴寺"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "红色记忆",
          "list": [
            "八路军太行纪念馆",
            "八路军总部旧址"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "上党文明",
          "list": [
            "上党门",
            "法兴寺",
            "老顶山"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "太行山水",
          "list": [
            "太行山大峡谷(八泉峡)"
          ],
          "hours": 8
        }
      ]
    },
    "nature": {
      "name": "太行自然风光之旅",
      "days": 3,
      "tagline": "畅游太行大峡谷群，感受北方山水的雄浑与秀美",
      "spots": [
        "太行山大峡谷(八泉峡)",
        "通天峡",
        "太行水乡",
        "天脊山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "八泉峡精华",
          "list": [
            "太行山大峡谷(八泉峡)",
            "红豆峡"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "峡谷奇景",
          "list": [
            "通天峡",
            "天脊山"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "水乡田园",
          "list": [
            "太行水乡",
            "老顶山"
          ],
          "hours": 6
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "太行山大峡谷(八泉峡)",
        "rank": 1,
        "intro": "太行山大峡谷最精华的景区，有\"太行第一峡\"之称，峡谷全长13公里，泉水从八个泉眼涌出，碧绿如玉，两岸悬崖峭壁，有游船、索道、电梯等多种游览方式，被誉为\"北方张家界\"。",
        "coord": [
          113.72,
          36.26
        ],
        "photoSpots": [
          {
            "name": "八泉峡游船",
            "pose": "拍摄碧绿峡谷水与绝壁"
          },
          {
            "name": "天空之城观景台",
            "pose": "俯拍峡谷全景"
          }
        ],
        "food": [
          {
            "name": "壶关羊汤",
            "star": 5,
            "desc": "壶关县特色羊汤，鲜而不膻"
          },
          {
            "name": "党参炖鸡",
            "star": 4,
            "desc": "上党党参炖制，滋补养生"
          }
        ],
        "duration": 5,
        "ticket": 140,
        "tip": "建议购买含游船+索道+电梯的全程票，体力分配合理，旺季排队较长"
      },
      {
        "name": "八路军太行纪念馆",
        "rank": 2,
        "intro": "位于武乡县，是国内唯一一座全面反映八路军抗战历史的大型革命纪念馆，馆藏文物6000余件，全面展示了八路军在太行山的抗战历程，是红色旅游和爱国主义教育的重要基地。",
        "coord": [
          112.98,
          36.81
        ],
        "photoSpots": [
          {
            "name": "纪念馆广场",
            "pose": "拍摄纪念馆全貌与雕塑"
          },
          {
            "name": "抗战文物展厅",
            "pose": "拍摄珍贵历史展品"
          }
        ],
        "food": [
          {
            "name": "武乡枣糕",
            "star": 4,
            "desc": "武乡传统小吃"
          },
          {
            "name": "炒指",
            "star": 3,
            "desc": "武乡特色面食小食"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "免费参观需携带身份证，建议预留2小时，讲解服务可预约"
      },
      {
        "name": "通天峡",
        "rank": 3,
        "intro": "位于平顺县，太行山大峡谷的重要组成部分，峡谷深邃，瀑布飞流，有\"北方小九寨\"之称，通天湖碧绿如翡翠，天瀑寺古朴幽静，是太行山水的精华之一。",
        "coord": [
          113.65,
          36.33
        ],
        "photoSpots": [
          {
            "name": "通天湖",
            "pose": "拍摄碧绿湖水与绝壁倒影"
          },
          {
            "name": "天瀑寺",
            "pose": "拍摄山间古刹与瀑布"
          }
        ],
        "food": [
          {
            "name": "平顺花椒芽",
            "star": 4,
            "desc": "平顺特产野菜"
          },
          {
            "name": "党参面",
            "star": 3,
            "desc": "上党特色面食"
          }
        ],
        "duration": 4,
        "ticket": 90,
        "tip": "与八泉峡同属太行山大峡谷体系，建议安排不同日期"
      },
      {
        "name": "上党门",
        "rank": 4,
        "intro": "始建于隋开皇年间，是古上党郡署的大门，现存建筑为明代重修，门楼高耸，气势雄伟，两侧钟楼和鼓楼对称，是长治古城的标志性建筑，见证了上党地区的千年历史。",
        "coord": [
          113.116,
          36.197
        ],
        "photoSpots": [
          {
            "name": "上党门前广场",
            "pose": "拍摄门楼全貌"
          },
          {
            "name": "夜间灯光",
            "pose": "拍摄灯光下的古城门"
          }
        ],
        "food": [
          {
            "name": "长治驴肉甩饼",
            "star": 5,
            "desc": "长治标志性美食，外酥里嫩"
          },
          {
            "name": "潞城甩饼",
            "star": 4,
            "desc": "潞城区正宗风味"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "免费开放，夜间灯光效果好，可结合古城周边散步"
      },
      {
        "name": "太行水乡",
        "rank": 5,
        "intro": "位于平顺县，浊漳河在此蜿蜒流淌，两岸古村落错落有致，被称为\"北方水乡\"，有柳树湾、华野漂流、红旗渠源头等景点，田园风光秀美，适合休闲漂流。",
        "coord": [
          113.58,
          36.32
        ],
        "photoSpots": [
          {
            "name": "柳树湾",
            "pose": "拍摄垂柳与碧水田园"
          },
          {
            "name": "漂流河道",
            "pose": "拍摄漂流与河谷风光"
          }
        ],
        "food": [
          {
            "name": "平顺潞党参",
            "star": 3,
            "desc": "当地特产滋补品"
          },
          {
            "name": "农家菜",
            "star": 4,
            "desc": "河畔农家院的地道菜"
          }
        ],
        "duration": 4,
        "ticket": 60,
        "tip": "夏季漂流最受欢迎，建议带换洗衣物，注意安全"
      }
    ],
    "secondary": [
      {
        "name": "法兴寺",
        "rank": 6,
        "intro": "始建于北魏，位于长子县慈林山，寺内唐代石舍利塔、唐代泥塑十二圆觉像和宋代彩塑被誉为\"法兴寺三绝\"，是中国古代雕塑艺术的珍品，具有极高的艺术和历史价值。",
        "coord": [
          112.87,
          36.13
        ],
        "photoSpots": [
          {
            "name": "石舍利塔",
            "pose": "拍摄唐代石塔雕刻"
          },
          {
            "name": "圆觉殿前",
            "pose": "拍摄宋代殿堂建筑"
          }
        ],
        "food": [
          {
            "name": "长子炒饼",
            "star": 5,
            "desc": "长子县名吃，薄脆鲜香"
          },
          {
            "name": "长子猪头肉",
            "star": 4,
            "desc": "当地特色冷盘"
          }
        ],
        "duration": 2,
        "ticket": 20,
        "tip": "泥塑艺术价值极高，建议请讲解了解艺术特色"
      },
      {
        "name": "老顶山",
        "rank": 7,
        "intro": "位于长治市区东郊，国家森林公园，炎帝神农氏曾在此尝百草，山顶炎帝铜像高39米为长治地标，山林覆盖率高，空气清新，是市民登山健身和周末休闲的好去处。",
        "coord": [
          113.18,
          36.2
        ],
        "photoSpots": [
          {
            "name": "炎帝铜像",
            "pose": "与巨型炎帝铜像合影"
          },
          {
            "name": "山顶观景台",
            "pose": "俯瞰长治城区全景"
          }
        ],
        "food": [
          {
            "name": "上党腊驴肉",
            "star": 5,
            "desc": "长治名产，腊香浓郁"
          },
          {
            "name": "长治羊汤",
            "star": 4,
            "desc": "山下餐馆正宗羊汤"
          }
        ],
        "duration": 3,
        "ticket": 30,
        "tip": "登山步道完善，适合晨练，炎帝铜像处视野开阔"
      },
      {
        "name": "天脊山",
        "rank": 8,
        "intro": "位于平顺县，太行山脉脊背之上，海拔1886米，有\"太行山脊\"之称，山势险峻，悬崖栈道惊险刺激，瀑布群壮观，自然生态原始，是户外徒步和探险的理想目的地。",
        "coord": [
          113.7,
          36.4
        ],
        "photoSpots": [
          {
            "name": "天脊栈道",
            "pose": "拍摄悬崖栈道与深谷"
          },
          {
            "name": "天脊瀑布",
            "pose": "拍摄飞瀑与峡谷"
          }
        ],
        "food": [
          {
            "name": "山野菜",
            "star": 3,
            "desc": "山上采集的新鲜野菜"
          }
        ],
        "duration": 5,
        "ticket": 50,
        "tip": "山路陡峭需体力，建议穿登山鞋，带足水和干粮"
      },
      {
        "name": "红豆峡",
        "rank": 9,
        "intro": "太行山大峡谷的一部分，因峡谷中生长大量珍稀红豆杉而得名，被誉为\"中国第一情峡\"，峡谷幽深，植被丰富，红豆杉为第四纪冰川遗存植物，具有极高的科研价值。",
        "coord": [
          113.68,
          36.28
        ],
        "photoSpots": [
          {
            "name": "红豆杉林",
            "pose": "拍摄珍稀红豆杉"
          },
          {
            "name": "峡谷溪涧",
            "pose": "拍摄幽深峡谷与溪流"
          }
        ],
        "food": [
          {
            "name": "壶关羊汤",
            "star": 4,
            "desc": "壶关特色汤品"
          }
        ],
        "duration": 3,
        "ticket": 60,
        "tip": "与八泉峡同票或单独购票均可，秋季红豆杉果实红时最美"
      },
      {
        "name": "崇庆寺",
        "rank": 10,
        "intro": "位于长子县，始建于北宋，千佛殿内的宋代彩塑十八罗汉和三大士像为国之瑰宝，造型生动传神，色彩保存完好，是研究宋代佛教雕塑艺术的珍贵实物资料。",
        "coord": [
          112.9,
          36.08
        ],
        "photoSpots": [
          {
            "name": "千佛殿外",
            "pose": "拍摄宋代建筑外观"
          },
          {
            "name": "寺院全景",
            "pose": "拍摄山间古刹环境"
          }
        ],
        "food": [
          {
            "name": "长子炒饼",
            "star": 4,
            "desc": "长子县特色面食"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "位置偏僻需自驾或包车，与法兴寺相距不远可串联"
      }
    ],
    "hidden": [
      {
        "name": "岳家寨",
        "rank": 11,
        "intro": "位于平顺县太行山深处，相传为岳飞后人避居之所，整个村落建在悬崖之上，石板房层叠错落，被称为\"太行空中村\"，保存了大量明清古建筑，是太行山原生态古村落的代表。",
        "coord": [
          113.62,
          36.35
        ],
        "photoSpots": [
          {
            "name": "村口观景台",
            "pose": "拍摄悬崖上的古村落全景"
          },
          {
            "name": "石板巷道",
            "pose": "拍摄石板房与古巷"
          }
        ],
        "food": [
          {
            "name": "农家饭",
            "star": 4,
            "desc": "村民自营农家院，地道太行味"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "山路弯多路窄需谨慎驾驶，适合摄影和古村落爱好者",
        "trend": "+130% 近3月热度"
      },
      {
        "name": "紫团山",
        "rank": 12,
        "intro": "位于壶关县，因山间常有紫色云团环绕而得名，道教名山，紫团洞为中国北方最大的溶洞之一，洞内钟乳石造型奇特，山上白云寺历史悠久，是太行山中一处清幽之地。",
        "coord": [
          113.58,
          36.1
        ],
        "photoSpots": [
          {
            "name": "白云寺",
            "pose": "拍摄山间道教建筑"
          },
          {
            "name": "紫团洞内",
            "pose": "拍摄溶洞钟乳石"
          }
        ],
        "food": [
          {
            "name": "壶关羊汤",
            "star": 4,
            "desc": "壶关特色"
          }
        ],
        "duration": 3,
        "ticket": 40,
        "tip": "游客较少，适合喜欢清静的旅行者，溶洞内温度低需带外套",
        "trend": "+75% 近3月热度"
      },
      {
        "name": "沁源花坡",
        "rank": 13,
        "intro": "位于沁源县，太岳山高山草甸景观，海拔2000米以上，每年6-9月漫山遍野鲜花盛开，金莲花、狼毒花等竞相绽放，被誉为\"天然花园\"，是露营和徒步的绝佳目的地。",
        "coord": [
          112.35,
          36.75
        ],
        "photoSpots": [
          {
            "name": "草甸高处",
            "pose": "拍摄花海与远山全景"
          },
          {
            "name": "花丛中",
            "pose": "拍摄金莲花特写"
          }
        ],
        "food": [
          {
            "name": "沁源莜面",
            "star": 3,
            "desc": "当地特色面食"
          }
        ],
        "duration": 4,
        "ticket": 30,
        "tip": "距长治市区约120公里，7月花期最美，适合自驾露营",
        "trend": "+145% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "长治王村机场（长治市区北约7公里）",
    "mainStation": "长治东站（高铁）/长治站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 18,
      "busCost": "市区公交1-2元，太行山大峡谷旅游专线20元"
    },
    "driving": {
      "tollPerDay": 80,
      "fuelPer100km": 70,
      "parking": "景区停车10-20元/次，太行山路窄注意会车"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "长治滨湖国际大酒店",
        "loc": "潞州区太行东街",
        "price": 580,
        "star": 5,
        "perks": "近漳泽湖，环境一流，设施豪华"
      },
      {
        "name": "长治益东国际酒店",
        "loc": "潞州区八一广场",
        "price": 480,
        "star": 4,
        "perks": "市中心地段，商务配套齐全"
      },
      {
        "name": "壶关太行山大峡谷度假酒店",
        "loc": "壶关县桥上乡",
        "price": 520,
        "star": 4,
        "perks": "峡谷内住宿，可观山景"
      }
    ],
    "mid": [
      {
        "name": "长治鹏宇大酒店",
        "loc": "潞州区英雄中路",
        "price": 300,
        "star": 3,
        "perks": "市中心位置，交通便利"
      },
      {
        "name": "壶关大峡谷宾馆",
        "loc": "壶关县桥上乡",
        "price": 260,
        "star": 3,
        "perks": "近八泉峡，山间环境清幽"
      },
      {
        "name": "武乡太行酒店",
        "loc": "武乡县迎宾街",
        "price": 220,
        "star": 3,
        "perks": "近纪念馆，红色主题"
      }
    ],
    "budget": [
      {
        "name": "汉庭长治八一广场店",
        "loc": "潞州区八一广场",
        "price": 140,
        "star": 3,
        "perks": "市中心连锁，出行方便"
      },
      {
        "name": "如家长治英雄街店",
        "loc": "潞州区英雄街",
        "price": 120,
        "star": 2,
        "perks": "连锁品质，价格实惠"
      },
      {
        "name": "桥上乡农家客栈",
        "loc": "壶关县桥上乡",
        "price": 80,
        "star": 2,
        "perks": "峡谷内农家住宿，体验太行风情"
      }
    ]
  }
};

// 晋城
window.CITY_DATABASE['晋城'] = {
  "code": "jincheng",
  "province": "山西省",
  "coord": [
    112.851,
    35.497
  ],
  "bestSeason": "4-10月，夏季避暑纳凉，秋季红叶满山最为绚丽",
  "routes": {
    "classic": {
      "name": "古堡名山经典之旅",
      "days": 3,
      "tagline": "探访宰相故里，登临太行南端，感受晋城古建与山水之美",
      "spots": [
        "皇城相府",
        "王莽岭",
        "蟒河",
        "青莲寺"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "相府古堡巡礼",
          "list": [
            "皇城相府",
            "郭峪古村"
          ],
          "hours": 7
        },
        {
          "day": 2,
          "theme": "太行南端绝景",
          "list": [
            "王莽岭",
            "锡崖沟"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "山水与古刹",
          "list": [
            "蟒河",
            "青莲寺"
          ],
          "hours": 7
        }
      ]
    },
    "niche": {
      "name": "太行古堡群探秘",
      "days": 2,
      "tagline": "寻访太行山间散落的古堡村落，触摸历史的温度",
      "spots": [
        "皇城相府",
        "郭峪古村",
        "柳氏民居",
        "砥洎城"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "古堡群巡访",
          "list": [
            "皇城相府",
            "郭峪古村",
            "砥洎城"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "文人故居",
          "list": [
            "柳氏民居",
            "青莲寺"
          ],
          "hours": 6
        }
      ]
    },
    "culture": {
      "name": "晋城古建人文之旅",
      "days": 3,
      "tagline": "从唐代古刹到明清城堡，品读晋城千年建筑文化",
      "spots": [
        "皇城相府",
        "青莲寺",
        "柳氏民居",
        "玉皇庙"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "相府与古堡",
          "list": [
            "皇城相府",
            "郭峪古村",
            "砥洎城"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "古刹与民居",
          "list": [
            "青莲寺",
            "柳氏民居",
            "玉皇庙"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "太行绝壁",
          "list": [
            "王莽岭",
            "锡崖沟"
          ],
          "hours": 8
        }
      ]
    },
    "nature": {
      "name": "太行南麓自然之旅",
      "days": 3,
      "tagline": "畅游太行南端最美峡谷与原始森林，拥抱大自然的馈赠",
      "spots": [
        "王莽岭",
        "蟒河",
        "锡崖沟",
        "珏山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "太行绝壁奇观",
          "list": [
            "王莽岭",
            "锡崖沟"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "原始森林探秘",
          "list": [
            "蟒河",
            "蟒河猕猴区"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "近郊名山",
          "list": [
            "珏山",
            "青莲寺"
          ],
          "hours": 5
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "皇城相府",
        "rank": 1,
        "intro": "清代名相陈廷敬的故居，有\"中国北方第一文化巨族之宅\"之称，由内城和外城组成，河山楼为标志性建筑，高30米共七层，是集官宅、民居、庙院于一体的大型城堡式建筑群。",
        "coord": [
          112.55,
          35.55
        ],
        "photoSpots": [
          {
            "name": "河山楼下",
            "pose": "仰拍标志性七层高楼"
          },
          {
            "name": "相府城墙",
            "pose": "拍摄城堡式建筑群全景"
          }
        ],
        "food": [
          {
            "name": "相府家宴",
            "star": 5,
            "desc": "相府内餐厅提供的传统宴席"
          },
          {
            "name": "晋城烧大葱",
            "star": 5,
            "desc": "晋城名菜，葱香浓郁"
          }
        ],
        "duration": 4,
        "ticket": 120,
        "tip": "建议请导游讲解陈家历史，每日有迎圣驾表演值得关注"
      },
      {
        "name": "王莽岭",
        "rank": 2,
        "intro": "位于陵川县，太行山脉南端最高峰，海拔1700米，因西汉王莽追刘秀的历史传说而得名，云海日出、奇峰怪石、挂壁公路为其三大奇观，被称为\"不登王莽岭，岂识太行山\"。",
        "coord": [
          113.53,
          35.68
        ],
        "photoSpots": [
          {
            "name": "观日台",
            "pose": "拍摄太行云海日出"
          },
          {
            "name": "挂壁公路",
            "pose": "拍摄悬崖公路奇观"
          }
        ],
        "food": [
          {
            "name": "陵川土鸡",
            "star": 4,
            "desc": "陵川县农家土鸡"
          },
          {
            "name": "高平十大碗",
            "star": 5,
            "desc": "高平传统宴席"
          }
        ],
        "duration": 6,
        "ticket": 80,
        "tip": "日出需凌晨出发，山顶住宿条件有限但体验独特，挂壁公路自驾需谨慎"
      },
      {
        "name": "蟒河",
        "rank": 3,
        "intro": "国家级自然保护区，位于阳城县，因蟒河蜿蜒流淌而得名，森林覆盖率92%以上，有猕猴、娃娃鱼等珍稀动物，瀑布群和原始森林构成了一幅秀美的山水画卷，被称为\"北方小桂林\"。",
        "coord": [
          112.38,
          35.35
        ],
        "photoSpots": [
          {
            "name": "蟒河瀑布",
            "pose": "拍摄瀑布与碧水"
          },
          {
            "name": "猕猴区",
            "pose": "拍摄野生猕猴"
          }
        ],
        "food": [
          {
            "name": "阳城烧肝",
            "star": 4,
            "desc": "阳城特色小吃"
          },
          {
            "name": "阳城火锅",
            "star": 4,
            "desc": "阳城传统火锅"
          }
        ],
        "duration": 4,
        "ticket": 70,
        "tip": "猕猴区注意保管随身物品，不要主动接触猕猴，夏季最佳"
      },
      {
        "name": "锡崖沟",
        "rank": 4,
        "intro": "位于陵川县，四面环山的封闭峡谷村落，村民历时30年在悬崖峭壁上凿出一条7.5公里的挂壁公路，被称为\"中国乡村筑路奇迹\"，展现了太行山人不屈不挠的精神。",
        "coord": [
          113.55,
          35.7
        ],
        "photoSpots": [
          {
            "name": "挂壁公路",
            "pose": "拍摄悬崖凿壁公路全景"
          },
          {
            "name": "峡谷底部",
            "pose": "拍摄四面环山的村落"
          }
        ],
        "food": [
          {
            "name": "太行山野菜",
            "star": 3,
            "desc": "山上采集的新鲜野菜"
          },
          {
            "name": "陵川土鸡",
            "star": 4,
            "desc": "农家散养土鸡"
          }
        ],
        "duration": 3,
        "ticket": 80,
        "tip": "挂壁公路自驾需经验丰富，建议与王莽岭串联游览"
      },
      {
        "name": "青莲寺",
        "rank": 5,
        "intro": "始建于北齐天保年间，距今已有1400余年历史，寺内保存有北齐、唐代、宋代石刻和建筑遗存，下寺唐代砖塔为全国重点文物，是研究中国佛教建筑演变的重要实物。",
        "coord": [
          112.88,
          35.47
        ],
        "photoSpots": [
          {
            "name": "唐代砖塔",
            "pose": "拍摄古塔与山间环境"
          },
          {
            "name": "下寺古银杏",
            "pose": "与千年银杏树合影"
          }
        ],
        "food": [
          {
            "name": "晋城烧大葱",
            "star": 4,
            "desc": "晋城名菜"
          },
          {
            "name": "泽州甜饭",
            "star": 4,
            "desc": "泽州传统甜食"
          }
        ],
        "duration": 2,
        "ticket": 20,
        "tip": "与珏山相邻可串联游览，秋季银杏金黄时最美"
      }
    ],
    "secondary": [
      {
        "name": "柳氏民居",
        "rank": 6,
        "intro": "位于沁水县，为唐代文学家柳宗元后裔所建，现存明清时期院落13座，建筑风格独特，砖雕木雕精美，是中国北方保存较好的明清民居建筑群之一，体现了晋东南民居建筑的艺术成就。",
        "coord": [
          112.25,
          35.62
        ],
        "photoSpots": [
          {
            "name": "司马第门楼",
            "pose": "拍摄精美砖雕门楼"
          },
          {
            "name": "中院",
            "pose": "拍摄院落建筑群全景"
          }
        ],
        "food": [
          {
            "name": "沁水饸饹",
            "star": 4,
            "desc": "沁水特色面食"
          }
        ],
        "duration": 2,
        "ticket": 40,
        "tip": "游客较少，适合古建爱好者，建议请讲解了解柳氏家族历史"
      },
      {
        "name": "珏山",
        "rank": 7,
        "intro": "位于晋城市区东南，双峰对峙如珏（古代玉器），故名珏山，有\"晋魏河山第一奇\"之称，道教名山，山上建筑依山势而建，中秋赏月闻名，\"珏山吐月\"为晋城名景。",
        "coord": [
          112.9,
          35.44
        ],
        "photoSpots": [
          {
            "name": "双峰之间",
            "pose": "拍摄双峰对峙奇景"
          },
          {
            "name": "山顶道观",
            "pose": "拍摄山间道观全貌"
          }
        ],
        "food": [
          {
            "name": "泽州甜饭",
            "star": 4,
            "desc": "泽州传统甜食"
          },
          {
            "name": "晋城烧大葱",
            "star": 4,
            "desc": "晋城标志性菜品"
          }
        ],
        "duration": 3,
        "ticket": 50,
        "tip": "中秋节前后赏月最佳，与青莲寺相距不远可串联"
      },
      {
        "name": "郭峪古村",
        "rank": 8,
        "intro": "位于皇城相府旁边，有\"中国乡村第一城\"之称，城墙周长约1400米，城内保存了大量明清时期的民居建筑，豫楼为标志性建筑，古村生活气息浓厚，比皇城相府更加原生态。",
        "coord": [
          112.555,
          35.555
        ],
        "photoSpots": [
          {
            "name": "古村城墙",
            "pose": "拍摄完整的村落城墙"
          },
          {
            "name": "豫楼",
            "pose": "拍摄村内标志性高楼"
          }
        ],
        "food": [
          {
            "name": "农家饭",
            "star": 4,
            "desc": "村内农家院传统饭菜"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "与皇城相府仅一墙之隔，免门票且游客少，适合慢游"
      },
      {
        "name": "砥洎城",
        "rank": 9,
        "intro": "位于润城镇，建于明代，整座城堡建在一块巨石之上，城墙用炼铁废渣浇铸而成，坚固异常，是中国唯一的坩埚城，城内巷道狭窄曲折，保留了大量明代民居建筑。",
        "coord": [
          112.59,
          35.58
        ],
        "photoSpots": [
          {
            "name": "城墙全景",
            "pose": "拍摄坩埚筑成的城墙"
          },
          {
            "name": "城内巷道",
            "pose": "拍摄狭窄古巷"
          }
        ],
        "food": [
          {
            "name": "润城枣糕",
            "star": 4,
            "desc": "润城镇特色小吃"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "游客极少，适合摄影和古建爱好者，与皇城相府相距不远"
      },
      {
        "name": "玉皇庙",
        "rank": 10,
        "intro": "位于晋城市区，始建于北宋，二十八宿殿内的元代二十八星宿彩塑为中国雕塑艺术极品，每尊塑像对应天文星宿，造型各异，栩栩如生，被称为海内孤品。",
        "coord": [
          112.848,
          35.495
        ],
        "photoSpots": [
          {
            "name": "二十八宿殿",
            "pose": "远观元代彩塑（禁拍照）"
          },
          {
            "name": "庙前",
            "pose": "拍摄古庙建筑群"
          }
        ],
        "food": [
          {
            "name": "高平十大碗",
            "star": 5,
            "desc": "高平传统宴席"
          },
          {
            "name": "晋城烧大葱",
            "star": 4,
            "desc": "市区餐馆均可品尝"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "二十八宿彩塑禁止拍照，建议用肉眼细细欣赏雕塑艺术"
      }
    ],
    "hidden": [
      {
        "name": "大阳古镇",
        "rank": 11,
        "intro": "位于泽州县，有\"中国最大古村镇\"之称，自古为冶铁重镇，\"九头十八匠\"的冶铁文化闻名遐迩，老街长5里，保存了大量明清商铺和民居，是了解古代冶铁文化的好去处。",
        "coord": [
          112.75,
          35.55
        ],
        "photoSpots": [
          {
            "name": "老街",
            "pose": "拍摄五里长街古建筑群"
          },
          {
            "name": "天柱塔",
            "pose": "拍摄古镇标志塔"
          }
        ],
        "food": [
          {
            "name": "大阳馔面",
            "star": 5,
            "desc": "大阳特色面食，千年传承"
          }
        ],
        "duration": 3,
        "ticket": 40,
        "tip": "古镇面积大，建议穿舒适鞋，适合深度慢游",
        "trend": "+95% 近3月热度"
      },
      {
        "name": "湘峪古堡",
        "rank": 12,
        "intro": "位于沁水县，为明代孙居相、孙鼎相兄弟所建，城堡依山势而建，有\"三都古城\"之称，城下藏兵洞体系完整，是中国北方保存较好的明代城堡之一，建筑布局精巧。",
        "coord": [
          112.49,
          35.59
        ],
        "photoSpots": [
          {
            "name": "城堡正面",
            "pose": "拍摄依山而建的城堡全景"
          },
          {
            "name": "藏兵洞",
            "pose": "拍摄地下防御工事"
          }
        ],
        "food": [
          {
            "name": "沁水饸饹",
            "star": 3,
            "desc": "沁水特色面食"
          }
        ],
        "duration": 2,
        "ticket": 40,
        "tip": "与皇城相府相距不远，可串联游览，游客较少体验好",
        "trend": "+80% 近3月热度"
      },
      {
        "name": "棋子山",
        "rank": 13,
        "intro": "位于陵川县，相传为箕子观星制棋之所，是中国围棋文化的发源地之一，山上遍布天然黑白石棋子，地质学上为火山岩球粒，山顶草甸开阔，夏季凉爽宜人。",
        "coord": [
          113.35,
          35.75
        ],
        "photoSpots": [
          {
            "name": "棋子石",
            "pose": "拍摄天然黑白石子"
          },
          {
            "name": "山顶草甸",
            "pose": "拍摄开阔草甸与远山"
          }
        ],
        "food": [
          {
            "name": "陵川土鸡",
            "star": 3,
            "desc": "陵川农家菜"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "适合围棋文化爱好者，夏季避暑好去处",
        "trend": "+60% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "无本地机场，最近为长治王村机场（距晋城市区约100公里）或太原武宿机场",
    "mainStation": "晋城东站（高铁）/晋城站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 18,
      "busCost": "市区公交1-2元，皇城相府旅游专线15元"
    },
    "driving": {
      "tollPerDay": 80,
      "fuelPer100km": 70,
      "parking": "景区停车10-20元/次，太行山路弯多注意慢行"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "晋城国贸酒店",
        "loc": "城区泽州路",
        "price": 520,
        "star": 5,
        "perks": "晋城顶级商务酒店，设施一流"
      },
      {
        "name": "晋城豪美爵酒店",
        "loc": "城区凤台西街",
        "price": 480,
        "star": 4,
        "perks": "市中心位置，交通便利"
      },
      {
        "name": "皇城相府贵宾楼",
        "loc": "阳城县皇城村",
        "price": 450,
        "star": 4,
        "perks": "景区内住宿，古建风格"
      }
    ],
    "mid": [
      {
        "name": "晋城凤城国际酒店",
        "loc": "城区凤台街",
        "price": 300,
        "star": 3,
        "perks": "老牌酒店，服务稳定"
      },
      {
        "name": "陵川王莽岭度假酒店",
        "loc": "陵川县王莽岭",
        "price": 280,
        "star": 3,
        "perks": "山顶住宿，可观日出"
      },
      {
        "name": "阳城蟒河山庄",
        "loc": "阳城县蟒河镇",
        "price": 250,
        "star": 3,
        "perks": "近蟒河景区，山林环境"
      }
    ],
    "budget": [
      {
        "name": "汉庭晋城泽州路店",
        "loc": "城区泽州路",
        "price": 130,
        "star": 3,
        "perks": "连锁品质，交通便利"
      },
      {
        "name": "如家晋城火车站店",
        "loc": "城区站前街",
        "price": 120,
        "star": 2,
        "perks": "靠近火车站，出行方便"
      },
      {
        "name": "皇城村农家客栈",
        "loc": "阳城县皇城村",
        "price": 80,
        "star": 2,
        "perks": "古村住宿体验，价格实惠"
      }
    ]
  }
};

// 朔州
window.CITY_DATABASE['朔州'] = {
  "code": "shuozhou",
  "province": "山西省",
  "coord": [
    112.433,
    39.331
  ],
  "bestSeason": "5-10月，夏季清凉，秋季金色草原与古建交相辉映",
  "routes": {
    "classic": {
      "name": "木塔边塞经典之旅",
      "days": 2,
      "tagline": "仰望千年木塔奇迹，探寻边塞重镇的历史记忆",
      "spots": [
        "应县木塔",
        "崇福寺",
        "广武古城",
        "杀虎口"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "千年木塔与古刹",
          "list": [
            "应县木塔",
            "崇福寺"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "边塞古关遗韵",
          "list": [
            "广武古城",
            "杀虎口",
            "汉墓群"
          ],
          "hours": 7
        }
      ]
    },
    "niche": {
      "name": "边塞秘境探索",
      "days": 2,
      "tagline": "走进塞外苍茫大地，发现朔州鲜为人知的历史遗迹",
      "spots": [
        "杀虎口",
        "广武古城",
        "金沙滩",
        "汉墓群"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "边关与古战场",
          "list": [
            "杀虎口",
            "汉墓群"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "古堡与传奇",
          "list": [
            "广武古城",
            "金沙滩"
          ],
          "hours": 6
        }
      ]
    },
    "culture": {
      "name": "塞上文化深度游",
      "days": 3,
      "tagline": "从辽代木塔到走西口，追溯朔州千年边塞文明",
      "spots": [
        "应县木塔",
        "崇福寺",
        "杀虎口",
        "右玉精神展览馆"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "辽代建筑瑰宝",
          "list": [
            "应县木塔",
            "崇福寺"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "走西口文化",
          "list": [
            "杀虎口",
            "右玉精神展览馆"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "边塞遗迹",
          "list": [
            "广武古城",
            "金沙滩",
            "汉墓群"
          ],
          "hours": 6
        }
      ]
    },
    "nature": {
      "name": "塞北自然风光",
      "days": 2,
      "tagline": "感受塞北草原与湿地之美，体验右玉绿色奇迹",
      "spots": [
        "右玉精神展览馆",
        "桑干河湿地",
        "金沙滩",
        "苍头河"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "绿色右玉",
          "list": [
            "右玉精神展览馆",
            "苍头河生态区"
          ],
          "hours": 6
        },
        {
          "day": 2,
          "theme": "湿地与草原",
          "list": [
            "桑干河湿地",
            "金沙滩"
          ],
          "hours": 6
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "应县木塔",
        "rank": 1,
        "intro": "始建于辽清宁二年（1056年），高67.31米，是世界上现存最古老、最高大的纯木结构建筑，全塔无一根铁钉，靠斗拱和榫卯连接，经历千年风雨地震屹立不倒，被誉为\"世界木构建筑奇迹\"。",
        "coord": [
          113.18,
          39.55
        ],
        "photoSpots": [
          {
            "name": "木塔正面广场",
            "pose": "拍摄木塔全貌与蓝天"
          },
          {
            "name": "塔侧角度",
            "pose": "拍摄木塔与飞燕同框"
          }
        ],
        "food": [
          {
            "name": "应县凉粉",
            "star": 5,
            "desc": "应县特色小吃，清爽可口"
          },
          {
            "name": "应县滴酥",
            "star": 4,
            "desc": "应县传统糕点"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "目前仅开放一层参观，内部佛像可近观，建议绕塔一圈欣赏不同角度"
      },
      {
        "name": "崇福寺",
        "rank": 2,
        "intro": "始建于唐麟德二年（665年），金代大规模重建，弥陀殿为金代建筑精品，殿内金代壁画和塑像保存完好，是山西现存金代建筑中规模最大、保存最完整的一处。",
        "coord": [
          112.436,
          39.33
        ],
        "photoSpots": [
          {
            "name": "弥陀殿前",
            "pose": "拍摄金代大殿建筑全貌"
          },
          {
            "name": "殿内壁画",
            "pose": "欣赏金代壁画（禁闪光灯）"
          }
        ],
        "food": [
          {
            "name": "朔州羊杂",
            "star": 5,
            "desc": "朔州标志性早餐，鲜香不腻"
          },
          {
            "name": "朔州烫面饺子",
            "star": 4,
            "desc": "朔州特色面食"
          }
        ],
        "duration": 1.5,
        "ticket": 20,
        "tip": "位于朔州老城区内，游客不多可静心欣赏，金代建筑艺术价值极高"
      },
      {
        "name": "右玉精神展览馆",
        "rank": 3,
        "intro": "展示右玉县人民70余年坚持不懈植树造林、将不毛之地变为塞上绿洲的伟大壮举，右玉从森林覆盖率0.3%提高到54%，是\"绿水青山就是金山银山\"的生动实践。",
        "coord": [
          112.46,
          39.99
        ],
        "photoSpots": [
          {
            "name": "展览馆大厅",
            "pose": "拍摄展览与精神标语"
          },
          {
            "name": "右玉绿洲观景台",
            "pose": "拍摄万亩林海全景"
          }
        ],
        "food": [
          {
            "name": "右玉熏鸡",
            "star": 5,
            "desc": "右玉名产，肉质紧实熏香浓郁"
          },
          {
            "name": "右玉羊肉",
            "star": 5,
            "desc": "天然牧场的优质羊肉"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "免费参观，建议预留1.5小时，了解右玉绿化奇迹令人感动"
      },
      {
        "name": "杀虎口",
        "rank": 4,
        "intro": "位于右玉县，历史上是中原通往塞外的咽喉要道，\"走西口\"的必经之地，明清时期商贾云集，是汉蒙贸易的重要口岸，现存古关隘、古城墙等遗迹，承载着厚重的移民文化。",
        "coord": [
          112.35,
          40.1
        ],
        "photoSpots": [
          {
            "name": "杀虎口关隘",
            "pose": "拍摄古关隘与长城遗址"
          },
          {
            "name": "古街道",
            "pose": "拍摄古道商埠遗迹"
          }
        ],
        "food": [
          {
            "name": "右玉熏鸡",
            "star": 5,
            "desc": "右玉名产必尝"
          },
          {
            "name": "莜面",
            "star": 4,
            "desc": "塞北特色主食"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "与右玉精神展览馆可串联游览，了解走西口历史更有感触"
      },
      {
        "name": "广武古城",
        "rank": 5,
        "intro": "始建于春秋战国时期，现存城墙为明代重修，是中国现存最完整的明代古城之一，古城面积不大但保存完好，城内有明代民居和寺庙，周围有汉代墓葬群，历史厚重感极强。",
        "coord": [
          112.75,
          39.38
        ],
        "photoSpots": [
          {
            "name": "古城门",
            "pose": "拍摄明代城门与夯土墙"
          },
          {
            "name": "城墙远眺",
            "pose": "拍摄古城与远处山脉"
          }
        ],
        "food": [
          {
            "name": "山阴羊杂",
            "star": 4,
            "desc": "山阴县特色羊杂"
          },
          {
            "name": "莜面窝窝",
            "star": 3,
            "desc": "朔北特色面食"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "古城内居民生活气息浓，尊重当地生活，可与汉墓群串联"
      }
    ],
    "secondary": [
      {
        "name": "金沙滩",
        "rank": 6,
        "intro": "位于怀仁市，相传为北宋杨家将抗辽的古战场，现建有杨家将文化旅游景区，有杨令公庙、点将台等建筑，周围草原风光辽阔，是了解边塞战争历史和体验草原风情的好去处。",
        "coord": [
          113.08,
          39.82
        ],
        "photoSpots": [
          {
            "name": "杨令公庙",
            "pose": "拍摄杨家将纪念建筑"
          },
          {
            "name": "草原景观",
            "pose": "拍摄辽阔草原与风车"
          }
        ],
        "food": [
          {
            "name": "怀仁羊杂",
            "star": 4,
            "desc": "怀仁特色羊杂"
          },
          {
            "name": "怀仁糖干炉",
            "star": 4,
            "desc": "怀仁传统小吃"
          }
        ],
        "duration": 3,
        "ticket": 35,
        "tip": "夏季草原最绿，秋季金黄灿烂，景区内有骑马等体验项目"
      },
      {
        "name": "汉墓群",
        "rank": 7,
        "intro": "位于山阴县广武城周围，是全国最大的汉代墓葬群之一，现存封土堆288座，绵延数公里，被称为\"地上的兵马俑\"，规模宏大，是研究汉代边塞军事和丧葬文化的重要遗址。",
        "coord": [
          112.78,
          39.4
        ],
        "photoSpots": [
          {
            "name": "墓群高处",
            "pose": "俯拍连绵不断的封土堆"
          },
          {
            "name": "单个封土堆",
            "pose": "拍摄土堆与苍茫大地"
          }
        ],
        "food": [
          {
            "name": "山阴羊杂",
            "star": 3,
            "desc": "山阴特色小吃"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "与广武古城相邻可串联，适合历史考古爱好者"
      },
      {
        "name": "桑干河湿地",
        "rank": 8,
        "intro": "桑干河是永定河的重要支流，湿地生态环境良好，是候鸟迁徙的重要驿站，每年春秋季节有大量候鸟在此栖息，包括天鹅、白鹭等珍稀鸟类，是观鸟和生态摄影的好去处。",
        "coord": [
          112.55,
          39.45
        ],
        "photoSpots": [
          {
            "name": "湿地观鸟台",
            "pose": "拍摄水鸟与湿地风光"
          },
          {
            "name": "河畔步道",
            "pose": "拍摄河滩与芦苇"
          }
        ],
        "food": [
          {
            "name": "朔州羊杂",
            "star": 4,
            "desc": "返回市区可品尝"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "春秋迁徙季节观鸟最佳，建议带望远镜和长焦镜头"
      },
      {
        "name": "苍头河生态区",
        "rank": 9,
        "intro": "位于右玉县，是右玉绿化奇迹的典型代表区域，两岸绿树成荫，河水清澈，与周边的黄沙地貌形成鲜明对比，被称为\"塞上江南\"，是体验右玉生态建设成果的最佳地点。",
        "coord": [
          112.48,
          40.02
        ],
        "photoSpots": [
          {
            "name": "河畔绿道",
            "pose": "拍摄绿色长廊与河水"
          },
          {
            "name": "生态观景台",
            "pose": "拍摄绿洲与远山对比"
          }
        ],
        "food": [
          {
            "name": "右玉羊肉",
            "star": 5,
            "desc": "天然牧场羊肉，品质上乘"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "与右玉精神展览馆和杀虎口在同一片区可串联"
      },
      {
        "name": "净土寺",
        "rank": 10,
        "intro": "位于应县城内，始建于金代，大雄宝殿内的金代藻井为中国古建筑藻井精品，天宫楼阁造型精巧，斗拱层层叠起如同天宫，是研究金代建筑装饰艺术的珍贵实例。",
        "coord": [
          113.178,
          39.548
        ],
        "photoSpots": [
          {
            "name": "大雄宝殿内",
            "pose": "仰拍精美藻井（禁闪光灯）"
          },
          {
            "name": "殿外",
            "pose": "拍摄金代建筑外观"
          }
        ],
        "food": [
          {
            "name": "应县凉粉",
            "star": 4,
            "desc": "应县特色小吃"
          }
        ],
        "duration": 1,
        "ticket": 15,
        "tip": "与应县木塔相距不远可串联，藻井为必看亮点"
      }
    ],
    "hidden": [
      {
        "name": "平鲁区尉迟恭故里",
        "rank": 11,
        "intro": "平鲁区是唐代开国名将尉迟恭（尉迟敬德）的故乡，现有尉迟恭庙和纪念馆，展示这位传奇将领的生平事迹，庙内壁画描绘了尉迟恭的经典故事，是了解唐代军事人物的好去处。",
        "coord": [
          112.29,
          39.52
        ],
        "photoSpots": [
          {
            "name": "尉迟恭庙",
            "pose": "拍摄庙宇建筑与塑像"
          },
          {
            "name": "纪念馆",
            "pose": "拍摄历史展览"
          }
        ],
        "food": [
          {
            "name": "平鲁抿面",
            "star": 3,
            "desc": "平鲁特色面食"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "位于平鲁城区，适合历史爱好者，与朔州市区约30分钟车程",
        "trend": "+50% 近3月热度"
      },
      {
        "name": "鹅毛口古石器遗址",
        "rank": 12,
        "intro": "位于怀仁市，是一处旧石器时代中期的石器制造场遗址，出土了大量打制石器，是研究中国北方旧石器文化的重要遗址，在考古学界具有重要学术地位。",
        "coord": [
          113.05,
          39.87
        ],
        "photoSpots": [
          {
            "name": "遗址展示区",
            "pose": "拍摄石器出土现场"
          },
          {
            "name": "周边地貌",
            "pose": "拍摄黄土地质景观"
          }
        ],
        "food": [
          {
            "name": "怀仁羊杂",
            "star": 3,
            "desc": "怀仁特色"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "考古爱好者专属景点，普通游客可能觉得不够有趣",
        "trend": "+40% 近3月热度"
      },
      {
        "name": "神头海",
        "rank": 13,
        "intro": "位于山阴县，桑干河源头的天然湖泊群，水面面积约5平方公里，湖水清澈见底，周围湿地生态环境良好，是塞北地区罕见的天然水域景观，被称为\"塞上西湖\"。",
        "coord": [
          112.65,
          39.42
        ],
        "photoSpots": [
          {
            "name": "湖畔",
            "pose": "拍摄湖面与远山倒影"
          },
          {
            "name": "湿地区",
            "pose": "拍摄水鸟与芦苇"
          }
        ],
        "food": [
          {
            "name": "山阴羊杂",
            "star": 3,
            "desc": "山阴特色小吃"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "春季和秋季候鸟季最佳，适合摄影和自然爱好者",
        "trend": "+70% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "朔州滋润机场（朔州市区东北约15公里，2023年通航）",
    "mainStation": "朔州东站（高铁）/朔州站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 18,
      "busCost": "市区公交1元，右玉方向班车30元"
    },
    "driving": {
      "tollPerDay": 70,
      "fuelPer100km": 65,
      "parking": "景区停车10元/次，多数景区免费停车"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "朔州万通源大酒店",
        "loc": "朔城区开发路",
        "price": 480,
        "star": 4,
        "perks": "朔州最好的商务酒店，设施齐全"
      },
      {
        "name": "朔州凯悦大酒店",
        "loc": "朔城区鄯阳街",
        "price": 420,
        "star": 4,
        "perks": "市中心地段，交通便利"
      },
      {
        "name": "应县木塔大酒店",
        "loc": "应县迎宾路",
        "price": 380,
        "star": 3,
        "perks": "近木塔，县城最佳选择"
      }
    ],
    "mid": [
      {
        "name": "朔州金海大酒店",
        "loc": "朔城区张蔡庄路",
        "price": 260,
        "star": 3,
        "perks": "性价比高，环境不错"
      },
      {
        "name": "右玉玉龙酒店",
        "loc": "右玉县新城街",
        "price": 220,
        "star": 3,
        "perks": "右玉县最好酒店，近生态区"
      },
      {
        "name": "怀仁金沙滩酒店",
        "loc": "怀仁市迎宾街",
        "price": 240,
        "star": 3,
        "perks": "近金沙滩景区"
      }
    ],
    "budget": [
      {
        "name": "汉庭朔州火车站店",
        "loc": "朔城区站北街",
        "price": 120,
        "star": 2,
        "perks": "靠近火车站，交通方便"
      },
      {
        "name": "如家朔州古城店",
        "loc": "朔城区鼓楼街",
        "price": 130,
        "star": 2,
        "perks": "靠近老城区，出行方便"
      },
      {
        "name": "应县农家住宿",
        "loc": "应县木塔周边",
        "price": 80,
        "star": 2,
        "perks": "近木塔，体验当地生活"
      }
    ]
  }
};

// 吕梁
window.CITY_DATABASE['吕梁'] = {
  "code": "lvliang",
  "province": "山西省",
  "coord": [
    111.134,
    37.524
  ],
  "bestSeason": "5-10月，夏季清凉，秋季碛口古镇黄河风光最为壮美",
  "routes": {
    "classic": {
      "name": "古镇名山经典之旅",
      "days": 3,
      "tagline": "漫步黄河古镇，登临北武当，品味吕梁山水与人文",
      "spots": [
        "碛口古镇",
        "北武当山",
        "庞泉沟",
        "酒都杏花村"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "黄河古镇漫游",
          "list": [
            "碛口古镇",
            "李家山村",
            "西湾村"
          ],
          "hours": 8
        },
        {
          "day": 2,
          "theme": "北武当登临",
          "list": [
            "北武当山",
            "庞泉沟"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "酒文化与宗教",
          "list": [
            "酒都杏花村",
            "卦山",
            "玄中寺"
          ],
          "hours": 6
        }
      ]
    },
    "niche": {
      "name": "黄河古村秘境",
      "days": 2,
      "tagline": "深入黄河岸边的窑洞村落，感受最原生态的黄土高原生活",
      "spots": [
        "碛口古镇",
        "李家山村",
        "西湾村",
        "黄河画廊"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "碛口古镇深度游",
          "list": [
            "碛口古镇",
            "黄河画廊",
            "黑龙庙"
          ],
          "hours": 7
        },
        {
          "day": 2,
          "theme": "古村落寻访",
          "list": [
            "李家山村",
            "西湾村"
          ],
          "hours": 6
        }
      ]
    },
    "culture": {
      "name": "吕梁文化深度游",
      "days": 3,
      "tagline": "从酒文化到佛教圣地，品读吕梁山间的文化积淀",
      "spots": [
        "酒都杏花村",
        "卦山",
        "玄中寺",
        "刘胡兰纪念馆",
        "碛口古镇"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "酒都文化",
          "list": [
            "酒都杏花村",
            "汾酒博物馆"
          ],
          "hours": 5
        },
        {
          "day": 2,
          "theme": "宗教与名山",
          "list": [
            "卦山",
            "玄中寺",
            "刘胡兰纪念馆"
          ],
          "hours": 7
        },
        {
          "day": 3,
          "theme": "黄河古镇",
          "list": [
            "碛口古镇",
            "李家山村",
            "西湾村"
          ],
          "hours": 8
        }
      ]
    },
    "nature": {
      "name": "吕梁山自然之旅",
      "days": 3,
      "tagline": "穿越吕梁山原始森林，亲近大自然的清新与宁静",
      "spots": [
        "庞泉沟",
        "北武当山",
        "云顶山",
        "苍儿会"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "原始森林探秘",
          "list": [
            "庞泉沟",
            "八道沟"
          ],
          "hours": 7
        },
        {
          "day": 2,
          "theme": "北武当山登临",
          "list": [
            "北武当山"
          ],
          "hours": 6
        },
        {
          "day": 3,
          "theme": "高山草甸",
          "list": [
            "云顶山",
            "苍儿会生态区"
          ],
          "hours": 6
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "碛口古镇",
        "rank": 1,
        "intro": "位于黄河与湫水河交汇处，明清至民国年间是黄河上最重要的水运码头之一，有\"九曲黄河第一镇\"之称，古镇依山而建，窑洞层叠错落，商铺、票号、镖局等历史遗存丰富，是黄河文化的活化石。",
        "coord": [
          110.89,
          37.45
        ],
        "photoSpots": [
          {
            "name": "黑龙庙观景台",
            "pose": "俯拍黄河与古镇全景"
          },
          {
            "name": "古镇老街",
            "pose": "拍摄层叠窑洞与石板路"
          }
        ],
        "food": [
          {
            "name": "碛口红枣",
            "star": 5,
            "desc": "临县黄河滩枣，个大甘甜"
          },
          {
            "name": "碗托",
            "star": 5,
            "desc": "吕梁特色小吃，酸辣开胃"
          }
        ],
        "duration": 5,
        "ticket": 0,
        "tip": "古镇免费开放，建议住一晚体验窑洞民宿，黄河日落必看"
      },
      {
        "name": "北武当山",
        "rank": 2,
        "intro": "位于方山县，中国北方道教名山，有\"三晋第一名山\"之称，主峰香炉峰海拔2254米，山势险峻，道教建筑群规模宏大，每年农历三月三庙会热闹非凡，是登山祈福的好去处。",
        "coord": [
          111.2,
          37.82
        ],
        "photoSpots": [
          {
            "name": "香炉峰顶",
            "pose": "拍摄云海与道教建筑"
          },
          {
            "name": "天梯步道",
            "pose": "拍摄险峻登山道"
          }
        ],
        "food": [
          {
            "name": "方山土豆宴",
            "star": 4,
            "desc": "方山特色土豆系列菜品"
          },
          {
            "name": "莜面",
            "star": 4,
            "desc": "吕梁山特色主食"
          }
        ],
        "duration": 5,
        "ticket": 60,
        "tip": "登山需体力，台阶较陡注意安全，三月三庙会期间最热闹"
      },
      {
        "name": "庞泉沟",
        "rank": 3,
        "intro": "位于交城县，国家级自然保护区，是华北地区保存最完好的原始森林之一，森林覆盖率95%以上，是褐马鸡等珍稀动物的栖息地，夏季凉爽宜人，被称为\"华北绿肺\"和天然氧吧。",
        "coord": [
          111.78,
          37.75
        ],
        "photoSpots": [
          {
            "name": "原始森林步道",
            "pose": "拍摄参天古树与林间光影"
          },
          {
            "name": "溪流瀑布",
            "pose": "拍摄清澈溪谷"
          }
        ],
        "food": [
          {
            "name": "山野菜",
            "star": 4,
            "desc": "山中采集的新鲜野菜"
          },
          {
            "name": "交城骏枣",
            "star": 4,
            "desc": "交城特产干果"
          }
        ],
        "duration": 4,
        "ticket": 50,
        "tip": "夏季避暑最佳，森林内蚊虫较多建议带驱蚊用品"
      },
      {
        "name": "酒都杏花村",
        "rank": 4,
        "intro": "位于汾阳市，是驰名中外的汾酒产地，有\"借问酒家何处有，牧童遥指杏花村\"之美誉，汾酒博物馆展示了中国白酒酿造的历史，可参观酿酒工艺和品鉴汾酒，是了解中国酒文化的必游之地。",
        "coord": [
          111.78,
          37.27
        ],
        "photoSpots": [
          {
            "name": "汾酒博物馆",
            "pose": "拍摄酒文化展览与古酿酒坊"
          },
          {
            "name": "杏花村牌坊",
            "pose": "与标志性牌坊合影"
          }
        ],
        "food": [
          {
            "name": "汾酒",
            "star": 5,
            "desc": "中国四大名酒之一，清香型代表"
          },
          {
            "name": "汾阳石头饼",
            "star": 4,
            "desc": "汾阳特色面食"
          }
        ],
        "duration": 2,
        "ticket": 40,
        "tip": "可以品鉴不同年份汾酒，自驾注意品酒后不要开车"
      },
      {
        "name": "玄中寺",
        "rank": 5,
        "intro": "位于交城县，始建于北魏延兴二年（472年），是中国佛教净土宗的发源地，日本净土宗也源于此，寺内唐代碑刻和历代祖师塔林为重要文物，山间环境幽静，是佛教信徒朝拜的圣地。",
        "coord": [
          111.88,
          37.6
        ],
        "photoSpots": [
          {
            "name": "寺院全景",
            "pose": "拍摄山间古刹全貌"
          },
          {
            "name": "祖师塔林",
            "pose": "拍摄历代高僧塔林"
          }
        ],
        "food": [
          {
            "name": "交城骏枣",
            "star": 4,
            "desc": "交城特产名枣"
          },
          {
            "name": "素斋",
            "star": 3,
            "desc": "寺内提供简素斋饭"
          }
        ],
        "duration": 2,
        "ticket": 20,
        "tip": "寺院清幽，适合静心，秋季塔林红叶很美"
      }
    ],
    "secondary": [
      {
        "name": "卦山",
        "rank": 6,
        "intro": "位于交城县，因山形如八卦而得名，唐代天宁寺为山中主寺，古柏参天，有\"卦山古柏甲天下\"之称，山中松柏造型奇特，被誉为天然盆景，是登山赏景的好去处。",
        "coord": [
          111.9,
          37.58
        ],
        "photoSpots": [
          {
            "name": "古柏林",
            "pose": "拍摄千年古柏造型"
          },
          {
            "name": "天宁寺",
            "pose": "拍摄唐代古寺建筑"
          }
        ],
        "food": [
          {
            "name": "交城羊汤",
            "star": 4,
            "desc": "交城特色汤品"
          }
        ],
        "duration": 2,
        "ticket": 20,
        "tip": "与玄中寺相距不远可串联游览，古柏造型值得细赏"
      },
      {
        "name": "刘胡兰纪念馆",
        "rank": 7,
        "intro": "位于文水县，为纪念革命烈士刘胡兰而建，展示了刘胡兰短暂而光辉的一生，\"生的伟大，死的光荣\"的题词令人动容，是红色旅游和爱国主义教育的重要基地。",
        "coord": [
          112.02,
          37.45
        ],
        "photoSpots": [
          {
            "name": "刘胡兰塑像",
            "pose": "与烈士塑像合影"
          },
          {
            "name": "纪念馆展厅",
            "pose": "拍摄历史展览"
          }
        ],
        "food": [
          {
            "name": "文水烧饼",
            "star": 4,
            "desc": "文水特色面食"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "免费参观，适合红色教育，建议预留1-2小时"
      },
      {
        "name": "李家山村",
        "rank": 8,
        "intro": "位于碛口镇南，建在黄土高坡上的窑洞村落，层叠错落如同一座立体城堡，著名画家吴冠中称其为\"这里的房子像是从山里长出来的\"，是黄土高原窑洞建筑的代表，极具视觉冲击力。",
        "coord": [
          110.88,
          37.43
        ],
        "photoSpots": [
          {
            "name": "村口高处",
            "pose": "俯拍层叠窑洞全景"
          },
          {
            "name": "窑洞院落",
            "pose": "拍摄窑洞建筑细节"
          }
        ],
        "food": [
          {
            "name": "农家饭",
            "star": 4,
            "desc": "窑洞人家做的地道饭菜"
          },
          {
            "name": "临县大烩菜",
            "star": 5,
            "desc": "临县传统大锅菜"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "可从碛口古镇步行或骑驴前往，住窑洞民宿体验极佳"
      },
      {
        "name": "西湾村",
        "rank": 9,
        "intro": "位于碛口镇附近，明清时期的商贸村落，建筑保存完好，村中窑洞院落布局精巧，砖雕木雕工艺精湛，与碛口古镇互为补充，展示了黄河岸边传统村落的生活形态。",
        "coord": [
          110.91,
          37.46
        ],
        "photoSpots": [
          {
            "name": "村口石阶",
            "pose": "拍摄古村入口与黄河"
          },
          {
            "name": "老院落",
            "pose": "拍摄精美砖雕窑洞"
          }
        ],
        "food": [
          {
            "name": "碗托",
            "star": 4,
            "desc": "吕梁传统小吃"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "与碛口古镇相距不远可串联，游客比李家山少"
      },
      {
        "name": "汾酒博物馆",
        "rank": 10,
        "intro": "位于汾酒厂内，是中国第一座白酒博物馆，全面展示了汾酒6000年的酿造历史和文化传承，馆内珍藏有大量酒器酒具和历史文献，可了解中国传统白酒的酿造工艺和文化内涵。",
        "coord": [
          111.78,
          37.27
        ],
        "photoSpots": [
          {
            "name": "博物馆大厅",
            "pose": "拍摄酒文化展品"
          },
          {
            "name": "古酿酒坊",
            "pose": "拍摄传统酿酒场景"
          }
        ],
        "food": [
          {
            "name": "汾酒品鉴",
            "star": 5,
            "desc": "博物馆内提供品鉴体验"
          }
        ],
        "duration": 2,
        "ticket": 40,
        "tip": "含在杏花村门票中，品酒环节很有意思"
      }
    ],
    "hidden": [
      {
        "name": "苍儿会生态旅游区",
        "rank": 11,
        "intro": "位于文水县，吕梁山腹地，海拔2000米以上的高山草甸景观，夏季野花遍地，牛羊成群，被称为\"山西的小瑞士\"，生态环境原始，空气清新，是露营和户外运动的天堂。",
        "coord": [
          111.85,
          37.55
        ],
        "photoSpots": [
          {
            "name": "高山草甸",
            "pose": "拍摄花海与远山全景"
          },
          {
            "name": "牧场景观",
            "pose": "拍摄牛羊与草原"
          }
        ],
        "food": [
          {
            "name": "烤肉",
            "star": 4,
            "desc": "山上提供自助烤肉体验"
          }
        ],
        "duration": 4,
        "ticket": 30,
        "tip": "山路较远需自驾，适合露营爱好者，夏季花期最美",
        "trend": "+120% 近3月热度"
      },
      {
        "name": "黄河画廊",
        "rank": 12,
        "intro": "位于碛口镇附近黄河岸边，黄河水亿万年的冲刷在红色砂岩上形成了形态各异的天然浮雕，有人物、动物、山水等造型，被称为\"百里黄河画廊\"，是大自然鬼斧神工的杰作。",
        "coord": [
          110.85,
          37.42
        ],
        "photoSpots": [
          {
            "name": "画廊步道",
            "pose": "拍摄岩壁上的天然浮雕"
          },
          {
            "name": "黄河岸边",
            "pose": "拍摄黄河与岩壁全景"
          }
        ],
        "food": [
          {
            "name": "黄河鱼",
            "star": 4,
            "desc": "黄河边农家黄河鱼"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "建议乘船从黄河上观赏效果最佳，与碛口古镇可串联",
        "trend": "+140% 近3月热度"
      },
      {
        "name": "云顶山",
        "rank": 13,
        "intro": "位于娄烦县与交城县交界处，海拔2708米，为吕梁山最高峰之一，山顶有高山草甸和天池景观，夏季云雾缭绕如同仙境，秋季层林尽染，是徒步登山和摄影的绝佳目的地。",
        "coord": [
          111.68,
          37.83
        ],
        "photoSpots": [
          {
            "name": "山顶天池",
            "pose": "拍摄高山天池与草甸"
          },
          {
            "name": "云海观景",
            "pose": "拍摄云海与群峰"
          }
        ],
        "food": [
          {
            "name": "山野菜",
            "star": 3,
            "desc": "山间野菜简餐"
          }
        ],
        "duration": 5,
        "ticket": 0,
        "tip": "山路崎岖需越野车，建议结伴出行，带足干粮和水",
        "trend": "+95% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "吕梁大武机场（吕梁市区东约30公里）",
    "mainStation": "吕梁站（火车）/吕梁南站",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 18,
      "busCost": "市区公交1元，碛口方向班车25元"
    },
    "driving": {
      "tollPerDay": 70,
      "fuelPer100km": 70,
      "parking": "景区停车10元/次，碛口古镇停车15元/天"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "吕梁国际大酒店",
        "loc": "离石区永宁中路",
        "price": 420,
        "star": 4,
        "perks": "吕梁市区最好的酒店，商务配套齐全"
      },
      {
        "name": "汾阳汾酒大酒店",
        "loc": "汾阳市杏花村",
        "price": 380,
        "star": 4,
        "perks": "酒文化主题酒店，近杏花村"
      },
      {
        "name": "交城卦山度假酒店",
        "loc": "交城县卦山路",
        "price": 350,
        "star": 3,
        "perks": "近卦山和玄中寺，环境清幽"
      }
    ],
    "mid": [
      {
        "name": "吕梁宾馆",
        "loc": "离石区龙凤北大街",
        "price": 250,
        "star": 3,
        "perks": "老牌宾馆，服务稳定"
      },
      {
        "name": "碛口黄河人家客栈",
        "loc": "临县碛口镇",
        "price": 200,
        "star": 3,
        "perks": "窑洞式住宿，黄河景观"
      },
      {
        "name": "交城如家酒店",
        "loc": "交城县新开路",
        "price": 180,
        "star": 3,
        "perks": "近庞泉沟方向，交通便利"
      }
    ],
    "budget": [
      {
        "name": "碛口窑洞民宿",
        "loc": "临县碛口镇",
        "price": 80,
        "star": 2,
        "perks": "窑洞住宿体验，可观黄河"
      },
      {
        "name": "汉庭吕梁离石店",
        "loc": "离石区新华街",
        "price": 120,
        "star": 2,
        "perks": "连锁品质，位置好"
      },
      {
        "name": "李家山农家院",
        "loc": "临县碛口镇李家山",
        "price": 60,
        "star": 2,
        "perks": "窑洞住宿，地道农家饭"
      }
    ]
  }
};

// 宁波
window.CITY_DATABASE['宁波'] = {
  "code": "ningbo",
  "province": "浙江省",
  "coord": [
    121.5497,
    29.8683
  ],
  "bestSeason": "4-5月、9-10月，春秋气候宜人，适合游览东钱湖与溪口",
  "routes": {
    "classic": {
      "name": "甬城经典全景游",
      "days": 4,
      "tagline": "从藏书楼到东海之滨，感受宁波千年文脉与山海风光",
      "spots": [
        "天一阁博物馆",
        "老外滩",
        "东钱湖",
        "溪口·蒋氏故里",
        "天童寺",
        "南塘老街"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "古城文脉",
          "list": [
            "天一阁博物馆",
            "月湖公园",
            "南塘老街"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "近代风云",
          "list": [
            "老外滩",
            "宁波博物馆",
            "天一广场"
          ],
          "hours": 12
        },
        {
          "day": 3,
          "theme": "山水人文",
          "list": [
            "溪口·蒋氏故里",
            "雪窦山"
          ],
          "hours": 10
        },
        {
          "day": 4,
          "theme": "湖光山色",
          "list": [
            "东钱湖",
            "天童寺"
          ],
          "hours": 9
        }
      ]
    },
    "niche": {
      "name": "象山渔港深度游",
      "days": 3,
      "tagline": "远离人潮，在象山半岛体验原汁原味的渔家生活",
      "spots": [
        "象山影视城",
        "石浦渔港古城",
        "中国渔村",
        "花岙岛"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "影视探秘",
          "list": [
            "象山影视城"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "渔港风情",
          "list": [
            "石浦渔港古城",
            "中国渔村"
          ],
          "hours": 12
        },
        {
          "day": 3,
          "theme": "海岛寻幽",
          "list": [
            "花岙岛",
            "南田岛"
          ],
          "hours": 9
        }
      ]
    },
    "culture": {
      "name": "海丝文化寻踪游",
      "days": 3,
      "tagline": "追溯海上丝绸之路起点，探访宁波帮商贾传奇",
      "spots": [
        "天一阁博物馆",
        "宁波博物馆",
        "庆安会馆",
        "保国寺",
        "鼓楼"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "藏书文化",
          "list": [
            "天一阁博物馆",
            "月湖公园",
            "鼓楼"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "海丝遗迹",
          "list": [
            "庆安会馆",
            "老外滩",
            "宁波博物馆"
          ],
          "hours": 8
        },
        {
          "day": 3,
          "theme": "古刹禅意",
          "list": [
            "保国寺",
            "天童寺",
            "阿育王寺"
          ],
          "hours": 10
        }
      ]
    },
    "nature": {
      "name": "四明山山水秘境游",
      "days": 3,
      "tagline": "深入浙东绿肺，在四明山与东钱湖之间拥抱自然",
      "spots": [
        "四明山国家森林公园",
        "东钱湖",
        "浙东大峡谷",
        "丹山赤水"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "湖山初探",
          "list": [
            "东钱湖",
            "小普陀景区"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "森林秘境",
          "list": [
            "四明山国家森林公园",
            "丹山赤水"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "峡谷探幽",
          "list": [
            "浙东大峡谷",
            "天河生态风景区"
          ],
          "hours": 9
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "天一阁博物馆",
        "rank": 1,
        "intro": "中国现存最古老的私家藏书楼，建于明嘉靖年间，距今已有四百多年历史。园内假山池沼、廊桥亭榭，江南园林之美与书香文化完美交融，是宁波的城市文化名片。",
        "coord": [
          121.5441,
          29.8725
        ],
        "photoSpots": [
          {
            "name": "东园照壁",
            "pose": "以白墙黑瓦的明代照壁为背景拍摄全景"
          },
          {
            "name": "天一池",
            "pose": "池水倒影与古亭构成经典构图"
          }
        ],
        "food": [
          {
            "name": "缸鸭狗汤圆",
            "star": 5,
            "desc": "百年老店，宁波汤圆皮薄馅多，黑芝麻流心"
          },
          {
            "name": "龙凤金团",
            "star": 4,
            "desc": "传统糕点，外皮软糯内馅甜蜜"
          }
        ],
        "duration": 2.5,
        "ticket": 30,
        "tip": "周二闭馆，建议上午人少时前往"
      },
      {
        "name": "老外滩",
        "rank": 2,
        "intro": "中国最早的外滩之一，比上海外滩还早20年。1844年开埠后成为通商口岸，现存大量欧式老建筑。如今改造为时尚休闲街区，酒吧餐厅林立，夜景尤为迷人。",
        "coord": [
          121.5608,
          29.8786
        ],
        "photoSpots": [
          {
            "name": "外滩教堂",
            "pose": "哥特式教堂前拍摄剪影"
          },
          {
            "name": "甬江夜景",
            "pose": "江边栏杆处拍摄对岸灯火"
          }
        ],
        "food": [
          {
            "name": "老外滩海鲜楼",
            "star": 4,
            "desc": "红膏炝蟹、雪菜大黄鱼等经典宁波海鲜"
          },
          {
            "name": "外滩酒吧街",
            "star": 3,
            "desc": "各式精酿酒吧，适合夜生活"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "傍晚前往最佳，可同时欣赏日落与夜景"
      },
      {
        "name": "东钱湖",
        "rank": 3,
        "intro": "浙江最大的天然淡水湖，面积是杭州西湖的四倍。湖光山色秀美，有\"西子风韵、太湖气魄\"之誉。小普陀、南宋石刻公园等景点散落湖畔，骑行环湖绿道极为惬意。",
        "coord": [
          121.62,
          29.79
        ],
        "photoSpots": [
          {
            "name": "小普陀",
            "pose": "湖心长堤上拍摄水天一色"
          },
          {
            "name": "南宋石刻公园",
            "pose": "宋代石刻造像前取景"
          }
        ],
        "food": [
          {
            "name": "东钱湖湖鲜",
            "star": 5,
            "desc": "青鱼划水、螺蛳等湖鲜时令菜"
          },
          {
            "name": "钱湖鱼头",
            "star": 4,
            "desc": "砂锅鱼头汤浓白鲜美"
          }
        ],
        "duration": 5,
        "ticket": 0,
        "tip": "租自行车环湖约2小时，建议留半天时间"
      },
      {
        "name": "溪口·蒋氏故里",
        "rank": 4,
        "intro": "蒋介石的故乡，国家5A级旅游景区。武岭门、丰镐房、文昌阁、小洋房等民国建筑群保存完好，雪窦山上还有弥勒大佛和千年古刹雪窦寺，人文与山水兼具。",
        "coord": [
          121.28,
          29.68
        ],
        "photoSpots": [
          {
            "name": "武岭门",
            "pose": "在城门楼下仰拍民国风建筑"
          },
          {
            "name": "雪窦山弥勒大佛",
            "pose": "大佛正面全景，气势恢宏"
          }
        ],
        "food": [
          {
            "name": "溪口千层饼",
            "star": 5,
            "desc": "酥脆多层，甜咸皆有，当地特产"
          },
          {
            "name": "芋艿头",
            "star": 4,
            "desc": "奉化芋艿头，个大味美"
          }
        ],
        "duration": 6,
        "ticket": 230,
        "tip": "联票含雪窦山，建议一早出发，游览需一整天"
      },
      {
        "name": "天童寺",
        "rank": 5,
        "intro": "始建于西晋永康年间的千年古刹，日本佛教曹洞宗祖庭。寺院深藏于太白山麓，二十里松林夹道，气势恢宏。与灵隐寺、国清寺并称东南名刹。",
        "coord": [
          121.78,
          29.82
        ],
        "photoSpots": [
          {
            "name": "万松关",
            "pose": "松林大道回望山门"
          },
          {
            "name": "大雄宝殿",
            "pose": "殿前香炉与飞檐构图"
          }
        ],
        "food": [
          {
            "name": "天童寺素斋",
            "star": 4,
            "desc": "寺院素面素菜，简朴而味美"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "免费参观，山路较长建议穿舒适运动鞋"
      }
    ],
    "secondary": [
      {
        "name": "宁波博物馆",
        "rank": 6,
        "intro": "由普利兹克奖得主王澍设计的建筑杰作，外墙采用回收旧砖瓦，本身就是展品。馆内陈列宁波历史文化和民俗，\"东方神舟\"展厅讲述海上丝绸之路的故事。",
        "coord": [
          121.557,
          29.837
        ],
        "photoSpots": [
          {
            "name": "瓦爿墙",
            "pose": "在回收砖瓦拼砌的墙面前取景"
          },
          {
            "name": "屋顶平台",
            "pose": "俯瞰鄞州公园全景"
          }
        ],
        "food": [
          {
            "name": "宁波烤菜",
            "star": 4,
            "desc": "咸香入味的传统下饭菜"
          }
        ],
        "duration": 2.5,
        "ticket": 0,
        "tip": "周一闭馆，建筑本身就值得细看一小时"
      },
      {
        "name": "象山影视城",
        "rank": 7,
        "intro": "国内最大的影视拍摄基地之一，《琅琊榜》《芈月传》等热播剧在此取景。襄阳城、民国城等场景恢弘壮观，游客可穿古装沉浸式体验，运气好还能遇到剧组拍摄。",
        "coord": [
          121.87,
          29.43
        ],
        "photoSpots": [
          {
            "name": "襄阳城城墙",
            "pose": "登城墙俯瞰整座影视城"
          },
          {
            "name": "民国街道",
            "pose": "穿旗袍在民国建筑前留影"
          }
        ],
        "food": [
          {
            "name": "象山海鲜面",
            "star": 4,
            "desc": "黄鱼面、蛏子面等当地特色面食"
          }
        ],
        "duration": 5,
        "ticket": 150,
        "tip": "关注景区公众号查询剧组拍摄日程"
      },
      {
        "name": "南塘老街",
        "rank": 8,
        "intro": "宁波最具烟火气的历史街区，沿南塘河蜿蜒而建。白墙黛瓦的江南民居里聚集了最地道的宁波小吃，从汤圆到油赞子，从蟹黄汤包到三北藕丝糖，是吃货的天堂。",
        "coord": [
          121.548,
          29.858
        ],
        "photoSpots": [
          {
            "name": "河街夜景",
            "pose": "灯笼映水的江南夜景"
          },
          {
            "name": "戏台",
            "pose": "古戏台前拍摄街景全貌"
          }
        ],
        "food": [
          {
            "name": "南塘油赞子",
            "star": 5,
            "desc": "现炸麻花，酥脆喷香排长队"
          },
          {
            "name": "三北藕丝糖",
            "star": 4,
            "desc": "传统手工糖果，甜而不腻"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "建议傍晚前往，边吃边逛体验最佳"
      },
      {
        "name": "月湖公园",
        "rank": 9,
        "intro": "宁波的城市绿肺，始建于唐代，已有千年历史。湖心有芳草洲、竹洲等小岛，岸边柳树成荫，古桥碧水相映。免费开放，是市民休闲的好去处，比景区更有生活气息。",
        "coord": [
          121.543,
          29.869
        ],
        "photoSpots": [
          {
            "name": "月湖桥",
            "pose": "古桥上拍摄湖心岛与垂柳"
          }
        ],
        "food": [
          {
            "name": "缸鸭狗（月湖店）",
            "star": 4,
            "desc": "总店在附近，正宗宁波汤圆"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "与天一阁相距仅500米，可连游"
      },
      {
        "name": "保国寺",
        "rank": 10,
        "intro": "始建于东汉的千年古刹，大雄宝殿为北宋大中祥符六年重建，是长江以南最古老、保存最完整的木结构建筑之一，建筑学与佛教文化价值极高。",
        "coord": [
          121.55,
          29.92
        ],
        "photoSpots": [
          {
            "name": "大殿斗拱",
            "pose": "仰拍北宋木构的精美斗拱"
          }
        ],
        "food": [
          {
            "name": "慈城年糕",
            "star": 4,
            "desc": "附近慈城镇特产，口感软糯"
          }
        ],
        "duration": 1.5,
        "ticket": 20,
        "tip": "建筑爱好者必来，大殿无一根钉子"
      }
    ],
    "hidden": [
      {
        "name": "前童古镇",
        "rank": 11,
        "intro": "始建于南宋的古镇，至今保留着完整的明清古建筑群。八卦水系贯穿全镇，家家户户门前流水，被称为\"江南小丽江\"。电影《理发师》在此取景，商业化程度很低。",
        "coord": [
          121.38,
          29.26
        ],
        "photoSpots": [
          {
            "name": "八卦水系",
            "pose": "在桥上拍摄家家流水的画面"
          },
          {
            "name": "明清老街",
            "pose": "青石板路上拍摄纵深透视"
          }
        ],
        "food": [
          {
            "name": "前童三宝",
            "star": 5,
            "desc": "老豆腐、空心腐、香干，当地一绝"
          },
          {
            "name": "麦饼",
            "star": 4,
            "desc": "薄脆焦香，夹肉夹菜皆宜"
          }
        ],
        "duration": 3,
        "ticket": 60,
        "tip": "工作日前往几乎无游客，可体验最真实的古镇生活",
        "trend": "+95% 近3月热度"
      },
      {
        "name": "渔山列岛",
        "rank": 12,
        "intro": "宁波最南端的离岛，被称为\"亚洲第一钓场\"。岛上灯塔是远东最大灯塔之一，海水清澈见底，蓝眼泪荧光海偶有出现。适合海钓、露营和观星，是户外爱好者的天堂。",
        "coord": [
          122.27,
          28.9
        ],
        "photoSpots": [
          {
            "name": "渔山灯塔",
            "pose": "日落时分灯塔剪影"
          },
          {
            "name": "仙人桥",
            "pose": "天然石桥上拍摄海蚀地貌"
          }
        ],
        "food": [
          {
            "name": "渔山海钓",
            "star": 5,
            "desc": "现钓现烤的石斑鱼、虎头鱼"
          }
        ],
        "duration": 24,
        "ticket": 0,
        "tip": "需从石浦码头乘船约2.5小时，船票需提前预订",
        "trend": "+150% 近3月热度"
      },
      {
        "name": "鼓楼步行街",
        "rank": 13,
        "intro": "宁波老城中心的历史地标，始建于唐代。城楼上可俯瞰老城街巷，城楼下是热闹的步行商业街。中西合璧的建筑风格独具特色，夜市小吃摊烟火气十足。",
        "coord": [
          121.547,
          29.872
        ],
        "photoSpots": [
          {
            "name": "鼓楼城楼",
            "pose": "仰拍中西合璧的城楼建筑"
          }
        ],
        "food": [
          {
            "name": "鼓楼油赞子",
            "star": 4,
            "desc": "排队名店，现炸咸味麻花"
          },
          {
            "name": "矮子馅饼",
            "star": 4,
            "desc": "酥皮鲜肉馅饼，本地人最爱"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "夜间小吃摊更有氛围，适合逛吃",
        "trend": "+60% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "宁波栎社国际机场（NGB），距市中心约12公里，地铁2号线直达",
    "mainStation": "宁波站（高铁站），杭甬高铁、甬台温高铁交汇，地铁2/4号线直达",
    "publicTransit": {
      "metroDailyCost": 15,
      "taxiAvg": 35,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 60,
      "fuelPer100km": 70,
      "parking": "市中心约15元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "宁波柏悦酒店",
        "loc": "江北区·老外滩旁",
        "price": 1800,
        "star": 5,
        "perks": "江景房直面甬江，步行可达老外滩"
      },
      {
        "name": "宁波香格里拉大酒店",
        "loc": "鄞州区·南部商务区",
        "price": 1500,
        "star": 5,
        "perks": "东钱湖景观，spa与泳池一流"
      },
      {
        "name": "宁波洲际酒店",
        "loc": "鄞州区·东部新城",
        "price": 1400,
        "star": 5,
        "perks": "行政酒廊待遇优，早餐品类丰富"
      }
    ],
    "mid": [
      {
        "name": "宁波威斯汀酒店",
        "loc": "海曙区·天一广场",
        "price": 800,
        "star": 4,
        "perks": "市中心最佳位置，步行可达天一阁"
      },
      {
        "name": "宁波喜来登酒店",
        "loc": "鄞州区·万达广场",
        "price": 700,
        "star": 4,
        "perks": "商圈配套成熟，性价比高"
      },
      {
        "name": "宁波开元名都大酒店",
        "loc": "鄞州区·南部商务区",
        "price": 600,
        "star": 4,
        "perks": "国产品牌，服务贴心，中菜出色"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（天一广场店）",
        "loc": "海曙区",
        "price": 350,
        "star": 3,
        "perks": "核心地段，干净舒适，出行便利"
      },
      {
        "name": "亚朵酒店（南部商务区店）",
        "loc": "鄞州区",
        "price": 380,
        "star": 3,
        "perks": "人文主题酒店，免费阅读空间"
      },
      {
        "name": "汉庭酒店（火车站店）",
        "loc": "海曙区",
        "price": 250,
        "star": 3,
        "perks": "紧邻火车站和地铁，适合赶早班高铁"
      }
    ]
  }
};

// 绍兴
window.CITY_DATABASE['绍兴'] = {
  "code": "shaoxing",
  "province": "浙江省",
  "coord": [
    120.582,
    29.9971
  ],
  "bestSeason": "3-5月、9-11月，春日兰亭修禊、秋季黄酒飘香最为宜人",
  "routes": {
    "classic": {
      "name": "越乡经典人文游",
      "days": 3,
      "tagline": "跟着鲁迅的笔触，走过百草园到三味书屋的水乡记忆",
      "spots": [
        "鲁迅故里",
        "沈园",
        "东湖",
        "兰亭",
        "仓桥直街"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "鲁迅足迹",
          "list": [
            "鲁迅故里",
            "沈园",
            "仓桥直街"
          ],
          "hours": 13
        },
        {
          "day": 2,
          "theme": "山水诗画",
          "list": [
            "东湖",
            "大禹陵",
            "会稽山"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "书法圣地",
          "list": [
            "兰亭",
            "印山越国王陵"
          ],
          "hours": 9
        }
      ]
    },
    "niche": {
      "name": "古镇水乡慢游",
      "days": 3,
      "tagline": "在安昌和崇仁的古韵中，品味最原汁原味的江南水乡",
      "spots": [
        "安昌古镇",
        "崇仁古镇",
        "书圣故里",
        "八字桥"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "水乡烟火",
          "list": [
            "安昌古镇"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "古城秘境",
          "list": [
            "书圣故里",
            "八字桥",
            "蕺山街"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "隐世古镇",
          "list": [
            "崇仁古镇",
            "嵊州越剧小镇"
          ],
          "hours": 8
        }
      ]
    },
    "culture": {
      "name": "名士之乡深度游",
      "days": 4,
      "tagline": "从大禹到陆游，从蔡元培到鲁迅，追寻绍兴千年名士文化",
      "spots": [
        "大禹陵",
        "兰亭",
        "鲁迅故里",
        "蔡元培故居",
        "周恩来祖居",
        "秋瑾故居"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "上古圣王",
          "list": [
            "大禹陵",
            "会稽山"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "魏晋风骨",
          "list": [
            "兰亭",
            "王羲之故居"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "近代先驱",
          "list": [
            "鲁迅故里",
            "蔡元培故居",
            "秋瑾故居"
          ],
          "hours": 9
        },
        {
          "day": 4,
          "theme": "红色印记",
          "list": [
            "周恩来祖居",
            "大通学堂",
            "古越藏书楼"
          ],
          "hours": 8
        }
      ]
    },
    "nature": {
      "name": "会稽山水诗路游",
      "days": 3,
      "tagline": "重走唐诗之路，在会稽山与若耶溪间寻找诗人笔下的山水",
      "spots": [
        "会稽山",
        "若耶溪",
        "覆卮山",
        "十七都溪"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "会稽寻幽",
          "list": [
            "会稽山",
            "香炉峰"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "若耶诗溪",
          "list": [
            "若耶溪",
            "宛委山"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "梯田花海",
          "list": [
            "覆卮山梯田",
            "千年梯田"
          ],
          "hours": 9
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "鲁迅故里",
        "rank": 1,
        "intro": "鲁迅少年时代生活过的地方，包括百草园、三味书屋、鲁迅祖居等。青石板路、乌篷船、粉墙黛瓦，课本中的场景一一还原，是绍兴最具人气的文化景区。",
        "coord": [
          120.575,
          29.999
        ],
        "photoSpots": [
          {
            "name": "三味书屋",
            "pose": "在\"早\"字课桌前留影"
          },
          {
            "name": "百草园",
            "pose": "皂荚树下还原课本场景"
          }
        ],
        "food": [
          {
            "name": "咸亨酒店",
            "star": 5,
            "desc": "孔乙己同款茴香豆、黄酒，百年老店"
          },
          {
            "name": "鲁迅故里臭豆腐",
            "star": 4,
            "desc": "外酥内嫩，蘸辣酱更香"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "免费但需预约，旺季名额紧张请提前3天预约"
      },
      {
        "name": "兰亭",
        "rank": 2,
        "intro": "东晋书法家王羲之写下天下第一行书《兰亭集序》之地。茂林修竹、清流激湍，千年书法文化在此传承。曲水流觞体验区可亲身感受古人雅趣。",
        "coord": [
          120.48,
          29.95
        ],
        "photoSpots": [
          {
            "name": "曲水流觞",
            "pose": "溪畔竹下，再现兰亭雅集"
          },
          {
            "name": "御碑亭",
            "pose": "康熙御笔碑刻前取景"
          }
        ],
        "food": [
          {
            "name": "兰亭笋干",
            "star": 4,
            "desc": "当地竹林鲜笋制成，清甜可口"
          }
        ],
        "duration": 2.5,
        "ticket": 70,
        "tip": "书法爱好者可自带笔墨在指定区域体验"
      },
      {
        "name": "东湖",
        "rank": 3,
        "intro": "绍兴城东的湖泊景区，原为古代采石场，经千年形成悬崖峭壁、深潭碧水的独特景观。乘乌篷船穿行于石桥岩洞间，有\"天下第一水石盆景\"之美誉。",
        "coord": [
          120.62,
          30
        ],
        "photoSpots": [
          {
            "name": "仙桃洞",
            "pose": "乌篷船穿过石洞时拍摄光影"
          },
          {
            "name": "霞川桥",
            "pose": "石桥上俯瞰碧水丹崖"
          }
        ],
        "food": [
          {
            "name": "东湖鱼庄",
            "star": 4,
            "desc": "湖鲜现捞现做，白鱼最鲜"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "乌篷船票另购约80元/船，强烈建议乘船游览"
      },
      {
        "name": "沈园",
        "rank": 4,
        "intro": "陆游与唐婉的爱情故事发生地，园中壁上留有陆游《钗头凤》词。夜色下的沈园别有风味，\"沈园之夜\"实景演出将千年爱情悲剧娓娓道来，令人动容。",
        "coord": [
          120.577,
          29.995
        ],
        "photoSpots": [
          {
            "name": "钗头凤碑壁",
            "pose": "词壁前拍摄，光影效果极佳"
          },
          {
            "name": "孤鹤轩",
            "pose": "亭台水榭的经典江南构图"
          }
        ],
        "food": [
          {
            "name": "沈园夜场黄酒",
            "star": 4,
            "desc": "品一壶绍兴黄酒，听一段越剧"
          }
        ],
        "duration": 1.5,
        "ticket": 40,
        "tip": "夜场演出票价另计约80元，强烈推荐夜场"
      },
      {
        "name": "安昌古镇",
        "rank": 5,
        "intro": "绍兴最原汁原味的江南水乡古镇，没有过度商业化。沿河千米长廊挂满腊肠酱鸭，乌篷船悠然往来。师爷文化、扯白糖手艺，处处透着烟火气与老手艺的传承。",
        "coord": [
          120.48,
          30.07
        ],
        "photoSpots": [
          {
            "name": "千米长廊",
            "pose": "廊棚下腊肠成排的经典画面"
          },
          {
            "name": "乌篷船码头",
            "pose": "小船穿行古桥碧水间"
          }
        ],
        "food": [
          {
            "name": "安昌腊肠",
            "star": 5,
            "desc": "古镇特产，酱香浓郁越嚼越香"
          },
          {
            "name": "酱鸭",
            "star": 4,
            "desc": "秘制酱料腌制，皮脆肉嫩"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "腊月期间年味最浓，可看社戏和水上婚礼表演"
      }
    ],
    "secondary": [
      {
        "name": "大禹陵",
        "rank": 6,
        "intro": "华夏圣祖大禹的陵墓，与黄帝陵、炎帝陵并称中华三祖陵。会稽山麓，古木参天，禹庙、禹祠、禹陵三大建筑群气势恢宏，是绍兴历史的源头。",
        "coord": [
          120.59,
          29.97
        ],
        "photoSpots": [
          {
            "name": "禹庙大殿",
            "pose": "殿前广场拍摄恢弘建筑群"
          }
        ],
        "food": [
          {
            "name": "禹陵村农家菜",
            "star": 3,
            "desc": "地道绍兴土菜，霉干菜扣肉"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "与鲁迅故里相距不远，可同日游览"
      },
      {
        "name": "仓桥直街",
        "rank": 7,
        "intro": "绍兴保存最完好的历史街区之一，全长1.5公里。台门建筑、河道人家、老字号店铺鳞次栉比。获得联合国亚太遗产保护奖，是体验绍兴日常生活的最佳去处。",
        "coord": [
          120.575,
          30.002
        ],
        "photoSpots": [
          {
            "name": "青石板路",
            "pose": "雨后石板路倒映白墙黑瓦"
          }
        ],
        "food": [
          {
            "name": "寻宝记臭豆腐",
            "star": 5,
            "desc": "绍兴最出名的臭豆腐摊"
          },
          {
            "name": "奶油小攀",
            "star": 4,
            "desc": "类似蛋挞的绍兴传统点心"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "清晨人少适合拍照，下午美食摊更热闹"
      },
      {
        "name": "书圣故里",
        "rank": 8,
        "intro": "王羲之故里历史街区，保存着大量明清台门建筑。蕺山书院、题扇桥、戒珠寺等遗迹散落其间，是绍兴最有生活气息的老街区，原住民仍在此生活。",
        "coord": [
          120.573,
          30.005
        ],
        "photoSpots": [
          {
            "name": "题扇桥",
            "pose": "古桥碧水台门的经典构图"
          }
        ],
        "food": [
          {
            "name": "蕺山街老茶馆",
            "star": 4,
            "desc": "几块钱一杯的盖碗茶，老绍兴的味道"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "游客不多，是拍摄绍兴老城生活的好地方"
      },
      {
        "name": "八字桥",
        "rank": 9,
        "intro": "始建于南宋的古桥，因形似\"八\"字得名，被称为中国最古老的立交桥。桥下水网交错、桥上道路四通，是古代绍兴水利交通工程的杰作，全国重点文保单位。",
        "coord": [
          120.578,
          30.001
        ],
        "photoSpots": [
          {
            "name": "桥头全景",
            "pose": "站在桥顶俯瞰四向水道交汇"
          }
        ],
        "food": [
          {
            "name": "桥边馄饨摊",
            "star": 3,
            "desc": "本地人常去的街边小摊"
          }
        ],
        "duration": 0.5,
        "ticket": 0,
        "tip": "与书圣故里相邻，可连游"
      },
      {
        "name": "会稽山",
        "rank": 10,
        "intro": "中国古代九大名山之一，大禹在此会诸侯、计功行赏。山中香炉峰、石帆山风景秀丽，历代文人墨客留下大量诗篇，是唐诗之路的起点之一。",
        "coord": [
          120.59,
          29.95
        ],
        "photoSpots": [
          {
            "name": "香炉峰顶",
            "pose": "登顶俯瞰绍兴全城"
          }
        ],
        "food": [
          {
            "name": "会稽山黄酒",
            "star": 4,
            "desc": "山上酒庄品鉴正宗绍兴黄酒"
          }
        ],
        "duration": 3,
        "ticket": 50,
        "tip": "登山约2小时，建议清晨前往看云海"
      }
    ],
    "hidden": [
      {
        "name": "崇仁古镇",
        "rank": 11,
        "intro": "嵊州境内保存完好的明清古镇，有\"江南古镇活化石\"之称。老台门群规模宏大，玉山公祠的砖雕精美绝伦。几乎没有游客，可体验最原生态的古镇生活。",
        "coord": [
          120.78,
          29.62
        ],
        "photoSpots": [
          {
            "name": "玉山公祠",
            "pose": "拍摄精美的砖雕门楼"
          },
          {
            "name": "老台门群",
            "pose": "深巷中高墙大院的气势"
          }
        ],
        "food": [
          {
            "name": "嵊州小笼包",
            "star": 5,
            "desc": "皮薄汤多，比上海小笼更鲜美"
          },
          {
            "name": "嵊州炒年糕",
            "star": 4,
            "desc": "带汤炒年糕，当地一绝"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "从绍兴市区自驾约1小时，公共交通不太方便",
        "trend": "+85% 近3月热度"
      },
      {
        "name": "覆卮山梯田",
        "rank": 12,
        "intro": "上虞覆卮山上的千年梯田，层层叠叠从山脚延伸至山腰。春天油菜花金黄、秋天稻谷飘香，还有万年石浪地质奇观。近年来因航拍照片走红网络。",
        "coord": [
          120.82,
          30.05
        ],
        "photoSpots": [
          {
            "name": "千年梯田观景台",
            "pose": "航拍或高处俯拍梯田全景"
          },
          {
            "name": "冰川石浪",
            "pose": "巨石阵中拍摄地质奇观"
          }
        ],
        "food": [
          {
            "name": "覆卮山农家菜",
            "star": 4,
            "desc": "高山蔬菜、土鸡煲，新鲜自然"
          }
        ],
        "duration": 4,
        "ticket": 0,
        "tip": "春天3-4月和秋天9-10月景色最美",
        "trend": "+200% 近3月热度"
      },
      {
        "name": "绍兴黄酒博物馆",
        "rank": 13,
        "intro": "中国唯一的黄酒主题博物馆，展示绍兴黄酒三千年酿造历史。从古法酿酒器具到现代黄酒文化，可亲手体验开坛、品酒。馆内黄酒棒冰是网红打卡美食。",
        "coord": [
          120.57,
          30.001
        ],
        "photoSpots": [
          {
            "name": "酒坛墙",
            "pose": "百只酒坛堆砌的壮观展示墙"
          }
        ],
        "food": [
          {
            "name": "黄酒棒冰",
            "star": 5,
            "desc": "黄酒风味冰棍，微醺清甜"
          },
          {
            "name": "黄酒奶茶",
            "star": 4,
            "desc": "黄酒与奶茶的创意碰撞"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "位于市区，可与仓桥直街连游",
        "trend": "+110% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "无民用机场，最近为杭州萧山国际机场（约60公里），机场大巴约90分钟",
    "mainStation": "绍兴北站（高铁站），杭甬高铁30分钟达杭州、90分钟达上海",
    "publicTransit": {
      "metroDailyCost": 12,
      "taxiAvg": 25,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 50,
      "fuelPer100km": 65,
      "parking": "市中心约10元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "绍兴咸亨酒店",
        "loc": "越城区·鲁迅故里旁",
        "price": 1200,
        "star": 5,
        "perks": "鲁迅文化主题，出门即鲁迅故里，黄酒宴一绝"
      },
      {
        "name": "绍兴饭店",
        "loc": "越城区·府山脚下",
        "price": 1000,
        "star": 5,
        "perks": "园林式酒店，江南庭院风格，环境清幽"
      },
      {
        "name": "绍兴兰亭安麓酒店",
        "loc": "柯桥区·兰亭景区",
        "price": 2500,
        "star": 5,
        "perks": "顶级度假酒店，明清古建改造，私密性极佳"
      }
    ],
    "mid": [
      {
        "name": "绍兴花间堂·咸亨酒店",
        "loc": "越城区·鲁迅中路",
        "price": 650,
        "star": 4,
        "perks": "精品文化酒店，位置绝佳"
      },
      {
        "name": "绍兴大禹开元",
        "loc": "越城区·会稽山",
        "price": 800,
        "star": 4,
        "perks": "大禹文化主题，山景房幽静"
      },
      {
        "name": "绍兴假日酒店",
        "loc": "越城区·解放路",
        "price": 500,
        "star": 4,
        "perks": "老牌酒店，交通便利，性价比高"
      }
    ],
    "budget": [
      {
        "name": "亚朵酒店（鲁迅故里店）",
        "loc": "越城区",
        "price": 320,
        "star": 3,
        "perks": "步行5分钟到鲁迅故里，服务好"
      },
      {
        "name": "如家酒店（城市广场店）",
        "loc": "越城区",
        "price": 220,
        "star": 3,
        "perks": "中心地段，干净整洁"
      },
      {
        "name": "汉庭酒店（火车站店）",
        "loc": "越城区",
        "price": 200,
        "star": 3,
        "perks": "近火车站，赶早班高铁方便"
      }
    ]
  }
};

// 温州
window.CITY_DATABASE['温州'] = {
  "code": "wenzhou",
  "province": "浙江省",
  "coord": [
    120.6994,
    28.0005
  ],
  "bestSeason": "4-6月、9-11月，春夏之交雁荡山瀑布丰水，秋日楠溪江红叶如画",
  "routes": {
    "classic": {
      "name": "瓯越山水经典游",
      "days": 4,
      "tagline": "从雁荡山到楠溪江，领略温州山水之奇",
      "spots": [
        "雁荡山",
        "楠溪江",
        "江心屿",
        "南麂列岛",
        "洞头列岛"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "海上名山",
          "list": [
            "雁荡山·灵峰",
            "雁荡山·灵岩"
          ],
          "hours": 14
        },
        {
          "day": 2,
          "theme": "飞瀑流泉",
          "list": [
            "雁荡山·大龙湫",
            "雁荡山·方洞"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "田园诗画",
          "list": [
            "楠溪江·石桅岩",
            "楠溪江·丽水古街"
          ],
          "hours": 9
        },
        {
          "day": 4,
          "theme": "江海交汇",
          "list": [
            "江心屿",
            "五马街"
          ],
          "hours": 10
        }
      ]
    },
    "niche": {
      "name": "海岛秘境探游",
      "days": 3,
      "tagline": "在南麂列岛和洞头的蔚蓝海水中，寻找东海秘境",
      "spots": [
        "南麂列岛",
        "洞头列岛",
        "半屏山",
        "仙叠岩"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "碧海金沙",
          "list": [
            "南麂列岛·大沙岙",
            "南麂列岛·三盘尾"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "海上花园",
          "list": [
            "洞头列岛·半屏山",
            "洞头列岛·仙叠岩"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "渔村风情",
          "list": [
            "望海楼",
            "东岙沙滩",
            "洞头渔村"
          ],
          "hours": 8
        }
      ]
    },
    "culture": {
      "name": "瓯越文化寻根游",
      "days": 3,
      "tagline": "从永嘉学派到廊桥遗梦，探寻温州文化的深层脉络",
      "spots": [
        "江心屿",
        "泰顺廊桥",
        "朔门历史街区",
        "永嘉书院"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "瓯越古韵",
          "list": [
            "江心屿",
            "朔门历史街区",
            "五马街"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "廊桥遗梦",
          "list": [
            "泰顺廊桥·泗溪姐妹桥",
            "泰顺廊桥·三条桥"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "永嘉学派",
          "list": [
            "永嘉书院",
            "苍坡古村",
            "芙蓉古村"
          ],
          "hours": 9
        }
      ]
    },
    "nature": {
      "name": "楠溪江田园秘境游",
      "days": 3,
      "tagline": "竹筏漂流在楠溪江上，穿越千年古村与田园山水",
      "spots": [
        "楠溪江",
        "石桅岩",
        "龙湾潭",
        "四海山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "竹筏漂流",
          "list": [
            "楠溪江竹筏漂流",
            "丽水古街",
            "芙蓉古村"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "奇峰幽谷",
          "list": [
            "石桅岩",
            "龙湾潭国家森林公园"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "森林洗肺",
          "list": [
            "四海山",
            "楠溪江源头"
          ],
          "hours": 9
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "雁荡山",
        "rank": 1,
        "intro": "中国十大名山之一，世界地质公园。以灵峰、灵岩、大龙湫\"雁荡三绝\"闻名于世。日景耐看、夜景销魂，灵峰夜景在灯光映照下呈现夫妻峰等奇妙剪影。",
        "coord": [
          121.07,
          28.38
        ],
        "photoSpots": [
          {
            "name": "灵峰夜景",
            "pose": "夜景剪影拍摄，提前占好机位"
          },
          {
            "name": "大龙湫瀑布",
            "pose": "丰水期瀑布飞流直下，广角拍摄"
          }
        ],
        "food": [
          {
            "name": "雁荡山香螺",
            "star": 5,
            "desc": "当地特产螺类，鲜香入味"
          },
          {
            "name": "番薯粉丝汤",
            "star": 4,
            "desc": "山民家常美食，暖胃实在"
          }
        ],
        "duration": 8,
        "ticket": 170,
        "tip": "联票含灵峰日夜景、灵岩、大龙湫，建议安排2天"
      },
      {
        "name": "楠溪江",
        "rank": 2,
        "intro": "国家级风景名胜区，以\"水秀、岩奇、瀑多、村古\"闻名。竹筏漂流于碧水之上，两岸古村散落，是中国山水诗的发祥地之一。谢灵运在此开创了山水诗派。",
        "coord": [
          120.72,
          28.45
        ],
        "photoSpots": [
          {
            "name": "竹筏漂流",
            "pose": "竹筏上拍摄两岸田园山水"
          },
          {
            "name": "石桅岩",
            "pose": "一柱擎天的火山岩奇观"
          }
        ],
        "food": [
          {
            "name": "楠溪溪鱼",
            "star": 5,
            "desc": "溪水养殖的淡水鱼，清甜鲜嫩"
          },
          {
            "name": "楠溪素面",
            "star": 4,
            "desc": "手工素面配当地浇头"
          }
        ],
        "duration": 6,
        "ticket": 0,
        "tip": "漂流费约80-100元/筏，沿溪各景点单独收费"
      },
      {
        "name": "江心屿",
        "rank": 3,
        "intro": "温州城区北面瓯江中的小岛，中国四大孤屿之一。岛上有东西双塔、江心寺、浩然楼等古迹。谢灵运、李白、杜甫等历代名人都曾登临赋诗，文化底蕴深厚。",
        "coord": [
          120.67,
          28.02
        ],
        "photoSpots": [
          {
            "name": "东西双塔",
            "pose": "双塔与瓯江的经典构图"
          },
          {
            "name": "江心寺",
            "pose": "寺前对联\"云朝朝朝朝朝朝朝朝散\""
          }
        ],
        "food": [
          {
            "name": "江心屿素面",
            "star": 4,
            "desc": "岛上传统素面，汤清味鲜"
          }
        ],
        "duration": 2.5,
        "ticket": 25,
        "tip": "码头在望江东路，渡轮约5分钟上岛"
      },
      {
        "name": "南麂列岛",
        "rank": 4,
        "intro": "中国十大最美海岛之一，国家级海洋自然保护区。大沙岙贝壳沙滩细软洁白，三盘尾花岗岩海景壮阔。海水能见度极高，被誉为\"碧海仙山\"，限流保护生态。",
        "coord": [
          121.05,
          27.47
        ],
        "photoSpots": [
          {
            "name": "大沙岙沙滩",
            "pose": "日出时分金色沙滩"
          },
          {
            "name": "三盘尾",
            "pose": "海蚀岩石与碧海的壮观构图"
          }
        ],
        "food": [
          {
            "name": "南麂贝类",
            "star": 5,
            "desc": "新鲜贝类现捞现做，极鲜"
          },
          {
            "name": "南麂黄鱼",
            "star": 5,
            "desc": "野生大黄鱼，清蒸最佳"
          }
        ],
        "duration": 24,
        "ticket": 0,
        "tip": "每日限流，船票需提前一周预订，旺季一票难求"
      },
      {
        "name": "泰顺廊桥",
        "rank": 5,
        "intro": "泰顺县境内保存着全国最多的木拱廊桥，其中泗溪姐妹桥（北涧桥、溪东桥）最为精美。编梁木拱结构不用一钉一铆，是中国传统建筑智慧的结晶。",
        "coord": [
          119.72,
          27.56
        ],
        "photoSpots": [
          {
            "name": "北涧桥",
            "pose": "桥头古树与廊桥全景"
          },
          {
            "name": "溪东桥",
            "pose": "溪水倒影中的廊桥"
          }
        ],
        "food": [
          {
            "name": "泰顺婆饼",
            "star": 4,
            "desc": "薄如纸的传统面饼，卷菜食用"
          },
          {
            "name": "泥鳅汤",
            "star": 4,
            "desc": "当地特色暖汤，鲜美滋补"
          }
        ],
        "duration": 4,
        "ticket": 0,
        "tip": "各廊桥分散在泰顺各乡镇，建议自驾串联游览"
      }
    ],
    "secondary": [
      {
        "name": "洞头列岛",
        "rank": 6,
        "intro": "温州东面的海岛区，由103个岛屿组成。半屏山被誉为\"神州海上第一屏\"，仙叠岩海蚀地貌鬼斧神工。望海楼上可俯瞰百岛全景，海鲜排档一条街极其热闹。",
        "coord": [
          121.15,
          27.83
        ],
        "photoSpots": [
          {
            "name": "半屏山",
            "pose": "海上屏风状巨岩全景"
          },
          {
            "name": "望海楼",
            "pose": "楼顶俯瞰百岛全景"
          }
        ],
        "food": [
          {
            "name": "洞头海鲜排档",
            "star": 5,
            "desc": "活海鲜现选现做，种类极多"
          },
          {
            "name": "鱼饼",
            "star": 4,
            "desc": "洞头传统鱼饼，Q弹鲜美"
          }
        ],
        "duration": 6,
        "ticket": 0,
        "tip": "跨海大桥已通，从温州市区自驾约1小时"
      },
      {
        "name": "永嘉书院",
        "rank": 7,
        "intro": "楠溪江畔的文化景区，以永嘉学派文化为核心打造。书院依山傍水，内有瀑布群、天然盆景、摩崖石刻等。融合自然山水与人文底蕴，是楠溪江必游之地。",
        "coord": [
          120.68,
          28.37
        ],
        "photoSpots": [
          {
            "name": "瀑布群",
            "pose": "多级瀑布连环拍摄"
          }
        ],
        "food": [
          {
            "name": "楠溪麦饼",
            "star": 4,
            "desc": "薄脆咸鲜的传统面食"
          }
        ],
        "duration": 3,
        "ticket": 80,
        "tip": "景区内有索道可直达山顶，节省体力"
      },
      {
        "name": "朔门历史街区",
        "rank": 8,
        "intro": "温州古城北大门的历史街区，2022年考古发现宋代古港遗址，实证了温州作为海上丝绸之路重要港口的地位。街区保留古城格局，新店与古迹交融。",
        "coord": [
          120.67,
          28.01
        ],
        "photoSpots": [
          {
            "name": "古城墙遗址",
            "pose": "考古发掘现场与古城墙"
          }
        ],
        "food": [
          {
            "name": "朔门打绳糖",
            "star": 4,
            "desc": "传统手工软糖，即将失传的手艺"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "古港遗址博物馆2024年新开放，值得一看"
      },
      {
        "name": "五马街",
        "rank": 9,
        "intro": "温州最繁华的商业街区，因东晋书法家王羲之在此驾五马而得名。步行街两侧骑楼建筑保存完好，老字号与现代商铺并存，是温州城市记忆的核心地带。",
        "coord": [
          120.67,
          28
        ],
        "photoSpots": [
          {
            "name": "五马雕塑",
            "pose": "标志性五马铜雕前留影"
          }
        ],
        "food": [
          {
            "name": "矮人松糕",
            "star": 5,
            "desc": "温州传统名点，松软甜糯"
          },
          {
            "name": "灯盏糕",
            "star": 5,
            "desc": "油炸萝卜丝饼，外酥内鲜"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "夜晚灯火通明更有氛围，与禅街连游"
      },
      {
        "name": "苍坡古村",
        "rank": 10,
        "intro": "始建于五代后周年间的千年古村，以\"文房四宝\"布局闻名——笔街、墨池、砚台、纸村，体现了耕读文化的深厚底蕴。村内古柏苍劲，石板路幽深。",
        "coord": [
          120.7,
          28.38
        ],
        "photoSpots": [
          {
            "name": "笔街",
            "pose": "长街如笔直的透视构图"
          }
        ],
        "food": [
          {
            "name": "古村农家菜",
            "star": 3,
            "desc": "自家种植的蔬菜和溪鱼"
          }
        ],
        "duration": 1.5,
        "ticket": 15,
        "tip": "与芙蓉古村相距仅3公里，可连游"
      }
    ],
    "hidden": [
      {
        "name": "神仙居（温州侧）",
        "rank": 11,
        "intro": "温州与台州交界处的仙居山脉，从温州永嘉一侧进入更为幽静。高山草甸、云海日出、火山岩峰林，壮美不输台州侧。游客较少，更适合深度徒步爱好者。",
        "coord": [
          120.65,
          28.58
        ],
        "photoSpots": [
          {
            "name": "高山草甸",
            "pose": "日出时分云海中的绿色草甸"
          }
        ],
        "food": [
          {
            "name": "高山野菜",
            "star": 4,
            "desc": "山民采集的野生蔬菜和笋"
          }
        ],
        "duration": 6,
        "ticket": 120,
        "tip": "从永嘉一侧需徒步进入，适合有一定体力者",
        "trend": "+75% 近3月热度"
      },
      {
        "name": "芙蓉古村",
        "rank": 12,
        "intro": "楠溪江畔保存最完整的古村落之一，始建于唐末。以\"七星八斗\"布局建村，古民居群规模宏大。芙蓉三冠（三座山峰）环抱，是体验古村生活的绝佳去处。",
        "coord": [
          120.71,
          28.4
        ],
        "photoSpots": [
          {
            "name": "芙蓉三冠",
            "pose": "三座山峰与古村全景"
          },
          {
            "name": "古村池塘",
            "pose": "池塘倒映古民居"
          }
        ],
        "food": [
          {
            "name": "芙蓉村烤全羊",
            "star": 5,
            "desc": "预订制的烤全羊，需提前联系"
          }
        ],
        "duration": 2,
        "ticket": 20,
        "tip": "住一晚古村民宿体验更佳，夜晚几乎没有光污染",
        "trend": "+130% 近3月热度"
      },
      {
        "name": "百丈漈",
        "rank": 13,
        "intro": "文成县境内的瀑布群，一漈百丈高、二漈百丈深、三漈百丈宽，三级瀑布总落差272米，号称\"中华第一高瀑\"。水量充沛时气势磅礴，水雾弥漫如入仙境。",
        "coord": [
          120.05,
          27.78
        ],
        "photoSpots": [
          {
            "name": "一漈飞瀑",
            "pose": "仰拍272米高的瀑布全景"
          }
        ],
        "food": [
          {
            "name": "文成兔肉",
            "star": 4,
            "desc": "当地特产红烧兔肉"
          }
        ],
        "duration": 3,
        "ticket": 65,
        "tip": "从温州市区自驾约2小时，建议雨后水量大时前往",
        "trend": "+160% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "温州龙湾国际机场（WNZ），距市中心约22公里，有机场大巴和S1线轻轨",
    "mainStation": "温州南站（高铁站），杭深线、金温铁路交汇，S1线连接机场",
    "publicTransit": {
      "metroDailyCost": 12,
      "taxiAvg": 30,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 55,
      "fuelPer100km": 68,
      "parking": "市中心约12元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "温州香格里拉大酒店",
        "loc": "鹿城区·滨江商务区",
        "price": 1400,
        "star": 5,
        "perks": "瓯江景观房，行政楼层待遇优"
      },
      {
        "name": "温州威斯汀酒店",
        "loc": "鹿城区·中央绿轴",
        "price": 1300,
        "star": 5,
        "perks": "城市新地标，无边泳池俯瞰全城"
      },
      {
        "name": "温州喜来登酒店",
        "loc": "鹿城区·车站大道",
        "price": 1100,
        "star": 5,
        "perks": "老牌五星，服务稳定，位置便利"
      }
    ],
    "mid": [
      {
        "name": "温州王朝大酒店",
        "loc": "鹿城区·人民路",
        "price": 550,
        "star": 4,
        "perks": "老牌酒店，市中心核心位置"
      },
      {
        "name": "温州国际大酒店",
        "loc": "鹿城区·车站大道",
        "price": 500,
        "star": 4,
        "perks": "交通枢纽旁，出行极便利"
      },
      {
        "name": "温州铂尔曼酒店",
        "loc": "瓯海区·高铁新城",
        "price": 600,
        "star": 4,
        "perks": "近高铁站，新装修设施好"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（五马街店）",
        "loc": "鹿城区",
        "price": 320,
        "star": 3,
        "perks": "核心商圈，逛街方便"
      },
      {
        "name": "亚朵酒店（南塘街店）",
        "loc": "鹿城区",
        "price": 350,
        "star": 3,
        "perks": "近南塘街美食，人文主题"
      },
      {
        "name": "汉庭酒店（火车站店）",
        "loc": "鹿城区",
        "price": 230,
        "star": 3,
        "perks": "火车站旁，适合赶早班列车"
      }
    ]
  }
};

// 湖州
window.CITY_DATABASE['湖州'] = {
  "code": "huzhou",
  "province": "浙江省",
  "coord": [
    120.0932,
    30.8726
  ],
  "bestSeason": "3-5月、9-11月，春日莫干山竹海新绿、秋天安吉银杏金黄",
  "routes": {
    "classic": {
      "name": "太湖山水经典游",
      "days": 3,
      "tagline": "从南浔水乡到莫干山竹海，尽享湖州清丽山水",
      "spots": [
        "南浔古镇",
        "莫干山",
        "安吉竹海",
        "太湖旅游度假区"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "水乡古韵",
          "list": [
            "南浔古镇",
            "百间楼"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "名山竹海",
          "list": [
            "莫干山",
            "裸心谷周边"
          ],
          "hours": 11
        },
        {
          "day": 3,
          "theme": "竹乡翠色",
          "list": [
            "安吉中国大竹海",
            "太湖旅游度假区"
          ],
          "hours": 9
        }
      ]
    },
    "niche": {
      "name": "安吉深度度假游",
      "days": 3,
      "tagline": "在竹海深处泡民宿，在安吉白茶中品味山居岁月",
      "spots": [
        "安吉竹海",
        "云上草原",
        "中南百草原",
        "安吉白茶原产地"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "竹海探秘",
          "list": [
            "中国大竹海",
            "竹博园"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "高山草甸",
          "list": [
            "云上草原",
            "仙龙峡"
          ],
          "hours": 11
        },
        {
          "day": 3,
          "theme": "茶园采风",
          "list": [
            "安吉白茶原产地",
            "余村（两山理论发源地）"
          ],
          "hours": 8
        }
      ]
    },
    "culture": {
      "name": "湖笔茶文化寻踪游",
      "days": 3,
      "tagline": "从湖笔之乡到大唐贡茶院，品味湖州千年文脉",
      "spots": [
        "大唐贡茶院",
        "南浔古镇",
        "飞英塔",
        "湖笔博物馆",
        "下渚湖湿地"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "古镇遗韵",
          "list": [
            "南浔古镇",
            "嘉业藏书楼"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "茶笔双绝",
          "list": [
            "大唐贡茶院",
            "湖笔博物馆"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "湿地生态",
          "list": [
            "下渚湖湿地",
            "飞英塔"
          ],
          "hours": 9
        }
      ]
    },
    "nature": {
      "name": "莫干山深度徒步游",
      "days": 3,
      "tagline": "在莫干山的竹海茶园间徒步，享受最纯粹的山居生活",
      "spots": [
        "莫干山",
        "劳岭古道",
        "庾村文化市集",
        "对河口水库"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "登山揽胜",
          "list": [
            "莫干山风景区",
            "剑池",
            "芦花荡"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "古道竹林",
          "list": [
            "劳岭古道",
            "庾村文化市集"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "山居闲情",
          "list": [
            "对河口水库",
            "莫干山民宿群"
          ],
          "hours": 7
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "南浔古镇",
        "rank": 1,
        "intro": "江南六大古镇之一，中西合璧的建筑风格独树一帜。小莲庄、嘉业藏书楼、张石铭旧宅等豪宅大院气派非凡，百间楼沿河民居保留了最原汁原味的水乡生活。",
        "coord": [
          120.43,
          30.87
        ],
        "photoSpots": [
          {
            "name": "百间楼",
            "pose": "沿河长廊拍摄倒影，清晨最佳"
          },
          {
            "name": "小莲庄",
            "pose": "荷花池与牌坊群构图"
          }
        ],
        "food": [
          {
            "name": "双交面",
            "star": 5,
            "desc": "南浔特色面食，两种浇头"
          },
          {
            "name": "桔红糕",
            "star": 4,
            "desc": "传统糯米糕点，甜而不腻"
          }
        ],
        "duration": 4,
        "ticket": 95,
        "tip": "清晨和傍晚游客较少，百间楼拍照最佳"
      },
      {
        "name": "莫干山",
        "rank": 2,
        "intro": "中国四大避暑胜地之一，以竹海、清泉、云雾和民国别墅群闻名。山上有剑池、芦花荡等景点，山下庾村文创集市汇聚咖啡馆和手作工坊，民宿产业全国领先。",
        "coord": [
          119.87,
          30.63
        ],
        "photoSpots": [
          {
            "name": "竹海云雾",
            "pose": "清晨云雾缭绕竹林间"
          },
          {
            "name": "裸心谷",
            "pose": "山顶无边泳池全景"
          }
        ],
        "food": [
          {
            "name": "莫干山笋宴",
            "star": 5,
            "desc": "各式竹笋菜，鲜嫩至极"
          },
          {
            "name": "莫干黄芽茶",
            "star": 4,
            "desc": "当地名茶，清甜回甘"
          }
        ],
        "duration": 8,
        "ticket": 85,
        "tip": "建议住一晚山间民宿，裸心谷等需提前预订"
      },
      {
        "name": "安吉中国大竹海",
        "rank": 3,
        "intro": "华东最大的竹海景区，万亩竹林连绵不绝。电影《卧虎藏龙》竹林打斗场景在此取景。登观景台可俯瞰竹海波涛，空气中负氧离子含量极高，是天然氧吧。",
        "coord": [
          119.68,
          30.62
        ],
        "photoSpots": [
          {
            "name": "竹海观景台",
            "pose": "高处俯瞰万亩竹海"
          },
          {
            "name": "竹林小道",
            "pose": "阳光透过竹叶的光影"
          }
        ],
        "food": [
          {
            "name": "全笋宴",
            "star": 5,
            "desc": "十多种不同做法的竹笋菜"
          },
          {
            "name": "安吉白茶",
            "star": 5,
            "desc": "当地名茶，氨基酸含量极高"
          }
        ],
        "duration": 3,
        "ticket": 68,
        "tip": "春季3-4月可体验挖笋活动"
      },
      {
        "name": "飞英塔",
        "rank": 4,
        "intro": "湖州城区内的千年古塔，始建于唐代，现存塔身为南宋重建。独特的\"塔中塔\"结构——石塔外罩木塔，全国仅此一处。登塔可俯瞰湖州全城和太湖风光。",
        "coord": [
          120.09,
          30.87
        ],
        "photoSpots": [
          {
            "name": "塔内石塔",
            "pose": "拍摄内外塔之间的精妙结构"
          }
        ],
        "food": [
          {
            "name": "湖州千张包",
            "star": 4,
            "desc": "豆腐皮包裹鲜肉馅，汤煮而成"
          }
        ],
        "duration": 1,
        "ticket": 10,
        "tip": "市中心地段，可顺路游览莲花庄"
      },
      {
        "name": "下渚湖湿地",
        "rank": 5,
        "intro": "江南最大的天然湿地之一，水域面积3.4平方公里。乘船穿行于芦苇荡间，可见朱鹮、白鹭等珍稀鸟类。秋风起时芦花飞雪，是观鸟和摄影的天堂。",
        "coord": [
          120.08,
          30.83
        ],
        "photoSpots": [
          {
            "name": "芦苇荡",
            "pose": "秋天芦花飞雪中拍摄"
          },
          {
            "name": "朱鹮岛",
            "pose": "长焦拍摄珍稀朱鹮"
          }
        ],
        "food": [
          {
            "name": "防风神仙草",
            "star": 3,
            "desc": "当地特色凉茶，清热解暑"
          }
        ],
        "duration": 2.5,
        "ticket": 60,
        "tip": "秋季10-11月芦苇最美，也是观鸟最佳季节"
      }
    ],
    "secondary": [
      {
        "name": "太湖旅游度假区",
        "rank": 6,
        "intro": "太湖南岸的大型度假区，有月亮酒店（喜来登温泉度假酒店）等地标建筑。湖鲜美食、温泉度假、水上运动一应俱全，是周末休闲的好去处。",
        "coord": [
          120.06,
          30.96
        ],
        "photoSpots": [
          {
            "name": "月亮酒店",
            "pose": "太湖边拍摄指环形建筑夜景"
          }
        ],
        "food": [
          {
            "name": "太湖三白",
            "star": 5,
            "desc": "白鱼、银鱼、白虾，太湖名菜"
          }
        ],
        "duration": 4,
        "ticket": 0,
        "tip": "月亮酒店下午茶可进入拍照，约200元/人"
      },
      {
        "name": "大唐贡茶院",
        "rank": 7,
        "intro": "长兴县顾渚山上的唐代贡茶遗址复原景区，是中国历史上第一座官方茶院。唐代陆羽在此撰写《茶经》，紫笋茶曾为大唐第一贡茶。茶园至今仍有古茶树存活。",
        "coord": [
          119.93,
          30.97
        ],
        "photoSpots": [
          {
            "name": "贡茶大殿",
            "pose": "唐代建筑风格的大殿全景"
          }
        ],
        "food": [
          {
            "name": "紫笋茶",
            "star": 5,
            "desc": "大唐第一贡茶，清香持久"
          }
        ],
        "duration": 2,
        "ticket": 60,
        "tip": "春季茶季可体验采茶制茶"
      },
      {
        "name": "云上草原",
        "rank": 8,
        "intro": "安吉海拔1168米的高山度假景区，有悬崖秋千、玻璃栈道、高山滑车等网红项目。夏天平均气温仅25度，冬天可滑雪赏雪景。四季景色各异，适合亲子出游。",
        "coord": [
          119.55,
          30.65
        ],
        "photoSpots": [
          {
            "name": "悬崖秋千",
            "pose": "悬崖边的网红秋千拍摄"
          }
        ],
        "food": [
          {
            "name": "高山烤玉米",
            "star": 3,
            "desc": "高海拔玉米更甜糯"
          }
        ],
        "duration": 5,
        "ticket": 218,
        "tip": "含索道和大部分游乐项目，建议玩一整天"
      },
      {
        "name": "嘉业藏书楼",
        "rank": 9,
        "intro": "南浔古镇内的近代藏书楼，藏书60万卷，与天一阁并称中国藏书双璧。嘉业堂的建筑中西合璧，花园面积远超藏书楼本身，园林之美同样令人赞叹。",
        "coord": [
          120.428,
          30.868
        ],
        "photoSpots": [
          {
            "name": "藏书楼正门",
            "pose": "中西合璧的牌楼式大门"
          }
        ],
        "food": [
          {
            "name": "浔蹄",
            "star": 4,
            "desc": "南浔特产酱猪蹄，甜香软糯"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "含在南浔古镇门票内，不可错过"
      },
      {
        "name": "余村",
        "rank": 10,
        "intro": "\"绿水青山就是金山银山\"理念的发源地。从矿山变身美丽乡村，竹林茶园环绕，乡村咖啡馆和书店林立。已成为中国乡村振兴的标杆和生态旅游的样板。",
        "coord": [
          119.64,
          30.6
        ],
        "photoSpots": [
          {
            "name": "两山石碑",
            "pose": "标志性石碑前留影"
          }
        ],
        "food": [
          {
            "name": "余村农家菜",
            "star": 4,
            "desc": "有机蔬菜和土鸡汤"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "可与安吉竹海连游，相距仅10公里"
      }
    ],
    "hidden": [
      {
        "name": "荻港古镇",
        "rank": 11,
        "intro": "湖州南浔区境内保存完好的原生态古镇，几乎没有商业化开发。桑基鱼塘系统是全球重要农业文化遗产，古镇上的陈家菜是湖州传统宴席的代表。",
        "coord": [
          120.3,
          30.78
        ],
        "photoSpots": [
          {
            "name": "桑基鱼塘",
            "pose": "航拍桑田与鱼塘的棋盘格局"
          },
          {
            "name": "古桥群",
            "pose": "三座古桥同框的水乡画面"
          }
        ],
        "food": [
          {
            "name": "陈家菜",
            "star": 5,
            "desc": "传统湖州宴席菜，需预订"
          },
          {
            "name": "荻港鱼汤饭",
            "star": 4,
            "desc": "鱼汤配米饭，鲜美无比"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "游客极少，适合喜欢原生态古镇的旅行者",
        "trend": "+140% 近3月热度"
      },
      {
        "name": "劳岭古道",
        "rank": 12,
        "intro": "莫干山脚下的徒步古道，全长约12公里，穿越竹林、茶园和古村落。难度适中，沿途有多处可以歇脚的农家和咖啡馆。是莫干山区域最受徒步爱好者欢迎的路线。",
        "coord": [
          119.85,
          30.62
        ],
        "photoSpots": [
          {
            "name": "竹林隧道",
            "pose": "茂密竹林形成的绿色隧道"
          }
        ],
        "food": [
          {
            "name": "路边农家咖啡",
            "star": 4,
            "desc": "山间小店的手冲咖啡"
          }
        ],
        "duration": 4,
        "ticket": 0,
        "tip": "全程约4小时，建议穿专业徒步鞋",
        "trend": "+90% 近3月热度"
      },
      {
        "name": "新市古镇",
        "rank": 13,
        "intro": "德清县境内的千年古镇，曾是京杭大运河上的重要码头。古镇保留着完整的明清商业街和古桥群，新市羊肉和茶糕是远近闻名的美食，游客很少。",
        "coord": [
          120.28,
          30.75
        ],
        "photoSpots": [
          {
            "name": "运河古码头",
            "pose": "古运河与两岸民居"
          }
        ],
        "food": [
          {
            "name": "新市羊肉",
            "star": 5,
            "desc": "红烧羊肉酥烂入味，湖州一绝"
          },
          {
            "name": "新市茶糕",
            "star": 4,
            "desc": "糯米皮包肉馅，蒸制而成"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "从湖州市区自驾约40分钟，公共交通不便",
        "trend": "+70% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "无民用机场，最近为杭州萧山国际机场（约100公里），高铁至杭州40分钟",
    "mainStation": "湖州站（高铁站），宁杭高铁、商合杭高铁交汇，40分钟达杭州",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 25,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 50,
      "fuelPer100km": 65,
      "parking": "市中心约8元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "裸心谷",
        "loc": "德清县·莫干山",
        "price": 3000,
        "star": 5,
        "perks": "顶级度假村，树顶别墅与夯土小屋，私密性极佳"
      },
      {
        "name": "太湖喜来登温泉度假酒店",
        "loc": "吴兴区·太湖",
        "price": 2000,
        "star": 5,
        "perks": "月亮形地标建筑，太湖景观与温泉"
      },
      {
        "name": "安吉悦榕庄",
        "loc": "安吉县·灵峰山",
        "price": 2800,
        "star": 5,
        "perks": "山水环抱，徽派建筑，顶级SPA"
      }
    ],
    "mid": [
      {
        "name": "莫干山开元森泊",
        "loc": "德清县·莫干山",
        "price": 800,
        "star": 4,
        "perks": "亲子度假首选，有水上乐园"
      },
      {
        "name": "湖州东吴开元名都酒店",
        "loc": "吴兴区·市中心",
        "price": 500,
        "star": 4,
        "perks": "市区地标酒店，交通便利"
      },
      {
        "name": "安吉银润锦江城堡酒店",
        "loc": "安吉县·县城",
        "price": 600,
        "star": 4,
        "perks": "城堡造型深受亲子喜爱"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（南浔古镇店）",
        "loc": "南浔区",
        "price": 300,
        "star": 3,
        "perks": "近古镇入口，干净舒适"
      },
      {
        "name": "亚朵酒店（湖州市中心店）",
        "loc": "吴兴区",
        "price": 330,
        "star": 3,
        "perks": "人文主题，免费阅读空间"
      },
      {
        "name": "汉庭酒店（火车站店）",
        "loc": "吴兴区",
        "price": 220,
        "star": 3,
        "perks": "近高铁站，适合赶早班车"
      }
    ]
  }
};

// 嘉兴
window.CITY_DATABASE['嘉兴'] = {
  "code": "jiaxing",
  "province": "浙江省",
  "coord": [
    120.7555,
    30.7522
  ],
  "bestSeason": "3-5月、9-11月，春日水乡花海烂漫，秋季古镇秋韵悠长",
  "routes": {
    "classic": {
      "name": "红船水乡经典游",
      "days": 3,
      "tagline": "从南湖红船到乌镇水巷，感受嘉兴的红色记忆与江南柔情",
      "spots": [
        "南湖",
        "乌镇",
        "西塘",
        "月河历史街区"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "红船启航",
          "list": [
            "南湖",
            "南湖革命纪念馆",
            "月河历史街区"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "乌镇风华",
          "list": [
            "乌镇·东栅",
            "乌镇·西栅夜游"
          ],
          "hours": 15
        },
        {
          "day": 3,
          "theme": "西塘烟火",
          "list": [
            "西塘古镇",
            "烟雨长廊"
          ],
          "hours": 10
        }
      ]
    },
    "niche": {
      "name": "古镇深度慢游",
      "days": 4,
      "tagline": "避开人潮，在盐官、新市等小众古镇寻找真正的江南",
      "spots": [
        "盐官古城",
        "新塍古镇",
        "梅花洲",
        "南北湖"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "观潮胜地",
          "list": [
            "盐官古城",
            "观潮胜地公园"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "梅洲寻幽",
          "list": [
            "梅花洲",
            "凤桥古镇"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "山海之间",
          "list": [
            "南北湖",
            "鹰窠顶"
          ],
          "hours": 10
        },
        {
          "day": 4,
          "theme": "古镇原味",
          "list": [
            "新塍古镇",
            "濮院古镇"
          ],
          "hours": 8
        }
      ]
    },
    "culture": {
      "name": "运河文化寻踪游",
      "days": 3,
      "tagline": "沿京杭大运河嘉兴段，探寻水乡商贸文明的千年记忆",
      "spots": [
        "南湖",
        "月河历史街区",
        "梅湾街",
        "王江泾运河古镇"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "红色记忆",
          "list": [
            "南湖",
            "湖心岛",
            "南湖革命纪念馆"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "运河商埠",
          "list": [
            "月河历史街区",
            "梅湾街",
            "芦席汇"
          ],
          "hours": 12
        },
        {
          "day": 3,
          "theme": "古镇遗韵",
          "list": [
            "王江泾运河古镇",
            "乌镇·东栅"
          ],
          "hours": 9
        }
      ]
    },
    "nature": {
      "name": "南北湖山海秘境游",
      "days": 3,
      "tagline": "在浙江唯一融山海湖于一体的景区，享受宁静自然",
      "spots": [
        "南北湖",
        "九龙山国家森林公园",
        "杭州湾跨海大桥",
        "尖山新区"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "湖山揽胜",
          "list": [
            "南北湖",
            "白鹭洲",
            "鹰窠顶"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "森林海风",
          "list": [
            "九龙山国家森林公园",
            "外蒲山"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "大桥奇观",
          "list": [
            "杭州湾跨海大桥观景台",
            "海盐绮园"
          ],
          "hours": 8
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "南湖",
        "rank": 1,
        "intro": "浙江三大名湖之一，因中共一大在此闭幕的红船而闻名全国。湖心岛上有烟雨楼、来许亭等古迹，湖岸垂柳依依。南湖菱是全国唯一的无角菱品种，清甜可口。",
        "coord": [
          120.76,
          30.74
        ],
        "photoSpots": [
          {
            "name": "红船",
            "pose": "湖心岛码头拍摄红船与烟雨楼"
          },
          {
            "name": "烟雨楼",
            "pose": "经典楼阁与碧水构图"
          }
        ],
        "food": [
          {
            "name": "南湖菱",
            "star": 5,
            "desc": "无角菱，清甜多汁，秋季时令"
          },
          {
            "name": "船菜",
            "star": 4,
            "desc": "传统南湖船上宴席"
          }
        ],
        "duration": 3,
        "ticket": 60,
        "tip": "含渡船和湖心岛门票，革命纪念馆免费但需预约"
      },
      {
        "name": "乌镇",
        "rank": 2,
        "intro": "中国最著名的古镇之一，分东栅和西栅两个景区。东栅保留原生态水乡风貌，西栅经统一规划后夜景绝美。世界互联网大会永久会址所在地，传统与现代在此碰撞。",
        "coord": [
          120.49,
          30.75
        ],
        "photoSpots": [
          {
            "name": "西栅夜景",
            "pose": "桥头拍摄两岸灯火倒映水中"
          },
          {
            "name": "东栅水巷",
            "pose": "清晨薄雾中的水乡小巷"
          }
        ],
        "food": [
          {
            "name": "红烧羊肉",
            "star": 5,
            "desc": "乌镇招牌菜，酥烂甜香"
          },
          {
            "name": "定胜糕",
            "star": 4,
            "desc": "传统米糕，松软甜蜜"
          }
        ],
        "duration": 8,
        "ticket": 190,
        "tip": "联票含东西栅，建议下午游东栅傍晚入西栅看夜景"
      },
      {
        "name": "西塘",
        "rank": 3,
        "intro": "以\"桥多、弄多、廊棚多\"闻名的江南古镇，近千米长的烟雨长廊是西塘的灵魂。夜幕降临后酒吧街热闹非凡，白天则可在石皮弄等窄巷间穿行，感受古镇肌理。",
        "coord": [
          120.88,
          30.95
        ],
        "photoSpots": [
          {
            "name": "烟雨长廊",
            "pose": "长廊延伸的纵深透视"
          },
          {
            "name": "送子来凤桥",
            "pose": "桥上拍摄两岸水乡全景"
          }
        ],
        "food": [
          {
            "name": "西塘管老太臭豆腐",
            "star": 5,
            "desc": "百年老摊，外酥内滑"
          },
          {
            "name": "荷叶粉蒸肉",
            "star": 4,
            "desc": "荷叶清香渗入肉中"
          }
        ],
        "duration": 5,
        "ticket": 95,
        "tip": "工作日下午到晚上体验最佳，周末人流较大"
      },
      {
        "name": "盐官古城",
        "rank": 4,
        "intro": "海宁千年古城，以钱塘江大潮闻名天下。每年农历八月十八前后，一线潮横贯江面，潮声如雷。古城内海神庙、王国维故居等人文景点丰富，观潮文化独一无二。",
        "coord": [
          120.55,
          30.47
        ],
        "photoSpots": [
          {
            "name": "观潮台",
            "pose": "大潮来临时的壮观一线潮"
          },
          {
            "name": "海神庙",
            "pose": "清代皇家规格的海神庙建筑"
          }
        ],
        "food": [
          {
            "name": "海宁缸肉",
            "star": 5,
            "desc": "大缸焖煮的五花肉，入口即化"
          },
          {
            "name": "长安宴球",
            "star": 4,
            "desc": "鱼肉丸子，海宁传统名菜"
          }
        ],
        "duration": 4,
        "ticket": 65,
        "tip": "观潮最佳时间为农历八月十八前后，需提前订住宿"
      },
      {
        "name": "月河历史街区",
        "rank": 5,
        "intro": "嘉兴市区保存最完整的历史街区，因河道弯曲如月而得名。花鸟市场、古董店铺、传统手工艺作坊林立，粽子文化博物馆坐落于此，是感受嘉兴市民生活的窗口。",
        "coord": [
          120.758,
          30.756
        ],
        "photoSpots": [
          {
            "name": "月河夜景",
            "pose": "红灯笼与河水倒影"
          }
        ],
        "food": [
          {
            "name": "五芳斋粽子",
            "star": 5,
            "desc": "嘉兴粽子代表，蛋黄鲜肉粽最经典"
          },
          {
            "name": "陆稿荐酱鸭",
            "star": 4,
            "desc": "百年老字号，酱香浓郁"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "粽子博物馆免费参观，可现场体验包粽子"
      }
    ],
    "secondary": [
      {
        "name": "梅花洲",
        "rank": 6,
        "intro": "嘉兴凤桥镇的生态景区，因形似五瓣梅花而得名。千年古刹石佛寺坐落于此，百年银杏和千年古藤令人惊叹。春天梅花盛开时节最为美丽，是摄影爱好者的好去处。",
        "coord": [
          120.85,
          30.68
        ],
        "photoSpots": [
          {
            "name": "石佛寺银杏",
            "pose": "千年古银杏金黄满树"
          }
        ],
        "food": [
          {
            "name": "凤桥水蜜桃",
            "star": 5,
            "desc": "当地特产，夏季时令水果"
          }
        ],
        "duration": 2.5,
        "ticket": 50,
        "tip": "春天3月和秋天11月景色最佳"
      },
      {
        "name": "南北湖",
        "rank": 7,
        "intro": "浙江唯一融山、海、湖于一体的风景区。南湖和北湖被长堤分隔，三面环山一面临海。白鹭洲上白鹭成群，鹰窠顶可观日月并升奇观，自然风光与海鲜美食兼具。",
        "coord": [
          120.89,
          30.43
        ],
        "photoSpots": [
          {
            "name": "白鹭洲",
            "pose": "白鹭群飞的壮观画面"
          },
          {
            "name": "湖海交汇",
            "pose": "长堤上拍摄湖海两色水"
          }
        ],
        "food": [
          {
            "name": "南北湖蟹",
            "star": 5,
            "desc": "湖蟹鲜美，秋季膏满黄肥"
          }
        ],
        "duration": 4,
        "ticket": 50,
        "tip": "十月可品尝当地湖蟹，鲜美程度不输阳澄湖"
      },
      {
        "name": "南湖革命纪念馆",
        "rank": 8,
        "intro": "纪念中国共产党诞生的专题纪念馆，位于南湖南岸。馆藏丰富，生动再现了一大在南湖红船上开会的情景。建筑气势恢宏，与南湖风景融为一体。",
        "coord": [
          120.758,
          30.738
        ],
        "photoSpots": [
          {
            "name": "纪念馆广场",
            "pose": "恢弘建筑与南湖全景"
          }
        ],
        "food": [
          {
            "name": "南湖船菜",
            "star": 3,
            "desc": "传统南湖水上宴席菜"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "免费但需预约，周一闭馆"
      },
      {
        "name": "九龙山国家森林公园",
        "rank": 9,
        "intro": "杭州湾北岸的山林景区，森林覆盖率超过90%。山海相依，有外蒲山岛、陈山花海等景观。登高可远眺杭州湾跨海大桥，是周末登山徒步的好去处。",
        "coord": [
          121.05,
          30.58
        ],
        "photoSpots": [
          {
            "name": "山顶远眺",
            "pose": "俯瞰杭州湾与跨海大桥"
          }
        ],
        "food": [
          {
            "name": "海盐大头菜",
            "star": 3,
            "desc": "当地腌制特产，咸香可口"
          }
        ],
        "duration": 3,
        "ticket": 35,
        "tip": "与南北湖相距不远，可同日游览"
      },
      {
        "name": "绮园",
        "rank": 10,
        "intro": "海盐县内的江南名园，始建于清代。以树木山池为主，建筑为辅，被誉为\"浙中园林之冠\"。《红楼梦》87版电视剧曾在此取景，园中古木参天幽静雅致。",
        "coord": [
          120.94,
          30.53
        ],
        "photoSpots": [
          {
            "name": "潭影轩",
            "pose": "水榭倒映池中的典雅构图"
          }
        ],
        "food": [
          {
            "name": "海盐澉浦羊肉",
            "star": 4,
            "desc": "红烧羊肉，当地名菜"
          }
        ],
        "duration": 1.5,
        "ticket": 30,
        "tip": "园林爱好者必去，游客不多体验极佳"
      }
    ],
    "hidden": [
      {
        "name": "濮院古镇",
        "rank": 11,
        "intro": "2023年新开放的大型古镇景区，由乌镇原班团队打造。以宋韵文化为主题，福善寺、梅泾剧场等建筑恢弘精美。目前知名度尚低，游客不多，是享受清净古镇的好时机。",
        "coord": [
          120.71,
          30.78
        ],
        "photoSpots": [
          {
            "name": "福善寺",
            "pose": "宋式建筑大殿的恢弘构图"
          },
          {
            "name": "运河夜景",
            "pose": "古镇内河灯光秀"
          }
        ],
        "food": [
          {
            "name": "濮院毛衫市场小吃",
            "star": 3,
            "desc": "各类平价小吃摊"
          }
        ],
        "duration": 3,
        "ticket": 120,
        "tip": "开业不久游客较少，是最佳打卡时机",
        "trend": "+250% 近3月热度"
      },
      {
        "name": "新塍古镇",
        "rank": 12,
        "intro": "嘉兴西北部的千年古镇，曾是运河沿线重要商埠。古镇上保留着大量清代民居和古桥，月饼和猪油饼是远近闻名的特产。几乎无游客，是最原生态的嘉兴古镇。",
        "coord": [
          120.66,
          30.83
        ],
        "photoSpots": [
          {
            "name": "古镇老街",
            "pose": "青石板路上的清代民居"
          }
        ],
        "food": [
          {
            "name": "新塍月饼",
            "star": 5,
            "desc": "手工苏式月饼，酥皮层叠"
          },
          {
            "name": "猪油饼",
            "star": 4,
            "desc": "现烤猪油葱饼，香气四溢"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "中秋节前月饼最正宗，需排队购买",
        "trend": "+80% 近3月热度"
      },
      {
        "name": "梅湾街",
        "rank": 13,
        "intro": "嘉兴市中心的历史文化街区，是朱生豪翻译莎士比亚全集的故居所在地。民国风情的老建筑改造为文创空间，河畔咖啡馆适合发呆一下午，小众而文艺。",
        "coord": [
          120.756,
          30.753
        ],
        "photoSpots": [
          {
            "name": "朱生豪故居",
            "pose": "民国风建筑与文艺小院"
          }
        ],
        "food": [
          {
            "name": "梅湾街咖啡",
            "star": 4,
            "desc": "河畔独立咖啡馆，环境清幽"
          }
        ],
        "duration": 1,
        "ticket": 0,
        "tip": "与月河相距不远，可步行连游",
        "trend": "+65% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "无民用机场，位于沪杭之间，杭州萧山机场约90公里，上海虹桥机场约100公里",
    "mainStation": "嘉兴南站（高铁站），沪杭高铁30分钟达杭州、30分钟达上海",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 25,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 60,
      "fuelPer100km": 65,
      "parking": "市中心约10元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "乌镇阿丽拉",
        "loc": "桐乡市·乌镇",
        "price": 2500,
        "star": 5,
        "perks": "安缦系度假酒店，私密水乡庭院"
      },
      {
        "name": "乌镇行馆",
        "loc": "桐乡市·乌镇西栅",
        "price": 1800,
        "star": 5,
        "perks": "西栅内住宿，含景区门票，可体验闭园后的乌镇"
      },
      {
        "name": "嘉兴希尔顿酒店",
        "loc": "南湖区·南湖新区",
        "price": 1200,
        "star": 5,
        "perks": "南湖畔，湖景房视野开阔"
      }
    ],
    "mid": [
      {
        "name": "嘉兴阳光大酒店",
        "loc": "南湖区·市中心",
        "price": 550,
        "star": 4,
        "perks": "市中心位置，近月河街区"
      },
      {
        "name": "乌镇昭明书舍",
        "loc": "桐乡市·乌镇西栅",
        "price": 700,
        "star": 4,
        "perks": "西栅内住宿，书香主题"
      },
      {
        "name": "西塘良壤酒店",
        "loc": "嘉善县·西塘",
        "price": 800,
        "star": 4,
        "perks": "西塘高端民宿，设计感强"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（南湖景区店）",
        "loc": "南湖区",
        "price": 300,
        "star": 3,
        "perks": "近南湖，步行可达景区"
      },
      {
        "name": "亚朵酒店（火车站店）",
        "loc": "南湖区",
        "price": 330,
        "star": 3,
        "perks": "近火车站，出行便利"
      },
      {
        "name": "汉庭酒店（中山路店）",
        "loc": "南湖区",
        "price": 220,
        "star": 3,
        "perks": "市中心，近月河街区"
      }
    ]
  }
};

// 金华
window.CITY_DATABASE['金华'] = {
  "code": "jinhua",
  "province": "浙江省",
  "coord": [
    119.6474,
    29.0786
  ],
  "bestSeason": "3-5月、9-11月，春日双龙洞水量充沛，秋季横店节庆活动丰富",
  "routes": {
    "classic": {
      "name": "婺州经典畅游",
      "days": 3,
      "tagline": "从双龙奇洞到横店影城，感受金华的山水与传奇",
      "spots": [
        "双龙洞",
        "横店影视城",
        "诸葛八卦村",
        "古子城"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "溶洞奇观",
          "list": [
            "双龙洞",
            "冰壶洞",
            "朝真洞"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "影视梦幻",
          "list": [
            "横店影视城·秦王宫",
            "横店影视城·明清宫苑",
            "横店夜游"
          ],
          "hours": 13
        },
        {
          "day": 3,
          "theme": "古城古村",
          "list": [
            "诸葛八卦村",
            "古子城"
          ],
          "hours": 10
        }
      ]
    },
    "niche": {
      "name": "兰溪秘境慢游",
      "days": 3,
      "tagline": "在兰溪地下长河和诸葛八卦村中，发现金华的另一面",
      "spots": [
        "兰溪地下长河",
        "诸葛八卦村",
        "兰溪古城",
        "游埠古镇"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "地下奇观",
          "list": [
            "兰溪地下长河",
            "六洞山"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "八卦玄机",
          "list": [
            "诸葛八卦村",
            "兰溪古城"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "古镇原味",
          "list": [
            "游埠古镇",
            "长乐古村"
          ],
          "hours": 9
        }
      ]
    },
    "culture": {
      "name": "婺商文化探秘游",
      "days": 3,
      "tagline": "从义乌商贸城到古子城，解码金华商帮的千年传奇",
      "spots": [
        "古子城",
        "义乌国际商贸城",
        "佛堂古镇",
        "太平天国侍王府"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "婺州古城",
          "list": [
            "古子城",
            "太平天国侍王府",
            "八咏楼"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "世界超市",
          "list": [
            "义乌国际商贸城",
            "义乌异国风情街"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "商帮古镇",
          "list": [
            "佛堂古镇",
            "诸葛八卦村"
          ],
          "hours": 9
        }
      ]
    },
    "nature": {
      "name": "浙中山水秘境游",
      "days": 3,
      "tagline": "在双龙溶洞群和永康方岩间，探索浙中山水的鬼斧神工",
      "spots": [
        "双龙洞",
        "永康方岩",
        "牛头山",
        "磐安花溪"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "溶洞探秘",
          "list": [
            "双龙洞",
            "冰壶洞",
            "双龙溪漂流"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "丹霞奇观",
          "list": [
            "永康方岩",
            "五峰书院"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "溪谷幽境",
          "list": [
            "磐安花溪",
            "十八涡"
          ],
          "hours": 9
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "双龙洞",
        "rank": 1,
        "intro": "国家级风景名胜区，以溶洞群闻名。双龙洞需仰卧船上入洞，仅容一人通过，体验独特。洞内钟乳石千姿百态，冰壶洞内有35米高的地下瀑布，气势惊人。",
        "coord": [
          119.65,
          29.16
        ],
        "photoSpots": [
          {
            "name": "卧船入洞",
            "pose": "仰面乘船穿越岩壁的独特体验"
          },
          {
            "name": "冰壶洞瀑布",
            "pose": "35米地下瀑布仰拍"
          }
        ],
        "food": [
          {
            "name": "金华酥饼",
            "star": 5,
            "desc": "现烤酥饼，梅干菜肉馅最经典"
          }
        ],
        "duration": 3,
        "ticket": 90,
        "tip": "入洞需躺船上仅30厘米空间，恐高者慎入"
      },
      {
        "name": "诸葛八卦村",
        "rank": 2,
        "intro": "全国最大的诸葛亮后裔聚居地，村庄按八卦阵布局建造。钟池位于村中心呈阴阳鱼状，巷弄纵横交错如迷宫。明清古建筑保存完好，被誉为\"中国第一奇村\"。",
        "coord": [
          119.49,
          29.26
        ],
        "photoSpots": [
          {
            "name": "航拍八卦村",
            "pose": "高处或航拍钟池八卦图案"
          },
          {
            "name": "大公堂",
            "pose": "诸葛亮纪念堂的恢弘建筑"
          }
        ],
        "food": [
          {
            "name": "诸葛八卦宴",
            "star": 4,
            "desc": "按八卦排列的传统宴席"
          }
        ],
        "duration": 3,
        "ticket": 100,
        "tip": "建议在村中走迷宫般的巷弄，体验八卦布局"
      },
      {
        "name": "横店影视城",
        "rank": 3,
        "intro": "中国最大的影视拍摄基地，被誉为\"中国好莱坞\"。秦王宫、明清宫苑、广州街等场景恢弘壮观，《甄嬛传》《英雄》等大量影视剧在此拍摄。演出精彩，沉浸感强。",
        "coord": [
          120.32,
          29.27
        ],
        "photoSpots": [
          {
            "name": "秦王宫",
            "pose": "穿古装在宫殿前留影"
          },
          {
            "name": "梦幻谷夜场",
            "pose": "夜间灯光秀和火山爆发表演"
          }
        ],
        "food": [
          {
            "name": "横店明星餐厅",
            "star": 3,
            "desc": "偶遇明星的网红餐厅"
          },
          {
            "name": "万盛南街小吃",
            "star": 4,
            "desc": "横店最热闹的美食街"
          }
        ],
        "duration": 12,
        "ticket": 480,
        "tip": "建议买2日联票，一天看不完所有景区和演出"
      },
      {
        "name": "古子城",
        "rank": 4,
        "intro": "金华城区内的历史街区，始建于唐代，是婺州古城的核心。太平天国侍王府、八咏楼（李清照曾居此）、酒坊巷等古迹保存完好。如今改造为文创街区，古韵与现代交融。",
        "coord": [
          119.65,
          29.09
        ],
        "photoSpots": [
          {
            "name": "八咏楼",
            "pose": "李清照题诗的历史名楼"
          },
          {
            "name": "侍王府壁画",
            "pose": "太平天国时期的珍贵壁画"
          }
        ],
        "food": [
          {
            "name": "金华火腿切片",
            "star": 5,
            "desc": "古子城内的火腿专卖店可品尝"
          },
          {
            "name": "金华煲",
            "star": 4,
            "desc": "当地砂锅菜，火腿笋干煲最鲜"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "免费开放，太平天国侍王府需单独购票约20元"
      },
      {
        "name": "义乌国际商贸城",
        "rank": 5,
        "intro": "全球最大的小商品批发市场，经营面积640万平方米，相当于890个足球场。来自世界各地的商品琳琅满目，即使不买东西，逛逛这个世界级商业奇观也令人叹为观止。",
        "coord": [
          120.07,
          29.32
        ],
        "photoSpots": [
          {
            "name": "商贸城全景",
            "pose": "一区大门处拍摄恢弘全景"
          }
        ],
        "food": [
          {
            "name": "异国风情街美食",
            "star": 4,
            "desc": "中东、韩国、非洲各国料理"
          }
        ],
        "duration": 3,
        "ticket": 0,
        "tip": "周一到周五营业，建议去二区和四区最有特色"
      }
    ],
    "secondary": [
      {
        "name": "兰溪地下长河",
        "rank": 6,
        "intro": "兰溪市六洞山景区内的地下暗河景观，全长约1000米，乘船穿行于溶洞暗河中。洞内石钟乳形态各异，洞外六洞山风景秀丽，是浙中独特的喀斯特地貌景观。",
        "coord": [
          119.46,
          29.21
        ],
        "photoSpots": [
          {
            "name": "暗河泛舟",
            "pose": "船上拍摄溶洞暗河光影"
          }
        ],
        "food": [
          {
            "name": "兰溪鸡子粿",
            "star": 5,
            "desc": "葱蛋面皮包裹鲜肉馅，煎至金黄"
          },
          {
            "name": "兰溪牛肉面",
            "star": 4,
            "desc": "手擀面配红烧牛肉"
          }
        ],
        "duration": 2,
        "ticket": 65,
        "tip": "洞内温度约18度，夏天入洞凉爽但建议带薄外套"
      },
      {
        "name": "永康方岩",
        "rank": 7,
        "intro": "浙中著名的丹霞地貌景区，方岩山如方桌般平顶矗立。山上胡公大帝庙香火鼎盛，五峰书院是南宋朱熹讲学之地。丹霞赤壁与古刹书院相映成趣，文武皆宜。",
        "coord": [
          120.05,
          28.92
        ],
        "photoSpots": [
          {
            "name": "方岩赤壁",
            "pose": "仰拍丹霞赤壁的壮观"
          }
        ],
        "food": [
          {
            "name": "永康肉麦饼",
            "star": 5,
            "desc": "现烤肉馅麦饼，外酥内嫩"
          }
        ],
        "duration": 3,
        "ticket": 55,
        "tip": "山路较陡建议穿运动鞋，山顶视野极佳"
      },
      {
        "name": "佛堂古镇",
        "rank": 8,
        "intro": "义乌南部的千年古镇，曾是浙中重要的水运商埠。古民居苑保存着精美的明清建筑，木雕砖雕工艺精湛。老街上的手工作坊仍在营业，保留着古镇的烟火气。",
        "coord": [
          120.03,
          29.23
        ],
        "photoSpots": [
          {
            "name": "万善浮桥",
            "pose": "浮桥与古镇码头的画面"
          }
        ],
        "food": [
          {
            "name": "佛堂千张面",
            "star": 4,
            "desc": "千张丝配面条，义乌特色"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "从义乌市区公交直达，适合半日游"
      },
      {
        "name": "太平天国侍王府",
        "rank": 9,
        "intro": "全国保存最完整的太平天国王府建筑，侍王李世贤的府邸。府内壁画色彩鲜艳保存完好，是研究太平天国历史的珍贵实物资料。位于古子城内，可一并游览。",
        "coord": [
          119.652,
          29.092
        ],
        "photoSpots": [
          {
            "name": "侍王府壁画",
            "pose": "太平天国时期原作壁画"
          }
        ],
        "food": [
          {
            "name": "金华汤包",
            "star": 4,
            "desc": "皮薄汁多的当地汤包"
          }
        ],
        "duration": 1,
        "ticket": 20,
        "tip": "壁画不可使用闪光灯拍摄"
      },
      {
        "name": "游埠古镇",
        "rank": 10,
        "intro": "兰溪市境内有千年历史的古镇，以早茶文化闻名。清晨四五点古镇茶馆就热闹起来，一壶茶配上酱粿和酥饼，是最地道的浙中早茶体验。摄影爱好者趋之若鹜。",
        "coord": [
          119.41,
          29.18
        ],
        "photoSpots": [
          {
            "name": "早茶街",
            "pose": "清晨雾气中茶馆林立的烟火气"
          }
        ],
        "food": [
          {
            "name": "游埠早茶",
            "star": 5,
            "desc": "几块钱一壶茶配各种小食"
          },
          {
            "name": "游埠酱粿",
            "star": 4,
            "desc": "米制酱粿，配早茶绝配"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "清晨5-7点是最佳拍摄和体验时间"
      }
    ],
    "hidden": [
      {
        "name": "磐安十八涡",
        "rank": 11,
        "intro": "磐安县大盘山脉中的峡谷景区，溪水流经十八个深潭形成连环漩涡。原始森林覆盖率极高，负氧离子含量超高。夏天是避暑胜地，秋天红叶满山，游客较少。",
        "coord": [
          120.55,
          29.03
        ],
        "photoSpots": [
          {
            "name": "连环漩涡",
            "pose": "慢门拍摄溪水漩涡的丝滑效果"
          }
        ],
        "food": [
          {
            "name": "磐安野生猕猴桃",
            "star": 4,
            "desc": "秋季山间野果，酸甜可口"
          }
        ],
        "duration": 3,
        "ticket": 65,
        "tip": "从金华市区自驾约2小时，公共交通不便",
        "trend": "+110% 近3月热度"
      },
      {
        "name": "芝英古镇",
        "rank": 12,
        "intro": "永康市境内的千年古镇，有\"永康小丽江\"之称。古镇依山而建，层层叠叠的明清民居错落有致。古祠堂群规模宏大，木雕工艺精美，几乎没有商业开发。",
        "coord": [
          120.01,
          28.87
        ],
        "photoSpots": [
          {
            "name": "古祠堂群",
            "pose": "精美的木雕梁架和天井"
          }
        ],
        "food": [
          {
            "name": "芝英馄饨",
            "star": 4,
            "desc": "皮薄如纸的传统馄饨"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "游客极少，是体验原生态古镇的好去处",
        "trend": "+75% 近3月热度"
      },
      {
        "name": "牛头山国家森林公园",
        "rank": 13,
        "intro": "武义县境内的高山森林公园，海拔1560米，有\"金华八婺第一峰\"之称。夏天平均气温仅22度，是避暑胜地。云海日出、高山草甸、原始森林，自然风光绝佳。",
        "coord": [
          119.88,
          28.7
        ],
        "photoSpots": [
          {
            "name": "日出云海",
            "pose": "山顶观景台拍摄云海日出"
          }
        ],
        "food": [
          {
            "name": "高山蔬菜",
            "star": 4,
            "desc": "海拔千米以上的有机蔬菜"
          }
        ],
        "duration": 5,
        "ticket": 70,
        "tip": "山顶有露营基地，适合观星和看日出",
        "trend": "+95% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "义乌机场（YIW），距金华市区约50公里，主要航线覆盖北京、广州等城市",
    "mainStation": "金华站（高铁站），沪昆高铁、金温铁路交汇，2小时达上海",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 25,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 50,
      "fuelPer100km": 65,
      "parking": "市中心约8元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "金华万达嘉华酒店",
        "loc": "金东区·万达广场",
        "price": 900,
        "star": 5,
        "perks": "商圈配套完善，江景房视野好"
      },
      {
        "name": "横店影视城贵宾楼",
        "loc": "东阳市·横店",
        "price": 1000,
        "star": 5,
        "perks": "影视城内，含景区门票和专属通道"
      },
      {
        "name": "金华富力万达嘉华",
        "loc": "婺城区·婺江畔",
        "price": 850,
        "star": 5,
        "perks": "婺江景观，早餐品种丰富"
      }
    ],
    "mid": [
      {
        "name": "金华国贸景澜大饭店",
        "loc": "婺城区·市中心",
        "price": 450,
        "star": 4,
        "perks": "老牌酒店，位置好，中菜地道"
      },
      {
        "name": "义乌香格里拉大酒店",
        "loc": "义乌市·金融商务区",
        "price": 700,
        "star": 4,
        "perks": "义乌最高端商务酒店"
      },
      {
        "name": "横店影视城百老汇大厦",
        "loc": "东阳市·横店",
        "price": 500,
        "star": 4,
        "perks": "影视主题酒店，含快速入园通道"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（古子城店）",
        "loc": "婺城区",
        "price": 280,
        "star": 3,
        "perks": "近古子城，步行可达八咏楼"
      },
      {
        "name": "亚朵酒店（义乌商贸城店）",
        "loc": "义乌市",
        "price": 320,
        "star": 3,
        "perks": "近国际商贸城，商务出行方便"
      },
      {
        "name": "汉庭酒店（横店店）",
        "loc": "东阳市",
        "price": 230,
        "star": 3,
        "perks": "近横店影视城，有免费接驳车"
      }
    ]
  }
};

// 衢州
window.CITY_DATABASE['衢州'] = {
  "code": "quzhou",
  "province": "浙江省",
  "coord": [
    118.871,
    28.9569
  ],
  "bestSeason": "4-6月、9-11月，春日江郎山杜鹃烂漫，秋季廿八都红叶如火",
  "routes": {
    "classic": {
      "name": "衢州经典全景游",
      "days": 3,
      "tagline": "从世界遗产江郎山到千年古城，感受浙西的雄奇与文脉",
      "spots": [
        "江郎山",
        "廿八都古镇",
        "衢州古城",
        "水亭门历史街区"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "世界遗产",
          "list": [
            "江郎山",
            "仙霞关"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "古镇遗韵",
          "list": [
            "廿八都古镇",
            "江郎山·峡里湖"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "古城文脉",
          "list": [
            "衢州古城",
            "水亭门历史街区",
            "衢州博物馆"
          ],
          "hours": 10
        }
      ]
    },
    "niche": {
      "name": "浙西秘境深度游",
      "days": 3,
      "tagline": "在龙游石窟和开化根宫佛国中，发现衢州的神秘与禅意",
      "spots": [
        "龙游石窟",
        "开化根宫佛国",
        "龙游民居苑",
        "钱江源"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "千古之谜",
          "list": [
            "龙游石窟",
            "龙游民居苑"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "根雕佛国",
          "list": [
            "开化根宫佛国",
            "花牵谷"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "钱江源头",
          "list": [
            "钱江源国家森林公园",
            "古田山"
          ],
          "hours": 10
        }
      ]
    },
    "culture": {
      "name": "南孔圣地文化游",
      "days": 3,
      "tagline": "追寻南孔文化足迹，品味衢州八百年儒学传承",
      "spots": [
        "衢州古城",
        "孔氏南宗家庙",
        "水亭门历史街区",
        "烂柯山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "南孔儒学",
          "list": [
            "孔氏南宗家庙",
            "衢州博物馆",
            "衢州府城墙"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "古城烟火",
          "list": [
            "水亭门历史街区",
            "北门街",
            "天皇塔"
          ],
          "hours": 12
        },
        {
          "day": 3,
          "theme": "围棋仙源",
          "list": [
            "烂柯山",
            "石室堰"
          ],
          "hours": 10
        }
      ]
    },
    "nature": {
      "name": "钱江源生态探秘游",
      "days": 3,
      "tagline": "深入钱塘江源头，在原始森林中邂逅浙西最纯净的山水",
      "spots": [
        "钱江源",
        "古田山",
        "江郎山",
        "峡里湖"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "源头探秘",
          "list": [
            "钱江源国家森林公园",
            "莲花塘"
          ],
          "hours": 10
        },
        {
          "day": 2,
          "theme": "原始森林",
          "list": [
            "古田山国家级自然保护区"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "丹霞碧水",
          "list": [
            "江郎山",
            "峡里湖"
          ],
          "hours": 10
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "江郎山",
        "rank": 1,
        "intro": "浙江省首个世界自然遗产地，三爿巨石拔地而起，被誉为\"神州丹霞第一峰\"。三片巨峰呈\"川\"字形排列，气势磅礴。霞客古道登顶可俯瞰群山，壮观程度不输张家界。",
        "coord": [
          118.57,
          28.74
        ],
        "photoSpots": [
          {
            "name": "三爿石全景",
            "pose": "远处拍摄三峰并立的壮观全景"
          },
          {
            "name": "一线天",
            "pose": "两峰之间仅3.5米的夹缝仰拍天空"
          }
        ],
        "food": [
          {
            "name": "江山米糕",
            "star": 4,
            "desc": "当地传统糕点，软糯甜香"
          }
        ],
        "duration": 4,
        "ticket": 100,
        "tip": "登山约2-3小时，一线天最窄处仅容一人侧身通过"
      },
      {
        "name": "廿八都古镇",
        "rank": 2,
        "intro": "位于浙闽赣三省交界处的千年古镇，因地处仙霞古道要冲而兴起。142种姓氏、13种方言共存，被誉为\"文化飞地\"。古建筑群保存完好，木雕砖雕精美绝伦。",
        "coord": [
          118.43,
          28.56
        ],
        "photoSpots": [
          {
            "name": "文昌阁",
            "pose": "清代文昌宫建筑群的精美木雕"
          },
          {
            "name": "浔里老街",
            "pose": "老街纵深透视与古建屋檐"
          }
        ],
        "food": [
          {
            "name": "廿八都铜锣糕",
            "star": 5,
            "desc": "古镇特产米糕，甜糯有嚼劲"
          },
          {
            "name": "廿八都豆腐",
            "star": 4,
            "desc": "风炉仔炖豆腐，鲜嫩入味"
          }
        ],
        "duration": 3,
        "ticket": 75,
        "tip": "可与江郎山、仙霞关联票游览更划算"
      },
      {
        "name": "龙游石窟",
        "rank": 3,
        "intro": "被称为\"世界第九大奇迹\"的地下石窟群，5个巨大的人工洞穴至今成因不明。石窟内空间宏大，鱼、马、鸟等雕刻图案神秘莫测。工程之浩大、工艺之精巧令人惊叹。",
        "coord": [
          119.18,
          29.03
        ],
        "photoSpots": [
          {
            "name": "石窟大厅",
            "pose": "广角拍摄巨大地下空间"
          },
          {
            "name": "石窟光影",
            "pose": "灯光照射岩壁的明暗效果"
          }
        ],
        "food": [
          {
            "name": "龙游发糕",
            "star": 5,
            "desc": "当地名产，松软甜香"
          },
          {
            "name": "龙游小辣椒",
            "star": 4,
            "desc": "辣而不燥的当地特色酱料"
          }
        ],
        "duration": 2,
        "ticket": 65,
        "tip": "石窟内常年约18度，夏天入内凉爽"
      },
      {
        "name": "衢州古城",
        "rank": 4,
        "intro": "有\"四省通衢\"之称的衢州老城核心区，古城墙、城隍庙、钟楼等遗迹尚存。城内街巷格局保存完好，水亭门历史文化街区是衢州最有味道的老街区。",
        "coord": [
          118.87,
          28.96
        ],
        "photoSpots": [
          {
            "name": "古城墙",
            "pose": "城墙与护城河的经典构图"
          }
        ],
        "food": [
          {
            "name": "衢州三头一掌",
            "star": 5,
            "desc": "兔头、鸭头、鱼头、鸭掌，衢州名小吃"
          },
          {
            "name": "衢州烤饼",
            "star": 4,
            "desc": "梅干菜肉馅烤饼，酥脆喷香"
          }
        ],
        "duration": 2.5,
        "ticket": 0,
        "tip": "与水亭门历史街区相连，可一并游览"
      },
      {
        "name": "孔氏南宗家庙",
        "rank": 5,
        "intro": "全国仅有的两座孔庙之一（另一座为曲阜孔庙），是孔子后裔南迁后所建。南宋时期衢州成为南方儒学中心，至今保留着完整的祭孔仪式。规模虽不及曲阜，但意义深远。",
        "coord": [
          118.875,
          28.965
        ],
        "photoSpots": [
          {
            "name": "大成殿",
            "pose": "殿前广场拍摄庄严建筑"
          }
        ],
        "food": [
          {
            "name": "孔府素斋",
            "star": 4,
            "desc": "庙旁素菜馆，精致清雅"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "免费开放，祭孔大典在每年9月28日举行"
      }
    ],
    "secondary": [
      {
        "name": "水亭门历史街区",
        "rank": 6,
        "intro": "衢州最具代表性的历史街区，以水亭门古城门为核心。街区内保存着大量明清建筑，天王塔遗址、古井、老宅散布其间。如今改造为文创休闲街区，夜市热闹非凡。",
        "coord": [
          118.865,
          28.958
        ],
        "photoSpots": [
          {
            "name": "水亭门城门",
            "pose": "古城门洞中取景拍摄街巷"
          },
          {
            "name": "天王塔",
            "pose": "复原的唐代宝塔夜景"
          }
        ],
        "food": [
          {
            "name": "衢州鸭头",
            "star": 5,
            "desc": "卤制鸭头，麻辣鲜香"
          },
          {
            "name": "衢州麻饼",
            "star": 4,
            "desc": "芝麻烤饼，外脆内软"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "夜晚灯光亮起后氛围最佳，适合逛吃"
      },
      {
        "name": "仙霞关",
        "rank": 7,
        "intro": "中国四大古关口之一，始建于唐代，是古代中原入闽的咽喉要道。四道关门依山而建，古道石阶保存完好。站在关口可远眺群山，感受一夫当关万夫莫开的雄险气势。",
        "coord": [
          118.45,
          28.58
        ],
        "photoSpots": [
          {
            "name": "第一关",
            "pose": "关门前拍摄古道纵深"
          }
        ],
        "food": [
          {
            "name": "江山土蜂蜜",
            "star": 3,
            "desc": "山民自酿土蜂蜜"
          }
        ],
        "duration": 2,
        "ticket": 55,
        "tip": "与廿八都相距仅10公里，可连游"
      },
      {
        "name": "开化根宫佛国",
        "rank": 8,
        "intro": "开化县内的大型根雕艺术景区，由根雕大师徐谷青历时数十年打造。数千件巨型根雕佛像气势恢宏，最大根雕重达数十吨。将枯木化为艺术，堪称中国根雕艺术殿堂。",
        "coord": [
          118.42,
          29.14
        ],
        "photoSpots": [
          {
            "name": "巨型根雕",
            "pose": "与巨型根雕佛像合影体现比例"
          }
        ],
        "food": [
          {
            "name": "开化青蛳",
            "star": 5,
            "desc": "清水养殖的青色螺蛳，鲜美无比"
          }
        ],
        "duration": 2.5,
        "ticket": 100,
        "tip": "根雕工艺令人震撼，建议请讲解员了解更多"
      },
      {
        "name": "烂柯山",
        "rank": 9,
        "intro": "围棋文化的发源地，传说晋代樵夫王质在此观仙人下棋，棋局未终斧柄已烂。天生石梁形成的巨型石桥是烂柯山标志，被誉为\"围棋仙地\"。山上石室幽深清凉。",
        "coord": [
          118.93,
          28.92
        ],
        "photoSpots": [
          {
            "name": "天生石梁",
            "pose": "巨型天然石桥仰拍"
          }
        ],
        "food": [
          {
            "name": "石室茶",
            "star": 3,
            "desc": "山上茶室，品茶赏景"
          }
        ],
        "duration": 2,
        "ticket": 50,
        "tip": "围棋爱好者可参观围棋文化展览馆"
      },
      {
        "name": "衢州博物馆",
        "rank": 10,
        "intro": "展示衢州八千年历史文化的综合性博物馆，馆藏丰富。重点展品有衢州白瓷、婺州窑精品和衢州恐龙化石。新馆建筑现代大气，展陈手段先进，互动体验丰富。",
        "coord": [
          118.872,
          28.955
        ],
        "photoSpots": [
          {
            "name": "馆藏白瓷",
            "pose": "精美衢州白瓷展品"
          }
        ],
        "food": [
          {
            "name": "衢州粽子",
            "star": 3,
            "desc": "当地碱水粽，口感独特"
          }
        ],
        "duration": 1.5,
        "ticket": 0,
        "tip": "周一闭馆，与孔庙相距仅500米"
      }
    ],
    "hidden": [
      {
        "name": "钱江源国家森林公园",
        "rank": 11,
        "intro": "钱塘江正源头，位于开化县齐溪镇。原始森林保存完好，有\"浙西林海\"之称。负氧离子含量极高，溪水清澈见底。远离城市喧嚣，是真正的世外桃源。",
        "coord": [
          118.23,
          29.35
        ],
        "photoSpots": [
          {
            "name": "钱江源头碑",
            "pose": "源头石碑与清澈溪水"
          },
          {
            "name": "莲花塘瀑布",
            "pose": "多级瀑布群的全景"
          }
        ],
        "food": [
          {
            "name": "开化清水鱼",
            "star": 5,
            "desc": "山泉水养殖的草鱼，肉质紧实鲜美"
          }
        ],
        "duration": 5,
        "ticket": 60,
        "tip": "从衢州市区自驾约2小时，适合2天1夜的深度游",
        "trend": "+120% 近3月热度"
      },
      {
        "name": "古田山国家级自然保护区",
        "rank": 12,
        "intro": "开化县境内的原始森林保护区，保存着大面积的亚热带常绿阔叶林。黑熊、猕猴等珍稀动物出没其间，植物种类繁多。是科研与自然爱好者的天堂，游客极少。",
        "coord": [
          118.18,
          29.28
        ],
        "photoSpots": [
          {
            "name": "原始森林",
            "pose": "阳光穿透林冠的光束效果"
          }
        ],
        "food": [
          {
            "name": "山野菜",
            "star": 4,
            "desc": "山民采集的各类野菜"
          }
        ],
        "duration": 5,
        "ticket": 0,
        "tip": "需提前向保护区管理处申请入园许可",
        "trend": "+85% 近3月热度"
      },
      {
        "name": "龙游民居苑",
        "rank": 13,
        "intro": "集中展示浙西明清古建筑的露天博物馆，将散落于乡间的古宅迁建集中保护。木雕、砖雕、石雕三雕艺术精美绝伦。游客不多，可以慢慢欣赏每一处雕刻细节。",
        "coord": [
          119.17,
          29.02
        ],
        "photoSpots": [
          {
            "name": "砖雕门楼",
            "pose": "精美砖雕门楼的细节拍摄"
          }
        ],
        "food": [
          {
            "name": "龙游馒头",
            "star": 4,
            "desc": "传统老面馒头，松软有嚼劲"
          }
        ],
        "duration": 1.5,
        "ticket": 40,
        "tip": "与龙游石窟相距仅3公里，可联游",
        "trend": "+55% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "衢州机场（JUZ），航线有限，主要飞往北京、深圳等城市",
    "mainStation": "衢州站（高铁站），沪昆高铁经停，约2小时达杭州",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 20,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 45,
      "fuelPer100km": 65,
      "parking": "市中心约8元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "衢州饭店",
        "loc": "柯城区·市中心",
        "price": 800,
        "star": 5,
        "perks": "衢州最高规格酒店，历史悠久"
      },
      {
        "name": "衢州悦榕庄酒店",
        "loc": "柯城区·西区",
        "price": 1000,
        "star": 5,
        "perks": "新区高端酒店，设施全新"
      },
      {
        "name": "江山国际大酒店",
        "loc": "江山市·市中心",
        "price": 600,
        "star": 4,
        "perks": "游览江郎山和廿八都的便利基地"
      }
    ],
    "mid": [
      {
        "name": "衢州国际大酒店",
        "loc": "柯城区·市中心",
        "price": 400,
        "star": 4,
        "perks": "老牌酒店，位置好，早餐丰富"
      },
      {
        "name": "衢州东方大酒店",
        "loc": "柯城区·火车站旁",
        "price": 350,
        "star": 4,
        "perks": "近火车站，出行极便利"
      },
      {
        "name": "龙游雷迪森酒店",
        "loc": "龙游县·县城",
        "price": 400,
        "star": 4,
        "perks": "龙游最高端酒店，近龙游石窟"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（水亭门店）",
        "loc": "柯城区",
        "price": 260,
        "star": 3,
        "perks": "近水亭门历史街区，逛吃方便"
      },
      {
        "name": "亚朵酒店（衢州火车站店）",
        "loc": "柯城区",
        "price": 300,
        "star": 3,
        "perks": "近火车站，服务贴心"
      },
      {
        "name": "汉庭酒店（市中心店）",
        "loc": "柯城区",
        "price": 180,
        "star": 3,
        "perks": "价格实惠，干净整洁"
      }
    ]
  }
};

// 台州
window.CITY_DATABASE['台州'] = {
  "code": "taizhou2",
  "province": "浙江省",
  "coord": [
    121.4207,
    28.6561
  ],
  "bestSeason": "4-6月、9-11月，夏日天台山避暑，秋日神仙居云海壮丽",
  "routes": {
    "classic": {
      "name": "山海台州经典游",
      "days": 4,
      "tagline": "从天台佛国到神仙仙境，走遍台州最壮美的山与海",
      "spots": [
        "天台山",
        "神仙居",
        "临海古城",
        "括苍山"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "佛宗仙源",
          "list": [
            "天台山·国清寺",
            "天台山·石梁飞瀑"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "仙境漫步",
          "list": [
            "神仙居",
            "公盂景区"
          ],
          "hours": 11
        },
        {
          "day": 3,
          "theme": "古城寻味",
          "list": [
            "临海古城",
            "紫阳古街",
            "台州府城墙"
          ],
          "hours": 12
        },
        {
          "day": 4,
          "theme": "云端揽胜",
          "list": [
            "括苍山",
            "长屿硐天"
          ],
          "hours": 11
        }
      ]
    },
    "niche": {
      "name": "海岛渔村深度游",
      "days": 3,
      "tagline": "在大陈岛和皤滩古镇中，体验台州最纯粹的海与古韵",
      "spots": [
        "大陈岛",
        "皤滩古镇",
        "桃渚古城",
        "玉环漩门湾"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "东海明珠",
          "list": [
            "大陈岛·甲午岩",
            "大陈岛·垦荒纪念区"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "古镇遗风",
          "list": [
            "皤滩古镇",
            "淡竹休闲谷"
          ],
          "hours": 9
        },
        {
          "day": 3,
          "theme": "海防古城",
          "list": [
            "桃渚古城",
            "玉环漩门湾观光农业园"
          ],
          "hours": 9
        }
      ]
    },
    "culture": {
      "name": "天台宗佛学朝圣游",
      "days": 3,
      "tagline": "沿着天台宗祖庭的足迹，感受佛学文化的深邃与宁静",
      "spots": [
        "国清寺",
        "高明寺",
        "万年寺",
        "赤城山",
        "济公故居"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "祖庭朝圣",
          "list": [
            "国清寺",
            "智者塔院"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "佛学溯源",
          "list": [
            "高明寺",
            "万年寺",
            "赤城山"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "济公故里",
          "list": [
            "济公故居",
            "天台山博物馆",
            "龙穿峡"
          ],
          "hours": 9
        }
      ]
    },
    "nature": {
      "name": "括苍山云端徒步游",
      "days": 3,
      "tagline": "在括苍山的风车云海中徒步，在淡竹原始森林中洗肺",
      "spots": [
        "括苍山",
        "淡竹原始森林",
        "公盂景区",
        "神仙居"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "风车云海",
          "list": [
            "括苍山日出",
            "括苍山风车群"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "原始森林",
          "list": [
            "淡竹原始森林",
            "淡竹休闲谷"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "户外圣地",
          "list": [
            "公盂景区",
            "公盂背"
          ],
          "hours": 10
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "天台山",
        "rank": 1,
        "intro": "国家5A级景区，佛教天台宗和道教南宗的发祥地。国清寺为隋代古刹，不收门票不烧高香，是中国最质朴的千年古寺之一。石梁飞瀑、华顶杜鹃等自然景观同样令人震撼。",
        "coord": [
          121.03,
          29.17
        ],
        "photoSpots": [
          {
            "name": "国清寺隋塔",
            "pose": "千年隋塔与古寺的经典构图"
          },
          {
            "name": "石梁飞瀑",
            "pose": "天然石桥上瀑布飞流而下"
          }
        ],
        "food": [
          {
            "name": "天台山素斋",
            "star": 5,
            "desc": "国清寺周边素菜馆，清淡雅致"
          },
          {
            "name": "天台饺饼筒",
            "star": 4,
            "desc": "薄饼卷各种菜馅，当地特色"
          }
        ],
        "duration": 6,
        "ticket": 55,
        "tip": "国清寺免费开放，石梁飞瀑单独收费约60元"
      },
      {
        "name": "神仙居",
        "rank": 2,
        "intro": "被誉为\"中国最美火山岩地貌\"，千仞绝壁、万壑纵横，云雾缭绕时宛如仙境。南北两条索道可上山，高空栈道人走在悬崖边，玻璃桥横跨峡谷，惊险刺激。",
        "coord": [
          120.68,
          28.75
        ],
        "photoSpots": [
          {
            "name": "南天桥",
            "pose": "玻璃桥上拍摄峡谷全景"
          },
          {
            "name": "如意桥",
            "pose": "网红如意桥云海中的梦幻画面"
          }
        ],
        "food": [
          {
            "name": "仙居八大碗",
            "star": 4,
            "desc": "传统宴席菜，八道硬菜"
          },
          {
            "name": "仙居杨梅",
            "star": 5,
            "desc": "6月杨梅季，个大汁多极甜"
          }
        ],
        "duration": 5,
        "ticket": 150,
        "tip": "建议南上北下或北上南下，全程栈道约6公里"
      },
      {
        "name": "括苍山",
        "rank": 3,
        "intro": "浙东南最高峰，海拔1382米，是观日出和云海的绝佳之地。山顶三十多座风力发电机组成壮观的风车阵，日出时分风车与云海同框，已成为浙江最热门的露营观星地。",
        "coord": [
          121.05,
          28.8
        ],
        "photoSpots": [
          {
            "name": "风车日出",
            "pose": "日出金光中的风车群剪影"
          },
          {
            "name": "星空露营",
            "pose": "夜晚银河拱桥与风车"
          }
        ],
        "food": [
          {
            "name": "山顶烧烤",
            "star": 3,
            "desc": "露营地提供的烧烤套餐"
          }
        ],
        "duration": 8,
        "ticket": 0,
        "tip": "山顶可自驾到达，露营需自带装备或租借"
      },
      {
        "name": "临海古城",
        "rank": 4,
        "intro": "国家5A级景区，保存着全国重点文保单位台州府城墙（江南长城）和千年紫阳古街。紫阳街两侧保存着大量明清建筑，各种传统小吃店铺鳞次栉比，烟火气十足。",
        "coord": [
          121.14,
          28.85
        ],
        "photoSpots": [
          {
            "name": "江南长城",
            "pose": "城墙上俯瞰古城全貌"
          },
          {
            "name": "紫阳古街",
            "pose": "古街纵深的灯笼与店铺"
          }
        ],
        "food": [
          {
            "name": "蛋清羊尾",
            "star": 5,
            "desc": "蛋白裹豆沙油炸，临海名点"
          },
          {
            "name": "麦虾",
            "star": 5,
            "desc": "面糊拨入汤中似虾形，鲜美"
          }
        ],
        "duration": 4,
        "ticket": 0,
        "tip": "古街免费，江南长城门票约65元"
      },
      {
        "name": "大陈岛",
        "rank": 5,
        "intro": "台州湾外的东海明珠，曾是军事要塞。甲午岩海景壮阔，垦荒纪念区讲述着大陈岛的精神故事。环岛公路风光旖旎，海鲜极其新鲜。限流保护使生态保持完好。",
        "coord": [
          121.78,
          28.45
        ],
        "photoSpots": [
          {
            "name": "甲午岩",
            "pose": "海蚀岩柱与碧海的壮观画面"
          }
        ],
        "food": [
          {
            "name": "大陈岛海鲜",
            "star": 5,
            "desc": "现捕现做的大黄鱼、带鱼"
          },
          {
            "name": "大陈岛鲳鱼",
            "star": 5,
            "desc": "东海鲳鱼清蒸，鲜嫩无比"
          }
        ],
        "duration": 24,
        "ticket": 0,
        "tip": "从台州椒江码头乘船约2小时，船票需提前预订"
      }
    ],
    "secondary": [
      {
        "name": "长屿硐天",
        "rank": 6,
        "intro": "1500多年来采石形成的人工洞穴奇观，28个硐群、1314个石硐纵横交错。观夕硐内可容纳千人，自然音响效果极佳，常有音乐会在此举办，声效震撼。",
        "coord": [
          121.38,
          28.45
        ],
        "photoSpots": [
          {
            "name": "观夕硐",
            "pose": "巨大硐穴内的光影效果"
          }
        ],
        "food": [
          {
            "name": "温岭嵌糕",
            "star": 4,
            "desc": "年糕包裹各种馅料，温岭特色"
          }
        ],
        "duration": 2,
        "ticket": 55,
        "tip": "洞内温度常年约20度，夏天入洞极凉爽"
      },
      {
        "name": "皤滩古镇",
        "rank": 7,
        "intro": "仙居县境内的千年古镇，因盐商文化而兴盛。龙形古街蜿蜒曲折，保存着大量清代民居和商铺建筑。几乎没有商业化开发，是体验原生态古镇生活的绝佳去处。",
        "coord": [
          120.63,
          28.78
        ],
        "photoSpots": [
          {
            "name": "龙形古街",
            "pose": "蜿蜒古街的纵深透视"
          }
        ],
        "food": [
          {
            "name": "仙居八大碗",
            "star": 4,
            "desc": "古镇上传统宴席"
          },
          {
            "name": "皤滩豆腐",
            "star": 4,
            "desc": "当地手工豆腐，嫩滑鲜美"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "游客极少，工作日几乎可以独享古镇"
      },
      {
        "name": "国清寺",
        "rank": 8,
        "intro": "始建于隋开皇十八年的千年古刹，中国佛教天台宗祖庭、日本天台宗的发祥地。不收门票、不烧高香、不设功德箱，被誉为\"中国最良心的寺庙\"。隋梅千年古梅至今存活。",
        "coord": [
          121.03,
          29.17
        ],
        "photoSpots": [
          {
            "name": "隋塔",
            "pose": "千年砖塔与古寺同框"
          },
          {
            "name": "隋梅",
            "pose": "千年古梅开花时节（2-3月）"
          }
        ],
        "food": [
          {
            "name": "国清寺素面",
            "star": 5,
            "desc": "寺内2元一碗的素面，朴素美味"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "免费且不收费，全国少有的良心寺庙"
      },
      {
        "name": "桃渚古城",
        "rank": 9,
        "intro": "临海市境内的明代海防卫城，为抗倭名将戚继光所建。古城格局保存完好，城墙、炮台等军事遗迹丰富。城内有石柱、古井等景观，是了解明代海防历史的好去处。",
        "coord": [
          121.54,
          28.77
        ],
        "photoSpots": [
          {
            "name": "古城城墙",
            "pose": "明代城墙与田野风光"
          }
        ],
        "food": [
          {
            "name": "临海糟羹",
            "star": 3,
            "desc": "当地传统节日食品"
          }
        ],
        "duration": 1.5,
        "ticket": 20,
        "tip": "可与临海古城连游，相距约40分钟车程"
      },
      {
        "name": "紫阳古街",
        "rank": 10,
        "intro": "中国历史文化名街，全长1080米，以道教南宗始祖张紫阳命名。街两侧保存着大量明清建筑，传统老字号和小吃店铺超过百家。夜晚灯笼亮起后更具古韵。",
        "coord": [
          121.14,
          28.85
        ],
        "photoSpots": [
          {
            "name": "紫阳街夜景",
            "pose": "红灯笼映照下的古街"
          }
        ],
        "food": [
          {
            "name": "海苔饼",
            "star": 5,
            "desc": "紫阳街上的排队名饼"
          },
          {
            "name": "姜汤面",
            "star": 4,
            "desc": "姜汁面条，暖胃驱寒"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "小吃种类极多，建议空着肚子去"
      }
    ],
    "hidden": [
      {
        "name": "公盂景区",
        "rank": 11,
        "intro": "被《中国国家地理》评为\"华东最后的香格里拉\"。公盂背和公盂村被火山岩峰环绕，高山梯田与古朴村落构成世外桃源般的画面。徒步约2小时登顶，风景绝美。",
        "coord": [
          120.65,
          28.72
        ],
        "photoSpots": [
          {
            "name": "公盂背",
            "pose": "火山岩峰环绕梯田的全景"
          },
          {
            "name": "公盂村",
            "pose": "云雾中的古村与梯田"
          }
        ],
        "food": [
          {
            "name": "公盂农家饭",
            "star": 4,
            "desc": "村民自种的蔬菜和养的鸡"
          }
        ],
        "duration": 6,
        "ticket": 0,
        "tip": "需徒步约2小时上山，体力要求中等",
        "trend": "+180% 近3月热度"
      },
      {
        "name": "淡竹原始森林",
        "rank": 12,
        "intro": "仙居县境内保存完好的亚热带原始森林，森林覆盖率超过98%。溪水清澈见底，负氧离子含量极高。夏天平均气温仅26度，是名副其实的\"天然氧吧\"和避暑胜地。",
        "coord": [
          120.58,
          28.7
        ],
        "photoSpots": [
          {
            "name": "原始森林溪谷",
            "pose": "阳光穿透林冠照射溪水"
          }
        ],
        "food": [
          {
            "name": "溪鱼",
            "star": 4,
            "desc": "清溪中的野生小鱼，清甜鲜美"
          }
        ],
        "duration": 3,
        "ticket": 50,
        "tip": "夏天可溯溪戏水，建议穿溯溪鞋",
        "trend": "+130% 近3月热度"
      },
      {
        "name": "济公故居",
        "rank": 13,
        "intro": "天台县内济公（道济和尚）出生和少年生活的地方。故居按宋代建筑复原，展示了济公从富家子弟到云游僧人的人生历程。活佛济公的故事在天台民间广为流传。",
        "coord": [
          121.02,
          29.14
        ],
        "photoSpots": [
          {
            "name": "故居庭院",
            "pose": "宋代风格的庭院建筑"
          }
        ],
        "food": [
          {
            "name": "天台素饼",
            "star": 4,
            "desc": "济公故居旁的传统素饼"
          }
        ],
        "duration": 1,
        "ticket": 30,
        "tip": "与国清寺相距不远，可连游",
        "trend": "+70% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "台州路桥机场（HYN），航线覆盖北京、广州、深圳等主要城市",
    "mainStation": "台州站/台州西站（高铁站），杭深线经停，约2小时达杭州",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 30,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 55,
      "fuelPer100km": 68,
      "parking": "市中心约10元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "台州希尔顿酒店",
        "loc": "椒江区·中央商务区",
        "price": 1000,
        "star": 5,
        "perks": "城市新地标，行政楼层待遇好"
      },
      {
        "name": "台州香格里拉大酒店",
        "loc": "路桥区·飞龙湖",
        "price": 1200,
        "star": 5,
        "perks": "湖景度假风，环境优美"
      },
      {
        "name": "临海远洲国际大酒店",
        "loc": "临海市·古城区",
        "price": 700,
        "star": 4,
        "perks": "近临海古城，游览紫阳街方便"
      }
    ],
    "mid": [
      {
        "name": "台州开元大酒店",
        "loc": "椒江区·市中心",
        "price": 500,
        "star": 4,
        "perks": "老牌酒店，交通便利"
      },
      {
        "name": "天台宾馆",
        "loc": "天台县·国清路",
        "price": 450,
        "star": 4,
        "perks": "近国清寺，环境清幽"
      },
      {
        "name": "仙居雷迪森酒店",
        "loc": "仙居县·县城",
        "price": 500,
        "star": 4,
        "perks": "近神仙居景区，设施完善"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（临海古城店）",
        "loc": "临海市",
        "price": 300,
        "star": 3,
        "perks": "近紫阳古街，逛吃方便"
      },
      {
        "name": "亚朵酒店（椒江店）",
        "loc": "椒江区",
        "price": 320,
        "star": 3,
        "perks": "市中心，出行便利"
      },
      {
        "name": "汉庭酒店（天台山店）",
        "loc": "天台县",
        "price": 220,
        "star": 3,
        "perks": "近天台山景区，有免费停车"
      }
    ]
  }
};

// 舟山
window.CITY_DATABASE['舟山'] = {
  "code": "zhoushan",
  "province": "浙江省",
  "coord": [
    122.2072,
    29.9853
  ],
  "bestSeason": "6-10月，夏季海滨戏水、秋季海鲜肥美，普陀山四季皆宜",
  "routes": {
    "classic": {
      "name": "海天佛国经典游",
      "days": 3,
      "tagline": "在普陀山的梵音与朱家尖的碧浪间，感受东海佛国的庄严与浪漫",
      "spots": [
        "普陀山",
        "朱家尖",
        "南海观音",
        "普济禅寺",
        "南沙海滩"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "佛国朝圣",
          "list": [
            "普陀山·普济禅寺",
            "普陀山·法雨寺",
            "普陀山·南海观音"
          ],
          "hours": 12
        },
        {
          "day": 2,
          "theme": "山海奇观",
          "list": [
            "普陀山·梵音洞",
            "普陀山·紫竹林",
            "普陀山·洛迦山"
          ],
          "hours": 12
        },
        {
          "day": 3,
          "theme": "碧海金沙",
          "list": [
            "朱家尖·南沙",
            "朱家尖·大青山",
            "乌石塘"
          ],
          "hours": 10
        }
      ]
    },
    "niche": {
      "name": "离岛秘境跳岛游",
      "days": 4,
      "tagline": "从东极岛到嵊泗列岛，在东海深处寻找最美的蓝色秘境",
      "spots": [
        "东极岛",
        "嵊泗列岛",
        "枸杞岛",
        "花鸟岛"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "东海极点",
          "list": [
            "东极岛·庙子湖",
            "东极岛·东福山"
          ],
          "hours": 13
        },
        {
          "day": 2,
          "theme": "极地风光",
          "list": [
            "东极岛·青浜岛",
            "海上布达拉宫"
          ],
          "hours": 11
        },
        {
          "day": 3,
          "theme": "蓝海秘境",
          "list": [
            "嵊泗列岛·枸杞岛",
            "山海奇观"
          ],
          "hours": 12
        },
        {
          "day": 4,
          "theme": "花鸟灯塔",
          "list": [
            "花鸟岛",
            "花鸟灯塔"
          ],
          "hours": 10
        }
      ]
    },
    "culture": {
      "name": "海洋文化深度游",
      "days": 3,
      "tagline": "从定海古城到渔港码头，探寻舟山千年海洋文化的脉络",
      "spots": [
        "定海古城",
        "舟山海鲜夜排档",
        "鸦片战争遗址",
        "舟山渔民画村"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "海防古城",
          "list": [
            "定海古城",
            "鸦片战争遗址公园",
            "中大街"
          ],
          "hours": 9
        },
        {
          "day": 2,
          "theme": "佛国梵音",
          "list": [
            "普陀山",
            "不肯去观音院",
            "西天景区"
          ],
          "hours": 12
        },
        {
          "day": 3,
          "theme": "渔港风情",
          "list": [
            "沈家门渔港",
            "舟山海鲜夜排档",
            "舟山渔民画村"
          ],
          "hours": 13
        }
      ]
    },
    "nature": {
      "name": "碧海蓝天自然游",
      "days": 3,
      "tagline": "在桃花岛和朱家尖的海岸线上，拥抱最纯粹的碧海蓝天",
      "spots": [
        "朱家尖",
        "桃花岛",
        "白沙岛",
        "东沙古渔镇"
      ],
      "dayPlan": [
        {
          "day": 1,
          "theme": "金沙碧海",
          "list": [
            "朱家尖·南沙",
            "朱家尖·里沙",
            "大青山"
          ],
          "hours": 11
        },
        {
          "day": 2,
          "theme": "桃花仙岛",
          "list": [
            "桃花岛·射雕影视城",
            "桃花岛·塔湾金沙"
          ],
          "hours": 10
        },
        {
          "day": 3,
          "theme": "渔村秘境",
          "list": [
            "白沙岛",
            "东沙古渔镇"
          ],
          "hours": 9
        }
      ]
    }
  },
  "attractions": {
    "mustSee": [
      {
        "name": "普陀山",
        "rank": 1,
        "intro": "中国佛教四大名山之一，观音菩萨的道场。普济、法雨、慧济三大禅寺香火鼎盛，南海观音铜像高达33米矗立海岸。紫竹林、梵音洞等景观与佛教文化交融，庄严殊胜。",
        "coord": [
          122.38,
          30.01
        ],
        "photoSpots": [
          {
            "name": "南海观音",
            "pose": "33米铜像在蓝天白云下庄严矗立"
          },
          {
            "name": "普济禅寺",
            "pose": "古刹山门与参天古木"
          }
        ],
        "food": [
          {
            "name": "普陀山素斋",
            "star": 5,
            "desc": "寺院素斋，简朴而美味"
          },
          {
            "name": "观音饼",
            "star": 4,
            "desc": "普陀山特产糕点，甜糯"
          }
        ],
        "duration": 12,
        "ticket": 160,
        "tip": "旺季门票160元淡季120元，建议住岛上一晚"
      },
      {
        "name": "朱家尖",
        "rank": 2,
        "intro": "与普陀山隔海相望的岛屿，拥有华东最大的沙滩群。南沙沙质细腻金黄，大青山海蚀地貌壮观，里沙是天然的海水浴场。国际沙雕节每年在此举办，作品精美绝伦。",
        "coord": [
          122.4,
          29.92
        ],
        "photoSpots": [
          {
            "name": "南沙沙滩",
            "pose": "金色沙滩与碧海的经典构图"
          },
          {
            "name": "大青山",
            "pose": "海蚀崖壁上俯瞰大海"
          }
        ],
        "food": [
          {
            "name": "朱家尖海鲜烧烤",
            "star": 5,
            "desc": "沙滩边现烤的海鲜大餐"
          }
        ],
        "duration": 6,
        "ticket": 75,
        "tip": "南沙门票75元，大青山另收费约100元"
      },
      {
        "name": "嵊泗列岛",
        "rank": 3,
        "intro": "国家级列岛风景名胜区，由404个岛屿组成。枸杞岛被誉为\"东方小希腊\"，蓝白建筑散落山间。花鸟岛上有百年花鸟灯塔，是中国最美灯塔之一。限流保护使生态完好。",
        "coord": [
          122.45,
          30.73
        ],
        "photoSpots": [
          {
            "name": "枸杞岛无人村",
            "pose": "废弃渔村被爬山虎覆盖的奇观"
          },
          {
            "name": "花鸟灯塔",
            "pose": "百年灯塔与星空同框"
          }
        ],
        "food": [
          {
            "name": "嵊泗贻贝",
            "star": 5,
            "desc": "枸杞岛贻贝养殖全国闻名"
          },
          {
            "name": "嵊泗带鱼",
            "star": 5,
            "desc": "冬季带鱼最肥，清蒸极鲜"
          }
        ],
        "duration": 24,
        "ticket": 0,
        "tip": "枸杞岛船票旺季极难抢，建议提前一周在\"嵊泗客运总站\"公众号购买"
      },
      {
        "name": "东极岛",
        "rank": 4,
        "intro": "中国最东端的有人居住海岛，因电影《后会无期》走红。庙子湖是主岛，东福山可观中国大陆第一缕曙光。青浜岛被誉为\"海上布达拉宫\"，层叠石屋依山而建。",
        "coord": [
          122.74,
          30.19
        ],
        "photoSpots": [
          {
            "name": "东福山日出",
            "pose": "中国大陆最东端的第一缕阳光"
          },
          {
            "name": "青浜岛石屋",
            "pose": "层叠石屋的\"海上布达拉宫\""
          }
        ],
        "food": [
          {
            "name": "东极鱼干",
            "star": 4,
            "desc": "当地晒制的各种鱼干"
          },
          {
            "name": "海鲜面",
            "star": 5,
            "desc": "渔家自做的海鲜面条"
          }
        ],
        "duration": 24,
        "ticket": 0,
        "tip": "船票旺季需提前一周购买，岛上住宿条件有限请降低期望"
      },
      {
        "name": "桃花岛",
        "rank": 5,
        "intro": "因金庸小说《射雕英雄传》中桃花岛主黄药师而闻名。岛上有射雕影视城、塔湾金沙、安期峰等景点。春天桃花盛开时最美，是金庸武侠迷的朝圣之地。",
        "coord": [
          122.27,
          29.82
        ],
        "photoSpots": [
          {
            "name": "塔湾金沙",
            "pose": "碧海金沙与桃花石"
          },
          {
            "name": "射雕影视城",
            "pose": "武侠场景中的侠客留影"
          }
        ],
        "food": [
          {
            "name": "桃花岛海鲜",
            "star": 4,
            "desc": "渔家乐现做的时令海鲜"
          }
        ],
        "duration": 5,
        "ticket": 80,
        "tip": "射雕影视城门票约55元，塔湾金沙约45元"
      }
    ],
    "secondary": [
      {
        "name": "定海古城",
        "rank": 6,
        "intro": "舟山市定海区的千年古城，曾是海防重镇。鸦片战争中定海三总兵在此壮烈殉国，留有大量历史遗迹。中大街和西区历史街区保存着清代民国建筑，海防文化底蕴深厚。",
        "coord": [
          122.11,
          30.02
        ],
        "photoSpots": [
          {
            "name": "中大街",
            "pose": "清代商业街的老建筑门面"
          }
        ],
        "food": [
          {
            "name": "定海炸鱼饼",
            "star": 4,
            "desc": "鱼糜制成的炸饼，酥脆鲜美"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "鸦片战争遗址公园免费参观，适合历史爱好者"
      },
      {
        "name": "舟山海鲜夜排档",
        "rank": 7,
        "intro": "沈家门渔港畔的海鲜夜排档一条街，全国闻名的海鲜美食集散地。数十家排档沿港排列，灯火通明，海鲜品种丰富且新鲜。边吃海鲜边看渔港夜景，是舟山最经典的体验。",
        "coord": [
          122.3,
          29.94
        ],
        "photoSpots": [
          {
            "name": "渔港灯火",
            "pose": "夜排档与渔船灯火交辉"
          }
        ],
        "food": [
          {
            "name": "梭子蟹",
            "star": 5,
            "desc": "舟山最出名的大闸蟹，清蒸最鲜"
          },
          {
            "name": "椒盐九肚鱼",
            "star": 5,
            "desc": "外酥内嫩的豆腐鱼"
          },
          {
            "name": "生呛蟹糊",
            "star": 4,
            "desc": "生腌蟹糊，老饕最爱"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "建议先问价再点菜，人均约150-250元"
      },
      {
        "name": "南沙海滩",
        "rank": 8,
        "intro": "朱家尖最大的沙滩，长1370米、宽约300米，沙质细腻如面粉。国际沙雕节每年8-10月在此举办，各国沙雕大师创作的大型沙雕作品精美绝伦。沙滩上可冲浪、帆板等。",
        "coord": [
          122.42,
          29.91
        ],
        "photoSpots": [
          {
            "name": "沙雕作品",
            "pose": "巨型沙雕艺术前留影"
          }
        ],
        "food": [
          {
            "name": "沙滩烧烤",
            "star": 3,
            "desc": "沙滩边的自助海鲜烧烤"
          }
        ],
        "duration": 3,
        "ticket": 75,
        "tip": "夏天可下海游泳，有救生员值守"
      },
      {
        "name": "南海观音铜像",
        "rank": 9,
        "intro": "普陀山标志性景观，1997年开光的观音铜像高33米，重70多吨。矗立于龙湾岗上，面朝大海，慈眉善目。是普陀山最庄严的佛像，朝拜者络绎不绝。",
        "coord": [
          122.375,
          30.005
        ],
        "photoSpots": [
          {
            "name": "观音正面",
            "pose": "仰拍铜像与蓝天白云"
          }
        ],
        "food": [
          {
            "name": "普陀山素饼",
            "star": 4,
            "desc": "观音饼、素饼等传统糕点"
          }
        ],
        "duration": 1,
        "ticket": 6,
        "tip": "含在普陀山大门票内，6元为单独小门票"
      },
      {
        "name": "普济禅寺",
        "rank": 10,
        "intro": "普陀山三大禅寺之首，又称前寺，始建于北宋。是全山最大的寺院，天王殿、大圆通殿、法堂等建筑宏伟庄严。海印池前古木参天，是全山香火最旺的寺院。",
        "coord": [
          122.385,
          30.015
        ],
        "photoSpots": [
          {
            "name": "海印池",
            "pose": "放生池与古寺的倒影"
          }
        ],
        "food": [
          {
            "name": "寺院素面",
            "star": 4,
            "desc": "寺内素面馆，10元一碗"
          }
        ],
        "duration": 1.5,
        "ticket": 5,
        "tip": "清晨6点开门，建议一早前往避开人流"
      }
    ],
    "hidden": [
      {
        "name": "枸杞岛无人村",
        "rank": 11,
        "intro": "嵊泗枸杞岛上的废弃渔村，被爬山虎完全覆盖的石屋群宛如绿色仙境。被网友称为\"现实版绿野仙踪\"，入选英国《每日邮报》\"全球28处被遗弃的绝美景点\"。",
        "coord": [
          122.77,
          30.72
        ],
        "photoSpots": [
          {
            "name": "绿野仙踪",
            "pose": "满墙爬山虎覆盖的石屋奇观"
          },
          {
            "name": "观景台",
            "pose": "俯瞰整个无人村全景"
          }
        ],
        "food": [
          {
            "name": "枸杞岛贻贝宴",
            "star": 5,
            "desc": "各种做法的新鲜贻贝"
          }
        ],
        "duration": 2,
        "ticket": 0,
        "tip": "从枸杞岛码头步行约30分钟，山路较陡",
        "trend": "+200% 近3月热度"
      },
      {
        "name": "白沙岛",
        "rank": 12,
        "intro": "朱家尖附近的小型离岛，需乘船约20分钟到达。岛上几乎没有商业化开发，保留了最原始的渔村风貌。海钓、赶海是主要活动，渔家乐住宿体验原汁原味。",
        "coord": [
          122.45,
          29.88
        ],
        "photoSpots": [
          {
            "name": "渔村海岸",
            "pose": "原始渔村与蔚蓝海岸"
          }
        ],
        "food": [
          {
            "name": "渔家乐海鲜",
            "star": 5,
            "desc": "渔民自家做的现捕海鲜"
          }
        ],
        "duration": 8,
        "ticket": 0,
        "tip": "船班次较少需提前查询，适合住一晚深度体验",
        "trend": "+95% 近3月热度"
      },
      {
        "name": "大青山",
        "rank": 13,
        "intro": "朱家尖南端的海蚀地貌景区，三面环海一面连陆。十里金沙、千步沙等沙滩散布其间，海蚀崖壁高耸壮观。青沙、里沙等隐秘海滩水质清澈，是浮潜和赶海的好地方。",
        "coord": [
          122.41,
          29.88
        ],
        "photoSpots": [
          {
            "name": "海蚀崖壁",
            "pose": "崖壁上俯瞰十里金沙"
          },
          {
            "name": "里沙",
            "pose": "隐秘海滩的碧蓝海水"
          }
        ],
        "food": [
          {
            "name": "海边野餐",
            "star": 3,
            "desc": "建议自带食物，岛上餐饮较少"
          }
        ],
        "duration": 3,
        "ticket": 100,
        "tip": "景区内需乘坐观光车，自驾车不能进入",
        "trend": "+110% 近3月热度"
      }
    ]
  },
  "transport": {
    "airport": "舟山普陀山机场（HSN），位于朱家尖，航线覆盖北京、上海、广州等城市",
    "mainStation": "无高铁站（甬舟铁路在建），目前主要依靠长途大巴或自驾经舟山跨海大桥",
    "publicTransit": {
      "metroDailyCost": 0,
      "taxiAvg": 35,
      "busCost": 2
    },
    "driving": {
      "tollPerDay": 70,
      "fuelPer100km": 70,
      "parking": "码头附近约15元/小时"
    }
  },
  "accommodation": {
    "luxury": [
      {
        "name": "舟山喜来登绿城酒店",
        "loc": "定海区·新城区",
        "price": 1200,
        "star": 5,
        "perks": "海景房与泳池，行政酒廊待遇好"
      },
      {
        "name": "普陀山雷迪森庄园",
        "loc": "普陀山·西山",
        "price": 1500,
        "star": 5,
        "perks": "岛内高端住宿，步行可达各寺"
      },
      {
        "name": "朱家尖绿城蔚蓝公寓",
        "loc": "朱家尖·南沙附近",
        "price": 1000,
        "star": 4,
        "perks": "海景公寓式酒店，适合家庭"
      }
    ],
    "mid": [
      {
        "name": "舟山中瀚大酒店",
        "loc": "定海区·市中心",
        "price": 500,
        "star": 4,
        "perks": "市中心位置好，海鲜餐厅地道"
      },
      {
        "name": "普陀山大酒店",
        "loc": "普陀山·龙湾",
        "price": 700,
        "star": 4,
        "perks": "岛内位置好，近普济禅寺"
      },
      {
        "name": "沈家门天海望港酒店",
        "loc": "普陀区·沈家门",
        "price": 450,
        "star": 4,
        "perks": "近夜排档和码头，出行便利"
      }
    ],
    "budget": [
      {
        "name": "全季酒店（定海店）",
        "loc": "定海区",
        "price": 300,
        "star": 3,
        "perks": "新城区，干净舒适"
      },
      {
        "name": "亚朵酒店（沈家门渔港店）",
        "loc": "普陀区",
        "price": 350,
        "star": 3,
        "perks": "近沈家门海鲜夜排档"
      },
      {
        "name": "汉庭酒店（朱家尖码头店）",
        "loc": "朱家尖",
        "price": 280,
        "star": 3,
        "perks": "近蜈蚣峙码头，去普陀山方便"
      }
    ]
  }
};

window.CITY_DATABASE['乌鲁木齐'] = {
  code: 'urumqi',
  coord: [87.6177, 43.8256],
  bestSeason: '5月至10月，夏季凉爽宜人，秋季瓜果飘香，冬季可滑雪',
  routes: {
    classic: {
      name: '天山南北经典五日游',
      days: 5,
      tagline: '从雪山到巴扎，一次看遍新疆精华',
      spots: ['天山天池', '新疆国际大巴扎', '红山公园', '水磨沟风景区', '新疆维吾尔自治区博物馆', '南山牧场', '天山大峡谷'],
      dayPlan: [
        { day: 1, theme: '城市初印象', list: ['新疆维吾尔自治区博物馆', '红山公园'], hours: 7 },
        { day: 2, theme: '天山仙境', list: ['天山天池'], hours: 10 },
        { day: 3, theme: '民俗风情', list: ['新疆国际大巴扎', '水磨沟风景区'], hours: 8 },
        { day: 4, theme: '南山风光', list: ['南山牧场'], hours: 9 },
        { day: 5, theme: '峡谷探险', list: ['天山大峡谷'], hours: 7 }
      ]
    },
    niche: {
      name: '乌鲁木齐小众深度四日游',
      days: 4,
      tagline: '冰川牧场与峡谷，发现不一样的乌鲁木齐',
      spots: ['南山牧场', '天山大峡谷', '丝绸之路国际滑雪场', '一号冰川', '亚洲大陆地理中心', '乌鲁木齐植物园'],
      dayPlan: [
        { day: 1, theme: '城市绿意', list: ['乌鲁木齐植物园', '亚洲大陆地理中心'], hours: 6 },
        { day: 2, theme: '牧场漫步', list: ['南山牧场'], hours: 10 },
        { day: 3, theme: '冰川探秘', list: ['一号冰川', '天山大峡谷'], hours: 9 },
        { day: 4, theme: '冰雪运动', list: ['丝绸之路国际滑雪场'], hours: 8 }
      ]
    },
    culture: {
      name: '丝路文化深度五日游',
      days: 5,
      tagline: '穿越古今丝路，品味多元文化',
      spots: ['新疆维吾尔自治区博物馆', '陕西大寺', '新疆国际大巴扎', '柴窝堡湖', '红山公园', '丝绸之路国际滑雪场'],
      dayPlan: [
        { day: 1, theme: '历史溯源', list: ['新疆维吾尔自治区博物馆', '陕西大寺'], hours: 7 },
        { day: 2, theme: '巴扎寻宝', list: ['新疆国际大巴扎'], hours: 8 },
        { day: 3, theme: '丝路遗风', list: ['柴窝堡湖', '红山公园'], hours: 8 },
        { day: 4, theme: '冰雪丝路', list: ['丝绸之路国际滑雪场'], hours: 9 },
        { day: 5, theme: '文化漫步', list: ['红山公园'], hours: 6 }
      ]
    },
    nature: {
      name: '天山自然生态三日游',
      days: 3,
      tagline: '从天池到冰川，领略天山壮美',
      spots: ['天山天池', '一号冰川', '南山牧场', '天山大峡谷', '水磨沟风景区'],
      dayPlan: [
        { day: 1, theme: '天池仙境', list: ['天山天池', '水磨沟风景区'], hours: 10 },
        { day: 2, theme: '冰川探秘', list: ['一号冰川', '南山牧场'], hours: 10 },
        { day: 3, theme: '峡谷奇观', list: ['天山大峡谷'], hours: 8 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '天山天池',
        rank: 1,
        intro: '世界自然遗产，海拔1910米的高山湖泊，四周云杉环绕雪峰倒映，古称瑶池，是新疆最具代表性的自然景观之一',
        coord: [88.1167, 43.8833],
        photoSpots: [
          { name: '天池湖畔观景台', pose: '以天池和博格达峰为背景拍摄全景' },
          { name: '西小天池', pose: '拍摄幽静的小天池与森林倒影' },
          { name: '天池栈道', pose: '在栈道上拍摄云杉与湖面倒影' }
        ],
        food: [
          { name: '天池哈萨克毡房奶茶', star: 4, desc: '景区附近毡房现煮奶茶，奶香浓郁配酥油' },
          { name: '烤全羊', star: 5, desc: '哈萨克传统烤全羊，外焦里嫩风味独特' }
        ],
        duration: 6,
        ticket: 95,
        tip: '建议上午入园避开人流，山上温差大请带外套，区间车费用另计60元'
      },
      {
        name: '新疆国际大巴扎',
        rank: 2,
        intro: '世界上规模最大的巴扎（集市），集伊斯兰建筑、民族商品、特色小吃于一体，是乌鲁木齐最具民族风情的地标',
        coord: [87.6167, 43.7928],
        photoSpots: [
          { name: '大巴扎广场', pose: '以伊斯兰风格穹顶和塔楼为背景' },
          { name: '大巴扎内部步行街', pose: '拍摄色彩斑斓的商品和热闹氛围' },
          { name: '大巴扎夜景', pose: '拍摄灯光下的伊斯兰建筑群' }
        ],
        food: [
          { name: '大巴扎烤包子', star: 5, desc: '皮薄馅大，羊肉洋葱馅，现烤现吃' },
          { name: '大巴扎酸奶', star: 4, desc: '新疆传统手工酸奶，浓稠酸甜可口' }
        ],
        duration: 3,
        ticket: 0,
        tip: '傍晚去最热闹，建议尝试二楼美食广场，购买干果记得讲价'
      },
      {
        name: '红山公园',
        rank: 3,
        intro: '乌鲁木齐市的标志性公园，红山塔建于清代，登顶可360度俯瞰整座城市全景，是了解乌鲁木齐城市发展的窗口',
        coord: [87.6042, 43.7967],
        photoSpots: [
          { name: '红山塔', pose: '以红山塔和乌鲁木齐城市天际线为背景' },
          { name: '远眺楼', pose: '拍摄城市全景与远处博格达峰' },
          { name: '红山公园入口', pose: '拍摄红色山体与绿树相映的景色' }
        ],
        food: [
          { name: '红山转盘烤肉', star: 4, desc: '本地人最爱的街边烤肉串，炭火烤制鲜嫩多汁' },
          { name: '老回民饭庄拌面', star: 4, desc: '正宗新疆拉条子配过油肉，面条劲道' }
        ],
        duration: 2,
        ticket: 0,
        tip: '免费公园，建议傍晚前往看日落和城市夜景，爬山约需20分钟'
      },
      {
        name: '水磨沟风景区',
        rank: 4,
        intro: '乌鲁木齐东郊的自然风景区，以温泉和瀑布闻名，沟内古树参天溪流潺潺，冬季有温泉和滑雪场四季皆宜',
        coord: [87.6533, 43.8300],
        photoSpots: [
          { name: '水磨沟瀑布', pose: '拍摄瀑布飞流直下的壮观景象' },
          { name: '古树溪谷', pose: '在古树林间拍摄光影效果' },
          { name: '清泉寺', pose: '拍摄古寺与山水交融的画面' }
        ],
        food: [
          { name: '水磨沟烤全羊', star: 4, desc: '景区周边农家乐的招牌菜，选用当地羊' },
          { name: '手抓饭', star: 4, desc: '羊肉胡萝卜焖制的经典新疆抓饭' }
        ],
        duration: 3,
        ticket: 0,
        tip: '免费开放，冬季温泉需另购票，建议穿舒适的运动鞋，游览约3小时'
      },
      {
        name: '新疆维吾尔自治区博物馆',
        rank: 5,
        intro: '国家一级博物馆，馆藏楼兰美女等珍贵干尸文物和丝绸之路文物数万件，是了解新疆历史文化的必到之处',
        coord: [87.5833, 43.7928],
        photoSpots: [
          { name: '博物馆大厅', pose: '拍摄宏伟的博物馆建筑和新疆主题雕塑' },
          { name: '干尸展厅', pose: '拍摄楼兰美女等珍贵干尸展品' },
          { name: '丝路文物展厅', pose: '拍摄丝绸之路出土的珍贵文物' }
        ],
        food: [
          { name: '博物馆旁烤馕', star: 3, desc: '街边现烤新疆馕饼，酥脆咸香' },
          { name: '友好路大盘鸡', star: 5, desc: '附近老字号大盘鸡，鸡肉嫩滑土豆绵软' }
        ],
        duration: 3,
        ticket: 0,
        tip: '免费参观需提前预约，周一闭馆，建议上午前往，认真参观需2-3小时'
      }
    ],
    secondary: [
      {
        name: '南山牧场',
        rank: 6,
        intro: '乌鲁木齐南郊的天然牧场，海拔2000米以上，夏季绿草如茵牛羊成群，是体验哈萨克牧民生活的绝佳去处',
        coord: [87.4667, 43.4667],
        photoSpots: [
          { name: '南山牧场草原', pose: '拍摄辽阔草原与远处雪山的全景' },
          { name: '哈萨克毡房', pose: '以白色毡房和草原为背景' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 5, desc: '新鲜羊肉清水煮制，蘸盐食用原汁原味' },
          { name: '马奶酒', star: 4, desc: '哈萨克传统发酵马奶，微酸爽口' }
        ],
        duration: 6,
        ticket: 30,
        tip: '距市区约60公里，建议包车前往，夏季是最佳季节可住毡房体验'
      },
      {
        name: '丝绸之路国际滑雪场',
        rank: 7,
        intro: '新疆最大的滑雪场之一，拥有多条不同难度雪道和完善的滑雪设施，冬季运动爱好者的天堂',
        coord: [87.4833, 43.4833],
        photoSpots: [
          { name: '滑雪场全景', pose: '拍摄白雪皑皑的雪道和远处天山' },
          { name: '雪道起点', pose: '在雪道顶部拍摄壮阔雪景' }
        ],
        food: [
          { name: '雪场热饮', star: 3, desc: '滑雪后的热巧克力和奶茶暖身暖心' },
          { name: '哈萨克风干肉', star: 4, desc: '传统风干牛肉配馕，补充体力' }
        ],
        duration: 6,
        ticket: 160,
        tip: '11月至次年3月为雪季，初学者建议请教练，自带装备更划算'
      },
      {
        name: '天山大峡谷',
        rank: 8,
        intro: '位于乌鲁木齐县的天山深处，峡谷内红砂岩壁耸立溪流穿谷而过，集峡谷雪山森林湖泊于一体',
        coord: [87.4500, 43.4333],
        photoSpots: [
          { name: '峡谷入口', pose: '拍摄红色岩壁与蓝天白云的对比' },
          { name: '天鹅湖', pose: '拍摄清澈湖水与周围云杉的倒影' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 4, desc: '景区内毡房提供的新鲜手抓羊肉' },
          { name: '奶茶配包尔萨克', star: 3, desc: '哈萨克传统茶点，油炸面食配奶茶' }
        ],
        duration: 5,
        ticket: 45,
        tip: '景区内需乘坐区间车，建议穿防滑鞋，峡谷内温度较低注意保暖'
      },
      {
        name: '乌鲁木齐植物园',
        rank: 9,
        intro: '乌鲁木齐市内最大的植物主题公园，收集种植数百种新疆特色植物，春季郁金香盛开秋季红叶如火',
        coord: [87.5500, 43.8500],
        photoSpots: [
          { name: '郁金香花田', pose: '春季在郁金香花海中拍摄' },
          { name: '温室展馆', pose: '拍摄热带植物与温室建筑' }
        ],
        food: [
          { name: '植物园旁抓饭', star: 3, desc: '附近小店的正宗新疆抓饭' },
          { name: '新鲜果汁', star: 3, desc: '当季水果现榨果汁清凉解渴' }
        ],
        duration: 2,
        ticket: 10,
        tip: '4-5月郁金香节最美，秋季红叶也值得一看，适合亲子休闲'
      },
      {
        name: '陕西大寺',
        rank: 10,
        intro: '乌鲁木齐最大的清真寺之一，始建于清代，融合中国传统建筑与伊斯兰风格，是回族穆斯林的重要礼拜场所',
        coord: [87.6167, 43.7833],
        photoSpots: [
          { name: '大寺正门', pose: '拍摄中式飞檐与伊斯兰穹顶的结合' },
          { name: '礼拜大殿', pose: '拍摄大殿内部精美的装饰和拱顶' }
        ],
        food: [
          { name: '回民小吃街', star: 5, desc: '寺旁回民街的正宗凉皮和烤羊肉串' },
          { name: '九碗三行子', star: 4, desc: '传统回族宴席菜，九碗菜肴摆盘讲究' }
        ],
        duration: 1,
        ticket: 0,
        tip: '非礼拜时间可参观内部，进入需脱鞋且着装得体，请尊重宗教习俗'
      }
    ],
    hidden: [
      {
        name: '一号冰川',
        rank: 11,
        intro: '距乌鲁木齐最近的大陆性冰川，海拔3800米以上，冰川末端可近距离接触，是科考和户外爱好者的圣地',
        coord: [86.8000, 43.1000],
        photoSpots: [
          { name: '冰川观景台', pose: '拍摄冰川全景与周围雪山' },
          { name: '冰川末端', pose: '近距离拍摄冰壁和融水溪流' }
        ],
        food: [
          { name: '沿途拌面', star: 3, desc: '前往冰川路上的路边小店拌面' }
        ],
        duration: 8,
        ticket: 0,
        tip: '路况较差建议越野车，海拔较高注意高反，仅夏季可前往'
      },
      {
        name: '亚洲大陆地理中心',
        rank: 12,
        intro: '经科学测定为亚洲大陆地理中心点所在地，建有标志性塔碑和地理博物馆，具有独特的地理纪念意义',
        coord: [87.2833, 43.6667],
        photoSpots: [
          { name: '亚洲之心标志塔', pose: '在标志塔前拍摄到此一游纪念照' },
          { name: '万国旗帜广场', pose: '拍摄环绕的各国旗帜和中心地标' }
        ],
        food: [
          { name: '永丰乡农家菜', star: 3, desc: '附近乡镇的家常炒菜和面食' }
        ],
        duration: 1,
        ticket: 30,
        tip: '距市区约30公里，可顺路前往，参观时间约1小时'
      },
      {
        name: '柴窝堡湖',
        rank: 13,
        intro: '乌鲁木齐东南郊的天然湖泊，湖面辽阔水天一色，是候鸟迁徙的重要栖息地，秋季可观鸟赏落日',
        coord: [87.9833, 43.5833],
        photoSpots: [
          { name: '湖畔落日', pose: '拍摄湖面金色落日和飞鸟剪影' },
          { name: '芦苇荡', pose: '在芦苇丛中拍摄秋日金色风光' }
        ],
        food: [
          { name: '柴窝堡湖鱼宴', star: 4, desc: '湖鲜鱼类现捕现做，肉质鲜美' }
        ],
        duration: 3,
        ticket: 0,
        tip: '秋季候鸟迁徙季节最佳，风较大注意防风保暖，适合自驾前往'
      }
    ]
  },
  transport: {
    airport: '乌鲁木齐地窝堡国际机场',
    mainStation: '乌鲁木齐站',
    publicTransit: { metroDailyCost: 15, taxiAvg: 40, busCost: 2 },
    driving: { tollPerDay: 80, fuelPer100km: 60, parking: 20 }
  },
  accommodation: {
    luxury: [
      { name: '乌鲁木齐富力万达文华酒店', loc: '新市区', price: 980, star: 5, perks: '室内泳池、行政酒廊、高空城景房' },
      { name: '乌鲁木齐中海天悦酒店', loc: '水磨沟区', price: 880, star: 5, perks: '湖景房、中西餐厅、健身中心' }
    ],
    mid: [
      { name: '乌鲁木齐美丽华酒店', loc: '天山区', price: 380, star: 4, perks: '近大巴扎、自助早餐、免费停车' },
      { name: '乌鲁木齐锦江之星', loc: '沙依巴克区', price: 290, star: 4, perks: '交通便利、干净整洁、性价比高' }
    ],
    budget: [
      { name: '如家酒店乌鲁木齐友好路店', loc: '沙依巴克区', price: 180, star: 3, perks: '近博物馆、标准连锁、经济实惠' },
      { name: '7天酒店乌鲁木齐红旗路店', loc: '天山区', price: 150, star: 3, perks: '市中心位置、出行方便、基础住宿' }
    ]
  }
};

window.CITY_DATABASE['伊宁'] = {
  code: 'yining',
  coord: [81.3297, 43.9167],
  bestSeason: '6月至9月，薰衣草花期6月中旬，草原最佳观赏期7-8月',
  routes: {
    classic: {
      name: '伊犁河谷经典五日游',
      days: 5,
      tagline: '从赛里木湖到那拉提，畅游伊犁最美风光',
      spots: ['赛里木湖', '那拉提草原', '薰衣草基地', '喀赞其民俗村', '伊犁河', '果子沟', '昭苏油菜花'],
      dayPlan: [
        { day: 1, theme: '城市漫步', list: ['喀赞其民俗村', '伊犁河'], hours: 7 },
        { day: 2, theme: '大西洋的最后一滴眼泪', list: ['赛里木湖', '果子沟'], hours: 10 },
        { day: 3, theme: '空中草原', list: ['那拉提草原'], hours: 10 },
        { day: 4, theme: '紫色浪漫', list: ['薰衣草基地', '昭苏油菜花'], hours: 9 }
      ]
    },
    niche: {
      name: '伊犁小众秘境四日游',
      days: 4,
      tagline: '八卦城、夏塔古道与秘境草原',
      spots: ['赛里木湖', '薰衣草基地', '昭苏油菜花', '特克斯八卦城', '夏塔古道', '琼库什台'],
      dayPlan: [
        { day: 1, theme: '湖畔花海', list: ['赛里木湖', '薰衣草基地'], hours: 9 },
        { day: 2, theme: '八卦探秘', list: ['昭苏油菜花', '特克斯八卦城'], hours: 8 },
        { day: 3, theme: '古道徒步', list: ['夏塔古道'], hours: 10 },
        { day: 4, theme: '原始村落', list: ['琼库什台'], hours: 9 }
      ]
    },
    culture: {
      name: '伊犁民族文化五日游',
      days: 5,
      tagline: '感受哈萨克、维吾尔多民族交融的魅力',
      spots: ['喀赞其民俗村', '伊犁河', '赛里木湖', '果子沟', '琼库什台', '托乎拉苏草原'],
      dayPlan: [
        { day: 1, theme: '民俗风情', list: ['喀赞其民俗村', '伊犁河'], hours: 7 },
        { day: 2, theme: '湖畔丝路', list: ['赛里木湖', '果子沟'], hours: 10 },
        { day: 3, theme: '田园牧歌', list: ['昭苏油菜花'], hours: 8 },
        { day: 4, theme: '秘境探访', list: ['琼库什台'], hours: 10 },
        { day: 5, theme: '草原牧歌', list: ['托乎拉苏草原'], hours: 8 }
      ]
    },
    nature: {
      name: '伊犁草原花海四日游',
      days: 4,
      tagline: '深入伊犁最美的草原与花海',
      spots: ['赛里木湖', '那拉提草原', '昭苏油菜花', '托乎拉苏草原', '卡拉峻草原'],
      dayPlan: [
        { day: 1, theme: '高原明珠', list: ['赛里木湖'], hours: 8 },
        { day: 2, theme: '空中草原', list: ['那拉提草原'], hours: 10 },
        { day: 3, theme: '花海漫步', list: ['昭苏油菜花', '托乎拉苏草原'], hours: 9 },
        { day: 4, theme: '立体草原', list: ['卡拉峻草原'], hours: 9 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '赛里木湖',
        rank: 1,
        intro: '新疆面积最大的高山冷水湖，被誉为大西洋最后一滴眼泪，湖水湛蓝如宝石，四周雪山环绕花海遍地',
        coord: [81.1667, 44.6000],
        photoSpots: [
          { name: '赛里木湖南岸', pose: '拍摄湛蓝湖面与天山雪峰倒影' },
          { name: '月亮湾', pose: '拍摄湖湾曲线与远处雪山全景' },
          { name: '赛里木湖花海', pose: '以湖边野花和蓝色湖水为背景' }
        ],
        food: [
          { name: '赛里木湖冷水鱼', star: 5, desc: '湖产高白鲑现做刺身或清蒸，肉质鲜嫩' },
          { name: '哈萨克风干肉', star: 4, desc: '传统风干牛羊肉配馕食用' }
        ],
        duration: 6,
        ticket: 70,
        tip: '建议环湖自驾一圈约70公里，夏季湖边风大注意保暖，日出日落最美'
      },
      {
        name: '那拉提草原',
        rank: 2,
        intro: '世界四大草原之一，被誉为空中草原，海拔2000米以上，夏季碧草如茵野花遍地是伊犁草原的精华',
        coord: [84.0167, 43.3000],
        photoSpots: [
          { name: '空中草原观景台', pose: '拍摄辽阔草原与远处雪山的壮阔全景' },
          { name: '河谷草原', pose: '拍摄蜿蜒河流与翠绿草甸的柔美画面' },
          { name: '牧民转场', pose: '拍摄哈萨克牧民赶羊转场的壮观场景' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 5, desc: '草原现宰羔羊清水煮制，蘸盐手抓食用' },
          { name: '马奶酒', star: 4, desc: '哈萨克牧民自酿马奶酒，微酸解暑' }
        ],
        duration: 8,
        ticket: 95,
        tip: '景区内有空中草原和河谷草原两条线路，建议都走，区间车另收费'
      },
      {
        name: '薰衣草基地',
        rank: 3,
        intro: '伊犁霍城是世界三大薰衣草产地之一，每年6月中旬紫色花海一望无际，空气中弥漫着浪漫芬芳',
        coord: [80.8667, 44.0500],
        photoSpots: [
          { name: '薰衣草花海', pose: '在紫色花田中拍摄全身照' },
          { name: '薰衣草庄园', pose: '拍摄大片薰衣草与远处天山雪峰' },
          { name: '日落花田', pose: '日落时分拍摄金色光线下的紫色花海' }
        ],
        food: [
          { name: '薰衣草冰淇淋', star: 4, desc: '薰衣草风味的特色冰淇淋清香怡人' },
          { name: '霍城手抓饭', star: 4, desc: '当地特色手抓饭，羊肉粒粒分明' }
        ],
        duration: 3,
        ticket: 35,
        tip: '最佳花期为6月10日至6月25日，建议选择清晨或傍晚拍摄光线最柔和'
      },
      {
        name: '喀赞其民俗村',
        rank: 4,
        intro: '伊宁市内保存完好的维吾尔族传统聚居区，蓝色门窗和彩色民居充满异域风情，坐马车穿行小巷别有风味',
        coord: [81.3167, 43.9000],
        photoSpots: [
          { name: '蓝色小巷', pose: '拍摄蓝色门窗和彩色民居的异域风情' },
          { name: '马车巡游', pose: '在六轮马车上拍摄街巷生活场景' },
          { name: '民俗博物馆', pose: '拍摄维吾尔族传统建筑和生活用具' }
        ],
        food: [
          { name: '喀赞其冰淇淋', star: 5, desc: '维吾尔族手工冰淇淋，奶味浓郁口感绵密' },
          { name: '手工酸奶', star: 4, desc: '当地居民自制酸奶加蜂蜜食用' }
        ],
        duration: 3,
        ticket: 0,
        tip: '免费开放区域，建议乘坐马车游览更有味道，品尝冰淇淋是必做之事'
      },
      {
        name: '伊犁河',
        rank: 5,
        intro: '新疆水量最丰富的河流，傍晚日落时分金光洒满河面极为壮观，河畔公园是伊宁市民休闲的最佳去处',
        coord: [81.2833, 43.9000],
        photoSpots: [
          { name: '伊犁河大桥', pose: '在桥上拍摄日落金光映照河面' },
          { name: '河畔栈道', pose: '拍摄河水与两岸绿树的宁静画面' },
          { name: '伊犁河日落', pose: '拍摄金色夕阳缓缓落入河面的壮景' }
        ],
        food: [
          { name: '伊犁河烤鱼', star: 5, desc: '河边摊贩现烤河鱼，外焦里嫩配皮牙子' },
          { name: '伊犁薄皮包子', star: 4, desc: '维吾尔族传统薄皮包子，皮薄汤鲜' }
        ],
        duration: 2,
        ticket: 0,
        tip: '日落时分前往最美，建议提前半小时占好位置，河畔风大注意保暖'
      }
    ],
    secondary: [
      {
        name: '昭苏油菜花',
        rank: 6,
        intro: '每年7月昭苏百万亩油菜花盛开，金色花海与天山雪峰相映成趣，是中国最美的油菜花海之一',
        coord: [81.1333, 43.1500],
        photoSpots: [
          { name: '油菜花观景台', pose: '拍摄金色花海与远处雪山的壮阔全景' },
          { name: '花田小径', pose: '在油菜花丛间拍摄人像照片' }
        ],
        food: [
          { name: '昭苏菜籽油拌面', star: 4, desc: '用当地新鲜菜籽油制作的拌面特别香' },
          { name: '马肉纳仁', star: 4, desc: '哈萨克传统马肉手抓饭' }
        ],
        duration: 3,
        ticket: 0,
        tip: '7月为最佳花期，免费观赏，沿途多处均可停车拍照，自驾最方便'
      },
      {
        name: '特克斯八卦城',
        rank: 7,
        intro: '世界上唯一保存完整的八卦城，全城呈放射状八卦布局没有红绿灯，是易经文化与城市规划的奇妙结合',
        coord: [81.8333, 43.2167],
        photoSpots: [
          { name: '八卦公园观景塔', pose: '登高拍摄全城八卦放射状布局' },
          { name: '城中心广场', pose: '拍摄放射状道路从中心向四周延伸' }
        ],
        food: [
          { name: '特克斯薄皮包子', star: 4, desc: '当地特色薄皮包子馅料丰富' },
          { name: '熏马肠', star: 5, desc: '哈萨克传统冬季美食，马肉灌入马肠风干' }
        ],
        duration: 2,
        ticket: 0,
        tip: '建议登观景塔俯瞰全城才能真正感受八卦布局的震撼'
      },
      {
        name: '果子沟',
        rank: 8,
        intro: '连接伊犁河谷与赛里木湖的天然通道，两侧松林密布溪流潺潺，果子沟大桥是现代工程与自然的完美结合',
        coord: [81.2333, 44.2833],
        photoSpots: [
          { name: '果子沟大桥观景台', pose: '拍摄壮观的果子沟双塔斜拉桥' },
          { name: '沟底松林', pose: '拍摄苍翠的云杉林和蜿蜒溪流' }
        ],
        food: [
          { name: '果子沟野蘑菇拌面', star: 4, desc: '当地采摘的野生蘑菇配拌面' },
          { name: '烤肉串', star: 3, desc: '路边摊位的新鲜烤羊肉串' }
        ],
        duration: 2,
        ticket: 0,
        tip: '通常作为前往赛里木湖的途经景点，大桥观景台停车拍照即可'
      },
      {
        name: '夏塔古道',
        rank: 9,
        intro: '丝绸之路上最险峻的古道之一，穿越天山南北，沿途可见冰川草原森林温泉等多元自然景观',
        coord: [81.0500, 43.0500],
        photoSpots: [
          { name: '夏塔古道入口', pose: '拍摄古道两侧雪山和草甸' },
          { name: '木扎尔特冰川', pose: '远眺壮观的冰川全貌' }
        ],
        food: [
          { name: '牧民毡房奶茶', star: 4, desc: '沿途牧民毡房提供的热奶茶和馕' },
          { name: '手抓肉', star: 4, desc: '牧民现宰现煮的新鲜手抓肉' }
        ],
        duration: 8,
        ticket: 40,
        tip: '徒步路线较长建议量力而行，骑马进入更省力，注意防晒和防蚊虫'
      },
      {
        name: '琼库什台',
        rank: 10,
        intro: '隐藏在伊犁深山中的哈萨克牧民村落，木屋散落草原之间，被誉为人间秘境是摄影和徒步爱好者的天堂',
        coord: [82.5000, 43.1000],
        photoSpots: [
          { name: '琼库什台全景', pose: '拍摄木屋村落与周围草原雪山' },
          { name: '后山草甸', pose: '拍摄起伏的绿色草甸和远处天山' }
        ],
        food: [
          { name: '牧民手抓肉', star: 5, desc: '村民自家羊现宰烹饪最地道的手抓肉' },
          { name: '酸奶疙瘩', star: 3, desc: '哈萨克牧民自制的酸奶干制品' }
        ],
        duration: 8,
        ticket: 0,
        tip: '路况较差需越野车，村里住宿条件简陋但体验独特，建议住一晚看星空'
      }
    ],
    hidden: [
      {
        name: '托乎拉苏草原',
        rank: 11,
        intro: '伊宁周边鲜为人知的原生态草原，距离市区较近却游客稀少，保留着最纯粹的哈萨克游牧生活风貌',
        coord: [81.6833, 43.7500],
        photoSpots: [
          { name: '草原牧歌', pose: '拍摄散落的毡房和成群的牛羊' },
          { name: '日落草甸', pose: '夕阳下拍摄金色的草原剪影' }
        ],
        food: [
          { name: '哈萨克奶茶', star: 4, desc: '牧民毡房新鲜熬制的咸奶茶' }
        ],
        duration: 5,
        ticket: 0,
        tip: '距伊宁约50公里，自驾前往，适合想要避开人群的旅行者'
      },
      {
        name: '恰西森林公园',
        rank: 12,
        intro: '伊犁巩留县境内的原始森林景区，云杉参天溪流纵横，被誉为伊犁第一景，是徒步和露营的绝佳目的地',
        coord: [82.8833, 43.2500],
        photoSpots: [
          { name: '恰西画卷', pose: '拍摄被誉为恰西画卷的经典山水构图' },
          { name: '森林溪谷', pose: '拍摄原始云杉林和清澈溪水' }
        ],
        food: [
          { name: '野外烧烤', star: 4, desc: '景区内可自助烧烤，河边烤肉别有风味' }
        ],
        duration: 6,
        ticket: 30,
        tip: '路况一般建议SUV，适合露营但需自带装备，夏季蚊虫较多备好驱蚊液'
      },
      {
        name: '卡拉峻草原',
        rank: 13,
        intro: '以立体草原地貌闻名，起伏的山丘覆盖着翠绿草甸如同一幅油画，被联合国粮农组织命名为世界自然遗产',
        coord: [82.7833, 43.0500],
        photoSpots: [
          { name: '人体草原', pose: '拍摄如同人体曲线般起伏的草甸' },
          { name: '猎鹰台', pose: '从高处俯瞰整个立体草原的壮观景象' }
        ],
        food: [
          { name: '手抓肉', star: 4, desc: '景区内哈萨克牧民提供的传统手抓肉' },
          { name: '酥油茶', star: 3, desc: '哈萨克族酥油茶浓郁暖胃' }
        ],
        duration: 6,
        ticket: 80,
        tip: '景区分东喀拉峻和西喀拉峻两部分，建议都去，区间车费用另计'
      }
    ]
  },
  transport: {
    airport: '伊宁机场',
    mainStation: '伊宁站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 30, busCost: 2 },
    driving: { tollPerDay: 50, fuelPer100km: 55, parking: 15 }
  },
  accommodation: {
    luxury: [
      { name: '伊宁隆星国际大饭店', loc: '伊宁市中心', price: 780, star: 5, perks: '河景套房、中西餐厅、室内泳池' },
      { name: '伊犁天缘国际酒店', loc: '伊宁市开发区', price: 680, star: 5, perks: '花园景观、行政酒廊、免费接送机' }
    ],
    mid: [
      { name: '伊宁七彩花酒店', loc: '伊宁市解放路', price: 320, star: 4, perks: '近喀赞其、自助早餐、免费停车' },
      { name: '汉庭酒店伊宁上海城店', loc: '伊宁市上海城', price: 260, star: 4, perks: '连锁品质、交通便利、性价比高' }
    ],
    budget: [
      { name: '如家酒店伊宁解放路店', loc: '伊宁市解放路', price: 160, star: 3, perks: '市中心位置、标准服务、经济实惠' },
      { name: '格林豪泰伊宁火车站店', loc: '伊宁市火车站', price: 140, star: 3, perks: '近火车站、出行方便、干净卫生' }
    ]
  }
};

window.CITY_DATABASE['喀什'] = {
  code: 'kashgar',
  coord: [75.9893, 39.4677],
  bestSeason: '4月至10月，春季杏花开放，秋季瓜果丰收，帕米尔高原夏季最宜通行',
  routes: {
    classic: {
      name: '丝路古城经典五日游',
      days: 5,
      tagline: '从古城到帕米尔，踏上千年丝路之旅',
      spots: ['喀什古城', '艾提尕尔清真寺', '香妃墓', '喀什大巴扎', '帕米尔高原', '卡拉库里湖', '塔什库尔干石头城'],
      dayPlan: [
        { day: 1, theme: '古城探秘', list: ['喀什古城', '艾提尕尔清真寺', '香妃墓'], hours: 8 },
        { day: 2, theme: '巴扎淘宝', list: ['喀什大巴扎'], hours: 6 },
        { day: 3, theme: '帕米尔之路', list: ['帕米尔高原', '卡拉库里湖'], hours: 12 },
        { day: 4, theme: '塔县风光', list: ['塔什库尔干石头城'], hours: 10 },
        { day: 5, theme: '返程喀什', list: ['喀什古城'], hours: 6 }
      ]
    },
    niche: {
      name: '帕米尔高原探险四日游',
      days: 4,
      tagline: '深入帕米尔，触摸世界屋脊的壮美',
      spots: ['帕米尔高原', '慕士塔格峰', '塔什库尔干石头城', '卡拉库里湖', '红其拉甫口岸', '奥依塔克冰川公园'],
      dayPlan: [
        { day: 1, theme: '冰川序曲', list: ['奥依塔克冰川公园'], hours: 8 },
        { day: 2, theme: '慕士塔格之路', list: ['卡拉库里湖', '慕士塔格峰'], hours: 12 },
        { day: 3, theme: '塔县探秘', list: ['塔什库尔干石头城', '帕米尔高原'], hours: 10 },
        { day: 4, theme: '国门风采', list: ['红其拉甫口岸'], hours: 10 }
      ]
    },
    culture: {
      name: '喀什人文深度五日游',
      days: 5,
      tagline: '感受千年丝路文明的脉搏',
      spots: ['喀什古城', '艾提尕尔清真寺', '香妃墓', '喀什大巴扎', '达瓦昆沙漠', '喀什噶尔古城'],
      dayPlan: [
        { day: 1, theme: '千年古城', list: ['喀什古城', '艾提尕尔清真寺'], hours: 8 },
        { day: 2, theme: '丝路遗迹', list: ['香妃墓', '喀什大巴扎'], hours: 7 },
        { day: 3, theme: '沙漠绿洲', list: ['达瓦昆沙漠'], hours: 9 },
        { day: 4, theme: '古城深度游', list: ['喀什噶尔古城'], hours: 8 },
        { day: 5, theme: '巴扎告别', list: ['喀什大巴扎'], hours: 6 }
      ]
    },
    nature: {
      name: '帕米尔自然奇观四日游',
      days: 4,
      tagline: '冰川雪山湖泊，帕米尔的自然盛宴',
      spots: ['慕士塔格峰', '卡拉库里湖', '帕米尔高原', '奥依塔克冰川公园', '班迪尔蓝湖', '塔什库尔干石头城'],
      dayPlan: [
        { day: 1, theme: '冰川奇观', list: ['奥依塔克冰川公园'], hours: 9 },
        { day: 2, theme: '冰山之父', list: ['卡拉库里湖', '慕士塔格峰'], hours: 12 },
        { day: 3, theme: '高原秘境', list: ['帕米尔高原', '班迪尔蓝湖'], hours: 10 },
        { day: 4, theme: '石头城远眺', list: ['塔什库尔干石头城'], hours: 8 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '喀什古城',
        rank: 1,
        intro: '中国唯一以伊斯兰文化为特色的迷宫式城市街区，千年历史的土陶建筑与手工作坊交织，仿佛穿越回古丝绸之路',
        coord: [75.9893, 39.4700],
        photoSpots: [
          { name: '古城巷道', pose: '拍摄土陶色建筑与蓝色门窗的异域风情' },
          { name: '百年老茶馆', pose: '在百年茶馆中拍摄维族老人的悠闲生活' },
          { name: '古城高台民居', pose: '拍摄高台民居的壮观全景' }
        ],
        food: [
          { name: '缸子肉', star: 5, desc: '喀什特色小缸炖羊肉，汤鲜肉嫩配馕食用' },
          { name: '烤鸽子', star: 5, desc: '喀什特色烤乳鸽，外焦里嫩香料入味' }
        ],
        duration: 5,
        ticket: 0,
        tip: '古城大部分区域免费，建议清晨或傍晚游览，光线最适合拍照'
      },
      {
        name: '艾提尕尔清真寺',
        rank: 2,
        intro: '中国最大的清真寺，始建于1442年，可容纳万人礼拜，是喀什的地标建筑也是新疆伊斯兰文化的象征',
        coord: [75.9867, 39.4733],
        photoSpots: [
          { name: '清真寺正门', pose: '拍摄黄色正门与两侧宣礼塔的庄严全景' },
          { name: '礼拜广场', pose: '拍摄开阔的广场和清真寺全貌' },
          { name: '清真寺内部', pose: '拍摄精美的廊柱和装饰细节' }
        ],
        food: [
          { name: '艾提尕尔广场烤肉', star: 4, desc: '广场周边摊位的新鲜烤羊肉串' },
          { name: '石榴汁', star: 4, desc: '喀什鲜榨石榴汁，酸甜可口营养丰富' }
        ],
        duration: 1,
        ticket: 20,
        tip: '非礼拜时间可入内参观，需脱鞋且着装得体，女性建议戴头巾'
      },
      {
        name: '香妃墓',
        rank: 3,
        intro: '即阿帕霍加墓，是新疆最著名的伊斯兰教圣裔陵墓，建筑群精美绝伦，因传说乾隆帝的香妃葬于此而得名',
        coord: [76.0167, 39.4833],
        photoSpots: [
          { name: '陵墓建筑群', pose: '拍摄绿色琉璃瓦穹顶和精美瓷砖装饰' },
          { name: '礼拜殿', pose: '拍摄殿内精美的木雕和彩绘天花' },
          { name: '香妃墓花园', pose: '拍摄花园中的建筑全景' }
        ],
        food: [
          { name: '喀什烤包子', star: 4, desc: '景区附近的传统烤包子，皮脆肉香' },
          { name: '酸奶粽子', star: 3, desc: '喀什特色甜品，粽子浇酸奶和蜂蜜' }
        ],
        duration: 2,
        ticket: 30,
        tip: '建议请一位当地导游讲解历史故事更有意义，注意尊重宗教习俗'
      },
      {
        name: '喀什大巴扎',
        rank: 4,
        intro: '中亚最大的集市贸易中心之一，拥有两千多年历史，商品从丝绸到手工艺品应有尽有，是感受喀什生活的最佳场所',
        coord: [75.9833, 39.4767],
        photoSpots: [
          { name: '大巴扎全景', pose: '拍摄集市的热闹氛围和色彩斑斓的商品' },
          { name: '手工艺品区', pose: '拍摄铜器、地毯等传统手工艺品' },
          { name: '干果摊', pose: '拍摄堆积如山的各色干果和坚果' }
        ],
        food: [
          { name: '烤全羊', star: 5, desc: '大巴扎内整只烤全羊，外焦里嫩是喀什待客最高礼遇' },
          { name: '烤蛋', star: 4, desc: '喀什特色炭火烤鸡蛋，蛋白Q弹味道独特' }
        ],
        duration: 3,
        ticket: 0,
        tip: '周日是大巴扎日最为热闹，购买手工艺品记得讲价，干果可邮寄回家'
      },
      {
        name: '帕米尔高原',
        rank: 5,
        intro: '世界屋脊的一部分，平均海拔4000米以上，沿途经过白沙湖卡拉库里湖和慕士塔格峰，是中国最壮美的公路之旅',
        coord: [75.5000, 38.5000],
        photoSpots: [
          { name: '白沙湖', pose: '拍摄白色沙山与碧蓝湖水的奇幻对比' },
          { name: '中巴公路', pose: '拍摄壮阔的中巴友谊公路与雪山' },
          { name: '高原牧场', pose: '拍摄塔吉克牧民和牦牛的高原生活' }
        ],
        food: [
          { name: '塔吉克手抓肉', star: 4, desc: '塔吉克族传统清水煮牦牛肉' },
          { name: '恰玛古汤', star: 3, desc: '高原特色恰玛古（蔓菁）炖汤暖身' }
        ],
        duration: 12,
        ticket: 0,
        tip: '需办理边防证，建议提前适应海拔，备好防晒和保暖衣物，可在塔县住一晚'
      }
    ],
    secondary: [
      {
        name: '慕士塔格峰',
        rank: 6,
        intro: '海拔7546米的冰山之父，是帕米尔高原的标志性雪峰，从卡拉库里湖畔远眺其雄伟身姿令人震撼',
        coord: [75.1167, 38.2833],
        photoSpots: [
          { name: '卡拉库里湖畔', pose: '拍摄慕士塔格峰在湖面的完美倒影' },
          { name: '慕士塔格大本营', pose: '近距离拍摄冰川和雪峰全景' }
        ],
        food: [
          { name: '牧民毡房奶茶', star: 3, desc: '沿途柯尔克孜牧民提供的热奶茶' },
          { name: '馕配咸菜', star: 3, desc: '高原简餐，热馕配小菜简单满足' }
        ],
        duration: 4,
        ticket: 50,
        tip: '大本营海拔约4500米，注意高反，不建议剧烈运动，7-8月最适合前往'
      },
      {
        name: '塔什库尔干石头城',
        rank: 7,
        intro: '汉代蒲犁国王城遗址，建于高丘之上已有两千多年历史，是丝绸之路南道的重要驿站，残垣断壁沧桑壮观',
        coord: [75.2333, 37.7667],
        photoSpots: [
          { name: '石头城遗址', pose: '拍摄残垣断壁与远处雪山的沧桑画面' },
          { name: '石头城日落', pose: '夕阳下拍摄古城剪影与金草滩湿地' }
        ],
        food: [
          { name: '塔县手抓饭', star: 4, desc: '塔吉克族风味手抓饭，配料丰富' },
          { name: '牦牛肉干', star: 4, desc: '高原牦牛肉制成的肉干，嚼劲十足' }
        ],
        duration: 2,
        ticket: 30,
        tip: '日落时分最美，可与金草滩湿地一起游览，注意高原防晒和保暖'
      },
      {
        name: '卡拉库里湖',
        rank: 8,
        intro: '帕米尔高原上的高山冰蚀湖，海拔3600米，湖水随光线变幻颜色，倒映慕士塔格峰的完美身姿',
        coord: [75.0500, 38.4667],
        photoSpots: [
          { name: '湖畔营地', pose: '拍摄湖面倒影中的慕士塔格峰' },
          { name: '湖边栈道', pose: '拍摄变色湖水与远处连绵雪山' }
        ],
        food: [
          { name: '柯尔克孜手抓肉', star: 4, desc: '湖边牧民提供的传统手抓羊肉' },
          { name: '酥油茶', star: 3, desc: '高原牧民的热酥油茶驱寒暖胃' }
        ],
        duration: 2,
        ticket: 50,
        tip: '湖边风大温度低，即使夏季也需厚外套，日出和日落时分湖水最美'
      },
      {
        name: '红其拉甫口岸',
        rank: 9,
        intro: '中巴边境的海拔最高的陆路口岸，海拔4733米，国门庄严矗立，可远眺巴基斯坦方向的喀喇昆仑山脉',
        coord: [75.4167, 36.8500],
        photoSpots: [
          { name: '国门', pose: '在庄严的国门前拍摄纪念照' },
          { name: '界碑', pose: '拍摄中巴边境界碑和远处雪山' }
        ],
        food: [
          { name: '边防站热汤面', star: 3, desc: '边防站附近的热汤面暖身驱寒' }
        ],
        duration: 2,
        ticket: 0,
        tip: '需持边防证前往，海拔近5000米不宜久留，冬季可能封关需提前确认'
      },
      {
        name: '达瓦昆沙漠',
        rank: 10,
        intro: '喀什岳普湖县境内的沙漠旅游景区，沙丘连绵起伏，可体验骑骆驼滑沙等沙漠活动，是南疆最大的沙漠游乐场',
        coord: [76.7667, 39.1667],
        photoSpots: [
          { name: '沙漠驼队', pose: '拍摄骆驼队伍行进在金色沙丘上' },
          { name: '沙丘落日', pose: '夕阳下拍摄沙丘的光影和曲线美' }
        ],
        food: [
          { name: '沙漠烤全羊', star: 5, desc: '沙漠营地的篝火烤全羊体验独特' },
          { name: '烤馕', star: 3, desc: '沙漠中现烤的热馕配奶茶别有风味' }
        ],
        duration: 5,
        ticket: 45,
        tip: '建议下午前往避开正午高温，骑骆驼约100元/人，注意防晒和补水'
      }
    ],
    hidden: [
      {
        name: '奥依塔克冰川公园',
        rank: 11,
        intro: '喀什附近可达的低海拔冰川，冰川末端海拔仅2800米，雪崩瀑布和原始森林构成独特的高山峡谷景观',
        coord: [75.5833, 38.8833],
        photoSpots: [
          { name: '冰川观景台', pose: '拍摄冰川全貌和雪崩瀑布' },
          { name: '原始森林', pose: '拍摄高山原始针叶林和溪流' }
        ],
        food: [
          { name: '柯尔克孜手抓肉', star: 4, desc: '当地牧民的传统手抓羊肉' }
        ],
        duration: 5,
        ticket: 50,
        tip: '从喀什出发约3小时车程，路况较好，是体验冰川最便捷的方式'
      },
      {
        name: '喀什噶尔古城',
        rank: 12,
        intro: '喀什老城中尚未完全开发的原始区域，保留着最真实的维吾尔族居民生活状态，巷道幽深充满烟火气',
        coord: [75.9900, 39.4650],
        photoSpots: [
          { name: '老城巷道', pose: '拍摄原始土建筑和生活场景' },
          { name: '手工作坊', pose: '拍摄铜器、土陶等传统手工艺制作过程' }
        ],
        food: [
          { name: '家常拌面', star: 4, desc: '居民家中或小巷里的家常拌面最地道' },
          { name: '酸奶', star: 3, desc: '居民自制的新鲜酸奶酸甜可口' }
        ],
        duration: 3,
        ticket: 0,
        tip: '深入小巷探索更有味道，拍照请征得居民同意，尊重当地生活习惯'
      },
      {
        name: '班迪尔蓝湖',
        rank: 13,
        intro: '帕米尔高原深处的隐秘湖泊，湖水因矿物质呈现奇幻蓝色，四周荒漠高原环绕如同外星球般的超现实景观',
        coord: [75.3500, 37.9500],
        photoSpots: [
          { name: '蓝湖全景', pose: '拍摄蓝色湖水与荒漠高原的奇幻对比' },
          { name: '湖畔近景', pose: '近距离拍摄矿物质湖水的奇异色彩' }
        ],
        food: [
          { name: '塔吉克家常饭', star: 3, desc: '塔吉克族家常面食简单却温暖' }
        ],
        duration: 3,
        ticket: 0,
        tip: '路况较差需越野车，建议当地向导带路，海拔较高注意高原反应'
      }
    ]
  },
  transport: {
    airport: '喀什徕宁国际机场',
    mainStation: '喀什站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 25, busCost: 2 },
    driving: { tollPerDay: 40, fuelPer100km: 55, parking: 15 }
  },
  accommodation: {
    luxury: [
      { name: '喀什深业丽笙大酒店', loc: '喀什市中心', price: 780, star: 5, perks: '近古城、国际品牌、中西餐厅' },
      { name: '喀什其尼瓦克国际酒店', loc: '喀什市色满路', price: 680, star: 5, perks: '百年历史酒店、花园庭院、文化氛围浓' }
    ],
    mid: [
      { name: '喀什天缘商务酒店', loc: '喀什市解放路', price: 320, star: 4, perks: '近大巴扎、自助早餐、交通便利' },
      { name: '汉庭酒店喀什古城店', loc: '喀什市古城旁', price: 260, star: 4, perks: '步行可达古城、连锁品质、性价比高' }
    ],
    budget: [
      { name: '如家酒店喀什古城店', loc: '喀什市艾提尕尔', price: 160, star: 3, perks: '近古城和清真寺、经济实惠' },
      { name: '7天酒店喀什火车站店', loc: '喀什市火车站', price: 140, star: 3, perks: '近火车站、出行便利、基础住宿' }
    ]
  }
};

window.CITY_DATABASE['克拉玛依'] = {
  code: 'karamay',
  coord: [84.8733, 45.5906],
  bestSeason: '5月至10月，秋季魔鬼城日落最美，夏季气温适宜游览',
  routes: {
    classic: {
      name: '石油之城经典四日游',
      days: 4,
      tagline: '从魔鬼城到黑油山，探索戈壁中的奇迹',
      spots: ['世界魔鬼城', '黑油山', '克拉玛依河', '独山子大峡谷', '九龙潭', '白杨河大峡谷', '艾里克湖'],
      dayPlan: [
        { day: 1, theme: '城市印象', list: ['克拉玛依河', '九龙潭'], hours: 6 },
        { day: 2, theme: '魔鬼城探秘', list: ['世界魔鬼城'], hours: 10 },
        { day: 3, theme: '石油溯源', list: ['黑油山'], hours: 6 },
        { day: 4, theme: '峡谷奇观', list: ['独山子大峡谷'], hours: 8 }
      ]
    },
    niche: {
      name: '克拉玛依小众探险三日游',
      days: 3,
      tagline: '峡谷胡杨与荒漠，发现石油城另一面',
      spots: ['独山子大峡谷', '白杨河大峡谷', '艾里克湖', '乌尔禾胡杨林', '世界魔鬼城', '红山嘴'],
      dayPlan: [
        { day: 1, theme: '峡谷探索', list: ['独山子大峡谷', '白杨河大峡谷'], hours: 10 },
        { day: 2, theme: '荒漠绿洲', list: ['艾里克湖', '乌尔禾胡杨林'], hours: 9 },
        { day: 3, theme: '雅丹奇观', list: ['世界魔鬼城', '红山嘴'], hours: 8 }
      ]
    },
    culture: {
      name: '石油文化深度四日游',
      days: 4,
      tagline: '从石油工业到自然奇观的时空之旅',
      spots: ['黑油山', '克拉玛依博物馆', '世界魔鬼城', '克拉玛依河', '九龙潭', '世纪公园'],
      dayPlan: [
        { day: 1, theme: '石油传奇', list: ['黑油山', '克拉玛依博物馆'], hours: 7 },
        { day: 2, theme: '城市花园', list: ['克拉玛依河', '世纪公园'], hours: 6 },
        { day: 3, theme: '魔鬼城日落', list: ['世界魔鬼城'], hours: 10 },
        { day: 4, theme: '城市漫步', list: ['九龙潭'], hours: 5 }
      ]
    },
    nature: {
      name: '雅丹峡谷自然三日游',
      days: 3,
      tagline: '从雅丹地貌到河谷峡谷的地质奇观之旅',
      spots: ['世界魔鬼城', '独山子大峡谷', '白杨河大峡谷', '艾里克湖', '乌尔禾胡杨林'],
      dayPlan: [
        { day: 1, theme: '雅丹奇观', list: ['世界魔鬼城', '乌尔禾胡杨林'], hours: 10 },
        { day: 2, theme: '峡谷探秘', list: ['独山子大峡谷', '白杨河大峡谷'], hours: 10 },
        { day: 3, theme: '荒漠绿洲', list: ['艾里克湖'], hours: 7 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '世界魔鬼城',
        rank: 1,
        intro: '乌尔禾雅丹地貌群，因大风穿越时发出鬼哭狼嚎般声响而得名，形态各异的土丘在日落时分呈现奇幻光影',
        coord: [84.6833, 46.0833],
        photoSpots: [
          { name: '魔鬼城日落', pose: '拍摄夕阳下雅丹群的金红色剪影' },
          { name: '小火车观光', pose: '乘坐小火车穿越雅丹地貌拍摄' },
          { name: '魔鬼城航拍', pose: '从高处俯拍整个雅丹地貌的壮观布局' }
        ],
        food: [
          { name: '乌尔禾大盘鸡', star: 4, desc: '当地农家大盘鸡，鸡肉紧实土豆酥软' },
          { name: '克拉玛依牛肉面', star: 4, desc: '汤头浓郁牛肉大块的西北风味牛肉面' }
        ],
        duration: 4,
        ticket: 46,
        tip: '日落前1小时入园最佳，小火车另收费约52元，风沙大建议戴口罩和墨镜'
      },
      {
        name: '黑油山',
        rank: 2,
        intro: '克拉玛依城市的起源之地，天然沥青丘表面不断渗出黑色原油，是大自然赋予的石油奇观，具有极高的科普价值',
        coord: [84.8667, 45.6167],
        photoSpots: [
          { name: '油泉', pose: '拍摄天然渗出的原油泉眼和沥青池' },
          { name: '黑油山全景', pose: '从山顶拍摄整个沥青丘和克拉玛依城市远景' },
          { name: '石油雕塑', pose: '拍摄石油工人雕塑和工业遗址' }
        ],
        food: [
          { name: '克拉玛依牛肉面', star: 4, desc: '当地特色牛肉面，面条劲道汤头鲜美' },
          { name: '新疆拌面', star: 3, desc: '过油肉拌面，新疆经典家常面食' }
        ],
        duration: 2,
        ticket: 40,
        tip: '园区不大游览约1-2小时，注意不要踩踏沥青表面，夏季地面温度较高'
      },
      {
        name: '克拉玛依河',
        rank: 3,
        intro: '穿越克拉玛依市中心的人工河，将荒漠城市变为水城，两岸绿树成荫夜景璀璨，是戈壁中的生态奇迹',
        coord: [84.8733, 45.5906],
        photoSpots: [
          { name: '世纪大桥', pose: '在大桥上拍摄克拉玛依河两岸夜景' },
          { name: '河畔步道', pose: '拍摄河水与两岸绿化的生态画面' },
          { name: '九龙潭景区', pose: '拍摄九龙潭瀑布和园林景色' }
        ],
        food: [
          { name: '河畔烧烤', star: 4, desc: '克拉玛依河畔的夜市烧烤摊烤羊肉串' },
          { name: '手抓饭', star: 4, desc: '附近餐厅的正宗新疆手抓饭' }
        ],
        duration: 2,
        ticket: 0,
        tip: '傍晚前往最佳，可欣赏河两岸灯光亮起的璀璨夜景，免费开放'
      },
      {
        name: '独山子大峡谷',
        rank: 4,
        intro: '由天山雪水亿万年冲刷形成的壮阔峡谷，谷壁陡峭沟壑纵横，谷底河流蜿蜒，被誉为独库公路起点的自然奇观',
        coord: [84.8833, 44.3167],
        photoSpots: [
          { name: '峡谷观景台', pose: '俯拍壮阔的峡谷沟壑和谷底河流' },
          { name: '玻璃栈道', pose: '在玻璃栈道上拍摄脚下深渊的刺激画面' },
          { name: '峡谷日落', pose: '拍摄夕阳映照下峡谷壁的红色光影' }
        ],
        food: [
          { name: '独山子烤肉', star: 4, desc: '独山子当地特色烤肉，炭火慢烤香味浓郁' },
          { name: '拌面', star: 3, desc: '景区附近小店的过油肉拌面实惠管饱' }
        ],
        duration: 3,
        ticket: 30,
        tip: '峡谷内无遮阳注意防晒，玻璃栈道另收费，风大时注意安全'
      },
      {
        name: '九龙潭',
        rank: 5,
        intro: '克拉玛依河畔的标志性景区，九条龙形瀑布从高处倾泻而下汇入深潭，园林景色优美是市民休闲胜地',
        coord: [84.8833, 45.6000],
        photoSpots: [
          { name: '九龙潭瀑布', pose: '拍摄九条龙形瀑布同时倾泻的壮观景象' },
          { name: '园林步道', pose: '拍摄瀑布与周围园林景观的和谐画面' },
          { name: '潭水倒影', pose: '拍摄潭水中瀑布和绿树的倒影' }
        ],
        food: [
          { name: '克拉玛依手抓饭', star: 4, desc: '当地正宗手抓饭，羊肉大块胡萝卜甜' },
          { name: '烤包子', star: 3, desc: '附近小店现烤羊肉包子皮脆汁多' }
        ],
        duration: 1,
        ticket: 0,
        tip: '免费开放，与克拉玛依河可一起游览，夏季水量最大瀑布最为壮观'
      }
    ],
    secondary: [
      {
        name: '白杨河大峡谷',
        rank: 6,
        intro: '乌尔禾区境内的天然河谷峡谷，白杨河水穿谷而过两岸红柳胡杨密布，秋季金黄一片是摄影的天堂',
        coord: [84.6333, 46.0333],
        photoSpots: [
          { name: '河谷全景', pose: '拍摄白杨河穿谷而过的壮阔画面' },
          { name: '胡杨秋色', pose: '秋季拍摄金黄胡杨与红色岩壁的对比' }
        ],
        food: [
          { name: '乌尔禾烤肉', star: 4, desc: '当地农家烤肉串，选用当地羊肉鲜嫩' },
          { name: '拌面', star: 3, desc: '路边小店的家常拌面量大实惠' }
        ],
        duration: 3,
        ticket: 0,
        tip: '秋季景色最佳，适合自驾和徒步，路况较好但部分路段需小心'
      },
      {
        name: '克拉玛依博物馆',
        rank: 7,
        intro: '展示克拉玛依从荒漠戈壁到石油新城的发展历程，馆藏大量石油工业文物和历史照片，是了解油城历史的窗口',
        coord: [84.8667, 45.5833],
        photoSpots: [
          { name: '博物馆外观', pose: '拍摄博物馆独特的建筑设计' },
          { name: '石油工业展厅', pose: '拍摄石油钻探设备和历史文物展品' }
        ],
        food: [
          { name: '克拉玛依凉皮', star: 4, desc: '当地特色凉皮，酸辣爽口夏日必备' },
          { name: '大盘鸡', star: 4, desc: '附近餐厅的大盘鸡，鸡肉鲜嫩宽面入味' }
        ],
        duration: 2,
        ticket: 0,
        tip: '免费参观，周一闭馆，认真参观约1-2小时，可了解石油城的发展故事'
      },
      {
        name: '世纪公园',
        rank: 8,
        intro: '克拉玛依市中心的大型城市公园，绿化覆盖率极高，有音乐喷泉和人工湖，是市民休闲健身的好去处',
        coord: [84.8833, 45.5833],
        photoSpots: [
          { name: '音乐喷泉', pose: '拍摄夜晚灯光音乐喷泉的绚丽画面' },
          { name: '公园湖景', pose: '拍摄人工湖与周围城市绿化的倒影' }
        ],
        food: [
          { name: '公园夜市小吃', star: 3, desc: '夜市各类烧烤小吃和饮品' },
          { name: '烤馕', star: 3, desc: '公园附近馕坑现烤的新疆馕饼' }
        ],
        duration: 1,
        ticket: 0,
        tip: '免费开放，夜晚音乐喷泉值得一看，适合散步和休闲'
      },
      {
        name: '艾里克湖',
        rank: 9,
        intro: '克拉玛依附近的天然沙漠湖泊，湖水碧蓝周围是茫茫戈壁，形成荒漠中难得的绿洲景观，是观鸟的好去处',
        coord: [85.3833, 45.9167],
        photoSpots: [
          { name: '湖畔全景', pose: '拍摄碧蓝湖水与荒漠戈壁的强烈对比' },
          { name: '芦苇荡', pose: '拍摄湖边芦苇丛中的水鸟和夕阳' }
        ],
        food: [
          { name: '湖边烤鱼', star: 4, desc: '湖产鲜鱼现烤，肉质细嫩味道鲜美' }
        ],
        duration: 3,
        ticket: 0,
        tip: '自驾前往路况一般，湖边蚊虫较多夏季注意防蚊，日出日落最美'
      },
      {
        name: '乌尔禾胡杨林',
        rank: 10,
        intro: '乌尔禾区的天然胡杨林带，千年胡杨在荒漠中顽强生长，秋季金黄灿烂与雅丹地貌相映成趣',
        coord: [84.7167, 46.0500],
        photoSpots: [
          { name: '胡杨秋色', pose: '拍摄金黄胡杨与蓝天白云的绚烂画面' },
          { name: '枯木胡杨', pose: '拍摄枯而不倒的千年胡杨的苍劲姿态' }
        ],
        food: [
          { name: '乌尔禾大盘鸡', star: 4, desc: '当地农家乐的大盘鸡分量十足' }
        ],
        duration: 2,
        ticket: 0,
        tip: '10月中下旬为最佳观赏期，可与魔鬼城一起游览，距离仅几公里'
      }
    ],
    hidden: [
      {
        name: '红山嘴',
        rank: 11,
        intro: '克拉玛依市区附近的红色砂岩地貌，因山体呈鲜红色而得名，日出日落时分色彩更为艳丽是小众摄影地',
        coord: [84.9000, 45.5500],
        photoSpots: [
          { name: '红山嘴全景', pose: '拍摄红色山体与蓝天白云的鲜明对比' },
          { name: '日落红山', pose: '夕阳下拍摄红色岩壁更加浓烈的色彩' }
        ],
        food: [
          { name: '路边烤肉', star: 3, desc: '前往红山嘴路上的烤肉摊新鲜实惠' }
        ],
        duration: 2,
        ticket: 0,
        tip: '自驾前往，路不太好走但风景值得，建议傍晚前往光线最美'
      },
      {
        name: '克拉玛依河夜景',
        rank: 12,
        intro: '克拉玛依河在夜晚华灯初上时最为迷人，两岸建筑灯光倒映河面，桥上霓虹闪烁，是戈壁城市的浪漫名片',
        coord: [84.8733, 45.5900],
        photoSpots: [
          { name: '友谊大桥', pose: '拍摄大桥霓虹与河面倒影的璀璨夜景' },
          { name: '河畔灯光', pose: '拍摄两岸灯光映照下的克拉玛依河' }
        ],
        food: [
          { name: '夜市小吃', star: 4, desc: '河畔夜市的各类新疆小吃和烧烤' }
        ],
        duration: 2,
        ticket: 0,
        tip: '晚上8-10点灯光最亮最美，夏季可沿河散步，冬季灯光更为绚丽'
      },
      {
        name: '乌尔禾恐龙谷',
        rank: 13,
        intro: '乌尔禾地区是中国重要的恐龙化石产地，恐龙谷展示原位发掘的恐龙化石，是古生物爱好者的朝圣之地',
        coord: [84.7000, 46.0667],
        photoSpots: [
          { name: '恐龙化石遗址', pose: '拍摄原位发掘的恐龙化石和地层' },
          { name: '恐龙雕塑', pose: '在巨型恐龙复原雕塑前拍摄纪念照' }
        ],
        food: [
          { name: '乌尔禾拌面', star: 3, desc: '附近小镇的家常拌面朴实可口' }
        ],
        duration: 2,
        ticket: 30,
        tip: '与魔鬼城相距不远可安排同一天游览，适合带孩子的家庭'
      }
    ]
  },
  transport: {
    airport: '克拉玛依古海机场',
    mainStation: '克拉玛依站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 30, busCost: 2 },
    driving: { tollPerDay: 40, fuelPer100km: 55, parking: 10 }
  },
  accommodation: {
    luxury: [
      { name: '克拉玛依玛依塔柯酒店', loc: '克拉玛依区世纪大道', price: 780, star: 5, perks: '城市地标酒店、中西餐厅、健身中心' },
      { name: '克拉玛依和山国际酒店', loc: '克拉玛依区昆仑路', price: 680, star: 5, perks: '行政酒廊、室内泳池、商务配套齐全' }
    ],
    mid: [
      { name: '克拉玛依正天华厦大酒店', loc: '克拉玛依区准噶尔路', price: 350, star: 4, perks: '近市中心、自助早餐、免费停车' },
      { name: '汉庭酒店克拉玛依步行街店', loc: '克拉玛依区步行街', price: 240, star: 4, perks: '位置便利、连锁品质、性价比高' }
    ],
    budget: [
      { name: '如家酒店克拉玛依友谊馆店', loc: '克拉玛依区友谊路', price: 160, star: 3, perks: '市中心位置、出行方便、经济实惠' },
      { name: '7天酒店克拉玛依火车站店', loc: '克拉玛依区火车站', price: 130, star: 3, perks: '近火车站、交通便利、基础住宿' }
    ]
  }
};

window.CITY_DATABASE['库车'] = {
  code: 'kuqa',
  coord: [82.9617, 41.7261],
  bestSeason: '4月至10月，春季杏花开放，秋季天高气爽，大峡谷四季皆宜',
  routes: {
    classic: {
      name: '龟兹古国经典四日游',
      days: 4,
      tagline: '穿越千年龟兹，探访丝路明珠',
      spots: ['天山神秘大峡谷', '库车王府', '克孜尔千佛洞', '苏巴什古城', '大小龙池', '库车老城', '盐水沟'],
      dayPlan: [
        { day: 1, theme: '龟兹古城', list: ['库车王府', '库车老城'], hours: 7 },
        { day: 2, theme: '峡谷奇观', list: ['天山神秘大峡谷'], hours: 8 },
        { day: 3, theme: '千佛洞探秘', list: ['克孜尔千佛洞', '苏巴什古城'], hours: 9 },
        { day: 4, theme: '高山湖泊', list: ['大小龙池'], hours: 8 }
      ]
    },
    niche: {
      name: '库车小众探秘三日游',
      days: 3,
      tagline: '烽燧石窟与湿地，发现龟兹秘境',
      spots: ['天山神秘大峡谷', '克孜尔尕哈烽燧', '阿艾石窟', '康村湿地', '库车大寺', '盐水沟'],
      dayPlan: [
        { day: 1, theme: '古道遗迹', list: ['克孜尔尕哈烽燧', '阿艾石窟'], hours: 8 },
        { day: 2, theme: '峡谷湿地', list: ['天山神秘大峡谷', '康村湿地'], hours: 10 },
        { day: 3, theme: '老城寻古', list: ['库车大寺', '盐水沟'], hours: 7 }
      ]
    },
    culture: {
      name: '龟兹文化深度四日游',
      days: 4,
      tagline: '从千佛洞到烽燧，追溯丝路佛教文明',
      spots: ['克孜尔千佛洞', '苏巴什古城', '库车王府', '库车大寺', '克孜尔尕哈烽燧', '阿艾石窟'],
      dayPlan: [
        { day: 1, theme: '龟兹王宫', list: ['库车王府', '库车大寺'], hours: 7 },
        { day: 2, theme: '佛教艺术', list: ['克孜尔千佛洞', '克孜尔尕哈烽燧'], hours: 9 },
        { day: 3, theme: '古城遗址', list: ['苏巴什古城', '阿艾石窟'], hours: 8 },
        { day: 4, theme: '丝路余韵', list: ['库车老城'], hours: 6 }
      ]
    },
    nature: {
      name: '天山南麓自然三日游',
      days: 3,
      tagline: '峡谷龙池与雅丹，天山南麓的自然画卷',
      spots: ['天山神秘大峡谷', '大小龙池', '盐水沟', '康村湿地', '红石林'],
      dayPlan: [
        { day: 1, theme: '红色峡谷', list: ['天山神秘大峡谷', '盐水沟'], hours: 9 },
        { day: 2, theme: '高山龙池', list: ['大小龙池'], hours: 8 },
        { day: 3, theme: '湿地奇石', list: ['康村湿地', '红石林'], hours: 8 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '天山神秘大峡谷',
        rank: 1,
        intro: '天山南麓的红色砂岩峡谷，全长约5公里，谷壁高耸形态万千，红色岩体在阳光照射下如梦似幻堪称地质奇观',
        coord: [83.3167, 42.0333],
        photoSpots: [
          { name: '峡谷入口', pose: '拍摄红色砂岩壁与蓝天形成的强烈色彩对比' },
          { name: '天使之吻', pose: '在标志性的一线天处拍摄天空与岩壁' },
          { name: '谷中幽径', pose: '拍摄曲折幽深的峡谷通道和光影变化' }
        ],
        food: [
          { name: '库车大馕', star: 5, desc: '库车特产超大馕饼，外脆内软带有芝麻香' },
          { name: '烤蛋', star: 4, desc: '库车特色炭火烤鸡蛋，蛋白嫩滑味道独特' }
        ],
        duration: 4,
        ticket: 45,
        tip: '雨季可能关闭因有洪水风险，穿防滑鞋谷底有积水，上午光线最美'
      },
      {
        name: '库车王府',
        rank: 2,
        intro: '清朝册封的库车世袭亲王府邸，占地面积广阔建筑风格融合中原与伊斯兰特色，是了解龟兹历史和王府文化的重要场所',
        coord: [82.9667, 41.7167],
        photoSpots: [
          { name: '王府大门', pose: '拍摄宏伟的王府大门和中式飞檐建筑' },
          { name: '王府花园', pose: '拍摄花园中的维吾尔族风格建筑和庭院' },
          { name: '王爷大殿', pose: '拍摄大殿内部的陈设和历史文物展品' }
        ],
        food: [
          { name: '库车抓饭', star: 4, desc: '当地特色手抓饭，米饭粒粒分明配料丰富' },
          { name: '库车烤包子', star: 4, desc: '库车传统烤包子，皮薄馅大汁多味美' }
        ],
        duration: 2,
        ticket: 55,
        tip: '建议请导游讲解更有深度，王府内有民俗表演可观赏，夏季注意防晒'
      },
      {
        name: '克孜尔千佛洞',
        rank: 3,
        intro: '中国开凿最早的大型石窟群，始建于公元3世纪，比敦煌莫高窟还早一个世纪，是龟兹佛教艺术的杰出代表',
        coord: [82.5000, 41.7833],
        photoSpots: [
          { name: '石窟群全景', pose: '拍摄明屋塔格山崖面上的石窟群壮观全景' },
          { name: '鸠摩罗什雕像', pose: '在著名高僧鸠摩罗什雕像前拍摄纪念照' },
          { name: '石窟壁画', pose: '拍摄允许参观的洞窟中的精美壁画' }
        ],
        food: [
          { name: '拜城烤鸡', star: 4, desc: '附近拜城县的特色烤鸡，外焦里嫩' },
          { name: '酸奶', star: 4, desc: '当地牧民自制的新鲜酸奶浓稠酸甜' }
        ],
        duration: 3,
        ticket: 70,
        tip: '部分洞窟需预约参观，窟内禁止拍照和触摸壁画，建议请讲解员'
      },
      {
        name: '苏巴什古城',
        rank: 4,
        intro: '唐代著名佛寺遗址，玄奘西行取经曾在此讲经说法，残存的佛塔和城墙见证了龟兹佛教的辉煌历史',
        coord: [83.0167, 41.8167],
        photoSpots: [
          { name: '佛塔遗址', pose: '拍摄残存的佛塔与远处天山的苍凉画面' },
          { name: '古城墙全景', pose: '拍摄古城残垣和辽阔大地的历史沧桑感' },
          { name: '日落古城', pose: '夕阳下拍摄古城遗址的金色剪影' }
        ],
        food: [
          { name: '库车大馕配烤肉', star: 4, desc: '路边摊的大馕配新鲜烤肉简单美味' },
          { name: '凉粉', star: 3, desc: '当地特色凉粉酸辣爽口适合夏季' }
        ],
        duration: 2,
        ticket: 30,
        tip: '遗址内无遮阳夏季极热，建议清晨或傍晚前往，注意保护文物'
      },
      {
        name: '库车老城',
        rank: 5,
        intro: '保留着浓厚维吾尔族风情的传统城区，土黄色民居巷道纵横，热斯坦路是最有生活气息的老街充满烟火气',
        coord: [82.9500, 41.7167],
        photoSpots: [
          { name: '热斯坦路', pose: '拍摄色彩斑斓的民居门窗和生活场景' },
          { name: '老城巴扎', pose: '拍摄热闹的街巷集市和传统手工艺人' },
          { name: '老城茶馆', pose: '拍摄老茶馆中维族老人闲聊的画面' }
        ],
        food: [
          { name: '库车大馕', star: 5, desc: '老城中馕坑现烤的正宗库车大馕' },
          { name: '缸子肉', star: 4, desc: '老城小店的缸子炖羊肉汤鲜肉嫩' }
        ],
        duration: 3,
        ticket: 0,
        tip: '清晨或傍晚去最有生活气息，拍照请尊重当地居民，热斯坦路最出片'
      }
    ],
    secondary: [
      {
        name: '大小龙池',
        rank: 6,
        intro: '天山南麓的两个高山湖泊，大龙池碧绿如翡翠小龙池清幽如明镜，四周松林环绕是独库公路上的明珠',
        coord: [83.5000, 42.1833],
        photoSpots: [
          { name: '大龙池全景', pose: '拍摄碧绿湖水与周围松林雪山的完美倒影' },
          { name: '小龙池', pose: '拍摄幽静的小龙池与原始森林' }
        ],
        food: [
          { name: '路边手抓饭', star: 3, desc: '独库公路旁小店的手抓饭简单实惠' },
          { name: '烤肉串', star: 3, desc: '公路边烧烤摊的新鲜烤羊肉串' }
        ],
        duration: 2,
        ticket: 0,
        tip: '位于独库公路沿线适合中途停留，海拔约2400米夏季凉爽，秋季色彩最美'
      },
      {
        name: '库车大寺',
        rank: 7,
        intro: '库车最大的清真寺，始建于明代，建筑融合了维吾尔族传统与伊斯兰风格，是库车穆斯林的重要礼拜场所',
        coord: [82.9500, 41.7267],
        photoSpots: [
          { name: '大寺正门', pose: '拍摄高大的宣礼塔和精美的门面装饰' },
          { name: '礼拜殿内部', pose: '拍摄殿内的木质廊柱和天花彩绘' }
        ],
        food: [
          { name: '寺旁烤包子', star: 4, desc: '清真寺附近摊位的新鲜烤包子' },
          { name: '酸奶冰淇淋', star: 3, desc: '当地手工酸奶制成的特色冰淇淋' }
        ],
        duration: 1,
        ticket: 15,
        tip: '非礼拜时间可参观内部，需脱鞋进入，着装得体尊重宗教习俗'
      },
      {
        name: '盐水沟',
        rank: 8,
        intro: '库车至独库公路入口处的天然雅丹地貌，红褐色山体形态各异如同外星球表面，是独库公路起点的标志景观',
        coord: [83.1833, 41.9500],
        photoSpots: [
          { name: '盐水沟全景', pose: '拍摄红褐色雅丹山体群的壮观全景' },
          { name: '雅丹特写', pose: '近距离拍摄风蚀形成的奇特岩石纹理' }
        ],
        food: [
          { name: '库车拌面', star: 3, desc: '路边小店的过油肉拌面管饱实惠' }
        ],
        duration: 1,
        ticket: 0,
        tip: '位于独库公路入口处，免费路边停车拍照即可，适合自驾途中停留'
      },
      {
        name: '红石林',
        rank: 9,
        intro: '库车附近的红色石林地貌，石柱林立形态各异，因含铁矿物氧化呈现红色，与云南石林的灰白色形成鲜明对比',
        coord: [83.3500, 41.8833],
        photoSpots: [
          { name: '石林全景', pose: '拍摄红色石柱群与蓝天的大气画面' },
          { name: '石柱特写', pose: '近距离拍摄红色石柱的纹理和形态' }
        ],
        food: [
          { name: '烤馕', star: 3, desc: '路边摊的新鲜烤馕酥脆咸香' }
        ],
        duration: 2,
        ticket: 0,
        tip: '位置相对偏僻建议自驾，游客较少可独享拍照，注意防晒'
      },
      {
        name: '库车博物馆',
        rank: 10,
        intro: '展示龟兹文化和丝路历史的小型博物馆，馆藏出土文物和历史文献，是了解库车历史的前站',
        coord: [82.9500, 41.7200],
        photoSpots: [
          { name: '博物馆外观', pose: '拍摄博物馆的建筑设计' },
          { name: '龟兹文物展厅', pose: '拍摄出土的龟兹文物和佛教艺术品' }
        ],
        food: [
          { name: '库车凉粉', star: 3, desc: '博物馆附近的特色凉粉酸辣开胃' },
          { name: '馕包肉', star: 4, desc: '馕上铺满炖肉和汤汁的库车特色' }
        ],
        duration: 1,
        ticket: 0,
        tip: '免费参观，游览约1小时，建议在前往其他景点前先来了解历史背景'
      }
    ],
    hidden: [
      {
        name: '克孜尔尕哈烽燧',
        rank: 11,
        intro: '汉代军事通信设施遗址，矗立两千年仍保存完好，是丝绸之路上现存最古老最高的烽燧，具有重要的历史价值',
        coord: [82.7333, 41.7500],
        photoSpots: [
          { name: '烽燧全景', pose: '拍摄矗立荒漠中的千年烽燧全貌' },
          { name: '烽燧日落', pose: '夕阳下拍摄烽燧的金色剪影' }
        ],
        food: [
          { name: '路边烤肉', star: 3, desc: '前往烽燧路上的小摊位烤肉串' }
        ],
        duration: 1,
        ticket: 20,
        tip: '可与克孜尔千佛洞安排同一天，位置相对偏远需包车或自驾前往'
      },
      {
        name: '阿艾石窟',
        rank: 12,
        intro: '隐藏在天山峡谷深处的小型石窟，壁画融合了汉风和龟兹风格，是唐代安西都护府时期东西文化交融的见证',
        coord: [83.2833, 42.0667],
        photoSpots: [
          { name: '石窟入口', pose: '拍摄隐藏在峡谷中的石窟入口' },
          { name: '壁画残存', pose: '拍摄允许参观区域的壁画残存' }
        ],
        food: [
          { name: '峡谷野餐', star: 3, desc: '建议自带食物在峡谷中野餐' }
        ],
        duration: 2,
        ticket: 20,
        tip: '位置隐蔽需当地向导带路，窟内禁止拍照，保护文物请勿触摸壁画'
      },
      {
        name: '康村湿地',
        rank: 13,
        intro: '库车城郊的天然湿地，水鸟栖息芦苇摇曳，是荒漠中难得的生态绿洲，秋季候鸟迁徙时节最为壮观',
        coord: [82.8500, 41.6500],
        photoSpots: [
          { name: '湿地全景', pose: '拍摄湿地水面与远处天山的宁静画面' },
          { name: '芦苇水鸟', pose: '拍摄芦苇丛中的水鸟和秋日金色芦苇' }
        ],
        food: [
          { name: '库车酸奶', star: 3, desc: '当地牧民自制新鲜酸奶浓稠可口' }
        ],
        duration: 2,
        ticket: 0,
        tip: '秋季候鸟季节最佳，适合喜欢自然和观鸟的旅行者，建议带望远镜'
      }
    ]
  },
  transport: {
    airport: '库车龟兹机场',
    mainStation: '库车站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 25, busCost: 2 },
    driving: { tollPerDay: 30, fuelPer100km: 55, parking: 10 }
  },
  accommodation: {
    luxury: [
      { name: '库车天缘国际酒店', loc: '库车市天山路', price: 680, star: 5, perks: '当地最佳酒店、中西餐厅、花园景观' },
      { name: '库车饭店', loc: '库车市文化路', price: 580, star: 5, perks: '老牌酒店、位置优越、设施齐全' }
    ],
    mid: [
      { name: '库车龟兹宾馆', loc: '库车市龟兹路', price: 280, star: 4, perks: '龟兹文化主题、近老城、自助早餐' },
      { name: '汉庭酒店库车天山路店', loc: '库车市天山路', price: 220, star: 4, perks: '连锁品质、交通便利、性价比高' }
    ],
    budget: [
      { name: '如家酒店库车火车站店', loc: '库车市火车站', price: 140, star: 3, perks: '近火车站、出行方便、经济实惠' },
      { name: '7天酒店库车文化路店', loc: '库车市文化路', price: 120, star: 3, perks: '市中心位置、基础住宿、价格实惠' }
    ]
  }
};

window.CITY_DATABASE['阿勒泰'] = {
  code: 'altay',
  coord: [88.1395, 47.8484],
  bestSeason: '6月至10月，夏季草原花海，秋季喀纳斯层林尽染，冬季可滑雪泡温泉',
  routes: {
    classic: {
      name: '喀纳斯经典五日游',
      days: 5,
      tagline: '从五彩滩到喀纳斯，探秘北疆最美风光',
      spots: ['喀纳斯湖', '禾木村', '可可托海', '五彩滩', '白哈巴村', '禾木草原', '布尔津河堤夜市'],
      dayPlan: [
        { day: 1, theme: '五彩日落', list: ['五彩滩'], hours: 7 },
        { day: 2, theme: '喀纳斯仙境', list: ['喀纳斯湖'], hours: 10 },
        { day: 3, theme: '图瓦人村落', list: ['禾木村'], hours: 10 },
        { day: 4, theme: '西北第一村', list: ['白哈巴村'], hours: 8 },
        { day: 5, theme: '可可托海', list: ['可可托海'], hours: 9 }
      ]
    },
    niche: {
      name: '阿勒泰小众深度四日游',
      days: 4,
      tagline: '白哈巴、白沙湖与峡谷，发现北疆秘境',
      spots: ['白哈巴村', '白沙湖', '额尔齐斯大峡谷', '五彩滩', '阿拉善温泉', '喀纳斯湖'],
      dayPlan: [
        { day: 1, theme: '五彩雅丹', list: ['五彩滩'], hours: 6 },
        { day: 2, theme: '西北第一村', list: ['白哈巴村', '白沙湖'], hours: 10 },
        { day: 3, theme: '峡谷温泉', list: ['额尔齐斯大峡谷', '阿拉善温泉'], hours: 10 },
        { day: 4, theme: '喀纳斯深度', list: ['喀纳斯湖'], hours: 10 }
      ]
    },
    culture: {
      name: '图瓦文化深度四日游',
      days: 4,
      tagline: '走进图瓦人村落，体验北疆游牧文化',
      spots: ['禾木村', '喀纳斯湖', '白哈巴村', '五彩滩', '哈萨克民俗村', '禾木草原'],
      dayPlan: [
        { day: 1, theme: '雅丹文化', list: ['五彩滩'], hours: 7 },
        { day: 2, theme: '喀纳斯图瓦人', list: ['喀纳斯湖'], hours: 10 },
        { day: 3, theme: '禾木生活', list: ['禾木村'], hours: 10 },
        { day: 4, theme: '边境村落', list: ['白哈巴村'], hours: 9 }
      ]
    },
    nature: {
      name: '北疆自然奇观四日游',
      days: 4,
      tagline: '湖泊峡谷草原，北疆自然的极致呈现',
      spots: ['可可托海', '额尔齐斯大峡谷', '五彩滩', '喀纳斯湖', '白沙湖', '禾木村'],
      dayPlan: [
        { day: 1, theme: '可可托海奇观', list: ['可可托海', '额尔齐斯大峡谷'], hours: 10 },
        { day: 2, theme: '五彩日落', list: ['五彩滩', '白沙湖'], hours: 8 },
        { day: 3, theme: '喀纳斯仙境', list: ['喀纳斯湖'], hours: 10 },
        { day: 4, theme: '禾木晨曦', list: ['禾木村'], hours: 10 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '喀纳斯湖',
        rank: 1,
        intro: '中国最深的高山淡水湖，最大深度188米，因水怪传说闻名遐迩，秋季层林尽染时湖水变色如同仙境',
        coord: [87.0167, 48.7167],
        photoSpots: [
          { name: '观鱼台', pose: '登高拍摄喀纳斯湖全景和变色湖水' },
          { name: '喀纳斯湖畔', pose: '拍摄碧蓝湖水与周围金色白桦林' },
          { name: '月亮湾', pose: '拍摄标志性的月亮形河湾和秋色' }
        ],
        food: [
          { name: '喀纳斯冷水鱼', star: 5, desc: '湖产哲罗鲑等冷水鱼清蒸或红烧极为鲜美' },
          { name: '图瓦人奶茶', star: 4, desc: '图瓦人传统咸奶茶配酥油和包尔萨克' }
        ],
        duration: 8,
        ticket: 160,
        tip: '建议住景区内体验晨雾和日落，区间车另购70元，秋季（9月底-10月初）最美'
      },
      {
        name: '禾木村',
        rank: 2,
        intro: '中国最美的六大古村之一，图瓦人聚居的原始村落，木屋炊烟晨雾白桦林构成一幅绝美的田园画卷',
        coord: [87.1333, 48.5167],
        photoSpots: [
          { name: '禾木晨雾', pose: '清晨拍摄木屋炊烟与晨雾缭绕的仙境画面' },
          { name: '禾木河', pose: '拍摄清澈河水与两岸金色白桦林' },
          { name: '禾木观景台', pose: '登高俯拍整个禾木村的全景' }
        ],
        food: [
          { name: '禾木手抓肉', star: 5, desc: '图瓦人传统手抓肉，肉质鲜嫩无膻味' },
          { name: '禾木酸奶', star: 4, desc: '图瓦人自制酸奶浓稠酸甜配蜂蜜' }
        ],
        duration: 10,
        ticket: 50,
        tip: '建议住1-2晚体验晨雾和星空，秋季最美但住宿紧张需提前预订'
      },
      {
        name: '可可托海',
        rank: 3,
        intro: '额尔齐斯河源头的高山峡谷景区，神钟山巍峨矗立白桦林环绕，三号矿坑曾为中国偿还巨额债务立下功勋',
        coord: [89.5333, 47.3833],
        photoSpots: [
          { name: '神钟山', pose: '拍摄标志性花岗岩山峰的巍峨全景' },
          { name: '额尔齐斯河谷', pose: '拍摄河谷白桦林与远处雪山的秋色' },
          { name: '三号矿坑', pose: '拍摄壮观的露天矿坑和稀有矿脉' }
        ],
        food: [
          { name: '额尔齐斯河冷水鱼', star: 5, desc: '河产冷水鱼清蒸肉质细嫩鲜美' },
          { name: '哈萨克手抓肉', star: 4, desc: '哈萨克牧民的传统手抓羊肉' }
        ],
        duration: 6,
        ticket: 45,
        tip: '区间车另购36元，三号矿坑需单独购票，秋季白桦林最美'
      },
      {
        name: '五彩滩',
        rank: 4,
        intro: '额尔齐斯河畔的雅丹地貌景区，河岸两侧岩石呈现红黄蓝白绿五彩斑斓，日落时分色彩最为绚烂壮观',
        coord: [88.1333, 47.4000],
        photoSpots: [
          { name: '五彩滩日落', pose: '夕阳下拍摄五彩岩壁与额尔齐斯河' },
          { name: '观景台全景', pose: '从高处拍摄雅丹地貌与河谷的全景' },
          { name: '雅丹特写', pose: '近距离拍摄彩色岩石的纹理和色彩' }
        ],
        food: [
          { name: '布尔津烤鱼', star: 5, desc: '布尔津县河堤夜市的烤冷水鱼外焦里嫩' },
          { name: '格瓦斯', star: 4, desc: '布尔津特色蜂蜜发酵饮品酸甜解暑' }
        ],
        duration: 2,
        ticket: 45,
        tip: '日落前1-2小时入园最佳，蚊虫极多务必穿长袖长裤并喷驱蚊液'
      },
      {
        name: '禾木草原',
        rank: 5,
        intro: '禾木村周边的高山草甸，夏季野花遍地牛羊悠然，秋季金黄一片，是骑马和徒步的理想场所',
        coord: [87.1667, 48.5333],
        photoSpots: [
          { name: '草原花海', pose: '拍摄遍地野花与远处雪山的壮丽画面' },
          { name: '骑马草原', pose: '在草原上骑马拍摄英姿飒爽的照片' },
          { name: '草原日落', pose: '夕阳下拍摄金色草甸和远山剪影' }
        ],
        food: [
          { name: '牧民毡房手抓肉', star: 5, desc: '草原牧民现煮的新鲜手抓肉' },
          { name: '马奶酒', star: 4, desc: '牧民自酿马奶酒微酸解渴' }
        ],
        duration: 4,
        ticket: 0,
        tip: '骑马约100-200元/小时，建议清晨前往看晨雾，注意防晒防蚊'
      }
    ],
    secondary: [
      {
        name: '白哈巴村',
        rank: 6,
        intro: '中国最西北的村落，与哈萨克斯坦隔河相望，图瓦人木屋散落在白桦林间，被誉为西北第一村',
        coord: [86.8167, 48.8333],
        photoSpots: [
          { name: '白哈巴全景', pose: '拍摄西北第一村的全景和界河' },
          { name: '白桦林小道', pose: '在白桦林间小道拍摄秋日金色画面' }
        ],
        food: [
          { name: '图瓦人手抓肉', star: 4, desc: '图瓦族传统手抓肉配皮牙子洋葱' },
          { name: '奶疙瘩', star: 3, desc: '图瓦人自制的奶酪干制品咸香可口' }
        ],
        duration: 4,
        ticket: 50,
        tip: '需办理边防证，从喀纳斯乘车前往约1小时，秋季白桦林最美'
      },
      {
        name: '白沙湖',
        rank: 7,
        intro: '阿勒泰哈巴河县的沙漠湖泊，碧蓝湖水被白色沙丘环绕，湖边红柳芦苇摇曳是荒漠中的奇幻绿洲',
        coord: [86.5333, 48.6833],
        photoSpots: [
          { name: '白沙湖全景', pose: '拍摄碧蓝湖水与白色沙丘的奇幻对比' },
          { name: '湖畔芦苇', pose: '拍摄芦苇丛中的湖水和远处沙丘' }
        ],
        food: [
          { name: '哈巴河烤肉', star: 4, desc: '哈巴河县的烤羊肉串鲜嫩入味' },
          { name: '手抓饭', star: 3, desc: '当地小店的家常手抓饭' }
        ],
        duration: 2,
        ticket: 45,
        tip: '需办理边防证，蚊虫极多必须穿长袖长裤，秋季色彩最丰富'
      },
      {
        name: '额尔齐斯大峡谷',
        rank: 8,
        intro: '可可托海景区的核心部分，额尔齐斯河穿谷而过两岸花岗岩奇峰耸立，白桦林与河水交相辉映秋色醉人',
        coord: [89.5500, 47.3667],
        photoSpots: [
          { name: '峡谷全景', pose: '拍摄峡谷两侧花岗岩奇峰和河谷白桦林' },
          { name: '白桦林', pose: '在金色白桦林中拍摄秋日浪漫画面' }
        ],
        food: [
          { name: '冷水鱼', star: 4, desc: '额尔齐斯河产冷水鱼清蒸极鲜' },
          { name: '哈萨克奶茶', star: 3, desc: '沿途牧民提供的热奶茶' }
        ],
        duration: 4,
        ticket: 0,
        tip: '包含在可可托海景区内，建议徒步游览更能感受峡谷之美'
      },
      {
        name: '阿拉善温泉',
        rank: 9,
        intro: '阿勒泰福海县境内的天然温泉，水温常年保持在40-60度，四周草原环绕是旅途中泡汤解乏的好去处',
        coord: [87.5000, 47.1167],
        photoSpots: [
          { name: '温泉全景', pose: '拍摄温泉池与周围草原风光' },
          { name: '露天温泉', pose: '在露天温泉中拍摄与自然的融合' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 4, desc: '温泉附近牧民提供的手抓羊肉' }
        ],
        duration: 3,
        ticket: 80,
        tip: '自带泳衣和洗漱用品，泡温泉不宜超过20分钟/次，高血压患者慎入'
      },
      {
        name: '布尔津河堤夜市',
        rank: 10,
        intro: '布尔津县城河堤路上的夜市一条街，以烤冷水鱼和格瓦斯闻名，是来阿勒泰旅游必到的美食打卡地',
        coord: [86.8833, 47.7000],
        photoSpots: [
          { name: '夜市全景', pose: '拍摄热闹的河堤夜市和灯火通明的摊位' },
          { name: '烤鱼特写', pose: '拍摄现烤的额尔齐斯河冷水鱼' }
        ],
        food: [
          { name: '烤冷水鱼', star: 5, desc: '河堤夜市招牌，整条冷水鱼炭烤外焦里嫩' },
          { name: '格瓦斯', star: 5, desc: '布尔津特色蜂蜜发酵饮料酸甜清凉' }
        ],
        duration: 2,
        ticket: 0,
        tip: '夏季每晚营业，烤鱼按条计价约50-100元，建议多尝试几家比较'
      }
    ],
    hidden: [
      {
        name: '喀纳斯观鱼台',
        rank: 11,
        intro: '喀纳斯湖西岸海拔2030米的观景点，需攀登1068级台阶到达，可俯瞰整个喀纳斯湖全貌和周围群山',
        coord: [87.0000, 48.7333],
        photoSpots: [
          { name: '观鱼台顶', pose: '从最高处拍摄喀纳斯湖完美全景' },
          { name: '台阶途中', pose: '在攀登途中拍摄湖面与山林的层次' }
        ],
        food: [
          { name: '景区内简餐', star: 3, desc: '景区餐厅提供的简餐价格偏高但可接受' }
        ],
        duration: 3,
        ticket: 20,
        tip: '攀登1068级台阶约需40分钟，体力一般者可分段休息，上午光线最佳'
      },
      {
        name: '可可托海三号矿坑',
        rank: 12,
        intro: '曾为中国偿还苏联债务的功勋矿坑，开采出数十种稀有金属矿物，矿坑规模宏大具有极高的历史和科普价值',
        coord: [89.5500, 47.3833],
        photoSpots: [
          { name: '三号矿坑全景', pose: '拍摄壮观的螺旋形露天矿坑全貌' },
          { name: '矿石标本', pose: '拍摄展馆中的稀有矿石标本' }
        ],
        food: [
          { name: '可可托海镇拌面', star: 3, desc: '小镇上的家常拌面经济实惠' }
        ],
        duration: 2,
        ticket: 45,
        tip: '需单独购票，建议请讲解员了解矿坑的历史故事更有意义'
      },
      {
        name: '青河三道海子',
        rank: 13,
        intro: '青河县境内海拔2600米的三个高山湖泊，周围草原花海环绕人迹罕至，是阿勒泰地区最隐秘的世外桃源',
        coord: [90.3833, 46.8833],
        photoSpots: [
          { name: '三道海子全景', pose: '拍摄三个高山湖泊与周围草原花海' },
          { name: '湖畔花海', pose: '在湖边花丛中拍摄人与自然的融合' }
        ],
        food: [
          { name: '牧民毡房奶茶', star: 3, desc: '沿途牧民毡房提供的热奶茶和馕' }
        ],
        duration: 8,
        ticket: 0,
        tip: '路况较差需越野车，距青河县城约100公里，适合户外和摄影爱好者'
      }
    ]
  },
  transport: {
    airport: '阿勒泰雪都机场',
    mainStation: '阿勒泰站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 35, busCost: 3 },
    driving: { tollPerDay: 30, fuelPer100km: 60, parking: 15 }
  },
  accommodation: {
    luxury: [
      { name: '阿勒泰阳光酒店', loc: '阿勒泰市解放路', price: 780, star: 5, perks: '当地最高档酒店、中西餐厅、暖气充足' },
      { name: '布尔津友谊峰大酒店', loc: '布尔津县友谊峰路', price: 680, star: 5, perks: '近河堤夜市、河景房、设施完善' }
    ],
    mid: [
      { name: '阿勒泰金都酒店', loc: '阿勒泰市金山路', price: 320, star: 4, perks: '市中心位置、自助早餐、免费停车' },
      { name: '汉庭酒店阿勒泰解放路店', loc: '阿勒泰市解放路', price: 240, star: 4, perks: '连锁品质、干净整洁、性价比高' }
    ],
    budget: [
      { name: '如家酒店阿勒泰火车站店', loc: '阿勒泰市火车站', price: 160, star: 3, perks: '近火车站、出行方便、基础住宿' },
      { name: '7天酒店阿勒泰金山路店', loc: '阿勒泰市金山路', price: 130, star: 3, perks: '市中心位置、价格实惠、出行便利' }
    ]
  }
};

window.CITY_DATABASE['博乐'] = {
  code: 'bole',
  coord: [82.0667, 44.9044],
  bestSeason: '6月至9月，夏季草原花海赛里木湖最美，秋季怪石沟层林尽染',
  routes: {
    classic: {
      name: '博乐经典四日游',
      days: 4,
      tagline: '赛湖怪石与草原，感受西域边城的壮美',
      spots: ['赛里木湖', '怪石沟', '博尔塔拉草原', '艾比湖', '哈日图热格森林公园', '博乐市博物馆', '敖包'],
      dayPlan: [
        { day: 1, theme: '赛里木湖', list: ['赛里木湖'], hours: 10 },
        { day: 2, theme: '怪石奇观', list: ['怪石沟'], hours: 7 },
        { day: 3, theme: '草原牧歌', list: ['博尔塔拉草原'], hours: 9 },
        { day: 4, theme: '湖畔探秘', list: ['艾比湖'], hours: 7 }
      ]
    },
    niche: {
      name: '博乐小众探秘三日游',
      days: 3,
      tagline: '温泉森林与峡谷，发现博乐的隐秘之美',
      spots: ['博格达尔温泉', '夏尔希里山', '鄂托克赛尔大峡谷', '怪石沟', '赛里木湖', '敖包'],
      dayPlan: [
        { day: 1, theme: '温泉养生', list: ['博格达尔温泉', '怪石沟'], hours: 8 },
        { day: 2, theme: '深山秘境', list: ['夏尔希里山', '鄂托克赛尔大峡谷', '敖包'], hours: 10 },
        { day: 3, theme: '赛湖环游', list: ['赛里木湖'], hours: 10 }
      ]
    },
    culture: {
      name: '博尔塔拉文化四日游',
      days: 4,
      tagline: '草原敖包与边城风情，感受蒙古草原文化',
      spots: ['博尔塔拉草原', '博乐市博物馆', '敖包', '博州湿地', '博乐古城遗址', '怪石沟'],
      dayPlan: [
        { day: 1, theme: '城市印象', list: ['博乐市博物馆', '博州湿地'], hours: 6 },
        { day: 2, theme: '草原文化', list: ['博尔塔拉草原', '敖包'], hours: 9 },
        { day: 3, theme: '古城探秘', list: ['博乐古城遗址'], hours: 5 },
        { day: 4, theme: '怪石奇观', list: ['怪石沟'], hours: 7 }
      ]
    },
    nature: {
      name: '博州自然风光三日游',
      days: 3,
      tagline: '赛湖草原怪石，博州自然的精华浓缩',
      spots: ['赛里木湖', '博尔塔拉草原', '怪石沟', '艾比湖', '鄂托克赛尔大峡谷'],
      dayPlan: [
        { day: 1, theme: '高原明珠', list: ['赛里木湖'], hours: 10 },
        { day: 2, theme: '草原怪石', list: ['博尔塔拉草原', '怪石沟'], hours: 10 },
        { day: 3, theme: '峡谷湖畔', list: ['艾比湖', '鄂托克赛尔大峡谷'], hours: 9 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '赛里木湖',
        rank: 1,
        intro: '新疆海拔最高面积最大的高山冷水湖，湖水清澈湛蓝四周雪山环绕，被誉为大西洋的最后一滴眼泪',
        coord: [81.1667, 44.6000],
        photoSpots: [
          { name: '赛里木湖南岸', pose: '拍摄湛蓝湖面与天山雪峰的壮阔全景' },
          { name: '月亮湾', pose: '拍摄湖湾曲线与远处雪山的柔美画面' },
          { name: '花海草甸', pose: '以湖边野花和蓝色湖水为背景拍摄' }
        ],
        food: [
          { name: '赛里木湖冷水鱼', star: 5, desc: '湖产高白鲑刺身或清蒸，肉质鲜嫩细腻' },
          { name: '哈萨克风干肉', star: 4, desc: '传统风干牛羊肉配馕食用' }
        ],
        duration: 8,
        ticket: 70,
        tip: '博乐侧游客相对较少更适合拍照，建议环湖自驾，夏季风大注意保暖'
      },
      {
        name: '怪石沟',
        rank: 2,
        intro: '博乐市北郊的花岗岩石林景区，亿万年风蚀形成形态万千的奇石景观，被誉为天然石雕艺术馆',
        coord: [82.2333, 45.1667],
        photoSpots: [
          { name: '怪石群全景', pose: '拍摄千姿百态的花岗岩奇石群' },
          { name: '象形石', pose: '在形似动物或人物的象形石前拍摄' },
          { name: '怪石沟峡谷', pose: '拍摄峡谷中堆叠的巨石和溪流' }
        ],
        food: [
          { name: '博乐手抓肉', star: 4, desc: '博乐特色手抓羊肉鲜嫩入味' },
          { name: '博乐烤全羊', star: 5, desc: '当地招牌烤全羊外焦里嫩' }
        ],
        duration: 4,
        ticket: 40,
        tip: '景区内需步行较多建议穿运动鞋，夏季遮阳不足注意防晒'
      },
      {
        name: '博尔塔拉草原',
        rank: 3,
        intro: '博尔塔拉蒙古自治州的天然牧场，草原辽阔牛羊成群，保留着蒙古族游牧生活的原始风貌是体验草原文化的好地方',
        coord: [82.5000, 45.0833],
        photoSpots: [
          { name: '草原全景', pose: '拍摄辽阔草原与远处天山的壮阔画面' },
          { name: '蒙古包', pose: '以白色蒙古包和草原为背景' },
          { name: '草原牧歌', pose: '拍摄成群的牛羊和牧民放牧的场景' }
        ],
        food: [
          { name: '蒙古族手抓肉', star: 5, desc: '蒙古族传统清水煮羊肉蘸盐食用' },
          { name: '奶茶配包尔萨克', star: 4, desc: '蒙古族传统咸奶茶配油炸面食' }
        ],
        duration: 6,
        ticket: 0,
        tip: '免费开放，夏季可住蒙古包体验游牧生活，那达慕大会期间最热闹'
      },
      {
        name: '艾比湖',
        rank: 4,
        intro: '新疆最大的咸水湖，湖面随季节变化极大，枯水期露出的盐碱地和湖底形成独特的荒漠景观是候鸟迁徙的重要栖息地',
        coord: [82.8833, 44.8833],
        photoSpots: [
          { name: '艾比湖全景', pose: '拍摄辽阔湖面与荒漠戈壁的苍凉画面' },
          { name: '湖畔盐碱地', pose: '拍摄白色盐碱结晶和荒凉湖岸' },
          { name: '候鸟栖息地', pose: '拍摄湖面上栖息的各类候鸟' }
        ],
        food: [
          { name: '博乐拌面', star: 3, desc: '博乐市区的家常拌面量大实惠' },
          { name: '烤馕', star: 3, desc: '路边馕坑现烤的新疆馕饼' }
        ],
        duration: 3,
        ticket: 0,
        tip: '春秋候鸟迁徙季最佳，风沙较大建议戴口罩和墨镜，自驾前往'
      },
      {
        name: '博乐市博物馆',
        rank: 5,
        intro: '博尔塔拉蒙古自治州的历史文化博物馆，展示草原游牧文化、丝路遗迹和蒙古族民俗，是了解博州历史的好去处',
        coord: [82.0667, 44.9044],
        photoSpots: [
          { name: '博物馆外观', pose: '拍摄博物馆的特色建筑设计' },
          { name: '蒙古族展厅', pose: '拍摄蒙古族服饰和生活用品展品' },
          { name: '丝路文物展', pose: '拍摄丝绸之路出土的珍贵文物展品' }
        ],
        food: [
          { name: '博乐抓饭', star: 4, desc: '市区老字号餐厅的正宗手抓饭' },
          { name: '博乐凉皮', star: 3, desc: '当地特色凉皮酸辣爽口' }
        ],
        duration: 1,
        ticket: 0,
        tip: '免费参观，周一闭馆，游览约1小时，可在前往其他景点前了解当地文化'
      }
    ],
    secondary: [
      {
        name: '哈日图热格森林公园',
        rank: 6,
        intro: '博乐市北郊的天然森林公园，原始云杉林覆盖山峦溪流穿林而过，秋季红叶满山是徒步和露营的理想目的地',
        coord: [82.2833, 45.2000],
        photoSpots: [
          { name: '森林全景', pose: '拍摄苍翠云杉林与远处雪山的画面' },
          { name: '林间溪流', pose: '拍摄清澈溪水与两岸原始森林' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 4, desc: '森林附近牧民提供的新鲜手抓肉' },
          { name: '野外烧烤', star: 4, desc: '景区内可自助烧烤体验野趣' }
        ],
        duration: 5,
        ticket: 30,
        tip: '适合徒步和露营需自带装备，秋季红叶最美，蚊虫较多注意防护'
      },
      {
        name: '博格达尔温泉',
        rank: 7,
        intro: '博尔塔拉州温泉县境内的天然地热温泉，水温常年保持在42度左右，矿物质丰富四周草原环绕环境幽静',
        coord: [81.8833, 44.9500],
        photoSpots: [
          { name: '温泉池', pose: '拍摄温泉池与周围草原的自然融合' },
          { name: '温泉县风光', pose: '拍摄温泉县的自然风光和田园景色' }
        ],
        food: [
          { name: '温泉县手抓肉', star: 4, desc: '温泉县当地的传统手抓羊肉' },
          { name: '奶茶', star: 3, desc: '当地牧民提供的热奶茶暖身' }
        ],
        duration: 3,
        ticket: 60,
        tip: '自带泳衣，泡温泉每次不超过20分钟，可住温泉县一晚深度体验'
      },
      {
        name: '敖包',
        rank: 8,
        intro: '博尔塔拉草原上的蒙古族祭祀敖包，是当地蒙古族牧民的精神圣地，周围经幡飘扬充满宗教氛围',
        coord: [82.4833, 45.0667],
        photoSpots: [
          { name: '敖包全景', pose: '拍摄敖包石堆和周围飘扬的经幡' },
          { name: '敖包祭祀', pose: '拍摄经幡和远处草原的壮阔画面' }
        ],
        food: [
          { name: '蒙古族奶茶', star: 3, desc: '附近牧民提供的传统蒙古族奶茶' }
        ],
        duration: 1,
        ticket: 0,
        tip: '请尊重当地宗教习俗，顺时针绕敖包三圈是传统礼仪，可与草原一起游览'
      },
      {
        name: '博州湿地',
        rank: 9,
        intro: '博乐市郊的天然湿地公园，水系发达植被丰富，是多种鸟类的栖息地，秋季金色芦苇在风中摇曳景色迷人',
        coord: [82.0833, 44.8833],
        photoSpots: [
          { name: '湿地栈道', pose: '在木栈道上拍摄湿地水景和芦苇' },
          { name: '观鸟台', pose: '从观鸟台拍摄湿地中的各类水鸟' }
        ],
        food: [
          { name: '博乐烤鱼', star: 3, desc: '博州当地河鱼烤制，肉质鲜嫩配料入味' }        ],
        duration: 2,
        ticket: 0,
        tip: '秋季芦苇最美，适合观鸟和散步，免费开放'
      },
      {
        name: '博乐古城遗址',
        rank: 10,
        intro: '博乐市郊的古代城址遗迹，据考证为唐代双河都督府所在地，残存的城墙基址见证了丝路北道的繁荣历史',
        coord: [82.1000, 44.9200],
        photoSpots: [
          { name: '古城遗址全景', pose: '拍摄残存城墙与远方草原的苍凉画面' },
          { name: '遗址标识碑', pose: '在遗址标识前拍摄纪念照' }
        ],
        food: [
          { name: '博乐拌面', star: 3, desc: '博乐市区的家常过油肉拌面' }
        ],
        duration: 1,
        ticket: 0,
        tip: '遗址保存较少适合对历史感兴趣的游客，自驾前往路况良好'
      }
    ],
    hidden: [
      {
        name: '夏尔希里山',
        rank: 11,
        intro: '博乐市北部的天山支脉，海拔3000米以上，夏季高山草甸野花盛开，冬季银装素裹是徒步和登山爱好者的天堂',
        coord: [82.3167, 45.2500],
        photoSpots: [
          { name: '高山草甸', pose: '拍摄高山草甸与远处连绵雪山的壮阔' },
          { name: '山花烂漫', pose: '夏季拍摄遍地的野花与蓝天' }
        ],
        food: [
          { name: '牧民奶茶', star: 3, desc: '山上牧民毡房提供的热奶茶和馕' }
        ],
        duration: 6,
        ticket: 0,
        tip: '路况较差需越野车或徒步，适合户外爱好者，夏季为最佳季节'
      },
      {
        name: '鄂托克赛尔大峡谷',
        rank: 12,
        intro: '博州境内人迹罕至的深山峡谷，红色岩壁耸立溪水穿谷而过，保留了最原始的自然风貌是小众探险的好去处',
        coord: [82.3500, 45.0500],
        photoSpots: [
          { name: '峡谷全景', pose: '拍摄红色岩壁与绿色植被的对比' },
          { name: '峡谷溪流', pose: '拍摄穿谷而过的清澈溪流' }
        ],
        food: [
          { name: '野外烧烤', star: 3, desc: '建议在峡谷中自助烧烤享受野趣' }
        ],
        duration: 4,
        ticket: 0,
        tip: '需自驾越野车前往，路况较差但风景原始，注意携带充足饮水和食物'
      },
      {
        name: '博乐薰衣草田',
        rank: 13,
        intro: '博乐周边的小型薰衣草种植园，虽不如霍城知名但花开时节同样紫色一片，游客稀少适合安静拍照',
        coord: [82.1500, 44.8500],
        photoSpots: [
          { name: '薰衣草花田', pose: '在紫色花田中拍摄清新唯美的照片' },
          { name: '花田远景', pose: '拍摄花田与远处天山的壮阔画面' }
        ],
        food: [
          { name: '博乐手抓饭', star: 3, desc: '博乐市区小店的家常手抓饭' }
        ],
        duration: 2,
        ticket: 0,
        tip: '6月中下旬为花期，位置较偏需自驾，游客少可独享花田'
      }
    ]
  },
  transport: {
    airport: '博乐阿拉山口机场',
    mainStation: '博乐站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 25, busCost: 2 },
    driving: { tollPerDay: 30, fuelPer100km: 55, parking: 10 }
  },
  accommodation: {
    luxury: [
      { name: '博乐银都酒店', loc: '博乐市北京路', price: 680, star: 5, perks: '当地最高档、中西餐厅、会议设施齐全' },
      { name: '博州宾馆', loc: '博乐市青得里大街', price: 580, star: 5, perks: '花园式酒店、环境幽静、设施完善' }
    ],
    mid: [
      { name: '博乐天缘酒店', loc: '博乐市团结路', price: 280, star: 4, perks: '近市中心、自助早餐、免费停车' },
      { name: '汉庭酒店博乐北京路店', loc: '博乐市北京路', price: 220, star: 4, perks: '连锁品质、交通便利、干净整洁' }
    ],
    budget: [
      { name: '如家酒店博乐火车站店', loc: '博乐市火车站', price: 140, star: 3, perks: '近火车站、出行方便、经济实惠' },
      { name: '7天酒店博乐步行街店', loc: '博乐市步行街', price: 120, star: 3, perks: '近商圈、出行便利、基础住宿' }
    ]
  }
};

window.CITY_DATABASE['吐鲁番'] = {
  code: 'turpan',
  coord: [89.1841, 42.9513],
  bestSeason: '4月至10月，春季杏花开放，夏季葡萄成熟，秋季瓜果飘香最宜游览',
  routes: {
    classic: {
      name: '火洲经典五日游',
      days: 5,
      tagline: '从火焰山到葡萄沟，探索丝路火洲的千年传奇',
      spots: ['火焰山', '葡萄沟', '坎儿井', '交河故城', '高昌故城', '苏公塔', '库木塔格沙漠'],
      dayPlan: [
        { day: 1, theme: '火焰之旅', list: ['火焰山', '葡萄沟'], hours: 9 },
        { day: 2, theme: '古城探秘', list: ['交河故城', '苏公塔'], hours: 8 },
        { day: 3, theme: '地下奇迹', list: ['坎儿井', '高昌故城'], hours: 8 },
        { day: 4, theme: '沙漠探险', list: ['库木塔格沙漠'], hours: 9 },
        { day: 5, theme: '文化收尾', list: ['吐鲁番博物馆'], hours: 5 }
      ]
    },
    niche: {
      name: '吐鲁番小众探秘三日游',
      days: 3,
      tagline: '千佛洞、古村落与沙漠，发现火洲的另一面',
      spots: ['柏孜克里克千佛洞', '吐峪沟', '库木塔格沙漠', '艾丁湖', '台藏塔', '吐鲁番博物馆'],
      dayPlan: [
        { day: 1, theme: '石窟探秘', list: ['柏孜克里克千佛洞', '吐峪沟'], hours: 9 },
        { day: 2, theme: '沙漠绿洲', list: ['库木塔格沙漠', '艾丁湖'], hours: 10 },
        { day: 3, theme: '丝路遗迹', list: ['台藏塔'], hours: 6 }
      ]
    },
    culture: {
      name: '丝路文明深度五日游',
      days: 5,
      tagline: '从故城到石窟，追溯丝路文明的辉煌',
      spots: ['交河故城', '高昌故城', '火焰山', '柏孜克里克千佛洞', '阿斯塔那古墓群', '坎儿井'],
      dayPlan: [
        { day: 1, theme: '千年故城', list: ['交河故城'], hours: 7 },
        { day: 2, theme: '火焰丝路', list: ['火焰山', '柏孜克里克千佛洞'], hours: 9 },
        { day: 3, theme: '高昌遗风', list: ['高昌故城', '阿斯塔那古墓群'], hours: 8 },
        { day: 4, theme: '沙漠探秘', list: ['库木塔格沙漠'], hours: 9 },
        { day: 5, theme: '水利奇迹', list: ['坎儿井', '苏公塔'], hours: 7 }
      ]
    },
    nature: {
      name: '火洲自然奇观四日游',
      days: 4,
      tagline: '从火焰山到艾丁湖，感受火洲的自然反差',
      spots: ['火焰山', '葡萄沟', '库木塔格沙漠', '艾丁湖', '交河故城', '吐峪沟'],
      dayPlan: [
        { day: 1, theme: '火焰与绿洲', list: ['火焰山', '葡萄沟'], hours: 9 },
        { day: 2, theme: '低地奇观', list: ['艾丁湖'], hours: 7 },
        { day: 3, theme: '沙漠探险', list: ['库木塔格沙漠', '吐峪沟'], hours: 10 },
        { day: 4, theme: '古城落日', list: ['交河故城'], hours: 6 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '火焰山',
        rank: 1,
        intro: '因西游记闻名的赤红色砂岩山脉，夏季地表温度可达70度以上，山体呈火焰色极为壮观，是吐鲁番最具标志性的景观',
        coord: [89.5333, 42.9500],
        photoSpots: [
          { name: '火焰山景区标志', pose: '在金箍棒温度计前拍摄标志性纪念照' },
          { name: '火焰山全景', pose: '拍摄赤红色山脉的壮阔全景' },
          { name: '火焰山近景', pose: '近距离拍摄红色岩壁的纹理和色彩' }
        ],
        food: [
          { name: '吐鲁番烤全羊', star: 5, desc: '吐鲁番传统烤全羊，外焦里嫩香气四溢' },
          { name: '烤馕', star: 4, desc: '火焰山附近馕坑现烤的正宗新疆馕饼' }
        ],
        duration: 2,
        ticket: 40,
        tip: '夏季极热务必做好防晒和补水，建议清晨或傍晚前往避开正午高温'
      },
      {
        name: '葡萄沟',
        rank: 2,
        intro: '吐鲁番市区内的葡萄种植长廊，全长8公里绿荫蔽日，盛产上百种葡萄品种，是体验葡萄文化和品尝鲜果的胜地',
        coord: [89.2167, 42.9667],
        photoSpots: [
          { name: '葡萄长廊', pose: '在绿荫蔽日的葡萄架下拍摄清凉画面' },
          { name: '葡萄品种展示', pose: '拍摄各色各样的葡萄品种特写' },
          { name: '葡萄沟民居', pose: '拍摄维吾尔族民居和晾葡萄干的晾房' }
        ],
        food: [
          { name: '新鲜葡萄', star: 5, desc: '葡萄沟现摘的各色葡萄品种甜美多汁' },
          { name: '葡萄干', star: 4, desc: '当地晾制的各色葡萄干风味各异' }
        ],
        duration: 3,
        ticket: 60,
        tip: '8-9月葡萄成熟季最佳，可品尝数十种葡萄，参观传统晾房了解制作工艺'
      },
      {
        name: '坎儿井',
        rank: 3,
        intro: '吐鲁番独特的地下水利灌溉工程，与万里长城京杭大运河并称古代三大工程，两千多年来滋养着这片绿洲',
        coord: [89.1833, 42.9333],
        photoSpots: [
          { name: '坎儿井地下通道', pose: '在地下通道中拍摄水利工程' },
          { name: '坎儿井博物馆', pose: '拍摄坎儿井结构示意图和模型' },
          { name: '坎儿井出水口', pose: '拍摄清澈渠水从地下涌出的画面' }
        ],
        food: [
          { name: '吐鲁番拌面', star: 4, desc: '景区附近餐厅的过油肉拌面' },
          { name: '哈密瓜', star: 5, desc: '吐鲁番当季新鲜哈密瓜甜度极高' }
        ],
        duration: 2,
        ticket: 40,
        tip: '地下通道凉爽适合夏季避暑，建议参观坎儿井博物馆了解工程原理'
      },
      {
        name: '交河故城',
        rank: 4,
        intro: '世界上最大最古老的生土建筑城市遗址，建于公元前2世纪，两河环绕如同天然堡垒，是世界文化遗产之一',
        coord: [89.0667, 42.9500],
        photoSpots: [
          { name: '故城全景', pose: '从观景台拍摄整座故城遗址的壮观布局' },
          { name: '故城巷道', pose: '拍摄残存城墙和纵横巷道的沧桑感' },
          { name: '故城日落', pose: '夕阳下拍摄故城遗址的金色剪影' }
        ],
        food: [
          { name: '吐鲁番烤包子', star: 4, desc: '故城附近摊位的现烤羊肉包子' },
          { name: '凉皮', star: 3, desc: '吐鲁番特色凉皮酸辣解暑' }
        ],
        duration: 3,
        ticket: 70,
        tip: '日落时分最美但夏季极热，建议下午4点后入园，遗址内无遮阳务必防晒'
      },
      {
        name: '高昌故城',
        rank: 5,
        intro: '西域古代高昌国都城遗址，始建于公元前1世纪，唐玄奘曾在此讲经说法，残存的佛塔和城墙见证了丝路繁华',
        coord: [89.5500, 42.8500],
        photoSpots: [
          { name: '故城全景', pose: '拍摄广袤大地上的高昌故城残垣全景' },
          { name: '佛塔遗址', pose: '拍摄残存佛塔与远处火焰山的画面' },
          { name: '故城城墙', pose: '近距离拍摄千年城墙的夯土纹理' }
        ],
        food: [
          { name: '吐鲁番抓饭', star: 4, desc: '当地正宗新疆抓饭，米粒分明配料丰富' },
          { name: '哈密瓜', star: 4, desc: '当季新鲜哈密瓜甜度极高' }
        ],
        duration: 2,
        ticket: 70,
        tip: '景区面积大建议乘坐电瓶车，夏季高温务必防晒补水，与火焰山可安排同一天'
      }
    ],
    secondary: [
      {
        name: '库木塔格沙漠',
        rank: 6,
        intro: '鄯善县境内的城市沙漠，沙丘连绵与城市仅一墙之隔，可体验骑骆驼滑沙等沙漠活动，日落时分金色沙丘极为壮美',
        coord: [90.2000, 42.8833],
        photoSpots: [
          { name: '沙丘全景', pose: '拍摄连绵金色沙丘与远处城市的奇幻对比' },
          { name: '沙漠骆驼', pose: '骑骆驼在沙丘上拍摄沙漠剪影' }
        ],
        food: [
          { name: '鄯善烤肉', star: 4, desc: '鄯善县的特色烤羊肉串炭火慢烤' },
          { name: '哈密瓜', star: 5, desc: '鄯善是哈密瓜故乡，当季鲜瓜甜度极高' }
        ],
        duration: 4,
        ticket: 45,
        tip: '建议下午前往避开高温看日落，骑骆驼约100元/人，注意防晒防沙'
      },
      {
        name: '柏孜克里克千佛洞',
        rank: 7,
        intro: '吐鲁番境内的高昌回鹘时期佛教石窟，始建于南北朝，壁画融合中原西域和回鹘风格，是丝路佛教艺术宝库',
        coord: [89.5333, 42.9167],
        photoSpots: [
          { name: '石窟群外观', pose: '拍摄火焰山崖面上的石窟群全景' },
          { name: '壁画展厅', pose: '拍摄展出的精美壁画残片' }
        ],
        food: [
          { name: '吐鲁番烤馕', star: 3, desc: '景区附近现烤的正宗新疆馕饼' },
          { name: '拌面', star: 3, desc: '路边小店的过油肉拌面实惠管饱' }
        ],
        duration: 2,
        ticket: 40,
        tip: '窟内禁止拍照和触摸壁画，与火焰山相邻可安排同一天游览'
      },
      {
        name: '吐峪沟',
        rank: 8,
        intro: '火焰山中的古老维吾尔族村落，千年窑洞民居保存完好，沟内有早期佛教石窟，被称为中国的庞贝古城',
        coord: [89.6500, 42.8833],
        photoSpots: [
          { name: '古村落全景', pose: '拍摄火焰山中的古老村落和窑洞民居' },
          { name: '窑洞民居', pose: '近距离拍摄传统生土建筑和生活场景' }
        ],
        food: [
          { name: '吐峪沟农家饭', star: 4, desc: '村民家提供的传统维吾尔族家常饭' },
          { name: '桑葚', star: 4, desc: '吐峪沟盛产桑葚，夏季鲜果甜美' }
        ],
        duration: 3,
        ticket: 30,
        tip: '路况较差但风景独特，古村居民友善，拍照请征得同意'
      },
      {
        name: '苏公塔',
        rank: 9,
        intro: '吐鲁番市内的伊斯兰建筑杰作，建于清代的砖砌宣礼塔高达44米，塔身精美的砖雕花纹工艺精湛令人叹为观止',
        coord: [89.1833, 42.9500],
        photoSpots: [
          { name: '苏公塔全景', pose: '拍摄高塔与相邻清真寺的完整画面' },
          { name: '砖雕细节', pose: '近距离拍摄塔身精美的砖雕花纹' }
        ],
        food: [
          { name: '吐鲁番凉面', star: 3, desc: '附近餐厅的特色凉面酸辣解暑' },
          { name: '烤包子', star: 4, desc: '附近摊位的现烤羊肉包子皮脆汁多' }
        ],
        duration: 1,
        ticket: 40,
        tip: '游览约1小时，可与吐鲁番博物馆安排在同一天，塔身砖雕值得细看'
      },
      {
        name: '阿斯塔那古墓群',
        rank: 10,
        intro: '高昌国时期的墓葬群，出土大量保存完好的干尸和丝织品等珍贵文物，被称为地下博物馆，具有极高的考古价值',
        coord: [89.5333, 42.8667],
        photoSpots: [
          { name: '墓室入口', pose: '拍摄开放参观的墓室结构' },
          { name: '出土文物展', pose: '拍摄展出的干尸和丝织品文物' }
        ],
        food: [
          { name: '吐鲁番抓饭', star: 3, desc: '附近小店的手抓饭简单实惠' }
        ],
        duration: 1,
        ticket: 40,
        tip: '墓室内较凉爽适合夏季参观，与高昌故城距离近可安排同一天'
      }
    ],
    hidden: [
      {
        name: '艾丁湖',
        rank: 11,
        intro: '中国陆地最低点，海拔-154米，湖面随季节变化，干涸时露出白色盐碱地如同月球表面，是独特的地理奇观',
        coord: [89.3167, 42.6500],
        photoSpots: [
          { name: '中国最低点标志', pose: '在海拔-154米标志碑前拍摄纪念照' },
          { name: '盐碱湖床', pose: '拍摄白色盐碱地和荒凉湖床的超现实画面' }
        ],
        food: [
          { name: '路边烤肉', star: 3, desc: '前往艾丁湖路上的小摊位烤肉串' }
        ],
        duration: 2,
        ticket: 0,
        tip: '位置偏远需自驾前往，夏季极热冬季极冷，游客稀少可独享荒凉之美'
      },
      {
        name: '台藏塔',
        rank: 12,
        intro: '高昌国时期的佛教佛塔遗址，残高约20米矗立在戈壁中已有千年历史，是吐鲁番地区现存最高的古代建筑遗迹',
        coord: [89.5500, 42.8333],
        photoSpots: [
          { name: '台藏塔全景', pose: '拍摄矗立戈壁中的千年佛塔残迹' },
          { name: '佛塔近景', pose: '近距离拍摄佛塔夯土结构和壁龛残迹' }
        ],
        food: [
          { name: '吐鲁番拌面', star: 3, desc: '路边小店的家常拌面管饱实惠' }
        ],
        duration: 1,
        ticket: 0,
        tip: '位于高昌故城附近可安排同一天游览，免费参观游客稀少'
      },
      {
        name: '吐鲁番博物馆',
        rank: 13,
        intro: '新疆第二大博物馆，馆藏丰富的丝路文物和干尸标本，尤其是吐鲁番出土文书和丝织品具有极高的历史研究价值',
        coord: [89.1833, 42.9500],
        photoSpots: [
          { name: '博物馆外观', pose: '拍摄博物馆的建筑设计' },
          { name: '干尸展厅', pose: '拍摄保存完好的古代干尸展品' }
        ],
        food: [
          { name: '吐鲁番烤包子', star: 4, desc: '博物馆附近的传统烤包子皮脆汁多' },
          { name: '葡萄汁', star: 3, desc: '当地鲜榨葡萄汁清凉解渴' }
        ],
        duration: 2,
        ticket: 0,
        tip: '免费参观周一闭馆，认真参观需2小时，建议先去博物馆了解历史再游览各景点'
      }
    ]
  },
  transport: {
    airport: '吐鲁番交河机场',
    mainStation: '吐鲁番北站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 25, busCost: 2 },
    driving: { tollPerDay: 30, fuelPer100km: 55, parking: 10 }
  },
  accommodation: {
    luxury: [
      { name: '吐鲁番天缘国际酒店', loc: '吐鲁番市高昌路', price: 680, star: 5, perks: '当地最高档、中西餐厅、葡萄园景观' },
      { name: '吐鲁番海德酒店', loc: '吐鲁番市青年路', price: 580, star: 5, perks: '近市中心、泳池、设施齐全' }
    ],
    mid: [
      { name: '吐鲁番大饭店', loc: '吐鲁番市高昌路', price: 320, star: 4, perks: '老牌酒店、位置优越、自助早餐' },
      { name: '汉庭酒店吐鲁番高昌路店', loc: '吐鲁番市高昌路', price: 220, star: 4, perks: '连锁品质、交通便利、性价比高' }
    ],
    budget: [
      { name: '如家酒店吐鲁番火车站店', loc: '吐鲁番市火车站', price: 140, star: 3, perks: '近火车站、出行方便、经济实惠' },
      { name: '7天酒店吐鲁番高昌路店', loc: '吐鲁番市高昌路', price: 120, star: 3, perks: '市中心位置、出行便利、基础住宿' }
    ]
  }
};

window.CITY_DATABASE['那拉提'] = {
  code: 'nalati',
  coord: [84.0167, 43.3000],
  bestSeason: '6月至9月，6月花海盛开，7-8月草原最绿，9月秋色渐浓',
  routes: {
    classic: {
      name: '空中草原经典五日游',
      days: 5,
      tagline: '从花海到林场，深度体验那拉提的草原之美',
      spots: ['那拉提草原', '那拉提花海', '巩乃斯林场', '野果林', '那拉提国家森林公园', '独库公路那拉提段', '哈萨克民俗村'],
      dayPlan: [
        { day: 1, theme: '花海迎宾', list: ['那拉提花海', '巩乃斯林场'], hours: 8 },
        { day: 2, theme: '空中草原', list: ['那拉提草原'], hours: 10 },
        { day: 3, theme: '林海深处', list: ['野果林', '那拉提国家森林公园'], hours: 9 },
        { day: 4, theme: '独库风光', list: ['独库公路那拉提段'], hours: 8 },
        { day: 5, theme: '民俗体验', list: ['哈萨克民俗村'], hours: 6 }
      ]
    },
    niche: {
      name: '那拉提小众秘境四日游',
      days: 4,
      tagline: '牧场古道与独库，发现那拉提的另一面',
      spots: ['那拉提草原', '恰西草原', '独库公路那拉提段', '唐加勒克牧场', '巩乃斯林场', '野果林'],
      dayPlan: [
        { day: 1, theme: '草原深度', list: ['那拉提草原', '唐加勒克牧场'], hours: 10 },
        { day: 2, theme: '秘境草原', list: ['恰西草原'], hours: 10 },
        { day: 3, theme: '独库探秘', list: ['独库公路那拉提段', '野果林'], hours: 9 },
        { day: 4, theme: '林海漫步', list: ['巩乃斯林场'], hours: 8 }
      ]
    },
    culture: {
      name: '哈萨克游牧文化五日游',
      days: 5,
      tagline: '深入哈萨克牧民生活，体验草原游牧文明',
      spots: ['那拉提花海', '那拉提草原', '唐加勒克牧场', '哈萨克民俗村', '巩乃斯林场', '那拉提国家森林公园'],
      dayPlan: [
        { day: 1, theme: '花海初遇', list: ['那拉提花海'], hours: 6 },
        { day: 2, theme: '空中草原骑马', list: ['那拉提草原'], hours: 10 },
        { day: 3, theme: '牧场生活', list: ['唐加勒克牧场'], hours: 10 },
        { day: 4, theme: '民俗体验', list: ['哈萨克民俗村'], hours: 8 },
        { day: 5, theme: '林海探秘', list: ['巩乃斯林场', '那拉提国家森林公园'], hours: 9 }
      ]
    },
    nature: {
      name: '草原自然奇观四日游',
      days: 4,
      tagline: '空中草原与河谷草甸，那拉提自然的极致呈现',
      spots: ['那拉提草原', '唐加勒克牧场', '恰西草原', '巩乃斯林场', '野果林'],
      dayPlan: [
        { day: 1, theme: '空中草原', list: ['那拉提草原'], hours: 10 },
        { day: 2, theme: '高山牧场', list: ['唐加勒克牧场', '恰西草原'], hours: 10 },
        { day: 3, theme: '林海深处', list: ['巩乃斯林场'], hours: 9 },
        { day: 4, theme: '野果飘香', list: ['野果林'], hours: 7 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '那拉提草原',
        rank: 1,
        intro: '世界四大草原之一的亚高山草甸植物区，被誉为空中草原，海拔2000米以上，夏季碧草如茵野花遍地是伊犁的精华所在',
        coord: [84.0167, 43.3000],
        photoSpots: [
          { name: '空中草原观景台', pose: '拍摄辽阔草原与远处雪山的壮阔全景' },
          { name: '河谷草原', pose: '拍摄蜿蜒河流与翠绿草甸的柔美画面' },
          { name: '牧民转场', pose: '拍摄哈萨克牧民赶羊转场的壮观场景' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 5, desc: '草原现宰羔羊清水煮制蘸盐手抓食用' },
          { name: '马奶酒', star: 4, desc: '哈萨克牧民自酿马奶酒微酸解暑' }
        ],
        duration: 8,
        ticket: 95,
        tip: '景区内有空中草原和河谷草原两条线路建议都走，区间车另收费'
      },
      {
        name: '巩乃斯林场',
        rank: 2,
        intro: '那拉提东部的原始森林景区，云杉参天溪流纵横，秋季层林尽染色彩斑斓，是徒步和露营的理想目的地',
        coord: [84.3167, 43.2500],
        photoSpots: [
          { name: '林场全景', pose: '拍摄苍翠云杉林与远处雪山的壮阔画面' },
          { name: '林间溪流', pose: '拍摄清澈溪水与两岸原始森林' },
          { name: '秋色林海', pose: '秋季拍摄层林尽染的多彩林海' }
        ],
        food: [
          { name: '林场野菜', star: 4, desc: '林场附近采集的野生蔬菜和蘑菇' },
          { name: '手抓肉', star: 4, desc: '林场周边牧民提供的传统手抓肉' }
        ],
        duration: 5,
        ticket: 40,
        tip: '适合徒步和露营需自带装备，秋季色彩最美，蚊虫较多注意防护'
      },
      {
        name: '野果林',
        rank: 3,
        intro: '伊犁河谷独有的原始野苹果林，面积约1万亩，每年春季苹果花盛开时粉色花海一望无际，是天山世界自然遗产的重要组成部分',
        coord: [84.0500, 43.2833],
        photoSpots: [
          { name: '野果林花海', pose: '春季拍摄粉色苹果花海的壮观景象' },
          { name: '野果林秋景', pose: '秋季拍摄挂满野苹果的枝头和林间光影' },
          { name: '林间小道', pose: '在林间小道拍摄光影斑驳的唯美画面' }
        ],
        food: [
          { name: '野苹果酱', star: 4, desc: '当地用野生苹果制作的果酱酸甜可口' },
          { name: '哈萨克奶茶', star: 3, desc: '林间牧民提供的热奶茶暖身' }
        ],
        duration: 3,
        ticket: 30,
        tip: '5月初苹果花期和9月果实期最美，是天山遗产的核心区域注意保护环境'
      },
      {
        name: '那拉提花海',
        rank: 4,
        intro: '那拉提草原周边的高山花卉观赏区，每年6月至7月各色野花竞相绽放，金莲花银莲花薰衣草等铺满山坡如同花毯',
        coord: [84.0333, 43.3167],
        photoSpots: [
          { name: '花海全景', pose: '拍摄满山遍野的花海与远处天山雪峰' },
          { name: '花丛特写', pose: '近距离拍摄各色野花和蜜蜂蝴蝶' },
          { name: '花海日落', pose: '夕阳下拍摄金色光线中的花海' }
        ],
        food: [
          { name: '哈萨克风干肉', star: 4, desc: '当地牧民提供的传统风干牛羊肉' },
          { name: '酥油茶', star: 3, desc: '哈萨克族传统酥油茶浓郁暖胃' }
        ],
        duration: 3,
        ticket: 30,
        tip: '6月中下旬为最佳花期，不同海拔花期时间不同可依次观赏'
      },
      {
        name: '那拉提国家森林公园',
        rank: 5,
        intro: '那拉提镇周边的国家森林公园，原始云杉林和白桦林交错分布，空气清新负氧离子极高，是森林浴和生态徒步的天堂',
        coord: [84.0000, 43.2833],
        photoSpots: [
          { name: '森林步道', pose: '在林间步道拍摄阳光穿透树冠的光影' },
          { name: '白桦林', pose: '在白桦林中拍摄秋日金色落叶画面' },
          { name: '林间牧场', pose: '拍摄森林边缘散落的牛羊和毡房' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 4, desc: '森林附近牧民的新鲜手抓羊肉' },
          { name: '野生蘑菇汤', star: 4, desc: '林中采摘的野生蘑菇炖汤鲜美无比' }
        ],
        duration: 4,
        ticket: 35,
        tip: '适合徒步和森林浴，秋季白桦林最美，注意在林间做好防蚊措施'
      }
    ],
    secondary: [
      {
        name: '唐加勒克牧场',
        rank: 6,
        intro: '那拉提深处的高山夏季牧场，哈萨克牧民在此放牧转场，保留着最原始的游牧生活方式，是体验牧民生活的绝佳去处',
        coord: [84.1000, 43.2500],
        photoSpots: [
          { name: '牧场全景', pose: '拍摄高山牧场上散落的毡房和牛羊' },
          { name: '牧民生活', pose: '拍摄哈萨克牧民挤奶放牧的日常场景' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 5, desc: '牧民现宰羔羊烹饪的最正宗手抓肉' },
          { name: '马奶酒', star: 4, desc: '牧民自酿马奶酒新鲜微酸' }
        ],
        duration: 6,
        ticket: 0,
        tip: '路况一般需SUV或骑马前往，尊重牧民生活习惯，可住毡房体验一晚'
      },
      {
        name: '恰西草原',
        rank: 7,
        intro: '那拉提镇东部的高山草甸，比那拉提主景区更加原始和安静，起伏的山丘覆盖翠绿草甸如同立体的绿色地毯',
        coord: [84.1500, 43.3500],
        photoSpots: [
          { name: '立体草原', pose: '拍摄起伏草甸如同绿色地毯的画面' },
          { name: '草原日落', pose: '夕阳下拍摄金色草甸和远处雪山' }
        ],
        food: [
          { name: '牧民奶茶', star: 4, desc: '沿途牧民毡房提供的热奶茶和包尔萨克' },
          { name: '手抓肉', star: 4, desc: '牧民提供的传统手抓肉鲜嫩可口' }
        ],
        duration: 5,
        ticket: 0,
        tip: '免费开放，路况较差需越野车，游客稀少体验感极佳'
      },
      {
        name: '独库公路那拉提段',
        rank: 8,
        intro: '中国最美公路独库公路经过那拉提的一段，沿途穿越天山腹地，一天可体验四季景观，被誉为中国最美公路的精华段落',
        coord: [84.2000, 43.2833],
        photoSpots: [
          { name: '公路观景台', pose: '拍摄蜿蜒公路与两侧壮美山景' },
          { name: '天山隧道', pose: '在隧道口拍摄天山南北的分界' }
        ],
        food: [
          { name: '路边烤肉', star: 3, desc: '公路沿线摊贩的新鲜烤羊肉串' },
          { name: '拌面', star: 3, desc: '公路旁小店的经济拌面' }
        ],
        duration: 4,
        ticket: 0,
        tip: '仅6-10月通车，自驾体验最佳但弯道多注意安全，沿途多处可停车拍照'
      },
      {
        name: '哈萨克民俗村',
        rank: 9,
        intro: '那拉提镇内的哈萨克民族文化体验区，展示哈萨克族传统毡房服饰手工艺和歌舞表演，是了解游牧民族文化的窗口',
        coord: [84.0167, 43.3000],
        photoSpots: [
          { name: '毡房内部', pose: '拍摄传统毡房内部的精美装饰和生活场景' },
          { name: '民族歌舞', pose: '拍摄哈萨克族传统歌舞表演' }
        ],
        food: [
          { name: '哈萨克纳仁', star: 5, desc: '哈萨克族传统马肉手抓饭配薄饼' },
          { name: '奶茶配包尔萨克', star: 4, desc: '哈萨克传统茶点搭配' }
        ],
        duration: 2,
        ticket: 30,
        tip: '歌舞表演有固定时间建议提前了解，品尝纳仁是体验哈萨克文化的最佳方式'
      },
      {
        name: '那拉提日落观景台',
        rank: 10,
        intro: '那拉提镇西部的山坡观景点，可俯瞰整个那拉提镇和周围草原的全景，日落时分金色光芒洒满草原极为壮观',
        coord: [84.0000, 43.3167],
        photoSpots: [
          { name: '日落全景', pose: '拍摄夕阳下那拉提镇和草原的金色全景' },
          { name: '草原剪影', pose: '拍摄夕阳中牧人和牛羊的归家剪影' }
        ],
        food: [
          { name: '镇上烤肉', star: 4, desc: '那拉提镇上的烤羊肉串和手抓饭' }
        ],
        duration: 2,
        ticket: 0,
        tip: '日落前1小时前往最佳，山坡上风大注意保暖，夏季日落约在晚9点后'
      }
    ],
    hidden: [
      {
        name: '塔吾萨尼牧场',
        rank: 11,
        intro: '那拉提深处人迹罕至的高山牧场，海拔2500米以上，原始草甸未被旅游开发，保留着最纯净的自然风光和游牧生活',
        coord: [84.1500, 43.2000],
        photoSpots: [
          { name: '高山牧场', pose: '拍摄原始草甸与天山雪峰的画面' },
          { name: '牧民转场', pose: '拍摄哈萨克牧民季节性转场的壮观场景' }
        ],
        food: [
          { name: '牧民奶茶', star: 3, desc: '牧民毡房提供的热奶茶和馕' }
        ],
        duration: 6,
        ticket: 0,
        tip: '需越野车或骑马前往，路况较差但风景原始，适合深度户外爱好者'
      },
      {
        name: '阿尔善温泉',
        rank: 12,
        intro: '那拉提周边山谷中的天然温泉，泉水从山崖渗出温度适宜，四周草原环绕游客极少是旅途中放松身心的隐秘好去处',
        coord: [84.1000, 43.2500],
        photoSpots: [
          { name: '温泉全景', pose: '拍摄山崖间渗出的温泉与周围草原' },
          { name: '温泉近景', pose: '近距离拍摄泉水和岩石的自然融合' }
        ],
        food: [
          { name: '野外烧烤', star: 3, desc: '建议在温泉附近河边自助烧烤' }
        ],
        duration: 3,
        ticket: 0,
        tip: '位置隐蔽需当地人带路，自带泳衣和毛巾，泡温泉后注意保暖'
      },
      {
        name: '那拉提星空营地',
        rank: 13,
        intro: '那拉提草原深处的观星露营地，远离城市光污染，夏夜可仰望壮丽的银河星空，是天文摄影和浪漫露营的绝佳目的地',
        coord: [84.0500, 43.2833],
        photoSpots: [
          { name: '银河星空', pose: '使用三脚架拍摄壮丽的银河星空' },
          { name: '星空毡房', pose: '拍摄毡房剪影与璀璨星空的梦幻画面' }
        ],
        food: [
          { name: '篝火烤全羊', star: 5, desc: '星空下篝火烤全羊是最极致的草原体验' }
        ],
        duration: 8,
        ticket: 0,
        tip: '需自带帐篷和保暖装备，夏季晴夜最佳，建议提前查看天气和月相'
      }
    ]
  },
  transport: {
    airport: '那拉提机场',
    mainStation: '那拉提站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 30, busCost: 3 },
    driving: { tollPerDay: 20, fuelPer100km: 55, parking: 10 }
  },
  accommodation: {
    luxury: [
      { name: '那拉提文旅度假酒店', loc: '那拉提镇', price: 880, star: 5, perks: '草原景观、度假设施、骑马体验' },
      { name: '那拉提天缘酒店', loc: '那拉提镇', price: 780, star: 5, perks: '景区入口、哈萨克风情、免费接送' }
    ],
    mid: [
      { name: '那拉提大酒店', loc: '那拉提镇中心', price: 380, star: 4, perks: '镇中心位置、自助早餐、免费停车' },
      { name: '那拉提草原宾馆', loc: '那拉提镇', price: 280, star: 4, perks: '近景区、草原景观、性价比高' }
    ],
    budget: [
      { name: '那拉提青年旅舍', loc: '那拉提镇', price: 120, star: 3, perks: '背包客首选、公共区域、社交氛围' },
      { name: '那拉提哈萨克毡房民宿', loc: '那拉提草原', price: 150, star: 3, perks: '草原住宿体验、哈萨克风情、星空' }
    ]
  }
};

window.CITY_DATABASE['石河子'] = {
  code: 'shihezi',
  coord: [86.0412, 44.3056],
  bestSeason: '5月至10月，夏季凉爽宜人，秋季瓜果飘香，安集海大峡谷四季皆宜',
  routes: {
    classic: {
      name: '军垦名城经典四日游',
      days: 4,
      tagline: '从军垦博物馆到安集海大峡谷，感受兵团精神与自然奇观',
      spots: ['新疆军垦博物馆', '北湖公园', '军垦第一连', '周恩来纪念碑', '安集海大峡谷', '军垦广场', '石河子南山'],
      dayPlan: [
        { day: 1, theme: '军垦记忆', list: ['新疆军垦博物馆', '周恩来纪念碑'], hours: 7 },
        { day: 2, theme: '兵团岁月', list: ['军垦第一连'], hours: 8 },
        { day: 3, theme: '城市休闲', list: ['北湖公园'], hours: 6 },
        { day: 4, theme: '峡谷奇观', list: ['安集海大峡谷'], hours: 8 }
      ]
    },
    niche: {
      name: '石河子小众深度三日游',
      days: 3,
      tagline: '大峡谷沙漠与牧场，发现军垦城的自然之美',
      spots: ['安集海大峡谷', '驼铃梦坡沙漠', '巴音沟牧场', '新疆军垦博物馆', '东大塘风景区', '西公园'],
      dayPlan: [
        { day: 1, theme: '峡谷探险', list: ['安集海大峡谷', '东大塘风景区'], hours: 9 },
        { day: 2, theme: '沙漠奇旅', list: ['驼铃梦坡沙漠'], hours: 8 },
        { day: 3, theme: '牧场漫步', list: ['巴音沟牧场', '新疆军垦博物馆', '西公园'], hours: 9 }
      ]
    },
    culture: {
      name: '兵团文化深度五日游',
      days: 5,
      tagline: '追寻军垦岁月，感悟兵团精神',
      spots: ['新疆军垦博物馆', '军垦第一连', '周恩来纪念碑', '军垦广场', '石河子大学博物馆', '北湖公园'],
      dayPlan: [
        { day: 1, theme: '军垦历史', list: ['新疆军垦博物馆', '军垦广场'], hours: 7 },
        { day: 2, theme: '兵团岁月', list: ['军垦第一连'], hours: 8 },
        { day: 3, theme: '伟人缅怀', list: ['周恩来纪念碑'], hours: 5 },
        { day: 4, theme: '学术之旅', list: ['石河子大学博物馆'], hours: 6 },
        { day: 5, theme: '城市漫步', list: ['北湖公园'], hours: 5 }
      ]
    },
    nature: {
      name: '石河子自然风光三日游',
      days: 3,
      tagline: '从峡谷到沙漠到牧场，石河子的自然多样面貌',
      spots: ['安集海大峡谷', '巴音沟牧场', '驼铃梦坡沙漠', '东大塘风景区', '紫泥泉种羊场'],
      dayPlan: [
        { day: 1, theme: '峡谷探秘', list: ['安集海大峡谷', '东大塘风景区', '紫泥泉种羊场'], hours: 9 },
        { day: 2, theme: '牧场风光', list: ['巴音沟牧场'], hours: 8 },
        { day: 3, theme: '沙漠之旅', list: ['驼铃梦坡沙漠'], hours: 8 }
      ]
    }
  },
  attractions: {
    mustSee: [
      {
        name: '新疆军垦博物馆',
        rank: 1,
        intro: '全国唯一以军垦历史为主题的大型博物馆，展示新疆生产建设兵团从无到有的艰苦创业历程，馆藏大量珍贵历史文物和照片',
        coord: [86.0412, 44.3056],
        photoSpots: [
          { name: '博物馆大厅', pose: '拍摄军垦主题雕塑和宏伟展厅' },
          { name: '军垦文物展厅', pose: '拍摄珍贵的军垦历史文物和老照片' },
          { name: '军垦工具展', pose: '拍摄开荒用的铁犁拖拉机等生产工具' }
        ],
        food: [
          { name: '石河子凉皮', star: 5, desc: '石河子最有名的特色小吃，酸辣爽口面皮劲道' },
          { name: '军垦红烧肉', star: 5, desc: '兵团传统红烧肉，肥而不腻入口即化' }
        ],
        duration: 3,
        ticket: 0,
        tip: '免费参观周一闭馆，认真参观需2-3小时，建议请讲解员了解军垦历史更有深度'
      },
      {
        name: '北湖公园',
        rank: 2,
        intro: '石河子市中心的大型城市公园，湖面开阔绿树成荫，是市民休闲健身的好去处，夏季荷花盛开秋季红叶如火',
        coord: [86.0500, 44.3167],
        photoSpots: [
          { name: '北湖全景', pose: '拍摄开阔湖面与城市天际线的倒影' },
          { name: '荷花池', pose: '夏季拍摄盛开的荷花和翠绿荷叶' },
          { name: '湖畔步道', pose: '在湖畔绿荫步道拍摄休闲漫步' }
        ],
        food: [
          { name: '公园旁凉皮', star: 4, desc: '公园附近的石河子特色凉皮酸辣开胃' },
          { name: '大盘鸡', star: 4, desc: '附近餐厅的正宗大盘鸡鸡肉鲜嫩宽面入味' }
        ],
        duration: 2,
        ticket: 0,
        tip: '免费开放，夏季荷花最美，适合散步和休闲，傍晚去最凉爽'
      },
      {
        name: '军垦第一连',
        rank: 3,
        intro: '兵团第一师一团一连的驻地遗址，保留了最原始的军垦战士生活场景，地窝子土坯房见证了第一代兵团人的艰苦创业',
        coord: [86.0833, 44.2833],
        photoSpots: [
          { name: '地窝子', pose: '拍摄军垦战士居住的原始地窝子' },
          { name: '军垦旧居', pose: '拍摄保留下来的土坯房和生活用具' },
          { name: '军垦纪念墙', pose: '在纪念墙前拍摄缅怀照' }
        ],
        food: [
          { name: '军垦忆苦饭', star: 4, desc: '体验当年军垦战士的粗粮饭菜简朴饮食' },
          { name: '军垦红烧肉', star: 5, desc: '兵团传统红烧肉是艰苦岁月中最奢侈的美食' }
        ],
        duration: 3,
        ticket: 20,
        tip: '建议请讲解员讲述军垦故事更有感染力，可与军垦博物馆安排同一天'
      },
      {
        name: '周恩来纪念碑',
        rank: 4,
        intro: '为纪念周恩来总理1965年视察石河子而建立的纪念碑，碑身庄严肃穆，周围园林景色优美是缅怀伟人的纪念胜地',
        coord: [86.0333, 44.3100],
        photoSpots: [
          { name: '纪念碑正面', pose: '拍摄庄严的纪念碑和周恩来铜像' },
          { name: '纪念园林', pose: '拍摄纪念碑周围的园林景观和题词碑' },
          { name: '军垦群雕', pose: '拍摄纪念碑旁的军垦战士群雕' }
        ],
        food: [
          { name: '石河子凉皮', star: 4, desc: '纪念碑附近的石河子特色凉皮' },
          { name: '烤包子', star: 3, desc: '附近摊位的现烤羊肉包子' }
        ],
        duration: 1,
        ticket: 0,
        tip: '免费开放，游览约1小时，适合与军垦博物馆一起安排在同一天'
      },
      {
        name: '安集海大峡谷',
        rank: 5,
        intro: '石河子安集海镇附近的壮观峡谷，由天山融雪亿万年冲刷形成，谷壁色彩斑斓层次分明，被誉为大地上的调色板',
        coord: [85.6833, 44.0833],
        photoSpots: [
          { name: '峡谷全景', pose: '俯拍壮阔峡谷的多彩地貌和蜿蜒河道' },
          { name: '峡谷色彩', pose: '近距离拍摄谷壁的红黄灰绿多彩层次' },
          { name: '峡谷日落', pose: '夕阳下拍摄峡谷的金色光影和剪影' }
        ],
        food: [
          { name: '安集海辣椒', star: 4, desc: '安集海特产辣椒制成的各色辣椒酱和菜品' },
          { name: '石河子大盘鸡', star: 4, desc: '当地大盘鸡鸡肉鲜嫩土豆绵软' }
        ],
        duration: 4,
        ticket: 0,
        tip: '免费开放，日落时分色彩最美，峡谷边缘无护栏注意安全，自驾前往约40分钟'
      }
    ],
    secondary: [
      {
        name: '驼铃梦坡沙漠',
        rank: 6,
        intro: '石河子附近的沙漠旅游景区，金色沙丘连绵起伏，可体验骑骆驼滑沙等沙漠活动，因沙漠中驼铃声声而得名',
        coord: [85.8833, 44.1833],
        photoSpots: [
          { name: '沙丘全景', pose: '拍摄连绵金色沙丘的壮阔全景' },
          { name: '骆驼剪影', pose: '夕阳下拍摄骆驼行进在沙丘上的剪影' }
        ],
        food: [
          { name: '沙漠烧烤', star: 4, desc: '沙漠营地的篝火烧烤体验独特' },
          { name: '烤馕', star: 3, desc: '沙漠中现烤的热馕配奶茶' }
        ],
        duration: 4,
        ticket: 30,
        tip: '建议下午前往避开高温看日落，骑骆驼约80元/人，注意防晒防沙'
      },
      {
        name: '石河子大学博物馆',
        rank: 7,
        intro: '石河子大学校内的综合博物馆，展示新疆农业考古、民族文化和兵团教育历史，馆藏丰富且具有学术价值',
        coord: [86.0500, 44.3000],
        photoSpots: [
          { name: '博物馆外观', pose: '拍摄大学校园内的博物馆建筑' },
          { name: '考古展厅', pose: '拍摄新疆出土的农业文物和考古发现' }
        ],
        food: [
          { name: '大学食堂', star: 3, desc: '大学食堂的平价饭菜量大实惠' },
          { name: '学校旁凉皮', star: 4, desc: '学校附近的石河子凉皮小店' }
        ],
        duration: 2,
        ticket: 0,
        tip: '免费参观，周一闭馆，认真参观约1-2小时，校园环境优美可顺便逛逛'
      },
      {
        name: '军垦广场',
        rank: 8,
        intro: '石河子市中心的大型文化广场，以军垦文化为主题，矗立着多座军垦雕塑，是市民休闲集会和节庆活动的中心场所',
        coord: [86.0412, 44.3056],
        photoSpots: [
          { name: '军垦雕塑', pose: '拍摄广场上的军垦主题雕塑群' },
          { name: '广场夜景', pose: '拍摄夜晚灯光下的广场和喷泉' }
        ],
        food: [
          { name: '广场夜市小吃', star: 4, desc: '广场周边的夜市烧烤和小吃' },
          { name: '大盘鸡', star: 4, desc: '广场附近餐厅的正宗大盘鸡' }
        ],
        duration: 1,
        ticket: 0,
        tip: '免费开放，夜晚最热闹有喷泉表演，适合作为市区游览的起点或终点'
      },
      {
        name: '西公园',
        rank: 9,
        intro: '石河子市西部的大型城市公园，绿化覆盖率极高有健身步道和儿童游乐设施，秋季银杏大道金黄灿烂是市民休闲的好去处',
        coord: [86.0167, 44.3100],
        photoSpots: [
          { name: '银杏大道', pose: '秋季拍摄金黄银杏叶铺满道路的画面' },
          { name: '公园湖景', pose: '拍摄公园湖泊与周围绿树的宁静画面' }
        ],
        food: [
          { name: '公园旁烤肉', star: 3, desc: '公园附近的烤肉串和小吃' },
          { name: '凉皮', star: 4, desc: '附近的石河子凉皮酸辣爽口' }
        ],
        duration: 2,
        ticket: 0,
        tip: '免费开放，秋季银杏最美约10月中下旬，适合散步和亲子活动'
      },
      {
        name: '石河子南山',
        rank: 10,
        intro: '石河子市南部的天山山麓，有天然草场和松林覆盖，夏季凉爽宜人野花遍地，是城市近郊徒步和避暑的好去处',
        coord: [86.0833, 44.1833],
        photoSpots: [
          { name: '南山草场', pose: '拍摄绿色草场与远处天山的画面' },
          { name: '松林小道', pose: '在松林间小道拍摄光影效果' }
        ],
        food: [
          { name: '南山手抓肉', star: 4, desc: '山麓牧民的新鲜手抓羊肉清水煮制' },
          { name: '拌面', star: 3, desc: '山脚下小店的过油肉拌面实惠管饱' }
        ],
        duration: 4,
        ticket: 0,
        tip: '自驾或包车前往约30分钟，适合半日徒步，夏季最凉爽'
      }
    ],
    hidden: [
      {
        name: '巴音沟牧场',
        rank: 11,
        intro: '石河子市南部的天山深处高山牧场，海拔2000米以上，哈萨克牧民在此放牧，草原花海和原始自然风光令人心旷神怡',
        coord: [85.7000, 44.0500],
        photoSpots: [
          { name: '牧场全景', pose: '拍摄高山牧场和散落的毡房牛羊' },
          { name: '花海草甸', pose: '在草原花丛中拍摄人与自然的融合' }
        ],
        food: [
          { name: '哈萨克手抓肉', star: 4, desc: '牧民毡房提供的传统手抓羊肉' }
        ],
        duration: 6,
        ticket: 0,
        tip: '路况较差需SUV，夏季可住毡房体验游牧生活，注意防晒防蚊'
      },
      {
        name: '东大塘风景区',
        rank: 12,
        intro: '石河子沙湾县境内的峡谷景区，红色砂岩地貌壮观奇特，溪水穿谷而过植被丰富，是徒步探险和地质考察的好去处',
        coord: [85.6167, 44.0833],
        photoSpots: [
          { name: '峡谷全景', pose: '拍摄红色峡谷壁和蜿蜒溪流的画面' },
          { name: '瀑布', pose: '拍摄峡谷中的小型瀑布和绿色植被' }
        ],
        food: [
          { name: '沙湾大盘鸡', star: 5, desc: '沙湾县是新疆大盘鸡发源地之一正宗美味' }
        ],
        duration: 4,
        ticket: 20,
        tip: '可与安集海大峡谷安排同一天游览，峡谷内需穿防滑鞋'
      },
      {
        name: '紫泥泉种羊场',
        rank: 13,
        intro: '石河子附近的知名种羊场，培育优质细毛羊品种，可近距离参观现代化畜牧业和广袤的天然牧场风光',
        coord: [85.9833, 44.2000],
        photoSpots: [
          { name: '牧场风光', pose: '拍摄广袤牧场和成群的绵羊' },
          { name: '种羊场建筑', pose: '拍摄牧场的建筑和远处的天山风光' }
        ],
        food: [
          { name: '牧场新鲜羊肉', star: 4, desc: '种羊场提供的最新鲜羊肉制品' }
        ],
        duration: 2,
        ticket: 0,
        tip: '需自驾前往，适合对畜牧业感兴趣的游客，春季剪羊毛时节最有趣'
      }
    ]
  },
  transport: {
    airport: '石河子花园机场',
    mainStation: '石河子站',
    publicTransit: { metroDailyCost: 0, taxiAvg: 20, busCost: 1 },
    driving: { tollPerDay: 20, fuelPer100km: 50, parking: 10 }
  },
  accommodation: {
    luxury: [
      { name: '石河子天富饭店', loc: '石河子市北三路', price: 680, star: 5, perks: '当地最佳酒店、中西餐厅、会议设施齐全' },
      { name: '石河子恒和国际大酒店', loc: '石河子市北四路', price: 580, star: 5, perks: '近市中心、室内泳池、商务配套齐全' }
    ],
    mid: [
      { name: '石河子准噶尔酒店', loc: '石河子市北一路', price: 320, star: 4, perks: '位置优越、自助早餐、免费停车' },
      { name: '汉庭酒店石河子步行街店', loc: '石河子市步行街', price: 220, star: 4, perks: '连锁品质、交通便利、性价比高' }
    ],
    budget: [
      { name: '如家酒店石河子火车站店', loc: '石河子市火车站', price: 140, star: 3, perks: '近火车站、出行方便、经济实惠' },
      { name: '7天酒店石河子北三路店', loc: '石河子市北三路', price: 120, star: 3, perks: '市中心位置、出行便利、基础住宿' }
    ]
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
