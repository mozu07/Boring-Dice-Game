var player1=prompt("Eneter Player 1 Name:");
var Player2=prompt("Enter player 2 Name:");
document.querySelectorAll("p")[0].innerHTML=player1;
document.querySelectorAll("p")[1].innerHTML=Player2;
var random_dice_Number1 = Math.floor(Math.random() *6)+1;

var img_sourceChanger1 = "dice" + random_dice_Number1 +".png";

var img_selector1 = document.querySelectorAll("img")[0];

img_selector1.setAttribute("src", img_sourceChanger1);

var random_dice_Number2 = Math.floor(Math.random() *6)+1;

var img_sourceChanger2 = "dice" +  random_dice_Number2 +".png";

var img_selector2 = document.querySelectorAll("img")[1].setAttribute("src" , img_sourceChanger2);

if(random_dice_Number1 > random_dice_Number2){
    document.querySelector("h1").innerHTML=player1 +" Won";
}
else if(random_dice_Number1 < random_dice_Number2){
    document.querySelector("h1").innerHTML=Player2 +" Won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}