#GifTastic

####Overview

Making an API call to GIPHY API to make a dynamic web page that populates with gifs. 
The These of this project is emotions, inspired by the movie InsideOut
GIPHY requires developers to use a key to access their API data.

####Process:

1. Create an array of strings, each one related to a topic of the movie InsideOut i.e human emotions. 

2. This app take the topics in this array and create buttons in HTML.

3. When the user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it will stop playing.

5. Above every gif, display its rating (PG, G, so on). This data is provided by the GIPHY API.

6. There is a form on the page which takes the value from a user input box and adds it into your topics array. Then makes a function call that takes each topic in the array remakes the button

7. Heroku [Link](https://sheltered-ocean-14427.herokuapp.com/)