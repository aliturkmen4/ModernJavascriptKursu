var num=15.123456789;

//toplamda 3 basamaklı sayı kullan!

console.log(num.toPrecision(3)); //tam kısım ve ondalık kısm olarak toplam 3 basamak!

//ondalık kısmı 3 basamakta sınırlı tut!

console.log(num.toFixed(3));

//en yakın sayıya yuvarla

console.log(Math.round(num));

//aşağı yuvarla

console.log(Math.floor(num));

//yukarı yuvarla

console.log(Math.ceil(num));

//1,2,10,56,20 sayılarının en küçüğünü ve en büyüğünü bul

console.log(Math.min(1,2,10,56,20));

console.log(Math.max(1,2,10,56,20));

//sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin!

var min=50;

var max=100;

console.log(min+Math.random()*(max-min));

/* Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım.
** Brüt Maaş: 3700 TL
** Brüt Mesai: 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/

var brutMaas=3700;

var mesaiUcreti=10.3;

var mesaiSuresi=42;

var toplamBrutMaas=brutMaas+(mesaiUcreti*mesaiSuresi);

console.log(toplamBrutMaas);

var toplamNetMaas=toplamBrutMaas-(toplamBrutMaas*0.25);

console.log(toplamNetMaas.toFixed(3));