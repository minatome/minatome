var myChart1 = echarts.init(document.getElementById("伤亡人数"));
myChart1.showLoading();
$.get("data/分年份地震伤亡(人).json").done(function (data) {
    var data = data.data;
    myChart1.hideLoading()
    /** @type EChartsOption */
    var option = {
        title: {
            text: '20年来地震伤亡（人）',
            textStyle: {
                color: '#0ac1c7'
            },
            left: 'center'
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: function (item) {
                return item.name + '<br>' + item.value + '人';
            }
        },
        xAxis: {
            type: 'category',
            data: data.map(function(item){
                return item['name']
            }),
            boundaryGap: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white', type: 'solid', width: 0.2
                }
            },
        },
        yAxis: {
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
        series: [
            {
                type: 'line',
                data: data,
            }
        ]
    };
    myChart1.setOption(option);
})
window.addEventListener("resize", function(){
    myChart1.resize();
})