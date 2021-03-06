import myaxios from '@/utils/myaxios'
export function login(username, password) {
    return myaxios({
        url: '/user/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function getUserInfo(token) {
    return myaxios({
        url: `/user/info`,
        method: 'get'
    })

}
export function logout(token) {
    return myaxios({
        url: `/user/logout`,
        method: 'post',
        data: {
            token
        }
    })
}
