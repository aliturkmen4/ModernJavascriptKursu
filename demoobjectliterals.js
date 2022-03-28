/*
    Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisi tutunuz.

    Araç bilgileri:

        id:bmw116d_1234
        model:116d
        renk:white
        servis kayıtları:
            id:bmw116d_1234_1 tarih: 30.01.2016 km: 13000 toplam ücret: 900
                servis detayı:
                id : 1 işlem : yağ değişim ücret : 300
                id : 2 işlem : filtre değişimi ücret : 300
                id : 3 işlem : fren hidroliği ücret: 300
            id:bmw116d_1234_2 tarih: 10.01.2017 km: 28000 toplam ücret: 1800
                servis detayı:
                id : 1 işlem : yağ değişim ücret : 350
                id : 2 işlem : filtre değişimi ücret : 350
                id : 3 işlem : fren hidroliği ücret: 300
                id : 4 işlem : balata değişimi ücret : 800
*/

let aracBilgileri = [
{
    id:'bmw116d_1234',
    model:'bmw116d',
    yil:2015,
    renk:'beyaz',
    servisKayitlari:[
        {
            id: 'bmw116d_1234_1',
            tarih: '30.01.2016',
            km:13000,
            ucret:900,
            detay:[
                {
                    id:1,
                    islem:'yağ değişim',
                    fiyat:300
                },
                {
                    id:2,
                    islem:'filtre değişim',
                    fiyat:300
                },
                {
                    id:3,
                    islem:'fren hidroliği',
                    fiyat:300
                },
            ]
        },
        {
            id: 'bmw116d_1234_2',
            tarih: '10.01.2017',
            km:28000,
            ucret:1800,
            detay:[
                {
                    id:1,
                    islem:'yağ değişim',
                    fiyat:350
                },
                {
                    id:2,
                    islem:'filtre değişim',
                    fiyat:350
                },
                {
                    id:3,
                    islem:'fren hidroliği',
                    fiyat:300
                },
                {
                    id:4,
                    islem:'balta değişimi',
                    fiyat:800
                },
            ]
        },
    ]
},
{
    id:'bmw118d_1234',
    model:'bmw118d',
    yil:2019,
    renk:'siyah',
    servisKayitlari:[
        {
            id: 'bmw118d_1234_1',
            tarih: '30.01.2017',
            km:17000,
            ucret:1200,
            detay:[
                {
                    id:1,
                    islem:'yağ değişim',
                    fiyat:350
                },
                {
                    id:2,
                    islem:'filtre değişim',
                    fiyat:350
                },
                {
                    id:3,
                    islem:'fren hidroliği',
                    fiyat:500
                },
            ]
        },
        {
            id: 'bmw118d_1234_2',
            tarih: '10.01.2017',
            km:20000,
            ucret:10000,
            detay:[
                {
                    id:1,
                    islem:'yağ değişim',
                    fiyat:3500
                },
                {
                    id:2,
                    islem:'filtre değişim',
                    fiyat:3500
                },
                {
                    id:3,
                    islem:'fren hidroliği',
                    fiyat:2200
                },
                {
                    id:4,
                    islem:'balta değişimi',
                    fiyat:800
                },
            ]
        },
    ]
}
]

console.log(aracBilgileri[0]);

console.log(aracBilgileri[1]);

console.log(aracBilgileri[0].id);

console.log(aracBilgileri[0].servisKayitlari);

console.log(aracBilgileri[0].servisKayitlari[0].km);

console.log(aracBilgileri[0].servisKayitlari[0].ucret);

console.log(aracBilgileri[0].servisKayitlari[0].detay[0]);