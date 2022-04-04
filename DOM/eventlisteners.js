//Event Listeners

const btn=document.querySelector('#btnDeleteAll'); //btnDeleteAll id sine sahip item'ı seçtim!

const btn2=document.querySelector('#btnAddNewTask');

btn.addEventListener('click',function(){ //hangi işlemi yapacağımı yazıyorum, ardından 2.parametre olarak function açıyorum!
    console.log('btn clicked!');
});

// btn.addEventListener('click',btnClick); //bu şekilde dışarıda hazırladağım fonksiyonu da parametre olarak yazabilirim!

// function btnClick(){
//     console.log('btn clicked!')
// }

// btn2.addEventListener('click',btnClick); //burada btn ve btn2 olmak üzere iki ayrı nesne var ve aynı fonksiyon aracılığıyla click işlemimi gerçekleştirebiliyorum!

// function btnClick2(){
//     console.log('btn 2 clicked!')
// }

// btn.addEventListener('click',btnClick2); //bir buton için 2 click olayı atayabilirim!

//a etiketinin normalde görevi bir linke gitmek!

btn.addEventListener('click',function(e){ //hangi işlemi yapacağımı yazıyorum, ardından 2.parametre olarak function açıyorum!
   
    let val;
    val=e;
    val=e.target; //hangi butonun tıklandığını bana verir!
    val=e.target.id; //tıklanan objenin id bilgisini verir!
    val=e.target.classList; //objenin kaydettiği classList ler bana bir obje halinde gelir!
    val=e.type; //type ını yani click i bana verir!
    console.log(val); //bana mouseevent i verir!
    e.preventDefault(); //scroll barın sabit kalmasını sağladım delete all'a tıklayınca aşağı yukarı kaymıyor! (linke gitmesinin önünü kesmiş oldum!)
});