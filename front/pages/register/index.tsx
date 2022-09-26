// our-domain.com/

import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { postData } from "../../utils/fetchData";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../src/components/Header";

const HomePage = () => {
  const router = useRouter();
  const initialState: any = {
    username: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { username, email, password } = userData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Typed: ${value}`);
    setUserData({ ...userData, [name]: value });
  };
  const handleRegister = async (e: any) => {
    e.preventDefault();

    const res = await postData("http://localhost:4000/users", userData);
    console.log(res);
    if (res.status != 201) {
      const span: any = document.getElementById("error");
      span.innerText = res.statusText;
    } else {
      const span: any = document.getElementById("valid");
      span.innerText = res.statusText;
    }
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Inscription</h1>
        <form className={styles.main} onSubmit={handleRegister}>
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
            <h2> Email : </h2>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
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

          <button>Inscription</button>
          <br />

          <span id="error" className={styles.error}></span>
          <span id="valid" className={styles.valid}></span>
        </form>
        <Link href="/login">Vous avez déjà un compte ? Se connecter</Link>
        <Link href="/">Revenir à l'accueil</Link>
      </div>
    </>
  );
};

export default HomePage;
