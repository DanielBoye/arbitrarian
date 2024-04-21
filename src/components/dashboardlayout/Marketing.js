import clsx from "clsx";
import { MarketingFooter, MarketingHeader } from ".";
import styles from "./Marketing.module.css";

export function MarketingLayout({
  children,
  className,
  ...props
}) {
  return (
    <div className={clsx(className, styles.layout)} {...props}>
      <MarketingHeader />
      <main>{children}</main>
      {/* <MarketingFooter className={styles.footer} /> */}
    </div>
  );
}
