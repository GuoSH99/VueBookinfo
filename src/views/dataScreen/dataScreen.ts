import bookinfoApi from "../../api/bookinfo.js";

let echarts = require("echarts");


export default {
  name: "dataScreen", 
  data() {
    return {
      chartDemo: null,
      chaerDemo2: null,
      chartDemo3: null,
      chartDemo4: null,
      userChoice: "1",
      borrowingTime : "",
      bookTypeData: {
        bookType: [],
        quantitySum: [],
      },
    };
  },
  computed: {
    options() {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          text: '图书资源详情统计',
          x: 'center',
          y: 'top',

          textAlign: 'left',
        },
        legend: {
          top: '25px'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['编程类', '社科类', '文学类', '财经类', '电子信息', '网络安全', '党建类']

        },
        series: [
          {
            name: '学报',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [280, 150, 258, 234, 189, 270, 220]
          },
          {
            name: '期刊',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [230, 232, 218, 234, 190, 230, 210]
          },
          {
            name: '数字资源',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '图书',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [820, 832, 901, 934, 1020, 930, 980]

          },
          {
            name: '其它',
            type: 'bar',
            stack: 'total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          }
        ]
      };
      const option2 = {
        title: {
          text: '用户分布情况统计',
          x: 'center',
          y: 'top',
          top: '5px',
          textAlign: 'left',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          data: [
            '商学院',
            '传媒学院',
            '大数据学院',
            '哲学',
            '经济学',
            '法学',
            '教育学',
            '文学',
            '历史学',
            '理学',
            '工学',
            '农学',
            '医学',
            '军事学',
            '管理学',
            '艺术学',
            '交叉学科'            
          ],
          top: '35px'
        },
        series: [
          {
            name: '学院分布',
            type: 'pie',
            top: '45px',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              fontSize: 14
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: '大数据学院' },
              { value: 775, name: '商学院' },
              { value: 775, name: '文学院' },
              { value: 679, name: '传媒学院', selected: true}
            ]
          },
          {
            name: '学科分布',
            type: 'pie',
            top: '45px',
            radius: ['45%', '60%'],
            labelLine: {
              length: 10
            },
            label: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#F6F8FC',
              borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#6E7079',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#8C8D8E',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#4C5058',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33
                },
                per: {
                  color: '#fff',
                  backgroundColor: '#4C5058',
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            data: [
              { value: 1048, name: '哲学' },
              { value: 335, name: '经济学' },
              { value: 310, name: '文学' },
              { value: 251, name: '艺术学' },
              { value: 234, name: '管理学' },
              { value: 147, name: '经济学' },
              { value: 135, name: '历史学' },
              { value: 102, name: '理学' }
            ]
          }
        ]
      };
      const option3 = {
        dataset: [
          {
            source: [
              ['Product', 'Sales', 'Price', 'Year'],
              ['Cake', 123, 32, 2011],
              ['Cereal', 231, 14, 2011],
              ['Tofu', 235, 5, 2011],
              ['Dumpling', 341, 25, 2011],
              ['Biscuit', 122, 29, 2011],
              ['Cake', 143, 30, 2012],
              ['Cereal', 201, 19, 2012],
              ['Tofu', 255, 7, 2012],
              ['Dumpling', 241, 27, 2012],
              ['Biscuit', 102, 34, 2012],
              ['Cake', 153, 28, 2013],
              ['Cereal', 181, 21, 2013],
              ['Tofu', 395, 4, 2013],
              ['Dumpling', 281, 31, 2013],
              ['Biscuit', 92, 39, 2013],
              ['Cake', 223, 29, 2014],
              ['Cereal', 211, 17, 2014],
              ['Tofu', 345, 3, 2014],
              ['Dumpling', 211, 35, 2014],
              ['Biscuit', 72, 24, 2014]
            ]
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2011 }
            }
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2012 }
            }
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2013 }
            }
          }
        ],
        series: [
          {
            type: 'pie',
            radius: 50,
            center: ['50%', '25%'],
            datasetIndex: 1
          },
          {
            type: 'pie',
            radius: 50,
            center: ['50%', '50%'],
            datasetIndex: 2
          },
          {
            type: 'pie',
            radius: 50,
            center: ['50%', '75%'],
            datasetIndex: 3
          }
        ],
        // Optional. Only for responsive layout:
        media: [
          {
            query: { minAspectRatio: 1 },
            option: {
              series: [
                { center: ['25%', '50%'] },
                { center: ['50%', '50%'] },
                { center: ['75%', '50%'] }
              ]
            }
          },
          {
            option: {
              series: [
                { center: ['50%', '25%'] },
                { center: ['50%', '50%'] },
                { center: ['50%', '75%'] }
              ]
            }
          }
        ]
      };
      const option4 = {
        title: {
          text: '借阅情况分析',
          x: 'center',
          y: 'top',
          top: '5px',
          textAlign: 'left',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '35px',
          data: ['学报', '期刊', '数字资源', '图书','其它', '总借阅']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '学报',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '期刊',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '数字资源',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '图书',
            type: 'line',
            stack: 'Total',
            data: [620, 382, 201, 304, 190, 230, 320]
          },
          {
            name: '其它',
            type: 'line',
            stack: 'Total',
            data: [80, 62, 79, 110, 123, 107, 92]
          },
          {
            name: '总借阅',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      return [option, option2, option3, option4];
    },
  },

  mounted() {
    this.drawLine();
  },
  created() {
    this.getBookTypeSum();
  },
  methods: {
    getBookTypeSum() {
      bookinfoApi.getTypeSum().then((response) => {
        const resp = response.data;
        if (resp.flag) {
          this.bookTypeData.bookType = resp.data.bookType;
          this.bookTypeData.quantitySum = resp.data.quantitySum;
          console.log(this.bookTypeData.bookType);
          console.log(this.bookTypeData.quantitySum);
        } else {
          this.$message({
            message: resp.message,
            type: "warning",
          });
        }
      });
    },

    drawLine() {
      this.chartDemo = echarts.init(this.$refs["bookNumber"]);
      this.chartDemo2 = echarts.init(this.$refs["userSituation"]);
      // this.chartDemo3 = echarts.init(this.$refs["readerSituation"]);
      this.chartDemo4 = echarts.init(this.$refs["borrowingSituation"]);
      this.chartDemo.setOption(this.options[0], true);
      this.chartDemo2.setOption(this.options[1], true);
      // this.chartDemo3.setOption(this.options[2], true);
      this.chartDemo4.setOption(this.options[3], true);
      window.addEventListener("resize", this.chartDemo.resize);
      window.addEventListener("resize2", this.chartDemo.resize);
      // window.addEventListener("resize3", this.chartDemo.resize);
      window.addEventListener("resize4", this.chartDemo.resize);
    },
  },
  watch: {
    options(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.chartDemo.setOption(newVal);
        this.chartDemo2.setOption(newVal);
        // this.chartDemo3.setOption(newVal);
        this.chartDemo4.setOption(newVal);
      }
    },
  },
};