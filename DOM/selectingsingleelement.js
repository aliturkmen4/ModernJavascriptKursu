//Selecting Elements

// ** Single Elements 

//Single element seçerken------------------------- 

//=> document.getelementById() methodu kullanılır!
//=> document.querySelector() methodu kullanılır!

let val3;

val3=document.getElementById('header'); //=>sayfanın üzerindeki header elementini seçmiş oldum!
val3=document.getElementById('header').id; //bana id sini getirir!
val3=document.getElementById('header').className; //class ı app-title olduğu için bana onu getirir!


let val4;
val4=document.getElementById('header');

//val2=val2.id; //sürekli getelementbyid kullanmama gerek yok atadığım değişkenden de erişebilirim!
//val2=val2.className; //buna ulaşmak için bi üstteki satırı yorum satırı yapmalıyım çünkü val2.id'nin classname'ine ulaşmaya çalışır!

val4.style.fontSize='45px'; //header'ın px ini 45 yaptım!
val4.style.color='red'; //header'ın rengini kırmızı yaptım!
val4.style.fontWeight='bold'; //header'ın yazı tipini kalınlaştırır!
//val4.style.display='none'; //header'ı ekrandan kaybeder!

document.getElementById('header').innerText='My ToDo App'; //h1 etiketi içerisindeki text'i tanımlamamıza yarar!

document.getElementById('header').innerText='<b> My ToDo App </b>'; //böyle yaparsam <b> yi html etiketi olarak algılamaz! bunun için aşağıdakini yap!

document.getElementById('header').innerHTML='<b> my ToDo App </b>'; //<b> yi html etiketi olarak algılamasını innerHtml sağladı!

console.log(val3);
console.log(val4);

//document.querySelector() kullanımı

let val5;
val5=document.querySelector('#header'); // id ye göre seçim yaparken # işaretliyle seçim yaparsın!
console.log(val5);

let val6=document.querySelector('.card-header'); //class a göre seçim yaparken . işaretiyle seçim yaparsın!
//aynı class tan 2 tane varsa bulduğu ilk elemanı seçer!
console.log(val6);

let val7=document.querySelector('h1'); //direkt olarak h1 etiketini seçer!
console.log(val7);

let val8=document.querySelector('div'); //bulduğu ilk div'i bana getirir!
console.log(val8);

document.querySelector('li').style.color='red'; //listede bulduğu ilk elemanı kırmızı yapar! (ilk to do item'ı)

document.querySelector('li:last-child').style.color='blue'; //listede bulduğu son elemanı mavi yapar!

document.querySelector('li:nth-child(2)').style.color='yellow'; //listede bulduğu ikinci elemanı sarı yapar!

document.querySelector('li:nth-child(3)').textContent='task item'; //listenin 3.elemanına task item değerini atadım!

//innertext ve textcontent aynı amaç için kullanılır!

document.querySelector('li').classList.add('active'); //listelerden ilkine var olan classların üstüne active classını da ekler!


// document.querySelector('li').className='item-primary'; //böyle dersem listenin ilk elemanındaki classları siler ve item-primary 'i ekler!