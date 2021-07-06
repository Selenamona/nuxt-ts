// Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layout).

import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  // 使用 context
  console.log("🚀 中间件 context", context)
}

export default myMiddleware
