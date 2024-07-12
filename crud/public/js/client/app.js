let navbarDiv = document.querySelector('.navbar')
window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng')
    }else{
        navbarDiv.classList.remove('navbar-cng')
    }   
})

const navbarCollapseDiv = document.getElementById('navbar-collapse')
const navbarShowBtn = document.getElementById('nav-show-btn')
const navbarCloseBtn = document.getElementById('nav-close-btn')

// Show navbar
navbarShowBtn.addEventListener('click',()=>{
   navbarCollapseDiv.classList.add('navbar-collapse-rmw')
})

// Close navbar
navbarCloseBtn.addEventListener('click',()=>{
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw')
})
document.addEventListener('click',(e)=>{
    if(e.target.id != "navbar-collapse" && e.target.id != "nav-show-btn" 
      && e.target.parentElement.id != "nav-show-btn"  
    ){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw')
    }
})


