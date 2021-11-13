<template>
  <div class="login">
    <!-- :model="ruleForm" -->
    <el-form
    label-position="top"
    ref="form"
    :model="form"
    label-width="80px"
    class="login-box"
    :rules="rules"
    >
      <el-form-item prop="phone" label="用户名">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="isLoading" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { login } from '@/services/user'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Login',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      isLoading: false,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '不是合法的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '请输入正确的密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      await (this.$refs.form as Form).validate()
      this.isLoading = true
      const { data } = await login(this.form)
      console.log('submit!', data)
      if (data.state !== 1) {
        // return alert(data.message)
        this.isLoading = false
        return this.$message.error(data.message)
      }
      this.setUser(data.content)
      this.$message.success(data.message)
      this.isLoading = false
      this.$router.push(this.$route.query.redirect as string || '/')
      // this.$router.push({
      //   name: 'home'
      // })
    },
    ...mapMutations(['setUser'])
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
