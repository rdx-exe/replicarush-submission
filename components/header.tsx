import Link from "next/link"
import { Button } from "@/components/ui/button"
import { poppins } from "@/app/fonts"

export default function Header() {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 ${poppins.variable}`} style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-sm">
              A
            </div>
            <p>
              <span className="text-xl font-semibold">Agency
                </span><span className="text-xl font-semibold text-indigo-600">.io</span>
            </p>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">
              Process
            </Link>
            <Link href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
              Work
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
          </nav>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">Book Call</Button>
        </div>
      </div>
    </header>
  )
}
