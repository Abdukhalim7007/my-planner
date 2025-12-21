'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MobileShell from '../components/MobileShell';
import DateChips from '../components/ui/DateChips';
import { mockScheduleEvents } from '../mock/schedule';
import styles from './page.module.scss';

export default function SchedulePage() {
  const router = useRouter();
  const [activeDateIndex, setActiveDateIndex] = useState(4); // Default to Fri 21 (matching Figma)

  // Date chips data (Mon-Sun) - matching Figma
  const dateChips = [
    { day: 'Mon', date: 17 },
    { day: 'Tue', date: 18 },
    { day: 'Wed', date: 19 },
    { day: 'Thu', date: 20 },
    { day: 'Fri', date: 21 },
    { day: 'Sat', date: 22 },
    { day: 'Sun', date: 23 },
  ];

  // Time labels for timeline
  const timeLabels = [
    '08am',
    '09am',
    '10am',
    '11am',
    '12am',
    '01pm',
    '02pm',
    '03pm',
    '04pm',
    '05pm',
    '06pm',
  ];

  const handleBack = () => {
    router.back();
  };

  return (
    <MobileShell
      title="Schedule"
      leftAction={
        <button
          className={styles.backButton}
          onClick={handleBack}
          aria-label="Back"
        >
          ←
        </button>
      }
      rightAction={
        <button
          className={styles.menuButton}
          aria-label="Menu"
        >
          ⋮
        </button>
      }
      showHamburger={false}
    >
      <div className={styles.container}>
        {/* Date Chips */}
        <section className={styles.dateChipsSection}>
          <DateChips
            days={dateChips}
            activeIndex={activeDateIndex}
            onChange={setActiveDateIndex}
          />
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection}>
          <div className={styles.timelineContainer}>
            {/* Time Labels Column */}
            <div className={styles.timeColumn}>
              {timeLabels.map((time, index) => (
                <div key={index} className={styles.timeLabel}>
                  {time}
                </div>
              ))}
            </div>

            {/* Cards Column with Dashed Lines */}
            <div className={styles.cardsColumn}>
              {/* 12 Dashed Lines */}
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className={styles.dashedLine}
                  style={{ top: `${index * 60}px` }}
                />
              ))}

              {/* Event Cards */}
              {mockScheduleEvents.map((event) => (
                <div
                  key={event.id}
                  className={`${styles.eventCard} ${styles[event.colorVariant]}`}
                  style={{
                    left: `${event.x}px`,
                    top: `${event.y}px`,
                    width: `${event.width}px`,
                    height: `${event.height}px`,
                  }}
                >
                  <div className={styles.eventContent}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventTime}>{event.timeLabel}</p>
                  </div>
                </div>
              ))}

              {/* "On Progress" Chip */}
              <div className={styles.onProgressChip}>
                <span className={styles.onProgressText}>On Progress</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MobileShell>
  );
}

