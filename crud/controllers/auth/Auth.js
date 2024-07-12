const GetAuthPage = (req, res)=>{
    res.render('client/auth',{title:"Đăng nhập tài khoản"})
}

const GetRegister = (req,res)=>{
    res.render('client/register',{title:"Đăng ký tài khoản"})
}
module.exports={
    GetAuthPage,
    GetRegister
}