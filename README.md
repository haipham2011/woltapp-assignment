## Overview

This repository is frontend solution (Option 1) for [Summer 2020 pre-assignment in Wolt](https://github.com/woltapp/summer2020). The solution is written in [Create-react-app](https://github.com/woltapp/summer2020)

## Structure of design

The webpage is divided into 4 mains compoments: Navbar, Suggestion, Restaurants, Pagecontroller and Footer <br />
*NOTICE: Please enable location in browser to use Suggestion part

[![frontend.png](https://i.postimg.cc/YqWxfZTN/woltapp.png)](https://postimg.cc/N5QTQJsL)

Components:

- _Navbar_: Navigate to components' position
- _Suggestion_: Contain restaurants which are closest to your location
- _Restaurants_: Contain list of restaurants
- _PageController_: Contain page number (we can change the number of page in config.js)
- _Footer_: Show the policy, download app links

## Instruction

### `npm install`

Install the dependencies before starting the project<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `docker build . -t woltapp-assignment && docker run -it -d -p 3000:3000 woltapp-assignment`

Build and run docker image for this project.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.