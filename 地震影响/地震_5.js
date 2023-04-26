var myChart5 = echarts.init(document.getElementById("频发地区"));
myChart5.showLoading();
$.get("data/各地区地震发生总次数.json").done(function(data){
data.data.sort(function(a,b){
    return b.value-a.value;
});
var top5 = data.data.slice(0, 5);
// console.log(top5);
myChart5.hideLoading();
    /** @type EChartsOption */
var option = {
    title: {
        text: '各地区地震发生总次数',
        textStyle: {
            color: '#0ac1c7'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(item) {
            return '次数:' + item.value;
        }
    },
    grid: {
        left: 100
    },
    xAxis: {
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
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white', fontSize: 13
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'white', type: 'solid', width: 0.3
            }
        },
        data: top5.map(function (item) {
            return item['name'];
        })
    },
    series: {
        type: 'bar',
        itemStyle: {
            normal:{
                color:function(params){
                    var colorList = ['#59c4e6','#edafda','#93b7e3','#a5e7f0','#cbb0e3']
                    return colorList[params.dataIndex]
                }
            }
        },
        data: top5,
    }
};
myChart5.setOption(option);
});
window.addEventListener("resize", function(){
    myChart5.resize();
})