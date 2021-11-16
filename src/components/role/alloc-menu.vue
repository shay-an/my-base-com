<template>
  <el-card>
    <div slot="header">
      分配权限
    </div>
    <div class="alloc-menu">
      <el-tree
        :data="roleMenu"
        show-checkbox
        node-key="id"
        :default-checked-keys="defaultSelect"
        ref="role-alloc"
        default-expand-all
        :props="defaultProps">
      </el-tree>
      <el-button @click="resetTree">清空</el-button>
      <el-button @click="saveMenu">提交</el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { getRoleMenus, allocateRoleMenus } from '@/services/role'
import { Tree } from 'element-ui'

export default Vue.extend({
  name: 'AllocMenu',
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      roleMenu: [],
      defaultSelect: [],
      defaultProps: {
        children: 'subMenuList',
        label: 'name'
      }
    }
  },
  created () {
    if (this.id) {
      this.getMenu()
    }
  },
  methods: {
    async getMenu () {
      const { data } = await getRoleMenus(this.id)
      this.roleMenu = data.data
      this.flatten(this.roleMenu)
    },
    async saveMenu () {
      const keys = (this.$refs['role-alloc'] as Tree).getCheckedKeys()
      console.log(keys)
      await allocateRoleMenus({
        menuIdList: keys,
        roleId: this.id
      })
      this.$router.back()
    },
    flatten (data:any) {
      data.forEach((item:any) => {
        if (item.selected) {
          this.defaultSelect = [...this.defaultSelect, item.id] as any
        }

        if (item.subMenuList) {
          this.flatten(item.subMenuList)
        }
      })
    },
    resetTree () {
      (this.$refs['role-alloc'] as Tree).setCheckedKeys([])
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
