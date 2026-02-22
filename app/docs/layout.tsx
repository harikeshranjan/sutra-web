import DocsSidebar from "@/components/docs-sidebar";
import React from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <DocsSidebar />
      {children}
    </main>
  )
}