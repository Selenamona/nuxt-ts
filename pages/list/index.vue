<!-- 列表 -->
<template>
  <div class="list">
    <div>列表页</div>
    <nuxt-link to="/list/detail">查看</nuxt-link>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'List',
  components: {},
  mounted() {
    console.log(this.$route.query);
  },
};
</script>
<style lang='scss' scoped>
</style>
