"use client";

import Token from "@/components/token/Token";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";

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
            <Token />
        </div>
    );
}
