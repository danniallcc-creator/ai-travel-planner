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

window.PROVINCE_DRIVING['新疆'] = {
  name: '新疆维吾尔自治区',
  capital: '乌鲁木齐',
  slogan: '大美新疆，一路向西',
  bestSeason: '6-10月',
  overview: '新疆是中国面积最大的省级行政区，占国土总面积的六分之一。这里汇聚了雪山、草原、沙漠、戈壁、湖泊等极致自然景观，同时也是古丝绸之路的核心区域，拥有喀什古城、龟兹石窟等世界级文化遗产。独库公路、伊昭公路等网红自驾线路贯穿南北疆，让旅行者在一趟旅程中体验四季变换与多元民族风情。',

  cities: {
    '乌鲁木齐': {
      coord: [87.6177, 43.8256],
      highlights: ['天山天池', '国际大巴扎', '红山公园'],
      stayDays: 1.5,
      intro: '新疆首府，丝绸之路经济带核心城市，现代与传统交融的西部大都会',
      mustDo: '逛国际大巴扎品尝烤肉，登红山公园俯瞰全城，驱车前往天山天池赏高山湖泊',
      food: '大盘鸡、烤包子、拌面、手抓饭',
      hotels: {
        luxury: { name: '乌鲁木齐万达文华酒店', price: 880 },
        mid: { name: '乌鲁木齐全季酒店', price: 380 },
        budget: { name: '乌鲁木齐如家酒店', price: 180 }
      }
    },
    '伊宁': {
      coord: [81.3297, 43.9167],
      highlights: ['赛里木湖', '那拉提草原', '薰衣草基地'],
      stayDays: 2,
      intro: '伊犁河谷明珠，塞外江南，中国薰衣草之乡',
      mustDo: '漫步薰衣草花海，环游赛里木湖赏湖光山色，傍晚在伊犁河大桥看日落',
      food: '手抓饭、烤全羊、酸奶疙瘩、马肠子',
      hotels: {
        luxury: { name: '伊宁天缘国际酒店', price: 680 },
        mid: { name: '伊宁亚朵酒店', price: 350 },
        budget: { name: '伊宁汉庭酒店', price: 160 }
      }
    },
    '喀什': {
      coord: [75.9893, 39.4677],
      highlights: ['喀什古城', '艾提尕尔清真寺', '帕米尔高原'],
      stayDays: 2,
      intro: '丝路千年古城，维吾尔文化发源地，有"不到喀什不算到新疆"之说',
      mustDo: '漫步喀什古城百年老茶馆，参观艾提尕尔清真寺，驱车帕米尔高原赏慕士塔格峰',
      food: '烤鸽子、缸子肉、烤蛋、石榴汁',
      hotels: {
        luxury: { name: '喀什深业丽笙酒店', price: 780 },
        mid: { name: '喀什维也纳酒店', price: 320 },
        budget: { name: '喀什如家酒店', price: 150 }
      }
    },
    '克拉玛依': {
      coord: [84.8733, 45.5906],
      highlights: ['世界魔鬼城', '黑油山', '独山子大峡谷'],
      stayDays: 1,
      intro: '因石油而兴的戈壁明珠，拥有震撼的雅丹地貌和工业遗产',
      mustDo: '日落时分游览魔鬼城赏雅丹奇观，登黑油山看天然原油溢出',
      food: '克拉玛依牛肉面、红烧羊腿、戈壁烤肉',
      hotels: {
        luxury: { name: '克拉玛依玛依塔柯酒店', price: 680 },
        mid: { name: '克拉玛依锦江之星', price: 300 },
        budget: { name: '克拉玛依7天酒店', price: 150 }
      }
    },
    '库车': {
      coord: [82.9617, 41.7261],
      highlights: ['天山大峡谷', '克孜尔千佛洞', '库车王府'],
      stayDays: 1.5,
      intro: '古龟兹国所在地，丝路北道重镇，石窟艺术宝库',
      mustDo: '穿越天山大峡谷赏红色岩壁，参观克孜尔千佛洞赏龟兹壁画',
      food: '库车大馕、烤羊排、缸子肉、酸奶',
      hotels: {
        luxury: { name: '库车龟兹国际酒店', price: 580 },
        mid: { name: '库车维也纳酒店', price: 280 },
        budget: { name: '库车格林豪泰酒店', price: 140 }
      }
    },
    '阿勒泰': {
      coord: [88.1395, 47.8484],
      highlights: ['喀纳斯湖', '禾木村', '可可托海'],
      stayDays: 2,
      intro: '金山银水，人间净土，北疆最美风光带',
      mustDo: '探秘喀纳斯湖水怪传说，住禾木村木屋看晨雾炊烟，游可可托海赏额尔齐斯大峡谷',
      food: '冷水鱼、手抓肉、哈萨克奶茶、包尔萨克',
      hotels: {
        luxury: { name: '阿勒泰阳光酒店', price: 680 },
        mid: { name: '阿勒泰全季酒店', price: 350 },
        budget: { name: '阿勒泰汉庭酒店', price: 160 }
      }
    },
    '博乐': {
      coord: [82.0667, 44.9044],
      highlights: ['赛里木湖', '怪石沟', '艾比湖'],
      stayDays: 1,
      intro: '赛里木湖畔城市，西陲边城，通往中亚的门户',
      mustDo: '环湖赛里木湖赏高山湖泊蓝天，游览怪石沟赏花岗岩奇石地貌',
      food: '博乐烤鱼、手抓肉、纳仁面、酥油茶',
      hotels: {
        luxury: { name: '博乐银都酒店', price: 580 },
        mid: { name: '博乐锦江之星', price: 280 },
        budget: { name: '博乐7天酒店', price: 130 }
      }
    },
    '吐鲁番': {
      coord: [89.1841, 42.9513],
      highlights: ['火焰山', '葡萄沟', '坎儿井'],
      stayDays: 1.5,
      intro: '中国最热城市，葡萄之乡，丝路古城高昌故地',
      mustDo: '打卡火焰山感受极致高温，漫步葡萄沟品尝各色葡萄，参观坎儿井了解古人智慧',
      food: '烤全羊、葡萄干、哈密瓜、烤馕',
      hotels: {
        luxury: { name: '吐鲁番友谊峰大酒店', price: 620 },
        mid: { name: '吐鲁番亚朵酒店', price: 310 },
        budget: { name: '吐鲁番如家酒店', price: 140 }
      }
    },
    '那拉提': {
      coord: [84.0167, 43.3000],
      highlights: ['那拉提草原', '巩乃斯林场', '独库公路'],
      stayDays: 1.5,
      intro: '空中草原，伊犁河谷最美牧场，哈萨克风情小镇',
      mustDo: '骑马穿越空中草原赏雪山花海，自驾独库公路体验一日四季',
      food: '手抓羊肉、哈萨克奶茶、马肠子、那仁',
      hotels: {
        luxury: { name: '那拉提金陵山庄', price: 780 },
        mid: { name: '那拉提旅游宾馆', price: 350 },
        budget: { name: '那拉提牧家乐', price: 180 }
      }
    },
    '石河子': {
      coord: [86.0412, 44.3056],
      highlights: ['军垦博物馆', '北湖公园', '军垦第一犁'],
      stayDays: 1,
      intro: '戈壁明珠，军垦名城，兵团精神的发祥地',
      mustDo: '参观军垦博物馆了解兵团屯垦戍边历史，北湖公园休闲漫步',
      food: '石河子大盘鸡、凉皮子、军垦红烧肉',
      hotels: {
        luxury: { name: '石河子天富大酒店', price: 580 },
        mid: { name: '石河子锦江之星', price: 260 },
        budget: { name: '石河子汉庭酒店', price: 130 }
      }
    }
  },

  distances: {
    // ── 乌鲁木齐 ↔ 各城市 ──
    '乌鲁木齐-吐鲁番':   { km: 180,  minutes: 120,  route: 'G30连霍高速' },
    '吐鲁番-乌鲁木齐':   { km: 180,  minutes: 120,  route: 'G30连霍高速' },
    '乌鲁木齐-石河子':   { km: 150,  minutes: 90,   route: 'G30连霍高速' },
    '石河子-乌鲁木齐':   { km: 150,  minutes: 90,   route: 'G30连霍高速' },
    '乌鲁木齐-克拉玛依': { km: 400,  minutes: 270,  route: 'G217/G3014' },
    '克拉玛依-乌鲁木齐': { km: 400,  minutes: 270,  route: 'G217/G3014' },
    '乌鲁木齐-阿勒泰':   { km: 650,  minutes: 420,  route: 'G216/S21阿乌高速' },
    '阿勒泰-乌鲁木齐':   { km: 650,  minutes: 420,  route: 'S21阿乌高速/G216' },
    '乌鲁木齐-博乐':     { km: 560,  minutes: 360,  route: 'G30连霍高速' },
    '博乐-乌鲁木齐':     { km: 560,  minutes: 360,  route: 'G30连霍高速' },
    '乌鲁木齐-伊宁':     { km: 700,  minutes: 480,  route: 'G30连霍高速' },
    '伊宁-乌鲁木齐':     { km: 700,  minutes: 480,  route: 'G30连霍高速' },
    '乌鲁木齐-那拉提':   { km: 520,  minutes: 360,  route: 'G217/G218' },
    '那拉提-乌鲁木齐':   { km: 520,  minutes: 360,  route: 'G218/G217' },
    '乌鲁木齐-库车':     { km: 740,  minutes: 480,  route: 'G30连霍高速' },
    '库车-乌鲁木齐':     { km: 740,  minutes: 480,  route: 'G30连霍高速' },
    '乌鲁木齐-喀什':     { km: 1460, minutes: 960,  route: 'G3012/G30' },
    '喀什-乌鲁木齐':     { km: 1460, minutes: 960,  route: 'G3012/G30' },

    // ── 吐鲁番 ↔ 各城市 ──
    '吐鲁番-石河子':     { km: 300,  minutes: 210,  route: 'G30连霍高速' },
    '石河子-吐鲁番':     { km: 300,  minutes: 210,  route: 'G30连霍高速' },
    '吐鲁番-克拉玛依':   { km: 560,  minutes: 360,  route: 'G3014/G30' },
    '克拉玛依-吐鲁番':   { km: 560,  minutes: 360,  route: 'G30/G3014' },
    '吐鲁番-库车':       { km: 560,  minutes: 360,  route: 'G30连霍高速' },
    '库车-吐鲁番':       { km: 560,  minutes: 360,  route: 'G30连霍高速' },
    '吐鲁番-喀什':       { km: 1280, minutes: 840,  route: 'G3012吐和高速' },
    '喀什-吐鲁番':       { km: 1280, minutes: 840,  route: 'G3012吐和高速' },
    '吐鲁番-博乐':       { km: 740,  minutes: 480,  route: 'G30连霍高速' },
    '博乐-吐鲁番':       { km: 740,  minutes: 480,  route: 'G30连霍高速' },
    '吐鲁番-伊宁':       { km: 880,  minutes: 600,  route: 'G30连霍高速' },
    '伊宁-吐鲁番':       { km: 880,  minutes: 600,  route: 'G30连霍高速' },
    '吐鲁番-那拉提':     { km: 680,  minutes: 420,  route: 'G30/G217/G218' },
    '那拉提-吐鲁番':     { km: 680,  minutes: 420,  route: 'G218/G217/G30' },
    '吐鲁番-阿勒泰':     { km: 830,  minutes: 540,  route: 'G30/G216' },
    '阿勒泰-吐鲁番':     { km: 830,  minutes: 540,  route: 'G216/G30' },

    // ── 石河子 ↔ 各城市 ──
    '石河子-克拉玛依':   { km: 280,  minutes: 180,  route: 'G3014' },
    '克拉玛依-石河子':   { km: 280,  minutes: 180,  route: 'G3014' },
    '石河子-博乐':       { km: 450,  minutes: 300,  route: 'G30连霍高速' },
    '博乐-石河子':       { km: 450,  minutes: 300,  route: 'G30连霍高速' },
    '石河子-伊宁':       { km: 550,  minutes: 360,  route: 'G30连霍高速' },
    '伊宁-石河子':       { km: 550,  minutes: 360,  route: 'G30连霍高速' },
    '石河子-阿勒泰':     { km: 750,  minutes: 480,  route: 'G216/S21' },
    '阿勒泰-石河子':     { km: 750,  minutes: 480,  route: 'S21/G216' },
    '石河子-库车':       { km: 870,  minutes: 570,  route: 'G30连霍高速' },
    '库车-石河子':       { km: 870,  minutes: 570,  route: 'G30连霍高速' },
    '石河子-那拉提':     { km: 370,  minutes: 240,  route: 'G217' },
    '那拉提-石河子':     { km: 370,  minutes: 240,  route: 'G217' },
    '石河子-喀什':       { km: 1310, minutes: 900,  route: 'G3012/G30' },
    '喀什-石河子':       { km: 1310, minutes: 900,  route: 'G30/G3012' },

    // ── 克拉玛依 ↔ 各城市 ──
    '克拉玛依-阿勒泰':   { km: 400,  minutes: 270,  route: 'G217' },
    '阿勒泰-克拉玛依':   { km: 400,  minutes: 270,  route: 'G217' },
    '克拉玛依-博乐':     { km: 450,  minutes: 300,  route: 'G3014/G30' },
    '博乐-克拉玛依':     { km: 450,  minutes: 300,  route: 'G30/G3014' },
    '克拉玛依-伊宁':     { km: 600,  minutes: 420,  route: 'G3014/G30' },
    '伊宁-克拉玛依':     { km: 600,  minutes: 420,  route: 'G30/G3014' },
    '克拉玛依-库车':     { km: 800,  minutes: 540,  route: 'G217独库公路' },
    '库车-克拉玛依':     { km: 800,  minutes: 540,  route: 'G217独库公路' },
    '克拉玛依-那拉提':   { km: 550,  minutes: 360,  route: 'G217独库公路' },
    '那拉提-克拉玛依':   { km: 550,  minutes: 360,  route: 'G217独库公路' },
    '克拉玛依-喀什':     { km: 1500, minutes: 1020, route: 'G3014/G3012' },
    '喀什-克拉玛依':     { km: 1500, minutes: 1020, route: 'G3012/G3014' },

    // ── 阿勒泰 ↔ 各城市 ──
    '阿勒泰-博乐':       { km: 850,  minutes: 600,  route: 'G217/G3014' },
    '博乐-阿勒泰':       { km: 850,  minutes: 600,  route: 'G3014/G217' },
    '阿勒泰-伊宁':       { km: 1050, minutes: 720,  route: 'G217/G30' },
    '伊宁-阿勒泰':       { km: 1050, minutes: 720,  route: 'G30/G217' },
    '阿勒泰-库车':       { km: 1200, minutes: 840,  route: 'G217独库公路' },
    '库车-阿勒泰':       { km: 1200, minutes: 840,  route: 'G217独库公路' },
    '阿勒泰-那拉提':     { km: 900,  minutes: 600,  route: 'G217' },
    '那拉提-阿勒泰':     { km: 900,  minutes: 600,  route: 'G217' },
    '阿勒泰-喀什':       { km: 2100, minutes: 1440, route: 'G217/G3012' },
    '喀什-阿勒泰':       { km: 2100, minutes: 1440, route: 'G3012/G217' },

    // ── 博乐 ↔ 各城市 ──
    '博乐-伊宁':         { km: 300,  minutes: 210,  route: 'G30连霍高速' },
    '伊宁-博乐':         { km: 300,  minutes: 210,  route: 'G30连霍高速' },
    '博乐-库车':         { km: 750,  minutes: 480,  route: 'G30/G217' },
    '库车-博乐':         { km: 750,  minutes: 480,  route: 'G217/G30' },
    '博乐-那拉提':       { km: 570,  minutes: 360,  route: 'G30/G218' },
    '那拉提-博乐':       { km: 570,  minutes: 360,  route: 'G218/G30' },
    '博乐-喀什':         { km: 1500, minutes: 1020, route: 'G30/G3012' },
    '喀什-博乐':         { km: 1500, minutes: 1020, route: 'G3012/G30' },

    // ── 伊宁 ↔ 各城市 ──
    '伊宁-那拉提':       { km: 270,  minutes: 210,  route: 'G218' },
    '那拉提-伊宁':       { km: 270,  minutes: 210,  route: 'G218' },
    '伊宁-库车':         { km: 530,  minutes: 360,  route: 'G218/G217独库公路' },
    '库车-伊宁':         { km: 530,  minutes: 360,  route: 'G217/G218' },
    '伊宁-喀什':         { km: 1230, minutes: 840,  route: 'G30/G3012' },
    '喀什-伊宁':         { km: 1230, minutes: 840,  route: 'G3012/G30' },

    // ── 那拉提 ↔ 各城市 ──
    '那拉提-库车':       { km: 260,  minutes: 210,  route: 'G217独库公路' },
    '库车-那拉提':       { km: 260,  minutes: 210,  route: 'G217独库公路' },
    '那拉提-喀什':       { km: 980,  minutes: 660,  route: 'G217/G3012' },
    '喀什-那拉提':       { km: 980,  minutes: 660,  route: 'G3012/G217' },

    // ── 库车 ↔ 喀什 ──
    '库车-喀什':         { km: 710,  minutes: 480,  route: 'G3012吐和高速' },
    '喀什-库车':         { km: 710,  minutes: 480,  route: 'G3012吐和高速' }
  },

  templates: {
    3: {
      name: '天山天池+吐鲁番3日快游',
      tagline: '三天领略天山南北精华，天池火洲一次打卡',
      cities: ['乌鲁木齐', '吐鲁番'],
      dayPlan: [
        {
          day: 1,
          city: '乌鲁木齐',
          theme: '抵达乌鲁木齐，市区游览',
          drive: null,
          activities: ['抵达乌鲁木齐', '游览国际大巴扎采购手信', '登红山公园俯瞰城市全景', '品尝大盘鸡和烤包子'],
          stayCity: '乌鲁木齐',
          hours: 6
        },
        {
          day: 2,
          city: '乌鲁木齐→天山天池→吐鲁番',
          theme: '天山天池仙境，火洲吐鲁番',
          drive: { km: 180, minutes: 120, route: 'G30连霍高速' },
          activities: ['上午驱车前往天山天池', '游览天池赏高山湖泊雪峰', '下午经G30前往吐鲁番', '夜游吐鲁番老城'],
          stayCity: '吐鲁番',
          hours: 10
        },
        {
          day: 3,
          city: '吐鲁番→乌鲁木齐',
          theme: '火焰山葡萄沟，返程收官',
          drive: { km: 180, minutes: 120, route: 'G30连霍高速' },
          activities: ['打卡火焰山感受极致高温', '漫步葡萄沟品尝各色鲜葡萄', '参观坎儿井了解古代水利智慧', '返回乌鲁木齐送机/站'],
          stayCity: '乌鲁木齐',
          hours: 8
        }
      ]
    },

    5: {
      name: '北疆经典5日环线',
      tagline: '魔鬼城雅丹奇观+喀纳斯人间仙境，北疆最震撼风光',
      cities: ['乌鲁木齐', '克拉玛依', '阿勒泰', '博乐'],
      dayPlan: [
        {
          day: 1,
          city: '乌鲁木齐→克拉玛依',
          theme: '出发戈壁油城',
          drive: { km: 400, minutes: 270, route: 'G217/G3014' },
          activities: ['上午从乌鲁木齐出发', '沿途欣赏戈壁荒漠风光', '下午抵达克拉玛依', '游览黑油山看天然原油溢出'],
          stayCity: '克拉玛依',
          hours: 8
        },
        {
          day: 2,
          city: '克拉玛依',
          theme: '魔鬼城日落奇观',
          drive: null,
          activities: ['上午游览世界魔鬼城', '拍摄雅丹地貌震撼全景', '日落时分捕捉光影变幻', '品尝克拉玛依牛肉面'],
          stayCity: '克拉玛依',
          hours: 7
        },
        {
          day: 3,
          city: '克拉玛依→阿勒泰',
          theme: '奔赴人间净土喀纳斯',
          drive: { km: 400, minutes: 270, route: 'G217' },
          activities: ['沿G217北上前往阿勒泰', '沿途经过百里油田壮观景象', '下午抵达布尔津/阿勒泰', '逛布尔津河堤夜市烤鱼'],
          stayCity: '阿勒泰',
          hours: 8
        },
        {
          day: 4,
          city: '阿勒泰(喀纳斯/禾木)',
          theme: '喀纳斯湖+禾木仙境',
          drive: null,
          activities: ['清晨前往喀纳斯景区', '乘船游湖寻水怪赏三湾', '下午前往禾木村', '住木屋看炊烟晨雾星空'],
          stayCity: '阿勒泰',
          hours: 10
        },
        {
          day: 5,
          city: '阿勒泰→乌鲁木齐',
          theme: '返程收官，回味北疆',
          drive: { km: 650, minutes: 420, route: 'S21阿乌高速' },
          activities: ['早起拍摄禾木晨雾', '走S21阿乌高速穿越古尔班通古特沙漠', '沿途欣赏沙漠公路壮阔风光', '下午抵达乌鲁木齐返程'],
          stayCity: '乌鲁木齐',
          hours: 10
        }
      ]
    },

    7: {
      name: '伊犁草原7日深度游',
      tagline: '赛里木湖+薰衣草+空中草原+独库公路，伊犁最美环线',
      cities: ['乌鲁木齐', '石河子', '博乐', '伊宁', '那拉提'],
      dayPlan: [
        {
          day: 1,
          city: '乌鲁木齐→石河子',
          theme: '军垦名城初体验',
          drive: { km: 150, minutes: 90, route: 'G30连霍高速' },
          activities: ['上午从乌鲁木齐出发', '抵达石河子参观军垦博物馆', '了解兵团屯垦戍边历史', '北湖公园休闲漫步'],
          stayCity: '石河子',
          hours: 6
        },
        {
          day: 2,
          city: '石河子→博乐',
          theme: '西行奔赴赛里木湖',
          drive: { km: 450, minutes: 300, route: 'G30连霍高速' },
          activities: ['沿G30连霍高速一路向西', '穿越天山北坡经济带', '下午抵达博乐', '游览怪石沟赏花岗岩奇石'],
          stayCity: '博乐',
          hours: 8
        },
        {
          day: 3,
          city: '博乐→伊宁',
          theme: '赛里木湖环湖，伊犁河谷',
          drive: { km: 300, minutes: 210, route: 'G30连霍高速' },
          activities: ['上午环湖赛里木湖', '拍摄大西洋最后一滴眼泪蓝天雪峰', '经果子沟大桥前往伊宁', '傍晚伊犁河大桥观日落'],
          stayCity: '伊宁',
          hours: 9
        },
        {
          day: 4,
          city: '伊宁',
          theme: '薰衣草花海+六星街风情',
          drive: null,
          activities: ['上午游览霍城薰衣草基地', '漫步紫色花海拍照打卡', '下午逛六星街品俄式风情', '品尝手抓饭和烤全羊'],
          stayCity: '伊宁',
          hours: 8
        },
        {
          day: 5,
          city: '伊宁→那拉提',
          theme: '空中草原策马奔腾',
          drive: { km: 270, minutes: 210, route: 'G218' },
          activities: ['沿G218前往那拉提', '沿途欣赏伊犁河谷田园风光', '下午抵达那拉提草原', '骑马穿越空中草原赏花海'],
          stayCity: '那拉提',
          hours: 8
        },
        {
          day: 6,
          city: '那拉提→库车方向→那拉提',
          theme: '独库公路+草原深度',
          drive: { km: 260, minutes: 210, route: 'G217独库公路' },
          activities: ['自驾独库公路最美路段', '穿越铁力买提达坂赏雪山', '沿途拍摄高山草甸峡谷', '返回那拉提河谷草原休整'],
          stayCity: '那拉提',
          hours: 9
        },
        {
          day: 7,
          city: '那拉提→乌鲁木齐',
          theme: '返程收官，回望草原',
          drive: { km: 520, minutes: 360, route: 'G218/G217/G30' },
          activities: ['清晨最后看一眼草原日出', '经G217独库公路北段返回', '穿越天山腹地壮丽峡谷', '下午抵达乌鲁木齐返程'],
          stayCity: '乌鲁木齐',
          hours: 10
        }
      ]
    },

    10: {
      name: '南北疆全景10日大环线',
      tagline: '一次走遍南北疆，雪山草原沙漠古城全览',
      cities: ['乌鲁木齐', '吐鲁番', '石河子', '克拉玛依', '阿勒泰', '博乐', '伊宁', '那拉提', '库车', '喀什'],
      dayPlan: [
        {
          day: 1,
          city: '乌鲁木齐→吐鲁番',
          theme: '火洲丝路古城',
          drive: { km: 180, minutes: 120, route: 'G30连霍高速' },
          activities: ['上午从乌鲁木齐出发', '游览火焰山景区打卡', '漫步葡萄沟品尝鲜果', '参观坎儿井了解古人智慧'],
          stayCity: '吐鲁番',
          hours: 8
        },
        {
          day: 2,
          city: '吐鲁番→石河子',
          theme: '军垦名城戈壁明珠',
          drive: { km: 300, minutes: 210, route: 'G30连霍高速' },
          activities: ['经G30西行前往石河子', '参观军垦博物馆', '北湖公园休闲漫步', '品尝石河子大盘鸡'],
          stayCity: '石河子',
          hours: 7
        },
        {
          day: 3,
          city: '石河子→克拉玛依',
          theme: '石油之城雅丹奇观',
          drive: { km: 280, minutes: 180, route: 'G3014' },
          activities: ['沿G3014前往克拉玛依', '游览世界魔鬼城雅丹地貌', '日落时分拍摄奇幻光影', '黑油山看天然原油溢出'],
          stayCity: '克拉玛依',
          hours: 8
        },
        {
          day: 4,
          city: '克拉玛依→阿勒泰',
          theme: '奔赴喀纳斯人间仙境',
          drive: { km: 400, minutes: 270, route: 'G217' },
          activities: ['沿G217北上前往阿勒泰', '经过百里油田壮观景象', '下午抵达布尔津', '河堤夜市品尝烤冷水鱼'],
          stayCity: '阿勒泰',
          hours: 8
        },
        {
          day: 5,
          city: '阿勒泰(喀纳斯/禾木)',
          theme: '喀纳斯湖+禾木仙境',
          drive: null,
          activities: ['清晨前往喀纳斯景区', '乘船游湖赏三湾秋色', '下午前往禾木村', '住图瓦人木屋看星空'],
          stayCity: '阿勒泰',
          hours: 10
        },
        {
          day: 6,
          city: '阿勒泰→克拉玛依→博乐',
          theme: '穿越北疆到赛里木湖畔',
          drive: { km: 850, minutes: 600, route: 'G217/G3014' },
          activities: ['早起离开禾木村', '经克拉玛依南下', '下午抵达博乐', '傍晚赛里木湖畔赏日落'],
          stayCity: '博乐',
          hours: 11
        },
        {
          day: 7,
          city: '博乐→伊宁',
          theme: '赛里木湖环湖+伊犁风情',
          drive: { km: 300, minutes: 210, route: 'G30连霍高速' },
          activities: ['上午环湖赛里木湖全景', '经果子沟大桥壮观穿越', '下午抵达伊宁逛六星街', '伊犁河大桥观壮丽日落'],
          stayCity: '伊宁',
          hours: 8
        },
        {
          day: 8,
          city: '伊宁→那拉提→库车',
          theme: '独库公路一日穿越四季',
          drive: { km: 530, minutes: 420, route: 'G218/G217独库公路' },
          activities: ['上午经G218到那拉提', '空中草原短暂停留骑马', '走独库公路穿越天山', '穿越大小龙池抵达库车'],
          stayCity: '库车',
          hours: 10
        },
        {
          day: 9,
          city: '库车→喀什',
          theme: '龟兹古韵到丝路名城',
          drive: { km: 710, minutes: 480, route: 'G3012吐和高速' },
          activities: ['上午参观克孜尔千佛洞', '穿越天山大峡谷赏红崖', '经G3012前往喀什', '夜游喀什古城品美食'],
          stayCity: '喀什',
          hours: 10
        },
        {
          day: 10,
          city: '喀什→乌鲁木齐',
          theme: '古城晨光与归程',
          drive: { km: 1460, minutes: 960, route: 'G3012/G30' },
          activities: ['清晨漫步喀什古城老茶馆', '参观艾提尕尔清真寺', '经G3012/G30返回乌鲁木齐', '沿途回望南疆壮阔大地'],
          stayCity: '乌鲁木齐',
          hours: 12
        }
      ]
    }
  }
};


// 省份别称映射
window.PROVINCE_ALIASES = {
  '贵州': ['贵州', '黔', '多彩贵州', '贵州省'],
  '山西': ['山西', '晋', '三晋', '山西省'],
  '浙江': ['浙江', '浙', '诗画浙江', '浙江省'],
  '新疆': ['新疆', '疆', '大美新疆', '新疆维吾尔自治区']
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
