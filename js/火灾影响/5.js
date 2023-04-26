/**
     * 解决两个数相加精度丢失问题
     * @param a
     * @param b
     * @returns {Number}
     */
 function floatAdd(a, b) {
    var c, d, e;
    if(undefined==a||null==a||""==a||isNaN(a)){a=0;}
    if(undefined==b||null==b||""==b||isNaN(b)){b=0;}
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return  (floatMul(a, e) + floatMul(b, e)) / e;
}
/**
 * 解决两个数相减精度丢失问题
 * @param a
 * @param b
 * @returns {Number}
 */
function floatSub(a, b) {
    var c, d, e;
    if(undefined==a||null==a||""==a||isNaN(a)){a=0;}
    if(undefined==b||null==b||""==b||isNaN(b)){b=0;}
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return (floatMul(a, e) - floatMul(b, e)) / e;
}
/**
 * 解决两个数相乘精度丢失问题
 * @param a
 * @param b
 * @returns {Number}
 */
function floatMul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {}
    try {
        c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
/**
 * 解决两个数相除精度丢失问题
 * @param a
 * @param b
 * @returns
 */
function floatDiv(a, b) {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {}
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), floatMul(c / d, Math.pow(10, f - e));
}
var myChart_5 = echarts.init(document.getElementById("其他损失"));
myChart_5.showLoading();
$.get("data/各地区火灾相关数据.json").done(function(data){
    var data = data.data;
    var place = data.map(function(item){
        return item["地区"];
    });

    var total_data = [];
    for(var i=2003; i<2023; i++){
        var str = i + '年';
        var temp = [];
        // 遍历每个地区
        data.forEach((region) => {
            var price = Object.values(region[str][9])[0];
            temp.push(price);
        });
        total_data.push(temp);
    }
    option = {
        title:{
            text:'2003年及之前火灾总经济损失',
            textStyle: {
                color: '#0ac1c7'
            },
            left: 'center'
        },
        xAxis: {
            name: '万元',
            nameTextStyle: {
                color: 'white', fontSize: 13, fontWeight: 'bold'
            },
            max: 'dataMax',
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
        yAxis: {
            type: 'category',
            data: place,
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            },
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 10 // only the largest 11 bars will be displayed
        },
        series: [
            {
            realtimeSort: true,
            name: '经济损失',
            type: 'bar',
            data: total_data[0],
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
            }
        ],
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };
    var year = []
    for (var i = 2004; i<2023; i++){
        var str = i + '年及之前火灾总经济损失';
        year.push(str)
    }
    var i = 0;
    function run() {
        if(i<total_data.length-1){
            for(var j = 0; j<total_data[i].length; j++){
                total_data[0][j] = floatAdd(total_data[0][j], total_data[i+1][j]);
                
            }
            myChart_5.setOption({
                title:{
                    text:year[i],
                    textStyle: {
                        color: '#0ac1c7'
                    },
                    left: 'center'
                },
                series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal:{
                            color:function(params){
                                var colorList = ['#007500','#005AB5','#5B5B00','#FF9797','#FAF0E6','#006000','#59c4e6','#9F35FF',
                                                '#930000','#009393','#003E3E','#D200D2','#FF79BC','#edafda','#93b7e3','#a5e7f0',
                                                '#003E3E','#01B468','#C6A300','#cbb0e3','#006030','#B9B973','#6FB7B7','#5A5AAD',
                                                '#000079','#8080C0','#336666','#949449','#642100','#642100','#9F5000'
                                            ]
                                return colorList[params.dataIndex]
                            },
                            label:{
                                show:true,
                                color:"white",
                                fontSize:15
                            }
                        }
                    },
                    data: total_data[0]
                }
                ]
            });   
            i++;
        }
        
    }
    setTimeout(function () {
        run();
    }, 0);
    setInterval(function () {
        run();
    }, 3000);
    myChart_5.hideLoading();
    myChart_5.setOption(option);
})
window.addEventListener("resize", function(){
    myChart_5.resize();
})