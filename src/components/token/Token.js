import { useState, useEffect } from 'react';
import clsx from "clsx";
import { useAccount } from "wagmi";
import { Container } from "@/components/container/Container";
import { MarketingLayout } from "@/components/dashboardlayout/Marketing";
import styles from "../../app/index.module.css";

const Token = () => {
    const { address, isConnected } = useAccount();

    return (
        <>  
            <MarketingLayout>
                <Container className={styles.sectionFeature}>
                    <h2 className={styles.sectionTitleDashboard}>
                        Hello
                    </h2>
                    <p className={styles.heroLeadDashboard}>
                        Proident ea in consequat aliquip consectetur sit nulla sint.
                    </p>
                </Container>
                {/* <Container className={styles.sectionDashboard}>

                    <div className="flex flex-row justify-center gap-4">
                        <div className={clsx("card w-96 shadow-xl", styles.featuresFeature)}>                    <div className="card-body">
                                <h2 className="card-title">Learn about Web3</h2>
                                <p>Learn about Blockchains, Arbitrum and smart contracts!</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Learn now</button>
                                </div>
                            </div>
                        </div>
                        <div className={clsx("card w-96 shadow-xl", styles.featuresFeature)}>
                            <div className="card-body">
                                <h2 className="card-title">Token</h2>
                                <p>Deploy your own ERC20 token on the Arbitrum network!</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Deploy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container> */}
            </MarketingLayout>
        </>
    );
};

export default Token;
