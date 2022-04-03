let val;

val = window.document;
val = document.all;
val = document.all.length;
val = document.all[10];
val = document.head; //karşıma direkt head kısmını getirir!
val = document.body;
val = document.anchors; //sayfadaki linkleri collection şeklinde almaya yarar!
val = document.URL;
val = document.domain;
val = document.images;
val = document.title;
val = document.forms; //Sayfada bulunan bütün form bilgilerini almaya yarar!
val = document.forms[0]; //Sayfada bulunan 0.indexteki form bilgilerini almaya yarar!
val = document.forms[0].id;
val = document.forms[0].method; //method bilgisini alırım(get,post vs.)
val = document.forms[0].action;
val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src'); //script'in src sinde ne olduğunu alabilirim!


console.log(val);