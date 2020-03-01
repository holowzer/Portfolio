const magicWindow = document.querySelector(".showcaseScrollMagic")
const circle = document.querySelector('.circle')
const nameDesignContainer = document.querySelector(".magicTextContainer")

let txtSpace = 5
const colors = ["white", "blue", "#FF5400"]
let i = 0
let x = 0
let typeOfPaint = 1
let renderedName = 1
while (x < 21) {
    let newNamePath = document.createElement("h1")
    newNamePath.innerText = "Arthur Lasnel"
    newNamePath.classList.add("designText")
    nameDesignContainer.appendChild(newNamePath)
    x++

}

const nameDesign = document.querySelectorAll(".designText")

for (element of nameDesign) {
    element.style.top = txtSpace + "px"
    element.style.left = txtSpace + "px"
    if (i > 2) {
        i = 0
    }

    element.style.color = colors[i]
    i++
    txtSpace = txtSpace + 5
}

// -----------tweeeeeeEEEEEENNNNnnnnn-----



let tl = new TimelineMax({
    onUpdate: UpdatePercentage
})

function UpdatePercentage() {

    tl.progress()


}


tl.to(circle, 1, {
    scale: 50,
    ease: Power2.easeOut
})



const controller = new ScrollMagic.Controller()
let nameScene = new ScrollMagic.Scene({
        duration: 2000,
        triggerHook: 0,
        triggerElement: magicWindow
    })
    .setPin(magicWindow)
    .addTo(controller)
    .setTween(tl)

nameScene.on("update", (e) => {
    scroll = parseInt(e.scrollPos / 100)


    if(scroll<20){
        if (typeOfPaint == 1) {
    
            for (i = 0; i < scroll; i++) {
                nameDesign[i].classList.add('opacify')
            }
            if (scroll > 18) {
                typeOfPaint = 0
            }
        } else {
            if (scroll < 2) {
                typeOfPaint = 1
            }
    
            for (i =scroll ; i < nameDesign.length; i++) 
            {
                nameDesign[i].classList.remove('opacify')
            }
    
        }
    }

})


const designShow=document.querySelector('.showcaseLand')
const textBlurry1=document.querySelector('.tltext1')
const textBlurry2=document.querySelector('.tltext2')
const poster1=document.querySelector('#poster1')
const poster2=document.querySelector('#poster2')
const poster3=document.querySelector('#poster3')
const poster4=document.querySelector('#poster4')
const poster5=document.querySelector('#poster5')
let scrolling = window.scrollY
let turnx=0
let turny=0

window.addEventListener('scroll',event=>{
    if(window.scrollY>3650){
        textBlurry1.classList.add('textFinalPhase')
    }
    if(window.scrollY>4750){
        textBlurry2.classList.add('textFinalPhase')
    }


})
window.addEventListener('scroll',event=>{
    if( window.scrollY>6000 || window.scrollY<2000) {
        textBlurry2.classList.remove('textFinalPhase')
        textBlurry1.classList.remove('textFinalPhase')
    
    }
})

window.addEventListener('scroll',event=>{
    if( window.scrollY>2900 && window.scrollY<5600) {
        turnx+=window.scrollY/window.scrollY-0.77
        turny+=window.scrollY/window.scrollY-0.8
        poster1.style.transform="rotateX("+turnx*-1+"deg) rotateY("+turny*1+"deg)"
        poster2.style.transform="rotateX("+turnx+"deg) rotateY("+turny*1.02+"deg)"
        poster3.style.transform="rotateX("+turnx*-1.05+"deg) rotateY("+turny*1.89+"deg)"
        poster4.style.transform="rotateX("+turnx*-0.87+"deg) rotateY("+turny*1.23+"deg)"
        poster5.style.transform="rotateX("+turnx*0.67+"deg) rotateY("+turny*0.13+"deg)"
    }
    else{
        turnx=0
        turny=0
        poster1.style.transform="rotateX("+turnx+"deg) rotateY("+turny+"deg)"

    }
})

