"use client"

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
    window.location.href = '/dashboard';
  }, []);

  return (
    <MarketingLayout>
      <Container className={styles.sectionHeader}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitleRoot}>
            Arbitrarian
          </h1>
          <p className={styles.heroLeadDashboard}>
            Learn how to develop and deploy tokens from smart contracts
            from a few clicks&nbsp;that deploys in seconds.
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
                asdjaslfjasløkfjasøldkfjasløkdfjasløkdjfsl
                lajsdaskljfaslkjfasdlkfjsadlfkjsadlfkjøasdfølk
              </>
            }
            title="Web3 Security"
          />
          <Feature
            description={
              <>
                Best practices followed, using a mixture of SSR and custom API
                endpoints. Modify documents from both client and server.
              </>
            }
            title="ERC20 Tokens"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}
