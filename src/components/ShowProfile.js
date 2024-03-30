"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ShowProfile = () => {
    const { address, isConnected } = useAccount();

    return (
        <>
            {isConnected ? (
                <table className="border-collapse border-4 text-slate-300 text-center">
                    <thead>
                        <tr className="border-4">
                            <th className="font-bold text-3xl p-4">Profile</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td className="border-4 p-2">Address</td>
                            <td className="border-4 p-2">{address}</td>
                        </tr>
                        <tr>
                            <td className="border-4 p-2">Username</td>
                            <td className="p-2 flex justify-evenly">
                                <h2 className="">RNDRD</h2>
                                <button className="">Change Username</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-4 p-2">Quizes Solved</td>
                            <td className="border-4 p-2">0</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div className="text-xl font-medium text-red-400 min-h-min">
                    Please connect your wallet to proceed
                </div>
            )}
        </>
    );
};

export default ShowProfile;
