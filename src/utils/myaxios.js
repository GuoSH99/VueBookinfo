import axios from "axios"
import { Loading, Message } from 'element-ui';
const myaxios = axios.create({
    //baseURL:'/',
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 50000,
})
const loading = {
    loadingInstance: null,
    open: function () {
        if (this.loadingInstance === null) {
            this.loadingInstance = Loading.service({
                target: '.main',
                text: '数据正在加载中',
                background: 'rgba(0,0,0,0.5)'

            })
        }
    },
    close: function () {
        if (this.loadingInstance != null) {
            this.loadingInstance.close()
        }
        this.loadingInstance = null
    }
}

//请求拦截器 
myaxios.interceptors.request.use(function (config) {
    loading.open();
    return config;
}, function (error) {
    loading.close();
    return Promise.reject(error);

});
//响应拦截器 
myaxios.interceptors.response.use(function (response) {
    loading.close()
    const resp=response.data
    if(resp.code!=200)
    {
    Message({
    message:resp.message || '系统异常',
    type:'warning', duration:5000, showClose:true
    })
    }
    return response;
}, function (error) {
    loading.close()
    Message({
        message:error.message, type:'error', duration:5000
        })
    return Promise.reject(error);
});
export default myaxios