//Event Bubbling  => içten dışa doğru aktarım!

const form=document.querySelector('#addTaskForm');

const cardBody=document.querySelector('.card-body');

const card=document.querySelector('.card');

const container=document.querySelector('.container');

form.addEventListener('click',function(e){
    console.log('form');
    e.stopPropagation(); //event bubbling'i iptal etmek için kullanılır!
});

cardBody.addEventListener('click',function(e){
    console.log('card body');
    e.stopPropagation();
});

card.addEventListener('click',function(e){
    console.log('card');
    e.stopPropagation();
});

container.addEventListener('click',function(e){
    console.log('container');
    e.stopPropagation();
});

//Event Capturing => dıştan içe doğru aktarım!

form.addEventListener('click',function(e){
    console.log('form');
    e.stopPropagation(); //formun içine tıkladığımda container getirdi, sebebi tersten sıralatıp ilkini almam!
},true); //event capturing yapmak için yapmam gereken buraya true yazmak!

cardBody.addEventListener('click',function(e){
    console.log('card body');
    e.stopPropagation();
},true);

card.addEventListener('click',function(e){
    console.log('card');
    e.stopPropagation();
},true);

container.addEventListener('click',function(e){
    console.log('container');
    e.stopPropagation();
},true);

const deleteItems=document.querySelectorAll('.fa-times');

deleteItems.forEach(function(item){
    item.addEventListener('click',function(e){
       console.log(e.target); 
    });
});

console.log(deleteItems);

const ul=document.querySelector('ul');

ul.addEventListener('click',function(item){
    
    if(item.target.className=='fas fa-times')
    {
        console.log('icon'); //icona tıkladığımda ekrana ikon ibaresi gelir!
        item.target.parentElement.parentElement.remove(); //li elementine ulaşıp ondan da liste elemanlarını silmeme yarar! 
        item.preventDefault();
    }
    
    console.log(item.target); //hangi elemana tıklarsam o elemanın target özelliğini ekrana yazdırır!
});


