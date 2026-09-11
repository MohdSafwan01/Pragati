import { Search, Bell, User } from 'lucide-react';
import { MobileNav } from './MobileNav';

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-border-default bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile hamburger menu */}
      <div className="flex lg:hidden">
        <MobileNav />
      </div>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search projects...
          </label>
          <div className="relative flex flex-1 items-center">
            <Search
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-neutral-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-foreground placeholder:text-neutral-400 focus:ring-0 sm:text-sm outline-none"
              placeholder="Search projects, states, or ministries..."
              type="search"
              name="search"
            />
          </div>
        </form>
        
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notifications */}
          <button
            type="button"
            className="-m-2.5 p-2.5 text-neutral-400 hover:text-neutral-500 relative outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-fast"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-danger ring-2 ring-white" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border-default" aria-hidden="true" />

          {/* Profile placeholder */}
          <div className="flex items-center gap-x-4">
            <button
              type="button"
              className="-m-1.5 flex items-center p-1.5 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full transition-fast"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center border border-primary-200">
                <User className="h-4 w-4 text-primary-700" />
              </div>
              <span className="hidden lg:flex lg:items-center ml-2">
                <span className="text-sm font-medium leading-6 text-foreground" aria-hidden="true">
                  Official User
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
