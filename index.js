let player={
    Name:"Kaustav",
    Chips:149
}
let cards = [];
let sum = 0;
let hasBlackJack=false;
let isAlive = false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");//when using queryselector we have to specify is it a class or id

let cardsEL= document.querySelector("#cards-el");
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.Name + ": $" + player.Chips;



function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1;
    if(randomNumber===1){
        return 11;
    }
    else if(randomNumber>10){
        return 10;
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard];
    sum=cards[0]+cards[1];
    renderGame();
}
function renderGame(){
    sumEl.textContent="Sum: "+sum;
    cardsEL.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEL.textContent+=" "+cards[i];
        if(sum<21){
            message="Do you want to draw a new card?";
        }
        else if(sum===21){
            message="Congralutions you've got Blackjack !!";
            hasBlackJack=true;
        }
        else{
            message="You are out of the game";
            isAlive=false;
        }
        messageEl.textContent=message;
    }    
}


function newCard(){
    if(isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card !!");
        let card =getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
    else {
        if(isAlive===false || hasBlackJack===true){
            messageEl.textContent="You can't draw any more cards";
        }
        else if(isAlive===false){
            messageEl.textContent="You can't start the game with just one card";
        }
    }
}

 









