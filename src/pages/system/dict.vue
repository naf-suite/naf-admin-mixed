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
      fields: ['分类', '代码', '名称'],
      filters: ['分类', '代码'],
    };
  },
};
</script>

