import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { SignInIcon } from "./icons/signIn";

const RootHeader = () => {
    return (
        <nav className="flex m-4 items-center">
            <Link href={"/"} className="grow">
                <h1 className="text-primary font-bold text-5xl">
                    Arbitrarium
                </h1>
            </Link>
            <Link
                href={"#"}
                className="grow-0 bg-primary text-primary-content rounded flex items-center justify-center"
            >
                <span className="mr-2"><SignInIcon /></span>
                <span className="text-lg font-semibold mr-2">Sign in</span>
            </Link>
            {/* <ConnectButton /> */}
        </nav>
    );
};

export default RootHeader;
