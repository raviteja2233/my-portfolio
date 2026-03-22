export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Raviteja Surayolla. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
