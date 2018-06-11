$(document).ready(function () {

    //Initialize path to be used on all assets
    var portPath = "../assets/images/rpg-game/portrait/";
    var animPath = "../assets/images/rpg-game/fight/";
    var staticPath = "../assets/images/rpg-game/static/";


    //Player Objects Begin Here:
    //

    var lyn = {
        name: "Lyn",
        level: 1,
        hp: 30,
        maxHP: 30,
        atk: 8,
        spd: 12,
        def: 2,
        res: 2,
        crit: 30,
        hpgr: 100,
        atkgr: 50,
        spdgr: 80,
        defgr: 35,
        resgr: 40,
        portrait: portPath + "lyn.jpg",
        anim: animPath + "lyn.gif",
        animCrit: animPath + "lyn_crit.gif",
        animStatic: staticPath + "lyn.png",
        animState: "still",
        isChosen: false,
        guard: false,
        animSpell: "",
        elixirs: 3,
        //ally: [
        //    char[1], char[2], char[3], char[4]
        //],
        allyCalls: 1,
        atkBonus: 1
    };

    var hector = {
        name: "Hector",
        level: 1,
        hp: 35,
        maxHP: 35,
        atk: 10,
        spd: 6,
        def: 7,
        res: 1,
        crit: 10,
        hpgr: 100,
        atkgr: 80,
        spdgr: 30,
        defgr: 60,
        resgr: 10,
        portrait: portPath + "hector.jpg",
        anim: animPath + "hector.gif",
        animCrit: animPath + "hector_crit.gif",
        animStatic: staticPath + "hector.png",
        animState: "still",
        isChosen: false,
        guard: false,
        animSpell: "",
        elixirs: 3,
        // ally: [
        //     char[0], char[2], char[3], char[4]
        // ],
        allyCalls: 1,
        atkBonus: 1
    };

    var eliwood = {
        name: "Eliwood",
        level: 1,
        hp: 33,
        maxHP: 33,
        atk: 9,
        spd: 9,
        def: 4,
        res: 7,
        crit: 20,
        hpgr: 100,
        atkgr: 50,
        spdgr: 50,
        defgr: 50,
        resgr: 50,
        portrait: portPath + "eliwood.jpg",
        anim: animPath + "eliwood.gif",
        animCrit: animPath + "eliwood_crit.gif",
        animStatic: staticPath + "eliwood.png",
        animState: "still",
        isChosen: false,
        guard: false,
        animSpell: "",
        elixirs: 3,
        // ally: [
        //     char[0], char[1], char[3], char[4]
        // ],
        allyCalls: 1,
        atkBonus: 1
    };

    var roy = {
        name: "Roy",
        level: 5,
        hp: 39,
        maxHP: 39,
        atk: 15,
        spd: 12,
        def: 12,
        res: 9,
        crit: 25,
        hpgr: 100,
        atkgr: 70,
        spdgr: 70,
        defgr: 70,
        resgr: 70,
        portrait: portPath + "roy.jpg",
        anim: animPath + "roy.gif",
        animCrit: animPath + "roy_crit.gif",
        animStatic: staticPath + "roy.png",
        animState: "still",
        isChosen: false,
        guard: false,
        animSpell: "",
        elixirs: 3,
        // ally: [
        //     char[0], char[1], char[2], char[4]
        // ],
        allyCalls: 1,
        atkBonus: 1
    };

    var athos = {
        name: "Athos",
        level: 20,
        hp: 40,
        atk: 30,
        spd: 20,
        def: 18,
        res: 30,
        crit: 0,
        hpgr: 0,
        atkgr: 0,
        spdgr: 0,
        defgr: 0,
        resgr: 0,
        portrait: portPath + "athos.jpg",
        anim: animPath + "athos.gif",
        animStatic: staticPath + "athos.png",
        animState: "still",
        isChosen: false,
        guard: false,
        animSpell: "",
        elixirs: 3,
        // ally: [
        //     char[0], char[1], char[2], char[3]
        // ],
        maxHP: 40,
        atkBonus: 1
    };

    //End of Player Objects:
    //Begin Foe Objects:

    var entombed = {
        name: "Entombed",
        level: 1,
        hp: 22,
        maxHP: 22,
        atk: 9,
        spd: 2,
        def: 0,
        portrait: portPath + "entombed.png",
        anim: animPath + "entombed.gif",
        animStatic: staticPath + "entombed.png",
        animState: "still",
        animSpell: false
    };

    var bael = {
        name: "Bael",
        level: 2,
        hp: 27,
        maxHP: 27,
        atk: 12,
        spd: 5,
        def: 2,
        portrait: portPath + "bael.png",
        anim: animPath + "bael.gif",
        animStatic: staticPath + "bael.png",
        animState: "still",
        animSpell: false
    };

    var mauthedoog = {
        name: "Mauthedoog",
        level: 3,
        hp: 23,
        maxHP: 23,
        atk: 10,
        spd: 15,
        def: 0,
        portrait: portPath + "mauthedoog.png",
        anim: animPath + "mauthedoog.gif",
        animStatic: staticPath + "mauthedoog.png",
        animState: "still",
        animSpell: false
    };

    var deathgoyle = {
        name: "Deathgoyle",
        level: 4,
        hp: 32,
        maxHP: 32,
        atk: 12,
        spd: 6,
        def: 7,
        portrait: portPath + "deathgoyle.png",
        anim: animPath + "deathgoyle.gif",
        animStatic: staticPath + "deathgoyle.png",
        animState: "still",
        animSpell: false
    };

    var gwyllgi = {
        name: "Gwyllgi",
        level: 7,
        hp: 34,
        maxHP: 34,
        atk: 14,
        spd: 19,
        def: 2,
        portrait: portPath + "gwyllgi.jpg",
        anim: animPath + "gwyllgi.gif",
        animStatic: staticPath + "gwyllgi.png",
        animState: "still",
        animSpell: false
    };

    var cyclops = {
        name: "Cyclops",
        level: 10,
        hp: 44,
        maxHP: 44,
        atk: 20,
        spd: 5,
        def: 4,
        portrait: portPath + "cyclops.jpg",
        anim: animPath + "cyclops.gif",
        animStatic: staticPath + "cyclops.png",
        animState: "still",
        animSpell: false
    };

    var dracozombie = {
        name: "Draco-Zombie",
        level: 15,
        hp: 40,
        maxHP: 40,
        atk: 18,
        spd: 12,
        def: 5,
        portrait: portPath + "dracozombie.png",
        anim: animPath + "dracozombie.gif",
        animStatic: staticPath + "dracozombie.png",
        animState: "still",
        animSpell: true
    };

    var firedragon = {
        name: "FireDragon",
        level: 25,
        hp: 50,
        maxHP: 50,
        atk: 21,
        spd: 15,
        def: 7,
        portrait: portPath + "firedragon.jpg",
        anim: animPath + "firedragon.gif",
        animStatic: staticPath + "firedragon.png",
        animState: "still",
        animSpell: true
    };

    var idunn = {
        name: "Idunn",
        level: 30,
        hp: 60,
        maxHP: 60,
        atk: 30,
        spd: 10,
        def: 10,
        portrait: portPath + "idunn.png",
        anim: animPath + "idunn.gif",
        animStatic: staticPath + "idunn.png",
        animState: "still",
        animSpell: true
    }

    var jaffar = {
        name: "Jaffar",
        level: 20,
        hp: 30,
        maxHP: 30,
        atk: 20,
        spd: 24,
        def: 5,
        portrait: portPath + "jaffar.png",
        anim: animPath + "jaffar.gif",
        animStatic: staticPath + "jaffar.png",
        animState: "still",
        animSpell: false
    };

    var linus = {
        name: "Linus",
        level: 14,
        hp: 43,
        maxHP: 43,
        atk: 22,
        spd: 14,
        def: 7,
        portrait: portPath + "linus.png",
        anim: animPath + "linus.gif",
        animStatic: staticPath + "linus.png",
        animState: "still",
        animSpell: false
    };

    var lloyd = {
        name: "Lloyd",
        level: 15,
        hp: 37,
        maxHP: 37,
        atk: 15,
        spd: 23,
        def: 5,
        portrait: portPath + "lloyd.jpg",
        anim: animPath + "lloyd.gif",
        animStatic: staticPath + "lloyd.png",
        animState: "still",
        animSpell: false
    };

    var ursula = {
        name: "Ursula",
        level: 12,
        hp: 32,
        maxHP: 32,
        atk: 14,
        spd: 20,
        def: 4,
        portrait: portPath + "ursula.jpg",
        anim: animPath + "ursula.gif",
        animStatic: staticPath + "ursula.png",
        animState: "still",
        animSpell: true
    };

    var lyon = {
        name: "Lyon",
        level: 25,
        hp: 55,
        maxHP: 55,
        atk: 23,
        spd: 12,
        def: 8,
        portrait: portPath + "lyon.jpg",
        anim: animPath + "lyon.gif",
        animStatic: staticPath + "lyon.png",
        animState: "still",
        animSpell: true
    };

    var nergal = {
        name: "Nergal",
        level: 25,
        hp: 60,
        maxHP: 60,
        atk: 25,
        spd: 7,
        def: 11,
        portrait: portPath + "nergal.png",
        anim: animPath + "nergal.gif",
        animStatic: staticPath + "nergal.png",
        animState: "still",
        animSpell: true
    };

    var zephiel = {
        name: "Zephiel",
        level: 25,
        hp: 50,
        maxHP: 50,
        atk: 24,
        spd: 3,
        def: 15,
        portrait: portPath + "zephiel.jpg",
        anim: animPath + "zephiel.gif",
        animStatic: staticPath + "zephiel.png",
        animState: "still",
        animSpell: false
    };

    //End of Foe Objects
    //End of Character Initialization Area:
    //
    var chosenOne, chosenFoe, playSong;
    var heroChosen = false, isFoeChosen = false, playMusic = false;
    var char = [lyn, hector, eliwood, roy, athos];
    var foes = [bael, cyclops, deathgoyle, dracozombie, entombed, firedragon, gwyllgi, idunn, jaffar, linus, lloyd, lyon, mauthedoog, nergal, ursula, zephiel]
    var chosenFoes = [];

    var audioList = [new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/cgfxplmf/13%20truth%2C%20despair%2C%20and%20hope.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/xggvmrbc/14%20land%20of%20promise.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/zbrakpuu/29%20the%20prince%27s%20despair.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/skcatlcg/31%20sacred%20strength.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/rzrzrbso/44%20lyon.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-the-sacred-stones/jwxdtxdx/45%20lost%20heart.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-25th-anniversary-concert-bonus/bjelkpdm/18.%20Binding%20Blade.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-25th-anniversary-concert-bonus/qpgclfav/19.%20Black%20Fang.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-25th-anniversary-concert-bonus/txzxlpek/24.%20Radiant%20Dawn.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/urfxclbk/08%20Suspicious~%20Wyvern%20Generals%27%20theme.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/qrlkihks/07%20Princess%20of%20Destiny.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/mxfetxjn/09%20Dark%20Priestess.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/rbwrncdz/10%20Whose%20battle.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/jthmbagw/12%20Shaman%20in%20the%20Dark.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/xkhmfeuj/31%20Softly%20with%20Grace.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/booapflv/32%20Everything%20into%20the%20Dark.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/fseaunro/41%20A%20Knight%27s%20Oath.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/qwmdrzet/33%20Campaign%20of%20Fire.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/mxkfeqdb/40%20Together%2C%20We%20Ride%21.mp3"), new Audio("http://66.90.93.122/ost/fire-emblem-6-7-premium-soundtrack/klwvioga/48%20The%20Archsage%20Athos.mp3")]

    //End of Global Variable Initialization:
    //

    function resetStats() {
        lyn.level = 1, lyn.hp = 30, lyn.maxHP = 30, lyn.atk = 8, lyn.spd = 12, lyn.def = 2, lyn.res = 2;
        hector.level = 1, hector.hp = 35, hector.maxHP = 35, hector.atk = 10, hector.spd = 6, hector.def = 8, hector.res = 1;
        eliwood.level = 1, eliwood.hp = 33, eliwood.maxHP = 33, eliwood.atk = 9, eliwood.spd = 9, eliwood.def = 4, eliwood.res = 7;
        roy.level = 5, roy.hp = 39, roy.maxHP = 39, roy.atk = 15, roy.spd = 12, roy.def = 12, roy.res = 9;
    }

    //Unused at the moment. Moves foe into the Arena.
    function foePick(value) {
        isFoeChosen = true;
        $("#foeSelector").empty();
        $("#rerollButton").empty();
        chosenFoe = chosenFoes[value];
        //console.log(chosenFoe);
        fillArena(chosenFoe, "#foeSide");
    }

    //Sets the character chosen based on value sent
    function heroPick(value) {
        heroChosen = true;
        $("#charChooser").empty();
        chosenOne = char[value];
        //console.log(chosenOne);
        fillArena(chosenOne, "#playerSide");
        setFoeOpt();
        makeReRollable();
    };

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

    //Attempting to combine similar code by merging fillFArena and fillPArena
    function fillArena(unit, divSide) {
        $(divSide).empty();

        //Displays name with upper corners of box rounded
        var topInfo = $("<div>");
        topInfo.attr("class", "charText topBox");
        topInfo.html(unit.name);
        console.log(topInfo);

        //Displays portrait in the middle
        var portrInfo = $("<img>");
        portrInfo.attr("class", "charImage");
        portrInfo.attr("src", unit.portrait);

        //Displays the rest of the info at the bottom with rounded lower corners
        var botInfo = $("<div>");
        botInfo.attr("class", "charText botBox");
        botInfo += profBuilder(unit.level, "Level: ", "<br>");
        botInfo += profBuilder(unit.hp, "HP: ", "");
        botInfo += profBuilder(unit.maxHP, " / ", "<br>");
        botInfo += profBuilder(unit.atk, "Attack: ", "&nbsp;&nbsp;");
        botInfo += profBuilder(unit.spd, "Speed: ", "<br>");
        botInfo += profBuilder(unit.def, "Defense: ", "<br>");
        console.log(unit.res);
        if (unit.hasOwnProperty(unit.res)) {
            botInfo += profBuilder(unit.res, "Resistance: ", "")
        };
        botInfo += "<br>";

        $(divSide).append(
            topInfo + portrInfo + botInfo)
    };

    //Sets and returns parameters
    function profBuilder(stat, statText, spacingText) {
        return statText + stat + spacingText;
    };

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

    //Places the reroll button on the page
    function makeReRollable() {
        $("#rerollButton").append("<div class='rerollFoe'>" +
            "<button type='button' class='btn btn-danger'>Reroll</button></div>");
    };

    //Does the math for randomizing foes
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

    //Builds Character Chooser
    function initGame() {
        if (!heroChosen) {
            $("#charChooser").append(
                "<div class='col-12 centerGold'>Select a Hero</div>")
            for (var i = 0; i < 4; i++) {
                $("#charChooser").append(
                    "<div class='col-sm-6 col-md-3 charOpt' data-char=" + char[i].name + ">" +
                    profBuilder(char[i].name, "<div class='charText topBox clickChar'>", "</div>") +
                    profBuilder(char[i].portrait, "<img class = 'charImage clickChar' src =", ">") +
                    "<div class='charText botBox clickChar'>" +
                    profBuilder(char[i].level, "Level: ", "<br>") +
                    profBuilder(char[i].hp, "HP: ", "<br>") +
                    profBuilder(char[i].atk, "Attack: ", "&nbsp;&nbsp;") +
                    profBuilder(char[i].spd, "Speed: ", "<br>") +
                    profBuilder(char[i].def, "Defense: ", "&nbsp;&nbsp;") +
                    profBuilder(char[i].res, "Resistance: ", "</div><br></div>"));
                //console.log("character " + char[i].name + " has been appended")
            };
        };
    };

    //Randomizes possible foes and lists them
    function setFoeOpt() {
        if (!isFoeChosen) {
            //console.log("entered if foe false");
            setFoeNum();
            console.log(chosenFoes);
            $("#foeSelector").append(
                "<div class='col-12 centerGold'>Choose Your Foe</div>"
            )
            for (var i = 0; i < 4; i++) {
                console.log("build foes:" + chosenFoes[i].name);
                $("#foeSelector").append(
                    "<div class='col-sm-6 col-md-3 col-lg-3 mainfoe' data-char=" + chosenFoes[i].name + ">" +
                    profBuilder(chosenFoes[i].name, "<div class='charText topBox clickChar'>", "</div>") +
                    profBuilder(chosenFoes[i].portrait, "<img class = 'foeImage clickChar' src =", ">") +
                    "<div class='charText botBox clickChar'>" +
                    profBuilder(chosenFoes[i].level, "Level: ", "<br>") +
                    profBuilder(chosenFoes[i].hp, "HP: ", "<br>") +
                    profBuilder(chosenFoes[i].atk, "Attack: ", "&nbsp;&nbsp;") +
                    profBuilder(chosenFoes[i].spd, "Speed: ", "<br>") +
                    profBuilder(chosenFoes[i].def, "Defense: ", "</div><br></div>"));
            };
        };
    };

    function levelup() {
        console.log("entered level up");
        chosenOne.level++;
        $("#combatLog").prepend("\r\n");
        chosenOne.res = statup(chosenOne.resgr, chosenOne.res, " Res +1! ");
        chosenOne.def = statup(chosenOne.defgr, chosenOne.def, " Def +1! ");
        chosenOne.spd = statup(chosenOne.spdgr, chosenOne.spd, " Spd +1! ");
        chosenOne.atk = statup(chosenOne.atkgr, chosenOne.atk, " Atk +1! ");
        chosenOne.maxHP = statup(chosenOne.hpgr, chosenOne.maxHP, "HP +1! ");
        $("#combatLog").prepend(chosenOne.name + " leveled up!\r\n");
        fillArena(chosenOne, "#playerSide");
    };

    //Percentagewise increase of stats
    function statup(growth, stat, statText) {
        if (growth > Math.floor(Math.random() * 100)) {
            console.log(statText);
            $("#combatLog").prepend(statText)
            stat++;
            return stat;
        } else
            return stat;
    }

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
        }

    };


    //Battle Functions
    //

    //Does the math for hero attack
    function heroAttack(hero) {
        var atkDamage = hero.atk;
        if (critRoll()) {
            console.log("crit!")
            atkDamage = (((atkDamage * 2) - chosenFoe.def) * hero.atkBonus);
            combatText(hero, chosenFoe, atkDamage, " critically");
        } else {
            atkDamage = ((atkDamage - chosenFoe.def) * hero.atkBonus);
            combatText(hero, chosenFoe, atkDamage, "");
        }
        chosenFoe.hp -= noNegAtk(atkDamage);
        fillArena(chosenFoe, "#foeSide");
    };

    //Does the math for foe attack
    function foeAttack() {
        var foeDam;
        if (chosenOne.guard) {
            foeDam = (chosenFoe.atk - (Math.floor(chosenOne.def * 1.5)))
            chosenOne.guard = false;
        } else {
            foeDam = (chosenFoe.atk - chosenOne.def)
        }
        chosenOne.hp -= noNegAtk(foeDam);
        combatText(chosenFoe, chosenOne, foeDam, "");
        fillArena(chosenOne, "#playerSide");
    };

    //Sends combat info to be displayed in the log.
    function combatText(attacker, defender, damage, critical) {
        $("#combatLog").prepend(attacker.name + critical + " struck " + defender.name + " for " + damage + " damage.\r\n")
    }

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
            console.log(chosenFoe + "passes speed threshold");
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
        console.log(unit.name + "'s HP = " + unit.hp);
        if (unit.hp < 1) {
            if (unit === chosenOne) {
                //Game Over. Clear all divs, values, etc. And return to initial game values.
                $("#combatLog").prepend("The brave hero was defeated in combat... and never seen from again.\r\n");
                $("#playerSide").empty();
                $("#foeSide").empty();
                heroChosen = false, isFoeChosen = false;
                chosenOne.hp = chosenOne.maxHP;
                chosenOne = "", chosenFoe = "";
                resetStats();
                setTimeout(function () {
                    $("#combatLog").text("");
                }, 7000);
                initGame();
                return true;

            } else {
                //Clear foe from div, run level up, and rerun foepick
                $("#combatLog").prepend("Victory! The vicious " + chosenFoe.name + " was defeated!\r\n");
                $("#foeSide").empty();
                isFoeChosen = false,
                    chosenFoe.hp = chosenFoe.maxHP;
                chosenFoe = "";
                chosenFoes = [];
                setFoeOpt();
                makeReRollable();
                levelup();
                return true;
            };
        } else {
            return false;
        };
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

    //Click Functions
    //

    //Rerolls foes and clears relevant lists
    $("#rerollButton").on("click", function () {
        $("#foeSelector").empty();
        chosenFoes = [];
        setFoeOpt();
    });

    //When a foe is clicked, calls function to push them into the arena
    $("#foeSelector").on("click", ".mainfoe", function () {
        for (var i = 0; i < chosenFoes.length; i++) {
            //console.log(this);
            console.log(this.getAttribute("data-char"))
            if (this.getAttribute("data-char") === chosenFoes[i].name) {
                foePick(i);
            };
        };
    });

    //Determines which unit is the player hero.
    $("#charChooser").on("click", ".charOpt", function () {
        for (var i = 0; i < char.length; i++) {
            //console.log(this);
            console.log(this.getAttribute("data-char"));
            if (this.getAttribute("data-char") === char[i].name) {
                heroPick(i);
            };
        };
    });

    $("#btnAtk").on("click", function () {
        //console.log("attack clicked");
        //Button does nothing if foe and hero inactive
        if (chosenOne == null || chosenOne == "" || chosenFoe == null || chosenFoe == "") {
            //console.log("return zone");
            return;

            //Run hero attack, check if foe defeated
        } else {
            //console.log("attack start");
            heroAttack(chosenOne);
            if (checkDeath(chosenFoe)) {
                return;

                //If foe not defeated, foe attacks
            } else {
                foeAttack();
                if (checkDeath(chosenOne)) {
                    return;

                    //If user not defeated, check for doubles
                } else {
                    doubleAttack();
                };
            };
        };
    });

    $("#btnHeal").on("click", function () {
        if (chosenOne != null) {
            if (chosenOne.elixirs > 0) {
                if (chosenOne.hp < chosenOne.maxHP) {
                    chosenOne.elixirs--;
                    chosenOne.hp = chosenOne.maxHP;
                    elixLog(chosenOne.elixirs);
                    chosenOne.guard = true;
                    fillArena(chosenOne, "#playerSide");
                    if (chosenFoe != null && chosenFoe != "") {
                        foeAttack();
                    };
                } else {
                    $("#combatLog").prepend("There's no need for that now.\r\n");
                };

            } else {
                $("#combatLog").prepend("I'm all out of elixirs.\r\n");
            };
        };
    });

    $("#btnGuard").on("click", function () {
        if (chosenFoe != null && chosenFoe != "") {
            chosenOne.guard = true;
            foeAttack();
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
                    //heroAttack(chosenOne.ally[(Math.floor(Math.random() * 4))])
                } else {
                    $("#combatLog").prepend("I am unable to call any further allies.\r\n");
                };
            } else {
                $("#combatLog").prepend("There's no need for that now.\r\n");
            };
        };
        //console.log("No hero chosen");
    });

    $("#btnPlay").on("click", function () {
        if (!playMusic) {
            console.log("playMusic is false");
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
            console.log("checking following song end")
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
    })

    //End of Click Functions
    //End of Functions

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
    */

});