//Numbers
let val;

val=10;

console.log(val);

console.log(typeof val);

let val2=Number('15');

console.log(val2);

console.log(typeof val2);

let val3=parseInt('11.3'); //string ifadeyi number a dönüştürüp yuvarlama yapar!

console.log(val3);

console.log(typeof val3);

let val4=parseFloat('16.9'); //string ifadeyi number a dönüşütürdüm AMA YUVARLAMA YAPMADIM ONDALIKLI BIRAKTIM!

console.log(val4);

console.log(typeof val4);

let val5=parseInt('19A'); //string ifadeyi number a dönüştürür dönüştürülemeyen string ifadeyi atar!!!

console.log(val5);

console.log(typeof val5);

let val6=parseInt('a20a'); //string ifadeyi number a dönüştüremeyince NaN ifadesini alırım(bu sayının number a dönüştürülemeyeceği anlamına gelir!)

console.log(val6);

console.log(typeof val6);

let val7=isNaN('a48b'); //bize dönüştürülüp dönüştürülemeyen bir değer olduğunu boolean olarak (true-false) şeklinde geri döner!

console.log(val7);

console.log(typeof val7);

let val8=10.12343546;

let val9=val8.toPrecision(2); //NUMBER BİR İFADEYİ STRINGE ÇEVİRİR,PARANTEZ İÇİNDEKİ(2) KAÇ BASAMAĞI GETİRECEĞİDİR!! virgünden sonra kaç basamak istiyorsan almağı kısmı yuvarlayıp son basamağı o şekilde yazar!!!!!

console.log(val9);

console.log(typeof val9);

let val10=Math.PI;

console.log(val10);

console.log(typeof val10);

let val11=Math.round(2.4); //2 olarak getirir! (en yakın tam sayıya yuvarlar)

console.log(val11);

console.log(typeof val11);

let val12=Math.ceil(2.1); //sayıyı her zaman yukarı yuvarlar! (2.1 => 3)

console.log(val12);

console.log(typeof val12);

let val13=Math.floor(2.9); //sayıyı her zaman aşağı yuvarlar! (2.9 => 2)

console.log(val13);

console.log(typeof val13);

let val14=Math.sqrt(64); //sayının karekökünü alır!

console.log(val14);

console.log(typeof val14);

let val15=Math.pow(2,3); //2 sayının 3. kuvvetini alır (8)!

console.log(val15);

console.log(typeof val15);

let val16=Math.abs(-100); //mutlak değer alır!

console.log(val16);

console.log(typeof val16);

let val17=Math.min(1,3,6,44,2,3,9); //burada bu sayılar arasındaki en küçük sayıyı bana verir! (dizi olarak tutar!)

console.log(val17);

console.log(typeof val17);

let val18=Math.max(1,3,6,44,2,3,9); //burada bu sayılar arasındaki en büyük sayıyı bana verir! (dizi olarak tutar!)

console.log(val18);

console.log(typeof val18);

let val19=Math.random(); //bana 0 ile 1 arasında random sayı üretir!

console.log(val19);

console.log(typeof val19);

let val20=Math.floor((Math.random()*10)); //bana 0 ile 9 arasında random tam sayılar üretir!

console.log(val20);

console.log(typeof val20);





