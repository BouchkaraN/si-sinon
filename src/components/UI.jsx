import styles from './UI.module.css';

export function Card({ children, className = '' }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export function CardHeader({ badge, badgeColor = 'blue', title, subtitle }) {
  return (
    <div className={styles.cardHeader}>
      <span className={`${styles.badge} ${styles['badge_' + badgeColor]}`}>{badge}</span>
      <div>
        <div className={styles.cardTitle}>{title}</div>
        {subtitle && <div className={styles.cardSub}>{subtitle}</div>}
      </div>
    </div>
  );
}

export function SectionLabel({ children }) {
  return <div className={styles.sectionLabel}>{children}</div>;
}

export function CodeBlock({ children }) {
  return (
    <pre className={styles.codeBlock}>
      <code dangerouslySetInnerHTML={{ __html: children }} />
    </pre>
  );
}

export function InfoBox({ type = 'blue', label, children }) {
  return (
    <div className={`${styles.infoBox} ${styles['box_' + type]}`}>
      {label && <div className={`${styles.boxLabel} ${styles['label_' + type]}`}>{label}</div>}
      <div className={styles.boxContent}>{children}</div>
    </div>
  );
}

export function Grid2({ children }) {
  return <div className={styles.grid2}>{children}</div>;
}

export function GridItem({ label, children }) {
  return (
    <div className={styles.gridItem}>
      {label && <div className={styles.gridLabel}>{label}</div>}
      {children}
    </div>
  );
}

export function ObjList({ items }) {
  return (
    <ul className={styles.objList}>
      {items.map((item, i) => (
        <li key={i} className={styles.objItem}>
          <span className={`${styles.objIcon} ${styles['icon_' + (item.icon || 'check')]}`}>
            {item.icon === 'cross' ? '✗' : item.icon === 'arrow' ? '→' : '✓'}
          </span>
          <span dangerouslySetInnerHTML={{ __html: item.text }} />
        </li>
      ))}
    </ul>
  );
}

export function Stepper({ steps }) {
  return (
    <div className={styles.stepper}>
      {steps.map((s, i) => (
        <div key={i} className={styles.stepItem}>
          <div className={styles.stepNum}>{i + 1}</div>
          <div className={styles.stepBody}>
            <div className={styles.stepTitle} dangerouslySetInnerHTML={{ __html: s.title }} />
            <div className={styles.stepDesc}>{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Tag({ children, color = 'green' }) {
  return <span className={`${styles.tag} ${styles['tag_' + color]}`}>{children}</span>;
}
