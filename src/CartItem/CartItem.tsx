import { Add, Delete } from "@material-ui/icons";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (clickedItem: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({
  item,
  handleAddToCart,
  handleRemoveFromCart,
}) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: {item.price}</p>
        {/* <p>Total: {(item.amount * +item.price).toFixed(2)}</p> */}
      </div>
      <div className="buttons">
        <button onClick={() => handleRemoveFromCart(item)}>
          <Delete />
        </button>
        <p>{item.amount}</p>
        <button onClick={() => handleAddToCart(item)}>
          <Add />
        </button>
      </div>
    </div>
  </Wrapper>
);

export default CartItem;
