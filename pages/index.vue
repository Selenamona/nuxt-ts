<template>
  <div>
    <button @click="$myInjectedFunction('hah')">Click me !</button>
    <nuxt-link to="{path:'/list',query:{id:1,name:'aaa'}}">下一页</nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  asyncData(context: any) {
    // 1、单独注入到 context 时
    context.$myInjectedFunction('works in asyncData，myInjectedFunction 单独注入到 content')
    // 2、vue 和 context 两者一起注入时，inject 是在 context.app 中注入，並不會存在於 context 中
    // context.app.$myInjectedFunction('works in asyncData，myInjectedFunction 单独注入到 content 和 vue')
  },
  mounted() {
    // 注入到 Vue 中时使用
    this.$myInjectedFunction('works in mounted')
  },
  methods: {
    someMethod() {

    }
  }
})
</script>
