<!-- 列表详情 -->
<template>
  <div class="detail">
    <div>详情页</div>
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
