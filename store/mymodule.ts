import { Module, VuexModule, Mutation, Action, MutationAction } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { User, Post } from '~/types'

@Module({
  name: 'mymodule',
  stateFactory: true,
  namespaced: true, // 解决 unknown mutation type: XXX/XXX 报错
})
export default class MyModule extends VuexModule {
  wheels: number = 0
  users: User[] = []
  posts: Post[] = []


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

  // action-mutation-state 一条龙
  @MutationAction
  async updatePosts() {
    const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { posts }
  }
}

