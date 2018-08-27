<template>
  <demo-table :fields="fields" :filters="filters"></demo-table>
</template>
<script>
import DemoTable from '@/components/data/demo-table';

export default {
  components: {
    DemoTable,
  },
  data() {
    return {
      fields: ['企业名称', '统一社会信用代码', '所在省份', '企业性质', '企业规模', '注册时间', '审核状态', '注册人', '注册人手机'],
      filters: ['企业名称'],
    };
  },
};
</script>

