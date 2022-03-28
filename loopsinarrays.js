//Loops in Array & Objects

let cars=['BMW','Mercedes','Toyota'];

let people=[
    {firstName:'Ada',lastName:'Bilgi'},
    {firstName:'Yiğit',lastName:'Bilgi'},
    {firstName:'Çınar',lastName:'Turan'}
];

console.log(cars[0]);

console.log(cars[1]);

console.log(cars[2]);

for(let i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}

for(let i=0;i<people.length;i++)
{
    console.log(people[i].firstName);
    console.log(people[i].lastName);
}

//for-in loop

for(let i in cars) //dizilerde kullanılabilir!
{
    console.log(`index: ${i} value: ${cars[i]}`);
}

//for-in loops(objects)

for(let i in people)
{
    console.log(`index: ${i} value: ${people[i].firstName}`);
}

console.log(typeof cars);

//foreach

cars.forEach(function(item) //dizinin içerisindeki her eleman sırayla item a kopyalanır!
{
    console.log(item);
});

//foreach(objects)

people.forEach(function(item){
    console.log(`name: ${item.firstName} lastname: ${item.lastName}`);
});

//map: geriye bir array döndürür!

let val=people.map(function(item) //ad ve soyadı birleşirip dizi olarak geri döndürdüm!
{
    return item.firstName+' '+item.lastName;
});

console.log(val);

let numbers=[1,5,6,8,10];

let num=numbers.map(function(n) //numbersların karesini alıp, bu elemanlardan bir dizi oluşturdum!
{
    return n*n;
});

console.log(num);


