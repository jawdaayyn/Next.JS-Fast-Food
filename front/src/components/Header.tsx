import styles from "../../styles/Header.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import { getData } from "../../utils/fetchData";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
const Header = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  const username = useSelector((state: any) => state.auth.data.username);
  /*
  const username = useSelector((state: any) => state.auth.data.username);
  const id = useSelector((state: any) => state.auth.id);
  */
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <ul>
        <li>
          <Link href="/">Kebab Legends</Link>
        </li>
        <li>
          <Link href="/cart">Panier</Link>
        </li>
        <li>
          <Link href="/kebabs">Kebabs</Link>
        </li>
        <li>
          <Link href="/boissons">Boissons</Link>
        </li>
        <li>
          <Link href="/desserts">Desserts</Link>
        </li>

        <li
          style={{
            float: "right",
          }}
        >
          <Link className={styles.active} href="/profile">
            Mon compte
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
