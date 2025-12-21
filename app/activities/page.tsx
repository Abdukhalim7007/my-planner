'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MobileShell from '../components/MobileShell';
import DateChips from '../components/ui/DateChips';
import { mockTimelineEvents } from '../mock/activities';
import styles from './page.module.scss';

export default function ActivitiesPage() {
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

  const handleBack = () => {
    router.back();
  };

  return (
    <MobileShell
      title="Activities"
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
          <div className={styles.timelineList}>
            {mockTimelineEvents.map((event, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timeLabel}>{event.time}</div>
                {event.isCard ? (
                  <div className={styles.eventCard}>
                    <div className={styles.eventHeader}>
                      <div className={styles.eventIcon}>
                        {event.icon || (event.status === "done" ? "✓" : "○")}
                      </div>
                      <div className={styles.eventContent}>
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        {event.range && (
                          <p className={styles.eventRange}>{event.range}</p>
                        )}
                      </div>
                    </div>
                    {event.items.length > 0 && (
                      <div className={styles.eventItems}>
                        {event.items.map((item, itemIndex) => (
                          <div key={itemIndex} className={styles.eventItem}>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.simpleEvent}>
                    <div className={styles.simpleEventIcon}>
                      {event.status === "done" ? (
                        <span className={styles.checkIcon}>✓</span>
                      ) : (
                        <span className={styles.circleIcon}></span>
                      )}
                    </div>
                    <div className={styles.simpleEventText}>
                      {event.items[0]}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </MobileShell>
  );
}

