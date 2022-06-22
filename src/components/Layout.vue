/* 主页布局文件 */
<template>
  <div>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>
  </div>
</template>
<script>
import AppHeader from "./AppHeader/index.vue"
import AppNavbar from "./AppNavbar/index.vue"
import AppMain from "./AppMain/index.vue"
export default {
    components:{
        AppHeader,       
        AppNavbar,
         AppMain
    }
}
</script>
<style scoped>
.header {
  position: absolute;
  line-height: 54px;
  background-color: aqua;
  left: 0%;
  right: 0%;
  top: 0%;
}
.navbar {
  position: absolute;
  width: 200px;
  background-color: #78f57eef;
  left: 0px;
  bottom: 0px;
  top: 50px;
  overflow-y: auto;
}
.main {
  position: absolute;
  background-color: #fdfdfd;
  left: 200px;
  right: 0px;
  bottom: 0px;
  top: 50px;
  padding: 10px;
  overflow-y: auto;
}
</style>