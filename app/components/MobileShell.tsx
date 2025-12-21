'use client';

import BottomNav from './BottomNav';
import styles from './MobileShell.module.scss';

interface MobileShellProps {
  title: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  showHamburger?: boolean;
  children: React.ReactNode;
}

export default function MobileShell({
  title,
  leftAction,
  rightAction,
  showHamburger = true,
  children,
}: MobileShellProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            {leftAction ? (
              <div className={styles.leftAction}>{leftAction}</div>
            ) : showHamburger ? (
              <button
                className={styles.menuButton}
                aria-label="Menu"
              >
                ☰
              </button>
            ) : (
              <div className={styles.leftAction}></div>
            )}
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.rightAction}>
              {rightAction}
            </div>
          </div>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <BottomNav />
      </div>
    </div>
  );
}

