import "./globals.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div>
                <Link href={"/profile"} className="mr-4 border-2 border-green-400 border-collapse rounded">Profile</Link>
                <Link href={"/quiz"} className="border-2 border-green-400 border-collapse rounded">Quiz</Link>
            </div>
        </>
    );
}