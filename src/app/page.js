import { SignInIcon } from "@/components/icons/signIn";
import "./globals.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col w-1/3 space-y-4">
            <h1 className="text-primary text-4xl font-bold w-1/3">
                Learn, build and dev&nbsp;on Arbitrum
            </h1>
            <p className="text-neutral text-base w-1/3">
                Learn how to develop and deploy tokens from smart contracts from
                a few clicks&nbsp;that deploys in seconds.
            </p>
            <div className="flex items-center space-x-4">
                <Link
                    className="bg-primary text-primary-content rounded flex items-center justify-center p-2"
                    href="#"
                >
                    <span className="ml-2">
                        <SignInIcon className="h-4 w-4" />
                    </span>
                    <span className="ml-2">Connect Wallet</span>
                </Link>
                <Link className="bg-secondary text-secondary-content rounded p-2" href="#">
                    Learn More
                </Link>
            </div>
        </div>
    );
}
