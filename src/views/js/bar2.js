export function initBar2 (vue) {
  // 1.实例化对象
  var myChart = vue.$echarts.init(document.querySelector(".bar2 .content"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
    }, {
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: [702, 350, 610, 793, 664]
    }],
    series: [{
      // 第一组柱子（条状）
      name: '条',
      type: 'bar',
      // 柱子之间的距离
      barCategoryGap: 50,
      // 柱子的宽度
      barWidth: 10,
      // 层级 相当于z-index
      yAxisIndex: 0,
      // 柱子更改样式
      itemStyle: {
        barBorderRadius: 20,
        // 此时的color可以修改柱子的颜色
        color: function (params) {
          // params 传进来的是柱子的对象
          // dataIndex 是当前柱子的索引号
          // console.log(params);
          return myColor[params.dataIndex];
        }
      },
      data: [70, 34, 60, 78, 69],
      // 显示柱子内的百分比文字
      label: {
        show: true,
        position: "inside",
        // {c} 会自动解析为数据（data内的数据）
        formatter: "{c}%"
      }
    },
    {
      // 第二组柱子（框状 border）
      name: '框',
      type: 'bar',
      // 柱子之间的距离
      barCategoryGap: 50,
      // 柱子的宽度
      barWidth: 14,
      // 层级 相当于z-index
      yAxisIndex: 1,
      // 柱子修改样式
      itemStyle: {
        color: "none",
        borderColor: "#00c1de",
        borderWidth: 2,
        barBorderRadius: 15,
      },
      data: [100, 100, 100, 100, 100]
    }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
}