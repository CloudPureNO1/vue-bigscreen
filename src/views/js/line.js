export function initLine (vue) {


  var myChart = vue.$echarts.init(document.querySelector(".line .content"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
      type: 'line',
      smooth: true, // 圆滑的线
      name: '新增粉丝',
      data: vue.yearData[0].data[0]
    },
    {
      type: 'line',
      smooth: true, // 圆滑的线
      name: '新增游客',
      data: vue.yearData[0].data[1]
    }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  document.querySelectorAll('.line .title-content .btn').forEach((element, index) => {
    element.onclick = () => {
      // 切换样式
      document.querySelectorAll('.line .title-content .btn span').forEach(item => item.classList.remove('active'))
      element.querySelector('span').classList.add('active')

      // 切换数据
      let obj = vue.yearData[index]
      option.series[0].data = obj.data[0]
      option.series[1].data = obj.data[1]
      // 需要重新渲染
      myChart.setOption(option)
    }
  })

}