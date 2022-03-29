//Scopes : Yazdığımız bir değişkenin hangi kod parçası tarafından ulaşılabilir olup olmaması ile alakalıdır!

// ** Global Scopes

var name='Çınar';
let age=30;

function logName() //name function a göre grobal olarak tanımlanmış bir değişken olduğu için fonksiyonun içinden de erişilebilir!
{
    var name='Ada';
    let age=30;
    console.log('function scope',name,age); //fonskiyon içerisinde aynı isimle tanımladığım değişken globale göre öncelikli oluyor, o yüzden burada Ada ismini ekranda görürüm!
}
console.log(age);
logName();

if(true){
    let age=25;
    console.log('block scope',name,age);
}

// console.log(window);

// ** Local Scopes

//Fonksiyonlar kendi scopelarını oluşturur!

//Fonksiyon içerisindeki değişkene dışarıdan ulaşılamaz!

//**Blocklar yeni scope oluşturmaz!

console.log("*******************************");


if(true){
    var model='Opel';

    let year=2016; //BUNA BLOCK SCOPE OLDUĞU İÇİN SADECE İF İÇERİSİNDEN ERİŞEBİLİRİM!

    const color='white'; //BUNA BLOCK SCOPE OLDUĞU İÇİN SADECE İF İÇERİSİNDEN ERİŞEBİLİRİM! 

    console.log('block scope',model,year,color);

}

// console.log('block scope',model,year,color); =>YEAR VE COLOR'A BURADAN ERİŞEMEM!

//ES6 ILE GELEN LET VE CONST BLOCK SCOPE OLUŞTURUR!

console.log("*******************************");


var i=1;

for(var i=0;i<10;i++){
    console.log('i:',i);
}
console.log(i); //burada global değişkeni bozmuş oldum bunun önüne geçmek için for döngüsünün içindeki i yi let ile tanımla!!!!!

console.log("*******************************");

var i=1;

for(let i=0;i<10;i++){
    console.log('i:',i);
}
console.log(i);