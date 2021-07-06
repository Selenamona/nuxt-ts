# nuxtPC

## documentation

[nuxt/axios](https://axios.nuxtjs.org/)
[nuxtjs](https://zh.nuxtjs.org/)
[Nuxt TypeScript](https://typescript.nuxtjs.org/)

***插件***
[vuex-persist](https://www.npmjs.com/package/vuex-persist)

## custom

### 配置对 stylus 的支持

***安装***

安装 style-resources：`npm install --save-dev @nuxtjs/style-resources`
安装 stylus：`npm install --save-dev stylus-loader stylus`

> 报错：`this.getOptions is not a function`，原因 stylus-loader 版本高
> 解决：1. `npm uninstall stylus-loader`; 2. `npm install stylus-loader@3.0.2 --save-dev`

***设置公共变量***

```JavaScript
// 修改 nuxt.config.js
modules: ['@nuxtjs/style-resources'],
styleResources: { stylus: '~/assets/css/common.styl' }
```


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


## 报错及解决

1、页面引入组件报错：`Cannot find module '~/XXX.vue' or its corresponding type declarations.`

上述问题的产生，一般是由于 Visual Studio Code 中安装了 Vetur 插件，它要求：

1，项目在工作区根目录（就是把项目文件夹拖进 vscode 后的效果）
2，项目排在第一位（不在第一位可以鼠标拖动项目移到第一位）

解决方案：直接把项目移至工作区的第一位


2、报错提示`Binding element 'route' implicitly has an 'any' type.`

解决 tsconfig.json compilerOptions 新增 `"noImplicitAny": false`
