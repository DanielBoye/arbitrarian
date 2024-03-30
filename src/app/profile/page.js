"use client";

import RootHeader from "@/components/RootHeader";
// pages/profile.js
import ShowProfile from "@/components/ShowProfile";

export default function Profile() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <ShowProfile />
        </div>
    );
}
