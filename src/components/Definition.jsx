import { Card, CardHeader, SectionLabel, InfoBox, ObjList, Stepper, Tag } from './UI';

export default function Definition() {
  return (
    <Card>
      <CardHeader
        badge="📖"
        badgeColor="blue"
        title={<>Structure à choix multiples <Tag color="green">Nouveau</Tag></>}
      />

      <InfoBox type="blue" label="Définition">
        La <strong>structure à choix multiples</strong> est une structure sélective imbriquée
        obtenue en plaçant un <strong>Si…Sinon</strong> à l'intérieur du bloc{' '}
        <strong>Sinon</strong> d'un autre Si…Sinon. Elle permet de traiter autant de cas
        que nécessaire pour une même variable.
      </InfoBox>

      <SectionLabel>Vocabulaire essentiel</SectionLabel>
      <ObjList items={[
        { icon: 'arrow', text: '<strong>Imbriquer</strong> : placer une structure à l\'intérieur d\'une autre' },
        { icon: 'arrow', text: '<strong>Niveau d\'imbrication</strong> : profondeur du Si dans la structure (1er niveau, 2ème niveau…)' },
        { icon: 'arrow', text: '<strong>Indentation</strong> : le décalage vers la droite qui visualise l\'imbrication' },
      ]} />

      <SectionLabel>Règle fondamentale</SectionLabel>
      <InfoBox type="orange" label="À retenir absolument">
        Chaque <strong>Si</strong> ouvert doit être fermé par son propre <strong>FinSi</strong>.<br /><br />
        <strong>N Si imbriqués = N FinSi obligatoires</strong>, écrits de l'intérieur vers l'extérieur.
      </InfoBox>

      <SectionLabel>Principe d'exécution</SectionLabel>
      <Stepper steps={[
        { title: 'La machine évalue la 1ère condition', desc: 'Si vraie → le 1er bloc s\'exécute. Tout le reste est ignoré.' },
        { title: 'Si la 1ère condition est fausse', desc: 'On entre dans le Sinon et on évalue la 2ème condition.' },
        { title: 'On continue jusqu\'au 1er cas vrai', desc: 'Dès qu\'une condition est vraie, son bloc s\'exécute et on sort de toute la structure.' },
        { title: 'Aucune condition vraie', desc: 'Le dernier Sinon (sans condition = cas par défaut) s\'exécute.' },
      ]} />
    </Card>
  );
}
