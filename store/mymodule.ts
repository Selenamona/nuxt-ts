import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { User } from '~/types'

@Module({
  name: 'mymodule',
  stateFactory: true,
  // namespaced: true,
})
export default class MyModule extends VuexModule {
  wheels: number = 0
  users: User[] = []

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  setUsers(users: User[]) {
    this.users = users
  }

  get axles() {
    return this.wheels / 2
  }

  @Action
  async getUsers() {
    const users = await $axios.$get('/users')
    this.setUsers(users)
    // this.context.commit('addWheel', wheels)
  }

}

