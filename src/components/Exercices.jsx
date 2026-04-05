import { useState } from 'react';
import { Card, CardHeader, SectionLabel, CodeBlock, InfoBox } from './UI';
import styles from './Exercices.module.css';

const kw = (t) => `<span style="color:#cba6f7;font-weight:600">${t}</span>`;
const st = (t) => `<span style="color:#a6e3a1">${t}</span>`;
const nm = (t) => `<span style="color:#fab387">${t}</span>`;
const cm = (t) => `<span style="color:#6c7086;font-style:italic">${t}</span>`;

const CORRIGE = [
  `${kw('Début')}`,
  `  Lire(note)`,
  `  ${kw('Si')} (note >= ${nm('16')}) ${kw('alors')}`,
  `    Ecrire ${st('("Très bien")')}`,
  `  ${kw('Sinon')}`,
  `    ${kw('Si')} (note >= ${nm('14')}) ${kw('alors')}`,
  `      Ecrire ${st('("Bien")')}`,
  `    ${kw('Sinon')}`,
  `      ${kw('Si')} (note >= ${nm('12')}) ${kw('alors')}`,
  `        Ecrire ${st('("Assez bien")')}`,
  `      ${kw('Sinon')}`,
  `        ${kw('Si')} (note >= ${nm('10')}) ${kw('alors')}`,
  `          Ecrire ${st('("Passable")')}`,
  `        ${kw('Sinon')}`,
  `          Ecrire ${st('("Insuffisant")')}`,
  `        ${kw('FinSi')}  ${cm('← ferme Si (note>=10)')}`,
  `      ${kw('FinSi')}  ${cm('← ferme Si (note>=12)')}`,
  `    ${kw('FinSi')}  ${cm('← ferme Si (note>=14)')}`,
  `  ${kw('FinSi')}  ${cm('← ferme Si (note>=16)')}`,
  `${kw('Fin')}`,
  `${cm('4 Si → 4 FinSi')}`,
].join('\n');

const MENTIONS = [
  { range: 'note ≥ 16',           mention: 'Très bien',  color: '#7c3aed', bg: '#ede9fe' },
  { range: '14 ≤ note < 16',      mention: 'Bien',       color: '#1e7c38', bg: '#eaf3de' },
  { range: '12 ≤ note < 14',      mention: 'Assez bien', color: '#1a5fa8', bg: '#e6f1fb' },
  { range: '10 ≤ note < 12',      mention: 'Passable',   color: '#c26a10', bg: '#faeeda' },
  { range: 'note < 10',           mention: 'Insuffisant',color: '#c53030', bg: '#fcebeb' },
];

const QCM = [
  {
    id: 2,
    title: 'Exercice 2 — Que s\'affiche-t-il si note = 13 ?',
    code: [
      `${kw('Si')} (note >= ${nm('16')}) ${kw('alors')} Ecrire ${st('("Très bien")')}`,
      `${kw('Sinon')}`,
      `  ${kw('Si')} (note >= ${nm('14')}) ${kw('alors')} Ecrire ${st('("Bien")')}`,
      `  ${kw('Sinon')}`,
      `    ${kw('Si')} (note >= ${nm('12')}) ${kw('alors')} Ecrire ${st('("Assez bien")')}`,
      `    ${kw('Sinon')} Ecrire ${st('("Passable")')}`,
      `    ${kw('FinSi')}`,
      `  ${kw('FinSi')}`,
      `${kw('FinSi')}`,
    ].join('\n'),
    choices: ['Très bien', 'Bien', 'Assez bien', 'Passable'],
    correct: 'Assez bien',
    explication: 'note=13 : 13≥16 ? Non → Sinon. 13≥14 ? Non → Sinon. 13≥12 ? Oui → "Assez bien".',
  },
  {
    id: 3,
    title: 'Exercice 3 — Cybercafé Karim : que s\'affiche-t-il si H = 5 ?',
    code: null,
    choices: ['10 Dhs', '25 Dhs', 'Durée non prévue', 'Rien du tout'],
    correct: 'Durée non prévue',
    explication: 'H=5 ne vaut ni 1, ni 2, ni 3 → on exécute le dernier Sinon → "Durée non prévue".',
  },
  {
    id: 4,
    title: 'Exercice 4 — On imbrique 5 Si. Combien de FinSi faut-il écrire ?',
    code: null,
    choices: ['1 FinSi', '3 FinSi', '4 FinSi', '5 FinSi'],
    correct: '5 FinSi',
    explication: 'La règle : N Si imbriqués = N FinSi obligatoires. Donc 5 Si = 5 FinSi.',
  },
];

