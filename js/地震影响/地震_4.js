var myChart4 = echarts.init(document.getElementById("频发年份"));
myChart4.showLoading();
$.get("data/分年份地震总次数.json").done(function(data){
    data.data.sort(function(a,b){
        return b.value-a.value;
    });
    var top5 = data.data.slice(0, 5);
    myChart4.hideLoading();
    /** @type EChartsOption */
    var option = {
        title: {
            text: '分年份地震总次数',
            textStyle: {
                color: '#0ac1c7'
            },
            left: 'center'
        },
        legend: {
            top: 'bottom',
            textStyle: {
                color: 'white',
                fontSize: 12
            },
        },
        tooltip: {
            show: true,
            trigger: 'item',
        },
        series: [
            {
            name: '中国地震频发Top5年份',
            type: 'pie',
            radius: [50,250],
            center: ['50%', '50%'],
            radius: ["10%", "69%"],
            roseType: 'area',
            itemStyle: { borderRadius: 8},    
            data: top5
            }
        ]
    };
    myChart4.setOption(option);
})
window.addEventListener("resize", function(){
    myChart4.resize();
})