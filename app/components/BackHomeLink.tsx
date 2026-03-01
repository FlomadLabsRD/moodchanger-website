"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackHomeLink() {
  const pathname = usePathname();

  const hiddenPaths = [
    "/",
    "/athletes",
    "/people/allergies",
    "/people/stuttering",
    "/people/cognitive-loss",
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="flex justify-center px-6 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#FDE035] transition-colors hover:text-[#FDE035]/80"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>
    </div>
  );
}
