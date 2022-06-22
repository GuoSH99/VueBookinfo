<template>
  <div>
    <h1>图书信息管理首页</h1>
    <div ref="chartDemodiv" style="width: 100%; height: 400px"></div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
}
</style>
<script>
/* import echarts from "echarts";  //官方的引入方式会报错*/
let echarts = require("echarts");
import bookinfoApi from "@/api/bookinfo.js";
export default {
  data() {
    return {
      chartDemo: null,
      bookTypeData: {
        bookType: [],
        quantitySum: [],
      },
    };
  },
  computed: {
    options() {
      const option = {
        title: {
          text: " 各种类型图书库存数量",
          left: "center",
          textStyle: {
            color: "red",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          top: 30,
          data: [
            {
              name: "库存数量",
              icon: "circle",
              textStyle: {
                color: "#545c64",
                fontFamily: "微软雅黑",
                fontSize: 16,
              },
            },
          ],
        },
        xAxis: {
          type: "category",
          data: this.bookTypeData.bookType,
        },
        yAxis: {
          type: "value",
          min: 500,
          interval: 50,
        },
        series: [
          {
            name: "库存数量",
            data: this.bookTypeData.quantitySum,
            type: "bar",
          },
        ],
      };
      return option;
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
      this.chartDemo = echarts.init(this.$refs["chartDemodiv"]);
      this.chartDemo.setOption(this.options, true);
      window.addEventListener("resize", this.chartDemo.resize);
    },
  },
  watch: {
    options(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.chartDemo.setOption(newVal);
      }
    },
  },
};
</script>


