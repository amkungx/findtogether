<template>
  <div id="app">
    <!--<header>
                    <span>Vue.js PWA</span>
                  </header>
                  <img src="./assets/logo.png" alt="Vue.js PWA">-->
    <main>
      <LHeader></LHeader>
      <el-collapse-transition>
        <router-view></router-view>
      </el-collapse-transition>
    </main>
    <LFooter></LFooter>
  </div>
</template>

<script>
import LHeader from '@/layouts/Header'
import LFooter from '@/layouts/Footer'
export default {
  name: 'app',
  components: {
    LHeader,
    LFooter
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}

body {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  min-height: 100%;
  margin-bottom: -100px;
  padding-bottom: 100px;
}

.router-content {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
