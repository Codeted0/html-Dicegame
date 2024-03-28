var randomNumber1 = Math.floor(Math.random() *6) + 1;

var ramdomDiceimage ="dice"+randomNumber1+".png";

var randomDicesource = "images/" + ramdomDiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDicesource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDicesource2 = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDicesource2);

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML ="It's a Draw!🫤";

}