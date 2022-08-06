


//verx meny
let bodyEl = document.querySelector('.bodyElement');
let buttonZakaz = document.querySelector('.KakZak');
let KakZak1= document.querySelector('.KakZak1');
let itemZakaz = document.querySelector('.buttondisplay');
let buttonOplata = document.querySelector('.oplata');
let buttonOplata1 = document.querySelector('.oplata1')
let oplata = document.querySelector('.oplataElement');
let bonys = document.querySelector('.bonys');
let bonys1 = document.querySelector('.bonys1');
let glovnai = document.querySelector('.glovnai');
let buttonSkidka = document.querySelector('.buttonSkidka');
let garant = document.querySelector('.garant');
let garant1 = document.querySelector('.garant1');
let bottonGarant = document.querySelector('.bottonGarant');
let onas = document.querySelector('.onas');
let onas1 = document.querySelector('.onas1');
let bottonOnas = document.querySelector('.bottonOnas');
let otziv = document.querySelector('.otziv');
let otziv1 = document.querySelector('.otziv1');
let bottonotziv = document.querySelector('.bottonotziv');
let contactt = document.querySelector('.contactt');
let contactt1 = document.querySelector('.contactt1');
let bottonKontakt = document.querySelector('.bottonKontakt');
let glovnai1 = document.querySelector('.glovnai1');
let glovnai12 = document.querySelector('.glovnai12');

glovnai12.addEventListener('click', function(){
  itemZakaz.classList.add('display'); 
  oplata.classList.add('display'); 
  buttonSkidka.classList.add('display');
  bottonGarant.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.remove('display');
});


glovnai1.addEventListener('click', function(){
  itemZakaz.classList.add('display'); 
  oplata.classList.add('display'); 
  buttonSkidka.classList.add('display');
  bottonGarant.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.remove('display');
});
glovnai.addEventListener('click', function(){
  itemZakaz.classList.add('display'); 
  oplata.classList.add('display'); 
  buttonSkidka.classList.add('display');
  bottonGarant.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.remove('display');
});




buttonZakaz.addEventListener('click', function(){
       itemZakaz.classList.toggle('display'); 
       oplata.classList.add('display');
       buttonSkidka.classList.add('display');
       bottonGarant.classList.add('display');
       bottonOnas.classList.add('display');
       bottonotziv.classList.add('display');
       bottonKontakt.classList.add('display');
       bodyEl.classList.add('display');
});
KakZak1.addEventListener('click', function(){
  itemZakaz.classList.toggle('display');  
  oplata.classList.add('display');
  buttonSkidka.classList.add('display');
  bottonGarant.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');
});

buttonOplata.addEventListener('click', function(){
  oplata.classList.toggle('display');  
  itemZakaz.classList.add('display');
  buttonSkidka.classList.add('display');
  bottonGarant.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');

 
});
buttonOplata1.addEventListener('click', function(){
  oplata.classList.toggle('display'); 
  itemZakaz.classList.add('display');
  buttonSkidka.classList.add('display');
  bottonGarant.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');

 
});


bonys.addEventListener('click', function(){
  buttonSkidka.classList.toggle('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display')
  bottonOnas.classList.add('display');;
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');
});
bonys1.addEventListener('click', function(){
  buttonSkidka.classList.toggle('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display')
  bottonOnas.classList.add('display');;
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');
});

garant.addEventListener('click',function(){
  bottonGarant.classList.toggle('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');
});
garant1.addEventListener('click',function(){
  bottonGarant.classList.toggle('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonOnas.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');
});
onas.addEventListener('click', function(){
  bottonOnas.classList.toggle('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');

});
onas1.addEventListener('click', function(){
  bottonOnas.classList.toggle('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');
  bottonotziv.classList.add('display');
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');

});
otziv.addEventListener('click',function(){
  bottonotziv.classList.toggle('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');  
  bottonKontakt.classList.add('display');
  bodyEl.classList.add('display');
});
// otziv1.addEventListener('click',function(){
//   bottonotziv.classList.toggle('display');
//   bottonOnas.classList.add('display');
//   buttonSkidka.classList.add('display');
//   oplata.classList.add('display');  
//   itemZakaz.classList.add('display');
//   bottonGarant.classList.add('display');  
//   bottonKontakt.classList.add('display');
// });
contactt.addEventListener('click', function(){
  bottonKontakt.classList.toggle('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');
  bodyEl.classList.add('display');  
});
contactt1.addEventListener('click', function(){
  bottonKontakt.classList.toggle('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');  
  bodyEl.classList.add('display');
});
let buttonremove3 = document.querySelector('.buttonremove3');

buttonremove3.addEventListener('click', function(){
  bottonKontakt.classList.add('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');
  bodyEl.classList.remove('display');  
});
let buttonremove4 = document.querySelector('.buttonremove4');

buttonremove4.addEventListener('click', function(){
  bottonKontakt.classList.add('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');  
  bodyEl.classList.remove('display');
});
let buttonremove5 = document.querySelector('.buttonremove5');

buttonremove5.addEventListener('click', function(){
  bottonKontakt.classList.add('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');  
  bodyEl.classList.remove('display');
});
let buttonremove6 = document.querySelector('.buttonremove6');

buttonremove6.addEventListener('click', function(){
  bottonKontakt.classList.add('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');  
  bodyEl.classList.remove('display');
});
let buttonremove7 = document.querySelector('.buttonremove7');

buttonremove7.addEventListener('click', function(){
  bottonKontakt.classList.add('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display'); 
  bodyEl.classList.remove('display'); 
});

let buttonremove9 = document.querySelector('.buttonremove9');

buttonremove9.addEventListener('click', function(){
  bottonKontakt.classList.add('display');
  bottonotziv.classList.add('display');
  bottonOnas.classList.add('display');
  buttonSkidka.classList.add('display');
  oplata.classList.add('display');  
  itemZakaz.classList.add('display');
  bottonGarant.classList.add('display');  
  bodyEl.classList.remove('display');
});

//photo reklama



// let image = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
// let slider = document.querySelector('#photoa');
// let img = slider.querySelector('img');
// let i = 0;
// window.setInterval(function(){
//       img.src = './photo_a/' + image[i];
//       i++;
//       if(i == image.length){
//         i=0;
//       }
// }, 4000);



//     !!!!!!!!!!!!!!!!!!!!!!! !Каталог  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




let element1 = document.querySelector('.element1');
let element2 = document.querySelector('.element2');
let element3 = document.querySelector('.element3');
let element4 = document.querySelector('.element4');
let element5 = document.querySelector('.element5');
let element6 = document.querySelector('.element6');
let element7 = document.querySelector('.element7');
let element8 = document.querySelector('.element8');
let element9 = document.querySelector('.element9');
let element10 = document.querySelector('.element10');
let element11 = document.querySelector('.element11');
let element12 = document.querySelector('.element12');
let element13 = document.querySelector('.element13');
let element14 = document.querySelector('.element14');



let tovarka = document.querySelector('.tovarka');
let katalogTovar = document.querySelector('.katalogTovar');
let phtoBackPhoto = document.querySelector('.phtoBackPhoto');


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!клик 1 окно и кнопка назад!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
element1.addEventListener('click', function(){
  tovarka.classList.remove('display');
  katalogTovar.classList.add('display');
});
phtoBackPhoto.addEventListener('click', function(){
  tovarka.classList.add('display');
  katalogTovar.classList.remove('display');
});
 let tovarkaCreatin = document.querySelector('.tovarkaCreatin');
 let phtoBack1Photo = document.querySelector('.phtoBack1Photo');
element2.addEventListener('click', function(){
  tovarkaCreatin.classList.remove('display');
  katalogTovar.classList.add('display');
});
phtoBack1Photo.addEventListener('click', function(){
  tovarkaCreatin.classList.add('display');
  katalogTovar.classList.remove('display');
});

