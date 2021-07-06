<template>
  <div class="nuxt-home">
    <button @click="$myInjectedFunction('hah')">Click me !</button>
    <nuxt-link :to="{ path: '/list', query: { id: 1, name: 'aaa' } }">下一页</nuxt-link>
    <a-carousel :after-change="onChange">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </a-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { exampleStore, vehicleStore } from '~/store'

export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    // const result = ref()
    // onServerPrefetch(async () => {
    //   result.value = await callApi()
    // })

    onMounted(() => {

      // 模块二
      console.log(vehicleStore, vehicleStore.company('c1'))

      // 模块一
      console.log(exampleStore, exampleStore.wheels);
      exampleStore.incrWheels(3)
      console.log(exampleStore.wheels);
      console.log(exampleStore.axles, "end");

    })
    return {
      onChange,
    };
  },
  /**
   * asyncData：
   * 1、不能访问 this
   * 2、只能用于路由组件(或 page 组件)
   * 3、需要通过返回对象(或 promise)将数据暴露到渲染环境
   */
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


<style lang="stylus">
// @import "~assets/css/common.styl"
.nuxt-home {
  wh()
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
