import "./SingleProduct.css";

const SingleProduct = ({
  name,
  image,
  description,
  cost,
  handleAddToCart,
  items,
}) => {
  const existingItem = items.find((item) => item.name === name);
  return (
    <div className="single-product-container">
      <p className="product-name">{name}</p>
      <img
        className="product-img"
        src={image}
        alt={name}
        height={250}
        width={250}
      />
      <p className="product-cost">{cost}</p>
      <p className="product-desc">{description}</p>
      <button
        className="product-btn"
        onClick={() => handleAddToCart({ name, image, description, cost })}
        disabled={existingItem}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default SingleProduct;
