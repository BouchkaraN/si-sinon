import { useState } from 'react';
import { Card, CardHeader } from './UI';
import styles from './Kahoot.module.css';

const QUESTIONS = [
  {
    q: 'Quelle est la limite de la structure sélective alternative face au problème de Karim (3 tarifs) ?',
    choices: [
      'Elle ne peut gérer que 2 issues (vrai/faux)',
      'Elle est trop lente à exécuter',
      'Elle ne peut pas lire des variables',
      'Elle n\'a pas de FinSi',
    ],
    correct: 0,
    colors: ['red', 'blue', 'orange', 'green'],
  },
  {
    q: 'Dans une structure imbriquée, où place-t-on le Si suivant ?',
    choices: ['Avant le premier Si', 'Dans le bloc Alors', 'Dans le bloc Sinon', 'Après le FinSi'],
    correct: 2,
    colors: ['red', 'blue', 'orange', 'green'],
  },
  {
    q: 'On imbrique 4 Si. Combien de FinSi faut-il écrire ?',
    choices: ['1', '2', '3', '4'],
    correct: 3,
    colors: ['red', 'blue', 'orange', 'green'],
  },
  {
    q: 'H = 2. Que s\'affiche-t-il ?\n\nSi (H=1) alors Afficher "10 Dhs"\nSinon\n  Si (H=2) alors Afficher "18 Dhs"\n  Sinon Afficher "Durée non prévue"\n  FinSi\nFinSi',
    choices: ['10 Dhs', '18 Dhs', 'Durée non prévue', 'Rien'],
    correct: 1,
    colors: ['red', 'blue', 'orange', 'green'],
  },
  {
    q: 'note = 9. Que s\'affiche-t-il ?\n\nSi (note >= 16) alors Afficher "Très bien"\nSinon\n  Si (note >= 10) alors Afficher "Passable"\n  Sinon Afficher "Insuffisant"\n  FinSi\nFinSi',
    choices: ['Très bien', 'Passable', 'Insuffisant', 'Rien'],
    correct: 2,
    colors: ['red', 'blue', 'orange', 'green'],
  },
  {
    q: 'Quelle règle d\'écriture traduit visuellement l\'imbrication dans un algorithme ?',
    choices: [
      'Mettre des commentaires',
      'L\'indentation (décalage vers la droite)',
      'Utiliser des majuscules',
      'Numéroter les lignes',
    ],
    correct: 1,
    colors: ['red', 'blue', 'orange', 'green'],
  },
  {
    q: 'note = 14. Quelle mention s\'affiche ?\n\nSi (note>=16) : "Très bien"\nSinon Si (note>=14) : "Bien"\nSinon Si (note>=12) : "Assez bien"\nSinon Si (note>=10) : "Passable"\nSinon : "Insuffisant"',
    choices: ['Très bien', 'Bien', 'Assez bien', 'Passable'],
    correct: 1,
    colors: ['red', 'blue', 'orange', 'green'],
  },
];

const ICONS = ['▲', '◆', '●', '★'];

export default function Kahoot() {
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [done, setDone] = useState(false);

  const q = QUESTIONS[qi];
  const answered = chosen !== null;
  const total = QUESTIONS.length;

  const handleAnswer = (idx) => {
    if (answered) return;
    setChosen(idx);
    if (idx === q.correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (qi + 1 >= total) { setDone(true); return; }
    setQi(qi + 1);
    setChosen(null);
  };

  const handleRestart = () => { setQi(0); setScore(0); setChosen(null); setDone(false); };

  const pct = Math.round((score / total) * 100);
  const mention = pct >= 85 ? '🏆 Excellent !' : pct >= 57 ? '👍 Bien !' : '📚 À revoir';

  return (
    <Card>
      <CardHeader badge="🎮" badgeColor="orange" title={`Quiz — ${total} questions`} />

      {/* PROGRESS */}
      <div className={styles.progressWrap}>
        <div className={styles.progressFill} style={{ width: done ? '100%' : `${(qi / total) * 100}%` }} />
      </div>
      <div className={styles.progressLabel}>
        {done ? 'Terminé !' : `Question ${qi + 1} / ${total}`}
      </div>

      {done ? (
        /* ── RÉSULTATS ── */
        <div className={styles.result}>
          <div className={styles.resultEmoji}>🎯</div>
          <div className={styles.resultScore}>{score} / {total}</div>
          <div className={styles.resultMention}>{mention}</div>
          <div className={styles.resultPct}>{pct}% de bonnes réponses</div>

          <div className={styles.resultGrid}>
            {QUESTIONS.map((q, i) => (
              <div key={i} className={styles.resultItem}>
                <span className={styles.resultQ}>Q{i + 1}</span>
                <span className={styles.resultAns}>{q.choices[q.correct]}</span>
              </div>
            ))}
          </div>

          <button className={styles.btnRestart} onClick={handleRestart}>
            🔄 Recommencer
          </button>
        </div>
      ) : (
        /* ── QUESTION ── */
        <div>
          <div className={styles.question}>{q.q}</div>

          <div className={styles.grid}>
            {q.choices.map((c, i) => {
              let cls = `${styles.kbtn} ${styles['kbtn_' + q.colors[i]]}`;
              if (answered) {
                if (i === q.correct) cls += ' ' + styles.kCorrect;
                else if (i === chosen) cls += ' ' + styles.kWrong;
                else cls += ' ' + styles.kDim;
              }
              return (
                <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={answered}>
                  <span className={styles.kIcon}>{ICONS[i]}</span>
                  <span>{c}</span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={chosen === q.correct ? styles.fbOk : styles.fbKo}>
              {chosen === q.correct
                ? '✓ Correct !'
                : `✗ Incorrect. La bonne réponse : ${q.choices[q.correct]}`}
            </div>
          )}

          {answered && (
            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <button className={styles.btnNext} onClick={handleNext}>
                {qi + 1 < total ? 'Question suivante →' : 'Voir les résultats →'}
              </button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
