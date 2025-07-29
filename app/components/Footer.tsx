const Footer = () => {
    return (
        <footer className="bg-transparent border-t border-gray-200 mt-auto">
            <div className="max-w-[1200px] mx-auto px-10 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Section principale - Logo et slogan */}
                    <div className="flex flex-col gap-4 flex-1">
                        <h3 className="text-2xl font-bold text-gradient">CVision</h3>
                        <p className="text-dark-200 max-w-md">
                            Optimisez vos candidatures avec des commentaires intelligents générés par l'IA
                        </p>
                    </div>
                    
                    {/* Liens utiles */}
                    <div className="flex flex-col gap-4 flex-1">
                        <h4 className="font-semibold text-black">Liens utiles</h4>
                        <div className="flex flex-col gap-2">
                            <a href="/upload" className="text-dark-200 hover:text-black transition-colors">
                                Analyser un CV
                            </a>
                            <a href="/" className="text-dark-200 hover:text-black transition-colors">
                                Mes analyses
                            </a>
                            <a href="/wipe" className="text-dark-200 hover:text-black transition-colors">
                                Gérer les données
                            </a>
                        </div>
                    </div>
                    
                    {/* Créateur et réseaux sociaux */}
                    <div className="flex flex-col gap-4 flex-1">
                        <h4 className="font-semibold text-black">Créé par</h4>
                        <p className="text-dark-200 font-medium">Nassim EL HADDAD</p>
                        <div className="flex flex-row gap-4">
                            <a 
                                href="https://github.com/NassimEH" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-dark-200 hover:text-black transition-colors"
                            >
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/nassim-elhaddad/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-dark-200 hover:text-black transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Section légale */}
                <div className="border-t border-gray-200 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-dark-200 text-sm">
                            © 2025 CVision. Tous droits réservés.
                        </p>
                        <div className="flex flex-row gap-6 text-sm">
                            <a href="/politique" className="text-dark-200 hover:text-black transition-colors">
                                Politique de confidentialité
                            </a>
                            <a href="/conditions" className="text-dark-200 hover:text-black transition-colors">
                                Conditions d'utilisation
                            </a>
                            <a href="/mentions" className="text-dark-200 hover:text-black transition-colors">
                                Mentions légales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
