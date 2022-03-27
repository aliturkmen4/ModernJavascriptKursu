//Date Objects

let d=new Date(); //şuanki tarih bilgisini içeren bir obje tanımlamış oluyorum!

let bithday=new Date(1996,2,17);

//Set Metotları--------------------------------------------------

d.setFullYear(2020); //year'ın içine kendim atama yaptım!

d.setMonth(5);

d.setDate(20); //gün bilgisini değiştirir!

d.setHours(10); //saat bilgisini değiştirir!

d.setMinutes(45);

d.getSeconds(49); //saniye bilgisini değiştirir!

//Get Metotları--------------------------------------------------

console.log(d.getDate()); //bugün ayın kaçı olduğunu getirir!

console.log(d.getDay()); //(0-6) arasında haftanın kaçıncı günü olduğunu söyler!

console.log(d.getFullYear()); //bize yıl bilgisini getirir!

console.log(d.getHours()); // şuanki saat bilgisini getirir!

console.log(d.getMonth()); //0'dan başlayarak bize ay bilgisini getirir! (temmuz ayı 6 olarak gelir,ocak 0 vb.)

console.log(d.getMinutes()); //şuanki dakika bilgisini getirir!

console.log(d.getSeconds()); //şuanki saniye bilgisini alır!

console.log(d.getFullYear()-bithday.getFullYear()); //yaşını hesaplamış oldum!

console.log(d.getMonth()-bithday.getMonth()); //aylar arasındaki fark!

console.log(d.getDate()-bithday.getDate()); //günler arasındaki fark!

console.log(d);

console.log(typeof d);

