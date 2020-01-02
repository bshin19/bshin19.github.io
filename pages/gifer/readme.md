# Lord of the Gifs
This application utilizes html, css, bootstrap, javascript, jquery, and the giphy API to display random gifs to a page with an initial "Lord of the Rings" theme.

## Application Overview
Buttons spread horizontally across the screen which, upon clicking, load four images from the giphy api related to the term above.
The default layout is:
![Aragorn Gifs](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/gifaragorn.jpg)

### Clicking Top Bar Buttons
A row comprised of four images is added to the top of the main body whenever one of these buttons is clicked. The images have unique data-values for both the standard .png and .gif. Each of these is a unique and random response given from the Giphy api.

### Animating to Gifs
![Boromir](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/gifboromir.gif)
The images first pulled are pngs. By clicking on these pngs, the source changes to a .gif provided by the giphy api and the image "animates." 

Clicking a second time returns the source to the original .png.

### Adding Searches
![Gif added](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/gifadded.jpg)

By entering in a term and pressing the "Submit" button, users can add temporary gif search buttons to the gif search bar. These do not have to be in theme with Lord of the Rings.

### Clear
![Clear](https://github.com/bshin19/bshin19.github.io/blob/master/global_assets/images/gifclear.jpg)
The clear button removes all added buttons from the page and all gifs.