import Providers from "./providers";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "./normalize.css";


export const metadata = {
    title: "Arbitrarian",
    description:
        "A Tableland + Next.js + wagmi + RainbowKit Project for LearnWEB3 Hackathon",
};

export default function App({ children }) {
    return (
      <>   
          <Providers>
            <main className="flex flex-col grow shrink basis-auto items-center">
                {children}
            </main>
          </Providers>
      </>
    );
}