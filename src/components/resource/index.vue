<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-form :inline="true" label-width="80px" :model="pages">
        <el-form-item label="名称">
          <el-input v-model="pages.name"></el-input>
        </el-form-item>
        <el-form-item label="URL">
          <el-input v-model="pages.url"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getAllMenu">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="编号"
        type="index">
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜单名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="url"
        label="路径"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="categoryId"
        label="类型ID"
        width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page="pages.current"
      :page-sizes="[5, 10, 20]"
      @size-change="handleSizeChange"
      :page-size="pages.size"
      layout="sizes, prev, pager, next"
      @current-change="changePage"
      :total="records.pages * pages.size">
    </el-pagination>
  </el-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { getResourcePages } from '@/services/resource'

export default Vue.extend({
  name: 'getResourcePages',
  data () {
    return {
      tableData: [],
      pages: {
        categoryId: null,
        current: 1,
        name: '',
        size: 5,
        url: ''
      },
      records: {
        current: 1,
        hitCount: false,
        optimizeCountSql: true,
        orders: [],
        pages: 11
      }
    }
  },
  created () {
    this.getAllMenu()
  },
  methods: {
    async getAllMenu () {
      const { data } = await getResourcePages(this.pages)
      if (data.code === '000000') {
        this.tableData = data.data.records as []
        this.records = data.data as any
      }
    },
    changePage (val:number) {
      console.log(val)
      this.pages.current = val
      this.getAllMenu()
    },
    handleSizeChange (val:number) {
      this.pages.size = val
      this.getAllMenu()
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
