<!-- 列表 -->
<template>
  <div class="list">
    <div>列表页</div>
    <nuxt-link to="/list/detail">标签跳转详情</nuxt-link>
    <button @click="nextPage">事件跳转详情</button>
    <!-- 子组件 -->
    <InputNumber />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import InputNumber from "@/components/inputNumber.vue"
export default defineComponent({
  name: 'List',
  components: { InputNumber },
  async asyncData({ $axios }) {
    // asyncData 中接口请求
    const ip = await $axios.$get('http://icanhazip.com')
    console.log("asyncData 请求", ip);
    return { ip }
  },
  // head() {
  //   return {
  //     title: this.title,
  //     meta: [
  //       { hid: 'description', name: 'news', content: 'This is news page' }
  //     ]
  //   }
  // },
  created() {
    this.fetchSomething()
    this.postRequest()
  },
  methods: {
    async fetchSomething() {
      // methods 中接口请求
      const ip = await this.$axios.$get('http://icanhazip.com')
      console.log("methods 请求", ip);
      this.ip = ip
    },
    async postRequest() {
      const result = await this.$axios.$post('/phenix-platform/api/thirdPlatFormFace/getTranceId', {})
      console.log(result);

    },
    nextPage() {
      // this.$router.push({ path: '/contact/22' });
      this.$router.push({ path: '/twoQuery/a/2' });
    }
  }
});
</script>
<style lang='scss' scoped>
</style>
