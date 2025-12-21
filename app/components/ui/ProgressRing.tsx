import styles from './ProgressRing.module.scss';

interface ProgressRingProps {
  percent: number; // 0-100
  size?: number; // default 64
  strokeWidth?: number; // default 4
  centerText?: string; // optional override, default shows `${percent}%`
  label?: string; // optional under ring
}

export default function ProgressRing({
  percent,
  size = 64,
  strokeWidth = 4,
  centerText,
  label,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const displayText = centerText ?? `${percent}%`;

  return (
    <div className={styles.container} style={{ width: size, height: size }}>
      <svg
        className={styles.svg}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background ring */}
        <circle
          className={styles.bgRing}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress ring */}
        <circle
          className={styles.progressRing}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className={styles.centerText}>{displayText}</div>
      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
}

