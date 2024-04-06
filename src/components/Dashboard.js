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
    "Добро пожаловать!",
    "欢迎！",
    "ようこそ！",
    "환영합니다!",
    "Vítejte!",
    "Velkommen!",
    "Welkom!",
    "Välkommen!",
    "Tervetuloa!",
    "स्वागत हे!",
    "Καλώς ήρθατε!",
    "Benvenuti!",
    "Hoşgeldiniz!",
    "ברוכים הבאים!",
    "Bine ați venit!",
    "Добредојдовте!",
    "Velkomin!",
    "Ласкаво просимо!",
    "أهلاً وسهلاً",
];

const Dashboard = () => {
    const [welcomeMessage, setWelcomeMessage] = useState("Welcome!");

    const handleWelcomeClick = () => {
        const filteredMessages = welcomeMessages.filter(
            (message) => message !== welcomeMessage
        );

        const newMessage =
            filteredMessages[
                Math.floor(Math.random() * filteredMessages.length)
            ];

        setWelcomeMessage(newMessage);
    };

    return (
        <>
            <Container className="flex flex-col justify-start">
                <h2 className={clsx(styles.sectionTitleDashboard, "mt-12")}>
                    <label className="swap" onClick={handleWelcomeClick}>
                        <input type="checkbox" />
                        <div className="swap-on">{welcomeMessage}</div>
                        <div className="swap-off">{welcomeMessage}</div>
                    </label>
                </h2>
                <p className={clsx(styles.heroLeadDashboard, "mt-4")}>
                    <span>
                        Here in your Dashboard, you have the power to manage,
                        deploy and mint ERC20 tokens from a few clicks and
                        interacting with it.&#13; You will can also choose to
                        learn or be challenged in our quiz section where we
                        focus on security and smart contract flaws.
                    </span>
                </p>
                <div className="flex flex-row gap-4 mt-24">
                    <Link href="/dashboard/quiz">
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
                                    Test your knowledge with our comprehensive
                                    quizzes designed to deepen your
                                    understanding of blockchain technology and
                                    smart contract security.
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
                                    Launch your first ERC20 token on the
                                    Arbitrum Sepolia network effortlessly with
                                    just a few clicks, and then import it
                                    directly into your wallet and start
                                    interacting with it!
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default Dashboard;
