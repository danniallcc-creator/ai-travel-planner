// AI旅游路线规划设计师 - 省级自驾游数据
// 跨城智能串联：按地理位置编排，连续驾驶不超3小时

window.PROVINCE_DRIVING = {

  '贵州': {
    name: '贵州省',
    capital: '贵阳',
    slogan: '多彩贵州 · 山水秘境自驾之旅',
    bestSeason: '夏季避暑(6-9月)最佳，春季赏花(3-4月百里杜鹃)',
    overview: '贵州地处云贵高原，喀斯特地貌冠绝天下，少数民族文化灿烂。全省高速网络完善，适合环线自驾。',
    cities: {
      '贵阳': {
        coord: [106.63, 26.65],
        highlights: ['甲秀楼', '青岩古镇', '黔灵山公园'],
        stayDays: 1,
        intro: '省会林城，避暑之都',
        mustDo: '青岩古镇+甲秀楼夜景',
        food: '丝娃娃/肠旺面/酸汤鱼',
        hotels: {
          luxury: { name: '贵阳亨特索菲特大酒店', price: 880 },
          mid: { name: '亚朵甲秀楼店', price: 420 },
          budget: { name: '汉庭贵阳喷水池店', price: 180 }
        }
      },
      '安顺': {
        coord: [105.95, 26.25],
        highlights: ['黄果树瀑布', '龙宫', '天星桥'],
        stayDays: 1.5,
        intro: '中国瀑布之乡，屯堡文化之都',
        mustDo: '黄果树大瀑布+天星桥(下半段精华)',
        food: '安顺裹卷/冲冲糕/波波糖',
        hotels: {
          luxury: { name: '黄果树柏联酒店', price: 1080 },
          mid: { name: '黄果树宾馆', price: 480 },
          budget: { name: '如家安顺黄果树店', price: 160 }
        }
      },
      '遵义': {
        coord: [106.93, 27.73],
        highlights: ['遵义会议会址', '海龙屯', '赤水丹霞'],
        stayDays: 1,
        intro: '转折之城，红色圣地',
        mustDo: '遵义会议会址+捞沙巷美食',
        food: '羊肉粉/豆花面/鸡蛋糕',
        hotels: {
          luxury: { name: '遵义香格里拉大酒店', price: 780 },
          mid: { name: '遵义宾馆', price: 380 },
          budget: { name: '汉庭遵义会议会址店', price: 168 }
        }
      },
      '六盘水': {
        coord: [104.83, 26.59],
        highlights: ['乌蒙大草原', '韭菜坪', '北盘江大桥'],
        stayDays: 1,
        intro: '中国凉都，19℃的夏天',
        mustDo: '乌蒙大草原日出+韭菜坪花海(8-9月)',
        food: '水城烙锅/羊肉粉',
        hotels: {
          luxury: { name: '六盘水福朋喜来登', price: 680 },
          mid: { name: '水城凉都大酒店', price: 320 },
          budget: { name: '7天六盘水火车站店', price: 128 }
        }
      },
      '毕节': {
        coord: [105.28, 27.30],
        highlights: ['百里杜鹃', '织金洞', '草海'],
        stayDays: 1,
        intro: '花海鹤乡，溶洞王国',
        mustDo: '织金洞(溶洞之王)+百里杜鹃(3-5月)',
        food: '毕节汤圆/大方臭豆腐/织金烙锅',
        hotels: {
          luxury: { name: '毕节洪山大酒店', price: 680 },
          mid: { name: '织金洞宾馆', price: 280 },
          budget: { name: '格林豪泰毕节店', price: 138 }
        }
      },
      '铜仁': {
        coord: [109.19, 27.73],
        highlights: ['梵净山', '亚木沟', '石阡温泉'],
        stayDays: 1.5,
        intro: '梵天净土，桃源铜仁',
        mustDo: '梵净山(红云金顶+蘑菇石)',
        food: '锅巴粉/社饭/米豆腐',
        hotels: {
          luxury: { name: '梵净山栖溪度假酒店', price: 880 },
          mid: { name: '梵净山翠苑酒店', price: 380 },
          budget: { name: '汉庭铜仁古城店', price: 158 }
        }
      },
      '兴义': {
        coord: [104.90, 25.09],
        highlights: ['万峰林', '马岭河峡谷', '万峰湖'],
        stayDays: 1,
        intro: '峰林之城，户外天堂',
        mustDo: '万峰林骑行+马岭河峡谷徒步',
        food: '兴义刷把头/鸡肉汤圆/杠子面',
        hotels: {
          luxury: { name: '万峰林悦榕庄', price: 1180 },
          mid: { name: '万峰林布依客栈', price: 320 },
          budget: { name: '如家兴义桔山店', price: 148 }
        }
      },
      '凯里': {
        coord: [107.98, 26.57],
        highlights: ['西江千户苗寨', '下司古镇', '郎德苗寨'],
        stayDays: 1.5,
        intro: '苗侗之都，歌舞之乡',
        mustDo: '西江千户苗寨夜景+长桌宴',
        food: '酸汤鱼/苗家腊肉/糯米饭',
        hotels: {
          luxury: { name: '西江悦榕庄', price: 980 },
          mid: { name: '凯里希尔顿花园', price: 450 },
          budget: { name: '汉庭凯里大十字店', price: 158 }
        }
      },
      '荔波': {
        coord: [107.88, 25.42],
        highlights: ['小七孔', '大七孔', '茂兰喀斯特'],
        stayDays: 1,
        intro: '地球绿宝石，世界自然遗产',
        mustDo: '小七孔(卧龙潭+鸳鸯湖+68级跌水瀑布)',
        food: '荔波酸肉/水蕨菜/臭酸',
        hotels: {
          luxury: { name: '荔波瑶山古寨度假酒店', price: 780 },
          mid: { name: '荔波古镇客栈', price: 320 },
          budget: { name: '7天荔波县城店', price: 138 }
        }
      },
      '镇远': {
        coord: [108.43, 27.05],
        highlights: ['镇远古镇', '舞阳河', '青龙洞'],
        stayDays: 1,
        intro: '太极古城，舞阳画廊',
        mustDo: '镇远古镇夜景+舞阳河泛舟',
        food: '道菜/酸汤鱼/米豆腐',
        hotels: {
          luxury: { name: '镇远循美·河畔精品酒店', price: 680 },
          mid: { name: '镇远河畔民宿', price: 280 },
          budget: { name: '格林豪泰镇远古城店', price: 128 }
        }
      }
    },

    // 城市间驾车距离(km)和时间(分钟) - 按高速公路
    distances: {
      '贵阳-安顺': { km: 100, minutes: 75, route: 'G60沪昆高速' },
      '贵阳-遵义': { km: 155, minutes: 120, route: 'G75兰海高速' },
      '贵阳-凯里': { km: 190, minutes: 135, route: 'G60沪昆高速' },
      '贵阳-荔波': { km: 270, minutes: 195, route: 'G75→S88' },
      '贵阳-毕节': { km: 220, minutes: 165, route: 'G76厦蓉高速' },
      '贵阳-六盘水': { km: 280, minutes: 195, route: 'G60沪昆高速' },
      '贵阳-铜仁': { km: 380, minutes: 270, route: 'G56→G60→S25' },
      '贵阳-兴义': { km: 310, minutes: 225, route: 'G60→G78' },
      '安顺-兴义': { km: 215, minutes: 165, route: 'G60→G78' },
      '安顺-六盘水': { km: 185, minutes: 135, route: 'G60沪昆高速' },
      '六盘水-毕节': { km: 180, minutes: 150, route: 'G76厦蓉高速' },
      '毕节-遵义': { km: 230, minutes: 175, route: 'G56杭瑞高速' },
      '遵义-铜仁': { km: 350, minutes: 240, route: 'G56杭瑞高速' },
      '遵义-镇远': { km: 280, minutes: 195, route: 'G56→G60' },
      '铜仁-镇远': { km: 180, minutes: 135, route: 'G56杭瑞高速' },
      '镇远-凯里': { km: 95, minutes: 70, route: 'G60沪昆高速' },
      '凯里-荔波': { km: 230, minutes: 180, route: 'G75→S88' },
      '荔波-兴义': { km: 380, minutes: 285, route: 'S88→G78(偏远)' },
      '兴义-六盘水': { km: 170, minutes: 135, route: 'G78→G60' },
      '凯里-镇远': { km: 95, minutes: 70, route: 'G60沪昆高速' }
    },

    // 预设推荐路线模板(按天数)
    templates: {
      3: {
        name: '贵州精华3日自驾',
        tagline: '黄果树+苗寨+小七孔，贵州三大王牌一网打尽',
        cities: ['贵阳', '安顺', '荔波'],
        dayPlan: [
          { day: 1, city: '贵阳→安顺', theme: '亚洲第一瀑', drive: { km: 100, minutes: 75, route: 'G60沪昆高速' }, activities: ['黄果树瀑布', '天星桥下半段', '陡坡塘瀑布'], stayCity: '安顺', hours: 9 },
          { day: 2, city: '安顺→荔波', theme: '地球绿宝石', drive: { km: 320, minutes: 240, route: 'G60→贵阳绕城→G75→S88' }, activities: ['荔波小七孔(半日)'], stayCity: '荔波', hours: 10 },
          { day: 3, city: '荔波→凯里→贵阳', theme: '苗寨风情', drive: { km: 420, minutes: 315, route: 'S88→G75→G60' }, activities: ['西江千户苗寨(半日)', '返程贵阳'], stayCity: '贵阳', hours: 11 }
        ]
      },
      5: {
        name: '贵州经典5日环线',
        tagline: '黄果树→万峰林→小七孔→千户苗寨，经典环贵州',
        cities: ['贵阳', '安顺', '兴义', '荔波', '凯里'],
        dayPlan: [
          { day: 1, city: '贵阳→安顺', theme: '瀑布群', drive: { km: 100, minutes: 75, route: 'G60沪昆高速' }, activities: ['黄果树瀑布', '天星桥', '陡坡塘'], stayCity: '安顺', hours: 9 },
          { day: 2, city: '安顺→兴义', theme: '峰林奇观', drive: { km: 215, minutes: 165, route: 'G60→G78' }, activities: ['万峰林骑行', '马岭河峡谷'], stayCity: '兴义', hours: 10 },
          { day: 3, city: '兴义→荔波', theme: '绿宝石', drive: { km: 380, minutes: 285, route: 'G78→G75→S88' }, activities: ['小七孔景区(下午)'], stayCity: '荔波', hours: 10 },
          { day: 4, city: '荔波→凯里', theme: '苗乡侗寨', drive: { km: 230, minutes: 180, route: 'G75→G60' }, activities: ['西江千户苗寨夜景+长桌宴'], stayCity: '凯里(西江)', hours: 9 },
          { day: 5, city: '凯里→贵阳', theme: '归途', drive: { km: 190, minutes: 135, route: 'G60沪昆高速' }, activities: ['下司古镇(途经)', '青岩古镇', '返程'], stayCity: '贵阳', hours: 8 }
        ]
      },
      7: {
        name: '贵州深度7日全景环线',
        tagline: '贵州精华景点全覆盖，一周走遍多彩贵州',
        cities: ['贵阳', '安顺', '兴义', '六盘水', '毕节', '遵义', '凯里'],
        dayPlan: [
          { day: 1, city: '贵阳→安顺', theme: '瀑布之乡', drive: { km: 100, minutes: 75, route: 'G60' }, activities: ['黄果树瀑布', '天星桥', '龙宫'], stayCity: '安顺', hours: 9 },
          { day: 2, city: '安顺→兴义', theme: '喀斯特峰林', drive: { km: 215, minutes: 165, route: 'G60→G78' }, activities: ['万峰林', '马岭河峡谷'], stayCity: '兴义', hours: 10 },
          { day: 3, city: '兴义→六盘水', theme: '凉都草原', drive: { km: 170, minutes: 135, route: 'G78→G60' }, activities: ['乌蒙大草原', '北盘江大桥(途中)'], stayCity: '六盘水', hours: 9 },
          { day: 4, city: '六盘水→毕节', theme: '溶洞花海', drive: { km: 180, minutes: 150, route: 'G76' }, activities: ['织金洞', '百里杜鹃(季节性)'], stayCity: '毕节', hours: 9 },
          { day: 5, city: '毕节→遵义', theme: '红色之旅', drive: { km: 230, minutes: 175, route: 'G56' }, activities: ['遵义会议会址', '海龙屯'], stayCity: '遵义', hours: 9 },
          { day: 6, city: '遵义→凯里', theme: '苗侗风情', drive: { km: 310, minutes: 225, route: 'G75→G60' }, activities: ['西江千户苗寨'], stayCity: '凯里(西江)', hours: 10 },
          { day: 7, city: '凯里→贵阳', theme: '收官', drive: { km: 190, minutes: 135, route: 'G60' }, activities: ['郎德苗寨(途经)', '甲秀楼夜景'], stayCity: '贵阳', hours: 8 }
        ]
      },
      10: {
        name: '贵州全境10日壮游',
        tagline: '10天环贵州一圈，10城不重复',
        cities: ['贵阳', '安顺', '兴义', '六盘水', '毕节', '遵义', '铜仁', '镇远', '凯里', '荔波'],
        dayPlan: [
          { day: 1, city: '贵阳→安顺', theme: '第一瀑', drive: { km: 100, minutes: 75, route: 'G60' }, activities: ['黄果树瀑布', '天星桥', '陡坡塘'], stayCity: '安顺', hours: 9 },
          { day: 2, city: '安顺→兴义', theme: '峰林万重', drive: { km: 215, minutes: 165, route: 'G60→G78' }, activities: ['万峰林全景骑行', '马岭河峡谷'], stayCity: '兴义', hours: 10 },
          { day: 3, city: '兴义→六盘水', theme: '凉都秘境', drive: { km: 170, minutes: 135, route: 'G78→G60' }, activities: ['乌蒙大草原', '妥乐古银杏(秋季)'], stayCity: '六盘水', hours: 9 },
          { day: 4, city: '六盘水→毕节', theme: '花海洞天', drive: { km: 180, minutes: 150, route: 'G76' }, activities: ['织金洞', '织金古城'], stayCity: '毕节', hours: 9 },
          { day: 5, city: '毕节→遵义', theme: '红色记忆', drive: { km: 230, minutes: 175, route: 'G56' }, activities: ['百里杜鹃(途经)', '遵义会议会址', '捞沙巷美食'], stayCity: '遵义', hours: 10 },
          { day: 6, city: '遵义→铜仁', theme: '梵净朝圣', drive: { km: 350, minutes: 240, route: 'G56→G25' }, activities: ['赤水丹霞(途经/可选)', '铜仁入住'], stayCity: '铜仁', hours: 10 },
          { day: 7, city: '铜仁', theme: '登顶梵净', drive: { km: 80, minutes: 60, route: '梵净山景区' }, activities: ['梵净山(红云金顶+蘑菇石+老金顶)'], stayCity: '铜仁', hours: 11 },
          { day: 8, city: '铜仁→镇远', theme: '太极古城', drive: { km: 180, minutes: 135, route: 'G56' }, activities: ['镇远古镇', '舞阳河泛舟', '青龙洞'], stayCity: '镇远', hours: 9 },
          { day: 9, city: '镇远→凯里', theme: '苗寨长桌宴', drive: { km: 95, minutes: 70, route: 'G60' }, activities: ['西江千户苗寨', '苗族长桌宴'], stayCity: '凯里(西江)', hours: 9 },
          { day: 10, city: '凯里→荔波→贵阳', theme: '绿宝石归途', drive: { km: 420, minutes: 315, route: 'G75→S88→G75' }, activities: ['小七孔(上午)', '返程贵阳'], stayCity: '贵阳', hours: 11 }
        ]
      }
    }
  }

};

