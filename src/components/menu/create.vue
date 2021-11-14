<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span>
          添加菜单
        </span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="菜单名称">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单路径">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单">
          <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="描述">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="前端图标">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="是否显示">
        <el-radio v-model="form.radio" label="1">是</el-radio>
        <el-radio v-model="form.radio" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'menuList',
  data () {
    return {
      form: {
        name: '',
        radio: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      num: 0
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleChange () {
      console.log('1111111')
    }
  }
})
</script>
<style lang="scss"></style>
