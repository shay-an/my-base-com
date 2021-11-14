<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        {{ isEdit ? '编辑菜单' : '添加菜单' }}
      </div>
      <el-form ref="form" :model="form" refs="form" label-width="80px">
      <el-form-item label="菜单名称">
          <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单路径">
          <el-input v-model="form.herf"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单">
          <el-select v-model="form.parentId" placeholder="请选择活动区域">
          <el-option label="无上级菜单" :value="-1"></el-option>
          <el-option
           v-for="item in parentIdList"
           :label="item.name"
           :value="item.id"
           :key="item.id"
           ></el-option>
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
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button
           type="primary"
           @click="resetSubmit"
           v-if="isEdit"
           >重置</el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { saveOrUpdate, getEditMenuInfo } from '@/services/menu'

export default Vue.extend({
  name: 'menuCreateOrEdit',
  props: {
      isEdit: {
          type: Boolean,
          default: false
      }
  },
  data () {
    return {
      form: {
        id: -1,
        description: '123',
        href: '123',
        icon: '123',
        name: '123',
        orderNum: 1,
        parentId: -1,
        shown: false
      },
      parentIdList: []
    }
  },
  created () {
    this.getEditMenuInfo()
  },
  methods: {
    async onSubmit () {
      const { data } = await saveOrUpdate(this.form)
      if (data.code === '000000') {
        this.$router.back()
      }
    },
    resetSubmit () {
        console.log('resetSubmit')
        const el = this.$refs.form as Form
        el.resetFields()
    },
    async getEditMenuInfo () {
      const { data } = await getEditMenuInfo(this.$route.params.id || -1)
      if (data.code === '000000') {
        this.parentIdList = data.data.parentMenuList

        if (data.data.menuInfo) {
            this.form = data.data.menuInfo
        }
      }
    },
    handleChange () {
      console.log('1111111')
    }
  }
})
</script>
<style lang="scss">
.el-card__header {
  height: 60px;
  line-height: 20px;
}
</style>
