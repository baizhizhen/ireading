<template>
  <div class="main-container">
    <div class="action-container">
      <el-input
        size="small"
        placeholder="输入分类名称过滤"
        v-model="filterText">
      </el-input>
      <el-button type="danger" size="small" plain>删除</el-button>
    </div>
    <el-tree
      :data="data4"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
</template>
<script>
  let id = 1000

  export default {
    data () {
      return {
        filterText: '',
        data4: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      append (data) {
        const newChild = {id: id++, label: 'testtest', children: []}
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        data.children.push(newChild)
      },

      remove (node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },

      renderContent (h, {node, data, store}) {
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
          <span>{node.label}</span>
        </span>
        <span>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加</el-button>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>编辑</el-button>
        </span>
        </span>)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main-container{
    height: 100%;
    .action-container{
      margin-bottom: 15px;
      .el-input{
        width: calc(100% - 60px);
      }
    }
    .el-tree{
      height: calc(100% - 67px);
    }
  }
</style>
