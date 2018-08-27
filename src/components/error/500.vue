<template>
  <error-page title="500" desc="抱歉，服务器出错了" img-url="static/image3.svg"></error-page>
</template>
<script>
import ErrorPage from './error-page';

export default {
  components: {
    ErrorPage,
  },
};
</script>
