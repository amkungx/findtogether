<template>
  <header id="sss">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/" id="logo">LOGO</el-menu-item>
      <div class="pull-right">
        <el-submenu index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <a href="/test">Orders</a>
        </el-menu-item>
        <el-menu-item index="/test">Test</el-menu-item>
      </div>
    </el-menu>
  </header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      route_test: '/test'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleScroll: function (event) {
      if (event.target.body.scrollTop > 150) {
        document.getElementById('sss').classList.add('smaller')
      } else {
        document.getElementById('sss').classList.remove('smaller')
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
header {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #0683c9;
  -webkit-transition: height 0.3s;
  -moz-transition: height 0.3s;
  -ms-transition: height 0.3s;
  -o-transition: height 0.3s;
  transition: height 0.3s;
}

header.smaller {
  height: 50px;
}

.el-menu {
  border-radius: 0;
}
</style>
