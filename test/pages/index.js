import clsx from "clsx";
import { signIn } from "next-auth/react";
import { SignInIcon } from "../icons";
import { MarketingLayout } from "../layouts/Marketing";
import { Button, LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import styles from "./index.module.css";

function Feature({ title, description, className, ...props }) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            Learn, build and dev&nbsp;on Arbitrum
          </h1>
          <p className={styles.heroLead}>
            Learn how to develop and deploy tokens from smart contracts
            from a few clicks&nbsp;that deploys in seconds.
          </p>
        </div>
        <div className={styles.heroActions}>
          <Button icon={<SignInIcon />} onClick={() => signIn()}>
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
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                asdjaslfjasløkfjasøldkfjasløkdfjasløkdjfsl
                lajsdaskljfaslkjfasdlkfjsadlfkjsadlfkjøasdfølk
              </>
            }
            title="Very cool"
          />
          <Feature
            description={
              <>
                Best practices followed, using a mixture of SSR and custom API
                endpoints. Modify documents from both client and server.
              </>
            }
            title="Next.js"
          />
          <Feature
            description={
              <>
                Adjust our reusable interface & design system to fit your needs.
              </>
            }
            title="User Interface"
          />
          <Feature
            description={
              <>
                All custom client and server functions are fully typed, and easy
                to update.
              </>
            }
            title="TypeScript lol"
          />
          <Feature
            description={
              <>
                Connect your wallet to prove your identity and edit the profile in the
                profile page.
              </>
            }
            title="Rainbow Auth"
          />
          <Feature
            description={
              <>
                Connect your wallet to prove your identity and edit the profile in the
                profile page.
              </>
            }
            title="Bla bla"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}
