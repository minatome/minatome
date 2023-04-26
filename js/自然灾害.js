var myChart_1 = echarts.init(document.getElementById("农作物"))
var Crop_area = {
    color: ['#fc97af', '#87f7cf'],
    title: {
        text: '农作物受灾面积——绝收面积',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        show: true,
        left: 'center',
        top: 20,
        textStyle: {
            color: 'white',
            fontSize: 12
        },
    },
    axisPointer: {
        link: [
            {
                xAxisIndex: 'all'
            }
        ]
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [
        {
            left: 50,
            right: 12,
            height: '30%'
        },
        {
            left: 50,
            right: 12,
            top: '50%',
            height: '30%'
        }
    ],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: { onZero: true },
            axisLabel: {
                show: false,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            data: []
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            axisLine: { onZero: true },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            data: [],
            position: 'top'
        }
    ],
    yAxis: [
        {
            name: '受灾面积(千公顷)',
            nameTextStyle: {
                color: 'white', fontSize: 13, fontWeight: 'bold'
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white', type: 'solid', width: 0.3
                }
            }
        },
        {
            gridIndex: 1,
            name: '绝收面积(千公顷)',
            nameTextStyle: {
                color: 'white', fontSize: 13, fontWeight: 'bold'
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white', type: 'solid', width: 0.3
                }
            },
            inverse: true
        }
    ],
    series: [
        {
            name: '受灾面积',
            type: 'line',
            symbolSize: 8,
            data: []
        },
        {
            name: '绝收面积',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [],
            symbolSize: 8,
        }
    ]
};

var myChart_2 = echarts.init(document.getElementById("总受灾"))
var area_total = {
    color: ['#f7c5a0', '#dd6b66'],
    title: {
        text: '受灾近二十年农作物总面积',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: [
        {
            left: 50,
            right: 55,
            height: '80%'
        }
    ],
    legend: {
        show: true,
        left: 'center',
        top: 30,
        textStyle: {
            color: 'white',
            fontSize: 12
        }
    },
    xAxis: {
        name: '千公顷',
        nameTextStyle: {
            color: 'white', fontSize: 13
        },
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'white', type: 'solid', width: 0.3
            }
        },
    },
    yAxis: {
        // name: '灾害类型',
        type: 'category',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        inverse: true,
        data: ['旱灾', '洪涝等', '风灾', '低温']
    },
    series: [

        {
            name: '受灾面积',
            type: 'bar',
            realtimeSort: true,
            data: []
        },
        {
            name: '绝收面积',
            type: 'bar',
            data: []
        }
    ]
};

var myChart_3 = echarts.init(document.getElementById("死亡"))
var Death = {
    title: {
        text: '近二十年死亡情况',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series: [
        {
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            top: '20%',
            data: [],
            label: {
                formatter: '{b|{b}: }{c|{c}} {per|({d}%)}',
                rich: {
                    b: {
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    c: {
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#87f7cf',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 33
                    }
                }
            }
        }
    ]
};

var myChart_4 = echarts.init(document.getElementById("经济"))
// import ecStat from 'echarts-stat';
// Vue.prototype.$ecStat = ecStat
// echarts.registerTransform(ecStat.transform.regression);
var Economic_loss = {
    color: ['#f7f494'],
    dataset: [
        {
            source: []
        }
    ],
    title: {
        text: '自然灾害直接经济损失',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        name: '年份',
        nameTextStyle: {
            color: 'white', fontSize: 12
        },
        scale: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [
        {
            name: '经济损失',
            type: 'scatter',
            datasetIndex: 0
        }
    ]
};

var myChart_5 = echarts.init(document.getElementById("旱"))
var Drought_area = {
    color: ['#dd6b66', '#759aa0'],
    title: {
        text: '旱灾受灾-绝收面积',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        left: 'center',
        top: 30,
        textStyle: {
            color: 'white',
            fontSize: 12
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        data: []
    },
    yAxis: {
        name: '面积(千公顷)',
        nameTextStyle: {
            color: 'white', fontSize: 13
        },
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed', width: 0.3
            }
        }
    },
    series: [
        {
            name: '受灾面积',
            type: 'line',
            data: [],
            markPoint: {
                data: [{ type: 'max', name: 'Max' }]
            },
            markLine: {
                data: [{type: 'average', name: 'Avg' }]
            }
        },
        {
            name: '绝收面积',
            type: 'line',
            data: [],
            markPoint: {
                data: [{ type: 'max', name: 'Max' }]
            },
            markLine: {
                data: [
                    { type: 'average', name: 'Avg' }
                ]
            }
        }
    ]
};

var myChart_6 = echarts.init(document.getElementById("洪"))
var zaihai_area = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF'],
    title: {
        text: '洪涝等灾害受灾—绝收面积',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    legend: {
        show: true,
        left: 'center',
        top: 30,
        textStyle: {
            color: 'white',
            fontSize: 12
        }
    },
    xAxis: [{
        type: 'category',
        data: [],
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
    }],
    yAxis: [{
        name: '面积(千公顷)',
        nameTextStyle: {
            color: 'white', fontSize: 13
        },
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed', width: 0.3
            }
        }
    }],
    series: [
        {
            name: '受灾面积',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 3
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '绝收面积',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 3
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 191, 0)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(224, 62, 76)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: []
        }
    ]
};


