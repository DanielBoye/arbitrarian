import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import contractBytecode from "./bytecode.json";
import data from "./contract.json";
import { MarketingLayout } from "@/components/dashboardlayout/Marketing";
import styles from "../../app/index.module.css";
import { Container } from "../container/Container";
import Prism from "prismjs";
import "./prism-solidity"; // Import the Solidity extension after Prism

const Token = ({ signer }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [initialSupply, setInitialSupply] = useState("");
    const [deploying, setDeploying] = useState(false);
    const [deployed, setDeployed] = useState(false);

    const [contractAddress, setContractAddress] = useState("");

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
            // alert(`Contract deployed to: ${contract.address}`);
        } catch (error) {
            console.error("Deployment error:", error);
            // alert("Error deploying contract", error);
        } finally {
            setDeploying(false);
        }
    };

    return (
        <>
            <MarketingLayout>
                <Container className={styles.sectionFeature}>
                    <h2 className={styles.sectionTitleDashboard}>
                        Deploy your first token!
                    </h2>
                </Container>
                <Container className={styles.sectionDashboard}>
                    <div className="flex flex-row justify-center gap-4">
                        <div>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Token Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Token Symbol"
                                    value={symbol}
                                    onChange={(e) => setSymbol(e.target.value)}
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
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
                            {deployed ? (
                                contractAddress ? (
                                    <div className="toast toast-end absolute top-50 right-50 pt-5 pr-5">
                                        <div className="alert alert-success">
                                            <span>
                                                Contract address: {contractAddress}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="toast toast-end">
                                        <div className="alert alert-error">
                                            <span>Contract error</span>
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
                </Container>
            </MarketingLayout>
        </>
    );
};

export default Token;
