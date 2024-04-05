import clsx from "clsx";
import { ComponentProps, useMemo } from "react";
import { GitHubIcon } from "@/components/icons/GitHub";
import { LinkButton } from "@/components/icons/Button";
import { Container } from "@/components/container/Container";
import styles from "./MarketingFooter.module.css";

export function MarketingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© {year} Rohaan og Daniel</span>
        <LinkButton
          href="https://github.com/DanielBoye/arbitrarian"
          icon={<GitHubIcon />}
          target="_blank"
          variant="secondary"
        >
          View on GitHub
        </LinkButton>
      </Container>
    </footer>
  );
}
