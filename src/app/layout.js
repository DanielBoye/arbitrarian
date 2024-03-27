import Home from "./page";

export const metadata = {
    title: "Arbitrarium",
    description: "A Tableland + Next.js + wagmi + RainbowKit Project for LearnWEB3 Hackathon",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        {children}
      </body>
    </html>
  );
}
