# Would You Rather Project

This project is the second project in the udacity nanodegree program. It's mainly based on managing state with redux. 
All components have been built with aid of ui library combined and using native css.
Each component has its own folder. The folder contains the component jsx file with its css.
Each component has its own css rules, that's why each class given to a component has a naming convetion <componentName>-<className>
React-router and react-redux have been used to manage state and to manage routing.
There's is database, data are static. All data will be reset on refresh.

 ## Architecture
 This application uses redux only manage state and share data with other component. So the signed-in user data is not saved in the cookies or the local storage. This behaviour has been implemented deliberately. So when the page is refreshed the user automatically logs out. when you log in again you will be taken to where you have come from. 

  
## How to start it

You can test in through this link:
  https://would-you-rather-ruddy.vercel.app/login
   
Or you can download the zipped file, then unzip it.
Go to the directory that contains the project file. 
Run=> npm i 
  then run=> npm start
  go to localhost:3000 on your browser.

This application is client side only. To take a look at the back-end, go to this repo:
https://github.com/Jamal40/would-you-rather-api
