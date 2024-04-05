"use client";

import Quiz from "@/components/Quiz";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";

const QuizPage = () => {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    useEffect(() => {
        if (!isConnected) {
            openConnectModal();
        }
    });

    return (
        <div className="min-h-screen text-white p-5">
            <Quiz />
        </div>
    );
};

export default QuizPage;
