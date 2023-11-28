<script setup></script>

<template>
  <div class="app">
    <div class="nav">
      <router-link to="/index">Index</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/not-found">NotFound</router-link>
    </div>

    <!-- 路由视图占位 -->
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.nav {
  height: 72px;
  display: flex;
  a {
    padding: 0 20px;
    border-right: 1px solid #fff;
    line-height: 72px;
    background-color: #000;
    font-size: 16px;
    color: #fff
  }
  .router-link-active {
    background-color: #f40;
    color: #fff
  }
}
</style>
