//导入自定义的 axios 对象 myaxios，然后发送 ajax 请求。
//import myaxios from '../utils/myaxios' //用下面的更好，@能直接 定位到 src 目录

 //@就表示 src 目录的

 /*  myaxios.get('data.json')
    .then(resp => {
        console.log(resp.data)
    })
    .catch(err => { 
        console.log("请求失败") 
    }) */
/* 
myaxios({
    method:'get',
    url:'data.json'
}).then(resp=>{
    console.log(resp.data)
}) */
import myaxios from '@/utils/myaxios'
// const BASE_URL='/dev-apis'改为如下： 
const BASE_URL=[process.env.VUE_APP_BASE_API]
export default {
    getList(){
        const promise1=myaxios({
            method:'get',
            url:'data.json'
        })
        return promise1
    }
}
 
