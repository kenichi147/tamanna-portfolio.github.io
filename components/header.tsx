"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif">
          Tamanna Suman
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className={`hover:text-gray-600 ${pathname === "/" ? "font-medium" : ""}`}>
            Home
          </Link>
          <Link href="/resume" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}

