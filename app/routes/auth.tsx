import type { Route } from "./+types/auth";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "CVision | Authentification" },
        { name: "description", content: "Page d'authentification pour CVision" }
    ];
}

export default function Auth() {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(next);
        }
    }, [auth.isAuthenticated, navigate, next]);

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center"> 
        <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1> Bienvenue ! </h1>
                    <h2>Veuillez vous connecter pour continuer</h2>
                </div>
                <div>
                    {isLoading ? (
                        <button className="auth-button animate-pulse">
                            <p> Connexion... </p>
                        </button>
                    ) : (
                        <>
                        {auth.isAuthenticated ? (
                            <button className="auth-button" onClick={auth.signOut} > 
                                <p> Se déconnecter </p>
                            </button>
                        ) : (
                            <button className="auth-button" onClick={auth.signIn}>
                                <p> Se connecter </p>
                            </button>
                        )}
                        </>
                    )}
                </div>
            </section>
        </div>
        </main>
    )
}