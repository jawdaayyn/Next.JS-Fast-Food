import { useState } from "react";
import { postData, getData } from "../../utils/fetchData";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../src/components/Header";

const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const initialState: any = { username: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { username, password } = userData;
  const id = useSelector((state: any) => state.auth.id);

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res: any = await postData(
      "http://localhost:4000/users/login",
      userData
    );

    if (res.status != 201) {
      const span: any = document.getElementById("error");
      span.innerText = res.statusText;
    } else {
      const span: any = document.getElementById("valid");
      span.innerText = " Redirection en cours...";
      dispatch(authActions.login());
      dispatch(authActions.newId(res.statusText));
      fetchData(res.statusText);

      setTimeout(() => router.push("/"), 3000);
    }
  };

  const fetchData = async (id: string) => {
    const { data }: any = await getData(`http://localhost:4000/users/${id}`);

    dispatch(authActions.newData(data));
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Connexion</h1>
        <form className={styles.main} onSubmit={handleLogin}>
          <label>
            <h2> Nom d'utilisateur : </h2>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </label>
          <label>
            <h2> Mot de passe </h2>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </label>
          <br />
          <button>Connexion</button>
          <span id="error" className={styles.error}></span>
          <span id="valid" className={styles.valid}></span>
        </form>
        <Link href="/register">Pas encore de compte ?</Link>
        <br />
        <Link href="/">Revenir à l'accueil</Link>
      </div>
    </>
  );
};

export default HomePage;
