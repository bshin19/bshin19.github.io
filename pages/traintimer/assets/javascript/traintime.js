$(document).ready(function () {

    /// GLOBAL VARIABLES ///

    //Firebase init info
    const config = {
        apiKey: "AIzaSyBdIC4WQVbAX24YcMP1RvlxMpg2skdzhes",
        authDomain: "something-ee161.firebaseapp.com",
        databaseURL: "https://something-ee161.firebaseio.com",
        projectId: "something-ee161",
        storageBucket: "something-ee161.appspot.com",
        messagingSenderId: "383500753945"
    };
    firebase.initializeApp(config);

    const trainDB = firebase.database();

    // End of Firebase init

    /// END GLOBAL VARIABLES ///

    /// FUNCTIONS ///

    // Add loadtime after fixing, add delaychance in future
    const travelMath = (startTime, averageArrive) => {
        //determines the difference in minutes between the initial train start time and now
        let diffTime = moment().diff(moment(startTime), "minutes");
        diffTime = diffTime % averageArrive;
        // diffTime += loadTime;
        // if (Math.floor(Math.random() * 100) < delayChance) {
        //     diffTime += 15;
        // };

        //console.log(diffTime);

        //Subtracts the remaining time to next arrival from average arrival and returns it
        return (averageArrive - diffTime);
    };

    //Sets the future arrival time using the future arrival time and returns it
    const arrivalHHMM = timeAdded => {
        const now = moment().format("HH:mm");
        const nowInt = moment(now, "HH:mm");
        const thenInt = nowInt.add(timeAdded, "m");
        const then = moment(thenInt).format("h:mm a");
        return then;
    };

    ///EVENT LISTENERS///

    //Updates the page with all of the train children
    trainDB.ref("trains").on("child_added", function (childSnapshot) {

        //Relevant information for page pulled from trainDB
        const tempTrain = childSnapshot.val().name;
        const tempDestiny = childSnapshot.val().destination;
        const tempTime = childSnapshot.val().firstTime;
        const tempFreq = childSnapshot.val().frequency;

        //Calls functions for information that isn't saved to trainDB
        const tempArriveMin = travelMath(tempTime, tempFreq);
        const tempArriveTime = arrivalHHMM(tempArriveMin);

        const removeButton = $("<button>")
            .addClass("btn btn-danger remove-button")
            .attr({
                "type": "button",
                "data-id": childSnapshot.key
            })
            .text("X");

        const buttonContainer = $("<td>")
            .append(removeButton);

        //Create and append a new table row
        const trainInfo = $("<tr>")
            .append(`<td>${tempTrain}</td>
            <td>${tempDestiny}</td>
            <td>${tempFreq}</td>
            <td>${tempArriveTime}</td>
            <td>${tempArriveMin}</td>`)
            .append(buttonContainer);

        $("#trainsTable").append(trainInfo);
    });

    // Listener for clicks upon the delete button
    $("body").on("click", ".remove-button", function () {

        //Get the unique Firebase key from the button element
        const uniqueKey = $(this).attr("data-id");

        console.log(uniqueKey);
        //Remove data node with matching key in Firebase
        trainDB.ref("trains").child(uniqueKey).remove();

        //Delete the row locally so page and or firebase doesn't need to be refreshed to show this change in the table
        $(this).closest("tr").remove();
    });

    // Listener for clicks on the submit button. Adds all data to the database, then places upon the webpage.
    $("#trainSubmit").on("click", function () {
        event.preventDefault();
        const tempTrain = $("#nameInput").val().trim();
        const tempDestiny = $("#destinInput").val().trim();
        let tempTime = $("#timeInput").val().trim();
        const tempFreq = $("#freqInput").val().trim();
        const tempLoadSpd = Math.floor(Math.random() * 10); //Length of load-unload time on arrival
        const tempDelay = tempTrain.length * 5; //Percent chance of train breakdown

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