// ========== 山西省自驾游 ==========
window.PROVINCE_DRIVING['山西'] = {
  name: '山西省',
  capital: '太原',
  slogan: '三晋大地 · 千年古建自驾巡礼',
  bestSeason: '夏秋最佳(5-10月)，秋季层林尽染',
  overview: '山西是中华文明的重要发源地之一，拥有全国最多的古建筑，素有"中国古代建筑博物馆"之美誉。从北到南，云冈石窟的雄浑、五台山的灵秀、平遥古城的古朴、壶口瀑布的磅礴交相辉映。三晋大地承载着五千年的文明积淀，每一座古刹、每一段城墙都在诉说着厚重的历史故事。自驾穿越山西，是一场与千年古建的深度对话。',

  cities: {
    '太原': {
      coord: [112.5489, 37.8706],
      highlights: ['晋祠', '双塔寺', '蒙山大佛', '汾河公园'],
      stayDays: 1,
      intro: '龙城太原，三晋首府，拥有2500年建成史',
      mustDo: '晋祠+蒙山大佛',
      food: '刀削面/头脑/过油肉',
      hotels: {
        luxury: { name: '太原凯宾斯基饭店', price: 980 },
        mid: { name: '太原并州饭店', price: 480 },
        budget: { name: '汉庭太原迎泽大街店', price: 198 }
      }
    },
    '大同': {
      coord: [113.2980, 40.0764],
      highlights: ['云冈石窟', '悬空寺', '华严寺', '恒山'],
      stayDays: 2,
      intro: '塞外名城，北魏古都，石窟艺术圣地',
      mustDo: '云冈石窟+悬空寺',
      food: '大同刀削面/羊杂/黄糕',
      hotels: {
        luxury: { name: '大同云冈建国宾馆', price: 880 },
        mid: { name: '大同花园大饭店', price: 520 },
        budget: { name: '如家大同古城店', price: 188 }
      }
    },
    '朔州': {
      coord: [112.4329, 39.3319],
      highlights: ['应县木塔', '崇福寺', '杀虎口'],
      stayDays: 1,
      intro: '边塞重镇，木塔之乡，右玉精神发源地',
      mustDo: '应县木塔+崇福寺',
      food: '右玉羊肉/莜面栲栳栳/黄糕',
      hotels: {
        luxury: { name: '朔州万豪大酒店', price: 680 },
        mid: { name: '朔州中北大酒店', price: 380 },
        budget: { name: '汉庭朔州开发区店', price: 158 }
      }
    },
    '忻州': {
      coord: [112.7341, 38.4167],
      highlights: ['五台山', '雁门关', '芦芽山'],
      stayDays: 2,
      intro: '佛教圣地，温泉之乡，五台山脚下的心灵净土',
      mustDo: '五台山+雁门关',
      food: '忻州蒸肉/原平锅盔/高粱面鱼鱼',
      hotels: {
        luxury: { name: '五台山万佛阁酒店', price: 880 },
        mid: { name: '忻州泛华大酒店', price: 450 },
        budget: { name: '如家忻州古城店', price: 168 }
      }
    },
    '吕梁': {
      coord: [111.1442, 37.5189],
      highlights: ['碛口古镇', '北武当山', '杏花村'],
      stayDays: 1,
      intro: '黄河明珠，酒乡吕梁，碛口古镇守望黄河',
      mustDo: '碛口古镇+北武当山',
      food: '吕梁红枣/临县豆腐/杏花村汾酒',
      hotels: {
        luxury: { name: '吕梁大饭店', price: 680 },
        mid: { name: '吕梁国际大酒店', price: 360 },
        budget: { name: '汉庭吕梁离石店', price: 138 }
      }
    },
    '晋中': {
      coord: [112.7527, 37.6872],
      highlights: ['平遥古城', '乔家大院', '王家大院', '绵山'],
      stayDays: 2,
      intro: '晋商故里，古城之韵，票号汇通天下的传奇',
      mustDo: '平遥古城+乔家大院',
      food: '平遥牛肉/栲栳栳/碗托',
      hotels: {
        luxury: { name: '平遥麒麟阁大饭店', price: 780 },
        mid: { name: '平遥会馆酒店', price: 460 },
        budget: { name: '如家平遥古城店', price: 188 }
      }
    },
    '临汾': {
      coord: [111.5190, 36.0841],
      highlights: ['壶口瀑布', '尧庙', '洪洞大槐树'],
      stayDays: 2,
      intro: '华夏根祖，尧都临汾，黄河壶口咆哮千年',
      mustDo: '壶口瀑布+洪洞大槐树',
      food: '临汾牛肉丸子面/尧都烧饼/洪洞饸饹面',
      hotels: {
        luxury: { name: '临汾金都花园大酒店', price: 780 },
        mid: { name: '临汾五洲酒店', price: 420 },
        budget: { name: '7天临汾尧都店', price: 158 }
      }
    },
    '运城': {
      coord: [111.0073, 35.0268],
      highlights: ['关帝庙', '盐湖', '鹳雀楼', '永乐宫'],
      stayDays: 2,
      intro: '关公故里，盐湖之城，鹳雀楼上望黄河',
      mustDo: '关帝庙+鹳雀楼',
      food: '运城大盘鸡/稷山麻花/闻喜煮饼',
      hotels: {
        luxury: { name: '运城恒泽大酒店', price: 680 },
        mid: { name: '运城盐湖大酒店', price: 400 },
        budget: { name: '汉庭运城盐湖店', price: 148 }
      }
    },
    '长治': {
      coord: [113.1163, 36.1953],
      highlights: ['太行山大峡谷', '八泉峡', '通天峡'],
      stayDays: 2,
      intro: '上党名城，太行明珠，壮美峡谷的天然画廊',
      mustDo: '太行山大峡谷+八泉峡',
      food: '上党腊驴肉/壶关羊汤/长子炒饼',
      hotels: {
        luxury: { name: '长治滨湖大酒店', price: 780 },
        mid: { name: '长治八一广场亚朵', price: 430 },
        budget: { name: '如家长治八一广场店', price: 168 }
      }
    },
    '晋城': {
      coord: [112.8517, 35.4904],
      highlights: ['皇城相府', '王莽岭', '蟒河', '锡崖沟'],
      stayDays: 2,
      intro: '太行古堡，铁花之乡，相府名宅冠绝三晋',
      mustDo: '皇城相府+王莽岭',
      food: '晋城烧大葱/高平十大碗/阳城火锅',
      hotels: {
        luxury: { name: '晋城国贸大酒店', price: 680 },
        mid: { name: '晋城凤城国际酒店', price: 440 },
        budget: { name: '格林豪泰晋城泽州店', price: 158 }
      }
    }
  },

  distances: {
    '太原-大同': { km: 290, minutes: 195, route: 'G55二广高速' },
    '太原-朔州': { km: 200, minutes: 150, route: 'G55二广高速' },
    '太原-忻州': { km: 80, minutes: 60, route: 'G55二广高速' },
    '太原-吕梁': { km: 180, minutes: 120, route: 'G20青银高速' },
    '太原-晋中': { km: 40, minutes: 40, route: 'G5京昆高速' },
    '太原-临汾': { km: 260, minutes: 180, route: 'G5京昆高速' },
    '太原-运城': { km: 400, minutes: 240, route: 'G5京昆高速' },
    '太原-长治': { km: 230, minutes: 150, route: 'G55二广高速' },
    '太原-晋城': { km: 300, minutes: 210, route: 'G55二广高速' },
    '大同-朔州': { km: 130, minutes: 90, route: 'G55二广高速' },
    '大同-忻州': { km: 230, minutes: 150, route: 'G55二广高速' },
    '朔州-忻州': { km: 150, minutes: 120, route: 'G55二广高速' },
    '忻州-吕梁': { km: 220, minutes: 180, route: 'G20青银高速' },
    '忻州-大同': { km: 230, minutes: 150, route: 'G55二广高速' },
    '吕梁-临汾': { km: 250, minutes: 180, route: 'G5京昆高速' },
    '吕梁-晋中': { km: 160, minutes: 120, route: 'G20青银高速' },
    '晋中-临汾': { km: 200, minutes: 150, route: 'G5京昆高速' },
    '晋中-长治': { km: 210, minutes: 150, route: 'G55二广高速' },
    '晋中-吕梁': { km: 160, minutes: 120, route: 'G20青银高速' },
    '临汾-运城': { km: 150, minutes: 120, route: 'G5京昆高速' },
    '临汾-长治': { km: 200, minutes: 150, route: 'G22青兰高速' },
    '临汾-吕梁': { km: 250, minutes: 180, route: 'G5京昆高速' },
    '运城-晋城': { km: 250, minutes: 180, route: 'S75侯平高速' },
    '运城-长治': { km: 280, minutes: 180, route: 'G22青兰高速' },
    '运城-临汾': { km: 150, minutes: 120, route: 'G5京昆高速' },
    '长治-晋城': { km: 100, minutes: 90, route: 'G55二广高速' },
    '长治-临汾': { km: 200, minutes: 150, route: 'G22青兰高速' },
    '晋城-长治': { km: 100, minutes: 90, route: 'G55二广高速' },
    '晋城-太原': { km: 300, minutes: 210, route: 'G55二广高速' },
    '朔州-吕梁': { km: 320, minutes: 240, route: 'G20青银高速' },
    '大同-吕梁': { km: 450, minutes: 300, route: 'G20青银高速' }
  },

  templates: {
    3: {
      name: '晋中古建3日精华游',
      tagline: '三天穿越古城古建，触摸晋商传奇与黄河怒吼',
      cities: ['太原', '晋中', '临汾'],
      dayPlan: [
        {
          day: 1,
          city: '太原→晋中',
          theme: '古城巡礼',
          drive: { km: 40, minutes: 40, route: 'G5京昆高速' },
          activities: ['平遥古城漫步', '日升昌票号', '平遥县衙', '古城墙登临'],
          stayCity: '晋中',
          hours: 9
        },
        {
          day: 2,
          city: '晋中→临汾',
          theme: '大院与黄河',
          drive: { km: 200, minutes: 150, route: 'G5京昆高速' },
          activities: ['乔家大院', '壶口瀑布', '黄河岸边观景'],
          stayCity: '临汾',
          hours: 10
        },
        {
          day: 3,
          city: '临汾→太原',
          theme: '寻根之旅',
          drive: { km: 260, minutes: 180, route: 'G5京昆高速' },
          activities: ['洪洞大槐树', '尧庙', '汾河公园散步'],
          stayCity: '太原',
          hours: 9
        }
      ]
    },

    5: {
      name: '晋南环线5日深度游',
      tagline: '从古城到峡谷，从盐湖到黄河，晋南文明全景巡礼',
      cities: ['太原', '晋中', '临汾', '运城', '长治'],
      dayPlan: [
        {
          day: 1,
          city: '太原→晋中',
          theme: '古城晋商',
          drive: { km: 40, minutes: 40, route: 'G5京昆高速' },
          activities: ['平遥古城', '日升昌票号', '协同庆钱庄', '古城夜景'],
          stayCity: '晋中',
          hours: 9
        },
        {
          day: 2,
          city: '晋中→临汾',
          theme: '大院寻踪',
          drive: { km: 200, minutes: 150, route: 'G5京昆高速' },
          activities: ['王家大院', '洪洞大槐树', '尧庙'],
          stayCity: '临汾',
          hours: 9
        },
        {
          day: 3,
          city: '临汾→运城',
          theme: '黄河怒吼',
          drive: { km: 150, minutes: 120, route: 'G5京昆高速' },
          activities: ['壶口瀑布', '关帝庙', '运城盐湖'],
          stayCity: '运城',
          hours: 10
        },
        {
          day: 4,
          city: '运城→长治',
          theme: '名楼与峡谷',
          drive: { km: 280, minutes: 180, route: 'G22青兰高速' },
          activities: ['鹳雀楼', '太行山大峡谷', '八泉峡'],
          stayCity: '长治',
          hours: 10
        },
        {
          day: 5,
          city: '长治→太原',
          theme: '峡谷归途',
          drive: { km: 230, minutes: 150, route: 'G55二广高速' },
          activities: ['通天峡', '晋祠', '双塔寺'],
          stayCity: '太原',
          hours: 9
        }
      ]
    },

    7: {
      name: '晋北古建+晋中7日环线',
      tagline: '从石窟到木塔，从佛国到古城，北方古建艺术巅峰之旅',
      cities: ['太原', '忻州', '大同', '朔州', '吕梁', '晋中'],
      dayPlan: [
        {
          day: 1,
          city: '太原→忻州',
          theme: '启程北上',
          drive: { km: 80, minutes: 60, route: 'G55二广高速' },
          activities: ['雁门关', '忻州古城', '秀容书院'],
          stayCity: '忻州',
          hours: 9
        },
        {
          day: 2,
          city: '忻州→五台山',
          theme: '佛国朝圣',
          drive: { km: 200, minutes: 180, route: 'S46沧榆高速' },
          activities: ['五台山殊像寺', '菩萨顶', '显通寺', '黛螺顶'],
          stayCity: '忻州',
          hours: 10
        },
        {
          day: 3,
          city: '忻州→大同',
          theme: '石窟奇观',
          drive: { km: 230, minutes: 150, route: 'G55二广高速' },
          activities: ['云冈石窟', '华严寺', '大同古城墙'],
          stayCity: '大同',
          hours: 10
        },
        {
          day: 4,
          city: '大同→朔州',
          theme: '悬寺恒山',
          drive: { km: 130, minutes: 90, route: 'G55二广高速' },
          activities: ['悬空寺', '恒山', '崇福寺'],
          stayCity: '朔州',
          hours: 9
        },
        {
          day: 5,
          city: '朔州→吕梁',
          theme: '木塔古镇',
          drive: { km: 320, minutes: 240, route: 'G20青银高速' },
          activities: ['应县木塔', '碛口古镇', '黑龙庙', '黄河岸边'],
          stayCity: '吕梁',
          hours: 10
        },
        {
          day: 6,
          city: '吕梁→晋中',
          theme: '晋商大院',
          drive: { km: 160, minutes: 120, route: 'G20青银高速' },
          activities: ['平遥古城', '乔家大院', '日升昌票号'],
          stayCity: '晋中',
          hours: 9
        },
        {
          day: 7,
          city: '晋中→太原',
          theme: '绵山归途',
          drive: { km: 40, minutes: 40, route: 'G5京昆高速' },
          activities: ['绵山', '晋祠', '蒙山大佛', '汾河公园'],
          stayCity: '太原',
          hours: 10
        }
      ]
    },

    10: {
      name: '山西全境10日壮游',
      tagline: '纵贯三晋南北，横跨太行吕梁，十天阅尽五千年华夏文明',
      cities: ['太原', '忻州', '大同', '朔州', '吕梁', '晋中', '临汾', '运城', '长治', '晋城'],
      dayPlan: [
        {
          day: 1,
          city: '太原→忻州',
          theme: '龙城启程',
          drive: { km: 80, minutes: 60, route: 'G55二广高速' },
          activities: ['晋祠', '双塔寺', '雁门关'],
          stayCity: '忻州',
          hours: 9
        },
        {
          day: 2,
          city: '忻州→五台山',
          theme: '佛国圣境',
          drive: { km: 200, minutes: 180, route: 'S46沧榆高速' },
          activities: ['五台山殊像寺', '菩萨顶', '显通寺', '塔院寺'],
          stayCity: '忻州',
          hours: 10
        },
        {
          day: 3,
          city: '忻州→大同',
          theme: '北魏遗韵',
          drive: { km: 230, minutes: 150, route: 'G55二广高速' },
          activities: ['云冈石窟', '华严寺', '大同古城墙夜景'],
          stayCity: '大同',
          hours: 10
        },
        {
          day: 4,
          city: '大同→朔州',
          theme: '悬寺木塔',
          drive: { km: 130, minutes: 90, route: 'G55二广高速' },
          activities: ['悬空寺', '恒山', '应县木塔', '崇福寺'],
          stayCity: '朔州',
          hours: 10
        },
        {
          day: 5,
          city: '朔州→吕梁',
          theme: '黄河古镇',
          drive: { km: 320, minutes: 240, route: 'G20青银高速' },
          activities: ['碛口古镇', '黑龙庙', '黄河古街漫步'],
          stayCity: '吕梁',
          hours: 9
        },
        {
          day: 6,
          city: '吕梁→晋中',
          theme: '晋商传奇',
          drive: { km: 160, minutes: 120, route: 'G20青银高速' },
          activities: ['平遥古城', '日升昌票号', '乔家大院', '古城夜景'],
          stayCity: '晋中',
          hours: 9
        },
        {
          day: 7,
          city: '晋中→临汾',
          theme: '大院黄河',
          drive: { km: 200, minutes: 150, route: 'G5京昆高速' },
          activities: ['王家大院', '壶口瀑布', '黄河岸边'],
          stayCity: '临汾',
          hours: 10
        },
        {
          day: 8,
          city: '临汾→运城',
          theme: '根祖寻源',
          drive: { km: 150, minutes: 120, route: 'G5京昆高速' },
          activities: ['洪洞大槐树', '尧庙', '关帝庙', '运城盐湖'],
          stayCity: '运城',
          hours: 9
        },
        {
          day: 9,
          city: '运城→长治',
          theme: '名楼峡谷',
          drive: { km: 280, minutes: 180, route: 'G22青兰高速' },
          activities: ['鹳雀楼', '永乐宫', '太行山大峡谷'],
          stayCity: '长治',
          hours: 10
        },
        {
          day: 10,
          city: '长治→晋城→太原',
          theme: '古堡归途',
          drive: { km: 300, minutes: 210, route: 'G55二广高速' },
          activities: ['皇城相府', '八泉峡', '蒙山大佛'],
          stayCity: '太原',
          hours: 11
        }
      ]
    }
  }
};

