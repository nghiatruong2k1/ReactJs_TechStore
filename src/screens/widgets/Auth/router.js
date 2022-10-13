import FormLogin from "./screens/FormLogin";
import FormRegister from "./screens/FormRegister";
import FormForget from "./screens/FormForget";
export const routerActions = {
    login:{
        title:' Đăng nhập ',
        content:FormLogin
    },register:{
        title:' Đăng ký ',
        content:FormRegister
    },forget:{
        title:' Quên mật khẩu ',
        content:FormForget
    }
}