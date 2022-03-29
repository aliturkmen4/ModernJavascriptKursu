//Function Declarations

function sum(a,b){
    var c=a+b;
    return c;
}

console.log(sum(10,20));

//Function Expressions => fonksiyon ismi bir değişken olarak tanımlanır!

const sum2=function(d,e) //d ve e fonskiyonun argümanlarıdır!
{
    if(typeof d==='undefined') //bunu yapınca d ye değer girmezsem undefined olacakken bana onun yerine d ye 0 değeri atamış oldu!
    {
        d=0;
    }
    if(typeof e==='undefined')
    {
        e=0;
    }
    var f=d+e;
    return f;
}

console.log(sum2(10,30));

console.log(sum2(10)); //bu şekilde derrsem b yi tanımlamadığım için bana undefined döndürür! sayı+undefined toplarsam bana NaN sonucu döndürür!

console.log(sum2(10,45,58)); //burada 58 değerini göz ardı eder!

//ES6 Default Parameters

const sum3=function(d=0,e=0) //bu şekilde belirtirsem yukarıdaki if bloklarına gereğim kalmaz!
{
    var f=d+e;
    return f;
}

console.log(sum3(17,32));

console.log(sum3(19));

console.log(sum3(16,45,58));

//---------------------------------------------------------------

function sumAll() //istediğim kadar sayıyı bunun yardımıyla toplayabilirim!
{
    var total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }

    return total;
}

console.log(sumAll(10,25,68,77));

console.log(sumAll(10,25,68,77,71,97));

console.log(sumAll(18,23));

/*function args(){
    console.log(arguments);
}

args(10,20,30); //bana elemanları bir dizi olarak döndürür!
*/