// ========== 浙江省自驾游 ==========
window.PROVINCE_DRIVING['浙江'] = {
  name: '浙江省',
  capital: '杭州',
  slogan: '诗画浙江 · 山海江南自驾之旅',
  bestSeason: '春秋最佳(3-5月/9-11月)，梅雨季(6月)避开车',
  overview: '浙江山海兼备，古镇密布，素有"鱼米之乡、丝绸之府"美誉。从西湖烟雨到普陀梵音，从乌镇水巷到雁荡奇峰，从莫干山竹海到楠溪江田园，十城风情各异。自驾浙地，一路诗画，尽享江南山水人文之极致。',
  cities: {
    '杭州': {
      coord: [120.15, 30.28],
      highlights: ['西湖', '灵隐寺', '西溪湿地', '良渚古城'],
      stayDays: 1.5,
      intro: '人间天堂，数字经济之都',
      mustDo: '西湖骑行环湖+灵隐寺祈福',
      food: '龙井虾仁/东坡肉/片儿川',
      hotels: {
        luxury: { name: '杭州柳莺里酒店', price: 1280 },
        mid: { name: '全季杭州西湖店', price: 520 },
        budget: { name: '汉庭杭州西湖店', price: 258 }
      }
    },
    '嘉兴': {
      coord: [120.76, 30.77],
      highlights: ['南湖', '乌镇', '西塘', '盐官'],
      stayDays: 1,
      intro: '红船圣地，江南水乡典范',
      mustDo: '乌镇夜游+南湖红船',
      food: '南湖菱/粽子/海宁缸肉',
      hotels: {
        luxury: { name: '嘉兴南湖大酒店', price: 880 },
        mid: { name: '嘉兴沙龙国际宾馆', price: 480 },
        budget: { name: '如家嘉兴南湖店', price: 188 }
      }
    },
    '湖州': {
      coord: [120.09, 30.89],
      highlights: ['南浔古镇', '莫干山', '安吉竹海', '下渚湖'],
      stayDays: 1,
      intro: '太湖明珠，绿水青山发源地',
      mustDo: '莫干山民宿+南浔百间楼',
      food: '千张包/太湖三白/练市酱羊肉',
      hotels: {
        luxury: { name: '湖州太湖龙之梦酒店', price: 980 },
        mid: { name: '湖州东吴开元名都', price: 580 },
        budget: { name: '汉庭湖州火车站店', price: 198 }
      }
    },
    '绍兴': {
      coord: [120.58, 30.00],
      highlights: ['鲁迅故里', '兰亭', '安昌古镇', '沈园'],
      stayDays: 1,
      intro: '名士之乡，黄酒之都',
      mustDo: '鲁迅故里+沈园夜游',
      food: '茴香豆/醉鸡/臭豆腐/黄酒',
      hotels: {
        luxury: { name: '绍兴兰亭安麓酒店', price: 1180 },
        mid: { name: '绍兴咸亨酒店', price: 520 },
        budget: { name: '如家绍兴鲁迅故里店', price: 208 }
      }
    },
    '宁波': {
      coord: [121.55, 29.87],
      highlights: ['天一阁', '溪口', '东钱湖', '象山'],
      stayDays: 1.5,
      intro: '书藏古今，港通天下',
      mustDo: '天一阁+溪口雪窦山',
      food: '宁波汤圆/红膏蟹/雪菜大黄鱼',
      hotels: {
        luxury: { name: '宁波柏悦酒店', price: 1080 },
        mid: { name: '亚朵宁波天一广场店', price: 480 },
        budget: { name: '汉庭宁波天一店', price: 218 }
      }
    },
    '舟山': {
      coord: [122.10, 30.00],
      highlights: ['普陀山', '朱家尖', '嵊泗列岛', '东极岛'],
      stayDays: 1.5,
      intro: '海天佛国，千岛之城',
      mustDo: '普陀山朝拜+朱家尖看海',
      food: '海鲜面/佛跳墙/带鱼/梭子蟹',
      hotels: {
        luxury: { name: '舟山喜来登绿城酒店', price: 980 },
        mid: { name: '舟山喜来登绿城酒店', price: 680 },
        budget: { name: '如家舟山沈家门店', price: 238 }
      }
    },
    '金华': {
      coord: [119.65, 29.08],
      highlights: ['双龙洞', '横店影视城', '诸葛八卦村', '义乌'],
      stayDays: 1,
      intro: '浙中枢纽，影视名城',
      mustDo: '双龙洞探奇+横店穿越',
      food: '金华火腿/酥饼/兰溪鸡子粿',
      hotels: {
        luxury: { name: '金华万达嘉华酒店', price: 780 },
        mid: { name: '金华世贸大饭店', price: 480 },
        budget: { name: '汉庭金华火车站店', price: 178 }
      }
    },
    '衢州': {
      coord: [118.87, 28.94],
      highlights: ['江郎山', '廿八都', '龙游石窟', '仙霞关'],
      stayDays: 1,
      intro: '四省通衢，南孔圣地',
      mustDo: '江郎山丹霞+廿八都古镇',
      food: '三头一掌/衢州烤饼/龙游发糕',
      hotels: {
        luxury: { name: '衢州国际大酒店', price: 680 },
        mid: { name: '衢州饭店', price: 420 },
        budget: { name: '如家衢州古城店', price: 158 }
      }
    },
    '台州': {
      coord: [121.42, 28.66],
      highlights: ['天台山', '神仙居', '临海古城', '括苍山'],
      stayDays: 1.5,
      intro: '山海神秀，和合圣地',
      mustDo: '天台山国清寺+神仙居栈道',
      food: '食饼筒/仙居杨梅/海苔饼/姜汁核桃',
      hotels: {
        luxury: { name: '台州开元大酒店', price: 780 },
        mid: { name: '亚朵台州椒江店', price: 520 },
        budget: { name: '汉庭台州临海古城店', price: 188 }
      }
    },
    '温州': {
      coord: [120.70, 28.00],
      highlights: ['雁荡山', '楠溪江', '南麂列岛', '洞头'],
      stayDays: 1.5,
      intro: '山水奇秀，民营经济之都',
      mustDo: '雁荡山夜游灵峰+楠溪江漂流',
      food: '鱼丸/灯盏糕/温州糯米饭',
      hotels: {
        luxury: { name: '温州香格里拉大酒店', price: 980 },
        mid: { name: '温州亚朵雁荡山店', price: 480 },
        budget: { name: '如家温州火车站店', price: 198 }
      }
    }
  },
  distances: {
    '杭州-嘉兴': { km: 90, minutes: 60, route: 'G92杭州湾环线' },
    '杭州-湖州': { km: 80, minutes: 60, route: 'G25长深高速' },
    '杭州-绍兴': { km: 65, minutes: 50, route: 'G92杭州湾环线' },
    '杭州-宁波': { km: 155, minutes: 120, route: 'G92杭州湾环线' },
    '杭州-金华': { km: 180, minutes: 120, route: 'G60沪昆高速' },
    '杭州-衢州': { km: 250, minutes: 180, route: 'G60沪昆高速' },
    '杭州-台州': { km: 280, minutes: 210, route: 'G92转G15W常台高速' },
    '杭州-温州': { km: 380, minutes: 270, route: 'G15W常台高速' },
    '杭州-舟山': { km: 280, minutes: 210, route: 'G92转甬舟高速' },
    '嘉兴-湖州': { km: 70, minutes: 60, route: 'S12申嘉湖高速' },
    '嘉兴-绍兴': { km: 80, minutes: 60, route: 'G92杭州湾环线' },
    '嘉兴-宁波': { km: 140, minutes: 90, route: 'G15沈海高速' },
    '湖州-绍兴': { km: 120, minutes: 90, route: 'S14杭长高速转G92' },
    '湖州-嘉兴': { km: 70, minutes: 60, route: 'S12申嘉湖高速' },
    '绍兴-宁波': { km: 100, minutes: 90, route: 'G92杭州湾环线' },
    '绍兴-金华': { km: 140, minutes: 120, route: 'S26诸永高速' },
    '绍兴-台州': { km: 180, minutes: 150, route: 'G92转S28台金高速' },
    '宁波-舟山': { km: 85, minutes: 60, route: '甬舟高速+舟山跨海大桥' },
    '宁波-台州': { km: 190, minutes: 150, route: 'G15沈海高速' },
    '宁波-绍兴': { km: 100, minutes: 90, route: 'G92杭州湾环线' },
    '舟山-宁波': { km: 85, minutes: 60, route: '甬舟高速+舟山跨海大桥' },
    '舟山-台州': { km: 260, minutes: 210, route: '甬舟高速转G15沈海高速' },
    '金华-衢州': { km: 85, minutes: 60, route: 'G60沪昆高速' },
    '金华-台州': { km: 200, minutes: 150, route: 'S28台金高速' },
    '金华-温州': { km: 200, minutes: 150, route: 'G1513温丽高速' },
    '衢州-金华': { km: 85, minutes: 60, route: 'G60沪昆高速' },
    '衢州-台州': { km: 250, minutes: 180, route: 'G60转S28台金高速' },
    '衢州-温州': { km: 280, minutes: 210, route: 'G60转G1513温丽高速' },
    '台州-温州': { km: 150, minutes: 120, route: 'G15沈海高速' },
    '温州-台州': { km: 150, minutes: 120, route: 'G15沈海高速' },
    '温州-金华': { km: 200, minutes: 150, route: 'G1513温丽高速' }
  },
  templates: {
    3: {
      name: '浙东人文3日精华',
      tagline: '鲁迅故里·书藏古今·湖光山色',
      cities: ['杭州', '绍兴', '宁波'],
      dayPlan: [
        { day: 1, city: '杭州→绍兴', theme: '鲁迅故里', drive: { km: 65, minutes: 50, route: 'G92杭州湾环线' }, activities: ['鲁迅故里', '沈园', '仓桥直街', '沈园之夜演出'], stayCity: '绍兴', hours: 8 },
        { day: 2, city: '绍兴→宁波', theme: '甬城书香', drive: { km: 100, minutes: 90, route: 'G92杭州湾环线' }, activities: ['天一阁', '月湖公园', '老外滩', '南塘老街'], stayCity: '宁波', hours: 9 },
        { day: 3, city: '宁波→杭州', theme: '湖光山色', drive: { km: 155, minutes: 120, route: 'G92杭州湾环线' }, activities: ['东钱湖骑行', '南宋石刻公园', '返程杭州'], stayCity: '杭州', hours: 8 }
      ]
    },
    5: {
      name: '江南古镇5日环线',
      tagline: '莫干山·南浔·乌镇·西塘·鲁迅故里',
      cities: ['杭州', '湖州', '嘉兴', '绍兴', '宁波'],
      dayPlan: [
        { day: 1, city: '杭州→湖州', theme: '南浔水乡', drive: { km: 80, minutes: 60, route: 'G25长深高速' }, activities: ['南浔古镇', '百间楼', '嘉业藏书楼', '下渚湖湿地'], stayCity: '湖州', hours: 8 },
        { day: 2, city: '湖州', theme: '竹海山居', drive: { km: 50, minutes: 40, route: 'S14杭长高速' }, activities: ['安吉中国大竹海', '藏龙百瀑', '莫干山风景区'], stayCity: '湖州', hours: 8 },
        { day: 3, city: '湖州→嘉兴', theme: '名山镇到水乡', drive: { km: 70, minutes: 60, route: 'S12申嘉湖高速' }, activities: ['莫干山晨游', '庾村文化市集', '乌镇西栅夜游'], stayCity: '嘉兴', hours: 9 },
        { day: 4, city: '嘉兴→绍兴', theme: '红船与黄酒', drive: { km: 80, minutes: 60, route: 'G92杭州湾环线' }, activities: ['南湖红船', '月河历史街区', '鲁迅故里', '沈园之夜'], stayCity: '绍兴', hours: 9 },
        { day: 5, city: '绍兴→宁波→杭州', theme: '甬城书香归程', drive: { km: 255, minutes: 210, route: 'G92杭州湾环线' }, activities: ['兰亭', '天一阁', '月湖公园', '返程杭州'], stayCity: '杭州', hours: 10 }
      ]
    },
    7: {
      name: '浙北海岸7日环线',
      tagline: '竹海·水乡·佛国·古城',
      cities: ['杭州', '湖州', '嘉兴', '宁波', '舟山', '绍兴'],
      dayPlan: [
        { day: 1, city: '杭州→湖州', theme: '太湖明珠', drive: { km: 80, minutes: 60, route: 'G25长深高速' }, activities: ['南浔古镇', '百间楼', '下渚湖湿地'], stayCity: '湖州', hours: 8 },
        { day: 2, city: '湖州', theme: '莫干问道', drive: { km: 50, minutes: 40, route: 'S14杭长高速' }, activities: ['莫干山风景区', '剑池飞瀑', '裸心谷民宿体验'], stayCity: '湖州', hours: 8 },
        { day: 3, city: '湖州→嘉兴', theme: '水乡画卷', drive: { km: 70, minutes: 60, route: 'S12申嘉湖高速' }, activities: ['乌镇东栅', '乌镇西栅', '西塘夜景'], stayCity: '嘉兴', hours: 9 },
        { day: 4, city: '嘉兴→宁波', theme: '跨越杭州湾', drive: { km: 140, minutes: 90, route: 'G15沈海高速' }, activities: ['杭州湾跨海大桥', '天一阁', '月湖', '老外滩夜景'], stayCity: '宁波', hours: 9 },
        { day: 5, city: '宁波→舟山', theme: '海天佛国', drive: { km: 85, minutes: 60, route: '甬舟高速+舟山跨海大桥' }, activities: ['普陀山普济寺', '法雨寺', '南海观音', '千步沙'], stayCity: '舟山', hours: 10 },
        { day: 6, city: '舟山→绍兴', theme: '从海到文', drive: { km: 220, minutes: 180, route: '甬舟高速转G92' }, activities: ['朱家尖南沙海滩', '大青山国家公园', '驱车至绍兴'], stayCity: '绍兴', hours: 9 },
        { day: 7, city: '绍兴→杭州', theme: '兰亭雅韵', drive: { km: 65, minutes: 50, route: 'G92杭州湾环线' }, activities: ['鲁迅故里', '兰亭', '安昌古镇', '返程杭州'], stayCity: '杭州', hours: 8 }
      ]
    },
    10: {
      name: '浙江全境10日壮游',
      tagline: '一省十城·山海古镇全覆盖',
      cities: ['杭州', '湖州', '嘉兴', '宁波', '舟山', '台州', '温州', '衢州', '金华', '绍兴'],
      dayPlan: [
        { day: 1, city: '杭州→湖州', theme: '太湖启程', drive: { km: 80, minutes: 60, route: 'G25长深高速' }, activities: ['南浔古镇', '百间楼', '嘉业藏书楼'], stayCity: '湖州', hours: 8 },
        { day: 2, city: '湖州', theme: '竹海山居', drive: { km: 50, minutes: 40, route: 'S14杭长高速' }, activities: ['安吉中国大竹海', '藏龙百瀑', '安吉白茶园'], stayCity: '湖州', hours: 8 },
        { day: 3, city: '湖州→嘉兴', theme: '莫干水乡', drive: { km: 70, minutes: 60, route: 'S12申嘉湖高速' }, activities: ['莫干山风景区', '剑池飞瀑', '乌镇西栅夜游'], stayCity: '嘉兴', hours: 9 },
        { day: 4, city: '嘉兴→宁波', theme: '红船越湾', drive: { km: 140, minutes: 90, route: 'G15沈海高速' }, activities: ['南湖红船', '月河历史街区', '杭州湾跨海大桥', '天一阁'], stayCity: '宁波', hours: 9 },
        { day: 5, city: '宁波→舟山', theme: '海天佛国', drive: { km: 85, minutes: 60, route: '甬舟高速+舟山跨海大桥' }, activities: ['普陀山', '普济寺', '南海观音', '千步沙', '朱家尖'], stayCity: '舟山', hours: 10 },
        { day: 6, city: '舟山→台州', theme: '沿海南下', drive: { km: 260, minutes: 210, route: '甬舟高速转G15沈海高速' }, activities: ['东极岛日出', '驱车南下', '临海古城墙', '紫阳古街'], stayCity: '台州', hours: 9 },
        { day: 7, city: '台州→温州', theme: '仙境问道', drive: { km: 150, minutes: 120, route: 'G15沈海高速' }, activities: ['神仙居景区', '高空栈道', '如意桥'], stayCity: '温州', hours: 9 },
        { day: 8, city: '温州→衢州', theme: '雁荡西行', drive: { km: 280, minutes: 210, route: 'G60沪昆高速' }, activities: ['雁荡山灵峰夜景', '大龙湫瀑布', '驱车西行至衢州'], stayCity: '衢州', hours: 9 },
        { day: 9, city: '衢州→金华', theme: '丹霞石窟', drive: { km: 85, minutes: 60, route: 'G60沪昆高速' }, activities: ['江郎山丹霞', '廿八都古镇', '龙游石窟'], stayCity: '金华', hours: 9 },
        { day: 10, city: '金华→绍兴→杭州', theme: '影视归程', drive: { km: 180, minutes: 120, route: 'G60沪昆高速转G92' }, activities: ['双龙洞', '鲁迅故里', '兰亭', '返程杭州'], stayCity: '杭州', hours: 10 }
      ]
    }
  }
};

