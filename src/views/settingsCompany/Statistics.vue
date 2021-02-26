<template>
  <div>
    <div class="d-block">
      <div v-tooltip.hover:top="'Gescannte Rechnungen'">{{ data.scanned }}</div>
      <div v-tooltip.hover:top="'Gescannte Rechnungen'">{{  }}</div>
    </div>
    <div id="UserAction" class="col mt-1 mb-1" style="height: 400px"/>
  </div>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'

export default {
  name: "Statistics",
  components: {},
  data() {
    return {
      data:{
        scanned: 43
      }
    }
  },
  mounted() {
    this.basicChart()
  },
  methods: {
    basicChart() {
      this.Chart = Highchart.chart('UserAction', {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: 'User Aktionen'
        },
        xAxis: {
          type: 'datetime',
          units: [
            ['day', [1]],
            ['month', [1]]
          ],
          accessibility: {
            rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.'
          }
        },
        yAxis: {
          title: {
            text: 'Aktionen'
          },
          labels: {
            formatter: function () {
              return this.value
            }
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          xDateFormat: "%e.%b"
        },
        plotOptions: {
          areaspline: {
            marker: {
              enabled: false,
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [{
          name: 'Rechnungen eingescannt',
          action: 'eingescannt',
          data: [
            [Date.UTC(2021, 1, 1), 8],
            [Date.UTC(2021, 1, 2), 3],
            [Date.UTC(2021, 1, 3), 13],
            [Date.UTC(2021, 1, 4), 6],
            [Date.UTC(2021, 1, 5), 9],
            [Date.UTC(2021, 1, 6), 3],
            [Date.UTC(2021, 1, 7), 1]
          ]
        }, {
          name: 'Rabatte gekauft',
          data: [
            [Date.UTC(2021, 1, 1), 10],
            [Date.UTC(2021, 1, 2), 15],
            [Date.UTC(2021, 1, 3), 5],
            [Date.UTC(2021, 1, 4), 30],
            [Date.UTC(2021, 1, 5), 12],
            [Date.UTC(2021, 1, 6), 6],
            [Date.UTC(2021, 1, 7), 8]
          ]
        }, {
          name: 'Rabatte eingelöst',
          data: [
            [Date.UTC(2021, 1, 1), 5],
            [Date.UTC(2021, 1, 2), 7],
            [Date.UTC(2021, 1, 3), 3],
            [Date.UTC(2021, 1, 4), 8],
            [Date.UTC(2021, 1, 5), 3],
            [Date.UTC(2021, 1, 6), 5],
            [Date.UTC(2021, 1, 7), 1]
          ]
        }]
      })
    }
  }
}
</script>

<style scoped lang="scss">



</style>