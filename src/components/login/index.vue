<template>
  <div class="login">
    <el-form
    label-position="top"
    ref="form"
    :model="form"
    label-width="80px"
    class="login-box"
    :rules="rules"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="isLoading" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import requst from '@/utils/request'
import qs from 'qs'

export default Vue.extend({
  name: 'Login',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      const { data } = await requst({
        method: 'POST',
        url: '/front/user/login',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(this.form)
      })
      console.log('submit!', data)
      if (data.state !== 1) {
        // return alert(data.message)
        return this.$message.error(data.message)
      }
      this.$message.success(data.message)
      // this.isLoading = false
      this.$router.push({
        name: 'home'
      })
    }
  }
})
</script>
<style lang="scss">
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 300px;
    background: #fff;
    padding: 20px;
    border: 1px solid #ccc;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
