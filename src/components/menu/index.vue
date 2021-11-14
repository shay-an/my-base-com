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
import { getAll } from '@/services/menu'

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
    handleEdit (a:any, b:any) {
      console.log(a, b)
    },
    handleDelete (a:any, b:any) {
      console.log(a, b)
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
