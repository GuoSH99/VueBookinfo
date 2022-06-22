//1.导入 VueRouter 对象 
import router from './router/index.js'
import { getUserInfo } from './api/login'
//2.利用 VueRouter 对象 router 的 beforeEach 方法进行校验
//前面登录逻辑是：提交用户名、密码到后端校验，校验成功获取 token，通过 token 到后端获取用户信息
router.beforeEach((to, from, next) => {
    //1.获取 token 
    const token = localStorage.getItem("xdz-manager-token")
    // 1.1 如果没有获取到 
    if (!token) {
        // 1.1.1 要访问非登录页面，则不让访问，让其回 到也登陆页面 
        if (to.path !== '/login') {
            next({ path: '/login' })
        } else {
            //1.1.2 访问的就是登录页面/login
            next()
            //不需要传入参数，默认就是默认路由 
        }
    }
    else {
        //1.2 获取到 token 
        // 1.2.1 请求登录路由/login，那就让其进入目标路由/login 
        if (to.path === '/login') {
            next()
        }
        else {
            // 1.2.1 请求的是非登录页面，查看本地是否存有用户信息 
            const userinfo = localStorage.getItem("xdz-manager- user")
            if (userinfo) {
                //1.2.1.1 本地获取到用户信息，则直接去目标路由 
                next()
            }
            else {
                //1.2.1.2 如果本地没有就通过 token 去获取用户信 息 
                getUserInfo(token).then(response => {
                    //使用 getUserInfo 方法上面需要先导入 login.js 
                    const respUser = response.data
                    if (respUser.flag) { //如果获取到用户信息，则保存到本地，并让其进入
                        localStorage.setItem("xdz-manager-user", JSON.stringify(respUser.data
                        ))
                        next()
                    }
                    else {
                        //如果没有获取到用户信息（比如 token 失效）， 就回到登录页面
                        next({ path: '/login' })
                    }
                })
            }
        }
    }
})