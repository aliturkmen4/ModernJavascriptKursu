//Fuctions => yazdığımız kodu birden fazla kullanma ihtiyacı duyuyorsak fonksiyon içine alıp defalarca kullanbiliriz!

function yasHesapla(dogumYili){
    return new Date().getFullYear()-dogumYili;
}

let age=yasHesapla(1996);

let age1=yasHesapla(1990);

let age2=yasHesapla(2001);

console.log(age);

console.log(age1);

console.log(age2);

//fonksiyon içinde fonksiyon çağırma örnek!

function EmekliligeKacYilKaldi(dogumyili,isim){
    let yas=yasHesapla(dogumyili);
    
    let emeklilik= 65-yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmanıza ${emeklilik} sene kaldı!`);
    }
    else{
        console.log(`${isim} zaten ${Math.abs(emeklilik)} senedir emeklisiniz!`);
    }   
}
EmekliligeKacYilKaldi(1996,'ali');
EmekliligeKacYilKaldi(1997,'eray');
EmekliligeKacYilKaldi(1990,'emin');
EmekliligeKacYilKaldi(1956,'adem');
