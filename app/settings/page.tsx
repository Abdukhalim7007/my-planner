'use client';

import MobileShell from '../components/MobileShell';
import { mockUser } from '../mock/user';
import { mockSettingsItems } from '../mock/settings';
import styles from './page.module.scss';

export default function SettingsPage() {
  return (
    <MobileShell title="Settings">
      <div className={styles.container}>
        {/* Profile Card */}
        <section className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileAvatar}>
              {mockUser.displayName.charAt(0)}
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.profileName}>{mockUser.displayName}</div>
              <div className={styles.profileEmail}>user@example.com</div>
            </div>
          </div>
        </section>

        {/* Settings List */}
        <section className={styles.settingsSection}>
          <div className={styles.settingsCard}>
            {mockSettingsItems.map((item, index) => (
              <div key={item.id}>
                <button
                  className={`${styles.settingItem} ${
                    item.isDanger ? styles.settingItemDanger : ''
                  }`}
                >
                  <div className={styles.settingLeft}>
                    <span className={styles.settingIcon}>{item.icon}</span>
                    <span className={styles.settingLabel}>{item.label}</span>
                  </div>
                  {item.hasChevron && (
                    <span className={styles.settingChevron}>›</span>
                  )}
                </button>
                {index < mockSettingsItems.length - 1 && (
                  <div className={styles.settingDivider} />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </MobileShell>
  );
}

