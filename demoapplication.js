// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz!

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tckimlik 
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

let customerName='Ali';
let customerLastName='Türkmen';

var fullName='Ali Türkmen';
var musteriId='12345678987';

let total=205.6;
let gender='erkek';
let gender1=true; //true=erkek,false=kadın kabul edebiliriz!

var adress={ //bunu object türünde tutmam daha mantıklı!
    city: 'Antalya',
    district:'Serik',
    body:'Kadriye'
}

var hobbies=['Sinema','Kitap','Spor'];

// ** Aşağıda verilen bilgilere göre sipariş toplamını hesaplayınız!

var order1=Number('100');
var order2=Number('150');

var totall= order1+order2;

console.log(totall);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız!

var order3=parseInt('100.5'); //parseInt virgülden sonraki kısımları gözardı eder!
var order4=parseInt('150.2');

var sum=order3+order4;

console.log(sum);

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız!

const yearOfBirth=1986; //yaş bilgisi değiştirilirse hata vermesi için const yaptım!! (değeri sabitledim!)

console.log(new Date().getFullYear()-yearOfBirth);

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz!

var coursee='Modern Javascript Kursu';

console.log(coursee.length);
