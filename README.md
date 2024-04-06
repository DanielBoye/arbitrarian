# arbitrarian.xyz

## Project Description

### Components

#### QuizGrid
The `QuizGrid` component visualizes all the available quizes as cards. Upon left clicking a card, you will be redirected to its corresponding [dynamic route](#quizid). First the component initializes the `quizes` variable as an empty list, and uses the `useState` hook from react to create a stateful variable, `progress, setProgress`. We also utilize the `useEffect` hook from react to constantly update the `progress` variable. *We are aware this is an inefficient method, however, due to our time constraints this is the best we could do. We will be fixing this at a later date*. The progress value is a percentage of the # of available quizes and the # of quizes solved. The # of quizes solved is stored in a cookie, which is retrieved from the decentralized database using Tableland. We later iterate over all the quizes and give each of them their own `QuizCard` component, which is stores in the `quizes` list. Lastly we return some html and css with our radial progress bar and the grid of `QuizCards`.

#### QuizCard
The `QuizCard` component is a very basic components utilizing only html and css. For the css we used a combination off .css files, tailwindss, and daisyui.

#### Quiz
The `Quiz` component holds all of the questions and renders them in order, one after the other, when the user submits the correct answer. First we initialize four states to keep track of the `questionsIndex`, quiz's `questions`, the `selectedQuestion`, and the `numSolvesQuestions`. We then use a custom hook defined under `src/hooks/useSigner` and the `useAccount` hook from `wagmi`. `useEffect` is also in use here, so that we can update, which question is visible to the user, when they click submit. The `nextQuestion` function is a callback function passed down as a prop to the `QuizQuestion` component later on. What it does is first check if the answer is the correct one. If it is then check too see if the user has answered all of the questions correctly, if they have, then increment their number of solved quizes by one. The `incrementSolvedQuizes` function updates our Tableland database for the logged in user. It then redirects the user back to the `/quiz` page. The second conditional statement in the function checks to see if the answer is correct and the `questionsIndex` is less than the # of `questions`. If it is then `setQuestionsIndex` and `setNumSolvesQuestions` to +1. We then return a simple `QuizQuestion` component wrapped in a simple custom `Container` component.

#### QuizQuestion
The `QuizQuestion` component only has two sateful variables, `selectedOption` and `correct`, both whom are pretty self explanatory. The first thing we do is create a list of `options` for the question, based of the question given as a prop to our component. Here we used daisyui's radio component. We wrapped the `options` in a card with a button. The button is for submission and is the callback function mentioned earlier in the [Quiz](#quiz) component.

### Routes

#### /quiz
The `page.js` file is where the main content for the route is stores. In here we import the [`QuizGrid`](#quizgrid) component.

#### /quiz/id
We used a dynamic route for each of the quizes. Each route takes in an `id`, which is corresponding to their index in the [JSON file](https://github.com/DanielBoye/arbitrarian/blob/main/src/utils/quizes.json) containing them. This id is then used to find the correct quiz and all of its questions later on. The `page.js` file only contains a `Quiz` component and passes down the `id` it has in its parameters as a prop.

### Other

## Project Challenges

### Time

### Other

## Project Links
   - 🔗 *Github Link for Project*
   - 🔗 *Youtube Link to Demo presentation*
   - 🔗 *Pitch Link for Presentation Slides*
   - 🔗 *Document link for ChainSafe Ideathon*



> A JavaScript template for @tableland + NextJS + wagmi + Rainbowkit projects

## Table of Contents

- [Background](#background)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Installation \& build](#installation--build)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Background

This repo contains starter code for a [NextJS](https://nextjs.org/docs) + [wagmi](https://wagmi.sh/) + [Rainbowkit](https://www.rainbowkit.com/) project with useful Tableland clients included, bootstrapped using [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app). It contains a basic example for connecting to a wallet to then allow creating, writing to, and reading a table using the Tableland SDK ([`@tableland/js-tableland)`](https://github.com/tablelandnetwork/js-tableland)) as well as Local Tableland ([`@tableland/local`](https://github.com/tablelandnetwork/local-tableland)) support during development. Both linting (with [`eslint`](https://eslint.org/)) and code formatting (with [`prettier`](https://prettier.io/)) are also included, along with [Tailwind CSS](https://tailwindcss.com/).

## Usage

### Prerequisites

Before you get started, you'll need to create a WalletConnect account and create a project and retrieve the project ID: [here](https://walletconnect.com/)

RainbowKit & wagmi require a WalletConnect project ID in order to work properly. These should be set up and configured in a `.env` file within this project's root and saved to the following variables:

```txt
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
```

There's also a `NEXT_PUBLIC_ENABLE_TESTNETS` boolean value you can set in order to enable or disable wallet connections to testnet chains. All of the chains that Tableland supports are configured, including the Hardhat chain if you choose to run Local Tableland during development.

### Installation & build

First, clone this repo:

```sh
git clone https://github.com/tablelandnetwork/next-js-tableland-template
```

To get started, you can run `npm run up` to start the app. This runs `npm install` plus the `build` / `start` scripts and then serves the application at [http://localhost:3000](http://localhost:3000). The starter template includes the following, located in `src/components/Tableland.jsx`:

- Navbar wallet connection using RainbowKit.
- A form with inputs for creating a table (hardcoded with a `id INTEGER PRIMARY KEY, val TEXT` schema) and writing a single value to it.
- Reading and rendering your table's data on button click.

The wagmi setup occurs in `src/app/providers` and `src/wagmi.js`. Lastly, there is a `useSigner` hook in `src/hooks/useSigner.js`. It's a required adapter for [`ethers`](https://docs.ethers.org/v5/) to work with wagmi (and RainbowKit), which use [`viem`](https://viem.sh/) under the hood.

## Development

If you'd like to run the project locally, use the following scripts in separate terminal windows:

```sh
npm run lt
npm run dev
```

This will do two things: spin up a Local Tableland node and run the app in development mode to reflect live code changes. Local Tableland is an _extremely_ useful tool to develop as it's a lightweight Tableland validator (also spinning up a Hardhat node under the hood) that runs locally on your machine with full Tableland protocol compliance.

There are also a few other scripts you can use:

- `npm run lint`: Lint the codebase with `eslint` (along with the `lint:fix` option).
- `npm run prettier`: Prettify the code format with `prettier` (along with the `prettier:fix` option).
- `npm run format`: Both lint and format the codebase with `eslint` and `prettier`, also fixing any issues it can.
- `npm run clean`: Remove the `.next` folder.
- `npm run test`: A placeholder for running tests (currently empty).

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT AND Apache-2.0, © 2021-2023 Tableland Network Contributors
