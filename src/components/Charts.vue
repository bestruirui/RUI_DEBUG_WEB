<template>
  <div class="chart-container">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  DataZoomComponent
} from 'echarts/components'
import { use } from 'echarts/core'

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent, TitleComponent, DataZoomComponent])

export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    this.renderChart()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart)
    },
    renderChart() {
      const option = {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            type: 'slider',
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            data: [23, 45, 67, 78, 89, 56, 34],
            type: 'line'
          }
        ]
      }
      this.chart.setOption(option)
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  }
}
</script>

<style>
.chart-container {
  width: 100%;
  max-width: 600px; /* 设置最大宽度，避免在大屏幕上拉伸过宽 */
  margin: 0 auto; /* 水平居中 */
}

.chart {
  width: 100%;
  height: 300px; /* 设置初始高度 */
}
</style>
