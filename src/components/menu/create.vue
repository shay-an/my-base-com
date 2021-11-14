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
          <el-input v-model="form.herf"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单">
          <el-select v-model="form.parentId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="前端图标">
          <el-input v-model="form.icon"></el-input>
      </el-form-item>
      <el-form-item label="是否显示">
        <el-radio-group v-model="form.shown">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="form.orderNum" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
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
import { saveOrUpdate } from '@/services/menu'

export default Vue.extend({
  name: 'menuList',
  data () {
    return {
      form: {
        id: 0,
        parentId: -1,
        name: '',
        herf: '',
        icon: '',
        orderNum: 0,
        description: '',
        shown: true
      }
    }
  },
  methods: {
    async onSubmit () {
      await saveOrUpdate(this.form)
    },
    handleChange () {
      console.log('1111111')
    }
  }
})
</script>
<style lang="scss"></style>
