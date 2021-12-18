export default {
    setUser(state, { user }) {
      state.user = user.data;
      state.token = user.token;
  },logout(state) {
    state.user = null;
    state.token = null;
    localStorage.removeItem("token");}
};