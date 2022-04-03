const taskList=document.querySelector('#task-list'); //komple ul nesnesini aldım!

// **removing element

taskList.remove(); //=> listenin kendisi bu şekilde silinir!

taskList.childNodes[1].remove(); //listenin 2.elemanını siler!

taskList.children[0].remove; //1. elemanı silmiş olurum!

taskList.removeChild(taskList.children[0]); //yukarıda yaptığım işlemin aynısı! (benden tasklist'in bir alt öğelerinden herhangi bir tanesini bekler!)

//****************************************************************************************************************************************************************

// **removing attribute

taskList.children[0].removeAttribute('class'); //böyle dersem tasklist'in 1.elemanının class attribute'u silinir!

for(let i=0;i<taskList.children.length;i++) //bütün elemanların class atribute larını siler!
{
     taskList.children[i].removeAttribute('class');
}

//****************************************************************************************************************************************************************

// ** replacing element

const cardHeader=document.querySelector('.card-header');

//creating element

const h2=document.createElement('h2');

h2.setAttribute('class','card-header');

h2.appendChild(document.createTextNode('My List'));

const parent=document.querySelector('.card');

parent.replaceChild(h2,cardHeader); //replaceChild =>içine önce yeni sonra eski elemanı sırayla yaz!

console.log(cardHeader);

//****************************************************************************************************************************************************************

// ** Classes

let val;

val=taskList.children[0].firstChild; //text node a karşılık geldi!

link=taskList.children[0].children[0]; // a etiketine karşılık geldi!

val=link.className; // bana a etiketinin classname ini yani delete-item float-right ı getirir!

val=link.classList; // a etiketinde bulunan class ları bana liste şeklinde getirir!

val=link.classList[0]; //class lara dizi şeklinde erişmek istersen byunu kullan!

link.classList.add('new'); //2.indexe 'new' classı ekledim!

link.classList.remove('new'); //'.indexten 'new' classını sildim!

//Attribute

val=link.getAttribute('class'); // a etiketinin class ının attribute unu ekrana yazar!

val=link.getAttribute('data-id'); //a etikitenin data-id attribute unu getirir!

val=link.getAttribute('href'); //bana # i getirir!

val=link.setAttribute('href','http://sadikturan.com'); // href attribute una http://sadikturan.com u atadım!

val=link.hasAttribute('href'); //a etiketine atanmış bir href attribute u var mı yok mu ? (boolen cevap döndürür!)

console.log(val);




