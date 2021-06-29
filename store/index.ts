import Vuex from 'vuex'
import MyModule from '~/store/mymodule'

const store = new Vuex.Store({
  modules: {
    myMod: MyModule
  }
})
