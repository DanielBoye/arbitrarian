# arbitrarian.xyz

Learn about smart contract security and deploy ERC20 tokens on the Arbitrum Sepolia Network

## Project Description

### Components

#### Dashboard

The `Dashboard.js` component serves as the primary gateway for users, presenting the core functionalities of the application through interactive cards. Initially, it greets users with a randomly selected welcome message from a curated list, aiming to create a welcoming atmosphere for a global audience. This interactive element is made possible by utilizing React's `useState` hook to maintain the state of the `welcomeMessage`, which users can change with a simple click, highlighting the component's dynamic and user-centric design.

Central to the `Dashboard.js` are two key features, each represented by a card: one leading to the quizzes section and the other to the token deployment function. The quizzes card invites users to test and expand their knowledge on blockchain and smart contract security, while the token card offers a simplified process for creating `ERC20` tokens on the Arbitrum Sepolia network. This bifurcation is achieved through the thoughtful use of Next.js's Link component, ensuring seamless navigation within the application.

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

#### Quiz
The `Quiz` component holds all of the questions and renders them in order, one after the other, when the user submits the correct answer. First we initialize four states to keep track of the `questionsIndex`, quiz's `questions`, the `selectedQuestion`, and the `numSolvesQuestions`. We then use a custom hook defined under `src/hooks/useSigner` and the `useAccount` hook from `wagmi`. `useEffect` is also in use here, so that we can update, which question is visible to the user, when they click submit. The `nextQuestion` function is a callback function passed down as a prop to the `QuizQuestion` component later on. What it does is first check if the answer is the correct one. If it is then check too see if the user has answered all of the questions correctly, if they have, then increment their number of solved quizes by one. The `incrementSolvedQuizes` function updates our Tableland database for the logged in user. It then redirects the user back to the `/quiz` page. The second conditional statement in the function checks to see if the answer is correct and the `questionsIndex` is less than the # of `questions`. If it is then `setQuestionsIndex` and `setNumSolvesQuestions` to +1. We then return a simple `QuizQuestion` component wrapped in a simple custom `Container` component.

#### QuizQuestion
The `QuizQuestion` component only has two sateful variables, `selectedOption` and `correct`, both whom are pretty self explanatory. The first thing we do is create a list of `options` for the question, based of the question given as a prop to our component. Here we used daisyui's radio component. We wrapped the `options` in a card with a button. The button is for submission and is the callback function mentioned earlier in the [Quiz](#quiz) component.

### Routes

#### /dashboard

The `/dashboard` route in the application serves as a central hub for users to access various functionalities related to ERC20 tokens and quizzes on blockchain technology and smart contract security. This route is rendered using the `Dashboard.js` component, which provides a welcoming user interface and easy navigation to the main features of the application: deploying tokens and taking quizzes.

Upon entering the dashboard, users are greeted with a welcome message that can be changed by clicking on it, offering a personalized touch. The message is selected randomly from a predefined list of welcome messages in different languages, showcasing the international appeal and user-friendly nature of the application. Below the welcome message, a brief description introduces the core functionalities available in the dashboard: managing, deploying, and minting ERC20 tokens with ease, alongside an invitation to enhance their understanding of blockchain security through quizzes.

The UI of the `Dashboard` component is divided into sections, each represented by a card that leads to either the token deployment feature or the quiz section. The first card, labeled "Quizzes," directs users to a series of quizzes designed to test and improve their knowledge of blockchain technology and smart contract security. The second card, titled "Token," offers users a straightforward pathway to deploy their own ERC20 tokens on the Arbitrum Sepolia network. This interactive and educational approach, combined with the straightforward navigation provided by `Link` components from Next.js, emphasizes the dashboard's role as an essential tool for users to engage with the application's features efficiently.

#### /quiz
The `page.js` file is where the main content for the route is stores. In here we import the [`QuizGrid`](#quizgrid) component.

#### /quiz/id
We used a dynamic route for each of the quizes. Each route takes in an `id`, which is corresponding to their index in the [JSON file](https://github.com/DanielBoye/arbitrarian/blob/main/src/utils/quizes.json) containing them. This id is then used to find the correct quiz and all of its questions later on. The `page.js` file only contains a `Quiz` component and passes down the `id` it has in its parameters as a prop.

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
   - [🔗 Github Link for Project](https://github.com/DanielBoye/arbitrarian)
   - [🔗Youtube Link to Demo presentation](https://youtu.be/tfiRCplKwd8)
   - [🔗 Pitch Link for Arbitrarian](https://www.canva.com/design/DAGBleXFjxM/HwUBct9xJaS_8-DZdLKKSQ/edit?utm_content=DAGBleXFjxM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) 
   - [🔗 Website Link](https://arbitrarian.xyz) 
