<!-- 列表 -->
<template>
  <div class="list">
    <div>列表页</div>
    <nuxt-link to="/list/detail">标签跳转详情</nuxt-link>
    <button @click="nextPage">事件跳转详情</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'List',
  created() {
    console.log(this);
  },
  methods: {
    nextPage() {
      // this.$router.push({ path: '/contact/22' });
      this.$router.push({ path: '/twoQuery/a/2' });
      // this.$router.push({ name: 'contact-help', query: { help: 1 } });
      // this.$router.push({ name: 'contact-help', query: { help: 1 } });
    }
  }
});
</script>
<style lang='scss' scoped>
</style>