let tovarkageiner = document.querySelector('.tovarkageiner');
let phtoBack3Photo = document.querySelector('.phtoBack3Photo');
element3.addEventListener('click', function(){
  tovarkageiner.classList.remove('display');
  katalogTovar.classList.add('display');
});
phtoBack3Photo.addEventListener('click', function(){
  tovarkageiner.classList.add('display');
  katalogTovar.classList.remove('display');
})
let tovarkaamino  = document.querySelector('.tovarkaamino  ');
let phtoBack4Photo = document.querySelector('.phtoBack4Photo');
element4.addEventListener('click', function(){
  tovarkaamino .classList.remove('display')
  katalogTovar.classList.add('display');
})
phtoBack4Photo.addEventListener('click', function(){
  tovarkaamino.classList.add('display');
  katalogTovar.classList.remove('display');
})
let tovarkabcaa = document.querySelector('.tovarkabcaa');
let phtoBack5Photo = document.querySelector('.phtoBack5Photo');
element5.addEventListener('click', function(){
  tovarkabcaa .classList.remove('display')
  katalogTovar.classList.add('display');
})
  phtoBack5Photo.addEventListener('click', function(){
    tovarkabcaa.classList.add('display');
    katalogTovar.classList.remove('display');
  
})
let tovarkarnetin = document.querySelector('.tovarkarnetin');
let phtoBack6Photo = document.querySelector('.phtoBack6Photo');
element6.addEventListener('click', function(){
  tovarkarnetin .classList.remove('display')
  katalogTovar.classList.add('display');
})
phtoBack6Photo.addEventListener('click', function(){
  tovarkarnetin.classList.add('display');
  katalogTovar.classList.remove('display');
})
let tovarzhirozig = document.querySelector('.tovarzhirozig');
let phtoBack7Photo = document.querySelector('.phtoBack7Photo');
element7.addEventListener('click', function(){
  tovarzhirozig .classList.remove('display')
  katalogTovar.classList.add('display');
})
phtoBack7Photo.addEventListener('click', function(){
  tovarzhirozig.classList.add('display');
  katalogTovar.classList.remove('display');
})
let tovarvitamin = document.querySelector('.tovarvitamin ');
let phtoBack8Photo = document.querySelector('.phtoBack8Photo');
element8.addEventListener('click', function(){
  tovarvitamin.classList.remove('display')
  katalogTovar.classList.add('display');
})
phtoBack8Photo.addEventListener('click', function(){
  tovarvitamin.classList.add('display');
  katalogTovar.classList.remove('display');
})
let tovarbatonchik = document.querySelector('.tovarbatonchik');
let phtoBack9Photo = document.querySelector('.phtoBack9Photo');
element9.addEventListener('click', function(){
  tovarbatonchik.classList.remove('display')
  katalogTovar.classList.add('display');
})

