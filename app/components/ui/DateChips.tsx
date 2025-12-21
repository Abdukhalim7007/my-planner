'use client';

import styles from './DateChips.module.scss';

interface DateChip {
  day: string;
  date: number;
}

interface DateChipsProps {
  days: DateChip[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function DateChips({
  days,
  activeIndex,
  onChange,
}: DateChipsProps) {
  return (
    <div className={styles.container}>
      {days.map((chip, index) => (
        <button
          key={index}
          className={`${styles.chip} ${
            index === activeIndex ? styles.chipActive : ''
          }`}
          onClick={() => onChange(index)}
          aria-label={`Select ${chip.day} ${chip.date}`}
        >
          <span className={styles.day}>{chip.day}</span>
          <span className={styles.date}>{chip.date}</span>
        </button>
      ))}
    </div>
  );
}

