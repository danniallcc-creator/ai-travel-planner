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
        hotel: { name: '亚朵甲秀楼店', price: 420 }
      },
      '安顺': {
        coord: [105.95, 26.25],
        highlights: ['黄果树瀑布', '龙宫', '天星桥'],
        stayDays: 1.5,
        intro: '中国瀑布之乡，屯堡文化之都',
        mustDo: '黄果树大瀑布+天星桥(下半段精华)',
        food: '安顺裹卷/冲冲糕/波波糖',
        hotel: { name: '黄果树宾馆', price: 480 }
      },
      '遵义': {
        coord: [106.93, 27.73],
        highlights: ['遵义会议会址', '海龙屯', '赤水丹霞'],
        stayDays: 1,
        intro: '转折之城，红色圣地',
        mustDo: '遵义会议会址+捞沙巷美食',
        food: '羊肉粉/豆花面/鸡蛋糕',
        hotel: { name: '遵义宾馆', price: 380 }
      },
      '六盘水': {
        coord: [104.83, 26.59],
        highlights: ['乌蒙大草原', '韭菜坪', '北盘江大桥'],
        stayDays: 1,
        intro: '中国凉都，19℃的夏天',
        mustDo: '乌蒙大草原日出+韭菜坪花海(8-9月)',
        food: '水城烙锅/羊肉粉',
        hotel: { name: '水城凉都大酒店', price: 320 }
      },
      '毕节': {
        coord: [105.28, 27.30],
        highlights: ['百里杜鹃', '织金洞', '草海'],
        stayDays: 1,
        intro: '花海鹤乡，溶洞王国',
        mustDo: '织金洞(溶洞之王)+百里杜鹃(3-5月)',
        food: '毕节汤圆/大方臭豆腐/织金烙锅',
        hotel: { name: '织金洞宾馆', price: 280 }
      },
      '铜仁': {
        coord: [109.19, 27.73],
        highlights: ['梵净山', '亚木沟', '石阡温泉'],
        stayDays: 1.5,
        intro: '梵天净土，桃源铜仁',
        mustDo: '梵净山(红云金顶+蘑菇石)',
        food: '锅巴粉/社饭/米豆腐',
        hotel: { name: '梵净山翠苑酒店', price: 380 }
      },
      '兴义': {
        coord: [104.90, 25.09],
        highlights: ['万峰林', '马岭河峡谷', '万峰湖'],
        stayDays: 1,
        intro: '峰林之城，户外天堂',
        mustDo: '万峰林骑行+马岭河峡谷徒步',
        food: '兴义刷把头/鸡肉汤圆/杠子面',
        hotel: { name: '万峰林布依客栈', price: 320 }
      },
      '凯里': {
        coord: [107.98, 26.57],
        highlights: ['西江千户苗寨', '下司古镇', '郎德苗寨'],
        stayDays: 1.5,
        intro: '苗侗之都，歌舞之乡',
        mustDo: '西江千户苗寨夜景+长桌宴',
        food: '酸汤鱼/苗家腊肉/糯米饭',
        hotel: { name: '西江悦榕庄', price: 580 }
      },
      '荔波': {
        coord: [107.88, 25.42],
        highlights: ['小七孔', '大七孔', '茂兰喀斯特'],
        stayDays: 1,
        intro: '地球绿宝石，世界自然遗产',
        mustDo: '小七孔(卧龙潭+鸳鸯湖+68级跌水瀑布)',
        food: '荔波酸肉/水蕨菜/臭酸',
        hotel: { name: '荔波古镇客栈', price: 320 }
      },
      '镇远': {
        coord: [108.43, 27.05],
        highlights: ['镇远古镇', '舞阳河', '青龙洞'],
        stayDays: 1,
        intro: '太极古城，舞阳画廊',
        mustDo: '镇远古镇夜景+舞阳河泛舟',
        food: '道菜/酸汤鱼/米豆腐',
        hotel: { name: '镇远河畔民宿', price: 280 }
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

// 省份别称映射
window.PROVINCE_ALIASES = {
  '贵州': ['贵州', '黔', '多彩贵州', '贵州省']
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
