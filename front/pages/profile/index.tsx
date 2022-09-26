import Header from "../../src/components/Header";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/Profile.module.css";
import { useState } from "react";
import { getData, patchData } from "../../utils/fetchData";
const Profile = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const username = useSelector((state: any) => state.auth.data.username);
  const email = useSelector((state: any) => state.auth.data.email);
  const id = useSelector((state: any) => state.auth.data.id);
  const password = useSelector((state: any) => state.auth.data.password);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  });

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const editHandler = async (e: any) => {
    e.preventDefault();

    console.log(newUsername, newEmail, newPassword);

    const res: any = await patchData(`http://localhost:4000/users/${id}`, {
      username: newUsername,
      email: newEmail,
      password: newPassword,
    });
    console.log(res);
  };
  return (
    <div>
      <Header />

      <div className={styles.main}>
        <h1>Page Profil</h1>
        <br />
        <form className={styles.col}>
          <label>Nom d'utilisateur</label>
          <input
            onChange={(event) => setNewUsername(event.target.value)}
            placeholder={username}
            type="text"
            id="username"
            name="newUsername"
            value={newUsername}
          />
        </form>
        <br />
        <form className={styles.col}>
          <label>E-mail</label>
          <input
            onChange={(event) => setNewEmail(event.target.value)}
            placeholder={email}
            type="text"
            id="email"
            name="newEmail"
            value={newEmail}
          />
        </form>
        <br />
        <form className={styles.col}>
          <label>Mot de passe</label>
          <input
            type="text"
            onChange={(event) => setNewPassword(event.target.value)}
            placeholder={password}
            id="password"
            name="newPassword"
            value={newPassword}
          />
          <br /> <br />
          <button onClick={editHandler}>Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
