$(document).ready(function () {

    //Initialize path to be used on all assets
    var pathway = "../assets/images/rpg-game/"


    //Player Objects Begin Here:
    //

    var lyn = {
        name: "Lyn",
        level: 1,
        hp: 30,
        atk: 8,
        spd: 16,
        def: 4,
        res: 4,
        crit: 30,
        hpgr: 60,
        atkgr: 40,
        spdgr: 90,
        defgr: 20,
        resgr: 30,
        portrait: pathway + "portrait/lyn.jpg",
        anim1: pathway + "fight/lyn.gif",
        animCrit: pathway + "fight/lyn_crit.gif",
        isChosen: false,
        animSpell: "",
        elixirs: 3,
        ally: {
            char: [2, 3, 4, 5]
        },
        maxHP: 30,
        atkBonus: 1
    }

    var hector = {
        name: "Hector",
        level: 3,
        hp: 42,
        atk: 17,
        spd: 6,
        def: 15,
        res: 4,
        crit: 10,
        hpgr: 70,
        atkgr: 80,
        spdgr: 30,
        defgr: 60,
        resgr: 10,
        portrait: pathway + "portrait/hector.jpg",
        anim1: pathway + "fight/hector.gif",
        animCrit: pathway + "fight/lyn_crit.gif",
        isChosen: false,
        animSpell: "",
        elixirs: 3,
        ally: {
            char: [1, 3, 4, 5]
        },
        maxHP: 40,
        atkBonus: 1
    }

    var eliwood = {
        name: "Eliwood",
        level: 2,
        hp: 34,
        atk: 12,
        spd: 10,
        def: 9,
        res: 7,
        crit: 20,
        hpgr: 70,
        atkgr: 40,
        spdgr: 40,
        defgr: 40,
        resgr: 40,
        portrait: pathway + "portrait/eliwood.jpg",
        anim1: pathway + "fight/eliwood.gif",
        animCrit: pathway + "fight/eliwood_crit.gif",
        isChosen: false,
        animSpell: "",
        elixirs: 3,
        ally: {
            char: [1, 2, 3, 5]
        },
        maxHP: 34,
        atkBonus: 1
    }

    var roy = {
        name: "Roy",
        level: 5,
        hp: 39,
        atk: 15,
        spd: 12,
        def: 12,
        res: 9,
        crit: 25,
        hpgr: 70,
        atkgr: 55,
        spdgr: 55,
        defgr: 55,
        resgr: 55,
        portrait: pathway + "portrait/roy.jpg",
        anim1: pathway + "fight/roy.gif",
        animCrit: pathway + "fight/roy_crit.gif",
        isChosen: false,
        animSpell: "",
        elixirs: 3,
        ally: {
            char: [1, 2, 4, 5]
        },
        maxHP: 34,
        atkBonus: 1
    }

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
        portrait: pathway + "portrait/athos.jpg",
        anim: pathway + "fight/athos.gif",
        animCrit: pathway + "fight/eliwood_crit.gif",
        isChosen: false,
        animSpell: "",
        elixirs: 3,
        ally: {
            char: [1, 2, 3, 4]
        },
        maxHP: 40,
        atkBonus: 1
    }

    //End of Player Objects:
    //Begin Foe Objects:

    var bael = {
        name: "Bael",
        level: 4,
        hp: 32,
        atk: 12,
        spd: 9,
        def: 2,
        portrait: pathway + "portrait/bael.png",
        anim: pathway + "fight/bael.gif",
        animSpell: false
    }

    var cyclops = {
        name: "Cyclops",
        level: 15,
        hp: 71,
        atk: 25,
        spd: 8,
        def: 10,
        portrait: pathway + "portrait/cyclops.jpg",
        anim: pathway + "fight/cyclops.gif",
        animSpell: false
    }

    var deathgoyle = {
        name: "Deathgoyle",
        level: 7,
        hp: 42,
        atk: 16,
        spd: 10,
        def: 6,
        portrait: pathway + "portrait/deathgoyle.png",
        anim: pathway + "fight/deathgoyle.gif",
        animSpell: false
    }

    var dracozombie = {
        name: "Draco-Zombie",
        level: 20,
        hp: 65,
        atk: 28,
        spd: 15,
        def: 11,
        portrait: pathway + "portrait/draco-zombie.png",
        anim: pathway + "fight/draco-zombie.gif",
        animSpell: true
    }

    var entombed = {
        name: "Entombed",
        level: 1,
        hp: 22,
        atk: 9,
        spd: 2,
        def: 0,
        portrait: pathway + "portrait/entombed.png",
        anim: pathway + "fight/entombed.gif",
        animSpell: false
    }

    var firedragon = {
        name: "Fire Dragon",
        level: 30,
        hp: 80,
        atk: 35,
        spd: 15,
        def: 13,
        portrait: pathway + "portrait/fire_dragon.jpg",
        anim: pathway + "fight/draco-zombie.gif",
        animSpell: true
    }

    var gwyllgi = {
        name: "Gwyllgi",
        level: 11,
        hp: 39,
        atk: 14,
        spd: 24,
        def: 4,
        portrait: pathway + "portrait/gwyllgi.jpg",
        anim: pathway + "fight/gwyllgi.gif",
        animSpell: false
    }

    var idunn = {
        name: "Idunn",
        level: 30,
        hp: 80,
        atk: 40,
        spd: 10,
        def: 15,
        portrait: pathway + "portrait/idunn.png",
        anim: pathway + "fight/idunn.gif",
        animSpell: true
    }

    var jaffar = {
        name: "Jaffar",
        level: 20,
        hp: 40,
        atk: 30,
        spd: 20,
        def: 10,
        portrait: pathway + "portrait/jaffar.png",
        anim: pathway + "fight/jaffar.gif",
        animSpell: false
    }

    var linus = {
        name: "Linus",
        level: 14,
        hp: 53,
        atk: 22,
        spd: 14,
        def: 13,
        portrait: pathway + "portrait/linus.png",
        anim: pathway + "fight/linus.gif",
        animSpell: false
    }

    var lloyd = {
        name: "Lloyd",
        level: 15,
        hp: 47,
        atk: 17,
        spd: 23,
        def: 11,
        portrait: pathway + "portrait/lloyd.jpg",
        anim: pathway + "fight/lloyd.gif",
        animSpell: false
    }

    var lyon = {
        name: "Lyon",
        level: 25,
        hp: 65,
        atk: 26,
        spd: 12,
        def: 16,
        portrait: pathway + "portrait/lyon.jpg",
        anim: pathway + "fight/lyon.gif",
        animSpell: true
    }

    var mauthedoog = {
        name: "Mauthedoog",
        level: 6,
        hp: 33,
        atk: 9,
        spd: 20,
        def: 1,
        portrait: pathway + "portrait/mauthedoog.png",
        anim: pathway + "fight/mauthedoog.gif",
        animSpell: false
    }

    var nergal = {
        name: "Nergal",
        level: 25,
        hp: 70,
        atk: 28,
        spd: 7,
        def: 19,
        portrait: pathway + "portrait/nergal.png",
        anim: pathway + "fight/nergal.gif",
        animSpell: true
    }

    var ursula = {
        name: "Ursula",
        level: 12,
        hp: 40,
        atk: 14,
        spd: 20,
        def: 8,
        portrait: pathway + "portrait/ursula.jpg",
        anim: pathway + "fight/ursula.gif",
        animSpell: true
    }

    var zephiel = {
        name: "Zephiel",
        level: 25,
        hp: 75,
        atk: 24,
        spd: 3,
        def: 29,
        portrait: pathway + "portrait/zephiel.jpg",
        anim: pathway + "fight/zephiel.gif",
        animSpell: false
    }

    //End of Foe Objects
    //End of Character Initialization Area:
    //
    var heroChosen = false;
    var char = [lyn, hector, eliwood, roy, athos];
    var chosenOne;
    var foeChosen = false;
    var foes = [bael, cyclops, deathgoyle, dracozombie, entombed, firedragon, gwyllgi, idunn, jaffar, linus, lloyd, lyon, mauthedoog, nergal, ursula, zephiel]
    var chosenFoes = [];

    //End of Global Variable Initialization:
    //

    //Builds Character Chooser
    if (!heroChosen) {
        for (var i = 0; i < 4; i++) {
            //console.log("got here")
            $("#charChooser").append(
                "<div class='col-sm-6 col-md-3' id=" + char[i].name + ">" +
                "<div class='charText topBox clickChar'>" + char[i].name +
                "</div>" + "<img class = 'charImage clickChar' src =" +
                char[i].portrait + ">" + "<div class='charText botBox clickChar'> Level: " +
                + char[i].level + "<br>HP: " + char[i].hp + "<br>Attack: " + char[i].atk + "&nbsp;&nbsp;Speed: " +
                char[i].spd + "<br>Defense: " + char[i].def + "&nbsp;&nbsp;Resistance: " +
                char[i].res + "</div>" +
                "<br></div>")
            //console.log("character " + char[i].name + " has been appended")
        }
    }

    //Determines which unit is the player hero.
    $("#Lyn").click(function () {
        heroPick(0);
    })

    $("#Hector").click(function () {
        heroPick(1);
    })

    $("#Eliwood").click(function () {
        heroPick(2);
    })

    $("#Roy").click(function () {
        heroPick(3);
    })

    //Rerolls foes and clears relevant lists
    $("#rerollButton").click(function() {
        $("#foeSelector").empty();
        chosenFoes = [];
        setFoeOpt();
    })
        

    //Sets the character chosen based on 
    function heroPick(value) {
        heroChosen = true;
        $("#charChooser").empty()
        chosenOne = char[value];
        console.log(chosenOne);
        $("#playerSide").append(
            "<div class='charText topBox'>" + char[value].name +
            "</div>" + "<img class = 'charImage' src =" +
            char[value].portrait + ">" + "<div class='charText botBox'> Level: " +
            + char[value].level + "<br>HP: " + char[value].hp + "<br>Attack: " + char[0].atk + "&nbsp;&nbsp;Speed: " +
            char[value].spd + "<br>Defense: " + char[value].def + "&nbsp;&nbsp;Resistance: " +
            char[value].res + "</div>" +
            "<br></div>");
        setFoeOpt();
        makeReRollable();
    }

    //Randomizes possible foes and lists them
    function setFoeOpt() {
        if (!foeChosen) {
            //console.log("entered if foe false");
            var foe0 = setFoeNum();
            var foe1 = setFoeNum(foe0);
            var foe2 = setFoeNum(foe0, foe1);
            var foe3 = setFoeNum(foe0, foe1, foe2);
            chosenFoes.push(foe0, foe1, foe2, foe3)
            for (var i = 0; i < 4; i++) {
                $("#foeSelector").append(
                    "<div class='col-sm-12 col-md-12 col-lg-3' id=" + chosenFoes[i].name + ">" +
                    "<div class='charText topBox clickChar'>" + chosenFoes[i].name +
                    "</div>" + "<img class = 'foeImage clickChar' src =" +
                    chosenFoes[i].portrait + ">" + "<div class='charText botBox clickChar'> Level: " +
                    + chosenFoes[i].level + "<br>HP: " + chosenFoes[i].hp + "<br>Attack: " + chosenFoes[i].atk + "&nbsp;&nbsp;Speed: " +
                    chosenFoes[i].spd + "<br>Defense: " + chosenFoes[i].def + "</div>" +
                    "<br></div>")
            }
        }
    }

    //Places the reroll button on the page
    function makeReRollable() {
        $("#rerollButton").append("<div class='rerollFoe'>" +
        "<button type='button' class='btn btn-danger'>Reroll</button></div>")
    }

    //Does the math for randomizing foes
    function setFoeNum(foe1, foe2, foe3) {
        var newFoe = foes[Math.floor(Math.random() * foes.length)];
        if (newFoe === foe1 || foe2 || foe3) {
            newFoe = foes[Math.floor(Math.random() * foes.length)];
        }
        return newFoe;
    }

})