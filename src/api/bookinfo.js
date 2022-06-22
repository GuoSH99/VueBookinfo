import myaxios from '@/utils/myaxios'
export default {
    getBookInofList() {
        return myaxios({
            url: 'bookinfo/list',
            method: 'get'
        })
    },
    //分页查询方法 
    search(page, size, searchWhere) {
        return myaxios({
            url: `/bookinfo/list/search`,
            method: 'post',
            data: searchWhere
        })
    },
    //添加图书信息 
    add(bookform) {
        return myaxios({
            url: '/addbookinfo',
            method: 'post',
            data: bookform
        })
    },
//得到每种图书类型的数量
getTypeSum(){
    return myaxios({
    url:'/book/getTypeSum', 
    method:'get', 
})
    },

    //根据 id 查询图书信息 
    getBookById(id) {
        return myaxios({
            url: `/bookinfo`,
            method: 'get'
        })
    },
    //修改图书信息
    updateBook(bookObj) {
        return myaxios({
            url: `/bookinfo`,
            method: 'put',
            data: bookObj
        })
    },
    //删除图书信息
    deleteBookById(id){ return myaxios({ 
        url:`/bookinfo`, method:'delete', }) 
}


}
