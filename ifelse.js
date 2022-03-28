// if/else statements

const firstName='Sena';
const age=28;
const isStudent=false;
const school='university';

if(firstName=='Sena') //parantez içine ya bool türünde değişken ya da bool türünde sonuç üretecek bir koşul yazılır!
{
    console.log("Merhaba Sena");
}

if(age===25) //hem değeri hem tipi kontrol ederek koşul yazarsam hataların önüne geçmiş olurum!
{
    console.log("yaşınız 28");
}

if(isStudent)
{
    console.log("Merhaba Öğrenci");
}
else //burada isStudent false olduğu için else bloğu çalışır!
{
    console.log("Merhaba işler nasıl");
}

if(age>=18)
{
    if(school=='university' || school=='high school')
    {
        console.log("Ehliyet alabilirsiniz!");
    }
    else
    {
        console.log('Eğitim durumunuz yetersiz!');
    }
}
else
{
    console.log('Ehliyet alamazsınız!');
}

if(age>0 && age<12)
{
    console.log(`${firstName} is a child!`);
}
else if(age>=13 && age<=19)
{
    console.log(`${firstName} is a teenager!`);
}
else
{
    console.log(`${firstName} is an adult!`);
}

if(typeof id!=='undefined') //id bilgim varsa ekrana yazar yoksa 'no id' yazar!
{
    console.log('id: '+id);
}
else
{
    console.log('no id');
}