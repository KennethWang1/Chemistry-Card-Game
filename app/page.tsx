  'use client';

  import { useState } from "react";
  import Navigation from "@/app/components/Navigation";
  import LabTab from "@/app/components/Lab/LabTab";
  import VaultTab from "@/app/components/Vault/VaultTab";

  export default function Home() {
    const [activeTab, setActiveTab] = useState("lab");

    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 bg-surface">
          {activeTab === "lab" && <LabTab />}
          {activeTab === "vault" && <VaultTab />}
        </main>
      </div>
    );
  }
