//Operators

let val;

const a=10;

const b=5;

let c=3;

//1.Aritmetik Operatörler

val=a+b;

val=a-b;

val=a*b;

val=a/b; //b değeri 0 olursa çıktı olarak infinity gelir! 

val=a%b; //mod alma

val=c++; //arttırma işlemi, önce c yi val'in içerisine atar sonra c'yi arttırır, o yüzden burada 3 çıktısı gelir!

val=++c; //arttırma işlemi, önce c'yi attırır sonra val'in içine atar!

console.log(val); 

console.log(typeof val);

console.log(c);

val=--c; //azaltma işlemi, önce c'yi azaltır sonra val'in içine atar!

val= c--; //azaltma işlemi, önce c yi val'in içerisine atar sonra c'yi azaltır!

console.log(val); 

console.log(typeof val);

console.log(c);

//2.Atama Operatörleri

val+=c; //val=val+c

console.log(val);

val-=c; //val=val-c;

val*=c; //val=val*c;

val/=c; //val=val/c;

val%=c; //val=val%c;

console.log(val); 

console.log(typeof val);

console.log(c);

//3.Karşılaştırma Operatörleri

let val2;
let val3;
let val4;
let val5;
let val6;
let val7;

let d=3;

let e=9;

const f=5;

const g=3;

val2= d==e; //d ve e eşit mi ? boolean türünde sonuç döndürür!

console.log(val2);

console.log(typeof val2);

val3=d==g;

console.log(val3);

console.log(typeof val3);

val4= d===g; // 3 eşittir kullanınca hem değer hem de tip kontrolü yapılıyor!

console.log(val4);

console.log(typeof val4);

val5= 5==='5';

console.log(val5); //burada false sonucu alırım çünkü tip kontrolüne göre biri number biri string!

console.log(typeof val5);

val6= d!=g; //d g'ye eşit değil mi? eşit olduğu için false alırım!

console.log(val6); 

console.log(typeof val6);

val7=6!=='6'; //number 6 string olan 6'ya eşit değil mi? hem tip hem değer kontrolü yapıldığından burada true alırım!

console.log(val7); 

console.log(typeof val7);

//4.Mantıksal Operatörler

let val8;
let val9;
let val10;

let w=10;
let z=11;
let h=12;
let t=10;

// && (And)

// true && true => true
// true && false => false
// false && false => false

val8=(z>w) && (h>t); //true-false döndürür true olması için iki koşulunda doğru olması gerekir!

console.log(val8); 

console.log(typeof val8);

// || (Or)

// true || true => true
// true || false => true
// false || false => false

val9=(z>w)||(t>=w); // sol taraf false sağ taraf true, or operatöründen 1 ||0 =1 olduğu için true sonucu alırım!

console.log(val9); 

console.log(typeof val9);

// ! (Not)

// !true=false
// !false=true

val10= !(t>z); // t z den küçük olduğu için false gelir, değilini alınca true olur!

console.log(val10); 

console.log(typeof val10);