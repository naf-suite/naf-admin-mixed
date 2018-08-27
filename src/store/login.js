// import auth from '@/api/auth';
import * as types from '@/constants/mutation-types';
// initial state
// shape: [{ id, quantity }]
export const state = () => ({
  loading: false,
  isAuthenticated: true,
  userinfo: null,
});

// getters
export const getters = {
  userStatus: state => (state.userinfo || {}).status,
};

// actions
export const actions = {
  async login({ commit, dispatch/* , state */ }, { username, password }) {
    commit(types.SHOW_LOADING);
    try {
      // console.log(this.$axios);
      //let res = await auth.login({ username, password });
      let res = await this.$axios.$post('/smart/api/login', {username, password})
      console.log(res);
      if (res.errcode && res.errcode !== 0) {
        commit(types.LOGIN_FAILURE);
      } else {
        await dispatch('fetch', { username });
        commit(types.LOGIN_SUCCESS);
      }
      return res;
    } catch (err) {
      console.error(err);
      commit(types.LOGIN_FAILURE);
      return { errcode: -1, errmsg: 'error' };
    } finally {
      commit(types.HIDE_LOADING);
    }
  },
  async fetch({ commit/* , state */ }, { username }) {
    // const res = await auth.fetch({ username });
    const res = await this.$axios.$get('/smart/api/userinfo', { username })
    const { userinfo } = res;
    commit(types.USER_INFO, userinfo);
    return res;
  },
  async logout({ commit }) {
    // const res = await auth.fetch({ username });
    const res = await this.$axios.$post('/smart/api/logout')
    if (res.errcode && res.errcode === 0) {
      commit(types.LOGOUT_SUCCESS);
    }
    return res;
  },
};

// mutations
export const mutations = {
  [types.SHOW_LOADING](state) {
    state.loading = true;
  },
  [types.HIDE_LOADING](state) {
    state.loading = false;
  },

  [types.LOGIN_SUCCESS](state) {
    state.isAuthenticated = true;
  },
  [types.LOGIN_FAILURE](state) {
    state.isAuthenticated = false;
  },
  [types.LOGOUT_SUCCESS](state) {
    state.isAuthenticated = false;
    state.userinfo = null;
  },

  [types.USER_INFO](state, payload) {
    state.userinfo = payload;
  },
};
