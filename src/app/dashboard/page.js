"use client";

import Dashboard from "@/components/Dashboard";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function Root() {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    useEffect(() => {
        if (!isConnected) {
            openConnectModal();
        }
    });

    return (
        <div>
            <Dashboard />
        </div>
    );
}
