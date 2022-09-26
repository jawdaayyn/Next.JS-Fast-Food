import styles from "../../styles/Card.module.css";

const ProductCard = (props: any) => {
  return (
    <div className={styles.card} id={props.key}>
      <img
        src={props.image}
        alt="Denim Jeans"
        style={{
          width: "100%",
        }}
      />
      <h1>{props.name}</h1>
      <p className={styles.price}>{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

export default ProductCard;
