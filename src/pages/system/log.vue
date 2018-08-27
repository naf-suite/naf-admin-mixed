<template>
  <demo-table :fields="fields" :filters="filters" :readonly="true"></demo-table>
</template>
<script>
import DemoTable from '@/components/data/demo-table';

export default {
  components: {
    DemoTable,
  },
  data() {
    return {
      fields: ['事件类型', '事件描述', '操作目标', '操作参数', '执行结果', '结果明细', '操作时间'],
      filters: ['事件类型', '执行结果', '操作时间'],
    };
  },
};
</script>

