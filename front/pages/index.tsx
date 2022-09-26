import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import auth, { authActions } from "../store/auth";
import Header from "../src/components/Header";

const HomePage = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      {!isAuth && (
        <div>
          <Header />
          <h1>Vous n'êtes pas connecté</h1>
          <Link href="/login">Se connecter ?</Link>
        </div>
      )}
      {isAuth && (
        <div>
          <Header />
          <h1>Vous êtes bien connecté</h1>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      )}
    </div>
  );
};
export default HomePage;
