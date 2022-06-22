<template>
  <div class="data-screen">
    <div class="data-screen-header">图书信息管理系统数据面板</div>
    <div class="data-screen-content">
      <div class="data-screen-content-topleft">
        <div class="data-screen-content-topleft-list">
          <span>图书整体情况</span>
          <div class="data-screen-content-topleft-list-data">
            <span><i class="el-icon-s-platform"></i>图书总数</span>
            <p>3000册</p>
          </div>
          <div class="data-screen-content-topleft-list-data">
            <span><i class="el-icon-school"></i>图书种类</span>
            <p>30类</p>
          </div>
        </div>
        <div class="data-screen-content-topleft-list">
          <span>用户整体情况</span>
          <div class="data-screen-content-topleft-list-data">
            <span><i class="el-icon-user-solid"></i>系统用户数量</span>
            <p>30000人</p>
          </div>
          <div class="data-screen-content-topleft-list-data">
            <span><i class="el-icon-s-custom"></i>读者总数</span>
            <p>25860人</p>
          </div>
        </div>
        <div class="data-screen-content-topleft-list">
          <span>图书借阅情况</span>
          <div class="data-screen-content-topleft-list-data">
            <span><i class="el-icon-s-promotion"></i>借出数量</span>
            <p>600册</p>
          </div>
          <div class="data-screen-content-topleft-list-data">
            <span><i class="el-icon-s-data"></i>库存总数</span>
            <p>2000册</p>
          </div>
        </div>
      </div>
      <div class="data-screen-content-topright">
        <div ref="bookNumber" style="width: 700px; height: 200px"></div>
      </div>
      <div class="data-screen-content-below-left">
        <div>
          <el-radio v-model="userChoice" label="1" border
            >系统用户情况</el-radio
          >
          <el-radio v-model="userChoice" label="2" border
            >读者分布统计</el-radio
          >
        </div>
        <div ref="userSituation" style="width: 600px; height: 280px"></div>
        <!-- <div ref="userSituation" v-if="userChoice==='1'" style="width: 600px; height: 280px"></div>
        <div ref="readerSituation" v-if="userChoice==='2'" style="width: 600px; height: 280px"></div> -->
      </div>
      <div class="data-screen-content-below-right">
        <div class="block">
    <el-date-picker
      v-model="borrowingTime"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周">
    </el-date-picker>
  </div>
        <div ref="borrowingSituation" style="width: 600px; height: 280px"></div>
      </div>
    </div>
    <div class="data-screen-footer"></div>
  </div>
</template>

<script lang="ts" src="./dataScreen.ts"></script>
<style scoped >
.data-screen {
  width: 100%;
  height: 100%;
  /* display:flex; */
  text-align: center;
  align-items: center;
  justify-content: left;
  border-radius: 4px;
  font-size: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.data-screen-header {
  height: 5%;
  width: 100%;
  background-color: rgba(184, 175, 175, 0.642);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
.data-screen-content {
  height: 90%;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 5px;
}
.data-screen-content-topleft {
  width: 40%;
  height: 40%;
  float: left;
  background-color: rgba(201, 217, 231, 0.597);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 2px 2px 2px 2px;
}
.data-screen-content-topright {
  width: 58%;
  height: 40%;
  float: left;
  background-color: rgba(187, 187, 224, 0.597);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 2px 0px 2px 2px;
}
.data-screen-content-below-left {
  width: 48%;
  height: 58%;
  float: left;
  margin: 2px 2px 2px 2px;
  background-color: rgba(211, 235, 194, 0.729);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(192, 217, 187, 0.419);
}
.data-screen-content-topleft-list {
  width: 32%;
  height: 90%;
  float: left;
  margin: 0 1% 0 0;
  /* background-color: rgb(217, 214, 214); */
  font-size: 15px;
  font-weight: bold;
  color: rgba(59, 126, 240, 0.689);
  padding-top: 10px;
}
.data-screen-content-topleft-list-data {
  font-size: 12px;
  font-weight: bold;
  color: rgba(31, 39, 52, 0.616);
  padding-top: 25px;
}
.data-screen-content-below-right {
  width:50%;
  height: 58%;
  float: left;
  margin: 2px 2px 2px 2px;
  background-color: rgba(237, 239, 164, 0.726);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
