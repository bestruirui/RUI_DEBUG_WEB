// store.ts
import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedRobot: null
  },
  mutations: {
    setSelectedRobot(state, robot) {
      state.selectedRobot = robot
    }
  },
  actions: {
    selectRobot({ commit }, robot) {
      commit('setSelectedRobot', robot)
    }
  }
})
