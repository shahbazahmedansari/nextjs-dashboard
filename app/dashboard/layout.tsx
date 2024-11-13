import React from "react";
import SideNav from "../ui/dashboard/sidenav";

// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">{children}</div>
        </div>
    )
}