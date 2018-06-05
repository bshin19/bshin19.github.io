$(document).ready(function () {
    var pathway = "../assets/images/rpg-game/"

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
        ally:  {
                char:[2,3,4,5]
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
        ally:  {
                char:[1,3,4,5]
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
        ally:  {
                char:[1,2,3,5]
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
        ally:  {
                char:[1,2,4,5]
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
        ally:  {
                char:[1,2,3,4]
            },
        maxHP: 40,
        atkBonus: 1
    }

    var bael = {
        name: "Bael",
        level: 4,
        hp: 60,
        atk: 12,
        spd: 9,
        def: 15,
        portrait: pathway + "portrait/bael.png",
        anim: pathway + "fight/bael.gif",
        animSpell: false
    }

    //End of Character Initialization area:
    //
    var heroChosen = false;
    var char = [lyn,hector,eliwood,roy, athos];
    var chosenOne;
    var foes = [bael]

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

    $("#Lyn").click(function(){
        heroPick(0);
    })

    $("#Hector").click(function(){
        heroPick(1);
    })

    $("#Eliwood").click(function(){
        heroPick(2);
    })

    $("#Roy").click(function(){
        heroPick(3);
    })

    //Sets the character chosen based on 
    function heroPick(value){
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
    }

    /*function setFoeOpt() {
        if (foeChosen = false) {
            //do things
        }
    }*/

    
})