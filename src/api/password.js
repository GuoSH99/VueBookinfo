import myaxios from '@/utils/myaxios'
export default {
    //旧密码检验
    checkPwd(userId, oldPassword) {
        return myaxios({
            url: '/user/pwd',
            method: 'post',
            data: {
                userId,
                oldPassword
            }
        })
    },
    //更改密码
    updatePwd(userId, newPassword) { 
        return myaxios({ 
            url: '/user/pwd', 
            method: 'put', 
            data: { 
                userId, 
                newPassword 
            } 
        }) 
    }
}