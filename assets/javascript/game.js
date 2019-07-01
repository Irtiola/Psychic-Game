var num_wins = 0;
var num_losses = 0;
var num_guesses = 9;
var so_far_guesses = [];
var random_letter;


function ResetStart(){
    num_guesses = 9;
    so_far_guesses = [];
    letter = Math.floor(Math.random()*26);
    random_letter = String.fromCharCode(letter +97); //ascii table a letter is 97
    UpdateScreen();

}

function UpdateScreen() {
    document.getElementById('num_wins').textContent = num_wins;
    document.getElementById('num_losses').textContent = num_losses;
    document.getElementById('num_guesses').textContent = num_guesses;
    document.getElementById('so_far_guesses').textContent = so_far_guesses.join(", ");
    
}

function Play(){
    user_guess = String.fromCharCode(event.keyCode);
    so_far_guesses.push(user_guess);
    if (user_guess == random_letter){
        num_wins++;
        ResetStart();
    }
    else {
        num_guesses--;
        if(num_guesses < 1){
            num_losses++;
            ResetStart();
        }
        
    }
    UpdateScreen();
}
