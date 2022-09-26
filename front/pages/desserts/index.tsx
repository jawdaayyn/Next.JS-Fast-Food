import ProductCard from "../../src/components/ProductCard";
import Header from "../../src/components/Header";
import styles from "../../styles/Products.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
function Desserts({ desserts }: { desserts: any }) {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      <div className={styles.row}>
        <h1> Liste des Desserts</h1>
        {isAuth && <Link href="/desserts/create">Créer un dessert</Link>}
      </div>
      {desserts.map((dessert: any) => {
        return (
          <ProductCard
            key={dessert.id}
            id={dessert.id}
            name={dessert.name}
            description={dessert.description}
            price={dessert.price}
            image={dessert.image}
          ></ProductCard>
        );
      })}
    </>
  );
}

export default Desserts;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/desserts");
  const data = await response.json();

  return {
    props: {
      desserts: data,
    },
  };
}
