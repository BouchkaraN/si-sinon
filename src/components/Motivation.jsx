import { Card, CardHeader, SectionLabel, CodeBlock, InfoBox } from './UI';
import styles from './Motivation.module.css';

const kw = (t) => `<span style="color:#cba6f7;font-weight:600">${t}</span>`;
const st = (t) => `<span style="color:#a6e3a1">${t}</span>`;
const nm = (t) => `<span style="color:#fab387">${t}</span>`;
const cm = (t) => `<span style="color:#6c7086;font-style:italic">${t}</span>`;

export default function Motivation() {
  return (
    <>
      <Card>
        <CardHeader badge="🎯" badgeColor="blue" title="Situation-problème — Karim's Cyber, Rabat" />

        <img
          src="/karim-cyber.png"
          alt="Cybercafé de Karim - Rabat"
          className={styles.situImg}
        />

        <InfoBox type="orange" label="Problème à résoudre">
          Karim veut un programme qui lit le nombre d'heures <strong>H</strong> choisi
          par le client et affiche automatiquement le prix :<br /><br />
          <strong>H = 1 → 10 Dhs</strong><br />
          <strong>H = 2 → 18 Dhs</strong><br />
          <strong>H = 3 → 25 Dhs</strong><br />
          <strong>Autre valeur → "Durée non prévue"</strong>
        </InfoBox>

        <SectionLabel>Essayons avec les structures connues</SectionLabel>

        <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 6 }}>
          <strong>Avec la sélective simple</strong> — on peut gérer H = 1 seulement :
        </p>
        <CodeBlock>{
          `${kw('Si')} (H = ${nm('1')}) ${kw('alors')}\n  Afficher ${st('"10 Dhs"')}\n${kw('FinSi')}\n${cm('→ Et pour H=2 et H=3 ? On ne peut rien afficher !')}`
        }</CodeBlock>

        <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 6, marginTop: 8 }}>
          <strong>Avec la sélective alternative</strong> — on peut gérer H = 1 et H ≠ 1 :
        </p>
        <CodeBlock>{
          `${kw('Si')} (H = ${nm('1')}) ${kw('alors')}\n  Afficher ${st('"10 Dhs"')}\n${kw('Sinon')}\n  Afficher ${st('"???"')}  ${cm('← H=2 ou H=3 ou autre : impossible de distinguer !')}\n${kw('FinSi')}`
        }</CodeBlock>

        <InfoBox type="blue" label="Conclusion">
          Ces deux structures ne suffisent pas. Il nous faut une nouvelle technique :
          <strong> imbriquer</strong> les Si…Sinon les uns dans les autres pour traiter
          chaque cas séparément.
        </InfoBox>
      </Card>
    </>
  );
}
