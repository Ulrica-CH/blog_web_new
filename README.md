# 参考

功能参考 ： [http://118.178.178.85/#/](http://118.178.178.85/#/)

样式参考 ： [https://blog.eurkon.com/](https://blog.eurkon.com/)

# 配置

- node 16 vue3.3(新特性可使用) vite
    - npm i pnpm -g
    - pnpm i
    - pnpm dev
- Element Plus按需导入，icons导入（register-icons.ts）
- pxToVw(字体问题后续可使用css变量解决)
- 手写css不使用Tailwindcss

# 规范

- 提交 
    - git add .
    - npm run cz
    - git push
- 组件
    - 库组件 三方库组件 连接符 router-view    el-row
    - 公用组件 大驼峰 CommonHeader
    - 页面组件 小驼峰+Page homeAsidePage
    - css样式连接符  class="home-aside-page"
- 混入
    - 重复样式全局mixin.scss
    - 样式变量 var.scss
- hooks
    - 自定义公用hooks
    - 页面自己逻辑hooks