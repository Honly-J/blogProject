 const login = {
  state: {
    loginInfo: {}
  },
  mutations: {
    SET_LOGIN_INFO(state: { loginInfo: LoginInfo }, data: LoginInfo) {
      state.loginInfo = data
    }
  },
  actions: {}
}

export default login