phtoBack9Photo.addEventListener('click', function(){
  tovarbatonchik.classList.add('display');
  katalogTovar.classList.remove('display');
})
let tovarbatonchik1 = document.querySelector('.tovarbatonchik1');
let phtoBack10Photo = document.querySelector('.phtoBack10Photo');
element10.addEventListener('click', function(){
  tovarbatonchik1.classList.remove('display')
  katalogTovar.classList.add('display');
})
phtoBack10Photo.addEventListener('click', function(){
  tovarbatonchik1.classList.add('display');
  katalogTovar.classList.remove('display');
})
// !!!!!!!!!!!!!!!!!!!!!!!!!!клик второе окно и кнопка назад!!!!!!!!!!!!!!!!!!!!!!!!!
let productimg = document.querySelector('.product-img');
let tovarEL = document.querySelector('.tovarEL');
productimg.addEventListener('click', function(){
  tovarEL.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto2 = document.querySelector('.phtoBackPhoto2');
phtoBackPhoto2.addEventListener('click', function(){
  tovarEL.classList.add('display');
  tovarka.classList.remove('display');
})

// клик второй щаблон
let photograp2 = document.querySelector('.photograp2');
let tovarEateam = document.querySelector('.tovarEateam');
photograp2.addEventListener('click', function(){
  tovarEateam.classList.remove('display');
  tovarka.classList.add('display');
})

// кнопка назад 
let phtoBackPhoto3 = document.querySelector('.phtoBackPhoto3');
phtoBackPhoto3.addEventListener('click', function(){
  tovarEateam.classList.add('display');
  tovarka.classList.remove('display');
});

//клик третий шаблон 
let photograp3 = document.querySelector('.photograp3');
let tovarEateam2 = document.querySelector('.tovarEateam2');
photograp3.addEventListener('click', function(){
  tovarEateam2.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto4 = document.querySelector('.phtoBackPhoto4');
phtoBackPhoto4.addEventListener('click', function(){
  tovarEateam2.classList.add('display');
  tovarka.classList.remove('display');
});

//клик 4 шаблон 
let photograp4 = document.querySelector('.photograp4');
let tovarEateam3 = document.querySelector('.tovarEateam3');
photograp4.addEventListener('click', function(){
  tovarEateam3.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto5 = document.querySelector('.phtoBackPhoto5');
phtoBackPhoto5.addEventListener('click', function(){
  tovarEateam3.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 5 шаблон 
let photograp5 = document.querySelector('.photograp5');
let tovarEateam4 = document.querySelector('.tovarEateam4');
photograp5.addEventListener('click', function(){
  tovarEateam4.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto6 = document.querySelector('.phtoBackPhoto6');
phtoBackPhoto6.addEventListener('click', function(){
  tovarEateam4.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 6 шаблон 
let photograp6 = document.querySelector('.photograp6');
let tovarEateam5 = document.querySelector('.tovarEateam5');
photograp6.addEventListener('click', function(){
  tovarEateam5.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto7 = document.querySelector('.phtoBackPhoto7');
phtoBackPhoto7.addEventListener('click', function(){
  tovarEateam5.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 7 шаблон 
let photograp7 = document.querySelector('.photograp7');
let tovarEateam6 = document.querySelector('.tovarEateam6');
photograp7.addEventListener('click', function(){
  tovarEateam6.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto8 = document.querySelector('.phtoBackPhoto8');
phtoBackPhoto8.addEventListener('click', function(){
  tovarEateam6.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 8шаблон 
let photograp8 = document.querySelector('.photograp8');
let tovarEateam7 = document.querySelector('.tovarEateam7');
photograp8.addEventListener('click', function(){
  tovarEateam7.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto9 = document.querySelector('.phtoBackPhoto9');
phtoBackPhoto9.addEventListener('click', function(){
  tovarEateam7.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 9шаблон 
let photograp9 = document.querySelector('.photograp9');
let tovarEateam8 = document.querySelector('.tovarEateam8');
photograp9.addEventListener('click', function(){
  tovarEateam8.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto10 = document.querySelector('.phtoBackPhoto10');
phtoBackPhoto10.addEventListener('click', function(){
  tovarEateam8.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 10шаблон 
let photograp10 = document.querySelector('.photograp10');
let tovarEateam9 = document.querySelector('.tovarEateam9');
photograp10.addEventListener('click', function(){
  tovarEateam9.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto11 = document.querySelector('.phtoBackPhoto11');
phtoBackPhoto11.addEventListener('click', function(){
  tovarEateam9.classList.add('display');
  tovarka.classList.remove('display');
});
//клик 11шаблон 
let photograp11 = document.querySelector('.photograp11');
let tovarEateam10 = document.querySelector('.tovarEateam10');
photograp11.addEventListener('click', function(){
  tovarEateam10.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto12 = document.querySelector('.phtoBackPhoto12');
phtoBackPhoto12.addEventListener('click', function(){
  tovarEateam10.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 12шаблон 
let photograp12 = document.querySelector('.photograp12');
let tovarEateam11 = document.querySelector('.tovarEateam11');
photograp12.addEventListener('click', function(){
  tovarEateam11.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto13 = document.querySelector('.phtoBackPhoto13');
phtoBackPhoto13.addEventListener('click', function(){
  tovarEateam11.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 13шаблон 
let photograp13 = document.querySelector('.photograp13');
let tovarEateam12 = document.querySelector('.tovarEateam12');
photograp13.addEventListener('click', function(){
  tovarEateam12.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto14 = document.querySelector('.phtoBackPhoto14');
phtoBackPhoto14.addEventListener('click', function(){
  tovarEateam12.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 14шаблон 
let photograp14 = document.querySelector('.photograp14');
let tovarEateam13 = document.querySelector('.tovarEateam13');
photograp14.addEventListener('click', function(){
  tovarEateam13.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto15 = document.querySelector('.phtoBackPhoto15');
phtoBackPhoto15.addEventListener('click', function(){
  tovarEateam13.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 15шаблон 
let photograp15 = document.querySelector('.photograp15');
let tovarEateam14 = document.querySelector('.tovarEateam14');
photograp15.addEventListener('click', function(){
  tovarEateam14.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto16 = document.querySelector('.phtoBackPhoto16');
phtoBackPhoto16.addEventListener('click', function(){
  tovarEateam14.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 16шаблон 
let photograp16 = document.querySelector('.photograp16');
let tovarEateam15 = document.querySelector('.tovarEateam15');
photograp16.addEventListener('click', function(){
  tovarEateam15.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto17 = document.querySelector('.phtoBackPhoto17');
phtoBackPhoto17.addEventListener('click', function(){
  tovarEateam15.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 17шаблон 
let photograp17 = document.querySelector('.photograp17');
let tovarEateam16 = document.querySelector('.tovarEateam16');
photograp17.addEventListener('click', function(){
  tovarEateam16.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto18 = document.querySelector('.phtoBackPhoto18');
phtoBackPhoto18.addEventListener('click', function(){
  tovarEateam16.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 18шаблон 
let photograp18 = document.querySelector('.photograp18');
let tovarEateam17 = document.querySelector('.tovarEateam17');
photograp18.addEventListener('click', function(){
  tovarEateam17.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto19 = document.querySelector('.phtoBackPhoto19');
phtoBackPhoto19.addEventListener('click', function(){
  tovarEateam17.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 19шаблон 
let photograp19 = document.querySelector('.photograp19');
let tovarEateam18 = document.querySelector('.tovarEateam18');
photograp19.addEventListener('click', function(){
  tovarEateam18.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto20 = document.querySelector('.phtoBackPhoto20');
phtoBackPhoto20.addEventListener('click', function(){
  tovarEateam18.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 20шаблон 
let photograp20 = document.querySelector('.photograp20');
let tovarEateam19 = document.querySelector('.tovarEateam19');
photograp20.addEventListener('click', function(){
  tovarEateam19.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto21 = document.querySelector('.phtoBackPhoto21');
phtoBackPhoto21.addEventListener('click', function(){
  tovarEateam19.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 21шаблон 
let photograp21 = document.querySelector('.photograp21');
let tovarEateam20 = document.querySelector('.tovarEateam20');
photograp21.addEventListener('click', function(){
  tovarEateam20.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto22 = document.querySelector('.phtoBackPhoto22');
phtoBackPhoto22.addEventListener('click', function(){
  tovarEateam20.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 22шаблон 
let photograp22 = document.querySelector('.photograp22');
let tovarEateam21 = document.querySelector('.tovarEateam21');
photograp22.addEventListener('click', function(){
  tovarEateam21.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto23 = document.querySelector('.phtoBackPhoto23');
phtoBackPhoto23.addEventListener('click', function(){
  tovarEateam21.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 23шаблон 
let photograp23 = document.querySelector('.photograp23');
let tovarEateam22 = document.querySelector('.tovarEateam22');
photograp23.addEventListener('click', function(){
  tovarEateam22.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto24 = document.querySelector('.phtoBackPhoto24');
phtoBackPhoto24.addEventListener('click', function(){
  tovarEateam22.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 24шаблон 
let photograp24 = document.querySelector('.photograp24');
let tovarEateam23 = document.querySelector('.tovarEateam23');
photograp24.addEventListener('click', function(){
  tovarEateam23.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto25 = document.querySelector('.phtoBackPhoto25');
phtoBackPhoto25.addEventListener('click', function(){
  tovarEateam23.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 25шаблон 
let photograp25 = document.querySelector('.photograp25');
let tovarEateam24 = document.querySelector('.tovarEateam24');
photograp25.addEventListener('click', function(){
  tovarEateam24.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto26 = document.querySelector('.phtoBackPhoto26');
phtoBackPhoto26.addEventListener('click', function(){
  tovarEateam24.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 26шаблон 
let photograp26 = document.querySelector('.photograp26');
let tovarEateam25 = document.querySelector('.tovarEateam25');
photograp26.addEventListener('click', function(){
  tovarEateam25.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto27 = document.querySelector('.phtoBackPhoto27');
phtoBackPhoto27.addEventListener('click', function(){
  tovarEateam25.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 27шаблон 
let photograp27 = document.querySelector('.photograp27');
let tovarEateam26 = document.querySelector('.tovarEateam26');
photograp27.addEventListener('click', function(){
  tovarEateam26.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto28 = document.querySelector('.phtoBackPhoto28');
phtoBackPhoto28.addEventListener('click', function(){
  tovarEateam26.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 28шаблон 
let photograp28 = document.querySelector('.photograp28');
let tovarEateam27 = document.querySelector('.tovarEateam27');
photograp28.addEventListener('click', function(){
  tovarEateam27.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto29 = document.querySelector('.phtoBackPhoto29');
phtoBackPhoto29.addEventListener('click', function(){
  tovarEateam27.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 29шаблон 
let photograp29 = document.querySelector('.photograp29');
let tovarEateam28 = document.querySelector('.tovarEateam28');
photograp29.addEventListener('click', function(){
  tovarEateam28.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto30 = document.querySelector('.phtoBackPhoto30');
phtoBackPhoto30.addEventListener('click', function(){
  tovarEateam28.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 30шаблон 
let photograp30 = document.querySelector('.photograp30');
let tovarEateam29 = document.querySelector('.tovarEateam29');
photograp30.addEventListener('click', function(){
  tovarEateam29.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto31 = document.querySelector('.phtoBackPhoto31');
phtoBackPhoto29.addEventListener('click', function(){
  tovarEateam29.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 31шаблон 
let photograp31 = document.querySelector('.photograp31');
let tovarEateam30 = document.querySelector('.tovarEateam30');
photograp31.addEventListener('click', function(){
  tovarEateam30.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto32 = document.querySelector('.phtoBackPhoto32');
phtoBackPhoto32.addEventListener('click', function(){
  tovarEateam30.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 32шаблон 
let photograp32 = document.querySelector('.photograp32');
let tovarEateam31 = document.querySelector('.tovarEateam31');
photograp32.addEventListener('click', function(){
  tovarEateam31.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto33 = document.querySelector('.phtoBackPhoto33');
phtoBackPhoto33.addEventListener('click', function(){
  tovarEateam31.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 33шаблон 
let photograp33 = document.querySelector('.photograp33');
let tovarEateam32 = document.querySelector('.tovarEateam32');
photograp33.addEventListener('click', function(){
  tovarEateam32.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto34 = document.querySelector('.phtoBackPhoto34');
phtoBackPhoto34.addEventListener('click', function(){
  tovarEateam32.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 34шаблон 
let photograp34 = document.querySelector('.photograp34');
let tovarEateam33 = document.querySelector('.tovarEateam33');
photograp34.addEventListener('click', function(){
  tovarEateam33.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto35 = document.querySelector('.phtoBackPhoto35');
phtoBackPhoto35.addEventListener('click', function(){
  tovarEateam33.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 35шаблон 
let photograp35 = document.querySelector('.photograp35');
let tovarEateam34 = document.querySelector('.tovarEateam34');
photograp35.addEventListener('click', function(){
  tovarEateam34.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto36 = document.querySelector('.phtoBackPhoto36');
phtoBackPhoto36.addEventListener('click', function(){
  tovarEateam34.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 36шаблон 
let photograp36 = document.querySelector('.photograp36');
let tovarEateam35 = document.querySelector('.tovarEateam35');
photograp36.addEventListener('click', function(){
  tovarEateam35.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto37 = document.querySelector('.phtoBackPhoto37');
phtoBackPhoto37.addEventListener('click', function(){
  tovarEateam35.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 37шаблон 
let photograp37 = document.querySelector('.photograp37');
let tovarEateam36 = document.querySelector('.tovarEateam36');
photograp37.addEventListener('click', function(){
  tovarEateam36.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto38 = document.querySelector('.phtoBackPhoto38');
phtoBackPhoto38.addEventListener('click', function(){
  tovarEateam36.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 38шаблон 
let photograp38 = document.querySelector('.photograp38');
let tovarEateam37 = document.querySelector('.tovarEateam37');
photograp38.addEventListener('click', function(){
  tovarEateam37.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto39 = document.querySelector('.phtoBackPhoto39');
phtoBackPhoto39.addEventListener('click', function(){
  tovarEateam37.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 39шаблон 
let photograp39 = document.querySelector('.photograp39');
let tovarEateam38 = document.querySelector('.tovarEateam38');
photograp39.addEventListener('click', function(){
  tovarEateam38.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto40 = document.querySelector('.phtoBackPhoto40');
phtoBackPhoto40.addEventListener('click', function(){
  tovarEateam38.classList.add('display');
  tovarka.classList.remove('display');
})
//клик 40шаблон 
let photograp40 = document.querySelector('.photograp40');
let tovarEateam39 = document.querySelector('.tovarEateam39');
photograp40.addEventListener('click', function(){
  tovarEateam39.classList.remove('display');
  tovarka.classList.add('display');
})
// кнопка назад
let phtoBackPhoto41 = document.querySelector('.phtoBackPhoto41');
phtoBackPhoto41.addEventListener('click', function(){
  tovarEateam39.classList.add('display');
  tovarka.classList.remove('display');
})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! kreatin!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





//клик 1шаблон 
let photograp41 = document.querySelector('.photograp41');
let tovarEateam40 = document.querySelector('.tovarEateam40');
photograp41.addEventListener('click', function(){
  tovarEateam40.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto42 = document.querySelector('.phtoBackPhoto42');
phtoBackPhoto42.addEventListener('click', function(){
  tovarEateam40.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 2шаблон 
let photograp42 = document.querySelector('.photograp42');
let tovarEateam41 = document.querySelector('.tovarEateam41');
photograp42.addEventListener('click', function(){
  tovarEateam41.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto43 = document.querySelector('.phtoBackPhoto43');
phtoBackPhoto43.addEventListener('click', function(){
  tovarEateam41.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 3шаблон 
let photograp43 = document.querySelector('.photograp43');
let tovarEateam42 = document.querySelector('.tovarEateam42');
photograp43.addEventListener('click', function(){
  tovarEateam42.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto44 = document.querySelector('.phtoBackPhoto44');
phtoBackPhoto44.addEventListener('click', function(){
  tovarEateam42.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 4шаблон 
let photograp44 = document.querySelector('.photograp44');
let tovarEateam43 = document.querySelector('.tovarEateam43');
photograp44.addEventListener('click', function(){
  tovarEateam43.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto45 = document.querySelector('.phtoBackPhoto45');
phtoBackPhoto45.addEventListener('click', function(){
  tovarEateam43.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 5шаблон 
let photograp45 = document.querySelector('.photograp45');
let tovarEateam44 = document.querySelector('.tovarEateam44');
photograp45.addEventListener('click', function(){
  tovarEateam44.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto46 = document.querySelector('.phtoBackPhoto46');
phtoBackPhoto46.addEventListener('click', function(){
  tovarEateam44.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 6шаблон 
let photograp46 = document.querySelector('.photograp46');
let tovarEateam45 = document.querySelector('.tovarEateam45');
photograp46.addEventListener('click', function(){
  tovarEateam45.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto47 = document.querySelector('.phtoBackPhoto47');
phtoBackPhoto47.addEventListener('click', function(){
  tovarEateam45.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 7шаблон 
let photograp47 = document.querySelector('.photograp47');
let tovarEateam46 = document.querySelector('.tovarEateam46');
photograp47.addEventListener('click', function(){
  tovarEateam46.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto48 = document.querySelector('.phtoBackPhoto48');
phtoBackPhoto48.addEventListener('click', function(){
  tovarEateam46.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 8шаблон 
let photograp48 = document.querySelector('.photograp48');
let tovarEateam47 = document.querySelector('.tovarEateam47');
photograp48.addEventListener('click', function(){
  tovarEateam47.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto49 = document.querySelector('.phtoBackPhoto49');
phtoBackPhoto49.addEventListener('click', function(){
  tovarEateam47.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 9шаблон 
let photograp49 = document.querySelector('.photograp49');
let tovarEateam48 = document.querySelector('.tovarEateam48');
photograp49.addEventListener('click', function(){
  tovarEateam48.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto50 = document.querySelector('.phtoBackPhoto50');
phtoBackPhoto50.addEventListener('click', function(){
  tovarEateam48.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 10шаблон 
let photograp50 = document.querySelector('.photograp50');
let tovarEateam49 = document.querySelector('.tovarEateam49');
photograp50.addEventListener('click', function(){
  tovarEateam49.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto51 = document.querySelector('.phtoBackPhoto51');
phtoBackPhoto51.addEventListener('click', function(){
  tovarEateam49.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 11шаблон 
let photograp51 = document.querySelector('.photograp51');
let tovarEateam50 = document.querySelector('.tovarEateam50');
photograp51.addEventListener('click', function(){
  tovarEateam50.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto52 = document.querySelector('.phtoBackPhoto52');
phtoBackPhoto52.addEventListener('click', function(){
  tovarEateam50.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 12шаблон 
let photograp52 = document.querySelector('.photograp52');
let tovarEateam51 = document.querySelector('.tovarEateam51');
photograp52.addEventListener('click', function(){
  tovarEateam51.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto53 = document.querySelector('.phtoBackPhoto53');
phtoBackPhoto53.addEventListener('click', function(){
  tovarEateam51.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 13шаблон 
let photograp53 = document.querySelector('.photograp53');
let tovarEateam52 = document.querySelector('.tovarEateam52');
photograp53.addEventListener('click', function(){
  tovarEateam52.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto54 = document.querySelector('.phtoBackPhoto54');
phtoBackPhoto54.addEventListener('click', function(){
  tovarEateam52.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 14шаблон 
let photograp54 = document.querySelector('.photograp54');
let tovarEateam53 = document.querySelector('.tovarEateam53');
photograp54.addEventListener('click', function(){
  tovarEateam53.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto55 = document.querySelector('.phtoBackPhoto55');
phtoBackPhoto55.addEventListener('click', function(){
  tovarEateam53.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 15шаблон 
let photograp55 = document.querySelector('.photograp55');
let tovarEateam54 = document.querySelector('.tovarEateam54');
photograp55.addEventListener('click', function(){
  tovarEateam54.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto56 = document.querySelector('.phtoBackPhoto56');
phtoBackPhoto56.addEventListener('click', function(){
  tovarEateam54.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 16шаблон 
let photograp56 = document.querySelector('.photograp56');
let tovarEateam55 = document.querySelector('.tovarEateam55');
photograp56.addEventListener('click', function(){
  tovarEateam55.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto57 = document.querySelector('.phtoBackPhoto57');
phtoBackPhoto57.addEventListener('click', function(){
  tovarEateam55.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 17шаблон 
let photograp57 = document.querySelector('.photograp57');
let tovarEateam56 = document.querySelector('.tovarEateam56');
photograp57.addEventListener('click', function(){
  tovarEateam56.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto58 = document.querySelector('.phtoBackPhoto58');
phtoBackPhoto58.addEventListener('click', function(){
  tovarEateam56.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 18шаблон 
let photograp58 = document.querySelector('.photograp58');
let tovarEateam57 = document.querySelector('.tovarEateam57');
photograp58.addEventListener('click', function(){
  tovarEateam57.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto59 = document.querySelector('.phtoBackPhoto59');
phtoBackPhoto59.addEventListener('click', function(){
  tovarEateam57.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 19шаблон 
let photograp59 = document.querySelector('.photograp59');
let tovarEateam58 = document.querySelector('.tovarEateam58');
photograp59.addEventListener('click', function(){
  tovarEateam58.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto60 = document.querySelector('.phtoBackPhoto60');
phtoBackPhoto60.addEventListener('click', function(){
  tovarEateam58.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 20шаблон 
let photograp60 = document.querySelector('.photograp60');
let tovarEateam59 = document.querySelector('.tovarEateam59');
photograp60.addEventListener('click', function(){
  tovarEateam59.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto61 = document.querySelector('.phtoBackPhoto61');
phtoBackPhoto61.addEventListener('click', function(){
  tovarEateam59.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 21шаблон 
let photograp61 = document.querySelector('.photograp61');
let tovarEateam60 = document.querySelector('.tovarEateam60');
photograp61.addEventListener('click', function(){
  tovarEateam60.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto62 = document.querySelector('.phtoBackPhoto62');
phtoBackPhoto62.addEventListener('click', function(){
  tovarEateam60.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 22шаблон 
let photograp62 = document.querySelector('.photograp62');
let tovarEateam61 = document.querySelector('.tovarEateam61');
photograp62.addEventListener('click', function(){
  tovarEateam61.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto63 = document.querySelector('.phtoBackPhoto63');
phtoBackPhoto63.addEventListener('click', function(){
  tovarEateam61.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 23шаблон 
let photograp63 = document.querySelector('.photograp63');
let tovarEateam62 = document.querySelector('.tovarEateam62');
photograp63.addEventListener('click', function(){
  tovarEateam62.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto64 = document.querySelector('.phtoBackPhoto64');
phtoBackPhoto64.addEventListener('click', function(){
  tovarEateam62.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 24шаблон 
let photograp64 = document.querySelector('.photograp64');
let tovarEateam63 = document.querySelector('.tovarEateam63');
photograp64.addEventListener('click', function(){
  tovarEateam63.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto65 = document.querySelector('.phtoBackPhoto65');
phtoBackPhoto65.addEventListener('click', function(){
  tovarEateam63.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 25шаблон 
let photograp65 = document.querySelector('.photograp65');
let tovarEateam64 = document.querySelector('.tovarEateam64');
photograp65.addEventListener('click', function(){
  tovarEateam64.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto66 = document.querySelector('.phtoBackPhoto66');
phtoBackPhoto66.addEventListener('click', function(){
  tovarEateam64.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 26шаблон 
let photograp66 = document.querySelector('.photograp66');
let tovarEateam65 = document.querySelector('.tovarEateam65');
photograp66.addEventListener('click', function(){
  tovarEateam65.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto67 = document.querySelector('.phtoBackPhoto67');
phtoBackPhoto67.addEventListener('click', function(){
  tovarEateam65.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 27шаблон 
let photograp67 = document.querySelector('.photograp67');
let tovarEateam66 = document.querySelector('.tovarEateam66');
photograp67.addEventListener('click', function(){
  tovarEateam66.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto68 = document.querySelector('.phtoBackPhoto68');
phtoBackPhoto68.addEventListener('click', function(){
  tovarEateam66.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
//клик 28шаблон 
let photograp68 = document.querySelector('.photograp68');
let tovarEateam67 = document.querySelector('.tovarEateam67');
photograp68.addEventListener('click', function(){
  tovarEateam67.classList.remove('display');
  tovarkaCreatin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto69 = document.querySelector('.phtoBackPhoto69');
phtoBackPhoto69.addEventListener('click', function(){
  tovarEateam67.classList.add('display');
  tovarkaCreatin.classList.remove('display');
})
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!geiner
//клик 1шаблон 
let photograp69 = document.querySelector('.photograp69');
let tovarEateam68 = document.querySelector('.tovarEateam68');
photograp69.addEventListener('click', function(){
  tovarEateam68.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto70 = document.querySelector('.phtoBackPhoto70');
phtoBackPhoto70.addEventListener('click', function(){
  tovarEateam68.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 2шаблон 
let photograp70 = document.querySelector('.photograp70');
let tovarEateam69 = document.querySelector('.tovarEateam69');
photograp70.addEventListener('click', function(){
  tovarEateam69.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto71 = document.querySelector('.phtoBackPhoto71');
phtoBackPhoto71.addEventListener('click', function(){
  tovarEateam69.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 3шаблон 
let photograp71 = document.querySelector('.photograp71');
let tovarEateam70 = document.querySelector('.tovarEateam70');
photograp71.addEventListener('click', function(){
  tovarEateam70.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto72 = document.querySelector('.phtoBackPhoto72');
phtoBackPhoto72.addEventListener('click', function(){
  tovarEateam70.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 4шаблон 
let photograp72 = document.querySelector('.photograp72');
let tovarEateam71 = document.querySelector('.tovarEateam71');
photograp72.addEventListener('click', function(){
  tovarEateam71.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto73 = document.querySelector('.phtoBackPhoto73');
phtoBackPhoto73.addEventListener('click', function(){
  tovarEateam71.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 5шаблон 
let photograp73 = document.querySelector('.photograp73');
let tovarEateam72 = document.querySelector('.tovarEateam72');
photograp73.addEventListener('click', function(){
  tovarEateam72.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto74 = document.querySelector('.phtoBackPhoto74');
phtoBackPhoto74.addEventListener('click', function(){
  tovarEateam72.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 6шаблон 
let photograp74 = document.querySelector('.photograp74');
let tovarEateam73 = document.querySelector('.tovarEateam73');
photograp74.addEventListener('click', function(){
  tovarEateam73.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto75 = document.querySelector('.phtoBackPhoto75');
phtoBackPhoto75.addEventListener('click', function(){
  tovarEateam73.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 7шаблон 
let photograp75 = document.querySelector('.photograp75');
let tovarEateam74 = document.querySelector('.tovarEateam74');
photograp75.addEventListener('click', function(){
  tovarEateam74.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto76 = document.querySelector('.phtoBackPhoto76');
phtoBackPhoto76.addEventListener('click', function(){
  tovarEateam74.classList.add('display');
  tovarkageiner.classList.remove('display');
})
//клик 8шаблон 
let photograp76 = document.querySelector('.photograp76');
let tovarEateam75 = document.querySelector('.tovarEateam75');
photograp76.addEventListener('click', function(){
  tovarEateam75.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto77 = document.querySelector('.phtoBackPhoto77');
phtoBackPhoto77.addEventListener('click', function(){
  tovarEateam75.classList.add('display');
  tovarkageiner.classList.remove('display');
})
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!amino

//клик 1шаблон 
let photograp77 = document.querySelector('.photograp77');
let tovarEateam76 = document.querySelector('.tovarEateam76');
photograp77.addEventListener('click', function(){
  tovarEateam76.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto78 = document.querySelector('.phtoBackPhoto78');
phtoBackPhoto78.addEventListener('click', function(){
  tovarEateam76.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 2шаблон 
let photograp78 = document.querySelector('.photograp78');
let tovarEateam77 = document.querySelector('.tovarEateam77');
photograp78.addEventListener('click', function(){
  tovarEateam77.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto79 = document.querySelector('.phtoBackPhoto79');
phtoBackPhoto79.addEventListener('click', function(){
  tovarEateam77.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 3шаблон 
let photograp79 = document.querySelector('.photograp79');
let tovarEateam78 = document.querySelector('.tovarEateam78');
photograp79.addEventListener('click', function(){
  tovarEateam78.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto80 = document.querySelector('.phtoBackPhoto80');
phtoBackPhoto80.addEventListener('click', function(){
  tovarEateam78.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 4шаблон 
let photograp80 = document.querySelector('.photograp80');
let tovarEateam79 = document.querySelector('.tovarEateam79');
photograp80.addEventListener('click', function(){
  tovarEateam79.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto81 = document.querySelector('.phtoBackPhoto81');
phtoBackPhoto81.addEventListener('click', function(){
  tovarEateam79.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 5шаблон 
let photograp81 = document.querySelector('.photograp81');
let tovarEateam80 = document.querySelector('.tovarEateam80');
photograp81.addEventListener('click', function(){
  tovarEateam80.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto82 = document.querySelector('.phtoBackPhoto82');
phtoBackPhoto82.addEventListener('click', function(){
  tovarEateam80.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 6шаблон 
let photograp82 = document.querySelector('.photograp82');
let tovarEateam81 = document.querySelector('.tovarEateam81');
photograp82.addEventListener('click', function(){
  tovarEateam81.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto83 = document.querySelector('.phtoBackPhoto83');
phtoBackPhoto83.addEventListener('click', function(){
  tovarEateam81.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 7шаблон 
let photograp83 = document.querySelector('.photograp83');
let tovarEateam82 = document.querySelector('.tovarEateam82');
photograp83.addEventListener('click', function(){
  tovarEateam82.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto84 = document.querySelector('.phtoBackPhoto84');
phtoBackPhoto84.addEventListener('click', function(){
  tovarEateam82.classList.add('display');
  tovarkaamino.classList.remove('display');
})
//клик 8шаблон 
let photograp84 = document.querySelector('.photograp84');
let tovarEateam83 = document.querySelector('.tovarEateam83');
photograp84.addEventListener('click', function(){
  tovarEateam83.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto85 = document.querySelector('.phtoBackPhoto85');
phtoBackPhoto85.addEventListener('click', function(){
  tovarEateam83.classList.add('display');
  tovarkaamino.classList.remove('display');
})
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!bcaa

//клик 1шаблон 
let photograp85 = document.querySelector('.photograp85');
let tovarEateam84 = document.querySelector('.tovarEateam84');
photograp85.addEventListener('click', function(){
  tovarEateam84.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto86 = document.querySelector('.phtoBackPhoto86');
phtoBackPhoto86.addEventListener('click', function(){
  tovarEateam84.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 2шаблон 
let photograp86 = document.querySelector('.photograp86');
let tovarEateam85 = document.querySelector('.tovarEateam85');
photograp86.addEventListener('click', function(){
  tovarEateam85.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto87 = document.querySelector('.phtoBackPhoto87');
phtoBackPhoto87.addEventListener('click', function(){
  tovarEateam85.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 3шаблон 
let photograp87 = document.querySelector('.photograp87');
let tovarEateam86 = document.querySelector('.tovarEateam86');
photograp87.addEventListener('click', function(){
  tovarEateam86.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto88 = document.querySelector('.phtoBackPhoto88');
phtoBackPhoto88.addEventListener('click', function(){
  tovarEateam86.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 4шаблон 
let photograp88 = document.querySelector('.photograp88');
let tovarEateam87 = document.querySelector('.tovarEateam87');
photograp88.addEventListener('click', function(){
  tovarEateam87.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto89 = document.querySelector('.phtoBackPhoto89');
phtoBackPhoto89.addEventListener('click', function(){
  tovarEateam87.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 5шаблон 
let photograp89 = document.querySelector('.photograp89');
let tovarEateam88 = document.querySelector('.tovarEateam88');
photograp89.addEventListener('click', function(){
  tovarEateam88.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto90= document.querySelector('.phtoBackPhoto90');
phtoBackPhoto90.addEventListener('click', function(){
  tovarEateam88.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 6шаблон 
let photograp90 = document.querySelector('.photograp90');
let tovarEateam89 = document.querySelector('.tovarEateam89');
photograp90.addEventListener('click', function(){
  tovarEateam89.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto91= document.querySelector('.phtoBackPhoto91');
phtoBackPhoto91.addEventListener('click', function(){
  tovarEateam89.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 7шаблон 
let photograp91 = document.querySelector('.photograp91');
let tovarEateam90 = document.querySelector('.tovarEateam90');
photograp91.addEventListener('click', function(){
  tovarEateam90.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto92= document.querySelector('.phtoBackPhoto92');
phtoBackPhoto92.addEventListener('click', function(){
  tovarEateam90.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
//клик 8шаблон 
let photograp92 = document.querySelector('.photograp92');
let tovarEateam91 = document.querySelector('.tovarEateam91');
photograp92.addEventListener('click', function(){
  tovarEateam91.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto93= document.querySelector('.phtoBackPhoto93');
phtoBackPhoto93.addEventListener('click', function(){
  tovarEateam91.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
// L karnetin
//клик 1шаблон 
let photograp93 = document.querySelector('.photograp93');
let tovarEateam92 = document.querySelector('.tovarEateam92');
photograp93.addEventListener('click', function(){
  tovarEateam92.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto94= document.querySelector('.phtoBackPhoto94');
phtoBackPhoto94.addEventListener('click', function(){
  tovarEateam92.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 2шаблон 
let photograp94 = document.querySelector('.photograp94');
let tovarEateam93 = document.querySelector('.tovarEateam93');
photograp94.addEventListener('click', function(){
  tovarEateam93.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto95= document.querySelector('.phtoBackPhoto95');
phtoBackPhoto95.addEventListener('click', function(){
  tovarEateam93.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 3шаблон 
let photograp95 = document.querySelector('.photograp95');
let tovarEateam94 = document.querySelector('.tovarEateam94');
photograp95.addEventListener('click', function(){
  tovarEateam94.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto96= document.querySelector('.phtoBackPhoto96');
phtoBackPhoto96.addEventListener('click', function(){
  tovarEateam94.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 4шаблон 
let photograp96 = document.querySelector('.photograp96');
let tovarEateam95 = document.querySelector('.tovarEateam95');
photograp96.addEventListener('click', function(){
  tovarEateam95.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto97= document.querySelector('.phtoBackPhoto97');
phtoBackPhoto97.addEventListener('click', function(){
  tovarEateam95.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 5шаблон 
let photograp97 = document.querySelector('.photograp97');
let tovarEateam96 = document.querySelector('.tovarEateam96');
photograp97.addEventListener('click', function(){
  tovarEateam96.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto98= document.querySelector('.phtoBackPhoto98');
phtoBackPhoto98.addEventListener('click', function(){
  tovarEateam96.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 6шаблон 
let photograp98 = document.querySelector('.photograp98');
let tovarEateam97 = document.querySelector('.tovarEateam97');
photograp98.addEventListener('click', function(){
  tovarEateam97.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto99= document.querySelector('.phtoBackPhoto99');
phtoBackPhoto99.addEventListener('click', function(){
  tovarEateam97.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 7шаблон 
let photograp99 = document.querySelector('.photograp99');
let tovarEateam98 = document.querySelector('.tovarEateam98');
photograp99.addEventListener('click', function(){
  tovarEateam98.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto100= document.querySelector('.phtoBackPhoto100');
phtoBackPhoto100.addEventListener('click', function(){
  tovarEateam98.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//клик 8шаблон 
let photograp100 = document.querySelector('.photograp100');
let tovarEateam99 = document.querySelector('.tovarEateam99');
photograp100.addEventListener('click', function(){
  tovarEateam99.classList.remove('display');
  tovarkarnetin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto101= document.querySelector('.phtoBackPhoto101');
phtoBackPhoto101.addEventListener('click', function(){
  tovarEateam99.classList.add('display');
  tovarkarnetin.classList.remove('display');
})
//  zhirozhigatel
//клик 1шаблон 
let photograp101 = document.querySelector('.photograp101');
let tovarEateam100 = document.querySelector('.tovarEateam100');
photograp101.addEventListener('click', function(){
  tovarEateam100.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto102= document.querySelector('.phtoBackPhoto102');
phtoBackPhoto102.addEventListener('click', function(){
  tovarEateam100.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 2шаблон 
let photograp102 = document.querySelector('.photograp102');
let tovarEateam101 = document.querySelector('.tovarEateam101');
photograp102.addEventListener('click', function(){
  tovarEateam101.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto103= document.querySelector('.phtoBackPhoto103');
phtoBackPhoto103.addEventListener('click', function(){
  tovarEateam101.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 3шаблон 
let photograp103 = document.querySelector('.photograp103');
let tovarEateam102 = document.querySelector('.tovarEateam102');
photograp103.addEventListener('click', function(){
  tovarEateam102.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto104= document.querySelector('.phtoBackPhoto104');
phtoBackPhoto104.addEventListener('click', function(){
  tovarEateam102.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 4шаблон 
let photograp104 = document.querySelector('.photograp104');
let tovarEateam103 = document.querySelector('.tovarEateam103');
photograp104.addEventListener('click', function(){
  tovarEateam103.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto105= document.querySelector('.phtoBackPhoto105');
phtoBackPhoto105.addEventListener('click', function(){
  tovarEateam103.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 5шаблон 
let photograp105 = document.querySelector('.photograp105');
let tovarEateam104 = document.querySelector('.tovarEateam104');
photograp105.addEventListener('click', function(){
  tovarEateam104.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto106= document.querySelector('.phtoBackPhoto106');
phtoBackPhoto106.addEventListener('click', function(){
  tovarEateam104.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 6шаблон 
let photograp106 = document.querySelector('.photograp106');
let tovarEateam105 = document.querySelector('.tovarEateam105');
photograp106.addEventListener('click', function(){
  tovarEateam105.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto107= document.querySelector('.phtoBackPhoto107');
phtoBackPhoto107.addEventListener('click', function(){
  tovarEateam105.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 7шаблон 
let photograp107 = document.querySelector('.photograp107');
let tovarEateam106 = document.querySelector('.tovarEateam106');
photograp107.addEventListener('click', function(){
  tovarEateam106.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto108= document.querySelector('.phtoBackPhoto108');
phtoBackPhoto108.addEventListener('click', function(){
  tovarEateam106.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
//клик 8шаблон 
let photograp108 = document.querySelector('.photograp108');
let tovarEateam107 = document.querySelector('.tovarEateam107');
photograp108.addEventListener('click', function(){
  tovarEateam107.classList.remove('display');
  tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto109= document.querySelector('.phtoBackPhoto109');
phtoBackPhoto109.addEventListener('click', function(){
  tovarEateam107.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
// vitamin
//клик 1шаблон 
let photograp109 = document.querySelector('.photograp109');
let tovarEateam108 = document.querySelector('.tovarEateam108');
photograp109.addEventListener('click', function(){
  tovarEateam108.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto110= document.querySelector('.phtoBackPhoto110');
phtoBackPhoto110.addEventListener('click', function(){
  tovarEateam108.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 2шаблон 
let photograp110 = document.querySelector('.photograp110');
let tovarEateam109 = document.querySelector('.tovarEateam109');
photograp110.addEventListener('click', function(){
  tovarEateam109.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto111= document.querySelector('.phtoBackPhoto111');
phtoBackPhoto111.addEventListener('click', function(){
  tovarEateam109.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 3шаблон 
let photograp111 = document.querySelector('.photograp111');
let tovarEateam110 = document.querySelector('.tovarEateam110');
photograp111.addEventListener('click', function(){
  tovarEateam110.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto112= document.querySelector('.phtoBackPhoto112');
phtoBackPhoto112.addEventListener('click', function(){
  tovarEateam110.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 4шаблон 
let photograp112 = document.querySelector('.photograp112');
let tovarEateam111 = document.querySelector('.tovarEateam111');
photograp112.addEventListener('click', function(){
  tovarEateam111.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto113= document.querySelector('.phtoBackPhoto113');
phtoBackPhoto113.addEventListener('click', function(){
  tovarEateam111.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 5шаблон 
let photograp113 = document.querySelector('.photograp113');
let tovarEateam112 = document.querySelector('.tovarEateam112');
photograp113.addEventListener('click', function(){
  tovarEateam112.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto114= document.querySelector('.phtoBackPhoto114');
phtoBackPhoto114.addEventListener('click', function(){
  tovarEateam112.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 6шаблон 
let photograp114 = document.querySelector('.photograp114');
let tovarEateam113 = document.querySelector('.tovarEateam113');
photograp114.addEventListener('click', function(){
  tovarEateam113.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto115= document.querySelector('.phtoBackPhoto115');
phtoBackPhoto115.addEventListener('click', function(){
  tovarEateam113.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 7шаблон 
let photograp115 = document.querySelector('.photograp115');
let tovarEateam114 = document.querySelector('.tovarEateam114');
photograp115.addEventListener('click', function(){
  tovarEateam114.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto116= document.querySelector('.phtoBackPhoto116');
phtoBackPhoto116.addEventListener('click', function(){
  tovarEateam114.classList.add('display');
  tovarvitamin.classList.remove('display');
})
//клик 8шаблон 
let photograp116 = document.querySelector('.photograp116');
let tovarEateam115 = document.querySelector('.tovarEateam115');
photograp116.addEventListener('click', function(){
  tovarEateam115.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto117= document.querySelector('.phtoBackPhoto117');
phtoBackPhoto117.addEventListener('click', function(){
  tovarEateam115.classList.add('display');
  tovarvitamin.classList.remove('display');
})


// baton4ik
//клик 1шаблон 
let photograp117 = document.querySelector('.photograp117');
let tovarEateam116 = document.querySelector('.tovarEateam116');
photograp117.addEventListener('click', function(){
  tovarEateam116.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto118= document.querySelector('.phtoBackPhoto118');
phtoBackPhoto118.addEventListener('click', function(){
  tovarEateam116.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 2шаблон 
let photograp118 = document.querySelector('.photograp118');
let tovarEateam117 = document.querySelector('.tovarEateam117');
photograp118.addEventListener('click', function(){
  tovarEateam117.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto119= document.querySelector('.phtoBackPhoto119');
phtoBackPhoto119.addEventListener('click', function(){
  tovarEateam117.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 3шаблон 
let photograp119 = document.querySelector('.photograp119');
let tovarEateam118 = document.querySelector('.tovarEateam118');
photograp119.addEventListener('click', function(){
  tovarEateam118.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto120= document.querySelector('.phtoBackPhoto120');
phtoBackPhoto120.addEventListener('click', function(){
  tovarEateam118.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 4шаблон 
let photograp120 = document.querySelector('.photograp120');
let tovarEateam119 = document.querySelector('.tovarEateam119');
photograp120.addEventListener('click', function(){
  tovarEateam119.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto121= document.querySelector('.phtoBackPhoto121');
phtoBackPhoto121.addEventListener('click', function(){
  tovarEateam119.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 5шаблон 
let photograp121 = document.querySelector('.photograp121');
let tovarEateam120 = document.querySelector('.tovarEateam120');
photograp121.addEventListener('click', function(){
  tovarEateam120.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto122= document.querySelector('.phtoBackPhoto122');
phtoBackPhoto122.addEventListener('click', function(){
  tovarEateam120.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 6шаблон 
let photograp122 = document.querySelector('.photograp122');
let tovarEateam121 = document.querySelector('.tovarEateam121');
photograp122.addEventListener('click', function(){
  tovarEateam121.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto123= document.querySelector('.phtoBackPhoto123');
phtoBackPhoto123.addEventListener('click', function(){
  tovarEateam121.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 7шаблон 
let photograp123 = document.querySelector('.photograp123');
let tovarEateam122 = document.querySelector('.tovarEateam122');
photograp123.addEventListener('click', function(){
  tovarEateam122.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto124= document.querySelector('.phtoBackPhoto124');
phtoBackPhoto124.addEventListener('click', function(){
  tovarEateam122.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
//клик 8шаблон 
let photograp124 = document.querySelector('.photograp124');
let tovarEateam123 = document.querySelector('.tovarEateam123');
photograp124.addEventListener('click', function(){
  tovarEateam123.classList.remove('display');
  tovarbatonchik.classList.add('display')
})
// кнопка назад
let phtoBackPhoto125= document.querySelector('.phtoBackPhoto125');
phtoBackPhoto125.addEventListener('click', function(){
  tovarEateam123.classList.add('display');
  tovarbatonchik.classList.remove('display');
})
let photograp125 = document.querySelector('.photograp125');
let tovarEateam124 = document.querySelector('.tovarEateam124');
photograp125.addEventListener('click', function(){
  tovarEateam124.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto126= document.querySelector('.phtoBackPhoto126');
phtoBackPhoto126.addEventListener('click', function(){
  tovarEateam124.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp126 = document.querySelector('.photograp126');
let tovarEateam125 = document.querySelector('.tovarEateam125');
photograp126.addEventListener('click', function(){
  tovarEateam125.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto127= document.querySelector('.phtoBackPhoto127');
phtoBackPhoto127.addEventListener('click', function(){
  tovarEateam125.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp127 = document.querySelector('.photograp127');
let tovarEateam126 = document.querySelector('.tovarEateam126');
photograp127.addEventListener('click', function(){
  tovarEateam126.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto128= document.querySelector('.phtoBackPhoto128');
phtoBackPhoto128.addEventListener('click', function(){
  tovarEateam126.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp128 = document.querySelector('.photograp128');
let tovarEateam127 = document.querySelector('.tovarEateam127');
photograp128.addEventListener('click', function(){
  tovarEateam127.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto129= document.querySelector('.phtoBackPhoto129');
phtoBackPhoto129.addEventListener('click', function(){
  tovarEateam127.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp129 = document.querySelector('.photograp129');
let tovarEateam128 = document.querySelector('.tovarEateam128');
photograp129.addEventListener('click', function(){
  tovarEateam128.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto130= document.querySelector('.phtoBackPhoto130');
phtoBackPhoto130.addEventListener('click', function(){
  tovarEateam128.classList.add('display');
  tovarvitamin.classList.remove('display');
})
let photograp130 = document.querySelector('.photograp130');
let tovarEateam129 = document.querySelector('.tovarEateam129');
photograp130.addEventListener('click', function(){
  tovarEateam129.classList.remove('display');
  tovarkaamino.classList.add('display')
})
// кнопка назад
let phtoBackPhoto131= document.querySelector('.phtoBackPhoto131');
phtoBackPhoto131.addEventListener('click', function(){
  tovarEateam129.classList.add('display');
  tovarkaamino.classList.remove('display');
})
let photograp131 = document.querySelector('.photograp131');
let tovarEateam130 = document.querySelector('.tovarEateam130');
photograp131.addEventListener('click', function(){
  tovarEateam130.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto132= document.querySelector('.phtoBackPhoto132');
phtoBackPhoto132.addEventListener('click', function(){
  tovarEateam130.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp132 = document.querySelector('.photograp132');
let tovarEateam131 = document.querySelector('.tovarEateam131');
photograp132.addEventListener('click', function(){
  tovarEateam131.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto133= document.querySelector('.phtoBackPhoto133');
phtoBackPhoto133.addEventListener('click', function(){
  tovarEateam131.classList.add('display');
  tovarvitamin.classList.remove('display');
})
let photograp133 = document.querySelector('.photograp133');
let tovarEateam132 = document.querySelector('.tovarEateam132');
photograp133.addEventListener('click', function(){
  tovarEateam132.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto134= document.querySelector('.phtoBackPhoto134');
phtoBackPhoto134.addEventListener('click', function(){
  tovarEateam132.classList.add('display');
  tovarvitamin.classList.remove('display');
})
let photograp134 = document.querySelector('.photograp134');
let tovarEateam133 = document.querySelector('.tovarEateam133');
photograp134.addEventListener('click', function(){
  tovarEateam133.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto135= document.querySelector('.phtoBackPhoto135');
phtoBackPhoto135.addEventListener('click', function(){
  tovarEateam133.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp135 = document.querySelector('.photograp135');
let tovarEateam134 = document.querySelector('.tovarEateam134');
photograp135.addEventListener('click', function(){
  tovarEateam134.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto136= document.querySelector('.phtoBackPhoto136');
phtoBackPhoto136.addEventListener('click', function(){
  tovarEateam134.classList.add('display');
  tovarvitamin.classList.remove('display');
})
let photograp136 = document.querySelector('.photograp136');
let tovarEateam135 = document.querySelector('.tovarEateam135');
photograp136.addEventListener('click', function(){
  tovarEateam135.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto137= document.querySelector('.phtoBackPhoto137');
phtoBackPhoto137.addEventListener('click', function(){
  tovarEateam135.classList.add('display');
  tovarvitamin.classList.remove('display');
})
let photograp137 = document.querySelector('.photograp137');
let tovarEateam136 = document.querySelector('.tovarEateam136');
photograp137.addEventListener('click', function(){
  tovarEateam136.classList.remove('display');
  tovarvitamin.classList.add('display')
})
// кнопка назад
let phtoBackPhoto138= document.querySelector('.phtoBackPhoto138');
phtoBackPhoto138.addEventListener('click', function(){
  tovarEateam136.classList.add('display');
  tovarvitamin.classList.remove('display');
})
let photograp138 = document.querySelector('.photograp138');
let tovarEateam137 = document.querySelector('.tovarEateam137');
photograp138.addEventListener('click', function(){
  tovarEateam137.classList.remove('display');
  tovarka.classList.add('display')
})
// кнопка назад
let phtoBackPhoto139= document.querySelector('.phtoBackPhoto139');
phtoBackPhoto139.addEventListener('click', function(){
  tovarEateam137.classList.add('display');
  tovarka.classList.remove('display');
})
let photograp139 = document.querySelector('.photograp139');
let tovarEateam138 = document.querySelector('.tovarEateam138');
photograp139.addEventListener('click', function(){
  tovarEateam138.classList.remove('display');
  tovarka.classList.add('display')
})
// кнопка назад
let phtoBackPhoto140= document.querySelector('.phtoBackPhoto140');
phtoBackPhoto140.addEventListener('click', function(){
  tovarEateam138.classList.add('display');
  tovarka.classList.remove('display');
})
let photograp140 = document.querySelector('.photograp140');
let tovarEateam139 = document.querySelector('.tovarEateam139');
photograp140.addEventListener('click', function(){
  tovarEateam139.classList.remove('display');
  tovarka.classList.add('display')
})
// кнопка назад
let phtoBackPhoto141= document.querySelector('.phtoBackPhoto141');
phtoBackPhoto141.addEventListener('click', function(){
  tovarEateam139.classList.add('display');
  tovarka.classList.remove('display');
})
let photograp141 = document.querySelector('.photograp141');
let tovarEateam140 = document.querySelector('.tovarEateam140');
photograp141.addEventListener('click', function(){
  tovarEateam140.classList.remove('display');
  tovarka.classList.add('display')
})
// кнопка назад
let phtoBackPhoto142= document.querySelector('.phtoBackPhoto142');
phtoBackPhoto142.addEventListener('click', function(){
  tovarEateam140.classList.add('display');
  tovarka.classList.remove('display');
})
let photograp142 = document.querySelector('.photograp142');
let tovarEateam141 = document.querySelector('.tovarEateam141');
photograp142.addEventListener('click', function(){
  tovarEateam141.classList.remove('display');
  tovarka.classList.add('display')
})
// кнопка назад
let phtoBackPhoto143= document.querySelector('.phtoBackPhoto143');
phtoBackPhoto143.addEventListener('click', function(){
  tovarEateam141.classList.add('display');
  tovarka.classList.remove('display');
})
let photograp143 = document.querySelector('.photograp143');
let tovarEateam142 = document.querySelector('.tovarEateam142');
photograp143.addEventListener('click', function(){
  tovarEateam142.classList.remove('display');
 tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto144= document.querySelector('.phtoBackPhoto144');
phtoBackPhoto144.addEventListener('click', function(){
  tovarEateam142.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
let photograp144 = document.querySelector('.photograp144');
let tovarEateam143 = document.querySelector('.tovarEateam143');
photograp144.addEventListener('click', function(){
  tovarEateam143.classList.remove('display');
 tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto145= document.querySelector('.phtoBackPhoto145');
phtoBackPhoto145.addEventListener('click', function(){
  tovarEateam143.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
let photograp145 = document.querySelector('.photograp145');
let tovarEateam144 = document.querySelector('.tovarEateam144');
photograp145.addEventListener('click', function(){
  tovarEateam144.classList.remove('display');
 tovarzhirozig.classList.add('display')
})
// кнопка назад
let phtoBackPhoto146= document.querySelector('.phtoBackPhoto146');
phtoBackPhoto146.addEventListener('click', function(){
  tovarEateam144.classList.add('display');
  tovarzhirozig.classList.remove('display');
})
let photograp146 = document.querySelector('.photograp146');
let tovarEateam145 = document.querySelector('.tovarEateam145');
photograp146.addEventListener('click', function(){
  tovarEateam145.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto147= document.querySelector('.phtoBackPhoto147');
phtoBackPhoto147.addEventListener('click', function(){
  tovarEateam145.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let photograp147 = document.querySelector('.photograp147');
let tovarEateam146 = document.querySelector('.tovarEateam146');
photograp147.addEventListener('click', function(){
  tovarEateam146.classList.remove('display');
  tovarkageiner.classList.add('display')
})
// кнопка назад
let phtoBackPhoto148= document.querySelector('.phtoBackPhoto148');
phtoBackPhoto148.addEventListener('click', function(){
  tovarEateam146.classList.add('display');
  tovarkageiner.classList.remove('display');
})
let photograp148 = document.querySelector('.photograp148');
let tovarEateam147 = document.querySelector('.tovarEateam147');
photograp148.addEventListener('click', function(){
  tovarEateam147.classList.remove('display');
  tovarkabcaa.classList.add('display')
})
// кнопка назад
let phtoBackPhoto149= document.querySelector('.phtoBackPhoto149');
phtoBackPhoto149.addEventListener('click', function(){
  tovarEateam147.classList.add('display');
  tovarkabcaa.classList.remove('display');
})
let photograp149 = document.querySelector('.photograp149');
let tovarEateam148 = document.querySelector('.tovarEateam148');
photograp149.addEventListener('click', function(){
  tovarEateam148.classList.remove('display');
  tovarbatonchik1.classList.add('display')
})
// кнопка назад
let phtoBackPhoto150= document.querySelector('.phtoBackPhoto150');
phtoBackPhoto150.addEventListener('click', function(){
  tovarEateam148.classList.add('display');
  tovarbatonchik1.classList.remove('display');
})
let korzinFan = document.querySelector('.korzinFan');
let h3photo = document.querySelector('.h3photo');
let butoonmeny = document.querySelector('.butoonmeny');
h3photo.addEventListener('click', function(){
  korzinFan.classList.toggle('display');
})
butoonmeny.addEventListener('click', function(){
  korzinFan.classList.add('display');
  zakaz1.classList.add('display');
  zakaz2.classList.add('display');
  zakaz3.classList.add('display');
  formrems.classList.add('display');
})
let buttonKarta = document.querySelector('.buttonKarta');
let kartaoplata = document.querySelector('.kartaoplata');
let formrems = document.querySelector('.formrems');
buttonKarta.addEventListener('click', function(){
  zakaz3.classList.add('display');
  formrems.classList.remove('display');
})
let buttonKarta2 = document.querySelector('.buttonKarta2');
let buttonKarta3 = document.querySelector('.buttonKarta3');

buttonKarta2.addEventListener('click', function(){
  zakaz3.classList.add('display');
  formrems.classList.remove('display');
})
buttonKarta3.addEventListener('click', function(){
  zakaz3.classList.add('display');
  formrems.classList.remove('display');
})
let kraymeny = document.querySelector('.kraymeny');
let button09meny = document.querySelector('.button09meny');
button09meny.addEventListener('click', function(){
  kraymeny.classList.remove('display');
  ififi.classList.add('display')
})
let menyremove= document.querySelector('.menyremove');
menyremove.addEventListener('click', function(){
  kraymeny.classList.add('display')
})



let divremovedis = document.querySelector('.divremovedis');
let burger = document.querySelector('.burger');
burger.addEventListener('click', function(){
  divremovedis.classList.toggle('display');
})




