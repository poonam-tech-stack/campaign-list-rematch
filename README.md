## Campaign App
Its an application that list campaigns, allows searching campaigns through campaign name, start date and end date. 
AddCampaigns function is exposed on window object, so that campaigns can be added through javascript console.

Below are the test scenarios to test campaigns from javascript console:

[TestCase1] : When all correct data is passsed

AddCampaigns([{id:1,name:"testCampaign1",startDate:"1/1/2021","endDate":"2/6/2021","Budget":505602,"userId":1}, {id:2,name:"testCampaign2",startDate:"4/1/2020","endDate":"4/6/2020","Budget":505602,"userId":12}, {id:3,name:"testCampaign3",startDate:"1/1/2021","endDate":"1/28/2021","Budget":505602,"userId":21},{id:3,name:"testCampaign4",startDate:"2/1/2021","endDate":"2/1/2021","Budget":505602,"userId":2}])

[TestCase2] : When only some data is correct

AddCampaigns([{id:1,name:"testCampaign5",startDate:"1/1/2021","endDate":"2/6/2020","Budget":505602,"userId":1}, {id:2,name:"testCampaign6",startDate:"4/1/2020","endDate":"4/1/2020","Budget":1000,"userId":12}, {id:3,name:"testCampaign7",startDate:"1/1/2021","endDate":"1/6/2021","Budget":505602,"userId":21},{id:3,name:"testCampaign8",startDate:"2/1/2021","endDate":"2/1/2021","Budget":505602,"userId":2}])

[TestCase3] : When all data is incorrect

AddCampaigns([{id:1,name:"testCampaign9",startDate:"1/1/2021","endDate":"2/6/2020","Budget":505602,"userId":1}, {id:2,name:123,startDate:"4/1/2020","endDate":"4/1/2020","Budget":1000,"userId":12}, {id:3,name:"testCampaign11",startDate:"abcd","endDate":"1/6/2021","Budget":505602,"userId":21},{id:4,name:"testCampaign12",startDate:"abc","endDate":"def","Budget":undefined,"userId":"2"},{}])

[TestCase4] : When invalid campaigns passed
AddCampaigns()
AddCampaigns([])
AddCampaigns([{}])

[TestCase5] : When invalid Json passed
AddCampaigns(["id"])

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To get started:

1. Install [NodeJS](http://www.nodejs.org)
2. Download this repo.
3. Open the command line of your choice and cd to a sample directory within this repo on your machine.
4. `npm install` - Installs the relevant packages as defined in the package.json file. This step helps to get all the dependencies of the project.
5. `npm start | npm run start` - Creates a build-in development and provides an Express server which should have been started by now.
6. Check for informational console message on the server to ensure that all the dependencies are properly installed and the server is up and running.
7. Navigate to [http://localhost:3000/](http://localhost:3000/), and find the app running.

## Scripts

In the project directory, try running:

### `npm run build`

Creates an optimized build out of the resources folder and output the file within the folder structure.

### `npm run start`

Creates a build and runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

To run all test cases

### `npm run lint`

To check for lint errors
