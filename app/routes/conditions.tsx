import type { Route } from "./+types/conditions";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Conditions d'utilisation - CVision" },
    { name: "description", content: "Conditions d'utilisation de CVision" },
  ];
}

export default function Conditions() {
  return (
    <main>
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Conditions d'utilisation</h1>
          <h2>Modalités d'usage du service CVision</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 text-left">
          <div className="flex flex-col gap-6">
            <section>
              <h3 className="text-xl font-semibold mb-4">1. Acceptation des conditions</h3>
              <p className="text-dark-200 mb-4">
                En utilisant CVision, vous acceptez les présentes conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">2. Description du service</h3>
              <p className="text-dark-200 mb-4">
                CVision est un service d'analyse de CV utilisant l'intelligence artificielle 
                pour fournir des commentaires et des recommandations d'amélioration.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">3. Utilisation appropriée</h3>
              <p className="text-dark-200 mb-4">
                Vous vous engagez à :
              </p>
              <ul className="list-disc list-inside text-dark-200 ml-4">
                <li>Utiliser le service de manière légale et éthique</li>
                <li>Ne pas télécharger de contenu inapproprié ou illégal</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Ne pas tenter de compromettre la sécurité du service</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">4. Responsabilité</h3>
              <p className="text-dark-200 mb-4">
                CVision fournit des suggestions générées par IA. Ces recommandations sont 
                données à titre informatif et ne garantissent pas l'obtention d'un emploi. 
                L'utilisateur reste responsable du contenu de son CV.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">5. Disponibilité du service</h3>
              <p className="text-dark-200 mb-4">
                Nous nous efforçons de maintenir le service disponible 24h/24, mais ne 
                pouvons garantir une disponibilité ininterrompue. Des maintenances 
                peuvent être nécessaires.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">6. Modification des conditions</h3>
              <p className="text-dark-200">
                Ces conditions peuvent être modifiées à tout moment. Les utilisateurs 
                seront informés des changements significatifs.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
