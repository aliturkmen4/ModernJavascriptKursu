/*
    Demo Loops: Sayı Tahmin Oyunu
    
    1-10 arassı rastgele üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.

    **puanlama yapın

    **kullanıcı kaç kerede bileceğini belirtebilsin!
*/

var hak;

var can;

var tahmin,sayac=0;

let sayi=Math.floor(Math.random()*10+1); // 0 ile 10 arasında sayı ürettim yuvarladım ve 1 den başlaması için 1 ekledim!

can=Number(prompt('kaç kerede bileceksiniz?'));

hak=can;

console.log(sayi);

while(hak>0)
{
    hak--;
    sayac++;
    tahmin=Number(prompt('Bir sayi giriniz:')); //sayısal bir değer olmak zorund olduğu için number türünde olacağını belirttim!

    if(sayi==tahmin)
    {
        console.log('Tebrikler '+ sayac + ' . denemede bildiniz!');
        console.log(`puan : ${100-(100/can)*(sayac-1)}`); //bildiğim soruda puan düşmemesi ve ya 1 yanlış yaptığım 20 puan düşmesi gibi işlemler için sayac-1 dedim! 100/can ise tahmin sayısına göre azalacak puanlamının doğru orantısında kullanılır!
        break;
    }
    else if(sayi>tahmin)
    {
        console.log('yukarı');
    }
    else
    {
        console.log('aşağı');
    }

    if(hak==0)
    {
        console.log('hakkınız bitti! üretilen sayı: '+sayi);
    }

}

