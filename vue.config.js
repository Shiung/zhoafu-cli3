module.exports = {
  devServer: {
    proxy: {
      '/apiPathProxy':{
        target : 'http://zhoafu-api.neplus.com.tw/api/v1', // 測試機
        changeOrigin: true,
        pathRewrite: {
          '^/apiPathProxy': ''
        }
      }
    }
  }
}
