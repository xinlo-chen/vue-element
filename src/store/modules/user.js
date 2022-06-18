import Vuex from "vuex";

const user = {
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    user: {
      name: ''
    }
  },

  getters: {
    getUser(state) {
      return state.user
    }
  },


  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },

  actions: {
    asyncUpdateUser(context, user) {
      context.commit("updateUser", user)
    }
  }
}

export default user;
