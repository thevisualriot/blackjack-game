var playerTotal = 0;
var dealerTotal = 0;
var playerRandom;
var dealerRandom;
var keepPlaying;

alert("Welcome to the Blackjack Game.\n\nYou play against the dealer. The one who hits 21 or the closest number below, wins.\n\n Ready? Press OK to start");


// FIRST NUMBER

playerRandom = Math.floor(Math.random() * 21) + 1;

if (playerRandom === 21) {
    console.log("Player total: 21");
    alert(`Well done! You hit 21!`);
    location.reload();
} else {
    console.log(`player: ${playerRandom}`);
    playerTotal =+ playerRandom;
    keepPlaying = stayOrNot(playerRandom, playerTotal);
    if (!keepPlaying) {
        dealerRandom = randomizeUpToEleven();
        dealerTotal += dealerRandom;
    } 
}

// SECOND ROUND

while (keepPlaying) {

    playerRandom = randomizeUpToEleven();
    dealerRandom = randomizeUpToEleven();
    console.log(`player: ${playerRandom}, dealer: ${dealerRandom}`);

    dealerTotal += dealerRandom;
    playerTotal += playerRandom;

    checkResult();

    keepPlaying = stayOrNot(playerRandom, playerTotal);

}


while(!keepPlaying) {

    var differencePlayer = 21 - playerTotal;
    var differenceDealer = 21 - dealerTotal;

    if (differenceDealer > differencePlayer) {
        console.log(`Player difference: ${differencePlayer} | Dealer difference: ${differenceDealer}`);
        alert(`Well done, winner!\n\nYour total is ${playerTotal} and the dealer's is ${dealerTotal}`);
        location.reload();
    } else if (differenceDealer === differencePlayer) {
        console.log(`Player difference: ${differencePlayer} | Dealer difference: ${differenceDealer}`);
        alert(`it's a tie!\n\nYou both scored a total of ${playerRandom}`);
        location.reload();
    } else if (differenceDealer < differencePlayer) {
        console.log(`Player difference: ${differencePlayer} | Dealer difference: ${differenceDealer}`);
        alert(`You lost, loser!\n\nYour total is ${playerTotal} and the dealer's is ${dealerTotal}`);
        location.reload();
    } else {
        alert(`Did you just surrender? Eh. See you next time.`);
        location.reload();
    }
}




// FUNCTIONS

function randomizeUpToEleven() {
    return Math.floor(Math.random() * 11) + 2;
}

function stayOrNot(number, total) {
    var confirmation = confirm(`You hit ${number} and your total is ${total}.\n\nDo you hit [OK] or stand [CANCEL]?`);
    console.log(confirmation);
    return confirmation === true;
}


function checkResult() {

    if (playerTotal === 21) {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
        alert(`You hit 21! You won!`);
        location.reload();
    } else if (dealerTotal === 21) {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
        alert(`The dealer hits 21 and wins!`);
        location.reload();
    } else if (dealerTotal > 21) {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
        alert(`Lucky you! The dealer busts! You win!`);
        location.reload();
    } else if (playerTotal > 21) {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
        alert(`You bust and your total is ${playerTotal}. You lost the game, loser!`);
        location.reload();
    } else if (playerTotal > 21 && dealerTotal > 21) {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
        alert(`You both bust. Nobody wins.`);
        location.reload();
    } else if (playerTotal < 21 && dealerTotal > 17 && dealerTotal < 21) {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
        console.log(`The dealer stands`);
    } else {
        console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
    }
}





