// manually define coffee cooking methods here.
// p: 粉重
// r: 粉水比, r=15 表示分水比為 1:15
// s: 一二段微調. s=2 表示一二段水量比為 2:1
let coffeeMethods = [{
    name: '一刀流',
    steps: [{
        desc: '悶蒸',
        water: 'p*b',
        totalWater: 0,
        time: '30 ~ 40 秒',
        remark: '時間以排氣完成為主'
    },{
        desc: '注水',
        water: 'p*r - p*b',
        totalWater: 0,
        time: '2 分鐘以內',
        remark: ''
    }]
},{
    name: '三刀流',
    steps: [{
        desc: '悶蒸',
        water: 'p*b',
        totalWater: 0,
        time: '30 ~ 40 秒',
        remark: '時間以排氣完成為主'
    },{
        desc: '第一段注水',
        water: '(s/(s+1))*2*(p*r - p*b)/3',
        totalWater: 0,
        time: '30 ~ 40 秒',
        remark: '全部滴完即可, 可根據喜好微調一二段注水量'
    },{
        desc: '第二段注水',
        water: '(1/(s+1))*2*(p*r - p*b)/3',
        totalWater: 0,
        time: '30 ~ 40 秒',
        remark: '全部滴完即可, 可根據喜好微調一二段注水量'
    },{
        desc: '第三段注水',
        water: '(p*r - p*b)/3',
        totalWater: 0,
        time: '30 ~ 40 秒',
        remark: '總時間大約控制在 2:00 到 2:30'
    }]
},{
    name: '四六法',
    steps: [{
        desc: '第一段注水',
        water: '(s/(s+1))*2*p*r/5',
        totalWater: 0,
        time: '45 秒',
        remark: '同時進行悶蒸. 就算滴完也要等完時間, 可根據喜好微調一二段注水量'
    },{
        desc: '第二段注水',
        water: '(1/(s+1))*2*p*r/5',
        totalWater: 0,
        time: '1 分 30 秒',
        remark: '就算滴完也要等完時間, 可根據喜好微調一二段注水量'
    },{
        desc: '第三段注水',
        water: 'p*r/5',
        totalWater: 0,
        time: '2 分 15 秒',
        remark: '就算滴完也要等完時間'
    },{
        desc: '第四段注水',
        water: 'p*r/5',
        totalWater: 0,
        time: '3 分 0 秒',
        remark: '就算滴完也要等完時間'
    },{
        desc: '第五段注水',
        water: 'p*r/5',
        totalWater: 0,
        time: '3 分 45 秒',
        remark: '全部滴完即可'
    }]
},{
    name: '粕谷哲惡魔法',
    steps: [{
        desc: '第一段注水',
        water: '(s/(s+1))*2*p*r/5',
        totalWater: 0,
        time: '30 秒',
        remark: '同時進行悶蒸. 水溫 92-94℃, 使用 Switch 濾杯, 換到一般滴濾狀態'
    },{
        desc: '第二段注水',
        water: '(1/(s+1))*2*p*r/5',
        totalWater: 0,
        time: '1 分 15 秒',
        remark: '全部滴完後, 切換至浸泡狀態'
    },{
        desc: '第三段注水',
        water: 'p*r*3/5',
        totalWater: 0,
        time: '1 分 45 秒',
        remark: '水溫降到 70℃ 總時間不要超過 3 分鐘'
    }]
}];
S