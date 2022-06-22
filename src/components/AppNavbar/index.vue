<template>
  <div class="main">
   <!--  <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ 
          path: '{{$route.meta.title}}' }">首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb> -->
    <!-- 子组件路由出口，即渲染在此处 -->
    
    <router-view></router-view>
  </div>
</template>