/** @type EChartsOption */
var myChart_7 = echarts.init(document.getElementById("风"))
var Storm_area = {
    color: ['#f7c5a0','#76f2f2'],
    title: {
        text: "风雹灾害受灾面积—绝收面积",
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        show: true,
        left: 'center',
        top: 30,
        textStyle: {
            color: 'white',
            fontSize: 12
        }
    },
    xAxis: [
        {
            name: '年份',
            nameTextStyle: {
                color: 'white', fontSize: 13
            },
            type: 'category',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            data: [],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            name: '面积(千公顷)',
            nameTextStyle: {
                color: 'white', fontSize: 13
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed', width: 0.3
                }
            }
        }
    ],
    series: [
        {
            name: '受灾面积',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 千公顷';
                }
            },
            data: []
        },
        {
            name: '绝收面积',
            type: 'line',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 千公顷';
                }
            },
            data: []
        }
    ]
};

var myChart_8 = echarts.init(document.getElementById("温"))
var Temperature_area = {
    color: ['#fc97af','#72ccff'],
    title: {
        text: '低温、雪灾受灾—绝收面积',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: true,
        left: 'right',
        top: 30,
        textStyle: {
            color: 'white',
            fontSize: 12
        }
    },
    xAxis: [
        {
            name: '年份',
            nameTextStyle: {
                color: 'white', fontSize: 13
            },
            type: 'category',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            data: []
        }
    ],
    yAxis: [
        {
            name: '面积(千公顷)',
            nameTextStyle: {
                color: 'white', fontSize: 13
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed', width: 0.3
                }
            }
        }
    ],
    series: [
        {
            name: '受灾面积',
            type: 'bar',
            data: [],
            markPoint: {
                data: [{ type: 'max', name: 'Max' }]
            },
            markLine: {
                data: [{ type: 'average', name: 'Avg' }]
            }
        },
        {
            name: '绝收面积',
            type: 'bar',
            data: [],
            markPoint: {
                data: [{ type: 'max', name: 'Max' }]
            },
            markLine: {
                data: [{ type: 'average', name: 'Avg' }]
            }
        }
    ]
};

