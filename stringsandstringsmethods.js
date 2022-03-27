//Strings

const firstName='Ali';

const lastName="Türkmen";

const age=26;

let val;

//string concatenation

val=firstName+' '+lastName;

console.log(val);

console.log(typeof val);

let val2;

val2='Ali';

val2+= ' Türkmen';

console.log(val2);

console.log(typeof val2);

let val3;

val3='Benim adım '+firstName+' '+'soyadım '+lastName+' '+'ve yaşım '+age+' '+"antalya'da yaşıyorum."; //tek tırnak kullancaksan string ifadeyi sorun olmaması için çift tırnak içine alabilirsin!

console.log(val3);

console.log(typeof val3);

let val4='Benim adım '+firstName+' '+'soyadım '+lastName+' '+'ve yaşım '+age+' '+'antalya\'da yaşıyorum.'; //tek tırnak kullancaksan kesme işaretinden önce \ kullanırsan da sorun yaşamazsın!

console.log(val4);

console.log(typeof val4);

//string concat methodu

val=firstName.concat(' ',lastName); //bu şekilde de string ifadeler birleştirilebilir!

console.log(val);

//string length

let val1='Ali Türkmen';

val1=val1.length; //bu bir property olduğu için sonuna () koymuyoruz!

console.log(val1);

console.log(typeof val1);

//string uppercase-lowercase

val=val.toLowerCase(); //bütün ifadeyi küçük harfe çevirir!

console.log(val);

console.log(typeof val);

val=val.toUpperCase(); //bütün ifadeyi büyük harfe çevirir!

console.log(val);

console.log(typeof val);

val=val[0]; //val değişkeninin 1.harfi demek!

val=val[1]; //val değişkeninin 2.harfi demek!

let vall='Ali Türkmen';

vall=vall.indexOf('ü'); //val string ifadesinin içinde ü karakterini ara kaçıncı index olduğunu bana getir!

console.log(vall);

//olmayan bir karakteri indexOf() ile ararsan -1 sonucunu alırsın!

//string substring

let val5='Ali Türkmen';

val5=val5.substring(0,5); //0.indexten başlar 5.indexe kadar olan (5 dahil değil) kısımları bana getirir! (string bölme)

console.log(val5);

let val6='AliTürkmen';

val6=val6.slice(3,8); //3.indexten başlar 8.indexe kadar olan (8 dahil değil) kısımları bana getirir! (string bölme)

console.log(val6);

let val7='Ali Türkmen';

val7=val7.substring(5); //5.indexten başlar string sonuna kadar olan kısımları bana getirir! (string bölme)

console.log(val7);

//string search

//string replace() methodu

let val8='Ali Türkmen';

val8=val8.replace('Ali','Emin'); //içerisine değiştirmek istediğin değerleri gir!

console.log(val8);

//trim

let val9=' ' + 'Ali Türkmen' + '                  ';

val9=val9.trim(); //başındaki ve sonundaki boşlukları siler!

console.log(val9);

let hobbies='sinema,spor,kitap,yazılım';

let val10;

val10=hobbies.split(','); //virgül karakterinden elemanları ayırır, bana 4 elemanlı bir dizi döndürür!

console.log(val10);

console.log(typeof val10);