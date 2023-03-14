import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const signUp = (email, psw) =>
    createUserWithEmailAndPassword(auth, email, psw);

  const signIn = (email, psw) => signInWithEmailAndPassword(auth, email, psw);

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });

    return unsuscribe;
  }, []);

  /* modals */
  const [modalsState, setModalsState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signUp") {
      setModalsState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "signIn") {
      setModalsState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "close") {
      setModalsState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalsState, toggleModals, signUp, signIn, currentUser }}
    >
      {!loading && props.children}
    </UserContext.Provider>
  );
}
