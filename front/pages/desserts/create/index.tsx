import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../../../styles/Form.module.css";
import { postProduct } from "../../../utils/fetchData";
import { useState } from "react";
import Header from "../../../src/components/Header";
const HomePage = () => {
  const isAdmin = useSelector((state: any) => state.auth.data.admin);
  const initialState: any = {
    name: "",
    description: "",
    price: "",
    image: "",
  };

  const [productData, setProductData] = useState(initialState);
  const { name, description, price, image } = productData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Typed: ${value}`);
    setProductData({ ...productData, [name]: value });
  };

  const handleProduct = async (e: any) => {
    e.preventDefault();

    const res = await postProduct(
      "http://localhost:4000/desserts",
      productData
    );

    if (res.status != 201) {
      console.log(res.statusText);
    } else {
      console.log(res.statusText);
    }
  };
  return (
    <div>
      <Header />
      {!isAdmin && (
        <div>
          <h1>Vous n'êtes pas autorisé sur cette page</h1>
          <Link href="/">Retourner à l'accueil</Link>
        </div>
      )}
      {isAdmin && (
        <div>
          <h1>Créer un dessert</h1>
          <form onSubmit={handleProduct} className={styles.main}>
            <label>Name</label>
            <input
              type="text"
              onChange={handleChangeInput}
              id="name"
              value={name}
              name="name"
            />
            <br />
            <label>Description</label>
            <input
              type="text"
              onChange={handleChangeInput}
              id="description"
              value={description}
              name="description"
            />
            <br />
            <label>Price</label>
            <input
              type="text"
              onChange={handleChangeInput}
              id="price"
              value={price}
              name="price"
            />
            <br />
            <label>Image</label>
            <input
              type="text"
              onChange={handleChangeInput}
              id="image"
              value={image}
              name="image"
            />
            <br />
            <button>Créer le produit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;
