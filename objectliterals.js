//Object Literals

let val;

let person=
{
    firstName:'Çınar',
    lastName:'Turan',
    age:7,
    hobbies:['sinema','müzik','oyun'],
    adress:{ //object içine object tanımladım!
        city:'Kocaeli',
        country:'Türkiye'
    },
    getBirthYear:function() //method tanımlama!!
    {
        return new Date().getFullYear()-this.age; //hangi nesnenin içerisinde this dersem o nesnenin bir referansını almış oluyorum!
    }
};

val=person;

console.log(val);

//-----------------------

val=person.firstName;

console.log(val);

//-----------------------

val=person.lastName;

console.log(val);

//-----------------------

val=person['firstName'];

console.log(val);

//-----------------------

val=person.age;

console.log(val);

//-----------------------

val=person.hobbies;

console.log(val);

//-----------------------

val=person.hobbies[1];

console.log(val);

//-----------------------

val=person.hobbies.length;

console.log(val);

//-----------------------

val=person.adress;

console.log(val);

//-----------------------

val=person.adress.city;

console.log(val);

//-----------------------

val=person.adress.country;

console.log(val);

//-----------------------

val=person.adress['city'];

console.log(val);

//-----------------------

val=person.getBirthYear();

console.log(val);

//-----------------------

let people=[ //insanlar objesi oluşturuyorum, yani array şeklinde olacak!
            {firstName:'Ali',lastName:'Türkmen'}, 
            {firstName:'Deniz',lastName:'Cin'},
            {firstName:'Resul',lastName:'Aktoz'},
            {firstName:'Eray',lastName:'Nurtekin'},
            {firstName:'Gizem',lastName:'Demirtaş'}
           ];

console.log(people);

//-----------------------

val=people[0];

console.log(val);

//-----------------------

val=people[0].firstName;

console.log(val);

//-----------------------

for(let i=0;i<people.length;i++){ //bütün elemanları 1 kerede almak için döngü kullandım!
    console.log(people[i]);
}

//-----------------------

