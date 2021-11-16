<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="30" :src="url"></el-avatar>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>{{ username }}</el-dropdown-item>
      <el-dropdown-item
       divided
       @click.native="logoutClickHandle"
       >退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getUserInfo } from '@/services/user'

export default Vue.extend({
  name: 'appHeader',
  data () {
    return {
      url: '',
      username: ''
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data } = await getUserInfo()
      this.url = data.content.portrait
      this.username = data.content.userName
    },
    logoutClickHandle () {
      this.$confirm('确认退出？', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('setUser', null)
        this.$router.push({
          name: 'login'
        })
        this.$message.success('退出成功')
      }).catch(() => {
        this.$message.warning('您取消了退出')
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.div {
  color: $success-color;
}

.header{
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
</style>
