import type { Route } from "./+types/mentions";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mentions légales - CVision" },
    { name: "description", content: "Mentions légales de CVision" },
  ];
}

export default function Mentions() {
  return (
    <main>
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Mentions légales</h1>
          <h2>Informations légales sur CVision</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 text-left">
          <div className="flex flex-col gap-6">
            <section>
              <h3 className="text-xl font-semibold mb-4">1. Éditeur du site</h3>
              <p className="text-dark-200 mb-4">
                <strong>Nom :</strong> Nassim EL HADDAD<br/>
                <strong>Projet :</strong> CVision<br/>
                <strong>Type :</strong> Application web d'analyse de CV
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">2. Hébergement</h3>
              <p className="text-dark-200 mb-4">
                Ce site utilise les services de la plateforme Puter pour le stockage 
                et le traitement des données.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h3>
              <p className="text-dark-200 mb-4">
                Le code source de CVision est disponible sur GitHub. Le design, 
                le contenu et la structure du site sont protégés par les droits d'auteur.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">4. Technologies utilisées</h3>
              <p className="text-dark-200 mb-4">
                CVision utilise les technologies suivantes :
              </p>
              <ul className="list-disc list-inside text-dark-200 ml-4">
                <li>React Router v7 pour la navigation</li>
                <li>Vite pour le build et le développement</li>
                <li>Tailwind CSS pour le styling</li>
                <li>Plateforme Puter pour l'IA et le stockage</li>
                <li>PDF.js pour le traitement des fichiers PDF</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">5. Cookies et données</h3>
              <p className="text-dark-200 mb-4">
                CVision utilise les mécanismes de stockage de la plateforme Puter 
                pour sauvegarder vos analyses. Aucun cookie publicitaire n'est utilisé.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">6. Contact</h3>
              <p className="text-dark-200">
                Pour toute question concernant ces mentions légales, vous pouvez 
                nous contacter via :
              </p>
              <ul className="list-disc list-inside text-dark-200 ml-4 mt-2">
                <li><a href="https://github.com/NassimEH" className="text-blue-600 hover:underline">GitHub</a></li>
                <li><a href="https://linkedin.com/in/nassim-eh" className="text-blue-600 hover:underline">LinkedIn</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
