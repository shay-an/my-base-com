<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <el-button @click="$router.push({ name: 'menu-create'})">添加菜单</el-button>
      </span>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        type="index">
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜单名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="href"
        label="菜单路径"
        width="180">
      </el-table-column>
      <el-table-column
        prop="parentId"
        label="上级菜单"
        width="180">
      </el-table-column>
      <el-table-column
        prop="icon"
        label="前端图标"
        width="180">
      </el-table-column>
      <el-table-column
        prop="shown"
        label="是否显示"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="排序"
        width="180">
      </el-table-column>
      <el-table-column
        label="排序"
        width="180">
        <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getAll, Menu, delelteMenu } from '@/services/menu'

export default Vue.extend({
  name: 'menuList',
  data () {
    return {
        tableData: []
    }
  },
  created () {
    this.getAllMenu()
  },
  methods: {
    async getAllMenu () {
      const { data } = await getAll()
      if (data.code === '000000') {
        this.tableData = data.data
      }
    },
    handleEdit (index: number, item:Menu) {
      // console.log(item.id)
      let id = -1
      if (item.id !== undefined) {
        id = item.id
      }
      console.log(id)
      this.$router.push({
        name: 'menu-edit',
        params: {
          id: id.toString()
        }
      })
    },
    handleDelete (index: number, item:Menu) {
      this.$confirm('确认删除吗？', '提示', {})
        .then(async () => {
          if (item.id !== undefined) {
            const { data } = await delelteMenu(item.id)
            if (data.code === '000000') {
              this.$message.success('删除成功')
            }
          }
        })
        .then(() => {
          return this.getAllMenu()
        })
        .catch(() => {
          this.$message.warning('已经取消删除')
        })
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
