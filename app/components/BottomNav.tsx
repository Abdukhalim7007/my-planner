'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './BottomNav.module.scss';

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

  // SVG Icons as React components
  const HomeIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
    <svg
      className={className}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8L10 1L19 8V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H3C2.46957 22 1.96086 21.7893 1.58579 21.4142C1.21071 21.0391 1 20.5304 1 20V8Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 22V12H13V22"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PlansIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
    <svg
      className={className}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2.2H18V19.8H2V2.2Z"
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isActive ? "0" : "1.6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.89 8.25H16.62V22H13.89V8.25Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.31 0H9.69V22H8.31V0Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 13.75H1.38V22H0V13.75Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ScheduleIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
    <svg
      className={className}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2.2H20V19.8H0V2.2Z"
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isActive ? "0" : "1.6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 0V4.4H6.11V0H5Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.89 0V4.4H15V0H13.89Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.67 11H13.33V12.1H6.67V11Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const StatsIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
    <svg
      className={className}
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.62 8.25H18V22H16.62V8.25Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.31 0H9.69V22H8.31V0Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 13.75H1.38V22H0V13.75Z"
        fill={isActive ? "currentColor" : "none"}
        stroke={isActive ? "none" : "currentColor"}
        strokeWidth="1.38"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SettingsIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
    <svg
      className={className}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.67H20V22H0V14.67Z"
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isActive ? "0" : "1.6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 0H15V9.78H5V0Z"
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={isActive ? "0" : "1.6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/plans', label: 'Plans', icon: PlansIcon },
    { href: '/schedule', label: 'Schedule', icon: ScheduleIcon },
    { href: '/stats', label: 'Stats', icon: StatsIcon },
    { href: '/settings', label: 'Settings', icon: SettingsIcon },
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
        className={styles.fab}
        aria-label="Add new item"
      >
        +
      </button>

      {/* Bottom Navigation */}
      <nav className={styles.nav} aria-label="Bottom Navigation">
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {navItems.map((item) => {
              const active = isActive(item.href);
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                  aria-label={item.label}
                >
                  <IconComponent className={styles.navIcon} isActive={active} />
                  <span className={styles.navLabel}>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={handleCloseModal}
          aria-label="Close modal"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Add New</h2>
              <button
                onClick={handleCloseModal}
                className={styles.modalClose}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className={styles.modalActions}>
              <button
                onClick={() => handleActionClick('Add Task')}
                className={styles.modalButton}
              >
                Add Task
              </button>
              <button
                onClick={() => handleActionClick('Add Event')}
                className={styles.modalButton}
              >
                Add Event
              </button>
              <button
                onClick={() => handleActionClick('Add Note')}
                className={styles.modalButton}
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
