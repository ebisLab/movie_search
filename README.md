# Movies Picker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before you run
Create an ENV file in the root of the directory and add your own API key or visit https://www.omdbapi.com to get one

### Env Variable
    REACT_APP_API_KEY=insertyourkeyhere

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Reflection
### 1. What were the most difficult tasks?
   
`Having to understand the API and how it works took a bit of time, especially since I had a bit of challenge getting the API Key to be authenticated after I registered it.
My work around was to create a mock data to interact with, until the Key had time to be authenticated.
Also, I started creating a centralized state management system, but I realized how small the application was, so I reverted back to prop drilling and made sure the naming conventions made sense in case the application was scalable`

### 2. Did you learn anything new while completing this assignment?
   
`I  learned that the given API didn't have a price property, so I initially spent time coming up with a functionality that adds up the price, but once I intergrated the API I removed it because it didn't make sense to have it on there. 
I discovered that the search query you don't have to add symbols to indicate space, you can just have space and the api will still work.
I learned how to disable checkout action if there's nothing in the cart. 
I also accidentally added some sensitive data on git, so learning how to revert it and scrap the data was definetely new. Learned that you shouldn't do that unless it's a personal project.`

### 3. What did you not have time to add? What work took the up majority of your time?

`I added a modal when checking out. Waiting for the API key I registered to authenticate was a bit furstrating. I spent a bit of time setting up the routes, I wanted to add a separate route for each movie card detail but I felt I was adding too much, so I condensed it the home and checkout routes.
I was working on a conditional to have a custom - no poster image but time was running out
`
### 4. How could the application be improved?
`I would take the modal concept from the checkout and get the cards details on there when a user wants to click on the movie to get details without leaving the page. That way I won't have to introduce another route.
I would also add a bit more styling to make it easier on the eyes. I would integrate the stripe API for receipt purposes on both the seller and user record. I would work on adding some testing as well.
I'll also continue working on custom poster conditionals for the no posters images from the API. ` 
