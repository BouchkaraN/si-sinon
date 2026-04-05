import { useState } from 'react';
import Rappel from './components/Rappel';
import Motivation from './components/Motivation';
import Objectifs from './components/Objectifs';
import Definition from './components/Definition';
import Syntaxe from './components/Syntaxe';
import Construction from './components/Construction';
import Exercices from './components/Exercices';
import Kahoot from './components/Kahoot';
import styles from './App.module.css';

const SECTIONS = [
  { id: 0, label: 'Rappel',        emoji: '🔁' },
  { id: 1, label: 'Motivation',    emoji: '🎯' },
  { id: 2, label: 'Objectifs',     emoji: '📋' },
  { id: 3, label: 'Définition',    emoji: '📖' },
  { id: 4, label: 'Syntaxe',       emoji: '⌨️'  },
  { id: 5, label: 'Construction',  emoji: '🔨' },
  { id: 6, label: 'Exercices',     emoji: '✏️'  },
  { id: 7, label: 'Kahoot',        emoji: '🎮' },
];

const COMPONENTS = [Rappel, Motivation, Objectifs, Definition, Syntaxe, Construction, Exercices, Kahoot];

export default function App() {
  const [current, setCurrent] = useState(0);

  const goTo = (n) => { setCurrent(n); window.scrollTo(0, 0); };
  const prev = () => goTo(Math.max(0, current - 1));
  const next = () => goTo(Math.min(SECTIONS.length - 1, current + 1));

  const Section = COMPONENTS[current];

  return (
    <div className={styles.app}>
      {/* ── HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerTitle}>
            <span className={styles.headerIcon}>💻</span>
            <div>
              <div className={styles.headerMain}>Structure à choix multiples</div>
              <div className={styles.headerSub}>Si…Sinon imbriqués — Algorithmique Lycée</div>
            </div>
          </div>
          <div className={styles.headerProgress}>
            {current + 1} / {SECTIONS.length}
          </div>
        </div>

        {/* ── PROGRESS BAR ── */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((current + 1) / SECTIONS.length) * 100}%` }}
          />
        </div>
      </header>

      {/* ── NAV TABS ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={[
                styles.navBtn,
                current === s.id ? styles.navActive : '',
                current > s.id  ? styles.navDone  : '',
              ].join(' ')}
              onClick={() => goTo(s.id)}
            >
              <span className={styles.navEmoji}>{s.emoji}</span>
              <span className={styles.navLabel}>{s.label}</span>
              {current > s.id && <span className={styles.navCheck}>✓</span>}
            </button>
          ))}
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <main className={styles.main}>
        <Section />

        {/* ── BOTTOM NAV ── */}
        <div className={styles.bottomNav}>
          <button
            className={styles.btnNav}
            onClick={prev}
            disabled={current === 0}
          >
            ← Précédent
          </button>
          <span className={styles.stepLabel}>
            Étape {current + 1} / {SECTIONS.length} — {SECTIONS[current].label}
          </span>
          <button
            className={[styles.btnNav, styles.btnNavPrimary].join(' ')}
            onClick={next}
            disabled={current === SECTIONS.length - 1}
          >
            Suivant →
          </button>
        </div>
      </main>
    </div>
  );
}
