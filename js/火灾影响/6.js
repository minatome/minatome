var myChart = echarts.init(document.getElementById("高损失地区"));
    myChart.showLoading();
    var total_data = [];
    $.get("data/各地区火灾相关数据.json").done(function(data){    
        var data = data.data;
        data.sort(function(a, b){
            return b["总经济损失（万元）"] - a["总经济损失（万元）"];
        });
        var top5 = data.slice(0,5);
        top5.forEach((region) => {
            var temp  = {};
            temp["name"] = region["地区"];
            temp["value"] = region["总经济损失（万元）"];
            total_data.push(temp);
        })

        var option = {
            title: {
                text: "经济损失top5",
                textStyle: {
                    color: '#0ac1c7'
                },
                left: 'center'
            },
            tooltip: {
                trriger: "item",
                formatter: '{b}: {c} ({d}%)'
            },
            series: [
                {
                    name: '经济损失（万元）',
                    type: 'pie',
                    radius: [50, 150],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        formatter: '{b|{b}}',
                        rich: {
                            b: {
                              color: 'white',
                              fontSize: 12,
                              fontWeight: 'bold',
                              lineHeight: 33
                            }
                          }
                    },
                    data: total_data
                }
            ]
        };
        myChart.hideLoading();
        myChart.setOption(option);
    })
    window.addEventListener("resize", function(){
        myChart_6.resize();
    })