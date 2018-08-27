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
      fields: ['用户', 'CN', 'DN', '证书状态', '签发时间'],
      filters: ['用户', 'CN'],
    };
  },
};
</script>

