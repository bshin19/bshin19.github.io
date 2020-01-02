# Mythic Gif Trivia
This application utilizes html, css-bootstrap, javascript/jquery, the Giphy API, and a trivia API to allow users to play a trivia game.
## Project Overview
![Start Screen](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/mythplay.jpg)

Users engage with the webpage by clicking the start button, at which point the body fills with a random question provided by the trivia api.

![Body](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/mythplay.jpg)

Upon clicking any answer, the user is presented with a gif gathered via the Giphy API.

### Timer
Each question must be answered within 30 seconds or the game will end. This timer refreshes to 30 seconds with every question answered, regardless of true or false.
![Game Over](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/mythend.jpg)

### Game Finished
![Game Complete](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/mythcomp.jpg)
Upon answering 10 random questions, the user's score is totaled and displayed. The user is then prompted to play again.