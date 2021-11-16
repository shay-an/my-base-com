<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="角色名称">
          <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="角色编码">
          <el-input v-model="formLabelAlign.code"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
          <el-input v-model="formLabelAlign.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="$emit('success')">取 消</el-button>
        <el-button type="primary" @click="saveOrUpdate">确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { saveOrUpdate, getRow } from '@/services/role'

export default Vue.extend({
  name: 'RoleForm',
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      formLabelAlign: {
        name: '',
        code: '',
        description: ''
      }
    }
  },
  created () {
    if (this.id) {
      this.getRow()
    }
  },
  methods: {
    async saveOrUpdate () {
      await saveOrUpdate(this.formLabelAlign)
      this.$emit('success')
    },
    async getRow () {
      // this.formLabelAlign = this.$options.data().formLabelAlign
      const { data } = await getRow(this.id)
      this.formLabelAlign = data.data
    }
  }
})
</script>
<style lang="scss">

</style>
