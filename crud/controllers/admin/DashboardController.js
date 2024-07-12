const GetDashBoard = (req,res)=>{
    res.render('admin/dashboard',{title:"Admin Panel"})
}

module.exports = {
    GetDashBoard
}