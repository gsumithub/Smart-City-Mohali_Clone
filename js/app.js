//booking popup
let popbtn = document.getElementById("popbtn");
let closebtn = document.querySelector(".closebtn");
let popup = document.querySelector(".popup");
popbtn.addEventListener("click", () => {
    popup.style.top = "50%";
});

closebtn.addEventListener("click", () => {
    popup.style.top = "-1000px";
});

// Mobile Nav
let menuicon = document.querySelector(".menuicon");
let nav = document.querySelector(".headerright nav");
menuicon.addEventListener("click", () => {
    nav.classList.toggle("showmenu");
    if (nav.classList.contains("showmenu")){
        menuicon.innerHTML="<i class='fa-solid fa-xmark'></i>";
    }
    else{
        menuicon.innerHTML="<i class='fa fa-bars'></i>";
    }
})

// FAQ Section
let faqs = document.querySelectorAll(".faqmid h3")
faqs.forEach((question,index)=>{
    question.addEventListener("click", ()=>{
        faqs.forEach((query,i) =>{
            if(index != i){
                query.nextElementSibling.classList.remove("showAns")
                query.firstElementChild.innerHTML="+"
            }
        })
        
        if(question.firstElementChild.innerText=="+"){
            question.firstElementChild.innerText="-"
        }
        else{
            question.firstElementChild.innerText="+"
        }
        question.nextElementSibling.classList.toggle("showAns")
    })
})

// gallery light box
let galleryMid = document.querySelector(".gallerymid")
let overLay = document.querySelector(".galleryOverLay")
let lightBox = document.querySelector(".lightBoxMid")
let mainImg =document.querySelector(".lightBoxMid img")
galleryMid.addEventListener("click", (e)=>{
    let currentSRC = e.target.src
    if(currentSRC){
        overLay.classList.add("galleryOverLayShow")
        lightBox.classList.add("lightBoxMidShow")
        mainImg.src=currentSRC
    }
})
let closeLightBoxBtn = document.querySelector(".lightBoxMid span")
let closeLightBox=()=>{
    overLay.classList.remove("galleryOverLayShow")
    lightBox.classList.remove("lightBoxMidShow")
}
closeLightBoxBtn.addEventListener("click", closeLightBox)
overLay.addEventListener("click", closeLightBox)

// site light box
let site = document.querySelector(".site")
site.addEventListener("click", (e)=>{
    let currentSRC = e.target.src
    if(currentSRC){
        overLay.classList.add("galleryOverLayShow")
        lightBox.classList.add("lightBoxMidShow")
        mainImg.src=currentSRC
    }
})
closeLightBoxBtn.addEventListener("click", closeLightBox)
overLay.addEventListener("click", closeLightBox)

//brochure download popup
let downloadBtn = document.getElementById("downloadBtn");
let downloadPopup = document.querySelector(".popUp");
let closeDownloadBtn = document.querySelector(".popUp .closeBtn");
downloadBtn.addEventListener("click", () => {
    downloadPopup.style.top = "50%";
});

closeDownloadBtn.addEventListener("click", () => {
    downloadPopup.style.top = "-1000px";
});

$('#bannerSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#whySlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#amenitiesSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//booking popup
let popbtn = document.getElementById("popbtn");
let closebtn = document.querySelector(".closebtn");
let popup = document.querySelector(".popup");
popbtn.addEventListener("click", () => {
    popup.style.top = "50%";
});

closebtn.addEventListener("click", () => {
    popup.style.top = "-1000px";
});

// Mobile Nav
let menuicon = document.querySelector(".menuicon");
let nav = document.querySelector(".headerright nav");
menuicon.addEventListener("click", () => {
    nav.classList.toggle("showmenu");
    if (nav.classList.contains("showmenu")){
        menuicon.innerHTML="<i class='fa-solid fa-xmark'></i>";
    }
    else{
        menuicon.innerHTML="<i class='fa fa-bars'></i>";
    }
})

// FAQ Section
let faqs = document.querySelectorAll(".faqmid h3")
faqs.forEach((question,index)=>{
    question.addEventListener("click", ()=>{
        faqs.forEach((query,i) =>{
            if(index != i){
                query.nextElementSibling.classList.remove("showAns")
                query.firstElementChild.innerHTML="+"
            }
        })
        
        if(question.firstElementChild.innerText=="+"){
            question.firstElementChild.innerText="-"
        }
        else{
            question.firstElementChild.innerText="+"
        }
        question.nextElementSibling.classList.toggle("showAns")
    })
})

// gallery light box
let galleryMid = document.querySelector(".gallerymid")
let overLay = document.querySelector(".galleryOverLay")
let lightBox = document.querySelector(".lightBoxMid")
let mainImg =document.querySelector(".lightBoxMid img")
galleryMid.addEventListener("click", (e)=>{
    let currentSRC = e.target.src
    if(currentSRC){
        overLay.classList.add("galleryOverLayShow")
        lightBox.classList.add("lightBoxMidShow")
        mainImg.src=currentSRC
    }
})
let closeLightBoxBtn = document.querySelector(".lightBoxMid span")
let closeLightBox=()=>{
    overLay.classList.remove("galleryOverLayShow")
    lightBox.classList.remove("lightBoxMidShow")
}
closeLightBoxBtn.addEventListener("click", closeLightBox)
overLay.addEventListener("click", closeLightBox)

// site light box
let site = document.querySelector(".site")
site.addEventListener("click", (e)=>{
    let currentSRC = e.target.src
    if(currentSRC){
        overLay.classList.add("galleryOverLayShow")
        lightBox.classList.add("lightBoxMidShow")
        mainImg.src=currentSRC
    }
})
closeLightBoxBtn.addEventListener("click", closeLightBox)
overLay.addEventListener("click", closeLightBox)

//brochure download popup
let downloadBtn = document.getElementById("downloadBtn");
let downloadPopup = document.querySelector(".popUp");
let closeDownloadBtn = document.querySelector(".popUp .closeBtn");
downloadBtn.addEventListener("click", () => {
    downloadPopup.style.top = "50%";
});

closeDownloadBtn.addEventListener("click", () => {
    downloadPopup.style.top = "-1000px";
});

