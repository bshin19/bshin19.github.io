# Psychic Game
This application utilizes html, css, bootstrap, javascript, and JQuery to play a simple letter guess game.

## Application Overview
![Body](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/psychic.jpg)
Upon page load, a random letter is selected and saved in a variable. The user is able to type in the empty form and any letters typed are compared to the random letter to see if they guessed right.

### Input Recognition
> Keyboard inputs other than A-Z are ignored via regex. Repeat inputs are ignored in a similar manner, as successful inputs are saved in a javascript array that is searched on successful input prior to reducing guesses. Capital and lowercase are all treated funneled through a .toUpper() function so that casing doesn't treat the a letter as different from its alternate case.

### Win Condition / Lose Condition
Successfully typing the letter results in victory. An alert displays on the screen and the variables get reset so that the user can play again. 

If the letter is not guessed within 8 unique keypresses, the user loses and the game resets so that they can play again.

> An incrementing victory and loss tally is also kept via javascript variables.