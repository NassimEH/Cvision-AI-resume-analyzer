# CVision - Analyseur de CV Intelligent

CVision est une application web qui utilise l'intelligence artificielle pour analyser et optimiser les CV afin d'améliorer les chances de réussite dans les candidatures professionnelles.

## Objectif

Aider les candidats à optimiser leurs CV pour les systèmes ATS (Applicant Tracking System) et obtenir des retours constructifs personnalisés grâce à l'IA.

## Fonctionnalités

- **Analyse IA complète** avec scoring détaillé sur 5 critères (ATS, ton/style, contenu, structure, compétences)
- **Upload et traitement** de fichiers PDF avec prévisualisation
- **Suggestions personnalisées** adaptées au poste visé
- **Dashboard de suivi** des analyses effectuées
- **Authentification sécurisée** avec gestion des sessions
- **Interface responsive** et moderne
- **Gestion des données** utilisateur

## Technologies

### Frontend
- **React Router v7** - Framework de routage moderne avec génération de types
- **TypeScript** - Typage strict pour une meilleure robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Outil de build ultra-rapide

### Backend & Services
- **Puter Platform** - Service cloud pour l'authentification et le stockage
- **API IA Générative** - Analyse intelligente des CV
- **Traitement PDF** - Conversion et analyse des fichiers PDF

### Infrastructure
- **Docker** - Containerisation pour le déploiement
- **SPA Mode** - Application monopage

## Installation

### Prérequis
- Node.js (version 18+)
- npm ou yarn

### Installation locale

1. Cloner le repository
```bash
git clone https://github.com/NassimEH/ai-resume-analyzer.git
cd ai-resume-analyzer
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
```bash
# Créer un fichier .env avec vos clés API
cp .env.example .env
```

4. Lancer le serveur de développement
```bash
npm run dev
```

5. Ouvrir [http://localhost:5173](http://localhost:5173) dans votre navigateur

## Utilisation

1. **Authentification** - Créer un compte ou se connecter
2. **Upload CV** - Télécharger votre CV au format PDF
3. **Renseigner le poste** - Indiquer le titre et la description du poste visé
4. **Analyse** - L'IA analyse votre CV et génère un rapport détaillé
5. **Consultation** - Consulter les scores et suggestions d'amélioration
6. **Suivi** - Accéder à toutes vos analyses depuis le dashboard

## Structure du Projet

```
├── app/
│   ├── components/          # Composants React réutilisables
│   ├── routes/             # Pages de l'application
│   ├── lib/                # Utilitaires et services
│   ├── types/              # Définitions TypeScript
│   └── constants/          # Constantes et configuration
├── public/                 # Assets statiques
├── build/                  # Build de production
└── docker/                 # Configuration Docker
```

## Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualisation du build
npm run lint         # Vérification du code
npm run type-check   # Vérification TypeScript
```

## Docker

### Build de l'image
```bash
docker build -t cvision .
```

### Lancement du container
```bash
docker run -p 3000:3000 cvision
```

## Système de Notation

L'analyse génère un score sur 100 points réparti sur 5 critères :

- **ATS (20pts)** - Compatibilité avec les systèmes de tri automatisés
- **Ton & Style (20pts)** - Professionnalisme et cohérence
- **Contenu (20pts)** - Pertinence et impact des informations
- **Structure (20pts)** - Organisation et lisibilité
- **Compétences (20pts)** - Adéquation avec le poste visé

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## Sécurité & Confidentialité

- Gestion sécurisée des données utilisateur
- Authentification robuste via Puter Platform
- Conformité aux réglementations sur la protection des données
- Options de suppression des données utilisateur

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Auteur

**Nassim EL HADDAD**
- GitHub: [@NassimEH](https://github.com/NassimEH)
- LinkedIn: [nassim-elhaddad](https://www.linkedin.com/in/nassim-elhaddad/)

## Support

Pour toute question ou problème, ouvrir une issue sur GitHub ou me contacter directement.

---

CVision combine technologies modernes et intelligence artificielle pour maximiser les chances de succès professionnel des utilisateurs à travers une analyse approfondie et des conseils actionnables pour l'amélioration des CV.
