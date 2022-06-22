module.exports = {
  lintOnSave: false,

  devServer: {
    //开发环境的配置，当然生产环境就会失败，后续再配 置 
    port: 8888,
    //可以输入 npm run serve 进行测试看下
    open: true,
    //启动项目会自动打开浏览器运行 
    https: false,
    host: "localhost",
    // 主机名，也可以 127.0.0.1 或 做真机测试时 候 0.0.0.0 
     proxy:{ 
      //设置/dev-apis 去代理访问 
      //'/dev-apis':{ 
        [process.env.VUE_APP_BASE_API]:{
       // target:' http://10.100.43.148:8080/', 
        target:process.env.VUE_APP_SERVICE_URL,
        changeOrigin:true,
        //开启代理服务，就去进行请求转发 
        pathRewrite:{ 
         // '^/dev-apis':''  
         ['^'+process.env.VUE_APP_BASE_API]:''          
        }
      } 
    }  
  },
    lintOnSave: false,
    //关闭格式检查。 
    productionSourceMap: false,
    // 打包时, 不生成 .map 文件, 加快 打包构建 
  };