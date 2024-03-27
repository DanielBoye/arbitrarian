import "./globals.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex m-4">
                <h1 className="text-slate-50 grow font-bold text-4xl">Arbitrarium</h1>
                <Link href={"/profile"} className="flex-none grow-0 mr-4 border-4 text-slate-50 border-slate-700 border-collapse rounded">Profile</Link>
                <Link href={"/quiz"} className="flex-none grow-0 border-4 text-slate-50 border-slate-700 border-collapse rounded">Quiz</Link>
            </div>
        </>
    );
}