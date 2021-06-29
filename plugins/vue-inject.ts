// 1、注入到 vue 实例
// import Vue from 'vue'
// declare module 'vue/types/vue' {
//   interface Vue {
//     $myInjectedFunction(message: string): void
//   }
// }
// Vue.prototype.$myInjectedFunction = (message: string) => console.log(message)

// 2、单独注入到 context
// import { Plugin } from '@nuxt/types'
// declare module '@nuxt/types' {
//   interface Context {
//     $myInjectedFunction(message: string): void
//   }
// }
// const myPlugin: Plugin = (context) => {
//   context.$myInjectedFunction = (message: string) => console.log(message)
// }
// export default myPlugin

// 3、两者一起注入
import { Plugin } from '@nuxt/types'
declare module 'vue/types/vue' {
  interface Vue {
    $myInjectedFunction(message: string): void
  }
}
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $myInjectedFunction(message: string): void
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $myInjectedFunction(message: string): void
  }
}
const myPlugin: Plugin = (context, inject) => {
  inject('myInjectedFunction', (message: string) => console.log(message))
}
export default myPlugin
