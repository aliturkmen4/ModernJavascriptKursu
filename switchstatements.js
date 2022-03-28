//switch statements -->koşullar çok fazlaysa temiz kod açısından kullanılabilir!

let category = 'bilgisayar';

switch (category) //iki kategori de değilse bana bir sonuç döndürmez!
{
    case 'telefon':
        console.log('telefon kategorisi');
        break;

    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
        break;

    default: //if else statementının else kısmı gibi!
        console.log('yanlış kategori');
}

//---------------------------------------------------------------------------

let day;

console.log(new Date().getDay()); //bana 1 değeri döndürür çünkü bugün pazartesi!

switch (new Date().getDay()) //GETDAY() => 0 DAN 6 YA KADAR DEĞER DÖNDÜRÜR!
{
    case 0:
        day = 'pazar';
        break;

    case 1:
        day = 'pazartesi';
        break;

    case 2:
        day = 'salı';
        break;

    case 3:
        day = 'çarşamba';
        break;

    case 4:
        day = 'perşembe';
        break;

    case 5:
        day = 'cuma';
        break;

    case 6:
        day = 'cumartesi';
        break;
}

console.log(`bugün günlerden ${day}`);

//shift + alt + f => kodları düzene sokar!!!!!!

//---------------------------------------------------------------------------

let day2;

switch (new Date().getDay()) //caseler bu şekilde birleştirilebilir!
{
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day2 = 'haftaiçi';
        break;
    case 0:
    case 6:
        day2 = 'haftasonu';
        break;
}

console.log(`bugün ${day2}`);

//---------------------------------------------------------------------------

const age=21;

const firstName='Sena';

switch(true) //switch'e girsin diye true yazıyorum!
{
    case age>=0 && age<12:
        console.log(`${firstName} is a child!`);
    break;

    case age>=12 && age<=19:
        console.log(`${firstName} is a teenager!`);
    break;

    default:
        console.log(`${firstName} is an adult!`);
}
