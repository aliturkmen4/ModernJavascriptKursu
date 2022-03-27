var sentence="  Template Literals or template strings is the ability Have multi-line strings without ant funny business.  ";

var url= "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

//cümle kaç karakterlidir?

console.log(sentence.length);

//kaç kelimeden oluşuyor?

console.log(sentence.trim().split(' ').length); //önce boşlukları temizledim sonra split ile dizi halinde kelimeleri yazdırdım(kaç kelime olduğunu da length ile aldım!)

//tüm cümleyi küçük harfe çevirin.

console.log(sentence.toLowerCase());

//cümlenin başındaki ve sonundaki boşlukları siliniz.

console.log(sentence.trim());

//'-' karakterini siliniz.

console.log(sentence.replace('-','')); //- karakterini arada boşluk olmayan bir alanla değiştirdim!

//url'nin içinden str kısmını çıkarınız

var str='http://';

console.log(url.substring(str.length)); //başlanngıç karakteri belirtmezsem default olarak baştan başlatır!
console.log(url.split(str.length)); 

//url hangi protocolü kullanmaktadır? (http,https)

console.log(url.startsWith('http')); //eğer string ifadem http ile başlıyorsa bana true döndürür!!!!!

//url '.com' ifadesini içeriyor mu?

console.log(url.indexOf('.com')); //burada 17 sonucunu alırım .com 'un başlangıç indexi!!!!!!!!!!!!

//url string ifadesini geçerli bir url olarak düzenleyiniz!

console.log(url.toLowerCase()
.replace(/ /g,'-') //BU ŞEKİLDE DERSEM / / KARAKTERLERİ ARASINA NE KOYARSAM BUNU VİRGÜLDEN SONRA BELİRTTİĞİM KARAKTERLE ONU DEĞİŞTİRİRİM(BÜTÜN STRİNG İFADE İÇİN)
.replace(/ı/g,'i')
.replace(/ö/g,'o')
.replace(/ü/g,'u')
.replace(/ş/g,'s')
.replace(/ğ/g,'g')
.replace(/ç/g,'c')
);

