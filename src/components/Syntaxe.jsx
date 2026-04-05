import { Card, CardHeader, SectionLabel, CodeBlock, ObjList } from './UI';

const kw = (t) => `<span style="color:#cba6f7;font-weight:600">${t}</span>`;
const cm = (t) => `<span style="color:#6c7086;font-style:italic">${t}</span>`;

export default function Syntaxe() {
  return (
    <Card>
      <CardHeader badge="⌨️" badgeColor="blue" title="Syntaxe — Structure générale" />

      <CodeBlock>{[
        `${kw('Si')} (condition_1) ${kw('alors')}`,
        `  instructions_1`,
        `${kw('Sinon')}`,
        `  ${kw('Si')} (condition_2) ${kw('alors')}`,
        `    instructions_2`,
        `  ${kw('Sinon')}`,
        `    ${kw('Si')} (condition_3) ${kw('alors')}`,
        `      instructions_3`,
        `    ${kw('Sinon')}`,
        `      instructions_par_défaut`,
        `    ${kw('FinSi')}   ${cm('← ferme Si (condition_3)')}`,
        `  ${kw('FinSi')}   ${cm('← ferme Si (condition_2)')}`,
        `${kw('FinSi')}   ${cm('← ferme Si (condition_1)')}`,
      ].join('\n')}</CodeBlock>

      <ObjList items={[
        { icon: 'arrow', text: 'Chaque <strong>Si</strong> est placé dans le <strong>Sinon</strong> du Si précédent' },
        { icon: 'arrow', text: 'Les <strong>FinSi</strong> se ferment de l\'<strong>intérieur vers l\'extérieur</strong>' },
        { icon: 'arrow', text: 'Le dernier <strong>Sinon sans condition</strong> = cas par défaut (optionnel)' },
        { icon: 'arrow', text: '<strong>3 Si → 3 FinSi</strong> &nbsp;|&nbsp; <strong>4 Si → 4 FinSi</strong> &nbsp;|&nbsp; <strong>N Si → N FinSi</strong>' },
      ]} />

      <SectionLabel>Schéma des niveaux d'imbrication</SectionLabel>
      <CodeBlock>{[
        `${cm('Niveau 1 ─────────────────────────────────────')}`,
        `${kw('Si')} (condition_1) ${kw('alors')}`,
        `  instructions_1`,
        `${kw('Sinon')}`,
        `  ${cm('Niveau 2 ────────────────────────────────')}`,
        `  ${kw('Si')} (condition_2) ${kw('alors')}`,
        `    instructions_2`,
        `  ${kw('Sinon')}`,
        `    ${cm('Niveau 3 ──────────────────────────────')}`,
        `    ${kw('Si')} (condition_3) ${kw('alors')}`,
        `      instructions_3`,
        `    ${kw('Sinon')}`,
        `      instructions_par_défaut`,
        `    ${kw('FinSi')}  ${cm('← niveau 3')}`,
        `  ${kw('FinSi')}  ${cm('← niveau 2')}`,
        `${kw('FinSi')}  ${cm('← niveau 1')}`,
      ].join('\n')}</CodeBlock>
    </Card>
  );
}
