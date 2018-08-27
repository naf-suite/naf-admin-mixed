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
      fields: ['分站名称', '分站标识', '域名', '状态', '创建时间'],
      filters: ['分站名称', '分站标识'],
    };
  },
};
</script>

