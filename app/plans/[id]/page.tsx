'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import MobileShell from '../../components/MobileShell';
import DateChips from '../../components/ui/DateChips';
import ActivityItem from '../../components/ui/ActivityItem';
import { getPlanById, mockPlans } from '../../mock/plans';
import { getActivitiesByPlanId } from '../../mock/activities';
import styles from './page.module.scss';

export default function PlanDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const planId = params?.id as string;
  
  // Get plan from mock data, fallback to first plan
  const plan = planId ? getPlanById(planId) : mockPlans[0];
  const planActivities = plan ? getActivitiesByPlanId(plan.id) : [];

  // Date chips data (Mon-Sun)
  const [activeDateIndex, setActiveDateIndex] = useState(3); // Default to mid-week (Wed)

  const dateChips = [
    { day: 'Mon', date: 15 },
    { day: 'Tue', date: 16 },
    { day: 'Wed', date: 17 },
    { day: 'Thu', date: 18 },
    { day: 'Fri', date: 19 },
    { day: 'Sat', date: 20 },
    { day: 'Sun', date: 21 },
  ];

  // Workout reports mock data
  const workoutReports = [
    { label: 'Calories Burn', value: '320' },
    { label: 'Fat', value: '12g' },
    { label: 'Carbs', value: '45g' },
    { label: 'Protein', value: '28g' },
  ];

  const handleBack = () => {
    router.back();
  };

  if (!plan) {
    return (
      <MobileShell title="Plan Details">
        <div className={styles.container}>
          <p>Plan not found</p>
        </div>
      </MobileShell>
    );
  }

  return (
    <MobileShell
      title="Plan Details"
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

        {/* Workout Reports */}
        <section className={styles.workoutReportsSection}>
          <h2 className={styles.sectionTitle}>Workout Reports</h2>
          <div className={styles.reportsGrid}>
            {workoutReports.map((report, index) => (
              <div key={index} className={styles.reportCard}>
                <div className={styles.reportLabel}>{report.label}</div>
                <div className={styles.reportValue}>{report.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Section */}
        <section className={styles.activitySection}>
          <h2 className={styles.sectionTitle}>Activity</h2>
          <div className={styles.activityList}>
            {planActivities.length > 0 ? (
              planActivities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  text={activity.text}
                  completed={activity.completed}
                />
              ))
            ) : (
              <p className={styles.noActivities}>No activities found</p>
            )}
          </div>
        </section>
      </div>
    </MobileShell>
  );
}

