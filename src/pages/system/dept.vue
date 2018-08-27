<template>
  <div class="contacts">
    <el-card class="left">
      <div slot="header" class="top">
        <span>{{productName}}</span>
      </div>
      <dept-tree @selected="setCurrent" :nav-items="items"></dept-tree>
    </el-card>
    <el-card class="right" size="mini">
      <div slot="header" class="clearfix">
        <span>{{(current && current.label) || '当前部门' }}</span>
        <el-button icon="el-icon-plus" style="float: right; padding: 3px 0" type="text">添加子部门 </el-button>
      </div>
      <el-table border style="width: 100%;overflow: auto;" size="mini"
        :data="list">  
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="上级ID" prop="parentId"></el-table-column>
        <el-table-column label="部门名称" prop="label"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import DemoTable from '@/components/data/demo-table';
import DeptTree from '@/components/user/dept-tree';
import { createNamespacedHelpers } from 'vuex';
import config from '@/config';
import * as types from '@/constants/mutation-types';


const { productName } = config;

const { mapState, mapActions, mapMutations } = createNamespacedHelpers('dept');

export default {
  components: {
    DemoTable,
    DeptTree,
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      productName,
      list: [],
    };
  },
  methods: {
    ...mapActions(['load']),
    ...mapMutations({select: types.DEPT_SELECTED}),
    setCurrent(data) {
      this.select(data); 
      this.list = data.children;
    }
  },
  computed: {
  ...mapState(['current', 'items']),
  },

};
</script>
<style lang="less" scoped>
.contacts {
  min-height: 100%;
  min-width: 800px;
  padding-right: 10px;
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
  justify-content: space-around;
  align-items: left;
}
.right {
  flex: 1;
}

</style>
