import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="container ">
      <div className="row ">
        {items.map((item) => (
          <div className="col-sm d-flex justify-content-center">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;