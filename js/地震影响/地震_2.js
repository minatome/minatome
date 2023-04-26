var myChart2 = echarts.init(document.getElementById("死亡人数"));
myChart2.showLoading();
$.get("data/分年份地震死亡(人).json").done(function(data){
    var data = data.data;
    myChart2.hideLoading();
    /** @type EChartsOption */
    var option = {
        title: {
            text: '20年来地震死亡人数（人）',
            textStyle: {
                color: '#0ac1c7'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        
        series: [
            {
            name: '死亡人数',
            type: 'pie',
            radius: ['35%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            center:['50%',"50%"],
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: data
            }
        ]
    };
    myChart2.setOption(option);
})
window.addEventListener("resize", function(){
    myChart2.resize();
})