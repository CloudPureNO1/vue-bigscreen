import china from '../../assets/map/geoJSON/china.json'
export function initMapOfChina (vue) {
  vue.$echarts.registerMap("china", { geoJSON: china })
  let myChart = vue.$echarts.init(document.querySelector('.panel-map .content'))

  let option = {
    visualMap: {
      show: true,
      min: 0,
      max: 200,
      left: '5%',
      top: 'bottom',
      calculable: true,
      seriesIndex: [1],
      inRange: {
        color: ['#04387b', '#467bc0'] // 蓝绿
      },
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      padding: 8,
      enterable: true,
      transitionDuration: 1,
      textStyle: {
        color: '#fff',
        decoration: 'none',
      },
      backgroundColor: '#467bc0',
      formatter: function (data) {
        return data.tipData[0] + '-' + data.tipData[1]
      }
    },
    series: [{
      name: '接入医院数量',
      type: 'map',
      mapType: 'china',
      itemStyle: {
        normal: {
          label: {
            show: false
          }
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      label: {
        normal: { //静态的时候展示样式
          show: true, //是否显示地图省份得名称
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        emphasis: { //动态展示的样式
          color: '#fff',
        },
      },
      // 地图样式修改
      itemStyle: {
        normal: {
          areaColor: 'rgba(34, 70, 168, 0.7)',
          borderColor: '#8499f8'
        },
        emphasis: {
          areaColor: 'rgba(119, 139, 224, 0.548)'
        }
      },
      // 把地图放大1.2倍
      zoom: 1.2,
      data: [
        { name: '北京', value: 350000 },
        { name: '天津', value: 120000 },
        { name: '上海', value: 300000 },
        { name: '重庆', value: 92000 },
        { name: '河北', value: 25000 },
        { name: '河南', value: 20000 },
        { name: '云南', value: 500 },
        { name: '辽宁', value: 3050 },
        { name: '黑龙江', value: 80000 },
        { name: '湖南', value: 2000 },
        { name: '安徽', value: 24580 },
        { name: '山东', value: 40629 },
        { name: '新疆', value: 36981 },
        { name: '江苏', value: 13569 },
        { name: '浙江', value: 24956 },
        { name: '江西', value: 15194 },
        { name: '湖北', value: 41398 },
        { name: '广西', value: 41150 },
        { name: '甘肃', value: 17630 },
        { name: '山西', value: 27370 },
        { name: '内蒙古', value: 27370 },
        { name: '陕西', value: 97208 },
        { name: '吉林', value: 88290 },
        { name: '福建', value: 19978 },
        { name: '贵州', value: 94485 },
        { name: '广东', value: 89426 },
        { name: '青海', value: 35484 },
        { name: '西藏', value: 97413 },
        { name: '四川', value: 54161 },
        { name: '宁夏', value: 56515 },
        { name: '海南', value: 54871 },
        { name: '台湾', value: 48544 },
        { name: '香港', value: 49474 },
        { name: '澳门', value: 34594 }
      ]
    }]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}