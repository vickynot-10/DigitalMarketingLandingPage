/* HEADER NAVIGATION BG CHANGE SECTION */



const header1 = document.querySelector('.header-div-1');
const header = document.querySelector(".header-div-2");

const navOberser = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            header.classList.remove("sticky-header");
        }
        else{
            header.classList.add("sticky-header");
        }
    })
} ,{threshold : 0} )
navOberser.observe(header1)


/* ROCKET ANIMATIONS IN HOME BANNER*/

let rocketEl1 = document.querySelector('.rocket-1-g-el');
let rocketEl2 = document.querySelector('.rocket-2-g-el');
let rocketEl3 = document.querySelector('.rocket-3-g-el');
let rocketEl4 = document.querySelector('.rocket-4-g-el');
let rocketEl5 = document.querySelector('.rocket-5-g-el');
let rocketEl6 = document.querySelector('.rocket-6-g-el');

function delayAnimation(svg) {
    svg.style.animation = 'rocketDown 2s linear';
    setTimeout(() => {
        svg.style.animation = ''; 
    }, 3000);
}

function delayAnimationFasterSvg(svg , animationName , time , timeOut ) {
    svg.style.animation = `${animationName} ${time} linear infinite` ;
    setTimeout(() => {
        svg.style.animation = ''; 
    }, timeOut);
}

setInterval(() => {
    delayAnimation(rocketEl1);
}, 4000);

setInterval(()=>{
    delayAnimationFasterSvg(rocketEl2 , 'rocketDown2' , '1.2s' , 1200 );
},3000)

setInterval(()=>{
    delayAnimationFasterSvg(rocketEl3 , 'rocketDown3' , '1.2s' , 1200 );
    delayAnimationFasterSvg(rocketEl4 , 'rocketDown4' , '1.2s' , 1200 );
},2500)
setInterval(()=>{
    delayAnimationFasterSvg(rocketEl5 , 'rocketDown5' , '1s' , 1200 );
},1500)

setInterval(()=>{
    delayAnimationFasterSvg(rocketEl6 , 'rocketDown6' , '800ms' , 900 );
},3000)


/* SCROLL TO TOP BUTTON FUNCTIONALITY */

const HomeBanner = document.querySelector('#home-banner-container');
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollToTopBtn.style.display = 'none';
      } else {
        scrollToTopBtn.style.display = 'flex';
      }
    });
  }, {
    threshold: 0
  });

observer.observe(HomeBanner);

scrollToTopBtn.addEventListener("click",()=>{
    window.scrollTo({top : 0 , behavior : 'smooth'})
})
