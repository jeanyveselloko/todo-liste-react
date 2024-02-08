import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase'; // Importez votre instance Firebase (ou tout autre fichier où vous configurez Firebase)

const PrivateRoute = ({ component: Component }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Vérifier si un utilisateur est authentifié avec Firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Mettre à jour l'état de l'utilisateur
      setLoading(false); // Mettre à jour l'état de chargement une fois l'opération terminée
    });

    // Nettoyer l'abonnement lors du démontage du composant
    return () => unsubscribe();
  }, []);

  // Si l'état de chargement est true, afficher "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si l'utilisateur est authentifié, afficher le composant privé
  return <Component />;
};

export default PrivateRoute;
