import BottomNav from './BottomNav';
import styles from './MobileShell.module.scss';

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <button
              className={styles.menuButton}
              aria-label="Menu"
            >
              ☰
            </button>
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

