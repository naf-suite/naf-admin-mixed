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
      fields: ['类别', '标题', '图片', '发布时间', '发布人', '更新时间', '状态'],
      filters: ['类别', '标题'],
    };
  },
};
</script>

