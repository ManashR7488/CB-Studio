let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();
// tl3.pause();
const loader = document.querySelector(".loader");
// loader.style.display = "none";
const loaderImg = document.querySelector(".loader img");
const loaderText = document.querySelector(".loader h1");
const root = document.querySelector(":root");
let currentSection = 0; 
tl2.pause();

let cl = "";
loaderText.textContent.split("").forEach((element) => {
  cl += `<span style="display:inline-block"; id="pop">${element}</span>`;
  loaderText.innerHTML = cl;
});

let landingPageAnimation = function () {
  loaderImg.style.display = "none";
  loaderText.style.display = "block";
  tl1.from("#pop", {
    display: "none",
    y: 100,
    color: "#000000",
    stagger: 0.2,
  });
  tl1.to(".loader", {
    // delay: 1,
    y: "-100%",
    duration: 1.1,
  });
  tl1.from(".page1", {
    backgroundColor: "#000000",
    transform: "scaleY(0)",
    duration: 4,
    ease: "expo.out",
    onStart: () => {
      gsap.from(".headingContainer .headChild1 span,.heroText span", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        onStart: () => {
          tl2.play();
        },
      });
    },
  });
  
  tl1.from(".down .left", {
    opacity: 0,
    x: 100,
  });
  tl1.from(".down .right", {
    opacity: 0,
    x: -100,
  });
  tl2.from("#jgt9",{
    delay: 2,
    opacity: 0,
    x: -100,
    duration: 1,
  })
  tl2.from("nav", {
    // delay: 1,
    y: "-100%",
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1,0.5)",
  });
  tl2.from(".description .left div div", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
  });
};

gsap.to(".page1,.page2,.page3,.main", {
  backgroundColor: "#fcf8e4",
  scrollTrigger: {
    trigger: ".page2",
    scrub: 0.5,
    start: "top bottom",
    end: "top 40%",
  },
});

function showEvent() {
  currentSection = 1;
  gsap.to(".event", {
    display: "flex",
    onStart: () => {
      gsap.to(".wedding,.preWedding", {
        display: "none",
      });
    },
  });
  gsap.from(".event .box", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  });
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".event"));
  }, 500);
  let elem = "";
        eventImgLinks.forEach((link) => {
          elem += `<div class="swiper-slide"><div class="swiper-zoom-container"><img src="${link}"></img></div></div>`;
          document.querySelector(".overlay .swiper-wrapper").innerHTML = elem;
        });
}

function showWedding() {
  currentSection = 2;
  gsap.to(".wedding", {
    display: "flex",
  });
  gsap.from(".wedding .box", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
  });
  gsap.to(".event,.preWedding", {
    display: "none",
  });
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".wedding"));
  }, 500);
  let elem = "";
        weddingImgLinks.forEach((link) => {
          elem += `<div class="swiper-slide"><div class="swiper-zoom-container "><img src="${link}"></img></div></div>`;
          document.querySelector(".overlay .swiper-wrapper").innerHTML = elem;
        });
}

function showPreWedding() {
  currentSection = 3;
  gsap.to(".preWedding",{
    display: "flex",
  })
  gsap.from(".preWedding .box",{
    x:100,
    opacity:0,
    stagger:0.1,
  })
  gsap.to(".event,.wedding",{
    display:"none"
  })
  setTimeout(() => {
    locomotiveScroll.scrollTo(document.querySelector(".preWedding"));
  }, 500);
  let elem = "";
        preWeddingImgLinks.forEach((link) => {
          elem += `<div class="swiper-slide"><div class="swiper-zoom-container "><img src="${link}"></img></div></div>`;
          document.querySelector(".overlay .swiper-wrapper").innerHTML = elem;
        });
}

function openMenu() {
  tl3.to(".menu",{
    y:0,
    duration: 0.8,
    ease: "expo.out"
  })
  tl3.from(".menuLeft ul li",{
    y: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out"
  })
  tl3.from(".menuContact h1",{
    x: 50,
    opacity: 0,
    ease: "expo.out"
  })
  tl3.from(".menuContact h4",{
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "expo.out"
  })
  tl3.from(".menuConnect .b",{
    x: 50,
    opacity: 0,
    ease: "expo.out"
  })
  tl3.from(".menuConnect .a",{
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "expo.out"
  })
}

function openMenu2(){
  gsap.to(".menu",{
    y: 0,
    duration: 0.8,
    ease: "expo.out"
  })
}

function closeMenu(){
  gsap.to(".menu",{
    y: "-100%",
    duration: 0.8,
    ease: "expo.out"
  })
}