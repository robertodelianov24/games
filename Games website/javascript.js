function showCactus(){
    var cactus=document.getElementById("cactus");
    var casino=document.getElementById("casino");
    var a=document.getElementById("a");
    casino.style.visibility="visible";
    cactus.style.visibility="visible";
    a.style.visibility="visible";
    }
function hideCactus(){
    var cactus=document.getElementById("cactus");
    var casino=document.getElementById("casino");
    casino.style.visibility="hidden";
    cactus.style.visibility="hidden";
}    




























//second HTML
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
let counter = 0;
function jump() {
    if (item1.classList != "animate") {
        item1.classList.add("animate");
        }
    setTimeout(function () { item1.classList.remove("animate") }, 500);
}
var checkDead = setInterval(function () {
    var item1Top = parseInt(window.getComputedStyle(item1).getPropertyValue("top"));
    var item2Left = parseInt(window.getComputedStyle(item2).getPropertyValue("left"));
    if (item2Left < 20 && item2Left > 0 && item1Top >= 360) {
        item2.style.display = "none";
        item2.style.animation = "none";
        alert("Game Over !Your " + "SCORE: " + Math.floor(counter/100));
        counter=0;
        counter=stop;
        }
        else{
            counter++;
            document.getElementById("score").innerHTML = Math.floor(counter/100);
         }
}, 10);




























//Third HTML
var bank=document.getElementById("bank");
        bank=100;
        document.getElementById("bank").innerHTML="BANK: "+bank+" $";
        var bet=document.getElementById("bet");
        bet=1;
        document.getElementById("bet").innerHTML="BET  "+bet;
        var total=document.getElementById("total-bet");
        total=1;
        document.getElementById("total-bet").innerHTML="TOTAL = "+total+" $";
        var myNumber=document.getElementById("mynumber");
        function isValid(text){ 
        var myRegExp=/[^a-z ^!@#$%^&*()_+=~|<>?|":{} ]\b/i;
        return!(myRegExp.test(text));
        }
       

        function plus(){
            bet=bet+1;
            total=total+1;
            if(bet<=10){
            document.getElementById("total-bet").innerHTML="TOTAL = "+total+" $";
            document.getElementById("bet").innerHTML="BET  "+bet;
            }
            else{
                bet=10;
                total=10;
            }
        }
        function minus(){
            bet=bet-1
            total=total-1;
            if(bet>0){
            document.getElementById("total-bet").innerHTML="TOTAL = "+total+" $";
            document.getElementById("bet").innerHTML="BET  "+bet;
            }
            else{
                bet=1;
                total=1;
            }
        }
        function myNumbers(){
            myNumber=document.getElementById("mynumber").innerHTML=prompt("Enter your lucky number from 0 to 24");
            while(isValid(myNumber)||myNumber>24 || myNumber<0){
                if(isValid(myNumber)||myNumber>24||myNumber<0){
                    alert("Wrong number");
                    myNumber=document.getElementById("mynumber").innerHTML=prompt("Enter your lucky number from 0 to 24");
                }
            }
            
        }

        function play(){
            if(bank>=total && myNumber>=0){
            var ranNumber=Math.floor(Math.random()*24);
            document.getElementById("number").innerHTML=ranNumber;
            if(myNumber==ranNumber && bank>0){
                win=total*total*total;
                bank=bank+win;
                document.getElementById("bank").innerHTML="BANK: "+bank+" $";
                alert("YOU WIN "+win+" $");
            }
            else if(myNumber!=ranNumber && bank>0){
                bank=bank-total;
                document.getElementById("bank").innerHTML="BANK: "+bank+" $";
            }
            
        }
        }