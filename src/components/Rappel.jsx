import { Card, CardHeader, SectionLabel, CodeBlock, InfoBox, Grid2, GridItem } from './UI';

const kw = (t) => `<span style="color:#cba6f7;font-weight:600">${t}</span>`;
const st = (t) => `<span style="color:#a6e3a1">${t}</span>`;
const nm = (t) => `<span style="color:#fab387">${t}</span>`;
const cm = (t) => `<span style="color:#6c7086;font-style:italic">${t}</span>`;

export default function Rappel() {
  return (
    <>
      <Card>
        <CardHeader badge="🔁" badgeColor="orange" title="Rappel — Structures sélectives déjà connues" />

        <Grid2>
          <GridItem label="1. Sélective simple">
            <CodeBlock>{
              `${kw('Si')} (condition) ${kw('alors')}\n  instructions\n${kw('FinSi')}`
            }</CodeBlock>
            <p style={{ fontSize: 12, color: 'var(--text2)', marginTop: 8, lineHeight: 1.65 }}>
              Le bloc s'exécute <strong>seulement si</strong> la condition est vraie.
              Si elle est fausse : <strong>rien ne se passe</strong>.
            </p>
          </GridItem>

          <GridItem label="2. Sélective alternative">
            <CodeBlock>{
              `${kw('Si')} (condition) ${kw('alors')}\n  instr_1\n${kw('Sinon')}\n  instr_2\n${kw('FinSi')}`
            }</CodeBlock>
            <p style={{ fontSize: 12, color: 'var(--text2)', marginTop: 8, lineHeight: 1.65 }}>
              instr_1 si vraie, instr_2 si fausse.
              <strong> L'un des deux</strong> s'exécute toujours.
            </p>
          </GridItem>
        </Grid2>

        <SectionLabel>Exemples — contexte marocain</SectionLabel>
        <Grid2>
          <GridItem label="Exemple — simple">
            <CodeBlock>{
              `${kw('Si')} (carte = ${st('"oui"')}) ${kw('alors')}\n  Ecrire ${st('("Réduction 10%")')}\n${kw('FinSi')}`
            }</CodeBlock>
          </GridItem>
          <GridItem label="Exemple — alternative">
            <CodeBlock>{
              `${kw('Si')} (moy >= ${nm('10')}) ${kw('alors')}\n  Ecrire ${st('("Admis")')}\n${kw('Sinon')}\n  Ecrire ${st('("Ajourné")')}\n${kw('FinSi')}`
            }</CodeBlock>
          </GridItem>
        </Grid2>

        <div style={{ height: 1, background: 'var(--border)', margin: '1rem 0' }} />

        <SectionLabel>Limite de ces deux structures</SectionLabel>
        <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.75, marginBottom: 8 }}>
          Ces deux structures traitent <strong>au maximum deux issues</strong> (vraie ou fausse).
          Elles ne suffisent plus dès qu'on a <strong>3 cas ou plus</strong> à gérer pour une même variable.
        </p>

        <InfoBox type="orange" label="Question de départ">
          Comment écrire un algorithme qui affiche un résultat différent pour
          chacune de 3 valeurs ou plus d'une même variable ?
          C'est le problème que nous allons résoudre aujourd'hui.
        </InfoBox>
      </Card>
    </>
  );
}
