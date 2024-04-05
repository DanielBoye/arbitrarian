import clsx from "clsx";
import { useAccount } from "wagmi";
import { Container } from "@/components/container/Container";
import { MarketingLayout } from "@/components/dashboardlayout/Marketing";
import styles from "../app/index.module.css";
import Link from "next/link";

function Feature({ title, description, className, ...props }) {
    return (
        <div className={clsx(className, styles.featuresFeature)} {...props}>
            <h4 className={styles.featuresFeatureTitle}>{title}</h4>
            <p className={styles.featuresFeatureDescription}>{description}</p>
        </div>
    );
}

const Dashboard = () => {
    const { address, isConnected } = useAccount();

    return (
        <>
            <MarketingLayout>
                <Container className={styles.sectionFeature}>
                    <h2 className={styles.sectionTitleDashboard}>
                        Lorem ipsum
                    </h2>
                    <p className={styles.heroLeadDashboard}>
                        Proident ea in consequat aliquip consectetur sit nulla
                        sint.
                    </p>
                </Container>
                <Container className={styles.sectionDashboard}>
                    <div className="flex flex-row justify-center gap-4">
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
                                        Deploy your own ERC20 token on the
                                        Arbitrum network!
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Container>
            </MarketingLayout>
        </>
    );
};

export default Dashboard;
