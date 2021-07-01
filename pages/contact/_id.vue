<!-- 帮助中心 -->
<template>
  <div class="detail">
    <div>帮助中心222</div>
    <nuxt-link to="/list">标签返回</nuxt-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: 'Detail',
  mounted() {
    console.log(this.$route);
  }
});
</script>
<style lang='scss' scoped>
</style>
