var myChart6 = echarts.init(document.getElementById("经济损失"));
myChart6.showLoading();
$.get("data/分地区、年份直接经济损失（万元).json").done(function (data) {
    data.data.sort(function(a,b){
        return b.value-a.value;
    });
    var data = data.data;
    myChart6.hideLoading();
    /** @type EChartsOption */
    var option = {
            title: {
                text: '分地区、年份直接经济损失（万元)',
                subtext: '数据来源：国家数据',
                sublink:'https://data.stats.gov.cn/'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
                }
            },
            legend: {
                data: data.map(function (item) {
                    return item['地区']
                })
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                type: 'category',
                boundaryGap: false,
                data: data.map(function (item) {
                    return item['地区']
                }),
                axisLabel: {
                    show: true,
                    interval: 0,
                    rotate: 35
                    }
                }
            ],
            yAxis: [
                {
                type: 'value'
                }
            ],
            series: [
                {
                name: '2003年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2003年']
                })
                },
                {
                name: '2004年',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2004年']
                })
                },
                {
                name: '2005年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2005年']
                })
                },
                {
                name: '2006年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2006年']
                })
                },
                {
                name: '2007年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2007年']
                })
                },
                {
                name: '2008年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2008年']
                })
                },
                {
                name: '2009年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2009年']
                })
                },
                {
                name: '2010年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2010年']
                })
                },
                {
                name: '2011年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2011年']
                })
                },
                {
                name: '2012年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2012年']
                })
                },
                {
                name: '2013年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2013年']
                })
                },
                {
                name: '2014年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2014年']
                })
                },
                {
                name: '2015年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2015年']
                })
                },
                {
                name: '2016年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2016年']
                })
                },
                {
                name: '2017年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2017年']
                })
                },
                {
                name: '2018年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2018年']
                })
                },
                {
                name: '2019年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2019年']
                })
                },
                {
                name: '2020年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2020年']
                })
                },
                {
                name: '2021年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2021年']
                })
                },
                {
                name: '2022年',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: data.map(function (item) {
                    return item['2022年']
                })
                }
            ]
        };
    myChart6.setOption(option);
});
window.addEventListener("resize", function(){
    myChart6.resize();
})