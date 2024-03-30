import Providers from "./providers";
import "./globals.css";
import RootHeader from "@/components/RootHeader";

export const metadata = {
    title: "Arbitrarium",
    description:
        "A Tableland + Next.js + wagmi + RainbowKit Project for LearnWEB3 Hackathon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black">
                <Providers>
                    <header>
                        <RootHeader />
                    </header>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
