// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırın!

var d=new Date();

console.log(d.getMonth()+1); //0dan başladığı için 1 ekledim!

console.log(d.getDate());

console.log(d.getFullYear());

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturun.

var dtA= new Date('8/24/2010 14:50:11'); //bu şekilde date objesini oluşturabilirim!

console.log(dtA);

var dtB=new Date(2010,7,24,14,50,11); //bu şekilde de date objesini oluşturabilirim!

console.log(dtB);

// ** 1/1/1990 tarihinden bir önceki günü gösteriniz.

var dtC=new Date('1/1/1990');

console.log(dtC);

var dayOfMonth=dtC.getDate();

dtC.setDate(dayOfMonth-1); //1'den (ayın ilk günü) 1 çıkarınca bir önceki ayın son gününe(31 e ) gideceğini söymeiş olduk!

console.log(dtC);

// ** İki tarih arası geçen zamanı bulunuz.

var start=new Date('1/1/1990');

var finish=new Date('1/1/1991');

var milisecond=finish-start; //aradaki farkı milisecond cinsinden alır!

var saniye= milisecond/1000; //milisecond'ı saniye ye çevirdim!

var dakika=saniye/60; //saniyeyi dakikaya çevirdim!

var saat=dakika/60; //dakikayı saate çevirdim!

var gun=saat/24; //saati güne çevirdim!

console.log('milisecond: '+milisecond);

console.log('second: '+saniye);

console.log('minute: '+dakika);

console.log('hour: '+saat);

console.log('day: '+gun);

// ** Her yıl mayıs aynının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?

var annelerGunu=new Date();

console.log(annelerGunu);

annelerGunu.setHours(0,0,0,0); //saat bilgisini milisaniyeye kadar sıfırladım!

annelerGunu.setFullYear(2019);

annelerGunu.setDate(1); //anneler gününü tarihin 1.günü olarak atadım!

annelerGunu.setMonth(4); //mayıs ayına atadım!

console.log(annelerGunu.getDay()); //buradan bakınca anneler gününün şu anda 3.günde yani çarşamba da olduğunu görüyorum ben,m istediğim pazar günü yani 0 da olması!

while(annelerGunu.getDay()!=0) //anneler günü 0 a eşit olmadığı sürece 1 ekleyeceğim!
{
annelerGunu.setDate(annelerGunu.getDate()+1);
}

annelerGunu.setDate(annelerGunu.getDate()+7); //2.hafta pazat olduğu için 1 hafta ekledim!

console.log(annelerGunu);

// ** Yaş hesaplama nasıl yapılır?

var birthday=new Date('3/17/1996');

var ageDifMs=Date.now()-birthday.getTime(); //iki tarih arasındaki farkı milicesond cinsinden bulmuş oldum!

var age= new Date(ageDifMs); //içine milisecond verdim bana tarih olarak verecek! (içerisinde 1970 de oluyor yaş hesaplamak için bunu çıkar!)

console.log(age.getFullYear()-1970);