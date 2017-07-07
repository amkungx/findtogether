<template>
  <div class="container">
    <div class="router-content">
      <el-row :gutter="30">
        <el-col :xs="12" :sm="8" :md="6" v-for="(o, index) in 10" :key="o" style="margin-bottom: 30px;">
          <el-card :body-style="{ padding: '0px' }">
            <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
            <div style="padding: 14px;">
              <span>Yummy hamburger</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">Operating button</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
</style>
