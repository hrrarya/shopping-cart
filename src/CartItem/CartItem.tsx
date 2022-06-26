import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
};

const CartItem: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: {item.price}</p>
        <p>Total: {(item.amount * +item.price).toFixed(2)}</p>
      </div>
    </div>
  </Wrapper>
);

export default CartItem;
