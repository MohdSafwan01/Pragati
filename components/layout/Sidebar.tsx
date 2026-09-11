'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FolderGit2, 
  Activity, 
  AlertTriangle, 
  Target, 
  PieChart, 
  BrainCircuit,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NAVIGATION = [
  { name: 'Projects', href: '/projects', icon: FolderGit2 },
  { name: 'Risk Monitor', href: '/risk-monitor', icon: Activity },
  { name: 'Early Warnings', href: '/early-warnings', icon: AlertTriangle },
  { name: 'Intervention Priority', href: '/intervention-priority', icon: Target },
  { name: 'Analytics', href: '/analytics', icon: PieChart },
  { name: 'PRAGATI Intelligence', href: '/intelligence', icon: BrainCircuit },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 left-0 bg-white border-r border-border-default z-40">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-border-subtle">
        <Link href="/" className="flex items-center gap-2 outline-none">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white stroke-[3]" />
          </div>
          <span className="font-bold text-royal text-xl tracking-tight">PRAGATI</span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
        <nav className="flex-1 space-y-1">
          {NAVIGATION.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-fast outline-none',
                  isActive 
                    ? 'bg-primary-50 text-primary-700' 
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-royal'
                )}
              >
                <item.icon
                  className={cn(
                    'shrink-0 w-5 h-5',
                    isActive ? 'text-primary-600' : 'text-neutral-400 group-hover:text-neutral-500'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
