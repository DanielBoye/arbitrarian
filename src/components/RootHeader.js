import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const RootHeader = () => {
    return (
        <nav className="flex m-4">
            <Link href={"/"} className="grow">
                <h1 className="text-slate-50 font-bold text-5xl">
                    Arbitrarium
                </h1>
            </Link>
            <Link
                href={"/profile"}
                className="flex-none grow-0 mr-4 border-4 text-slate-50 border-slate-700 border-collapse rounded"
            >
                Profile
            </Link>
            <Link
                href={"/quiz"}
                className="flex-none grow-0 border-4 text-slate-50 border-slate-700 border-collapse rounded"
            >
                Quiz
            </Link>
            <ConnectButton />
        </nav>
    );
};

export default RootHeader;
