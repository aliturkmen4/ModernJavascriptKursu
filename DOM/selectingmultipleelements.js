//Selecting Elements

// ** Multiple Elements

// Seçimimi classname'e göre yapacaksam => 
//document.getelementByClassName()

// let val;

// val=document.getElementsByClassName('list-group-item'); //bana bir htmlcolletion verir, bunu açtığımda 4 elemanlı olduğunu görürüm!

// console.log(val);

// val=document.getElementsByClassName('list-group-item')[0]; //böyle dersem bana bu classname'i içeren 0.indexteki yani 1.elemanı getirir!

// console.log(val);

// val=document.getElementsByClassName('list-group-item')[1]; //böyle dersem bana bu classname'i içeren 1.indexteki yani 2.elemanı getirir!

// console.log(val);

// // val=val[2]; //10.satırda zaten htmlcollection'a ulaşmış durumdayım! böyle dersem de listenin içinden bu classname i içeren 3.elemanı elde edebilirim!

// // console.log(val);

// let val2;

// val2=document.getElementsByClassName('list-group-item');

// val2[2].style.color='blue'; //yukarıdaki bu classname e zaten eriştiğim için val2[2]. diyerek direkt işlemlerime devam edebilirim!
// val2[2].style.fontSize='25px';
// val2[1].textContent='new item';

// for(let i=0;i<val2.length;i++) //listedeki bütün elemanlara bir işlem uygulayacağım zaman bu şekilde döngüyle yaparım!
// {
//     console.log(val2[i].style.color='red'); //ulaştığım bütün nesnelerin renklerini kırmızı yaptım!
//     console.log(val2[i].textContent='New Item');
// }

// console.log(val2);

//--------------------------------------------------------------------------------------------------------------------------------------------

//document.getElementByTagName() kullanımı
// =>etiket isimleriyle elemanlara ulaşma

let val3;

// val3=document.getElementsByTagName('li'); //sayfadeki bütün li elemntlerini htmlcollection olarak almamı sağlar!
// console.log(val3);
val3=document.getElementById('task-list'); //ul etiketine id si ile ulaştım!
console.log(val3);
val3=val3.getElementsByTagName('a'); //sayfadaki ul etiketinin içindeki a elementlerini htmlcollection olarak almamı sağlar!
console.log(val3);

//normalde 5 tane a etiketi var ama yukarıda ul 'nin içerisindeki a etiketlerini al dediğim için 4 tane geliyor!

//--------------------------------------------------------------------------------------------------------------------------------------------

//document.querySelectorAll() kullanımı

let val4;

val4=document.querySelectorAll('li'); //bana collection değil de NODE LIST döndürür!

val4.forEach(function(item,index){
    item.textContent=`${index} - Hello`; //li elemanlarımı (indexno)-Hello formantında yazdırdım!
    console.log(item); //li elemanları teker teker ekrana yazılır!
});

console.log(val4);

//Node list foreach kullanımına olanak sağlarken!!! collection da foreach kullanamazsın!!!

val4=document.querySelectorAll('li:nth-child(odd)'); //tek sayıda olan li elementlerine eriştim! //1. ve 3.eleman (0. ve 2.index)
val4=document.querySelectorAll('li:nth-child(even)'); //çift sayıda olan li elementlerine eriştim! //2. ve 4.eleman (1. ve 3.index)
val4.forEach(function(item){
    item.style.background='#ccc'; // #ccc => gri renk
});
val4.forEach(function(item2){
    item2.style.background='#fff'; // #fff => beyaz renk
})

console.log(val4);

//--------------------------------------------------------------------------------------------------------------------------------------------

//get le başlayan methodlar collection döndürdüğü için foreach kullanımına olanak sağlamazlar!








