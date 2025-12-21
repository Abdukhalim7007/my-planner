'use client';

import MobileShell from '../components/MobileShell';
import StatCard from '../components/ui/StatCard';
import ProgressRing from '../components/ui/ProgressRing';
import { mockStats } from '../mock/stats';
import styles from './page.module.scss';

export default function StatsPage() {
  return (
    <MobileShell title="Stats">
      <div className={styles.container}>
        {/* Summary Cards Section */}
        <section className={styles.summarySection}>
          <div className={styles.statCards}>
            <StatCard
              title="Completed Activities"
              value={mockStats.completedCount}
              ring={
                <ProgressRing
                  percent={mockStats.completedPercent}
                  size={64}
                  strokeWidth={4}
                />
              }
            />
            <StatCard
              title="Pending Activities"
              value={mockStats.pendingCount}
              ring={
                <ProgressRing
                  percent={mockStats.pendingPercent}
                  size={64}
                  strokeWidth={4}
                />
              }
            />
          </div>
        </section>

        {/* Period Info */}
        <section className={styles.periodSection}>
          <div className={styles.periodCard}>
            <div className={styles.periodLabel}>Period</div>
            <div className={styles.periodValue}>{mockStats.period}</div>
          </div>
        </section>

        {/* Weekly Summary */}
        <section className={styles.weeklySection}>
          <h2 className={styles.sectionTitle}>Weekly Summary</h2>
          <div className={styles.weeklyList}>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Mon</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '75%' }}
                />
              </div>
              <div className={styles.weeklyValue}>75%</div>
            </div>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Tue</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '60%' }}
                />
              </div>
              <div className={styles.weeklyValue}>60%</div>
            </div>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Wed</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '90%' }}
                />
              </div>
              <div className={styles.weeklyValue}>90%</div>
            </div>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Thu</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '45%' }}
                />
              </div>
              <div className={styles.weeklyValue}>45%</div>
            </div>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Fri</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '85%' }}
                />
              </div>
              <div className={styles.weeklyValue}>85%</div>
            </div>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Sat</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '70%' }}
                />
              </div>
              <div className={styles.weeklyValue}>70%</div>
            </div>
            <div className={styles.weeklyItem}>
              <div className={styles.weeklyDay}>Sun</div>
              <div className={styles.weeklyBar}>
                <div
                  className={styles.weeklyBarFill}
                  style={{ width: '55%' }}
                />
              </div>
              <div className={styles.weeklyValue}>55%</div>
            </div>
          </div>
        </section>
      </div>
    </MobileShell>
  );
}

