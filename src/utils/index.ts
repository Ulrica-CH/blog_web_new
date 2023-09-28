export function isMobile() {
  // 手机端
  let reg =
    /(phone|pad|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  return reg.test(navigator.userAgent)
}
