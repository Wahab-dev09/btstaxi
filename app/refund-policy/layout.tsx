// app/privacy-policy/layout.tsx
import React from "react";
import Link from "next/link";

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> / Refund Policy
      </div>
      {children}
    </div>
  );
}