/** @type EChartsOption */
var myChart_9 = echarts.init(document.getElementById("伤亡"))
var Flood_hit = {
    title: {
        text: '近二十年受灾人口情况',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    series: [
        {
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            top: '10%',
            label: {
                formatter: '{b|{b}: }{c|{c}} {per|({d}%)}',
                rich: {
                    b: {
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    c: {
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#87f7cf',
                        fontSize: 12,
                        fontWeight: 'bold',
                        lineHeight: 33
                    }
                }
            },
            data: []
        }
    ]
};
var place = '北京市';
// 1图
$.get("data/nurture.json").done(function (data) {
    var d = data[place];
    var Crops_area1 = []
    var Crops_area2 = []
    var Year = []
    for (var i = 0; i < d.length; i++) {
        Crops_area1.push(d[i].Crops_area1)
        Crops_area2.push(d[i].Crops_area2)
        Year.push(d[d.length - i - 1].year)
    }
    myChart_1.setOption({
        xAxis: [
            { data: Year },
            { data: Year, }
        ],
        series: [
            { data: Crops_area1 },
            { data: Crops_area2 }
        ]
    })
})
var option = Crop_area
myChart_1.setOption(option);

// 2图
$.get("data/nurture.json").done(function (data) {
    var d = data[place]
    var Drought1 = 0
    var Drought2 = 0
    var zaihai1 = 0
    var zaihai2 = 0
    var Storm1 = 0
    var Storm2 = 0
    var Temperature1 = 0
    var Temperature2 = 0
    for (var i = d.length - 1; i >= 0; i--) {
        Drought1 = Drought1 + d[i].Drought_area1
        Drought2 = Drought2 + d[i].Drought_area2
        zaihai1 = zaihai1 + d[i].zaihai_area1
        zaihai2 = zaihai2 + d[i].zaihai_area2
        Storm1 = Storm1 + d[i].Storm_area1
        Storm2 = Storm2 + d[i].Storm_area2
        Temperature1 = Temperature1 + d[i].Temperature_area1
        Temperature2 = Temperature2 + d[i].Temperature_area2
    }
    myChart_2.setOption({
        series: [
            { data: [Drought1, zaihai1, Storm1, Temperature1] },
            { data: [Drought2, zaihai2, Storm2, Temperature2] }
        ]
    })
})
var option = area_total;
myChart_2.setOption(option);

// 3图
$.get("data/nurture.json").done(function (data) {
    var da = data[place];
    var d = [];
    for (var i = da.length - 1; i >= 0; i--) {
        if (da[i].Dead_population > 0) {
            d.push({ name: da[i].year, value: da[i].Dead_population })
        }
    }
    myChart_3.setOption({
        series: [{
            data: d
        }]
    });
});
var option = Death
myChart_3.setOption(option);

// 4图
$.get("data/nurture.json").done(function (data) {
    var da = data[place]
    var Year = []
    var d = []
    for (var i = da.length - 1; i >= 0; i--) {
        Year.push(da[i].year)
        d.push([da[i].year, da[i].Economic_loss])
    }


    myChart_4.setOption({
        dataset: [
            {
                source: d
            }
        ],
        xAxis: {
            data: Year
        }
    });
});
var option = Economic_loss;
myChart_4.setOption(option);

// 5图
$.get("data/nurture.json").done(function (data) {
    var d = data[place]
    var Year = []
    var area1 = []
    var area2 = []
    for (var i = d.length - 1; i >= 0; i--) {
        Year.push(d[i].year);
        area1.push(d[i].Drought_area1);
        area2.push(d[i].Drought_area2);
    }
    ;
    ;
    ;
    myChart_5.setOption({
        xAxis: [{
            data: Year
        }],
        series: [
            { name: '受灾面积', data: area1 },
            { name: '绝收面积', data: area2 }
        ]
    });
});
var option = Drought_area;
myChart_5.setOption(option);

// 6图

$.get("data/nurture.json").done(function (data) {
    var d = data[place]
    var Year = []
    var area1 = []
    var area2 = []
    for (var i = d.length - 1; i >= 0; i--) {
        Year.push(d[i].year);
        area1.push(d[i].zaihai_area1);
        area2.push(d[i].zaihai_area2);
    }
    ;
    ;
    ;
    myChart_6.setOption({
        xAxis: [{
            data: Year
        }],
        series: [
            { name: '受灾面积', data: area1 },
            { name: '绝收面积', data: area2 }
        ]
    });
});
var option = zaihai_area;
myChart_6.setOption(option);

// 7图
$.get("data/nurture.json").done(function (data) {
    var d = data[place]
    var Year = []
    var area1 = []
    var area2 = []
    for (var i = d.length - 1; i >= 0; i--) {
        Year.push(d[i].year);
        area1.push(d[i].Storm_area1);
        area2.push(d[i].Storm_area2);
    }
    ;
    ;
    ;
    myChart_7.setOption({
        xAxis: [{
            data: Year
        }],
        series: [
            { name: '受灾面积', data: area1 },
            { name: '绝收面积', data: area2 }
        ]
    });
});
var option = Storm_area;
myChart_7.setOption(option);

// 8图
$.get("data/nurture.json").done(function (data) {
    var d = data[place]
    var Year = []
    var area1 = []
    var area2 = []
    for (var i = d.length - 1; i >= 0; i--) {
        Year.push(d[i].year);
        area1.push(d[i].Temperature_area1);
        area2.push(d[i].Temperature_area2);
    }
    ;
    ;
    ;
    myChart_8.setOption({
        xAxis: [{
            data: Year
        }],
        series: [
            { name: '受灾面积', data: area1 },
            { name: '绝收面积', data: area2 }
        ]
    });
});
var option = Temperature_area;
myChart_8.setOption(option);


$.get("data/nurture.json").done(function (data) {
    var da = data[place]
    var d = [];
    for (var i = da.length - 1; i >= 0; i--) {
        if (da[i].Flood_hit_population > 0) {
            d.push({ name: da[i].year, value: da[i].Flood_hit_population })
        }
    }

    ;
    myChart_9.setOption({
        series: [{
            data: d
        }]
    });
});
var option = Flood_hit;
myChart_9.setOption(option);

const selectElement = document.getElementById('mySelect');
selectElement.onchange = function () {
    var place = this.value;
    var str = this.value + '自然灾害'
    title = document.getElementById('title')
    title.innerHTML = str;

    // 1图
    $.get("data/nurture.json").done(function (data) {
        var d = data[place];
        var Crops_area1 = []
        var Crops_area2 = []
        var Year = []
        for (var i = 0; i < d.length; i++) {
            Crops_area1.push(d[i].Crops_area1)
            Crops_area2.push(d[i].Crops_area2)
            Year.push(d[d.length - i - 1].year)
        }
        myChart_1.setOption({
            xAxis: [
                { data: Year },
                { data: Year, }
            ],
            series: [
                { data: Crops_area1 },
                { data: Crops_area2 }
            ]
        })
    })
    var option = Crop_area
    myChart_1.setOption(option);

    // 2图
    $.get("data/nurture.json").done(function (data) {
        var d = data[place]
        var Drought1 = 0
        var Drought2 = 0
        var zaihai1 = 0
        var zaihai2 = 0
        var Storm1 = 0
        var Storm2 = 0
        var Temperature1 = 0
        var Temperature2 = 0
        for (var i = d.length - 1; i >= 0; i--) {
            Drought1 = Drought1 + d[i].Drought_area1
            Drought2 = Drought2 + d[i].Drought_area2
            zaihai1 = zaihai1 + d[i].zaihai_area1
            zaihai2 = zaihai2 + d[i].zaihai_area2
            Storm1 = Storm1 + d[i].Storm_area1
            Storm2 = Storm2 + d[i].Storm_area2
            Temperature1 = Temperature1 + d[i].Temperature_area1
            Temperature2 = Temperature2 + d[i].Temperature_area2
        }
        myChart_2.setOption({
            series: [
                { data: [Drought1, zaihai1, Storm1, Temperature1] },
                { data: [Drought2, zaihai2, Storm2, Temperature2] }
            ]
        })
    })
    var option = area_total;
    myChart_2.setOption(option);

    // 3图
    $.get("data/nurture.json").done(function (data) {
        var da = data[place];
        var d = [];
        for (var i = da.length - 1; i >= 0; i--) {
            if (da[i].Dead_population > 0) {
                d.push({ name: da[i].year, value: da[i].Dead_population })
            }
        }
        myChart_3.setOption({
            series: [{
                data: d
            }]
        });
    });
    var option = Death
    myChart_3.setOption(option);

    // 4图
    $.get("data/nurture.json").done(function (data) {
        var da = data[place]
        var Year = []
        var d = []
        for (var i = da.length - 1; i >= 0; i--) {
            Year.push(da[i].year)
            d.push([da[i].year, da[i].Economic_loss])
        }


        myChart_4.setOption({
            dataset: [
                {
                    source: d
                }
            ],
            xAxis: {
                data: Year
            }
        });
    });
    var option = Economic_loss;
    myChart_4.setOption(option);

    // 5图
    $.get("data/nurture.json").done(function (data) {
        var d = data[place]
        var Year = []
        var area1 = []
        var area2 = []
        for (var i = d.length - 1; i >= 0; i--) {
            Year.push(d[i].year);
            area1.push(d[i].Drought_area1);
            area2.push(d[i].Drought_area2);
        }
        ;
        ;
        ;
        myChart_5.setOption({
            xAxis: [{
                data: Year
            }],
            series: [
                { name: '受灾面积', data: area1 },
                { name: '绝收面积', data: area2 }
            ]
        });
    });
    var option = Drought_area;
    myChart_5.setOption(option);

    // 6图

    $.get("data/nurture.json").done(function (data) {
        var d = data[place]
        var Year = []
        var area1 = []
        var area2 = []
        for (var i = d.length - 1; i >= 0; i--) {
            Year.push(d[i].year);
            area1.push(d[i].zaihai_area1);
            area2.push(d[i].zaihai_area2);
        }
        ;
        ;
        ;
        myChart_6.setOption({
            xAxis: [{
                data: Year
            }],
            series: [
                { name: '受灾面积', data: area1 },
                { name: '绝收面积', data: area2 }
            ]
        });
    });
    var option = zaihai_area;
    myChart_6.setOption(option);

    // 7图
    $.get("data/nurture.json").done(function (data) {
        var d = data[place]
        var Year = []
        var area1 = []
        var area2 = []
        for (var i = d.length - 1; i >= 0; i--) {
            Year.push(d[i].year);
            area1.push(d[i].Storm_area1);
            area2.push(d[i].Storm_area2);
        }
        ;
        ;
        ;
        myChart_7.setOption({
            xAxis: [{
                data: Year
            }],
            series: [
                { name: '受灾面积', data: area1 },
                { name: '绝收面积', data: area2 }
            ]
        });
    });
    var option = Storm_area;
    myChart_7.setOption(option);

    // 8图
    $.get("data/nurture.json").done(function (data) {
        var d = data[place]
        var Year = []
        var area1 = []
        var area2 = []
        for (var i = d.length - 1; i >= 0; i--) {
            Year.push(d[i].year);
            area1.push(d[i].Temperature_area1);
            area2.push(d[i].Temperature_area2);
        }
        ;
        ;
        ;
        myChart_8.setOption({
            xAxis: [{
                data: Year
            }],
            series: [
                { name: '受灾面积', data: area1 },
                { name: '绝收面积', data: area2 }
            ]
        });
    });
    var option = Temperature_area;
    myChart_8.setOption(option);


    $.get("data/nurture.json").done(function (data) {
        var da = data[place]
        var d = [];
        for (var i = da.length - 1; i >= 0; i--) {
            if (da[i].Flood_hit_population > 0) {
                d.push({ name: da[i].year, value: da[i].Flood_hit_population })
            }
        }

        ;
        myChart_9.setOption({
            series: [{
                data: d
            }]
        });
    });
    var option = Flood_hit;
    myChart_9.setOption(option);
};
window.addEventListener("resize", function(){
    myChart_1.resize();
    myChart_2.resize();
    myChart_3.resize();
    myChart_4.resize();
    myChart_5.resize();
    myChart_6.resize();
    myChart_7.resize();
    myChart_8.resize();
    myChart_9.resize();
})