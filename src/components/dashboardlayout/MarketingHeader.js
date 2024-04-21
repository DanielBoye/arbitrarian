"use client";

import clsx from "clsx";
import Link from "next/link";
import { SignInIcon } from "@/components/icons/signIn";
import { Button } from "@/components/icons/Button";
import { Container } from "@/components/container/Container";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./MarketingHeader.module.css";
import { Logo } from "../icons/Logo";

export function MarketingHeader({
  className,
  ...props
}) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="/">
          <Logo/>
        </Link>
        <ConnectButton/>
      </Container>
    </header>
  );
}
