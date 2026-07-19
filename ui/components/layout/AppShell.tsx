"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import MainWorkspace from "./MainWorkspace";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <div
      className="
flex
h-screen
overflow-hidden
bg-black
text-white
"
    >
      <Sidebar />

      <div
        className="
flex
flex-1
flex-col
"
      >
        <Navbar />

        <MainWorkspace>{children}</MainWorkspace>
      </div>
    </div>
  );
}
