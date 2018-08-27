<template>
  <error-page title="403" desc="抱歉，你无权访问该页面" img-url="static/image1.svg"></error-page>
</template>
<script>
import ErrorPage from './error-page';

export default {
  components: {
    ErrorPage,
  },
};
</script>
