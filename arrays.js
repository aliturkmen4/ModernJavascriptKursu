
//birden ifadeyi bir değişken içerisine atmak istediğimizde arrayleri kullanırız!

let names=['Ali','Emin','Resul','Eray'];

let years=[1996,1990,1995,1997];

let mix=['ali','turkmen',1996,null,undefined,['sinema','kitap okuma']]; //array elemanları aynı tipten olmak zorunda değil!!

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(years.length);
console.log(typeof years);

console.log(mix);
console.log(mix.length);
console.log(typeof mix);

//get array item

console.log(names[0]); //=> ali getirir!

console.log(names[3]); //=> eray getirir!

//set array item

names[5]='Emel'; //bu şekilde dersem 5.indexe emel'i atar(4.indexe empty atar) ama dizinin uzunluğu 6 olur!!!!!! bunun önüne geçmek için aşağıdaki işlemi yap!

names[names.length]='Emrah'; // bu şekilde yaparsan eleman atlamadan(empty karaktere yol açmadan) diziye eleman eklemiş olursun!

console.log(names);
console.log(names.length);
console.log(typeof names);

//add item

years.push(1986); //years dizisinin sonuna 1986 yılını ekledim!

years.unshift(1999); //years dizisinin başına 1999 yılını ekledim!

//remove item

years.pop(); //dizinin son elemanını siler!

years.shift(); //dizinin en başındaki elemanı siler!

//indexof() metodu

let index= names.indexOf('Emin');

console.log('index: '+index); //Emin'in 1.index yani 2.eleman olduğunu bana getirir!

//reverse

names.reverse();

console.log(names);
console.log(names.length);
console.log(typeof names);

//sort

years.sort();  //sayısalsa artan bir sıraya, stringse alfabetik sıraya göre getirir!!!

//concate

let val=years.concat(names); //years dizisinin sonuna names dizisinin elemanlarını ekleyip bana getirir!

console.log(val);

//splice

names.splice(2,0,'Seda'); //NAMES IN 2.INDEXTEN BAŞLASIN, KAÇ ELEMAN SİLSİN, EKLEMEK İSTEDİĞİN ELEMANLAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

names.splice(0,1); //böyle dersem eleman silmek için kullanmış olurum! yani 0.indexten itibaren 1 elemanı sil dedim(en baştaki oluyor)!!

console.log(names);
console.log(names.length);
console.log(typeof names);

//find

function over18(year){
    let age=2022-year;
    return age>=18;
}

console.log(over18(1990)); //bana girilen tarihe göre true-false döndürür!

let val2=years.find(over18); //years içindeki doğum yıllarına göre kimin yaşı 18 den büyükse bana büyük olan ilk elemanı getirir!!!!!!!!!!!!!!!!!!!!!!!

console.log(val2);

//filter

function over18(year){
    let age=2022-year;
    return age>=18;
}

let val3=years.filter(over18); //years içindeki doğum yıllarına göre kimin yaşı 18 den büyükse bana o elemanları dizi olarak getirir!!!!!!!!!!!!!!!!!!!!!!!

console.log(val3);
