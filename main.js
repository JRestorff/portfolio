document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add the current score to the user's global score
    scores[activePlayer] += roundScore

    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]    

    // Check if player won the game
    if  (scores[activePlayer] >= 20) {       
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!' 
       document.querySelector('.dice').style.display = 'none'
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner')
       gamePlaying = false
    } else {
        // Next player
        nextPlayer()
    }    
    }    
})