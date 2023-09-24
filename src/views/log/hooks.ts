export function useLogData() {
  const activities = [
    {
      content: '文章详情页基本开发，接口对接；Main区域增加加载loading',
      timestamp: '2023-09-22'
    },
    {
      content: 'axios封装，接口调通，文章卡片样式，个人栏信息；不足：css书写混乱，js 逻辑还可以',
      timestamp: '2023-09-22'
    },
    {
      content: 'init 重构项目，首页 Header，home 部分内容',
      timestamp: '2023-09-20'
    },
    {
      content: '全局Scss，黑色主题Mixin；完善Mine页面，Log页面',
      timestamp: '2023-09-19'
    },
    {
      content: 'Github Actions 自动化部署，首页样式调整',
      timestamp: '2023-09-18'
    },
    {
      content: 'init 初始化博客',
      timestamp: '2023-09-16'
    }
  ]

  return [activities]
}
