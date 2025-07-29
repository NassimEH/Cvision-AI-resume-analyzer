import type { Resume } from "../types";

export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            content: {
                score: 90,
                tips: [],
            },
            structure: {
                score: 90,
                tips: [],
            },
            skills: {
                score: 90,
                tips: [],
            },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({jobTitle, jobDescription}: { jobTitle: string; jobDescription: string; }) =>
    `Tu es un expert en ATS (Applicant Tracking System) et en analyse de CV avec plus de 15 ans d'expérience en recrutement.
      
      MISSION : Analyse et note ce CV en profondeur et fournis des suggestions concrètes et actionnables pour l'améliorer.
      
      CONTEXTE DU POSTE :
      - Titre du poste : ${jobTitle}
      - Description du poste : ${jobDescription}
      
      INSTRUCTIONS DÉTAILLÉES :
      
      1. ÉVALUATION RIGOUREUSE :
         - Sois critique et objectif. Une note faible (20-40) est acceptable si le CV a des problèmes majeurs
         - Une note moyenne (50-70) si le CV est correct mais perfectible
         - Une note élevée (80-100) uniquement si le CV est vraiment excellent
      
      2. ANALYSE PAR SECTION :
         - ATS : Vérifie la compatibilité avec les systèmes de tri automatisés (mots-clés, format, structure)
         - Ton et Style : Évalue le professionnalisme, la cohérence, l'adaptation au secteur
         - Contenu : Analyse la pertinence des expériences, réalisations quantifiées, clarté des descriptions
         - Structure : Examine l'organisation, la hiérarchie visuelle, la facilité de lecture
         - Compétences : Vérifie l'adéquation avec le poste, l'équilibre hard/soft skills
      
      3. SUGGESTIONS CONCRÈTES :
         - Pour chaque tip, donne des exemples précis de ce qu'il faut changer
         - Mentionne des alternatives ou reformulations exactes
         - Explique le "pourquoi" de chaque recommandation
         - Priorise les améliorations par impact sur l'efficacité du CV
         - Propose des phrases types ou des formats optimaux
         - Suggère des verbes d'action plus percutants
         - Indique des mots-clés spécifiques à ajouter
      
      4. CONSEILS SPÉCIALISÉS :
         - Adapte tes conseils au secteur d'activité du poste visé
         - Considère les tendances actuelles du recrutement
         - Suggère des façons de mieux valoriser l'expérience
         - Propose des améliorations de mise en forme si nécessaire
         - Recommande des certifications ou formations pertinentes
      
      FORMATAGE :
      ${AIResponseFormat}
      
      CONTRAINTES :
      - Réponds UNIQUEMENT en français
      - Retourne un objet JSON valide, sans backticks ni texte supplémentaire
      - Tous les conseils doivent être spécifiques et actionnables
      - Évite les conseils génériques, sois précis et concret`;
