const GetHomePage = (req, res)=>{
    res.render('client/home',{title:"Express Website"})
}

module.exports={
    GetHomePage
}