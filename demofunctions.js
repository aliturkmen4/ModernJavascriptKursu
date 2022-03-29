//Demo : Functions

//basit bir bankamatik uygulaması

var hesapA={
    ad:'Ali Türkmen',
    hesapNo:'123456',
    bakiye:2000,
    ekHesap:1500
}

var hesapB={
    ad:'Eray Nurtekin',
    hesapNo:'123456789',
    bakiye:6000,
    ekHesap:5000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye>=miktar)
    {
        var newbakiye;
        newbakiye= hesap.bakiye-miktar;
        console.log(`${hesap.ad} Bey hesabınızdan ${miktar} tutarında para çekildi! Yeni bakiyeniz: ${newbakiye}`);
        hesap.bakiye=newbakiye;
    }
    else
    {      
        newbakiye=hesap.bakiye+hesap.ekHesap;
        if(newbakiye>=miktar){
            if(confirm('Ek hesabınızı kullanmak ister misiniz?')){
            console.log(`${hesap.ad} Bey hesabınızdan ${miktar} tutarında para çekilmek istendi bakiyeniz yetersiz olduğundan ek hesabınızdan da ${miktar-hesap.bakiye} tutarında para çekilmiştir. Ana hesap: ${0} ek hesap:${hesap.ekHesap-(miktar-hesap.bakiye)}`);
             newbakiye=hesap.bakiye+hesap.ekHesap-miktar;
        }
            else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır!`)
                hesap.bakiye=newbakiye;
            }          
        }
        else
        {
            console.log(`Üzgünüz ${hesap.hesapNo} hesabınızda yeterli bakiye yoktur!`);
        }
    }
}

paraCek(hesapA,2500);
paraCek(hesapA,3500);