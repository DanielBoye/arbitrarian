import Providers from "./providers";
import "./globals.css";
import RootHeader from "@/components/rootHeader";

export const metadata = {
    title: "Arbitrarium",
    description:
        "A Tableland + Next.js + wagmi + RainbowKit Project for LearnWEB3 Hackathon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <header>
                        <RootHeader />
                    </header>
                    <main className="flex flex-col items-center h-full">
                        {children}
                    </main>
                    <footer>
                        Footer
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
