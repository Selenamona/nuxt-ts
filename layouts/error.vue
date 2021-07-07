<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      <div>Page not found</div>
      <button @click="gogogo">跳转</button>
    </h1>
    <h1 v-else>
      <div>An error occurred</div>
      <button @click="gogogo">跳转</button>
    </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api"
export default defineComponent({
  layout: 'blog',
  props: {
    error: { type: Object, default: () => { } }
  },// you can set a custom layout for the error page
  setup() {
    const gogogo = () => {
      // 跳转小程序，参考：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html
      location.href = 'weixin://dl/business/?t=vBXEEGrs9Sd'
    }
    return {
      gogogo
    }
  }
})
</script>
