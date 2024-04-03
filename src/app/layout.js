import Providers from "./providers";
import "./globals.css";
import RootHeader from "@/components/RootHeader";

export const metadata = {
    title: "Arbitrarian",
    description:
        "A Tableland + Next.js + wagmi + RainbowKit Project for LearnWEB3 Hackathon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                        <header className="grow-0 shrink basis-auto">
                            <RootHeader />
                        </header>
                        <main className="flex flex-col grow shrink basis-auto items-center">
                            {children}
                        </main>
                        <footer className="grow-0 shrink basis-auto">
                            Footer
                        </footer>
                </Providers>
            </body>
        </html>
    );
}
