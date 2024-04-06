import clsx from "clsx";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import contractBytecode from "./bytecode.json";
import data from "./contract.json";
import { MarketingLayout } from "@/components/dashboardlayout/Marketing";
import styles from "../../app/index.module.css";
import { Container } from "../container/Container";

function Feature({ title, description, className, ...props }) {
    return (
        <div className={clsx(className, styles.featuresFeature)} {...props}>
            <h4 className={styles.featuresFeatureTitle}>{title}</h4>
            <p className={styles.featuresFeatureDescription}>{description}</p>
        </div>
    );
}

const Token = ({ signer }) => {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [initialSupply, setInitialSupply] = useState("");
    const [deploying, setDeploying] = useState(false);
    const [deployed, setDeployed] = useState(false);

    const [contractAddress, setContractAddress] = useState("");

    const [showAddress, setShowAddress] = useState(false);

    // Function to deploy token
    const deployToken = async () => {
        if (!signer) return;
        const factory = new ethers.ContractFactory(
            contractABI,
            contractBytecode.bytecode,
            signer
        );
        setDeploying(true);
        try {
            const contract = await factory.deploy(name, symbol, initialSupply);
            await contract.deployed();
            setContractAddress(contract.address);
            setDeployed(true);
            setShowAddress(true);
            setTimeout(() => setShowAddress(false), 3000);
        } catch (error) {
            console.error("Deployment error:", error);
            setDeployed(true);
            setShowAddress(true);
            setTimeout(() => setShowAddress(false), 3000);
        } finally {
            setDeploying(false);
        }
    };
    return (
        <>
            <Container className=" mt-8">
                <h2 className="font-bold text-4xl">
                    Deploy your first token!
                </h2>
            </Container>
            <Container className={clsx(styles.sectionDashboard)}>
                <div className="flex flex-row justify-between gap-4">
                    <div className="flex flex-col justify-evenly">
                        <label className="input input-bordered flex items-center gap-8">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Token Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-8">
                            <input
                                type="text"
                                maxLength="3"
                                className="grow"
                                placeholder="Token Symbol"
                                value={symbol}
                                onChange={(e) => {
                                    if (e.target.value.length <= 3) {
                                        setSymbol(e.target.value.toUpperCase());
                                    }
                                }}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-8">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Supply"
                                value={initialSupply}
                                onChange={(e) =>
                                    setInitialSupply(e.target.value)
                                }
                            />
                        </label>
                        <button
                            className="btn"
                            onClick={deployToken}
                            disabled={deploying}
                        >
                            {deploying ? "Deploying..." : "Deploy Token"}
                        </button>
                        {deployed && showAddress && contractAddress ? (
                            contractAddress ? (
                                <div className="toast toast-end absolute top-50 right-50 pt-5 pr-5">
                                    <div className="alert alert-success">
                                        <span>Success!</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="toast toast-end">
                                    <div className="alert alert-error">
                                        <span>Contract deployment error</span>
                                    </div>
                                </div>
                            )
                        ) : null}
                    </div>
                    <div className="mockup-code bg-secondary text-primary">
                        <pre>
                            <code className="language-solidity">
                                {data.contractCode}
                            </code>
                        </pre>
                    </div>
                </div>
                <h2 className={clsx(styles.sectionTitleDashboard, "mt-4")}>ERC20</h2>
                <div className={styles.featuresGrid}>
                    <Feature
                        description={
                            <>
                                <span>
                                    The ERC20 standard defines a set of rules
                                    that apply to all tokens operating on the
                                    Ethereum blockchain. When you deploy an
                                    ERC20 token, you are creating a digital
                                    asset that can be traded, spent, or given to
                                    others. ERC20 tokens maintain a consistent
                                    record of who owns how many tokens at any
                                    given time and ensure secure transactions
                                    within the Ethereum network.
                                </span>
                                <span>
                                    Deploying an ERC20 token through this
                                    dashboard allows you to specify a unique
                                    name, symbol, and initial supply for your
                                    token. The initial supply is minted to your
                                    address upon creation, after which you can
                                    distribute it according to your project's
                                    needs. This token can then be integrated
                                    into a wider ecosystem of wallets,
                                    exchanges, and other smart contracts,
                                    leveraging the interoperability that the
                                    ERC20 standard provides.
                                </span>
                            </>
                        }
                        title="Tokens"
                    />
                </div>
            </Container>
            {/* // */}
            <Container className={styles.heroLeadWallet}>
                {deployed ? (
                    <p>
                        Contract address:{" "}
                        <span className={styles.contractAddress}>
                            {contractAddress}
                        </span>
                    </p>
                ) : null}
            </Container>

            
        </>
    );
};

export default Token;
