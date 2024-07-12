const GetBlogPage = (req, res)=>{
    res.render('client/blog',{title:"Travel Blog"})
}

module.exports={
    GetBlogPage
}