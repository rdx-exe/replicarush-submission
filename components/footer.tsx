import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span className="text-xl font-semibold text-white">Agency.io</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Crafting digital experiences with precision and passion. Based in San Francisco, working globally.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Design System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Stay Included</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest design trends.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:border-indigo-500"
              />
              <Button size="icon" className="bg-indigo-600 hover:bg-indigo-700 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
