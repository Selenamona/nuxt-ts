<!-- 默认模板 -->
<template>
  <div class="default">
    <div>My blog navigation bar here</div>
    <Nuxt />
    <div>My blog end</div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'Default',
  layout: 'blog',
  middleware: ['auth', 'stats'], // 中间件-用于指定的布局or页面
  // OR
  // layout (context) {
  //   return 'blog'
  // }
  setup() {
    return {

    };
  }
};
</script>
<style lang='scss' scoped>
</style>
