import { defineStore } from 'pinia'
export const user = defineStore('user', {
  persist: {
    enabled: true, //开启数据持久化
    strategies: [
      {
        key: 'userState', //给一个要保存的名称
        storage: localStorage //sessionStorage / localStorage 存储方式
      }
    ]
  },
  state: () => {
    return {
      blogAvatar: '',
      userInfo: {}, // 当前登陆人信息
      token: '',
      infoFlag: false,
      tokenFlag: false
    }
  },
  getters: {
    // 获取当前登录用户头像
    getBlogAvatar() {
      return this.blogAvatar
    },
    // 获取当前登录人信息
    getUserInfo() {
      return this.infoFlag ? JSON.parse(_decrypt(this.userInfo)) : ''
    },
    // 获取token
    getToken() {
      return this.tokenFlag ? _decrypt(this.token) : ''
    }
  },
  actions: {
    // 设置头像
    setBlogAvatar(avatar) {
      this.blogAvatar = avatar
    },
    // 设置用户信息
    setUserInfo(userInfo) {
      this.infoFlag = true
      this.userInfo = _encrypt(userInfo)
    },
    // 设置token
    setToken(token) {
      this.tokenFlag = true
      this.token = _encrypt(token)
    },
    // 清除用户信息
    clearUserInfo() {
      this.userInfo = {}
      this.token = ''
      this.tokenFlag = false
      this.infoFlag = false
    }
  }
})
