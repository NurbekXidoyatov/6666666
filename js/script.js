"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //LOADER
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  }, 3500);
  //CHANGE THE CONTENTS
  const tabHeader=document.querySelector(".tabheader__items");
  const tabItem=document.querySelectorAll(".tabheader__item");
  const tabContent=document.querySelectorAll(".tabcontent");
  function scritContent(){
    tabContent.forEach((item)=>{
      item.style.display="none";
    })
    tabItem.forEach((item)=>{
      item.classList.remove("tabheader__item_active")
    })
  }
  function showContent(i=0){
    tabContent[i].style.display="block"
    tabItem[i].classList.add("tabheader__item_active")
  }
  scritContent();
  showContent();
  tabHeader.addEventListener("click", (event)=>{
    if(event.target && event.target.classList.contains("tabheader__item")){
      tabItem.forEach((item, i)=>{
        if(event.target==item){
          scritContent();
          showContent(i);
        }
      })
    }
  })
  //MODALKA
  //MODALKA
  //MODALKA
  //MODALKA
  const allModalbtn=document.querySelectorAll("[data-modal]");
  const modalka=document.querySelector(".modal");
  const closebtn=document.querySelector(".modal__close");
  allModalbtn.forEach((item)=>{
    item.addEventListener("click", ()=>{
      modalka.style.display="block";
      clearTimeout(timer);
    })
  });
  closebtn.addEventListener("click",()=>{
    modalka.style.display="none"
  });
  modalka.addEventListener("click",(e)=>{
    if(e.target===modalka){
      modalka.style.display="none";
    };
  });
  const timer=setTimeout(() => {
    modalka.style.display="block";
  }, 5000);
  function showModalByScrol(){
    if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
      modalka.style.display="block";
      window.removeEventListener("scroll", showModalByScrol);
    }
  }
  window.addEventListener("scroll", showModalByScrol);
  // DATA
  // DATA
  // DATA
  // DATA
  // DATA
  const deadline="2022-05-09";
  function getTime(endTime){
    const time=Date.parse(endTime)- Date.parse(new Date()), //Eslab qoliw kersak
      days=Math.floor(time/(1000*60*60*24)),
      hours=Math.floor((time/(1000*60*60))%24),
      minutes=Math.floor((time/(1000*60))%60),
      seconds=Math.floor((time/(1000)%60));
    return{
      'total':time,
      'days':days,
      'hours':hours,
      'minutes':minutes,
      'seconds':seconds
    }
  }
  function setClock(selector, endTime){
    const timer=document.querySelector(selector),
      days=timer.querySelector('#days'),
      hours=timer.querySelector('#hours'),
      minutes=timer.querySelector('#minutes'),
      seconds=timer.querySelector('#seconds');
      // timeinterval=setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
      const time=getTime(endTime);
      days.innerHTML=time.days;
      hours.innerHTML=time.hours;
      minutes.innerHTML=time.minutes;
      seconds.innerHTML=time.seconds;
      if(total<=0){
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline)
  //CLASSES
  //CLASSES
  //CLASSES
  //CLASSES
  //CLASSES
  //CLASSES
  //CLASSES
  class CardCards{
    constructor(src, alt, title, decr, price, parentSelector){
      this.src=src
      this.alt=alt
      this.title=title
      this.decr=decr
      this.price=price
      this.parent=document.querySelector(parentSelector)
      this.transfer=1100
      this.changeToUSD()
    }
    changeToUSD(){
      this.price=this.price*this.transfer
    }
    render(){
      const element=document.createElement("div")
      element.innerHTML=`
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.decr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> $</div>
        </div>
      </div>`;
      this.parent.append(element)
    }
  }
  new CardCards(
    'img/tabs/1.jpg',
    'car',
    '2021 Mercedes-Benz C-Class',
    "The 2021 Mercedes-Benz C-Class finishes in the top half of our luxury small car rankings. It's powerful and upscale",
    200,
    '.menu__field .container'
  ).render();
  new CardCards(
    'img/tabs/2.jpg',
    'car',
    '2021 Mercedes-Benz C-Class',
    `The 2021 Mercedes-Benz C-Class finishes in the top half of our luxury small car rankings. It's powerful and upscale`,
    200,
    '.menu__field .container'
  ).render();
  new CardCards(
    'img/tabs/3.jpg',
    'car',
    '2021 Mercedes-Benz C-Class',
    "The 2021 Mercedes-Benz C-Class finishes in the top half of our luxury small car rankings. It's powerful and upscale",
    200,
    '.menu__field .container'
  ).render();
  //SLIDER
  //SLIDER
  //SLIDER
  //SLIDER
  //SLIDER
  //SLIDER
  //SLIDER
  // const slides=document.querySelectorAll(".offer__slide")
  // const prev=document.querySelector(".offer__slider-prev")
  // const next=document.querySelector(".offer__slider-next")
  // const current=document.querySelector("#current")
  // const total1=document.querySelector("#total")
  // console.log(next)
  // let slideIndex=1;
  // show(slideIndex)
  // function show(s){
  //   if(s>slides.length){
  //     slideIndex=1
  //   }
  //   if(s<1){
  //     slideIndex=slides.length
  //   }
  //   slides.forEach(item => item.style.display="none");
  //   slides[s-1].style.display="block";
  //   if(slides.length<10){
  //     current.textContent=`0${slideIndex}`
  //   }else{
  //     current.textContent=slideIndex
  //   }
  // }
  // function slidePlus(s){
  //   show(slideIndex+=s)
  // }
  // prev.addEventListener("click",()=>{
  //   slidePlus(-1)
  // })
  // next.addEventListener("click",()=>{
  //   slidePlus(1)
  // })
  //KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KORUSEL KOR
  const slides=document.querySelectorAll(".offer__slide")
  const prev=document.querySelector(".offer__slider-prev")
  const next=document.querySelector(".offer__slider-next")
  const current=document.querySelector("#current")
  const total1=document.querySelector("#total")
  const slidesWrapper=document.querySelector(".offer__slider-wrapper")
  const width=650
  const slideField=document.querySelector(".offer__slider-inner")
  let slideIndex=1;
  let offset=0;
  if(slideIndex<10){
    total1.textContent=`0${slides.length}`
    current.textContent=`0${slideIndex}`
  }else
  {
    total1.textContent=slides.length
    current.textContent=`0${slideIndex}`
  }
  slideField.style.width=100*slides.length+'%'
  slideField.style.display="flex"
  slideField.style.transition="all 0.5s ease"
  slidesWrapper.style.overflow="hidden"

  slides.forEach(slide=>{
    slide.style.width=width+'px'
  })
  next.addEventListener("click", ()=>{
    if(offset== width*(slides.length-1)){
      offset=0
    }else{
      offset=offset+width
    }
    slideField.style.transform=`translateX(-${offset}px)`
    if(slideIndex==slides.length){
      slideIndex=1
    }else{
      slideIndex++
    }
    if(slides.length<10){
      current.textContent= `0${slideIndex}`
    }else{
      current.textContent=slideIndex
    }
  })

  prev.addEventListener("click", ()=>{
    if(offset== 0){
      offset=width*(slides.length-1)
    }else{
      offset=offset-width
    }
    slideField.style.transform=`translateX(-${offset}px)`
    if(slideIndex==1){
      slideIndex=slides.length
    }else{
      slideIndex--
    }
    if(slides.length<10){
      current.textContent= `0${slideIndex}`
    }else{
      current.textContent=slideIndex
    }
  })

const darkbtn=document.querySelector(".btn_dark"),
    formq=document.querySelector(".formquestion")

  formq.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector(".modal__input").value,
      phone=document.querySelector(".inputphone").value;
    formq.reset()
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title:input, body:phone})
    })
    .then(response=>{
      if(response.ok){
        console.log("Success")
        const a=document.createElement("div")
        a.innerHTML="Murojatingiz qabul qilindi!"
        formq.appendChild(a)
        setTimeout(() => {
          a.style.display="none"
        }, 2000);
      }
      return response.json()
    })
    .then(data=>console.log(data))
  })
});
