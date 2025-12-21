import { ReactNode } from 'react';
import styles from './StatCard.module.scss';

interface StatCardProps {
  title: string;
  value: string | number;
  ring?: ReactNode; // optional ProgressRing
}

export default function StatCard({ title, value, ring }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.title}>{title}</div>
          <div className={styles.value}>{value}</div>
        </div>
        {ring && <div className={styles.ringSection}>{ring}</div>}
      </div>
    </div>
  );
}

