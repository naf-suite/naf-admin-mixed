<template>
  <div class="contacts">
    <el-card class="left">
      <div slot="header" class="top">
        <el-input placeholder="搜索成员、部门、标签" prefix-icon="el-icon-search" size="mini" />
        <el-radio-group v-model="navType" size="mini">
          <el-radio-button label="org">组织机构</el-radio-button>
          <el-radio-button label="tag">标签</el-radio-button>
        </el-radio-group>
        <el-button icon="el-icon-plus" type="text" size="mini"></el-button>
      </div>
      <div class="nav-tree">
        <el-tree :data="navItems" :props="navProps" @node-click="handleNavClick" :render-content="renderNavNode" :highlight-current="true"></el-tree>
      </div>  
    </el-card>
    <el-card class="right" size="mini">
      <div slot="header" class="clearfix">
        <span>部门名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <user-table :fields="fields" :filters="filters"></user-table>
    </el-card>
  </div>
</template>
<script>
import UserTable from '@/components/contacts/user-table';

export default {
  components: {
    UserTable,
  },
  data() {
    return {
      fields: ['ID', '名称'],
      filters: ['名称'],
      navType: 'org',
      navProps: {
        children: 'children',
        label: 'label'
      },
      navItems: [
        {
          label: '一级 1',
          id: 1,
          children: [{
            label: '二级 1-1',
            id: 11,
            children: [{
              label: '三级 1-1-1',
              id: 111,
            }]
          }]
        }, {
          label: '一级 2',
          id: 2,
          children: [{
            label: '二级 2-1',
            id: 21,
            children: [{
              label: '三级 2-1-1',
              id: 211,
            }]
          }, {
            label: '二级 2-2',
            id: 22,
            children: [{
              label: '三级 2-2-1',
              id: 221,
            }]
          }]
        }, {
          label: '一级 3',
          id: 3,
          children: [{
            label: '二级 3-1',
            id: 31,
            children: [{
              label: '三级 3-1-1',
              id: 311,
            }]
          }, {
            label: '二级 3-2',
            id: 32,
            children: [{
              label: '三级 3-2-1',
              id: 321,
            }]
          }]
        }, {
          label: '一级 4',
          id: 4,
          children: [{
            label: '二级 4-1',
            id: 41,
            children: [{
              label: '三级 4-1-1',
              id: 411,
            }]
          }, {
            label: '二级 4-2',
            id: 42,
            children: [{
              label: '三级 4-2-1',
              id: 421,
            }]
          }]
        }, {
          label: '一级 5',
          children: [{
            label: '二级 5-1',
            children: [{
              label: '三级 5-1-1'
            }]
          }, {
            label: '二级 5-2',
            children: [{
              label: '三级 5-2-1'
            }]
          }]
        }
      ],
    };
  },
  methods: {
    handleNavClick(data) {
      console.log(data);
    },
    showNavMenu() {
      this.$message('click me');
    },
    renderNavNode(h, { node, data/* , store */ }) {
      const clickHandler = (e) => {
        console.log(data);
        e.stopPropagation();
      };
      return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
          <el-dropdown class="nav-btn" trigger="click" size="mini">
            <span class="el-dropdown-link" on-click={ clickHandler }>
              <i class="naf-icons naf-icon-dian"></i>
            </span>
            <el-dropdown-menu class="action-menu" slot="dropdown">
              <el-dropdown-item>添加子部门</el-dropdown-item>
              <el-dropdown-item>修改名称</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
              <el-dropdown-item>上移</el-dropdown-item>
              <el-dropdown-item>下移</el-dropdown-item>
              <el-dropdown-item divided disabled>部门ID: {data.id}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </span>);
    }
  }
};
</script>
<style lang="less" scoped>
.contacts {
  min-height: 100%;
  min-width: 1080px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.el-card {
  min-height: 100%;
}
.el-card /deep/ .el-card__header {
  padding: 10px;
}
.left {
  width: 260px;
}
.left .top {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  .el-input {
    margin-bottom: 10px;
  }
  .el-radio-group {
    flex: 1;
    display: inline-flex;
    .el-radio-button {
      flex: 1;
    }
    .el-radio-button /deep/ span {
      width: 100%;
    }
  }
  .el-button {
    margin-left: 5px;
    padding: 0;
  }
  .el-button /deep/ i {
    font-weight: bold;
    font-size: 16px;
  }
}
.right {
  min-width: 800px;
  flex: 1;
}
.left {
  /deep/ .el-card__body{
    padding: 0;
  }
  /deep/ .el-tree-node.is-current>.el-tree-node__content{
    background-color: #409EFF;
    color: white;
    .naf-icon-dian{
      display: inline;
      color: white;
    }
  }
  /deep/ .naf-icon-dian{
    display: none;
  }
  /deep/ .el-tree-node__content:hover .naf-icon-dian{
    display: inline;
  }

}
</style>
