import * as types from '@/constants/mutation-types';

// initial state
// shape: [{ id, quantity }]
export const state = () => ({
  items: [],
  current: null,
});

// actions
export const actions = {
  async load({ commit }) {
    try {
      let res = await this.$axios.$get('/smart/api/dept/list')
      console.log(res);
      if (res.errcode === 0) {
        commit(types.DEPT_LOADED, res.data);
      }
      return res;
    } catch (err) {
      console.error(err);
      return { errcode: -1, errmsg: err.message || '处理失败' };
    }
  },
};

// mutations
export const mutations = {
  [types.DEPT_LOADED](state, payload) {
    state.items = payload;
  },
  [types.DEPT_SELECTED](state, payload) {
    state.current = payload;
  },
};
