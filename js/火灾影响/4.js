var myChart_4 = echarts.init(document.getElementById("受害森林面积"));
myChart_4.showLoading()
$.get("data/各地区火灾相关数据.json").done(function(data){
    myChart_4.hideLoading();
    var data = data.data;
    var area = []
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

    data.forEach((region) => {
        var sum = 0;
        var place = {};
        // 遍历每个年份
        Object.values(region).forEach((year) => {
            if (typeof year === 'string') {
                place['name'] = year;
            }
            // 排除地区键
            else if (typeof year !== 'string') {
                // 遍历每个事件
                year = Array.from(year);
                year.forEach((string) => {
                    if (string['受害森林面积(公顷)'] !== undefined) {
                        sum = floatAdd(sum,string['受害森林面积(公顷)']);
                    }
                });
                place['value'] = sum
            }
        });
        area.push(place);
    });
    var option = {
        title: {
            text: '受害森林总面积',
            textStyle: {
                color: '#0ac1c7'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        series: [
            {
            name: '受害面积',
            type: 'pie',
            center: ['50%', '40%'],
            radius: '50%',
            data: area,
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
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
        };
    myChart_4.setOption(option);
})
window.addEventListener("resize", function(){
    myChart_4.resize();
})