import BottomNav from './BottomNav';

interface MobileShellProps {
  title: string;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
}

export default function MobileShell({
  title,
  rightAction,
  children,
}: MobileShellProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-[420px] mx-auto">
        {/* TopBar */}
        <header className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 h-14">
            <button
              className="text-gray-700 dark:text-gray-300 text-xl"
              aria-label="Menu"
            >
              ☰
            </button>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h1>
            <div className="w-8 flex items-center justify-end">
              {rightAction}
            </div>
          </div>
        </header>

        {/* Content Area with Safe-Area Padding */}
        <main
          className="pt-[calc(24px+env(safe-area-inset-top))] pb-[calc(96px+env(safe-area-inset-bottom))] px-4"
        >
          {children}
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>
  );
}

