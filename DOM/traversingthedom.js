//Traversing the Dom

let val;

let list=document.querySelector('.list-group');

val=list;

val=list.childNodes; //bana 9 elemanlı NodeList döndürdü!

console.log(val);

val=list.children; //bana textnode(satır aralıklarını temsil eden bir değer diyebiliriz) dışındakileri getirir. yani </li> leri ayrı olarak saymaz!

console.log(val);

val=list.childNodes[0]; //0.indexteki node a ulaşırım!

console.log(val);

val=list.childNodes[0].nodeName; //0.indexteki node un adına ulaşırım!

console.log(val);

val=list.childNodes[0].nodeType;

console.log(val); //bana 3 sonucu gelir! (textnode demek)

//1=>element node
//2=>attribute node
//3=>text node
//8=>comment node

val=list.childNodes[1].nodeType;

console.log(val);

val=list.childNodes[2].nodeType;

console.log(val);

val=list.children[0]; //1.elemanın ilk li olduğunu biliyorum, bana onu döndürür!

console.log(val);

val=list.children[2].textContent='new item'; //text content e yazfığım değer yüzünden içerisindeki a etiketi siinmiş oldu!
val=list.children[3].children; //ulaşmış olduğum children özelliği olunca bana htmlcollection döndürür!

val=list.firstChild; //ilk node'u ekrana yazdırır!

console.log(val);

val=list.firstElementChild; //ilk etiketi ekrana yazdırır!

console.log(val);

val=list.lastChild; //son node'u ekrana yazdırır!

console.log(val);

val=list.lastElementChild; //son etiketi ekrana yazdırır!

console.log(val);

val=list.childElementCount; //ulaştığımız listenin kaç elemanı olduğu!

console.log(val);

val=list.parentNode; //ulatığım nesne ul nesnesi onun parentı'da bir üstünde yer alan card mt-3 class ına sahip olan div oluyor!

console.log(val);

// aynı seviyedeki elementler => sibling(kardeş) elementlerdir!

val=list.parentElement; //üst elementin element olması koşulunu koydum! etiketleri saymayacak!

console.log(val);

val=list.parentElement.parentElement; //card.mt-3 ün de parentı container p-3 etiketiymiş ona baktım!

console.log(val);

val=list.children[0]; //1. li elemanı gelir!

console.log(val);

val=list.children[0].nextSibling; //1. li elemanından sonraki text node'unu ekrana getirir!

console.log(val);

val=list.children[0].nextElementSibling; //1. li den bir sonraki li elementini ekrana getirir!

console.log(val);

val=list.children[1].previousSibling; //2. li elemanından önceki text node'unu ekrana getirir!

console.log(val);

val=list.children[1].previousElementSibling; //2. li den bir önceki li elementini ekrana getirir!

console.log(val);

for(let i=0;i<list.children.length;i++) //4 li elemanını da ekrana yazdırır!
{
    console.log(list.children[i]);
}

for(let i=0;i<list.childNodes.length;i++) //4 li elemanını da ekrana yazdırır!
{
    if(list.childNodes[i].nodeType==1) //böyle diyerek sadece element olanların ekrana yazılmasını sağladım!
    {
        console.log(list.childNodes[i]);
    }
    if(list.childNodes[i].nodeType==3) //böyle diyerek sadece text node ların ekrana yazılmasını sağladım!
    {
        console.log(list.childNodes[i]);
    }
}


