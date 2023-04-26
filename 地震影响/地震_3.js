var myChart3 = echarts.init(document.getElementById("地图"));
myChart3.showLoading();
$.get("data/各地区地震发生总次数.json").done(function(data){
    // https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
    $.get("data/中国地图.json", function (geoJson) {
        myChart3.hideLoading();
        echarts.registerMap('CN', geoJson);
        /** @type EChartsOption */
        var mapOption = {
            title: {
                text: '中国20年来各地区5级以上地震总次数（暂无香港，澳门，台湾数据）',
                textStyle: {
                        color: '#0ac1c7'
                },
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                // formatter: '{b}<br/>{c} (p / km2)'
            },
            //  是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
            visualMap: {
                min: 0,
                max: 60,
                text: ['High', 'Low'],
                textStyle: {
                    color: '#0ac1c7'
                },
                right: '10%',
                top: '60%',
                //拖拽时，是否实时更新。
                //如果为true则拖拽手柄过程中实时更新图表视图。
                //如果为false则拖拽结束时，才更新视图。
                realtime: true,
                //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
                calculable: true,
                //定义 在选中范围中 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）
                //可选的视觉元素有：
                //symbol: 图元的图形类别。
                //symbolSize: 图元的大小。
                //color: 图元的颜色。
                //colorAlpha: 图元的颜色的透明度。
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered','red']
                }
            },
            series: [{
                    name: '5级以上地震次数',
                    type: 'map',
                    map: 'CN',
                    //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                    label: {
                        show: true
                    },
                    zoom: 1.3,
                    top: '25%',
                    data: data.data
            }]        
        };
        myChart3.setOption(mapOption);
    })
})
window.addEventListener("resize", function(){
    myChart3.resize();
})