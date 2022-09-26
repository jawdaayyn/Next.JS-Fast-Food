import Header from "../../src/components/Header";
import styles from "../../styles/Cart.module.css";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>Panier</h1>
      </div>
    </div>
  );
};

export default HomePage;
