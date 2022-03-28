/*20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir.
  Bu bilgilere göre servis uyarısını veriniz.
  1.Bakım:1 yıl
  2.Bakım:2 yıl
  3.Bakım:3 yıl
*/

var trafigeCıkıs=new Date('04/20/2020');
trafigeCıkıs.setHours(0,0,0,0);

var trafiktekiMs=Date.now()-trafigeCıkıs.getTime(); //Date.now() => ms cinsinden bana değer verir! getTime()=>ms geriye döndürür!

var trafiktekiGun=trafiktekiMs/(1000*60*60*24); // ms'yi güne çevirdim!

console.log(trafiktekiMs);

console.log(Math.floor(trafiktekiGun)); //günü yuvarladım!

if(trafiktekiGun<=365)
{
    console.log('1.servis bakım süreniz geldi!');
}
else if(trafiktekiGun>365 && trafiktekiGun<=730)
{
    console.log('2.servis bakım süreniz geldi!');
}
else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3)
{
    console.log('3.servis bakım süreniz geldi!');
}
else
{
    console.log('Bilinmeyen bir süre!');
}