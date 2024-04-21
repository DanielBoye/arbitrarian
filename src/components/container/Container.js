import clsx from "clsx";
import styles from "./Container.module.css";

export function Container({
  size = "medium",
  className,
  children,
  ...props
}) {
  return (
    <div
      className={clsx(className, styles.container, {
        [styles.containerSmall]: size === "small",
        [styles.containerMedium]: size === "medium",
        [styles.containerLarge]: size === "large",
      })}
      {...props}
    >
      {children}
    </div>
  );
}
