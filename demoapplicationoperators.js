//1- Can ve Ada'nın bol ve kg bilgilerini alın.
//2- Alınan bilgilere göre kilo indekslerini hesaplayın!
// **Formül= Kişinin kilosu / boy uzunluğunun karesi
//3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
//4- Aşağıdaki tablo bilgisine göre Can ve Ada hangi gruba giriyor!

//0-18,4:Zayıf
//18,5-24,9:Normal
//25,0-29,9:Fazla Kilolu
//30,0-34,9:Obez

const kgCan=84;
const kgAda=55;

const boyCan=1.79;
const boyAda=1.63;

var totalCan=(kgCan/((boyCan)*(boyCan)));

var totalAda=(kgAda/((boyAda)*(boyAda)));

var comprasion= (totalAda>totalCan);

console.log(totalCan.toFixed(2)); //tofixed() kullanırsam tam sayı olarak yuvarlar!

console.log(totalAda.toFixed(2)); //tofixed(2) yazarsam virgülden sonra iki basamağı getirir!

console.log("Ada'nın kilo indexi Can'ın kilo indexinden daha büyük: "+comprasion);

let AdaZayif= (totalAda>0) && (totalAda<=18.4);
let AdaNormal= (totalAda>18.4) && (totalAda<=24.9);
let AdaFazlaKilolu= (totalAda>24.9) && (totalAda<=29.9);
let AdaObez= (totalAda>29.9) && (totalAda<=34.9);

console.log("Ada zayıf: "+AdaZayif); //bu if bloğu kullanmadan yapınca hangisine karşılık gelirse index o true olacak diğerleri false olacak!
console.log("Ada normal: "+AdaNormal);
console.log("Ada fazla kilolu: "+AdaFazlaKilolu);
console.log("Ada obez: "+AdaObez);

let CanZayif= (totalCan>0) && (totalCan<=18.4);
let CanNormal= (totalCan>18.4) && (totalCan<=24.9);
let CanFazlaKilolu= (totalCan>24.9) && (totalCan<=29.9);
let CanObez= (totalCan>29.9) && (totalCan<=34.9);

console.log("Can zayıf: "+CanZayif); //bu if bloğu kullanmadan yapınca hangisine karşılık gelirse index o true olacak diğerleri false olacak!
console.log("Can normal: "+CanNormal);
console.log("Can fazla kilolu: "+CanFazlaKilolu);
console.log("Can obez: "+CanObez);