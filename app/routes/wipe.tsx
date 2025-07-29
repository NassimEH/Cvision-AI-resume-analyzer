import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import Navbar from "../components/Navbar";

const WipeApp = () => {
    const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
    const navigate = useNavigate();
    const [files, setFiles] = useState<FSItem[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);

    const loadFiles = async () => {
        const files = (await fs.readDir("./")) as FSItem[];
        setFiles(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate("/auth?next=/wipe");
        }
    }, [isLoading]);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            files.forEach(async (file) => {
                await fs.delete(file.path);
            });
            await kv.flush();
            await loadFiles();
        } catch (error) {
            console.error("Erreur lors de la suppression:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    if (isLoading) {
        return (
            <main>
                <Navbar />
                <section className="main-section pt-8">
                    <div className="page-heading py-16">
                        <div className="flex flex-col items-center justify-center">
                            <img src="/images/resume-scan-2.gif" alt="Chargement..." className="w-[200px]" />
                            <h2 className="mt-4">Chargement...</h2>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    if (error) {
        return (
            <main>
                <Navbar />
                <section className="main-section pt-8">
                    <div className="page-heading py-16">
                        <h1>Erreur</h1>
                        <h2>Une erreur s'est produite : {error}</h2>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Gestion des données</h1>
                    <h2>Gérez vos fichiers et données stockés</h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8">
                    {/* Section utilisateur */}
                    <div className="mb-8 text-center">
                        <h3 className="text-xl font-semibold mb-2">Utilisateur connecté</h3>
                        <p className="text-dark-200 text-lg font-medium">{auth.user?.username}</p>
                    </div>

                    {/* Section fichiers */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-center">Fichiers existants ({files.length})</h3>
                        {files.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {files.map((file) => (
                                    <div key={file.id} className="gradient-border animate-in fade-in duration-500">
                                        <div className="flex flex-col gap-2">
                                            <p className="font-medium text-black truncate" title={file.name}>
                                                {file.name}
                                            </p>
                                            <p className="text-sm text-dark-200">
                                                ID: {file.id.substring(0, 8)}...
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-dark-200 text-lg">Aucun fichier trouvé</p>
                            </div>
                        )}
                    </div>

                    {/* Section action */}
                    <div className="text-center">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-red-600">Zone de danger</h3>
                            <p className="text-dark-200 max-w-2xl mx-auto">
                                Cette action supprimera définitivement tous vos fichiers CV, analyses et données stockées. 
                                Cette action est irréversible.
                            </p>
                        </div>
                        
                        <button
                            className={`primary-button max-w-md mx-auto text-lg font-semibold ${
                                isDeleting ? 'opacity-50 cursor-not-allowed' : 'hover:primary-gradient-hover'
                            }`}
                            onClick={handleDelete}
                            disabled={isDeleting || files.length === 0}
                        >
                            {isDeleting ? 'Suppression en cours...' : 'Effacer toutes les données'}
                        </button>
                        
                        {files.length === 0 && (
                            <p className="text-dark-200 text-sm mt-2">
                                Aucune donnée à supprimer
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WipeApp;