import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-outfit font-bold tracking-tighter inline-block mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                SRIRAM
              </span>
              <span className="text-white">.DEV</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Computer Science student, software developer, and DSA enthusiast building secure systems and intelligent solutions.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Sriramp24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/pendem-sri-ram-231b992b3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/8074476558/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-[#FFA116]/20 hover:border-[#FFA116]/50 hover:scale-110 transition-all duration-300"
            >
              <span className="font-bold leading-none" style={{ fontSize: '1.25rem' }}>L</span>
            </a>
            <a
              href="mailto:srirampendem9395@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sriram Pendem. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
