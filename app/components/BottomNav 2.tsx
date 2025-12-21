'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BottomNav() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock/unlock body scroll when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/plans', label: 'Plans', icon: '📋' },
    { href: '/schedule', label: 'Schedule', icon: '📅' },
    { href: '/stats', label: 'Stats', icon: '📊' },
    { href: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleFabClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleActionClick = (action: string) => {
    console.log(`Action clicked: ${action}`);
    // Placeholder: alert or console.log for now
    alert(`${action} clicked`);
    handleCloseModal();
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={handleFabClick}
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-14 h-14 rounded-full bg-blue-500 text-white text-2xl shadow-lg hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Add new item"
      >
        +
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-[420px] mx-auto">
          <div className="flex items-center justify-around h-16">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                    active
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                  aria-label={item.label}
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleCloseModal}
          aria-label="Close modal"
        >
          <div
            className="w-full max-w-[420px] bg-white dark:bg-gray-900 rounded-t-2xl p-6 shadow-2xl transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => handleActionClick('Add Task')}
                className="w-full py-4 px-4 text-left rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white font-medium"
              >
                Add Task
              </button>
              <button
                onClick={() => handleActionClick('Add Event')}
                className="w-full py-4 px-4 text-left rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white font-medium"
              >
                Add Event
              </button>
              <button
                onClick={() => handleActionClick('Add Note')}
                className="w-full py-4 px-4 text-left rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white font-medium"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

