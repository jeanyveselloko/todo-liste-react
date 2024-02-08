import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

// Création du contexte d'authentification
const AuthContext = createContext();

// Hook personnalisé pour accéder au contexte d'authentification
export function useAuth() {
  return useContext(AuthContext);
}

// Provider pour le contexte d'authentification
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour inscrire un utilisateur avec email et mot de passe
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Effet pour mettre à jour l'utilisateur actuel dès que l'authentification change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
