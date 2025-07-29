import type { Route } from "./+types/politique";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Politique de confidentialité - CVision" },
    { name: "description", content: "Politique de confidentialité de CVision" },
  ];
}

export default function Politique() {
  return (
    <main>
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Politique de confidentialité</h1>
          <h2>Protection de vos données personnelles</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 text-left">
          <div className="flex flex-col gap-6">
            <section>
              <h3 className="text-xl font-semibold mb-4">1. Collecte des données</h3>
              <p className="text-dark-200 mb-4">
                CVision collecte uniquement les données nécessaires au fonctionnement du service :
              </p>
              <ul className="list-disc list-inside text-dark-200 ml-4">
                <li>Les fichiers CV que vous téléchargez pour analyse</li>
                <li>Les informations de connexion via la plateforme Puter</li>
                <li>Les résultats d'analyse générés par l'IA</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">2. Utilisation des données</h3>
              <p className="text-dark-200 mb-4">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside text-dark-200 ml-4">
                <li>Analyser vos CV et fournir des commentaires personnalisés</li>
                <li>Stocker vos analyses pour consultation ultérieure</li>
                <li>Améliorer la qualité de nos services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">3. Stockage et sécurité</h3>
              <p className="text-dark-200 mb-4">
                Vos données sont stockées de manière sécurisée via la plateforme Puter. 
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos informations personnelles.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">4. Vos droits</h3>
              <p className="text-dark-200 mb-4">
                Vous disposez du droit de :
              </p>
              <ul className="list-disc list-inside text-dark-200 ml-4">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier vos données</li>
                <li>Supprimer vos données (fonction "Effacer les données")</li>
                <li>Vous opposer au traitement de vos données</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">5. Contact</h3>
              <p className="text-dark-200">
                Pour toute question concernant cette politique de confidentialité, 
                vous pouvez nous contacter via nos réseaux sociaux mentionnés en bas de page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
