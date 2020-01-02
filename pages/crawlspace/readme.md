# Crawlspace
## Project Overview
Crawlspace utilizes the [Google Maps API](https://cloud.google.com/maps-platform/)
and [SF Open Data](https://datasf.org/opendata/) to search for\
locations in the San Francisco area and pull up relevant nearby crimes.\
These include:
+ Assaults
+ Larceny/Theft
+ and Burglary  

## Purpose
Crawlspace was designed to facilitate safe pub crawl interactions and planning.\
By stringing together crimes and locations, users can determine what route they want to take,\
whether they want to get transportation for their "crawl", and whether they want to include\
certain locations. Current functionality lacks the ability to string locations together\
but the application can still be used to roughly compare the safety of individual locations.

## The Map
![Map](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/crawlrm.jpg) \
A Google Map centered in San Francisco occupies most of the screen.\
This can be interacted with like any standard Google Map.

## Searching
![Searching](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/crawlrm1.jpg) \
For searching, a search bar is located in the header. This provides the main functionality for crawlspace.\
It uses Google AutoFill to suggest searches near the default location.\
Note that current searches beyond the San Francisco area *will* work. However, they won't display crimes.

## Results
![Results](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/crawlrm2.jpg) \
Upon selecting an autofill result or pressing enter in the searchbar, a new location will populate\
with a green flag on the map.\
Many red X's will also be placed upon the map. These are the locations of crimes based on their police-reported geolocation.\
<br>
Each of these types of map markers can be clicked to reveal more information about the location.

### Green Flag
![Location](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/crawlrm4.jpg) \
This is the location that results from the user's search using the Google Maps API.\
When clicked it displays the:
+ Address
+ Phone Number
+ Rating
+ And a currently non-functional "Visit Next" hyperlink.  

The intended purpose of this "Visit Next" hyperlink is to add the\
location searched to a list of locations that one might visit during a night on the town.\
This functionality is currently limited to a trial modal that allows for inputs that aren't validated. 

### Red X
![Searching](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/crawlrm3.jpg) \
These are placed at the geolocation crime results returned from using the SF Open Data API.\
These are limited to only crimes occurring in the last year and only crimes within 400 meters of the searched location.
When clicked, it will display:
+ The type of crime committed at the location
+ The date that crime was committed
+ And the time of day (in military hours) that the crime was committed  

## Potential Future Functionality
+ Incorporating more crime data APIs so that more cities/states can be searched.
+ Finalizing the list functionality and adding routing to it.
+ Finishing the "Visit Next" hyperlink to properly add to list and autocalculate values for user.
+ Incorporating a travel button that switches time traveled between locations to walking or driving
+ Incorporating the lyft/uber API to add an estimate for travel expenses when ubering
+ Incorporating the time and a weather API to display weather stats during a user's excursion