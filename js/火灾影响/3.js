var myChart_3 = echarts.init(document.getElementById("伤亡人数"));
myChart_3.showLoading();
$.get("data/各地区火灾相关数据.json").done(function(data){
    data.data.sort(function(a,b){
            return b["总伤亡人数（人）"]-a["总伤亡人数（人）"];
    });
    var top5 = data.data.slice(0, 5);
    
    // 准备数据
    var years = [];
    var title = [];
    var singleAxis = [];
    var series = [];
    var data_total = []

    for(var i=0;i<5;i++){
        for(var j=0;j<20;j++){
            var temp = [];
            temp.push(i);
            temp.push(j);
            data_total.push(temp);
        }
    };

    var i = 0;
    top5.forEach((region) => {
        // 遍历每个地区
        Object.values(region).forEach((year) => {
            // 排除地区键
            if(Array.isArray(year)){
                year.forEach((String) =>{
                    if(Object.keys(String) == "森林火灾伤亡人数(人)"){
                        data_total[i].push(Object.values(String)[0]);
                        i++;
                    }
                });
                
                
            }
                
        });
    });
    
    for(var i=2022;i>2002;i--){
        var str = i + '年';
        years.push(str);
    }
    var place = top5.map(function(item){
        return item['地区'];
    })

    place.forEach(function (place, idx) {
        title.push({
            textBaseline: 'middle',
            top: ((idx + 0.5) * 100) / 5 + '%',
            text: place,
            textStyle: {
                color:'white'
            }
        });
        singleAxis.push({
            left: 100,
            type: 'category',
            boundaryGap: false,
            data: years,
            top: (idx * 100) / 5 + 4 + '%',
            height: 100 / 5 - 10 + '%',
            axisLabel: {
                interval: 2,
                show: true,
                textStyle: {
                    color: 'white', fontSize: 12
                }
            }
        });
        series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1];
            }
        });
    });

    data_total.forEach(function (dataItem) {
        series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });
    var option = {
        tooltip: {
            trriger:'axis',
            position: 'top',
            formatter: function(items){
               return items['name'] + '</br>伤亡人数：</br>'+items['value'][1]+'万人'
            }
        },
        title: title,
        singleAxis: singleAxis,
        series: series
    };
    myChart_3.hideLoading();
    myChart_3.setOption(option);
});
window.addEventListener("resize", function(){
    myChart_3.resize();
})