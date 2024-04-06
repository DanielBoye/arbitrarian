# arbitrarian.xyz

## Project Description

### Components

#### Token

The `Token.js` component enables users to deploy their own ERC20 tokens by specifying a name, symbol, and initial supply for the token. It begins by initializing stateful variables for the token's name (`name, setName`), symbol (`symbol, setSymbol`), and initial supply (`initialSupply, setInitialSupply`) using React's `useState` hook. These variables are then bound to input fields in the component's UI, allowing users to input their desired token specifications.

To handle the deployment process, `Token.js` also introduces a `deploying` state variable to track the deployment status, offering feedback such as loading indicators to the user. The deployment functionality itself is triggered by a button click, invoking the `deployToken` function.

Upon deployment initiation, `Token.js` utilizes `ethers.js's` `ContractFactory`, constructed with the ERC20 token's ABI and bytecode, to deploy a new token contract to the Ethereum blockchain. This process requires a signer, passed as a prop to `Token.js`, which is an Ethereum account with permissions to conduct transactions. The signer is crucial for authenticating the deployment transaction on the blockchain.

The actual deployment is an asynchronous operation, marked by setting the `deploying` state to true, thus indicating the process has started. Upon successful deployment, the newly created token's contract address is captured and stored in a state variable (`contractAddress`). This address is then displayed to the user, signifying the completion of the deployment process.

For visual feedback, `Token.js` incorporates a progress and success indication mechanism. While the token is being deployed (`deploying` state is true), a loading indicator is displayed. Upon successful deployment, a success message along with the contract address is shown to the user. This feedback mechanism ensures users are well-informed about the status of their token deployment at all times.

Finally, `Token.js` renders an interactive UI consisting of input fields for token details, a deployment button, and feedback messages. The component also dynamically displays a representation of the ERC20 token smart contract code to educate users about the underlying technology. This educational aspect is an integral part of the user experience, providing users with the contract address. 

#### QuizGrid
The `QuizGrid` component visualizes all the available quizes as cards. Upon left clicking a card, you will be redirected to its corresponding [dynamic route](#quizid). First the component initializes the `quizes` variable as an empty list, and uses the `useState` hook from react to create a stateful variable, `progress, setProgress`. We also utilize the `useEffect` hook from react to constantly update the `progress` variable. *We are aware this is an inefficient method, however, due to our time constraints this is the best we could do. We will be fixing this at a later date*. The progress value is a percentage of the # of available quizes and the # of quizes solved. The # of quizes solved is stored in a cookie, which is retrieved from the decentralized database using Tableland. We later iterate over all the quizes and give each of them their own `QuizCard` component, which is stores in the `quizes` list. Lastly we return some html and css with our radial progress bar and the grid of `QuizCards`.

#### QuizCard
The `QuizCard` component is a very basic components utilizing only html and css. For the css we used a combination off .css files, tailwindss, and daisyui.

### Routes

#### /quiz
The `page.js` file is where the main content for the route is stores. In here we import the [`QuizGrid`](#quizgrid) component.

#### /quiz/id
We used a dynamic route for each of the quizes. Each route takes in an `id`, which is corresponding to their index in the [JSON file](https://github.com/DanielBoye/arbitrarian/blob/main/src/utils/quizes.json) containing them. This id is then used to find the correct quiz and all of its questions later on.

#### /token
The `/dashboard/token` route interacts with the Arbitrum Sepolia network for deploying ERC20 tokens to the testnet. The contract, defined in `contract.json`, is a standard ERC20 token with OpenZeppelin's `ERC20.sol` as its base. It includes functionalities such as:

- Minting initial supply to the deployer's address upon creation.
- Standard ERC20 functions like transfer, approve, and allowance among others.
- The contract's constructor takes three parameters: the token's name `(_name)`, symbol `(_symbol)`, and initial supply `(initialSupply)`, which are used to initialize the token upon deployment.

Token.js Component
Token.js uses ethers.js, a library for interacting with the Ethereum blockchain, to deploy the smart contract. It leverages the ContractFactory from ethers.js, utilizing the ABI and bytecode to create a deployable instance of the contract. The component allows users to input the token's name, symbol, and initial supply, which are then passed as arguments to the contract's constructor during the deployment process.

The deployment process is initiated by the user clicking the `"Deploy Token"` button, triggering the `deployToken` function. This function uses the `signer` (an object representing the Ethereum account executing the transaction) to deploy the contract to the blockchain. Upon successful deployment, the contract's address is displayed to the user, indicating that the token has been created.

##### User Interaction
From the user's perspective, the `/dashboard/token` page provides an interface to:

- Input the desired token's name, symbol, and initial supply.
- Initiate the deployment of the token to the Ethereum blockchain with these parameters.
- View the contract address of the newly deployed token, signifying its successful creation and deployment.

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
