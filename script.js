const bar = document.querySelector("#bar")
const nav = document.querySelector(".navbarul")


if (bar) {
    bar.addEventListener("click",function(e){
        e.preventDefault()
        nav.classList.add("active");
    })

}

const crossNav = document.querySelector(".fa-xmark")
if (crossNav) {
    crossNav.addEventListener("click",function(e){
        e.preventDefault()
        nav.classList.remove("active");
    })

}


const mainimg = document.querySelector(".mainimg")
const smallImg = document.querySelectorAll(".imgSmall")


smallImg.forEach((img)=>{
    img.addEventListener("click",function(){
        mainimg.src = img.src
    })

})






// toastbox

const toastbox = document.querySelector(".toastBox")


let success = '<i class="fa-solid fa-circle-check"></i>Item added to cart'

function toastShow(msg) {
    
    let toast = document.createElement("div")
    toast.classList.add("Toast")
    toast.innerHTML =msg
toastbox.appendChild(toast)


setTimeout(() => {
    toastbox.removeChild(toast)
}, 2000);

}


function remove(){
    const cartRemove = document.querySelector(".cartRemove")
    
        const cross=document.querySelectorAll("cross")
cartRemove.remove(cross)
    

}

