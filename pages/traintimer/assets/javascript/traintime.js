$(document).ready(function () {

    //Firebase init info
    var config = {
        apiKey: "AIzaSyBdIC4WQVbAX24YcMP1RvlxMpg2skdzhes",
        authDomain: "something-ee161.firebaseapp.com",
        databaseURL: "https://something-ee161.firebaseio.com",
        projectId: "something-ee161",
        storageBucket: "something-ee161.appspot.com",
        messagingSenderId: "383500753945"
    };
    firebase.initializeApp(config);

    var trainDB = firebase.database();

    //End of Firebase init

    ///FUNCTIONS///

    //Add loadtime after fixing, add delaychance in future
    function travelMath(startTime, averageArrive) {
        //determines the difference in minutes between the initial train start time and now
        var diffTime = moment().diff(moment(startTime), "minutes");
        diffTime = diffTime % averageArrive;
            // diffTime += loadTime;
            // if (Math.floor(Math.random() * 100) < delayChance) {
            //     diffTime += 15;
            // };
        
        console.log(diffTime);

        //Subtracts the remaining time to next arrival from average arrival and returns it
        return (averageArrive - diffTime);
    };

    //Sets the future arrival time using the future arrival time and returns it
    function arrivalHHMM(timeAdded) {
        var now = moment().format("HH:mm");
        var nowInt = moment(now, "HH:mm");
        nowInt = nowInt.add(timeAdded, "m");
        now = moment(nowInt).format("h:mm a");
        return now;
    };

    ///EVENT LISTENERS///

    //Updates the page with all of the train children
    trainDB.ref("trains").on("child_added", function (childSnapshot) {

        //Relevant information for page pulled from trainDB
        var tempTrain = childSnapshot.val().name;
        var tempDestiny = childSnapshot.val().destination;
        var tempTime = childSnapshot.val().firstTime;
        var tempFreq = childSnapshot.val().frequency;

        //Calls functions for information that isn't saved to trainDB
        var tempArriveMin = travelMath(tempTime, tempFreq);
        var tempArriveTime = arrivalHHMM(tempArriveMin);

        //Table row and column setting with supplied information
        var trainInfo = "<tr>"
        trainInfo += "<td>" + tempTrain; //trainName property of object in database
        trainInfo += "<td>" + tempDestiny; //destination property of object in database
        trainInfo += "<td>" + tempFreq; //frequency property of object in database
        trainInfo += "<td>" + tempArriveTime; //nextArrive property of object in database
        trainInfo += "<td>" + tempArriveMin; //minutesAway is a var that subtracts current time from next arrive
        trainInfo += "</tr>"

        $("#trainsTable").append(trainInfo);
    });

    //Function that adds info from the boxes to the database and appends it to the webpage.
    $("#trainSubmit").on("click", function () {
        event.preventDefault();
        tempTrain = $("#nameInput").val().trim();
        tempDestiny = $("#destinInput").val().trim();
        tempTime = $("#timeInput").val().trim();
        tempFreq = $("#freqInput").val().trim();
        tempLoadSpd = Math.floor(Math.random() * 10); //Length of load-unload time on arrival
        tempDelay = tempTrain.length * 5; //Percent chance of train breakdown

        //Corrects any false user input for time by replacing any characters and the common : with nothing.
        tempTime = tempTime.replace(/[a-z:]/gi, "")

        //Pushes all this inpt to the DB
        trainDB.ref("trains").push({
            name: tempTrain,
            destination: tempDestiny,
            firstTime: tempTime,
            //employeeMonths: employeeMonths
            frequency: tempFreq,
            loadingTime: tempLoadSpd,
            delayTime: tempDelay
        });
    });

    ///END EVENT LISTENERS///
});