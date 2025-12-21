import { ReactNode } from 'react';
import styles from './PremiumCard.module.scss';

interface PremiumCardProps {
  title: string;
  description: string;
  ctaText?: string; // default "JOIN NOW"
  onCtaClick?: () => void;
  imageSlot?: ReactNode; // optional
}

export default function PremiumCard({
  title,
  description,
  ctaText = 'JOIN NOW',
  onCtaClick,
  imageSlot,
}: PremiumCardProps) {
  return (
    <div className={styles.card}>
      {imageSlot && <div className={styles.imageSlot}>{imageSlot}</div>}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.ctaButton} onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </div>
  );
}

