<template>
  <div>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <el-button type="text" @click="dialogVisible = true">添加角色</el-button>
      </span>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="添加时间"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
            size="mini"
            @click="$router.push({
              name: 'role-alloc',
              params: {
                id: scope.row.id
              }
            })">授权</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <role-form
        v-if="dialogVisible"
        :id="curlId"
        @success="dialogVisible = false"
      />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import RoleForm from './components/RoleForm.vue'
import { getRolePages } from '@/services/role'

export default Vue.extend({
  name: 'role',
  components: {
    RoleForm
  },
  data () {
    return {
      dialogVisible: false,
      curlId: null,
      tableData: [],
      queryData: {
        current: 1,
        name: '',
        size: 5
      }
    }
  },
  created () {
    this.curlId = null
    this.getTabelData()
  },
  methods: {
    handleClose (done:() => void) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch((err) => console.log(err))
    },
    async getTabelData () {
      const { data } = await getRolePages(this.queryData)
      this.tableData = data.data.records
    },
    handleEdit (data:any) {
      this.curlId = data.id
      this.dialogVisible = true
    }
  }
})
</script>
<style lang="scss"></style>
