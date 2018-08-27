<template>
	<el-container class="container">
    <el-header height="36px" style="line-height:36px;">
      <div class="filter-box">
        <el-input placeholder="请输入内容" class="input-with-select" :clearable="true" size="mini" 
          v-model="fieldValue">
          <el-select slot="prepend" placeholder="请选择" width="110" v-model="fieldName">
            <el-option v-for="(item,index) in filters" :label="item" :value="item" :key="'filter'+index"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="query"></el-button>
        </el-input>
      </div>            
      <el-button icon="el-icon-plus" type="primary" size="mini" v-if="showAction">添加</el-button>
    </el-header>
    <el-main>
      <el-table border style="width: 100%;overflow: auto;" size="mini">  
        <el-table-column v-for="(item,index) in fields" :label="item" :key="'field'+index"></el-table-column>
        <el-table-column label="操作" v-if="showAction"></el-table-column>
      </el-table>
    </el-main>
    <el-footer height="36px"> 
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="page" :page-sizes="[10, 20, 50, 100, 200]" :page-size="size" :total="total"
            layout="total, sizes, prev, pager, next, jumper"></el-pagination>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'demo-table',
  props: {
    fields: Array,
    filters: Array,
    readonly: Boolean,
  },
  data() {
    return {
      loading: false,
      dataSource: [],
      total: 0,
      page: 1,
      size: 20,
      fieldName: '',
      fieldValue: '',
      showAction: !(this.readonly),
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    async query() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      if (this.total === 0) return;
      const pages = Math.floor((this.total + val) / val);
      if (pages < this.page) this.page = pages;
      this.query();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.query();
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.el-table {
  height: 100%;
  overflow: auto;
}
.filter-box{
  width: 280px;
  display: inline-block;
  .el-select {
    width: 100px;
  }
}
</style>
