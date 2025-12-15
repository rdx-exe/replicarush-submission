import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-sm">
              A
            </div>
            <span className="text-xl font-semibold">Agency</span> <span className="text-blue-600">.io</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20">
            <Link href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="#process" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-medium">
              Process
            </Link>
            <Link href="#work" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-medium">
              Work
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-medium">
              Pricing
            </Link>
          </nav>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-8 flex items-center gap-2 text-sm font-medium h-16 w-56">
            <Phone className="w-4 h-4" />
            Book Call
          </Button>
        </div>
      </div>
    </header>
  )
}
