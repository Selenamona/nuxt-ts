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
