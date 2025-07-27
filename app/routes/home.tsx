import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "Smart feedback for your dream job powered by AI" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-top bg-no-repeat min-h-screen w-full pt-4">
    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Bienvenue chez CVision</h1>
        <h2>Suivez vos candidatures, découvrez comment votre CV est évalué, consultez vos envois et profitez des retours personnalisés de l'IA</h2>
      </div>
    

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
    </section>
  </main>
}
