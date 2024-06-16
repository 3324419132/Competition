import frontInstance from '/src/http/index'
// 引入uuid库
import { v4 as uuidv4 } from 'uuid';

// 生成一个UUID
const myUUID = uuidv4();

    
// 登录
export const login= (data) => {
    console.log(data)
    const { account , password }=data
    console.log(account,password)
    return frontInstance({
        url:'/login', 
        method:'get',
        data:{
            account,
            password,
            myUUID,
            code:'123456'
        }
    }) 
}

// 退出登录
export const loginout= (token) => {
    return frontInstance({
        url:'/exit', 
        method:'post',
        headers:{
            token
        },
        data:{
        }
    }) 
}
