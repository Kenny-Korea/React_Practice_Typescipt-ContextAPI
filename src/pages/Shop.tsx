import ShopItem from "../component/ShopItem";
import storeItems from "../data/item.json";

const Shop = () => {
  return (
    <>
      <h1>Shop</h1>
      {storeItems.map((item) => (
        <ShopItem {...item} key={item.id} />
      ))}
    </>
  );
};

export default Shop;
