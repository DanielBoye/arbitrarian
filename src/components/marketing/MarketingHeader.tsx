"use client"


import clsx from "clsx";
import Link from "next/link";
import { SignInIcon } from "@/components/icons/signIn";
import { Button } from "@/components/icons/Button";
import { Container } from "@/components/container/Container";
import { Logo } from "@/components/icons/Logo";
import styles from "./MarketingHeader.module.css";
import { ComponentProps, useCallback } from "react"; // Import useCallback

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {

  // Create a function to handle redirection
  const redirectDashboard = useCallback(() => {
    // Redirect to Google
    window.location.href = '/dashboard';
  }, []);

  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="/dashboard">
          {/* <Logo /> */}
        </Link>
        {/* Update the Button onClick to use redirectToGoogle */}
        <Button icon={<SignInIcon />} onClick={redirectDashboard}>
          Sign In
        </Button>
      </Container>
    </header>
  );
}
