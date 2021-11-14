<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <el-button type="text" @click="dialogVisible = true">添加角色</el-button>
      </span>
    </div>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <role-form/>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import RoleForm from './components/RoleForm.vue'

export default Vue.extend({
  name: 'role',
  components: {
    RoleForm
  },
  data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      handleClose (done:() => void) {
        this.$confirm('确认关闭？')
          .then(() => {
            done()
          })
          .catch((err) => console.log(err))
      }
    }
})
</script>
<style lang="scss"></style>
