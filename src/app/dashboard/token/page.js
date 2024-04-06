"use client";

import Token from "@/components/token/Token";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useSigner } from "@/hooks/useSigner";


export default function Root() {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    useEffect(() => {
        if (!isConnected) {
            openConnectModal();
        }
    });


    const signer = useSigner();

    return (
        <div>
            <Token signer={signer}/>
        </div>
    );
}
