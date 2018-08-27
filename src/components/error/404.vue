<template>
  <error-page title="404" desc="抱歉，你访问的页面不存在" img-url="static/image2.svg"></error-page>
</template>
<script>
import ErrorPage from './error-page';

export default {
  components: {
    ErrorPage,
  },
};
</script>
