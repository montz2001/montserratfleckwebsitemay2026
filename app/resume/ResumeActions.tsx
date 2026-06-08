"use client";

import Link from "next/link";

export default function ResumeActions() {
  return (
    <div className="resume-actions no-print">
      <Link href="/" className="resume-back">
        ← Back to portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="resume-print-btn"
      >
        Save as PDF
      </button>
    </div>
  );
}
