import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import {usePuterStore} from "../lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import type { Resume } from "../types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVision" },
    { name: "description", content: "Commentaires intelligents pour votre emploi de rêve" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list('resume:*', true)) as KVItem[];

      const parsedResumes = resumes?.map((resume) => (
          JSON.parse(resume.value) as Resume
      ))

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }

    loadResumes()
  }, []);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover pt-8">
    <Navbar />

    <section className="main-section pt-16">
      <div className="page-heading py-16">
        <h1>Suivez vos candidatures et évaluations de CV</h1>
        {!loadingResumes && resumes?.length === 0 ? (
            <h2>Aucun CV trouvé. Téléchargez votre premier CV pour recevoir des commentaires.</h2>
        ): (
          <h2>Consultez vos soumissions et vérifiez les commentaires générés par l'IA.</h2>
        )}
      </div>
      {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" alt="Chargement des CV..." className="w-[200px]" />
          </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
              Télécharger un CV
            </Link>
          </div>
      )}
    </section>
  </main>
}