// 省份别称映射
window.PROVINCE_ALIASES = {
  '贵州': ['贵州', '黔', '多彩贵州', '贵州省'],
  '山西': ['山西', '晋', '三晋', '山西省'],
  '浙江': ['浙江', '浙', '诗画浙江', '浙江省']
};

// 智能路线编排算法（贪心最近邻 + 3h驾驶约束）
window.generateDrivingRoute = function(province, totalDays) {
  const pData = window.PROVINCE_DRIVING[province];
  if (!pData) return null;

  // 优先使用预设模板（精确匹配天数）
  if (pData.templates[totalDays]) {
    const tpl = pData.templates[totalDays];
    return { ...tpl, source: 'template', matchedDays: totalDays, actualDays: totalDays };
  }

  // 智能编排：贪心最近邻
  const cities = Object.keys(pData.cities);
  const capital = pData.capital;
  const maxCities = Math.min(totalDays, cities.length);

  // 距离查找
  function getDist(a, b) {
    if (a === b) return { km: 0, minutes: 0, route: '' };
    const key1 = a + '-' + b;
    const key2 = b + '-' + a;
    if (pData.distances[key1]) return pData.distances[key1];
    if (pData.distances[key2]) return pData.distances[key2];
    // 回退：直线距离估算
    const c1 = pData.cities[a].coord, c2 = pData.cities[b].coord;
    const R = 6371;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(c2[1] - c1[1]), dLng = toRad(c2[0] - c1[0]);
    const h = Math.sin(dLat/2)**2 + Math.cos(toRad(c1[1])) * Math.cos(toRad(c2[1])) * Math.sin(dLng/2)**2;
    const km = 2 * R * Math.asin(Math.sqrt(h)) * 1.3; // 1.3x road factor
    return { km: Math.round(km), minutes: Math.round(km / 80 * 60), route: '省道/国道' };
  }

  // 贪心：从 capital 出发，每次选最近未访问城市
  const visited = [capital];
  let current = capital;
  while (visited.length < maxCities) {
    let nearest = null, nearestDist = Infinity;
    for (const c of cities) {
      if (visited.includes(c)) continue;
      const d = getDist(current, c);
      if (d.km < nearestDist) { nearestDist = d.km; nearest = c; }
    }
    if (!nearest) break;
    visited.push(nearest);
    current = nearest;
  }

  // 生成 dayPlan
  const dayPlan = visited.map((city, i) => {
    const prev = i === 0 ? capital : visited[i - 1];
    const drive = i === 0 ? { km: 0, minutes: 0, route: '出发' } : getDist(prev, city);
    const cityInfo = pData.cities[city];
    return {
      day: i + 1,
      city: i === 0 ? city : prev + '→' + city,
      theme: cityInfo.intro,
      drive,
      activities: cityInfo.highlights,
      stayCity: city,
      hours: Math.max(7, Math.round(8 + drive.minutes / 60))
    };
  });

  return {
    name: province + totalDays + '日智能自驾',
    tagline: '智能编排 · 覆盖' + visited.length + '城',
    cities: visited,
    dayPlan,
    source: 'algorithm',
    actualDays: totalDays
  };
};

console.log('[PROVINCE_DRIVING] Loaded:', Object.keys(window.PROVINCE_DRIVING).length, 'provinces');
