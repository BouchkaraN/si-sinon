import { Card, CardHeader, ObjList } from './UI';

const items = [
  { text: 'Expliquer la <strong>limite des structures sélective simple et alternative</strong> face à plusieurs cas' },
  { text: 'Définir ce qu\'est une <strong>structure à choix multiples (Si…Sinon imbriqués)</strong>' },
  { text: 'Écrire correctement la <strong>syntaxe</strong> d\'une structure Si…Sinon imbriquée' },
  { text: 'Appliquer la règle des <strong>FinSi</strong> : autant de FinSi que de Si' },
  { text: '<strong>Construire progressivement</strong> un algorithme avec plusieurs cas imbriqués' },
  { text: '<strong>Tracer l\'exécution</strong> d\'un algorithme imbriqué pour une valeur donnée' },
  { text: 'Écrire l\'algorithme de la <strong>mention au Bac marocain</strong>' },
];

export default function Objectifs() {
  return (
    <Card>
      <CardHeader badge="📋" badgeColor="green" title="Objectifs de la séance" />
      <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 12 }}>
        À la fin de cette séance, vous serez capables de :
      </p>
      <ObjList items={items} />
    </Card>
  );
}
