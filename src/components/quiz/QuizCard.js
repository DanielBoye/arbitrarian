import clsx from "clsx";
import Link from "next/link";
import styles from "@/app/index.module.css";

export default function QuizCard({href, title}) {
    return (
        <>
            <Link href={href}>
                <div
                    className={clsx(
                        "card w-96 shadow-xl hover:border-primary",
                        styles.featuresFeature
                    )}
                >
                    {" "}
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
}
