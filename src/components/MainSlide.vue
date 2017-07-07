<template>
  <div>
    <el-carousel :autoplay="autoplay">
      <el-carousel-item v-for="item in 4" :key="item">
        <!--<img src="http://www.tooplate.com/templates/2081_solution/images/slider/1.jpg" width="100%">-->
        <h3>Title {{item}}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      autoplay: false
    }
  }
}
</script>
<style scope>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

