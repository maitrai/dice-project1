
var randomNumber1=Math.floor((Math.random()*6 +1));//1-6

var randomImage="dice"+randomNumber1+".png"; //dice1.png-dice6.png

var randomImageSource="images/"+randomImage;//to go inside folder of image

var img1=document.querySelectorAll("img")[0]; // to select 1st img tag

img1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor((Math.random()*6 +1));

var randomImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomImage2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2)
{
document.querySelector("h1").textContent=" :)player1 wins!";
}

else if(randomNumber1<randomNumber2)
{
document.querySelector("h1").textContent="player2 wins:)";
}

else
{
document.querySelector("h1").textContent=" draw!";
}
