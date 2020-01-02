# Honey Bear's Crystal Game
This application utilizes html, css-bootstrap, and javascript-jquery to play a simple number-check game.

## Project Overview
![bear](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/bearrm.jpg) \
A number is saved as a variable in javascript and displayed upon the honeypot\
while four smaller numbers are randomly generated, saved, and their values are attached to the icons along the bottom.\

### Icons
![honey icons](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/bearrm1.jpg) \
Any time a bottom row icon is clicked, a javascript function is called\
that adds the hidden value of the icon to the total points variable\
which is then displayed on the screen.

### Math
![honey icons](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/bearrm2.jpg) \
A check is then run to determine whether the user's point total\
has met or surpassed the honeypot value.\
The user:
+ Wins if their total equals that value,
+ loses if their total is higher than that value,
+ and continues playing if that value isn't yet met.

### Game Complete Conditions
![honey icons](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/bearrm3.jpg) \
The wins counter increments by 1 whenever the user meets the success condition.\
The losses counter increments by 1 whenever the user fails to meet the success condition.\
Then an alert populates on the screen to display the user's win or loss.\
After this alert is dismissed, the game resets and can be played indefinitely.