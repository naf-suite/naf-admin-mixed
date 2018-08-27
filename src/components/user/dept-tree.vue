<template>
  <div class="nav-tree">
    <el-tree :data="navItems" :props="navProps" @node-click="handleNavClick" :highlight-current="true"></el-tree>
  </div>
</template>
<script>
export default {
  props: {
    navItems: Array,
  },
  data() {
    return {
      navProps: {
        children: 'children',
        label: 'label'
      },
    };
  },
  methods: {
    handleNavClick(data) {
      this.$emit('selected', data);
    },
  }
};
</script>
<style lang="less" scoped>
.nav-tree {
  /deep/ .el-tree-node.is-current > .el-tree-node__content {
    background-color: #409eff;
    color: white;
    .naf-icon-dian {
      display: inline;
      color: white;
    }
  }
  /deep/ .naf-icon-dian {
    display: none;
  }
  /deep/ .el-tree-node__content:hover .naf-icon-dian {
    display: inline;
  }
}
</style>
