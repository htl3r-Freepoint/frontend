<template>
  <div>
    <!--    <div id="statBar">
          <div v-tooltip.hover:top="'Gescannte Rechnungen pro Woche'">
            {{ data.scanned.length }}
          </div>
          <div v-tooltip.hover:top="'Gekaufte Rabatte pro Woche'">
            {{ data.bought.length }}
          </div>
          <div v-tooltip.hover:top="'Eingelöste Rabatte pro Woche'">
            {{ data.used.length }}
          </div>
        </div>-->
    <div id="UserAction" class="col mt-1 mb-1"/>
  </div>
</template>

<script>
import Highchart from 'highcharts/highcharts.js'

export default {
  name: "Statistics",
  components: {},
  data() {
    return {
      data: {
        scanned: [],
        bought: [],
        used: [],
        opened: []
      }
    }
  },
  created() {
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$http.post(this.$store.state.url + '/getStatistik', {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName
      }).then(response => {
        console.debug(response)
        this.data = response.data
        this.basicChart()
      })
    },
    basicChart() {
      this.Chart = Highchart.chart('UserAction', {
        chart: {
          type: 'line'
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
          data: this.data.scanned.reverse()
        }, {
          name: 'Rabatte gekauft',
          data: this.data.bought.reverse()
        }, {
          name: 'Rabatte eingelöst',
          data: this.data.used.reverse()
        }, {
          name: 'Seite geöffnet',
          data: this.data.opened.reverse()
        }]
      })
    }
  }
}
</script>

<style scoped lang="scss">

#statBar {
  display: flex;
  flex-direction: row;
  background-color: #2b2b2b;
  color: white;
  margin: auto;
  width: fit-content;
  padding: .5em;
  border-radius: 25px;

  & div {
    padding: 0 .5em;
    border-right: white solid 2px;
    font-weight: bold;

    &:last-child {
      border: none;
    }
  }
}

</style>