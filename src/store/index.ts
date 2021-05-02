import { createStore } from 'vuex'
import { storeState } from '@/type'
import { mutations } from './mutations'
export default createStore<storeState>({
  state() {
    return {
      token: '',
    }
  },
  mutations,
  actions: {},
  modules: {},
})
