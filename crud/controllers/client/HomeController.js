const GetHomePage = (req, res)=>{
    res.render('client/home',{title:"Travel Web Applications"})
}

module.exports={
    GetHomePage
}