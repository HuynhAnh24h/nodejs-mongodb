// Show Box Img
const allGalleryItems = document.querySelectorAll('.gallery-item')
const imgModalDiv = document.getElementById('img-modal-box')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalNextBtn = document.getElementById('next-btn')
const modalPrevBtn = document.getElementById('prev-btn')
let imgIndex = 0;

allGalleryItems.forEach((item)=>{
    item.addEventListener('click',()=>{
        imgModalDiv.style.display = "block"
        let imgSrc = item.querySelector('img').src
        imgIndex = parseInt(imgSrc.split("-")[1].substring(0,1))
        showImgContent(imgIndex)
    })
})

const showImgContent = (index)=>{
    imgModalDiv.querySelector('#img-modal img').src=`imgs/client/gallery-${index}.jpg`
}

modalCloseBtn.addEventListener('click',()=>{
    imgModalDiv.style.display = "none"
})

modalNextBtn.addEventListener('click',()=>{
    imgIndex++;
    if(imgIndex > allGalleryItems.length){
        imgIndex=1
    }
    showImgContent(imgIndex)
})

modalPrevBtn.addEventListener('click',()=>{
    imgIndex--;
    if(imgIndex <= 0 ){
        imgIndex = allGalleryItems.length
    }
    showImgContent(imgIndex)
})