
//Browser ve NodeJs tarafında kodumuzun çalıştırılmasının farkı browser tarafında engine e ek olarak window objesinin de olması!


let val;

var a=10;

function abc(){
    return 0;
}

val=window; 

//burada baktığım zaman val'in içine 10 değerinin de geldiğini görürüm!
//Yani sayfada tanımladığım eleman window objesinin bir elemanı oluyor!

//------------------------------------------------------------------------------

//alert metodu

alert('Merhaba');

//------------------------------------------------------------------------------

//prompt komutu

var b=prompt('bir sayı giriniz:');

console.log(b);

//------------------------------------------------------------------------------


var confirm=confirm('Emin misiniz?');

if(confirm)
{
    console.log('ok');
}
else
{
    console.log('no');
}

console.log(confirm);

//------------------------------------------------------------------------------

val=window.scrollX; //yatay eksende scroll barın nerede açıldığı(konumunu verir!)

//window yazmana da gerek yok scrollX yazınca da karşına gelir!

console.log(val);

//------------------------------------------------------------------------------

val=window.scrollY; //dikey eksende scroll barın nerede açıldığı(konumunu verir!)

//window yazmana da gerek yok scrollX yazınca da karşına gelir!

console.log(val);

//------------------------------------------------------------------------------

//location => şuanki tarayıcının adresi ile alakalı bilgi almamızı sağlar!

val=window.location;

console.log(val);


val=window.location.href; //=>tarayıcıdaki adresi olduğu gibi almamızı sağlar!

console.log(val);


val=window.location.hostname;

console.log(val);


val=window.location.host; //=>port numarasıyla beraber almış oluruz!

console.log(val);


val=window.location.protocol; //=>hangi protokolu kullandığı bilgisi!

console.log(val);


val=window.location.search; // => query string bilgisi almamızı sağlar!

console.log(val);

// window.location.href='http://sadikturan.com'; //bu sayfaya yönlendirmeye yarar!

/// window.location.reload(); //sayfaya sürekli refresh atmaya yarar!

// console.log(val);

//------------------------------------------------------------------------------

//navigator 

let val2=window.document; // =>sayfa üzerindeki html yapısını bana getirir!

console.log(val2);


document.getElementById('header'); // => sayfa üzerindeki herhangi bir elemanı almaya yarar!

console.log(val);

// document objesi=> bana DOM kullanımıyla alakalı bir özellik sağlar!

