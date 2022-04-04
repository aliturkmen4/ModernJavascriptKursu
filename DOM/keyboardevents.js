//Keyboard Events => Kullanıcı herhangi bir tuşa bastığında gerçekleşecek eventler

const input=document.querySelector('#txtTaskName');

const form=document.querySelector('form'); 

const select=document.querySelector('#select');

input.addEventListener('keydown',eventHandler); //tuşa bastığım anda keydown!

input.addEventListener('keyup',eventHandler); //tuştan elimi çektiğim anda key up!

input.addEventListener('keypress',eventHandler);

input.addEventListener('focus',eventHandler); //input girişi yapacağım yere tıklayınca focus direkt çalışır!

input.addEventListener('blur',eventHandler); //input giriş ekranına tıkladığımda focus oluyorken, çıktığımda ise blur işlemi gerçekleşir!

input.addEventListener('cut',eventHandler); // input giriş ekranından bir kısmını seçtiğim değeri sildiğimde (ctrl+x) cut çalışır!

input.addEventListener('paste',eventHandler); //input giriş ekranından bir yapıştırma işlemi(ctrl+v) yaptığımda paste çalışır!

form.addEventListener('submit',eventHandler); //submit butonuna tıkladığımda formdaki bilgi formun adresine gider, o zaman kullanılır! (şuanda formumun bir action'ı olmadığı için sadece sayfa refresh olur!)

input.addEventListener('select',eventHandler); //input ekranına girdiğim text ten herahngi bir kısım seçtiğimde select işlemi gerçekleşir!

select.addEventListener('change',eventHandler); //select kutusundan herhangi bir değer değiştirdiğim vakit 

function eventHandler(e){
    console.log('event type:' +e.type);

    console.log('key code:'+ e.keyCode); //hangi tuşa basıldığı bilgisini almamı sağlar!

    console.log('value:'+e.target.value); //önce event da olayın gerçekleştiği target a gittim ondan da hangi değere eriştiğimi aldım!

    e.target.style.backgroundColor='yellow'; //focus olduğum anda input girişi yapacağım yerin rengini sarı yapar!
    
    if(e.type=='blur') //focustan blur a geçtiğim anda giriş ekranı sarıdan kırmızıya döner!
    {
        e.target.style.backgroundColor='red';
    }
    
    e.preventDefault(); //submit olayı gerçekleşsin ama sayfa refresh olmasın istiyorsam! (ajax da mutlaka kullanılması gerekiyor!)
}



