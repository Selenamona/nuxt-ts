import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  // 使用 context
  console.log("🚀  context", context)
}

export default myMiddleware
