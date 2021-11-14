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
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RoleForm',
  data () {
    return {
      formLabelAlign: {
        name: '',
        code: '',
        description: ''
      }
    }
  }
})
</script>
<style lang="scss">

</style>
