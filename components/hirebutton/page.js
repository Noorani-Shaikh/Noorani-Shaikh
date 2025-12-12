"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HireButton({ text = "Hire Me", href = "/contact" }) {
  return (
    <Link
      href={href}
     className="
  inline-flex items-center gap-2 px-6 py-3
  rounded-xl font-medium text-white
  border border-indigo-500/50 bg-slate-900/30 backdrop-blur-md
  transition-all duration-300
  hover:bg-indigo-600/20 hover:border-indigo-400 hover:text-white
  hover:scale-[1.04]
"
    >
      {text}
      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
