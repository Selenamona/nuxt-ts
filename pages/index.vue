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
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
    };
  },
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
