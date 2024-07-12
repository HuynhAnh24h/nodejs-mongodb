// Strop transition and animations during window resize
let resizetimber;
window.addEventListener('resize',()=>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizetimber)
    resizetimber = setTimeout(()=>{
        document.body.classList.remove('resize-animation-stopper')
    },400)
})

let video = document.querySelector('.video-wrapper video')
document.getElementById("play-btn").addEventListener('click',()=>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
})