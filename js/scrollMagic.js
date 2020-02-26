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





setInterval(() => {



}, 100);
