<template>
	<el-container class="fillcontain">
    <el-header height="36px" style="line-height:36px;">
      <el-button icon="el-icon-plus" type="primary" size="mini">添加用户</el-button>
      <el-button icon="el-icon-remove" type="primary" size="mini">删除用户</el-button>
    </el-header>
    <el-main>
      <el-table border size="mini" class="fillcontain" style="overflow: auto;">  
        <el-table-column label="姓名"></el-table-column>
        <el-table-column label="登录名"></el-table-column>
        <el-table-column label="性别"></el-table-column>
        <el-table-column label="职位"></el-table-column>
        <el-table-column label="手机号"></el-table-column>
        <el-table-column label="电话"></el-table-column>
        <el-table-column label="电子邮件"></el-table-column>
        <el-table-column label="电子邮件"></el-table-column>
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
  data() {
    return {
      loading: false,
      dataSource: [],
      total: 0,
      page: 1,
      size: 20,
      fieldName: '',
      fieldValue: '',
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
