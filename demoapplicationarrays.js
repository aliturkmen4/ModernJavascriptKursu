//'BMW,Mercedes,Opel,Mazda' elemanlarına sahip bir dizi oluşturun!

var cars=['BMW','Mercedes','Opel','Mazda'];

//Dizi kaç elemanlıdır?

console.log(cars.length);

//Dizinin ilk ve son elemanı nedir?

console.log(cars[0]);

console.log(cars[cars.length-1]);

//'Renault' değerini dizinin sonuna ekleyin!

cars.push('Renault');

console.log(cars);

//'Toyota' değerini dizinin başına ekleyin!

cars.unshift('Toyota');

console.log(cars);

//'Renault' değerini sildiriniz.

cars.splice(5,1);

console.log(cars);

//'Toyota' değerini siliniz.

cars.splice(0,1);

console.log(cars);

//Dizi elemanlarını ters çevirin!

cars.reverse();

console.log(cars);

//Dizi elemanlarını alfabetik olarak sıralayın!

cars.sort();

console.log(cars);

//[1,2,5,80] dizisini sıralayın!

var numbers=[1,2,5,80];

numbers.sort();

console.log(numbers);

// var str="Chevrolet,Dacia"; ifadesini diziye çevirin!

var str="Chevrolet,Dacia";

var str2=str.split(','); //split ile virgünden ayırdım ve ayrılan elemanlar dizi elamanı oldu!

console.log(str2);

//Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin!

var temp=['ali','veli','deli','geri'];

var temp1=str2.concat(temp);

console.log(temp1); 

//Oluşan dizinin son iki elemanını siliniz!

temp1.splice(temp1.length-2,temp1.length);

console.log(temp1);

/*
    Aşağıda verilen elemanları bir dizi içerisinde saklayın.

    studentA : Yiğit Bilgili 2010
    studentB : Sena Turan 1999
    studentC : Ahmet Turan 1998
*/

var studentA=['Yiğit','Bilgili',2010];

var studentB=['Sena','Turan',1999];

var studentC=['Ahmet','Turan',1998];

var students=[studentA,studentB,studentC];

console.log(students);

console.log(students[0]);

console.log(students[0][0]); //array'in 0.indexinin 0.indexi yani Yiğit
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]); //array'in 2.indexinin 1.indexi yani Turan
console.log(students[2][2]);