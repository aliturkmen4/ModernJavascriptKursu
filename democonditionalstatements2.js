
var result=prompt("Who is there?"); // kullanıcıya promp kutusu çıkardım!

if(result=='cancel')
{
    console.log('cancelled!');
}
else if(result=='admin')
{
    var password=prompt('Enter your password: ');
    
    if(password=='calcel')
    {
        console.log('cancelled!');
    }
    else if(password=='1234')
    {
        console.log("Welcome Admin");
    }
    else
    {
        console.log('wrong password!');
    }
}
else
{
    console.log('I don\'t know you!');
}