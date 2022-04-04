//Local Storage => belli url ile ilişkilendirilmiş yapıları tarayıcı kapansa bile saklar!!!!!!!!!!

//set item

const firstName=localStorage.setItem('firstName','Ali');

const lastName=localStorage.setItem('lastName','Türkmen');

let hobbies=['sinema','araba','gezmek'];

//proto kısmı sessionstorage ile aynı!

//get item

let val;

val=localStorage.getItem('firstName');
val=localStorage.getItem('lastName');

//remove item

localStorage.removeItem('firstName'); //silmek istediğin elemanın ismini ver!
localStorage.removeItem('lastName'); 

//clear

localStorage.clear(); //bütün bilgileri siler!

// set array to storage

// localStorage.setItem('hobbies',hobbies); //böyle dersem stroga kısmına string bilgi gibi yazdırır!

localStorage.setItem('hobbies',JSON.stringify(hobbies)); //bana hobbies elemanlarını bir dizi objesi olarak kaydeder!

val=JSON.parse(localStorage.getItem('hobbies')); //local storage içerisindeki dizi elemanlarını sayfa içerisinde kullanabileceğim bir dizi elemanına çevirdim!

console.log(val);
console.log(localStorage);

//Session Storage => tarayıcı kapandığı anda buradaki bilgiler gider!

// const city=sessionStorage.setItem('city','Antalya');

// const country=sessionStorage.setItem('country','Türkiye');

// console.log(sessionStorage); //proto kısmı localstorage ile aynı!

