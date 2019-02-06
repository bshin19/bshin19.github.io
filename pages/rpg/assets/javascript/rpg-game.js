$(document).ready(function () {

    //Initialize paths to be used on all assets
    var portPath = "../rpg/assets/images/portrait/";
    var animPath = "../rpg/assets/images/rpg-game/fight/";
    var staticPath = "../rpg/assets/images/rpg-game/static/";
    var audioArenaPath = "../rpg/assets/sound/arena/";
    var audioAttackPath = "../rpg/assets/sound/attack/";
    var audioCritPath = "../rpg/assets/sound/critical/";
    var audioDamagePath = "../rpg/assets/sound/damaged/";
    var audioDeathPath = "../rpg/assets/sound/death/";
    var audioPestPath = "../rpg/assets/sound/pester/";

    ///CONSTRUCTORS///

    function MakeChar(name, lvl, hlt, mhp, atk, spd, def, res, crt, hpgr, atkgr, spdgr, defgr, resgr, port, anim, crit, static, state, chosen, guard, spell, elix, allyVal, bonus, cls, arenaSound, atkSound, critSound, damSound, deathSound, pestSound) {
        this.name = name;
        this.level = lvl;
        this.hp = hlt;
        this.maxHP = mhp;
        this.atk = atk;
        this.spd = spd;
        this.def = def;
        this.res = res;
        this.crit = crt;
        this.hpgr = hpgr;
        this.atkgr = atkgr;
        this.spdgr = spdgr;
        this.defgr = defgr;
        this.resgr = resgr;
        this.baseLvl = lvl;
        this.baseHP = hlt;
        this.baseAtk = atk;
        this.baseSpd = spd;
        this.baseDef = def;
        this.baseRes = res;
        this.portrait = portPath + port;
        this.anim = animPath + anim;
        this.animCrit = animPath + crit;
        this.animStatic = staticPath + static;
        this.animState = state;
        this.isChosen = chosen;
        this.guard = guard;
        this.animSpell = spell;
        this.elixirs = elix;
        this.allyCalls = allyVal;
        this.atkBonus = bonus;
        this.prof = cls;
        this.atkSound = atkSound;
        this.arenaSound = arenaSound;
        this.critSound = critSound;
        this.damSound = damSound;
        this.deathSound = deathSound;
        this.pestSound = pestSound;
        this.enterArena = fillArena.bind(this, "#playerSide");
        this.levelup = levelup.bind(this);
        this.resetUnit = resetStats.bind(this);
        this.setSound = allCharSounds.bind(this);

        //this.attackCheck = attackfunction.bind(this)
        //this.attack = function() {

        //};
    };

    function MakeFoe(name, lvl, hp, mhp, atk, spd, def, port, anim, static, state, spell, chosen, cls, arenaSound, atkSound, critSound, damSound, deathSound) {
        this.name = name;
        this.level = lvl;
        this.hp = hp;
        this.maxHP = mhp;
        this.atk = atk;
        this.spd = spd;
        this.def = def;
        this.portrait = portPath + port;
        this.anim = animPath + anim;
        this.animStatic = staticPath + static;
        this.animState = state;
        this.animSpell = spell;
        this.isChosen = chosen;
        this.enterArena = fillArena.bind(this, "#foeSide");
        this.prof = cls;
        this.atkSound = atkSound;
        this.arenaSound = arenaSound;
        this.critSound = critSound;
        this.damSound = damSound;
        this.deathSound = deathSound;
        this.setSound = allCharSounds.bind(this);
    };

    ///END CONSTRUCTORS///

    ///PLAYER OBJECTS///

    var lyn = new MakeChar("Lyn", 1, 30, 30, 8, 12, 2, 2, 30, 100, 50, 80, 35, 40, "lyn.jpg", "lyn.gif", "lyn_crit.gif", "lyn.png", "still", false, false, "", 3, 1, 1, "Blade Lord");
    var hector = new MakeChar("Hector", 1, 35, 35, 10, 6, 7, 1, 10, 100, 80, 30, 60, 10, "hector.jpg", "hector.gif", "hector_crit.gif", "hector.png", "still", false, false, "", 3, 1, 1, "Great Lord");
    var eliwood = new MakeChar("Eliwood", 1, 33, 33, 9, 9, 4, 7, 20, 100, 50, 50, 50, 50, "eliwood.jpg", "eliwood.gif", "eliwood_crit.gif", "eliwood.png", "still", false, false, "", 3, 1, 1, "Knight Lord");
    var roy = new MakeChar("Roy", 5, 39, 39, 15, 12, 12, 9, 25, 100, 70, 70, 70, 70, "roy.jpg", "roy.gif", "roy_crit.gif", "roy.png", "still", false, false, "", 3, 1, 1, "Master Lord");
    var athos = new MakeChar("Athos", 20, 40, 30, 20, 18, 30, 0, 0, 0, 0, 0, 0, 0, "athos.jpg", "athos.gif", "", "athos.png", "still", false, false, "", 3, 1, 1, "Archsage");

    lyn.setSound(2, 1, 1, 2, 1, 9);
    hector.setSound(5, 2, 5, 3, 1, 0);
    eliwood.setSound(5, 1, 2, 2, 1, 0);
    roy.setSound(2, 3, 1, 2, 1, 2);

    //Lyn Allies
    //ally: [
    //    char[1], char[2], char[3], char[4]
    //],
    //Hector Allies
    // ally: [
    //     char[0], char[2], char[3], char[4]
    // ],
    //Eliwood Allies
    // ally: [
    //     char[0], char[1], char[3], char[4]
    // ],
    //Roy Allies
    // ally: [
    //     char[0], char[1], char[2], char[4]
    // ],
    //athos allies
    // ally: [
    //     char[0], char[1], char[2], char[3]
    // ],

    ///END PLAYER OBJECTS///

    ///FOE OBJECTS///

    var entombed = new MakeFoe("Entombed", 1, 22, 22, 9, 2, 0, "entombed.png", "entombed.gif", "entombed.png", "still", false, false, "Monster");
    var bael = new MakeFoe("Bael", 2, 27, 27, 12, 5, 2, "bael.png", "bael.gif", "bael.png", "still", false, false, "Monster");
    var mauthedoog = new MakeFoe("Mauthedoog", 3, 23, 23, 10, 15, 0, "mauthedoog.png", "mauthedoog.gif", "mauthedoog.png", "still", false, false, "Monster");
    var deathgoyle = new MakeFoe("Deathgoyle", 4, 32, 32, 12, 6, 7, "deathgoyle.png", "deathgoyle.gif", "deathgoyle.png", "still", false, false, "Monster");
    var gwyllgi = new MakeFoe("Gwyllgi", 7, 34, 34, 14, 19, 2, "gwyllgi.jpg", "gwyllgi.gif", "gwyllgi.png", "still", false, false, "Monster");
    var cyclops = new MakeFoe("Cyclops", 10, 44, 44, 20, 5, 4, "cyclops.jpg", "cyclops.gif", "cyclops.png", "still", false, false, "Monster");
    var dracozombie = new MakeFoe("Draco-Zombie", 15, 40, 40, 18, 12, 5, "dracozombie.png", "dracozombie.gif", "dracozombie.png", "still", true, false, "Monster");
    var firedragon = new MakeFoe("FireDragon", 25, 50, 50, 21, 15, 7, "firedragon.jpg", "firedragon.gif", "firedragon.png", "still", true, false, "Dragon");
    var idunn = new MakeFoe("Idunn", 30, 60, 60, 30, 10, 10, "idunn.png", "idunn.gif", "idunn.png", "still", true, false, "Demon Dragon");
    var jaffar = new MakeFoe("Jaffar", 20, 30, 30, 20, 24, 5, "jaffar.png", "jaffar.gif", "jaffar.png", "still", false, false, "Angel of Death");
    var linus = new MakeFoe("Linus", 14, 43, 43, 22, 14, 7, "linus.png", "linus.gif", "linus.png", "still", false, false, "White Wolf");
    var lloyd = new MakeFoe("Lloyd", 15, 37, 37, 15, 23, 5, "lloyd.jpg", "lloyd.gif", "lloyd.png", "still", false, false, "Mad Dog");
    var ursula = new MakeFoe("Ursula", 12, 32, 32, 14, 20, 4, "ursula.jpg", "ursula.gif", "ursula.png", "still", true, false, "Blue Crow");
    var lyon = new MakeFoe("Lyon", 25, 55, 55, 23, 12, 8, "lyon.jpg", "lyon.gif", "lyon.png", "still", true, false, "Necromancer");
    var nergal = new MakeFoe("Nergal", 25, 60, 60, 25, 7, 11, "nergal.png", "nergal.gif", "nergal.png", "still", true, false, "Dark Druid");
    var zephiel = new MakeFoe("Zephiel", 25, 50, 50, 24, 3, 15, "zephiel.jpg", "zephiel.gif", "zephiel.png", "still", false, false, "Extinction King");

    linus.setSound(4, 1, 0, 2, 1, 0);
    lloyd.setSound(3, 2, 0, 1, 1, 0);
    jaffar.setSound(3, 1, 0, 1, 1, 0);
    lyon.setSound(2, 1, 0, 1, 2, 0);
    ursula.setSound(2, 2, 0, 1, 1, 0);
    zephiel.setSound(2, 1, 0, 1, 1, 0);

    mauthedoog.setSound(1, 0, 0, 0, 0, 0);
    bael.setSound(1, 0, 0, 0, 0, 0);
    cyclops.setSound(1, 0, 0, 0, 0, 0);
    deathgoyle.setSound(1, 0, 0, 0, 0, 0);
    dracozombie.setSound(1, 0, 0, 0, 0, 0);
    entombed.setSound(1, 0, 0, 0, 0, 0);
    gwyllgi.setSound(1, 0, 0, 0, 0, 0);
    idunn.setSound(1, 0, 0, 0, 0, 0);

    ///END FOE OBJECTS

    ///GLOBAL VARIABLES///

    var chosenOne, chosenFoe, playSong;
    var heroChosen = false, isFoeChosen = false, playMusic = false;
    var char = [lyn, hector, eliwood, roy, athos];
    console.log(char)
    var foes = [bael, cyclops, deathgoyle, dracozombie, entombed, firedragon, gwyllgi, idunn, jaffar, linus, lloyd, lyon, mauthedoog, nergal, ursula, zephiel]
    var chosenFoes = [];
    var levelupSE = new Audio("../rpg/assets/sound/se/levelup.wav");
    var statUpSFX = new Audio("../rpg/assets/sound/se/snes.wav");

    var audioList = [new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/cgfxplmf/13%20truth%2C%20despair%2C%20and%20hope.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/xggvmrbc/14%20land%20of%20promise.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/zbrakpuu/29%20the%20prince%27s%20despair.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/skcatlcg/31%20sacred%20strength.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/rzrzrbso/44%20lyon.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/jwxdtxdx/45%20lost%20heart.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-25th-anniversary-concert-bonus/bjelkpdm/18.%20Binding%20Blade.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-25th-anniversary-concert-bonus/qpgclfav/19.%20Black%20Fang.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-25th-anniversary-concert-bonus/txzxlpek/24.%20Radiant%20Dawn.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/urfxclbk/08%20Suspicious~%20Wyvern%20Generals%27%20theme.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/qrlkihks/07%20Princess%20of%20Destiny.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/mxfetxjn/09%20Dark%20Priestess.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/rbwrncdz/10%20Whose%20battle.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/jthmbagw/12%20Shaman%20in%20the%20Dark.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/xkhmfeuj/31%20Softly%20with%20Grace.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/booapflv/32%20Everything%20into%20the%20Dark.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/fseaunro/41%20A%20Knight%27s%20Oath.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/qwmdrzet/33%20Campaign%20of%20Fire.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/mxkfeqdb/40%20Together%2C%20We%20Ride%21.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/klwvioga/48%20The%20Archsage%20Athos.mp3")]

    ///END GLOBAL VARIABLES///

    ///OBJECT-FUNCTIONS///

    //On game over, returns the base stats of playable characters to their base values
    function resetStats() {
        this.lvl = this.baseLvl;
        this.hp = this.baseHP;
        this.maxHP = this.baseHP;
        this.atk = this.baseAtk;
        this.def = this.baseDef;
        this.spd = this.baseSpd;
        this.res = this.baseRes;
    };

    function levelup() {
        levelupSE.play();

        this.level++;
        $("#combatLog").prepend("\r\n");
        this.res = statup(this.resgr, this.res, " Res +1! ");
        this.def = statup(this.defgr, this.def, " Def +1! ");
        this.spd = statup(this.spdgr, this.spd, " Spd +1! ");
        this.atk = statup(this.atkgr, this.atk, " Atk +1! ");
        this.maxHP = statup(this.hpgr, this.maxHP, "HP +1! ");
        $("#combatLog").prepend(this.name + " leveled up!\r\n");
        this.enterArena();
    };

    //Displays the unit chosen in the arena
    function fillArena(divSide) {
        $(divSide).empty();

        //Displays the rest of the info at the bottom with rounded lower corners
        var botInfo = profBuilder(this.level + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "Level: ", this.prof + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        botInfo += profBuilder(this.hp, "HP: ", "");
        botInfo += profBuilder(this.maxHP, " / ", "<br>");
        botInfo += profBuilder(this.atk, "Attack: ", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        botInfo += profBuilder(this.spd, "Speed: ", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        botInfo += profBuilder(this.def, "Defense: ", "");

        //Unused at the moment
        // if (this.hasOwnProperty("res")) {
        //     botInfo += profBuilder(this.res, "&nbsp;&nbsp;Resistance: ", "");
        // };

        var arenaCardDiv = makeDiv("div", "blackBG", "", "");
        var arenaTopDiv = makeDiv("div", "charText topBox", "html", this.name);
        var arenaImageDiv = makeDiv("img", "charImage", "src", this.portrait);
        var arenaBotDiv = makeDiv("div", "charText botBox", "html", botInfo);

        arenaCardDiv.append(arenaTopDiv, arenaImageDiv, arenaBotDiv);

        $(divSide).append(arenaCardDiv);
    };

    function allCharSounds(arenaVal, attackVal, critVal, damVal, deathVal, pestVal) {

        if (arenaVal) {
            this.arenaSound = noisyFolk(audioArenaPath, this.name.toLowerCase() + "/arena", arenaVal);
        };
        if (attackVal) {
            this.atkSound = noisyFolk(audioAttackPath, this.name.toLowerCase() + "/attack", attackVal);
        };
        if (critVal) {
            this.critSound = noisyFolk(audioCritPath, this.name.toLowerCase() + "/critical", critVal);
        };
        if (damVal) {
            this.damSound = noisyFolk(audioDamagePath, this.name.toLowerCase() + "/damaged", damVal);
        };
        if (deathVal) {
            this.deathSound = noisyFolk(audioDeathPath, this.name.toLowerCase() + "/death", deathVal);
        };
        if (pestVal) {
            this.pestSound = noisyFolk(audioPestPath, this.name.toLowerCase() + "/pester", pestVal);
        };
    };

    ///END OBJECT-FUNCTIONS///

    ///FUNCTIONS///

    //Adds all the sounds for a characters voicelines to a list.
    //To be improved at a future date with an app that counts files in a directory
    function noisyFolk(basePath, extension, totVoices) {
        var tempAudioList = [];
        for (var i = 0; i < totVoices; i++) {
            var tempAudioVal = basePath + extension + i + ".wav";
            tempAudioList.push(tempAudioVal);
        };
        return tempAudioList;
    };

    //Takes the object 
    function playCharAudio(audioList) {
        if (audioList) {
            var tempSound = audioList[Math.floor(Math.random() * audioList.length)];
            var soundToPlay = new Audio(tempSound);
            soundToPlay.play();
        };
    };

    //Sets the foe chosen based on value sent
    function foePick(value) {
        isFoeChosen = true;
        $("#foeSelector").empty();
        $("#rerollButton").empty();
        chosenFoe = chosenFoes[value];
        chosenFoe.enterArena();
        playCharAudio(chosenFoe.arenaSound);
    };

    //Sets the character chosen based on value sent
    function heroPick(value) {
        heroChosen = true;
        $("#charChooser").empty();
        chosenOne = char[value];
        chosenOne.enterArena();
        playCharAudio(chosenOne.arenaSound);
        setFoeOpt();
        makeReRollable();
    };

    //Places the reroll button on the page
    function makeReRollable() {
        var rerollButt = makeDiv("button", "rerollFoe btn btn-danger", "type", "button");
        rerollButt.html("Reroll");

        $("#rerollButton").append(rerollButt);
    };

    //Takes arguments for creating a Javascript div element and returns the div
    function makeDiv(divType, divClass, divAttrType, divData) {
        var tempDiv = $("<" + divType + ">");
        tempDiv.addClass(divClass);

        if (divAttrType === "html") {
            tempDiv.html(divData);
        } else if (!divAttrType) {
            return tempDiv;
        } else {
            tempDiv.attr(divAttrType, divData);
        };

        return tempDiv;
    };

    //Visible shorthand for setting html in a div
    function profBuilder(stat, statText, spacingText) {
        return statText + stat + spacingText;
    };

    //General function that places 4 selectable units for player or foe
    function chooserRow(hdrText, divSide, charClass, imageClass, unitList) {
        var initHeaderDiv = makeDiv("div", "col-12 centerGold", "html", hdrText);
        $(divSide).append(initHeaderDiv);

        for (var i = 0; i < 4; i++) {
            //All character card divs are placed in initChDiv.
            var initChDiv = makeDiv("div", "col-sm-6 col-md-3 " + charClass, "data-char", unitList[i].name);
            var chCard = makeDiv("div", "blackBG clickChar", "", "");
            var chDivName = makeDiv("div", "charText topBox", "html", unitList[i].name);
            var chDivPort = makeDiv("img", imageClass, "src", unitList[i].portrait);

            //All character stat info is placed in initChStats.
            var initChStats = makeDiv("div", "charText botBox", "html", "");
            initChStats.append(profBuilder(unitList[i].prof, "", "<br>"))
            initChStats.append(profBuilder(unitList[i].level, "Level: ", "<br>"));
            initChStats.append(profBuilder(unitList[i].hp, "HP: ", "<br>"));
            initChStats.append(profBuilder(unitList[i].atk, "Attack: ", "&nbsp;&nbsp;"));
            initChStats.append(profBuilder(unitList[i].spd, "Speed: ", "<br>"));
            initChStats.append(profBuilder(unitList[i].def, "Defense: ", "&nbsp;&nbsp;"));

            //Unused at the moment!
            // if (this.hasOwnProperty("res")) {
            //     initChStats.append(profBuilder(unitList[i].res, "Resistance: ", "<br>"));
            // };

            chCard.append(chDivName, chDivPort, initChStats)
            //Append name, portrait, and stats to main div
            initChDiv.append(chCard, "<br>");

            $(divSide).append(initChDiv)
        };
    };

    //Places the choosable characters on the page when called
    function initGame() {
        chooserRow("Select a Hero", "#charChooser", "charOpt", "charImage", char);
    };

    //Randomizes possible foes and adds them to the page in a set of 4
    function setFoeOpt() {
        //Call foe randomizer to set 4 potential foes before placing on page
        setFoeNum();
        chooserRow("Choose Your Foe", "#foeSelector", "mainfoe", "foeImage", chosenFoes);
    };

    //Performs the math for randomizing foes and adds 4 random foes to list
    function setFoeNum() {
        var newFoe = foes[Math.floor(Math.random() * foes.length)];
        for (var i = 0; i < 4; i++) {
            while (chosenFoes.includes(newFoe)) {
                newFoe = foes[Math.floor(Math.random() * foes.length)];
            };
            //Only push to list after checking if foe is already on list.
            chosenFoes.push(newFoe);
        };
    };

    //Determine whether a stat is increased upon levelup based on growth. Display if so.
    function statup(growth, stat, statText) {
        if (growth > Math.floor(Math.random() * 100)) {
            statUpSFX.play();
            $("#combatLog").prepend(statText);
            stat++;
            return stat;
        } else
            return stat;
    };

    //Adds text to combat log regarding Elixir status
    function elixLog(numLeft) {
        if (numLeft > 1) {
            $("#combatLog").prepend(chosenOne.name + " used an elixir. " + chosenOne.elixirs + " elixirs remain.\r\n");
        } else if (numLeft === 1) {
            $("#combatLog").prepend(chosenOne.name + " used an elixir. " + chosenOne.elixirs + " elixir remains.\r\n");
        } else {
            $("#combatLog").prepend(chosenOne.name + " used an elixir. There are no elixirs left!\r\n");
        };
    };

    ///COMBAT FUNCTIONS///

    function gifAttack(attacker, defender, critical) {
        if (critical === true) {
            var gif = attacker.animCrit;
        } else {
            var gif = attacker.anim;
        }
        var defgif = defender.anim;
        if (attacker === chosenOne) {
            $("#combatArea").html("<img class='col-6'> src=" +
                "<canvas class='col-6'>")

            //move prof box with attack $("#box").animate({marginLeft: "300px"});
            //audio on hit http://soundbible.com/grab.php?id=995&type=wav
        };
    };

    //Does the math for hero attack
    function heroAttack(hero) {
        var atkDamage = hero.atk;
        if (critRoll()) {
            playCharAudio(chosenOne.critSound);
            atkDamage = (((atkDamage * 2) - chosenFoe.def) * hero.atkBonus);
            combatText(hero, chosenFoe, atkDamage, " critically");
        } else {
            playCharAudio(chosenOne.atkSound);
            atkDamage = ((atkDamage - chosenFoe.def) * hero.atkBonus);
            combatText(hero, chosenFoe, atkDamage, "");
        }
        chosenFoe.hp -= noNegAtk(atkDamage);
        chosenFoe.enterArena();
    };

    //Does the math for foe attack
    function foeAttack() {
        playCharAudio(chosenFoe.atkSound);
        var foeDam;
        if (chosenOne.guard) {
            foeDam = (chosenFoe.atk - (Math.floor(chosenOne.def * 1.5)))
            chosenOne.guard = false;
        } else {
            foeDam = (chosenFoe.atk - chosenOne.def)
        }
        chosenOne.hp -= noNegAtk(foeDam);
        combatText(chosenFoe, chosenOne, foeDam, "");
        chosenOne.enterArena();
    };

    //Sends combat info to be displayed in the log.
    function combatText(attacker, defender, damage, critical) {
        $("#combatLog").prepend(attacker.name + critical + " struck " + defender.name + " for " + damage + " damage.\r\n")
    };

    /*Checks first if user is fast enough to strike twice
    Then checks if foe can double. Initiates attacks and
    Checks death conditions if met*/
    function doubleAttack() {
        if (chosenOne.spd > (chosenFoe.spd + 3)) {
            heroAttack(chosenOne);
            if (checkDeath(chosenFoe)) {
                return;
            };
        } else if (chosenFoe.spd > (chosenOne.spd + 3)) {
            foeAttack();
            if (checkDeath(chosenOne)) {
                return;
            };
        } else {
            return;
        };
    };

    function noNegAtk(damage) {
        if (damage < 1) {
            return 0;
        } else {
            return damage;
        };
    };

    //Does the math for critical hits. Player Only.
    function critRoll() {
        var critRoll = Math.floor(Math.random() * 100);
        if (critRoll < chosenOne.crit) {
            return true;
        } else {
            return false;
        };
    };

    //Checks if the unit is dead
    function checkDeath(unit) {
        if (unit.hp < 1) {
            playCharAudio(unit.deathSound);
            if (unit === chosenOne) {
                //Game Over. Clear all divs, values, etc. And return to initial game values.
                setTimeout(function () {
                    $("#combatLog").prepend("The brave hero was defeated in combat... and never seen from again.\r\n");
                }, 1000);
                $("#playerSide").empty();
                $("#foeSide").empty();
                heroChosen = false, isFoeChosen = false;
                chosenOne.resetUnit();
                chosenOne = "", chosenFoe = "";
                setTimeout(function () {
                    $("#combatLog").text("");
                    initGame();
                }, 4000);

                return true;

            } else {
                //Clear foe from div, run level up, and rerun foepick
                $("#foeSide").empty();
                setTimeout(function () {
                    $("#combatLog").prepend("Victory! The vicious " + chosenFoe.name + " was defeated!\r\n");
                    isFoeChosen = false,
                        chosenFoe.hp = chosenFoe.maxHP;
                    chosenFoe = "";
                    chosenFoes = [];
                    setFoeOpt();
                    makeReRollable();
                    setTimeout(function () {
                        chosenOne.levelup();
                    }, 2000);
                }, 1000);
                return true;
            };
        } else {
            return false;
        };
    };

    function fullCombat() {
        heroAttack(chosenOne);
        setTimeout(function() {
            if (checkDeath(chosenFoe)) {

                setTimeout(function(){
                    attackButtOn();
                }, 2000);
                return;
    
                //If foe not defeated, foe attacks
            } else {
                foeAttack();
                setTimeout(function(){
                    if (checkDeath(chosenOne)) {
                        return;
        
                        //If user not defeated, check for doubles
                    } else {
                        doubleAttack();
                        setTimeout(function(){
                            attackButtOn();
                        }, 2000);
                    };
                }, 2000);        
            };
        }, 2000);
    };

    ///END COMBAT FUNCTIONS///

    ///EVENT LISTENERS///

    //On button click, rerolls foes and clears relevant lists
    $("#rerollButton").on("click", function () {
        $("#foeSelector").empty();
        chosenFoes = [];
        setFoeOpt();
    });

    //When a foe is clicked, calls function to push them into the arena
    $("#foeSelector").on("click", ".mainfoe", function () {
        for (var i = 0; i < chosenFoes.length; i++) {
            if (this.getAttribute("data-char") === chosenFoes[i].name) {
                foePick(i);
            };
        };
    });

    //Determines which unit is the player hero.
    $("#charChooser").on("click", ".charOpt", function () {
        for (var i = 0; i < char.length; i++) {
            if (this.getAttribute("data-char") === char[i].name) {
                heroPick(i);
            };
        };
        attackButtOn();
    });

    function begoneListener(div, listenUp) {
        $(div).off(listenUp);
    };

    function attackButtOn() {
        $("#btnAtk").on("click", function () {
            //Button does nothing if foe and hero inactive
            if (!chosenOne || !chosenFoe) {
                $("#combatLog").prepend("I have nothing to attack!\r\n");
                playCharAudio(chosenOne.pestSound);
                return;

                //Run hero attack, check if foe defeated
            } else {
                begoneListener("#btnAtk", "click")
                fullCombat();
            };
        });
    };

    $("#btnHeal").on("click", function () {
        if (chosenOne) {
            if (chosenOne.elixirs > 0) {
                if (chosenOne.hp < chosenOne.maxHP) {
                    chosenOne.elixirs--;
                    chosenOne.hp = chosenOne.maxHP;
                    elixLog(chosenOne.elixirs);
                    chosenOne.guard = true;
                    chosenOne.enterArena();
                    if (chosenFoe != null && chosenFoe != "") {
                        foeAttack();
                        checkDeath(chosenOne);
                    };
                } else {
                    $("#combatLog").prepend("There's no need for that now.\r\n");
                    playCharAudio(chosenOne.pestSound);
                };

            } else {
                $("#combatLog").prepend("I'm all out of elixirs.\r\n");
                playCharAudio(chosenOne.pestSound);
            };
        };
    });

    $("#btnGuard").on("click", function () {
        if (chosenFoe) {
            chosenOne.guard = true;
            foeAttack();
            checkDeath(chosenOne);
        } else {
            $("#combatLog").prepend("There's nothing to guard from.\r\n");
            playCharAudio(chosenOne.pestSound);
        };
    });

    $("#btnAlly").on("click", function () {
        if (chosenOne != null && chosenOne != "") {
            if (chosenFoe != null && chosenFoe != "") {
                if (chosenOne.allyCalls > 0) {
                    chosenOne.elixirs = 3;
                    chosenOne.allyCalls--;
                    chosenOne.hp = chosenOne.maxHP;
                    chosenOne.guard = true;
                    fillArena(chosenOne, "#playerSide");
                } else {
                    $("#combatLog").prepend("I am unable to call any further allies.\r\n");
                    playCharAudio(chosenOne.pestSound);
                };
            } else {
                $("#combatLog").prepend("There's no need for that now.\r\n");
                playCharAudio(chosenOne.pestSound);
            };
        };
    });

    $("#btnPlay").on("click", function () {
        if (!playMusic) {
            playMusic = true;
            var randSong = Math.floor(Math.random() * audioList.length);
            playSong = audioList[randSong]
            playSong.play();
            playSong.onended = function () {
                nextSong(playSong);
            };
        };
    });

    function nextSong(song) {
        if (playMusic) {
            var randSong = Math.floor(Math.random() * audioList.length);
            playSong = audioList[randSong]
            playSong.play();
            playSong.onended = function () {
                nextSong(playSong);
            };
        };
    };

    $("#btnStop").on("click", function () {
        playMusic = false;
        playSong.pause();
    });

    ///END EVENT LISTENERS///

    ///END FUNCTIONS///

    initGame();

    //This doesn't work because the click listener isn't updated with new elements

    /* Cleaning up into one click function
    $("#charChooser").on("click", "#Eliwood", function () {
        heroPick(2);
        console.log(this);
    })
 
    $(".mainfoe").on("click", function () {
        console.log(this);
    });
 
    $("#charChooser").on("click", "#Lyn", function () {
        heroPick(0);
        console.log(this);
    })
 
    $("#charChooser").on("click", "#Roy", function () {
        heroPick(3);
        console.log(this);
    })
 
    */
    /*
     $("#Lyn").click(function () {
         heroPick(0);
         console.log(this);
     })
 
     $("#Hector").click(function () {
         heroPick(1);
         console.log(this);
     })
 
     $("#Eliwood").click(function () {
         heroPick(2);
         console.log(this);
     })
 
     $("#Roy").click(function () {
         heroPick(3);
         console.log(this);
     })
     */

    //Everything below here is for testing::
    //

    /*$("#0").click(function () {
        console.log("this click works");
        //foePick();
    })
 
    function fillPArena(unit) {
        $("#playerSide").empty();
        $("#playerSide").append(
            profBuilder(unit.name, "<div class='charText topBox'>", "</div>") +
            profBuilder(unit.portrait, "<img class = 'charImage' src =", ">") +
            "<div class='charText botBox'>" +
            profBuilder(unit.level, "Level: ", "<br>") +
            profBuilder(unit.hp, "HP: ", "") +
            profBuilder(unit.maxHP, " / ", "<br>") +
            profBuilder(unit.atk, "Attack: ", "&nbsp;&nbsp;") +
            profBuilder(unit.spd, "Speed: ", "<br>") +
            profBuilder(unit.def, "Defense: ", "&nbsp;&nbsp;") +
            profBuilder(unit.res, "Resistance: ", "</div><br></div>"));
    }
 
        function fillFArena(unit) {
        $("#foeSide").empty();
        $("#foeSide").append(
            profBuilder(unit.name, "<div class='charText topBox'>", "</div>") +
            profBuilder(unit.portrait, "<img class = 'charImage' src =", ">") +
            "<div class='charText botBox'>" +
            profBuilder(unit.level, "Level: ", "<br>") +
            profBuilder(unit.hp, "HP: ", "") +
            profBuilder(unit.maxHP, " / ", "<br>") +
            profBuilder(unit.atk, "Attack: ", "&nbsp;&nbsp;") +
            profBuilder(unit.spd, "Speed: ", "<br>") +
            profBuilder(unit.def, "Defense: ", "</div><br></div>"));
    }
 
    */

});