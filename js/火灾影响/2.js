var myChart_2 = echarts.init(document.getElementById("火灾严重程度"));
myChart_2.showLoading();
$.get("data/各地区火灾相关数据.json").done(function (data) {
  var data = data.data;
  var dataMap = {};
  function dataFormatter(obj) {
    var place = data.map(function (item) {
      return item["地区"]
    });
    for (var year = 2003; year < 2023; year++) {
      var sum = 0;
      temp = obj[year];
      for (var i = 0, l = temp.length; i < l; i++) {
        sum += temp[i];
        obj[year][i] = {
          name: place[i],
          value: temp[i]
        };
      }
      obj[year + 'sum'] = sum;
    }
    return obj;
  }

  // 组合数据
  var temp_total_1 = {}
  for (var year = 2003; year < 2023; year++) {
    // 存储每一年的各个城市数据
    var str = year + '年';
    var temp_total_2 = [];
    data.forEach((region) => {
      temp_total_2.push(Object.values(region[str])[0]["森林火灾次数(次)"])
    })
    temp_total_1[year] = temp_total_2
  }
  // 火灾总次数
  dataMap.total = dataFormatter(temp_total_1)

  var temp_normal_1 = {}
  for (var year = 2003; year < 2023; year++) {
    // 存储每一年的各个城市数据
    var str = year + '年';
    var temp_normal_2 = [];
    data.forEach((region) => {
      temp_normal_2.push(Object.values(region[str])[1]["一般火灾次数(次)"])
    })
    temp_normal_1[year] = temp_normal_2
  }
  // 火灾一般次数
  dataMap.normal = dataFormatter(temp_normal_1)

  var temp_major_1 = {}
  for (var year = 2003; year < 2023; year++) {
    // 存储每一年的各个城市数据
    var str = year + '年';
    var temp_major_2 = [];
    data.forEach((region) => {
      temp_major_2.push(Object.values(region[str])[2]["较大火灾次数(次)"])
    })
    temp_major_1[year] = temp_major_2
  }
  // 火灾较大次数
  dataMap.major = dataFormatter(temp_major_1)

  var temp_disaster_1 = {}
  for (var year = 2003; year < 2023; year++) {
    // 存储每一年的各个城市数据
    var str = year + '年';
    var temp_disaster_2 = [];
    data.forEach((region) => {
      temp_disaster_2.push(Object.values(region[str])[3]["重大火灾次数(次)"])
    })
    temp_disaster_1[year] = temp_disaster_2
  }
  // 火灾重大次数
  dataMap.disaster = dataFormatter(temp_disaster_1)

  var temp_extremely_1 = {}
  for (var year = 2003; year < 2023; year++) {
    // 存储每一年的各个城市数据
    var str = year + '年';
    var temp_extremely_2 = [];
    data.forEach((region) => {
      temp_extremely_2.push(Object.values(region[str])[4]["特别重大火灾次数(次)"])
    })
    temp_extremely_1[year] = temp_extremely_2
  }
  // 火灾特别重大次数
  dataMap.extremely = dataFormatter(temp_extremely_1)

  var date = [];
  var options = [];
  for (var year = 2004; year < 2022; year++) {
    var temp = {}
    var str = year + '年';
    date.push(str);

    var title = {
      text: str + '全国火灾发生次数',
      textStyle: {
        color: '#0ac1c7'
      },
      left: 'center'
    };

    temp["title"] = title;
    var series = [
      { 'data': dataMap.total[year] },
      { 'data': dataMap.normal[year] },
      { 'data': dataMap.major[year] },
      { 'data': dataMap.disaster[year] },
      { 'data': dataMap.extremely[year] },
      {
        'data': [
          { 'name': '一般', 'value': dataMap.normal[year + 'sum'] },
          { 'name': '较大', 'value': dataMap.major[year + 'sum'] },
          { 'name': '重大', 'value': dataMap.disaster[year + 'sum'] },
          { 'name': '特别重大', 'value': dataMap.extremely[year + 'sum'] },
        ]
      }
    ]
    temp["series"] = series;
    options.push(temp);
  }

  option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        // realtime: false,
        // loop: false,
        autoPlay: true,
        // currentIndex: 2,
        playInterval: 3000,
        // controlStyle: {
        //     position: 'left'
        // },

        data: date,
        // label: {
        //   formatter: function (s) {
        //     return new Date(s).getFullYear();
        //   }
        // }
      },
      tooltip: {},
      legend: {
        left: 'center',
        top: 30,
        textStyle: {
          color: 'white',
          fontSize: 12
        },
        data: ['总次数', '一般', '较大', '重大', '特别重大']
      },
      calculable: true,
      grid: {
        top: 80,
        bottom: 100,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              formatter: function (params) {
                return params.value.replace('\n', '');
              }
            }
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          axisLabel: { interval: 0 },
          data: data.map(function (item) {
            return item["地区"];
          }),
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white', fontSize: 10
            },
            rotate: 40
          },
          splitLine: { show: false }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '次数',
          nameTextStyle: {
            color: 'white', fontSize: 13, fontWeight: 'bold'
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
          }
        }
      ],
      series: [
        { name: '总次数', type: 'bar' },
        { name: '一般', type: 'bar' },
        { name: '较大', type: 'bar' },
        { name: '重大', type: 'bar' },
        { name: '特别重大', type: 'bar' },
        {
          name: '各严重程度占比',
          type: 'pie',
          center: ['30%', '35%'],
          radius: '30%',
          z: 100,
          label: {
            formatter: '{b|{b}: }{c|{c}} {per|({d}%)}',
            rich: {
              b: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'bold',
                lineHeight: 33
              },
              c: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: 'green',
                fontSize: 12,
                fontWeight: 'bold',
                lineHeight: 33
              }
            }
          },
        }
      ]
    },
    options: options
  };
  myChart_2.hideLoading();
  myChart_2.setOption(option);
})
window.addEventListener("resize", function(){
  myChart_2.resize();
})