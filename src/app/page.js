"use client";

import clsx from "clsx";
import { SignInIcon } from "@/components/icons/signIn";
import { MarketingLayout } from "@/components/marketing/Marketing";
import { Button, LinkButton } from "@/components/icons/Button/Button";
import { Container } from "@/components/container/Container";
import styles from "./index.module.css";
import { ComponentProps, useCallback } from "react"; // Import useCallback

function Feature({ title, description, className, ...props }) {
    return (
        <div className={clsx(className, styles.featuresFeature)} {...props}>
            <h4 className={styles.featuresFeatureTitle}>{title}</h4>
            <p className={styles.featuresFeatureDescription}>{description}</p>
        </div>
    );
}

export default function Index() {
    // Directly define the redirection inside the onClick
    const redirectToGoogle = useCallback(() => {
        // Redirect to Google
        window.location.href = "/dashboard";
    }, []);

    return (
        <MarketingLayout>
            <Container className={styles.sectionHeader}>
                <div className={styles.heroInfo}>
                    <h1 className={styles.heroTitleRoot}>Arbitrarian</h1>
                    <p className={styles.heroLeadDashboard}>
                        Learn about smart contract security and how to develop
                        and deploy tokens from smart contracts from a few
                        clicks&nbsp;that deploys in seconds.
                    </p>
                </div>
                <div className={styles.heroActions}>
                    <Button icon={<SignInIcon />} onClick={redirectToGoogle}>
                        Connect Wallet
                    </Button>
                    <LinkButton
                        href="https://arbitrum.io/"
                        target="_blank"
                        variant="secondary"
                    >
                        Learn more
                    </LinkButton>
                </div>
            </Container>
            <Container className={styles.sectionFeature}>
                <h2 className={styles.sectionTitle}>Learn</h2>
                <div className={styles.featuresGrid}>
                    <Feature
                        description={
                            <>
                                Enhance your understanding of blockchain
                                technology and smart contract security through
                                our comprehensive tests.
                            </>
                        }
                        title="Web3 Security"
                    />
                    <Feature
                        description={
                            <>
                                Easily deploy ERC20 tokens directly from your
                                browser with our user-friendly interface with a
                                few clicks, and learn how to interact with them.
                            </>
                        }
                        title="ERC20 Tokens"
                    />
                </div>
            </Container>
        </MarketingLayout>
    );
}
