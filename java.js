const slide = ["RECODE.jpg","RECODE2.jpg","RECODE3.jpg","RECODE4.jpg","RECODE5.jpg","RECODE6.jpg","RECODE7.jpg","RECODE8.jpg","RECODE9.jpg","RECODE10.jpg",];
let numero = 0;

function ChangeSlide(sens){
numero = numero+sens;
if (numero >10)
numero = 0;
if  (numero <0)
numero = 10;
document.getElementById("slide").src = "ASSETS/recode/"+ slide[numero];
}


const images = ["allposter.jpg","allposter2.jpg","allposter3.jpg"];
let numer = 0;

function Changeimages(sens){
numer = numer+sens;
if (numer >3)
numer = 0;
if  (numer <0)
numer = 3;
document.getElementById("images").src = "ASSETS/MCA/"+ images[numer];
}