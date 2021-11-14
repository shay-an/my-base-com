<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <el-button @click="$router.push({ name: 'menu-create'})">添加菜单</el-button>
      </span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'menuList'
})
</script>
<style lang="scss">
</style>
