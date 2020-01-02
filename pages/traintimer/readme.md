# Train Timer
This application utilizes html, css, bootstrap, javascript, jquery, moment.js, and firebase to display a fake train scheduler.

## Project Overview
The majority of the page is devoted to the scheduler.
![Scheduler](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/trainscheduler.jpg)

### Scheduler
This section pulls the base info from a firebase database:
> Train Name, Train Destination, Frequency, and initial time

The first three are placed directly into the table.

* Next arrival is calculated by determining the difference between the initial time and the current time via moment.js and then taking the remainder of that divided by freq. Using this formula:
> (Current Time - Initial Time) % freq.

* Minutes Away is calculated by determining the difference between the time of next arrival (using the result of the formula above) and the current time.

### Add section
![train add](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/trainadd.jpg)

This section directly interfaces with the firebase database on submit. Sending in data for all the supplied fields. 
* Currently there is no validation for the submit button.

#### A Train Being Added
![example add](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/trainhan.jpg)

![new train](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/trainschednew.jpg)