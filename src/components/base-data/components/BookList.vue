<template>
  <div class="main-container">
    <div class="action-container">
      <el-button style="font-size: 12px;" type="text">
        <Icon type="plus-circled"></Icon>
        添加
      </el-button>
      <el-button style="font-size: 12px;" type="text" @click.native.prevent="deleteSelectRows(scope)">
        <Icon type="minus-circled"></Icon>
        删除
      </el-button>
      <el-input size="small" placeholder="输入分类名称过滤" prefix-icon="el-icon-search" v-model="filterText">
      </el-input>
    </div>
    <el-table :data="tableData" highlight-current-row border>
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="code" label="编号">
      </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
      <el-table-column prop="addTime" label="添加时间">
      </el-table-column>
      <el-table-column prop="lastReadTime" label="上次阅读时间">
      </el-table-column>
      <el-table-column prop="author" label="作者">
      </el-table-column>
      <el-table-column prop="classification" label="类目">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">
            删除
          </el-button>
          <el-button type="text" size="small" @click="edit()">
            编辑
          </el-button>
          <el-button type="text" size="small" @click="read()">
            阅读
          </el-button>
          <el-button type="text" size="small" @click="desc(scope.$index, tableData)">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="查看" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <span>{{book}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import mockData from '../mock/data.mock'

export default {
  data () {
    return {
      tableData: mockData.getBookList(),
      dialogVisible: false,
      book: ''
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    edit () {
      console.log('edit')
    },
    read () {
      console.log('read')
    },
    desc (index, rows) {
      this.dialogVisible = !this.dialogVisible
      this.book = rows[index]
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-container {
  .action-container {
    .el-input {
      width: 20%;
      float: right;
    }
    .ivu-icon {
      margin-right: 5px;
    }
  }
  .el-table td,
  .el-table th {
    padding: 5px 0 !important;
  }
}
</style>
