//Template Literals

const fullName="Ali Türkmen";
const city='Antalya';
const yearOfBirth=1996;

let val;

val='My name is '+fullName+
    ' I\'m ' +(2022-yearOfBirth)+' years old'+
    ' and I live in '+city; //TEMPLATE LITERALSIZ HALİ

    console.log(val);

val=`My name is ${fullName} I'm ${(2022-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`; // ALT GR + VİRGÜL TUSU(``) //TEMPLATE LITERAL HALİ

// koşul(bool türünde sonucu olan) ? trueresult : falseresult (TERNARY OPERATORU)!!!!!!!!!!!! koşul doğruysa ilk kısım, değilse ikinci kısım gerçekleşecek!

console.log(val);