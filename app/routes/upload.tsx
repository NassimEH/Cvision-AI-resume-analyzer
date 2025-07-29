import type { Route } from "./+types/upload";
import {type FormEvent, useState} from 'react'
import Navbar from "../components/Navbar";
import FileUploader from "../components/FileUploader";
import {usePuterStore} from "../lib/puter";
import {useNavigate} from "react-router";
import {convertPdfToImage} from "../lib/pdf2img";
import {generateUUID} from "../lib/utils";
import {prepareInstructions} from "../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Upload CV - CVision" },
    { name: "description", content: "Téléchargez votre CV pour une analyse ATS détaillée" },
  ];
}

export default function Upload() {
    const { auth, isLoading, fs, ai, kv } = usePuterStore();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }

    const handleAnalyze = async ({ companyName, jobTitle, jobDescription, file }: { companyName: string, jobTitle: string, jobDescription: string, file: File  }) => {
        setIsProcessing(true);

        setStatusText('Uploading du fichier');
        const uploadedFile = await fs.upload([file]);
        if(!uploadedFile) return setStatusText('Erreur du chargement du fichier');

        setStatusText('Conversion en image...');
        const imageFile = await convertPdfToImage(file);
        if(!imageFile.file) return setStatusText('Erreur: Échec de la conversion du PDF en image');

        setStatusText('Uploading de l\'image...');
        const uploadedImage = await fs.upload([imageFile.file]);
        if(!uploadedImage) return setStatusText('Erreur: Échec du chargement de l\'image');

        setStatusText('Préparation des données...');
        const uuid = generateUUID();
        const data = {
            id: uuid,
            resumePath: uploadedFile.path,
            imagePath: uploadedImage.path,
            companyName, jobTitle, jobDescription,
            feedback: '',
        }
        await kv.set(`resume:${uuid}`, JSON.stringify(data));

        setStatusText('Analyse en cours...');

        const feedback = await ai.feedback(
            uploadedFile.path,
            prepareInstructions({ jobTitle, jobDescription })
        )
        if (!feedback) return setStatusText('Erreur: Échec de l\'analyse du CV');

        const feedbackText = typeof feedback.message.content === 'string'
            ? feedback.message.content
            : feedback.message.content[0].text;
        data.feedback = JSON.parse(feedbackText);
        await kv.set(`resume:${uuid}`, JSON.stringify(data));
        setStatusText('Analyse terminée, redirection...');
        console.log(data);
    }


    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form) return;
        const formData = new FormData(form);
        const companyName = formData.get('companyName')
        const jobTitle = formData.get('jobTitle')
        const jobDescription = formData.get('jobDescription')

        if(!file) 
            return;
        handleAnalyze({ companyName: String(companyName), jobTitle: String(jobTitle), jobDescription: String(jobDescription), file });
    }

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-top bg-no-repeat min-h-screen w-full pt-4">
        <Navbar />

        <section className="main-section">
            <div className ="page-heading py-16">
                <h1 className="text-4xl font-bold">Obtenez un retour précis de votre CV pour atteindre votre objectif</h1>
                {isProcessing ? (
                    <>
                        <h2>{statusText}</h2>
                        <img src="/images/resume-scan.gif" alt="Processing" className="w-full" />
                    </>
                ) : (
                    <h2> Déposez votre CV pour recevoir un feedback ATS détaillé et des conseils </h2>
                )}
                {!isProcessing && (
                    <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                        <div className = "form-div"> 
                            <label htmlFor="companyName">Nom de l'entreprise</label>
                            <input type="text" name="companyName" placeholder="Nom de l'entreprise" id="companyName" />
                        </div>
                        <div className = "form-div"> 
                            <label htmlFor="jobTitle">Intitulé du poste</label>
                            <input type="text" name="jobTitle" placeholder="Intitulé du poste" id="jobTitle" />
                        </div>
                        <div className = "form-div"> 
                            <label htmlFor="jobDescription">Description du poste</label>
                            <textarea rows={5} name="jobDescription" placeholder="Description du poste" id="jobDescription"></textarea>
                        </div>
                        <div className = "form-div"> 
                            <label htmlFor="uploader">Déposez votre CV</label>
                            <FileUploader onFileSelect={handleFileSelect} />
                        </div>

                        <button className="primary-button" type="submit">
                            <p>Analyser mon CV</p>
                        </button>
                    </form>
                    )}
            </div>
        </section>
    </main>
  );
};