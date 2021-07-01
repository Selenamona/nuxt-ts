<!-- 测试：传两个参数 -->
<template>
  <div class="detail">
    <div>测试传参</div>
    <nuxt-link to="/list">标签返回</nuxt-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: 'Detail',

  asyncData({ params }) {
    // 接收参数1
    console.log("测试传参", params);

  },
  mounted() {
    // 接收参数2
    console.log(this.$route.params);
  }
});
</script>
<style lang='scss' scoped>
</style>
