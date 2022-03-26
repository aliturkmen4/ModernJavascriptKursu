let num1='5';
let num2='10';

console.log(num1+num2); //bu şekilde dersem bu değerleri sayısal olarak toplamak yerine string olarak birleştirmiş oluyorum!!

console.log(typeof num1);

let num3=Number('10'); //tür dçnüşümü yaptım!
let num4=Number('22');

let total=num3+num4;

console.log(total);

console.log(typeof total);

//number to string

let val;

val=String(10); //val'e string methoduyla string olarak 10 değeri atamış oldum!

console.log(val);

console.log(typeof val);

console.log(val.length); //val'in uzunluğunu verir!

//bool to string

let val2;

val2=String(true);

console.log(val2);

console.log(typeof val2);

console.log(val2.length);

//date to string

let val3;

val3=String(new Date()); //new date() normalde object türünde burada string olarak ekrana getirdim!

console.log(val3);

console.log(typeof val3);

console.log(val3.length);

//array to string

let val4;

val4=String([1,2,3,4]);

console.log(val4);

console.log(typeof val4);

console.log(val4.length); //uzunluğunu virgülleri de saydığı için 7 karakter olarak getirir!

//toString() kullanımı

val=(10).toString(); //string'e çevirme işlemleri bu şekilde de yapılabilir!

val2=(false).toString();

//string to number

let val5;

val5=Number('10');

console.log(val5);

console.log(typeof val5);

console.log(val5.length); // buna bakarsam undefined olduğunu görürüm! sebebi length sadece stringlere özgü!

console.log(val5.toFixed(3)) //değerin virgülden sonra kaç basamağı olacağını gösterir burada 10.000 getirir!

let val6;

val6=Number(true); //true'nun number a çevrilmiş hali 1 dir!

console.log(val6);

console.log(typeof val6);

console.log(val6.toFixed(2));

let val7;

val7=Number('a');

console.log(val7); //NaN sonunucunu alırım (not a number) string ifade number'a çevrilmez!

console.log(typeof val7);

console.log(val7.toFixed(2));

let val8;

val8=Number([1,2,3,4,5]);

console.log(val8); //NaN sonucuyla karşılaşırım!

console.log(typeof val8);

console.log(val8.toFixed(2));

//parseInt
//parseFloat

val=parseInt('10'); //string olan 10 u number a kolaylıkla bu şekilde çevirebilirim!

console.log(val); //NaN sonucuyla karşılaşırım!

console.log(typeof val);

console.log(val.toFixed(2));

let val9;

val9=parseFloat('10.5');

console.log(val9); //NaN sonucuyla karşılaşırım!

console.log(typeof val9);

console.log(val9.toFixed(2));


