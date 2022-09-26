import styles from "../../styles/Products.module.css";
import ProductCard from "../../src/components/ProductCard";
import Header from "../../src/components/Header";
import { useSelector } from "react-redux";
import Link from "next/link";
function Kebabs({ kebabs }: { kebabs: any }) {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      <div className={styles.row}>
        <h1> Liste des Kebabs</h1>
        {isAuth && <Link href="/kebabs/create">Créer un kebab</Link>}
      </div>
      <div className={styles.main}>
        {kebabs.map((kebab: any) => {
          return (
            <ProductCard
              key={kebab.id}
              id={kebab.id}
              name={kebab.name}
              description={kebab.description}
              price={kebab.price}
              image={kebab.image}
            ></ProductCard>
          );
        })}
      </div>
    </>
  );
}

export default Kebabs;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/kebabs");
  const data = await response.json();

  return {
    props: {
      kebabs: data,
    },
  };
}
