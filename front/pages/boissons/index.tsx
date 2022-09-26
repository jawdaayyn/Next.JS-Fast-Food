import ProductCard from "../../src/components/ProductCard";
import Header from "../../src/components/Header";
import styles from "../../styles/Products.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
function Boissons({ boissons }: { boissons: any }) {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <>
      <Header />

      <div className={styles.row}>
        <h1> Liste des Desserts</h1>
        {isAuth && <Link href="/boissons/create">Créer une boisson</Link>}
      </div>
      {boissons.map((boisson: any) => {
        return (
          <ProductCard
            key={boisson.id}
            id={boisson.id}
            name={boisson.name}
            description={boisson.description}
            price={boisson.price}
            image={boisson.image}
          ></ProductCard>
        );
      })}
    </>
  );
}

export default Boissons;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/boissons");
  const data = await response.json();

  return {
    props: {
      boissons: data,
    },
  };
}
