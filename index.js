var randomnumber1 = Math.floor(Math.random()*6)+1;

var sourceimage1 = "dice" +randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",sourceimage1);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var sourceimage2 = "dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",sourceimage2);

if(randomnumber1>randomnumber2){
    document.querySelector(".displayresult").innerHTML ="🚩 Player1 Wins!"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML ="🚩 Player2 Wins!"
}
else{
    document.querySelector("h1").innerHTML ="DRAW!"
}