function QcmItem({ q }) {
  const [chosen, setChosen] = useState(null);
  const answered = chosen !== null;

  return (
    <div className={styles.exo}>
      <div className={styles.exoTitle}>{q.title}</div>
      {q.code && <CodeBlock>{q.code}</CodeBlock>}
      <div className={styles.choices}>
        {q.choices.map((c) => {
          let cls = styles.choiceBtn;
          if (answered) {
            if (c === q.correct) cls += ' ' + styles.correct;
            else if (c === chosen) cls += ' ' + styles.wrong;
          }
          return (
            <button
              key={c}
              className={cls}
              disabled={answered}
              onClick={() => setChosen(c)}
            >
              {c}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={chosen === q.correct ? styles.fbOk : styles.fbKo}>
          {chosen === q.correct ? '✓ ' : '✗ '}{q.explication}
        </div>
      )}
    </div>
  );
}

export default function Exercices() {
  const [showCorr, setShowCorr] = useState(false);

  return (
    <>
      <Card>
        <CardHeader badge="✏️" badgeColor="red" title="Exercice 1 — À rédiger sur cahier" />

        <InfoBox type="orange" label="Énoncé">
          Un élève passe le Bac marocain. Écrire un algorithme qui <strong>lit sa note</strong> (sur 20)
          et <strong>affiche sa mention</strong> selon le tableau suivant :
        </InfoBox>

        {/* TABLEAU MENTIONS */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Note (sur 20)</th>
                <th>Mention</th>
              </tr>
            </thead>
            <tbody>
              {MENTIONS.map((m) => (
                <tr key={m.mention}>
                  <td>{m.range}</td>
                  <td>
                    <span className={styles.mentionBadge} style={{ background: m.bg, color: m.color }}>
                      {m.mention}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INDICES */}
        <SectionLabel>Indices — suivez ces étapes</SectionLabel>
        <div className={styles.hintBox}>
          <ul className={styles.hintList}>
            {[
              'Déclarez la variable <strong>note</strong> de type Entier',
              'Utilisez <strong>Lire(note)</strong> pour saisir la note',
              'Testez d\'abord la condition la plus haute : <strong>Si (note &gt;= 16)</strong>',
              'Placez chaque Si suivant dans le <strong>Sinon</strong> du Si précédent',
              'Le dernier <strong>Sinon</strong> (sans condition) affiche "Insuffisant"',
              'N\'oubliez pas : <strong>4 Si imbriqués = 4 FinSi</strong> à écrire',
              'Terminez par <strong>Fin</strong>',
            ].map((h, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: `<span style="font-weight:700;color:var(--green-text)">${i + 1}.</span> ${h}` }} />
            ))}
          </ul>
        </div>

        {/* CORRIGÉ */}
        <SectionLabel>Corrigé</SectionLabel>
        <button
          className={styles.btnToggle}
          onClick={() => setShowCorr(!showCorr)}
        >
          {showCorr ? '🙈 Masquer le corrigé' : '👁 Afficher le corrigé'}
        </button>
        {showCorr && <CodeBlock>{CORRIGE}</CodeBlock>}
      </Card>

      {/* QCM INTERACTIFS */}
      <Card>
        <CardHeader badge="🧠" badgeColor="blue" title="Exercices interactifs — traçage" />
        {QCM.map((q) => <QcmItem key={q.id} q={q} />)}
      </Card>
    </>
  );
}
