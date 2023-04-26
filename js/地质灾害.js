var chart_1 = echarts.init(document.getElementById("各灾害次数及占比"))
chart_1.setOption({
    color: ['#fc97af', '#87f7cf', '#f7f494', '#72ccff', '#f7c5a0'],
    title: {
        text: '各种灾害出现次数',
        textStyle: {
            color: '#0ac1c7',
            fontSize: 20,
            fontFamily: 'sans-serif',
            // fontStyle: 'italic',
            fontWeight: 'bold'
        },
        subtextStyle: {
            color: 'green'
        },
        left: 'center'
    },
    legend: {
        orient: 'horizontal',
        left:'center',
        top: '10%',
        textStyle: {
            color: 'white',
            fontSize: 12
        },
    },
    tooltip: {
        trigger: 'axis',
        showContent: true
    },
    dataset: {
        source: []
    },
    xAxis: {
        name: '年份',
        nameTextStyle: {
            color: 'white', fontSize: 15, fontWeight: 'bold'
        },
        type: 'category',
        splitNumber: 5,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 10
            }
        }
    },
    yAxis: {
        name: '次数',
        nameTextStyle: {
            color: 'white', fontSize: 15, fontWeight: 'bold'
        },
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 10
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'white', type: 'solid', width: 0.3
            }
        },
        gridIndex: 0
    },
    grid: { top: '55%' },
    series: [
        {
            //name: '地质灾害次数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            //name: '滑坡灾害次数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            //name: '崩塌灾害次数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            //name: '泥石流次数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            //name: '地面塌陷次数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {

            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            top: '14%',
            emphasis: {
                focus: 'self'
            },
            label: {
                formatter: '{b|{b}: }{c|{@2004}} {per|({d}%)}',
                rich: {
                    b: {
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    c: {
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                        },
                    per: {
                        color: 'red',
                        fontSize: 16,
                        fontWeight: 'bold',
                        lineHeight: 33
                    }
                    }
            },
            encode: {
                itemName: '年份',
                value: '2004',
                tooltip: '2004'
            }
        }
    ]
});
chart_1.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        chart_1.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b|{b}: }{c|{@[' + dimension + ']}} {per|({d}%)}',
                    rich: {
                        b: {
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 'bold',
                            lineHeight: 33
                        },
                        c: {
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 'bold',
                            lineHeight: 33
                        },
                        per: {
                            color: 'red',
                            fontSize: 16,
                            fontWeight: 'bold',
                            lineHeight: 33
                        }
                        }
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});

var chart_2 = echarts.init(document.getElementById("直接经济损失"));
option1 = {
    color: [ '#8fd3e8' ],
    title: {
        text: '地质灾害直接经济损失',
        textStyle: {
            color: '#0ac1c7',
            fontSize: 20,
            fontFamily: 'sans-serif',
            // fontStyle: 'italic',
            fontWeight: 'bold'
        },
        left: 'center'
    },
    legend: {
        orient: 'horizontal',
        left:'center',
        top: '10%',
        textStyle: {
            color: 'white',
            fontSize: 12
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    xAxis: [
        {
            name: '万元',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white', type: 'solid', width: 0.3
                }
            },
            type: 'value'
        },
    ],
    yAxis: [
        {
            name: '年份',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            },
            type: 'category',
            data: []
        },
    ],
    series: [
        {
            //
            name: '金额',
            type: 'bar',
            data: [],
        }
    ],
};
chart_2.setOption(option1);

var chart_3 = echarts.init(document.getElementById("伤亡、死亡人数"));;
//伤亡死亡人数
var option2 = {
    color: ['#dd6b66','#8dc1a9'],
    title: {
        text: '近二十年伤亡、死亡人数统计',
        textStyle: {
            color: '#0ac1c7',
            fontSize: 20,
            fontFamily: 'sans-serif',
            // fontStyle: 'italic',
            fontWeight: 'bold'
        },
        left: 'center',
        top: 10
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
    grid: {
        top: 100
    },
    legend: {
        orient: 'horizontal',
        left:'center',
        top: '10%',
        textStyle: {
            color: 'white',
            fontSize: 12
        },
        data: ['伤亡人数', '死亡人数']
    },

    xAxis: [
        {
            name: '年份',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            type: 'category',
            data: [],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            }
        }
    ],
    yAxis: [
        {
            name: '伤亡人数',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
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
            name: '死亡人数',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            }
        }
    ],
    series: [
        {
            name: '伤亡人数',
            type: 'bar',
            data: []
        },
        {
            name: '死亡人数',
            type: 'line',
            data: []
        }
    ]
};
chart_3.setOption(option2);

