const body=document.querySelector('body')
const projectSlides=document.querySelectorAll('.projectSlides')
const blueboy=document.querySelector(".blueboy")
const startAnimation=document.querySelector("nav")

startAnimation.addEventListener('click',()=>{
    blueboy.classList.toggle("backforth")
    console.log("okay")
})




for(let i=0;i<projectSlides.length;i++){
projectSlides[i].addEventListener('mouseover',()=>{
    projectSlides[i].querySelector('.slideProjectEffect').classList.add('slideProjectEffectTransform')
})
projectSlides[i].addEventListener('mouseout',()=>{
    projectSlides[i].querySelector('.slideProjectEffect').classList.remove('slideProjectEffectTransform')
})

}

window.addEventListener('load',()=>{
    body.style.opacity='1'
setTimeout(() => {
    window.scrollTo(0, 0);
    const nameDesign=document.querySelectorAll(".designText")
    for(Element of nameDesign){
        Element.style.opacity=0
    }


}, 100);

})




let matrix = new Scene({
    ".box1": {
        0: {
            opacity: 1,
            transform: "translateY(0)",
        },
        0.3: {
            opacity: 0,


        },
        0.4: {
            opacity: 0,
            transform: "translateY(-300px)",
            position: "absolute",

        },


    },
    ".box2": {
        0.3: {
            opacity: 0,
            display: "flex",
        },
        0.6: {
            opacity: 1,
        },

    },
    "#matrixFx": {
        0.4: {
            transform: "translateY(0)",
            opacity: 1,
        },
        1.4: {
            opacity: 1,
        },
        1.43: {
            opacity: 0,
        },
        1.48: {
            opacity: 0,
        },

        1.5: {
            opacity: 1,
        },
        1.6: {
            opacity: 0,
        },
        1.69: {
            opacity: 0,
        },

        1.7: {
            opacity: 1,
        },

        1.8: {
            transform: "translateY(-1400px)",
            opacity: 1,
            height: "100vh",
        },
        2.48: {
            transform: "translateY(-1400px)",
            opacity: 1,
            height: "100vh",
        },

        2.68: {
            transform: "translateY(-1400px)",
            opacity: 0,
            height: "100vh",
        },

        3: {
            transform: "translateY(-1400px)",
            opacity: 0,
            height: 0,
        },

    },
    ".box3": {
        0: {
            opacity: 0,
            height: 0,
            overflow : "hidden"
        },
        2.9: {
            opacity: 0,
            height: 0,
        },


        3: {
            opacity: 0,
            height: "auto",
        },
        3.5: {
            opacity: 1,
            height: "auto",

        },

    },
    
"nav":{
    0:{
        visibility: "hidden",
        opacity:0,

    },
    4:{
        visibility: "visible",
        opacity:0,

    },
    5:{
        visibility: "visible",
        opacity:1,

    }

    },
".showcaseScrollMagic":{
    3.5:{
        visibility: "visible",
        opacity:0,

    },
   4:{
        visibility: "visible",
        opacity:1,

    },

    },
"body":{
    3.5:{
overflow:"hidden",
    },
   4:{
overflow:"auto"
    },

    },
}, {
    selector: true,
});

document.querySelector('.button').addEventListener('click', function () {
    matrix.playCSS()
})



const movingHeart = new Scene({
    "#heart1": {
        0: {
       transform:"rotateY(555deg) scale(1) translateY(0) translateX(90px)",
       
        },
        1: {
            transform:"rotateY(515deg) scale(1.03) translateY(-25px) translateX(75px)",
   
        },
 
        2: {
            transform:"rotateY(555deg) scale(1) translateY(0) translateX(90px)",

            },

        },


    },
{
    selector:true,
    iterationCount: 500,
}).play();

const movingHeart2 = new Scene({
    "#heart2": {
        0: {
       transform:" scale(1) translateY(0) translateX(85px)",
       
        },
        1: {
            transform:"scale(0.8) translateY(-28px) translateX(89px)",
   
        },
 
        2.7: {
            transform:" scale(1) translateY(0) translateX(85px)",

            },

        },


    },
{
    selector:true,
    iterationCount: 500,
}).play();


const shade = new Scene({
    "#spoti": {
        0: {
            "box-shadow":"10px 10px 30px 10px #ff550076",
        },
        1.2: {
            "box-shadow":"15px 4px 125px 23px #dd670d80",
        },
        2.1: {
            "box-shadow":"10px 10px 30px 10px #ff550076",
        },



    },


},
{
    selector:true,
    iterationCount: "infinite",
}).playCSS();

shade.play();




var rellax = new Rellax('.rellax');

