import { Card, CardHeader, SectionLabel, CodeBlock, Stepper } from './UI';
import styles from './Motivation.module.css';

const kw = (t) => `<span style="color:#cba6f7;font-weight:600">${t}</span>`;
const st = (t) => `<span style="color:#a6e3a1">${t}</span>`;
const nm = (t) => `<span style="color:#fab387">${t}</span>`;
const cm = (t) => `<span style="color:#6c7086;font-style:italic">${t}</span>`;

export default function Construction() {
  return (
    <Card>
      <CardHeader badge="🔨" badgeColor="green" title="Construction progressive — Karim's Cyber" />

      <img src="/karim-cyber.png" alt="Cybercafé de Karim" className={styles.situImg} style={{ marginBottom: '1rem' }} />

      <SectionLabel>Étape 1 — H = 1 uniquement (sélective simple)</SectionLabel>
      <CodeBlock>{[
        `${kw('Si')} (H = ${nm('1')}) ${kw('alors')}`,
        `  Ecrire ${st('("10 Dhs")')}`,
        `${kw('FinSi')}`,
        `${cm('1 Si → 1 FinSi')}`,
      ].join('\n')}</CodeBlock>

      <SectionLabel>Étape 2 — H = 1 ou H = 2 (on imbrique dans le Sinon)</SectionLabel>
      <CodeBlock>{[
        `${kw('Si')} (H = ${nm('1')}) ${kw('alors')}`,
        `  Ecrire ${st('("10 Dhs")')}`,
        `${kw('Sinon')}`,
        `  ${kw('Si')} (H = ${nm('2')}) ${kw('alors')}`,
        `    Ecrire ${st('("18 Dhs")')}`,
        `  ${kw('FinSi')}  ${cm('← ferme Si (H=2)')}`,
        `${kw('FinSi')}  ${cm('← ferme Si (H=1)')}`,
        `${cm('2 Si → 2 FinSi')}`,
      ].join('\n')}</CodeBlock>

      <SectionLabel>Étape 3 — Les 3 cas + cas par défaut (algorithme complet)</SectionLabel>
      <CodeBlock>{[
        `${kw('Début')}`,
        `  Lire(H)`,
        `  ${kw('Si')} (H = ${nm('1')}) ${kw('alors')}`,
        `    Ecrire ${st('("10 Dhs")')}`,
        `  ${kw('Sinon')}`,
        `    ${kw('Si')} (H = ${nm('2')}) ${kw('alors')}`,
        `      Ecrire ${st('("18 Dhs")')}`,
        `    ${kw('Sinon')}`,
        `      ${kw('Si')} (H = ${nm('3')}) ${kw('alors')}`,
        `        Ecrire ${st('("25 Dhs")')}`,
        `      ${kw('Sinon')}`,
        `        Ecrire ${st('("Durée non prévue")')}`,
        `      ${kw('FinSi')}  ${cm('← ferme Si (H=3)')}`,
        `    ${kw('FinSi')}  ${cm('← ferme Si (H=2)')}`,
        `  ${kw('FinSi')}  ${cm('← ferme Si (H=1)')}`,
        `${kw('Fin')}`,
        `${cm('3 Si → 3 FinSi')}`,
      ].join('\n')}</CodeBlock>

      <SectionLabel>Traçage — que se passe-t-il pour H = 2 ?</SectionLabel>
      <Stepper steps={[
        {
          title: 'Si (H = 1) ? &nbsp;→&nbsp; <span style="color:var(--red)">FAUX</span>',
          desc: 'H vaut 2, pas 1. On entre dans le premier Sinon.',
        },
        {
          title: 'Si (H = 2) ? &nbsp;→&nbsp; <span style="color:var(--green)">VRAI</span>',
          desc: 'H vaut bien 2. On affiche "18 Dhs". Le Si (H=3) est ignoré.',
        },
        {
          title: 'Résultat affiché : "18 Dhs"',
          desc: 'On sort de toute la structure et on continue l\'algorithme.',
        },
      ]} />
    </Card>
  );
}
