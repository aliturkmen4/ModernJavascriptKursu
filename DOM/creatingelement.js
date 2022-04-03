//Creating Elements

//create element

const li=document.createElement('li'); //li elementi oluşturdum!

//add class

li.className='list-group-item list-group-item-secondary'; //li elementine class özelliğini ekledim!

//add attribute

li.setAttribute('title','new item'); //li etiketine bir adı new item olan bir title ekledim!

li.setAttribute('data-id','5');

//text node

const text=document.createTextNode('To do item');

li.appendChild(text); //li elementinin child'ı olarak eklememi sağlar!

const a=document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>'; //innerhtml olarak vermezsen ikonu html olarak algılamaz ve çarpı ikonu çıkmaz!

//append a to li

li.appendChild(a); //a li'nin bir alt elemanı olacak!

//append li to ul

document.querySelector('#task-list').appendChild(li); //id ye göre seçim yaptım (# koy!) ul listesini çağırıp appendchild ile atadım!

console.log(li);