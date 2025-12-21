import { ReactNode } from 'react';
import styles from './ActivityItem.module.scss';

interface ActivityItemProps {
  text: string;
  completed: boolean;
  icon?: ReactNode;
}

export default function ActivityItem({
  text,
  completed,
  icon,
}: ActivityItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.iconArea}>
        {icon ? (
          <span className={styles.customIcon}>{icon}</span>
        ) : completed ? (
          <span className={styles.checkIcon}>✓</span>
        ) : (
          <span className={styles.circleIcon}></span>
        )}
      </div>
      <span className={completed ? styles.completedText : styles.pendingText}>
        {text}
      </span>
    </div>
  );
}

