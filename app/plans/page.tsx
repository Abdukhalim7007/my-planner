'use client';

import MobileShell from '../components/MobileShell';
import ProgressRing from '../components/ui/ProgressRing';
import ActivityItem from '../components/ui/ActivityItem';
import { mockUser } from '../mock/user';
import { mockPlans, getCategoryStats, getOngoingPlans } from '../mock/plans';
import styles from './page.module.scss';

export default function PlansPage() {
  const categoryStats = getCategoryStats();
  const ongoingPlans = getOngoingPlans().slice(0, 2); // Get first 2 ongoing plans

  const handleViewPlan = () => {
    console.log('View Plan clicked');
  };

  const handleGoToPlan = (category: string) => {
    console.log(`Go to ${category} plan`);
  };

  const handleSeeAll = (section: string) => {
    console.log(`See all ${section}`);
  };

  // Avatar placeholder
  const avatarInitials = mockUser.displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <MobileShell
      title="Plans"
      rightAction={
        <div className={styles.avatar}>
          {mockUser.avatarUrl ? (
            <img src={mockUser.avatarUrl} alt={mockUser.displayName} />
          ) : (
            <span className={styles.avatarInitials}>{avatarInitials}</span>
          )}
        </div>
      }
    >
      <div className={styles.container}>
        {/* Welcome block */}
        <section className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>
            Welcome, {mockUser.displayName} 👋
          </h1>
        </section>

        {/* Progress Card */}
        <section className={styles.progressCard}>
          <div className={styles.progressCardContent}>
            <div className={styles.progressRingWrapper}>
              <ProgressRing percent={95} size={99} strokeWidth={6} />
            </div>
            <div className={styles.progressCardText}>
              <h3 className={styles.progressCardTitle}>CONGRATULATIONS</h3>
              <p className={styles.progressCardDescription}>
                Your plan is almost complete today
              </p>
              <button
                className={styles.progressCardButton}
                onClick={handleViewPlan}
              >
                VIEW PLAN
              </button>
            </div>
          </div>
        </section>

        {/* Categories section */}
        <section className={styles.categoriesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Categories</h2>
            <button
              className={styles.seeAllLink}
              onClick={() => handleSeeAll('categories')}
            >
              See All
            </button>
          </div>
          <div className={styles.categoriesList}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryInfo}>
                <h3 className={styles.categoryName}>
                  {categoryStats.work.name}
                </h3>
                <p className={styles.categoryCount}>
                  {categoryStats.work.remainingCount} Plans Remaining
                </p>
              </div>
              <button
                className={styles.categoryButton}
                onClick={() => handleGoToPlan('Work')}
              >
                GO TO PLAN
              </button>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.categoryInfo}>
                <h3 className={styles.categoryName}>
                  {categoryStats.personal.name}
                </h3>
                <p className={styles.categoryCount}>
                  {categoryStats.personal.remainingCount} Plans Remaining
                </p>
              </div>
              <button
                className={styles.categoryButton}
                onClick={() => handleGoToPlan('Personal')}
              >
                GO TO PLAN
              </button>
            </div>
          </div>
        </section>

        {/* Ongoing Plan section */}
        <section className={styles.ongoingSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ongoing Plan</h2>
            <button
              className={styles.seeAllLink}
              onClick={() => handleSeeAll('ongoing')}
            >
              See All
            </button>
          </div>
          <div className={styles.ongoingPlansList}>
            {ongoingPlans.map((plan) => (
              <div key={plan.id} className={styles.ongoingPlanCard}>
                <div className={styles.ongoingPlanHeader}>
                  <h3 className={styles.ongoingPlanTitle}>{plan.title}</h3>
                  <span className={styles.ongoingPlanTime}>
                    {plan.progressPercent}% Complete
                  </span>
                </div>
                <div className={styles.ongoingPlanItems}>
                  <ActivityItem
                    text={`${plan.totalCount - plan.remainingCount} of ${plan.totalCount} tasks completed`}
                    completed={false}
                  />
                  <ActivityItem
                    text={`${plan.remainingCount} tasks remaining`}
                    completed={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MobileShell>
  );
}

