"use client";

import { MarketingLayout } from "@/components/dashboardlayout/Marketing";
import { useSigner } from "@/hooks/useSigner";
import { insertUser, readTable } from "@/utils/tableland";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { setCookie } from "../actions";

export default function DashboardLayout({ children }) {
    const { isConnected, address } = useAccount();
    const { openConnectModal } = useConnectModal();
    const signer = useSigner();
    const [length, setLength] = useState(0);
    // console.log(table);

    useEffect(() => {
        if (!isConnected) {
            openConnectModal();
        } else if (isConnected) {
            setCookieFromTable();
        }
        // setCookie();
    });

    async function setCookieFromTable() {
        const table = await readTable(signer, "");

        if (table.length == 0) {
            insertUser(signer, "", address);
        }

        for (let i = 0; i < table.length; i++) {
            if (address == table[i].add) {
                setCookie(table[i].quizes_solved);
            } else if (!table.some((obj) => obj.add == address)) {
                insertUser(signer, "", address);
            }
        }
    }

    return (
        <>
            <MarketingLayout>{children}</MarketingLayout>
        </>
    );
}
