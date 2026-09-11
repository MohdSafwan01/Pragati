import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-default">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center shadow-sm opacity-80">
              <span className="text-white font-bold text-lg leading-none tracking-tighter">P</span>
            </div>
            <div>
              <span className="font-bold text-royal text-xl tracking-tight block leading-tight">PRAGATI</span>
              <span className="text-xs text-neutral-500 font-medium">Predictive Infrastructure Intelligence</span>
            </div>
          </div>
          
          <div className="flex gap-x-6 text-sm text-neutral-500">
            <Link href="#why-pragati" className="hover:text-primary transition-colors">Why PRAGATI</Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
            <Link href="/projects" className="hover:text-primary transition-colors font-medium text-royal">Projects Workspace</Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-neutral-400">
            &copy; {new Date().getFullYear()} PRAGATI Project. SIH 2026 Demonstration.
          </p>
          <p className="text-[10px] leading-4 text-neutral-400 max-w-lg text-center md:text-right">
            Decision-support system. This is a demonstration interface. Final intervention decisions remain with authorized officials. Do not use for actual government operations.
          </p>
        </div>
      </div>
    </footer>
  );
}
