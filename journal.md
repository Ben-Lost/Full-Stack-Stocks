# Project Journal

### Benjamin Lostheart

In the beginning of the project I talked my the other teammates about similar interests until we thought making a website for tracking stocks. This site would be a way to quickly view important stocks to see how the market is doing. Although we did discuss about roles beforehand there was a little bit of a lack of team collaboration... 

I began with the frontend, creating a page using dummy data. I found a treemap model using Apexcharts that looks really cool for displaying a quick glimpse of the market. The more market cap a company weighs the bigger it is shown in the model, and then each box is color coded for how it has performed over the last 24 hours. There is also a table that shows each of these stocks for more information, and few charts to show popular indecies in the market at the top of the page. I eventually was able to fetch data from an api but I did end up doing everything in the frontend.

Some struggles I had during my experience was manipulating data from the api and moving data between components. I'm still in the midst of getting the search bar to work, I want to it to alter the page after searching for the stock. So far what has helped is outputting to the console to see what happens. There were other small bugs I ran in too like finding out what CSS is altering the style. Using the browser inspect helped to find out what styles were on each element, and what is inherited between them.