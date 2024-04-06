import { useState } from "react";
import clsx from "clsx";
import { Container } from "@/components/container/Container";
import { MarketingLayout } from "@/components/dashboardlayout/Marketing";
import styles from "../app/index.module.css";
import Link from "next/link";
import { useSigner } from "@/hooks/useSigner";
import { insertUser, readTable } from "@/utils/tableland";
import { useAccount } from "wagmi";

const welcomeMessages = [
    "Welcome!",
    "Bienvenidos!",
    "Bienvenue!",
    "Willkommen!",
    "Benvenuto!",
    "Bem-vindo!",
];

const Dashboard = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");
    const signer = useSigner();
    const account = useAccount();

    const handleWelcomeClick = () => {
        const randomMessage =
            welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        setWelcomeMessage(randomMessage);
    };

    return (
        <>
            {/* <MarketingLayout> */}
            <Container className={styles.sectionFeature}>
                <h2 className={styles.sectionTitleDashboard}>
                    <label className="swap" onClick={handleWelcomeClick}>
                        <input type="checkbox" />
                        <div className="swap-on">{welcomeMessage}</div>
                        <div className="swap-off">{welcomeMessage}</div>
                    </label>
                </h2>
                <p className={styles.heroLeadDashboard}>
                    Proident ea in consequat aliquip consectetur sit nulla sint.
                </p>
            </Container>
            <Container className={styles.sectionDashboard}>
                <div className="flex flex-row justify-center gap-4">
                    <Link
                        href="/dashboard/quiz"
                    >
                        <div
                            className={clsx(
                                "card w-96 shadow-xl hover:border-primary",
                                styles.featuresFeature
                            )}
                        >
                            {" "}
                            <div className="card-body">
                                <h2 className="card-title">Quizes</h2>
                                <p>
                                    Test your knowledge through our several
                                    profound quizes!
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/dashboard/token">
                        <div
                            className={clsx(
                                "card w-96 shadow-xl hover:border-primary",
                                styles.featuresFeature
                            )}
                        >
                            <div className="card-body">
                                <h2 className="card-title">Token</h2>
                                <p>
                                    Deploy your own ERC20 token on the Arbitrum
                                    network!
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>
            {/* </MarketingLayout> */}
        </>
    );
};

export default Dashboard;
