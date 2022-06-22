import myaxios from '@/utils/myaxios'
export default{ 
    search(page,size,searchWhere){
        return myaxios({
            url:`/press/list/search`,
            method:'post',
            data:searchWhere
        })
    },   
}