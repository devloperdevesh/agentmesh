"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </div>
  );
}
