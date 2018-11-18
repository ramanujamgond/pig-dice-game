/*Pig Dice Game Script*/

var scores, roundScore, activePlayer, gamePlaying, diceRoll, setValue;

init();


// Clear predefined input value
document.querySelector('#set-winning-score').addEventListener('click', function () {
    document.querySelector('#set-winning-score').value = "";
});

// Get input value
document.querySelector('.btn-submit').addEventListener('click', function () {
    setValue = document.querySelector('#set-winning-score').value;
});


document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		//1. Random number
		var dice = Math.floor(Math.random() * 6) + 1;
		
		//2. Display the result
        var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'img/dice-' + dice + '.png';
		
		//3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Check if two 6 are roll in a row
            if (dice === 6 && dice === diceRoll) {
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            } else {
                // Add Score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
		} else {
			// Next player
			nextPlayer();
		}
        
        // Storing previous dice roll value 
        diceRoll = dice;
	}
});


document.querySelector('.btn-hold').addEventListener('click', function () {
	if (gamePlaying) {
		// Add CURRENT score to global score
		scores[activePlayer] += roundScore;
        var winningScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if (setValue) {
            winningScore = setValue;
        } else {
            winningScore = 100;
        }
        
		// Check if player won the game
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			// Next player
			nextPlayer();	
		}
	}
});


function nextPlayer() {
	// Next Player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
	activePlayer = 0;
    roundScore = 0;
	gamePlaying = true;

	document.querySelector('#set-winning-score').value = "set winning score";
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}