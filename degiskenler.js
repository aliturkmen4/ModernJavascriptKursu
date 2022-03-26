var age; //değişken tanımlaması bu şekilde!
console.log(age);

age=20; //tanımlamış olduğum değişkenin içine atılan değere göre tip tanımlaması yapılıyor!!
console.log(age);

var fullname='Ali Tükmen';
console.log(fullname);

//console ekranında sayısal ifadeler mavi, string ifadeler gri renginde gelir!

fullname='Emin Türkmen';
console.log(fullname);

//Değişken Tanımlama Kuralları

//1.Sayısal ifadeyle başlayamaz!(1yas..)

var yas1;
var _yas2;
var $yas3;

//2.Komut isimleriyle tanımlama yapılamaz!(for,switch...)

//3.Birden fazla kelime

var ad='ali';
var soyad='turkmen';

var ad_soyad='ali turkmen';

//4.Case sensitive (büyük küçük harf duyarlılığı var!)

var firstname='ali';
var firstName='emin';

console.log(firstName);
console.log(firstname);

//5. var , let , const

//var ile tanımlanan bütün değişkenler let ile de tanımlanabilir!

let city='Kocaeli';
console.log(city);

const email='abc@gmail.com';
console.log(email);

email='bcd@gmail.com';
console.log(email); //böyle dersem hata alırım çünkü emaili const yani sabit tanımladım!



