var playerTotal = 0;
var dealerTotal = 0;
var playerRandom;
var dealerRandom;
var keepPlaying;

alert("Welcome to the Blackjack Game.\n\nYou play against the dealer. The one who hits 21 or the closest number below, wins.\n\n Ready? Press OK to start");


// FIRST ROUND

playerRandom = Math.floor(Math.random() * 21) + 1;

if (playerRandom === 21) {
    console.log("Player total: 21");
    alert(`Well done! You hit 21!`);
    location.reload();
} else {
    console.log(`player: ${playerRandom}`);
    playerTotal =+ playerRandom;
    keepPlaying = stayOrNot(playerRandom, playerTotal);
    dealerRandom = randomizeUpToEleven();
    dealerTotal += dealerRandom;
}



// NEXT ROUNDS

while (keepPlaying) {

    logTotal();

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
        endGame(`Well done, winner!\n\nYour total is ${playerTotal} and the dealer's is ${dealerTotal}`);
    } else if (differenceDealer === differencePlayer) {
        endGame(`it's a tie!\n\nYou both scored a total of ${playerRandom}`);
    } else if (differenceDealer < differencePlayer) {
        endGame(`You lost, loser!\n\nYour total is ${playerTotal} and the dealer's is ${dealerTotal}`);
    } else {
        endGame(`Did you just surrender? Eh. See you next time.`);
    }
}




/* ------------------------------------ FUNCTIONS ------------------------------------------- */

// RANDOM CARD
function randomizeUpToEleven() {
    return Math.floor(Math.random() * 11) + 2;
}

// HIT OR STAND?
function stayOrNot(number, total) {
    var confirmation = confirm(`You hit ${number} and your total is ${total}.\n\nDo you hit [OK] or stand [CANCEL]?`);
    console.log(confirmation);
    return confirmation === true;
}

// CHECK RESULTS
function checkResult() {

    if (playerTotal === 21) {
        alert(`You hit 21! You won!`);
        location.reload();
    } else if (dealerTotal === 21) {
        alert(`The dealer hits 21 and wins!`);
        location.reload();
    } else if (dealerTotal > 21) {
        alert(`Lucky you! The dealer busts! You win!`);
        location.reload();
    } else if (playerTotal > 21) {
        alert(`You bust and your total is ${playerTotal}. You lost the game, loser!`);
        location.reload();
    } else if (playerTotal > 21 && dealerTotal > 21) {
        alert(`You both bust. Nobody wins.`);
        location.reload();
    } else if (playerTotal < 21 && dealerTotal > 17 && dealerTotal < 21) {
        console.log(`The dealer stands`);
    } 
}

// LOG TOTAL FOR PLAYER AND DEALER
function logTotal() {
    console.log(`Player total: ${playerTotal} | Dealer total: ${dealerTotal}`);
}

// END GAME WITH AN ALERT
function endGame(message) {
    console.log(`Player difference: ${differencePlayer} | Dealer difference: ${differenceDealer}`);
    alert(message);
    location.reload();
}