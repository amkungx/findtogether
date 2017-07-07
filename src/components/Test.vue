<template>
  <div class="container">
    <div class="router-content">
      <el-button @click.native="startHacking">Let's do it</el-button>
      <el-button @click.native="open">Message</el-button>
      <el-button @click.native="open2">Confirm</el-button>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
    open () {
      this.$message('This is a message.')
    },
    open2 () {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>
<style>

</style>
