var myChart_1 = echarts.init(document.getElementById("火场总面积"));myChart_1
myChart_1.showLoading();
$.get("data/各地区火灾相关数据.json").done(function(data){
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
        // 遍历每个年份
        Object.values(region).forEach((year) => {
            // 排除地区键
            year = Array.from(year)
            if (typeof year !== 'string') {
                // 遍历每个月份
                year.forEach((string) => {
                    if (string['火场总面积(公顷)'] !== undefined) {
                        sum = floatAdd(sum,string['火场总面积(公顷)']);
                    }
                });
            }
    });

    area.push(sum);
    });

    myChart_1.hideLoading();
    /** @type EChartsOption */
    var option = {
        title: {
            text: '各地区火场总面积',
            textStyle: {
                color: '#0ac1c7'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',

        },
        grid: {
            left: 60,
            // width: 400
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'white', fontSize: 10
                }
            },
            splitLine: {
                show: false
            },
            data: data.map(function(item){
                return item["地区"]
            })
        },
        yAxis: {
            name: '公顷',
            nameTextStyle: {
                color: 'white', fontSize: 10, fontWeight: 'bold'
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
        series: [
            {
            data: area,
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            smooth: true,
            lineStyle: {color: '#8fd3e8',with:2},
            areaStyle: {color: '#8fd3e8'}
            }
        ]
    };
    myChart_1.setOption(option);
});
window.addEventListener("resize", function(){
    myChart_1.resize();
})