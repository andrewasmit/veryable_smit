# 🌎 GlobeGuru 🌎

## About GlobeGuru

GlobeGuru is a fun way to learn more about the world we live in.
It is compromised of a list of all the countries in the world with some cultural information about each country; their native languages, currency, how many states they have, and the flag of their country.

![GlobeGuru | Study](gg_study.gif)

As a fun way to test how much you know, there is a simple, but fun guessing game associated with each country's flag.

![GlobeGuru | Game](gg_game.gif)
**How many correct guesses can you get in a row?**

## About GlobeGuru

This React application is built using modern web technologies to provide a dynamic and responsive user experience. It leverages the following key technologies and libraries:

- **React:** The foundation of the application, providing a component-based architecture for building user interfaces.

- **TypeScript:** Enhancing code quality and developer productivity through static typing and improved tooling.

- **Apollo Client:** Seamlessly integrating GraphQL APIs with the application, allowing efficient data fetching and management.

- **Material-UI (MUI):** A popular and customizable React component library that ensures a consistent and visually appealing design across the application.

- This app also makes use of the Countries GraphQL API from [trevorblades](https://github.com/trevorblades/countries). You can get more info on it [here](https://studio.apollographql.com/public/countries/variant/current/home)

## Getting Started

- Fork and Clone this repo
- Once installed locally, `cd` into the repo and run `yarn` to install all dependencies
- Then, run `yarn dev` to start up the server and open a browser to the Home page.
- Once here, you should be able to interact with the site as intended.

### Prerequisites

React supported Node version >= 15.5. 4+ .

- [Node.js](https://nodejs.org/) - Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Prompt/Future Goals

In the span of a weekend, I was tasked with a simple prompt.
I was asked to utilize a specific API, fetch and display the information in a grid, and when each element was clicked, showcase more information about that element.

GlobeGuru is the result of this prompt/challenge.
I tried my best to of course hit the requirements of the prompt, but do so as creatively as possible.

For future goals, I would add or built-out the following features

- Allow users to choose how many posts-per-page in the pagination
- Fix the shuffling of answers in the game after a selection has been chosen
- If a user gets question wrong in the game, add a 'Quick add favorites' for studying/reviewing purposes
- Add a countdown-timer to the game component
- Build out more content in the home landing page (rules for game, tech used, etc.)
- Keep track of users to create a leaderboard
