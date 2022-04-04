//Mouse Events

const btn=document.querySelector('#btnDeleteAll');

const ul=document.querySelector('#task-list'); //ul etiketini bu şekilde seçtim!

//click event

btn.addEventListener('click',eventHandler);

ul.addEventListener('click',eventHandler);

//double click event

btn.addEventListener('dblclick',eventHandler); //iki kere tıklandığında double click olayı gerçekleşir!

//mouse down

btn.addEventListener('mousedown',eventHandler); //mouse butonuna tıklandığı anda olay gerçekleşir!

//mouse up

btn.addEventListener('mouseup',eventHandler); //mouse tan elim çekildiği anda mouse up olur!

//mouseenter

ul.addEventListener('mouseenter',eventHandler); //ul listesinin çerçevesine girdiğimiz anda mouseenter olur! 

//mouseleave

ul.addEventListener('mouseleave',eventHandler); // ul listesinin çerçevesinden çıktığım anda mouseleave olur!

//mouseover

ul.addEventListener('mouseover',eventHandler); // ul nesnesinin alt elemanları üzerinde de çalışır!

//mouseout

ul.addEventListener('mouseout',eventHandler); // ul nesnesinin alt elemanları üzerinde de çalışır!

//mouse move

const h5=document.querySelector('h5');

ul.addEventListener('mousemove',eventHandler); //mouse oynadığı sürece sayar! (kordinata göre işlem yapmakta kullanılabilir!)

function eventHandler(e){
    console.log(`event type: ${e.type} `)
    
    h5.textContent=`Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`; //mouse un x ve y koordinatlarını yazdırmama yarar!
}

//offsetX => sağdan sola doğru x koordinatı artan şekilde sıralanır!

//offsetY => yukarıdan aşağı y koordainatı artan şelide sıralanır!