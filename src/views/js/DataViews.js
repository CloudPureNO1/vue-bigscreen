import { initBar } from "./bar"
import { initBar2 } from "./bar2"
import { initLine } from './line'
import { initLine2 } from './line2'
import { initPie } from './pie'
import { initPie2 } from './pie2'
import { initMapOfChina } from './map'
export default {
  data () {
    return {
      yearData: []
    }
  },
  mounted () {


    initBar(this)
    initBar2(this)

    this.initLineData()
    initLine(this)

    initLine2(this)

    initPie(this)
    initPie2(this)

    initMapOfChina(this)
  },
  methods: {
    initLineData () {
      // 年份对应数据
      this.yearData = [{
        year: "2020", // 年份
        data: [
          // 两个数组是因为有两条线
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
      },
      {
        year: "2021", // 年份
        data: [
          // 两个数组是因为有两条线
          [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
          [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
      }
      ]
    },
    changeLine (year) {

    }

  }
}