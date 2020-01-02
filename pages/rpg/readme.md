# RPG Game
This application utilizes html, css, bootstrap, javascript, and jquery to play an RPG game involving levelups, combat calculations, unique allies, and unique enemies.

## Application Overview
![Start Screen](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpgstart.jpg)

### Getting Started
1. The user is given the choice of four heroes to play as. These heroes are built using Javascript constructors and saved in variables within an array. Upon selecting a hero, the div is cleared and the hero is placed in "the Arena." 
2. Beneath the arena, a row of four foes populates. Again, these are built using Javascript constructors and saved in variables within an array. Foe population is entirely randomized but only one of each unique foe may appear at a time. 
    * The user can choose to select one of these foes or click the reroll button to randomly select another set of four foes from the array.
    * The selection screen will look something like this ![foes](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpgfoes.jpg)
    * Once a foe has been selected, the foes div is cleared and the selected foe is placed in "the Arena."
3. ![arena](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpgarena.jpg)
    * With both a foe and hero selected, the commands at the center of the arena become functional. The user is able to:
        1. Attack
        2. Use Elixir (3)
        3. Guard
        4. Call Ally (1)

### The Commands

#### Attack
This checks the chosen hero's atk vs the foes def. Then the opposite check is performed as the foe counterattacks.
> A speed check is then performed. If the hero or foe has 4 or more speed than the other a double attack occurs. The unit with the lower stat will be struck a second time.

At the end of every damage phase, a function checks to see whether the damaged unit's health has fallen to 0 or below.
* The unit is "dead" if this occurs.
    * If the hero is dead, the combat is ended and a game over occurs.
    ![Game Over](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpggameover.PNG)
    * If the foe is dead, the combat is ended and the level-up function is called.
    ![Levelup](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpglevel.PNG)
    ![Levelup Random](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpglevelrand.PNG)
        * Level-ups are random based on the personal growths of each hero, as seen above.

Once all calculations are complete, the combat phase is ended and the user is able to select commands once more.

#### Use Elixir
![Elixir Use](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpgelix.PNG)

Each hero is initially given 3 elixirs. These elixirs fully restore their HP and place them in guard mode.
* If used between foe selection, elixirs have no penalty.
* If used during combat, the foe will attack following the elixir's heal. Damage will be reduced due to the guard effect but it also breaks the guard effect.

![Elixir Gone](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/rpgelixout.PNG)
* Once all elixirs have been used the user is no longer able to use this option. They can still select the "Elixir" button, however nothing will happen.

#### Guard
Guard increases the player hero's defense by 50% for one combat. The guard property is removed upon the first time the hero takes damage after setting it.
* If guard is selected during combat, the foe will attack afterward.

#### Call Ally
Call Ally fully heals the player's hero like an elixir, replenishes their supply of elixirs to 3, and sets guard to active. The foe will not strike the user on a turn where they call an ally.