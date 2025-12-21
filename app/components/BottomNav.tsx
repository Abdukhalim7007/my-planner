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
        className={styles.fab}
        aria-label="Add new item"
      >
        +
      </button>

      {/* Bottom Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
                  aria-label={item.label}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
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
