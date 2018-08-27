
export default {
  async login({ username /* , password */}) {
    console.log(this.$axios);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ errcode: 0, message: 'success', username }), 500);
    });
  },

  async fetch(/* { username } */) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ errcode: 0, message: 'success', userinfo: { name: '张三丰', status: '0' } }), 500);
    });
  },
};