var chart_4 = echarts.init(document.getElementById("防止灾害项目及投资"));
//地质灾害防治
var option3 = {
    title: {
        text: '近二十年防治项目及投资统计',
        textStyle: {
            color: '#0ac1c7',
            fontSize: 20,
            fontFamily: 'sans-serif',
            // fontStyle: 'italic',
            fontWeight: 'bold'
        },
        left: 'center',
        top: 10
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
    grid: {
        top: 100
    },
    legend: {
        orient: 'horizontal',
        left:'center',
        top: '10%',
        textStyle: {
            color: 'white',
            fontSize: 12
        },
        data: ['地质灾害防治项目数', '地质灾害防治投资']
    },
    xAxis: [
        {
            name: '年份',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            type: 'category',
            data: [],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            }
        }
    ],
    yAxis: [
        {
            name: '项目数',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            type: 'value',
            position: 'left',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                },
                formatter: '{value}'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white', type: 'solid', width: 0.3
                }
            }
        },
        {
            name: '金额',
            nameTextStyle: {
                color: 'white', fontSize: 15, fontWeight: 'bold'
            },
            type: 'value',
            splitNumber: 10,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                },
                formatter: '{value} 万元'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '地质灾害防治项目数',
            type: 'bar',
            yAxisIndex: 0,
            data: []
        },
        {
            name: '地质灾害防治投资',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 万元';
                }
            },
            yAxisIndex: 1,
            data: []
        }
    ]
};
chart_4.setOption(option3)

var place = '北京市';
// 1图
$.get("data/dizhi.json").done(function (data) {
    //var d = JSON.parse(data);
    var data = data[place]
    var years = ['年份'];  //年份
    var Geological = ['地质灾害次数'];  //地质灾害
    var Landslide = ['滑坡灾害次数'];  //滑坡
    var Collapse = ['崩塌灾害次数'];  // 崩塌
    var lands = ['泥石流次数'];  //泥石流
    var Ground = ['地面塌陷次数'];  //地面塌陷

    for (var i = data.length - 2; i > 0; i--) {
        years.push(data[i].year);
        Geological.push(data[i].Geological_hazards);
        Landslide.push(data[i].Landslide_disaster);
        Collapse.push(data[i].Collapse_disaster);
        lands.push(data[i].landslides);
        Ground.push(data[i].Ground_collapses);
    }
    // console.log(years)
    // console.log(Ground)

    chart_1.setOption({
        dataset: {
            source: [
                years,
                Geological,
                Landslide,
                Collapse,
                lands,
                Ground
            ]
        }
    });

});

// 2图
$.get("data/dizhi.json").done(function (data) {
    // var d = JSON.parse(data);
    var data = data[place]
    var years = [];  //年份
    var money = [];  //经济损失

    var death = [];  //死亡人数
    var Casualties = [];  //伤亡人数

    var projects = []; //防治项目
    var invesment = [];  //投资金额

    for (var i = data.length - 2; i > 0; i--) {
        years.push(data[i].year);
        money.push(data[i].Economic_losses);

        Casualties.push(data[i].Casualties_number);
        death.push(data[i].death_toll);

        projects.push(data[i].Projects);
        invesment.push(data[i].investment)
    }
    chart_2.setOption({
        //直接经济损失
        yAxis: [{
            name: '年份',
            data: years
        }],
        series: [{
            name: '直接经济损失(万元)',
            data: money
        }],
    });
});

// 3图
$.get("data/dizhi.json").done(function (data) {
    // var d = JSON.parse(data);
    var data = data[place];
    console.log(data)
    var years = [];  //年份
    var money = [];  //经济损失

    var death = [];  //死亡人数
    var Casualties = [];  //伤亡人数

    var projects = []; //防治项目
    var invesment = [];  //投资金额

    for (var i = data.length - 2; i > 0; i--) {
        years.push(data[i].year);
        money.push(data[i].Economic_losses);

        Casualties.push(data[i].Casualties_number);
        death.push(data[i].death_toll);

        projects.push(data[i].Projects);
        invesment.push(data[i].investment)
    };
    chart_3.setOption({
        xAxis: [{
            name: '年份',
            data: years
        }],
        series: [
            {
                name: '伤亡人数',
                type: 'bar',
                data: Casualties
            },
            {
                name: '死亡人数',
                type: 'line',
                data: death
            }
        ],
    });
});

// 4图
$.get("data/dizhi.json").done(function (data) {
    // var d = JSON.parse(data);
    var data = data[place];
    var years = [];  //年份
    var money = [];  //经济损失

    var death = [];  //死亡人数
    var Casualties = [];  //伤亡人数

    var projects = []; //防治项目
    var invesment = [];  //投资金额

    for (var i = data.length - 2; i > 0; i--) {
        years.push(data[i].year);
        money.push(data[i].Economic_losses);

        Casualties.push(data[i].Casualties_number);
        death.push(data[i].death_toll);

        projects.push(data[i].Projects);
        invesment.push(data[i].investment)
    }
    chart_4.setOption({
        xAxis: [{
            name: '年份',
            data: years
        }],
        series: [
            {
                name: '地质灾害防治项目数',
                type: 'bar',
                data: projects
            },
            {
                name: '地质灾害防治投资',
                type: 'bar',
                data: invesment
            }
        ]
    });
});

