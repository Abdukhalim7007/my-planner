import MobileShell from './components/MobileShell';
import PremiumCard from './components/ui/PremiumCard';
import ActivityItem from './components/ui/ActivityItem';
import StatCard from './components/ui/StatCard';
import ProgressRing from './components/ui/ProgressRing';
import styles from './page.module.scss';

export default function Home() {
  return (
    <MobileShell title="Home">
      <div className={styles.container}>
        {/* Greeting section */}
        <section className={styles.greeting}>
          <h1 className={styles.greetingTitle}>Good Morning, Eric 👋</h1>
          <p className={styles.greetingDate}>Today, 17 Oct 2022</p>
        </section>

        {/* Premium card */}
        <section className={styles.premiumSection}>
          <PremiumCard
            title="OFFER OF THE DAY"
            description="Upgrade to Premium and get unlimited access to content"
            ctaText="JOIN NOW"
          />
        </section>

        {/* Activity List section */}
        <section className={styles.activitySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Activity List</h2>
            <span className={styles.sectionSubtitle}>April Targets</span>
          </div>
          <div className={styles.activityCard}>
            <ActivityItem text="Morning Exercise" completed={true} />
            <ActivityItem text="Read for 30 minutes" completed={true} />
            <ActivityItem text="Meditation" completed={true} />
            <ActivityItem text="Write in journal" completed={false} />
            <ActivityItem text="Evening walk" completed={false} />
          </div>
          <button className={styles.seeAllButton}>SEE ALL</button>
        </section>

        {/* Evaluation section */}
        <section className={styles.evaluationSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Evaluation</h2>
            <span className={styles.sectionSubtitle}>Apr 2022</span>
          </div>
          <div className={styles.statCards}>
            <StatCard
              title="Completed Activities"
              value={19}
              ring={<ProgressRing percent={68} size={64} strokeWidth={4} />}
            />
            <StatCard
              title="Pending Activities"
              value={7}
              ring={<ProgressRing percent={25} size={64} strokeWidth={4} />}
            />
          </div>
        </section>
      </div>
    </MobileShell>
  );
}
