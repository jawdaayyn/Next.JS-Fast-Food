import Link from "next/link";
import { useSelector } from "react-redux";
import Header from "../../../src/components/Header";

const HomePage = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      {!isAuth && (
        <div>
          <h1>Vous n'êtes pas autorisé sur cette page</h1>
          <Link href="/">Retourner à l'accueil</Link>
        </div>
      )}
      {isAuth && (
        <div>
          <h1>Créer un kebab</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