var place = '安徽省';
const selectElement = document.getElementById('mySelect');
selectElement.onchange = function() {
    var place = this.value;
    var str = this.value +'地质灾害'
    title = document.getElementById('title')
    title.innerHTML = str;

    // 1图
    $.get("data/dizhi.json").done(function (data) {
        //var d = JSON.parse(data);
        var data = data[place]
        var years = ['年份'];  //年份
        var Geological = ['地质灾害次数'];  //地质灾害
        var Landslide = ['滑坡灾害次数'];  //滑坡
        var Collapse = ['崩塌灾害次数'];  // 崩塌
        var lands = ['泥石流次数'];  //泥石流
        var Ground = ['地面塌陷次数'];  //地面塌陷

        for (var i = data.length - 2; i > 0; i--) {
            years.push(data[i].year);
            Geological.push(data[i].Geological_hazards);
            Landslide.push(data[i].Landslide_disaster);
            Collapse.push(data[i].Collapse_disaster);
            lands.push(data[i].landslides);
            Ground.push(data[i].Ground_collapses);
        }
        // console.log(years)
        // console.log(Ground)

        chart_1.setOption({
            dataset: {
                source: [
                    years,
                    Geological,
                    Landslide,
                    Collapse,
                    lands,
                    Ground
                ]
            }
        });

    });

    // 2图
    $.get("data/dizhi.json").done(function (data) {
        // var d = JSON.parse(data);
        var data = data[place]
        var years = [];  //年份
        var money = [];  //经济损失
    
        var death = [];  //死亡人数
        var Casualties = [];  //伤亡人数
    
        var projects = []; //防治项目
        var invesment = [];  //投资金额
    
        for (var i = data.length - 2; i > 0; i--) {
            years.push(data[i].year);
            money.push(data[i].Economic_losses);
    
            Casualties.push(data[i].Casualties_number);
            death.push(data[i].death_toll);
    
            projects.push(data[i].Projects);
            invesment.push(data[i].investment)
        }
        chart_2.setOption({
            //直接经济损失
            yAxis: [{
                name: '年份',
                data: years
            }],
            series: [{
                name: '直接经济损失(万元)',
                data: money
            }],
        });
    });

    // 3图
    $.get("data/dizhi.json").done(function (data) {
        // var d = JSON.parse(data);
        var data = data[place];
        console.log(data)
        var years = [];  //年份
        var money = [];  //经济损失
    
        var death = [];  //死亡人数
        var Casualties = [];  //伤亡人数
    
        var projects = []; //防治项目
        var invesment = [];  //投资金额
    
        for (var i = data.length - 2; i > 0; i--) {
            years.push(data[i].year);
            money.push(data[i].Economic_losses);
    
            Casualties.push(data[i].Casualties_number);
            death.push(data[i].death_toll);
    
            projects.push(data[i].Projects);
            invesment.push(data[i].investment)
        };
        chart_3.setOption({
            xAxis: [{
                name: '年份',
                data: years
            }],
            series: [
                {
                    name: '伤亡人数',
                    type: 'bar',
                    data: Casualties
                },
                {
                    name: '死亡人数',
                    type: 'line',
                    data: death
                }
            ],
        });
    });

    // 4图
    $.get("data/dizhi.json").done(function (data) {
        // var d = JSON.parse(data);
        var data = data[place];
        var years = [];  //年份
        var money = [];  //经济损失
    
        var death = [];  //死亡人数
        var Casualties = [];  //伤亡人数
    
        var projects = []; //防治项目
        var invesment = [];  //投资金额
    
        for (var i = data.length - 2; i > 0; i--) {
            years.push(data[i].year);
            money.push(data[i].Economic_losses);
    
            Casualties.push(data[i].Casualties_number);
            death.push(data[i].death_toll);
    
            projects.push(data[i].Projects);
            invesment.push(data[i].investment)
        }
        chart_4.setOption({
            xAxis: [{
                name: '年份',
                data: years
            }],
            series: [
                {
                    name: '地质灾害防治项目数',
                    type: 'bar',
                    data: projects
                },
                {
                    name: '地质灾害防治投资',
                    type: 'bar',
                    data: invesment
                }
            ]
        });
    });
}
window.addEventListener("resize", function(){
    chart_1.resize();
    chart_2.resize();
    chart_3.resize();
    chart_4.resize();
})
