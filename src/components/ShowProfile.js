"use client";

import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ShowProfile = () => {
  const { address, isConnected } = useAccount();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* <h1 className="text-3xl font-semibold text-center text-white mb-8">Profile Page</h1> */}
      {isConnected ? (
        <div className="text-center">
          <p className="text-xl font-medium text-green-400">Wallet Connected</p>
          <p className="mt-2 text-gray-400">Your Address:</p>
          <p className="text-lg font-semibold text-gray-300 break-all">{address}</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-medium text-red-400 mb-4">You are not logged in.</p>
          <ConnectButton className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"/>
        </div>
      )}
    </div>
  );
};

export default ShowProfile;
