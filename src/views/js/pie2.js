export function initPie2 (vue) {
  var myChart = vue.$echarts.init(document.querySelector('.pie2 .content'));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10
      }
    },
    series: [{
      name: '地区分布',
      type: 'pie',
      radius: ["10%", "60%"],
      center: ['50%', '40%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 6,
        // 连接文字线长(横线)
        length2: 8
      },
      //roam: 'scale',//禁止拖拽
      //roam: false,//禁止拖拽
      /*   scaleLimit: { //所属组件的z分层，z值小的图形会被z值大的图形覆盖
          min: 0.7, //最小的缩放值
          max: 3, //最大的缩放值
        }, */
      data: [{
        value: 26,
        name: '北京'
      },
      {
        value: 24,
        name: '山东'
      },
      {
        value: 25,
        name: '河北'
      },
      {
        value: 20,
        name: '江苏'
      },
      {
        value: 25,
        name: '浙江'
      },
      {
        value: 30,
        name: '四川'
      },
      {
        value: 42,
        name: '湖北'
      }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}