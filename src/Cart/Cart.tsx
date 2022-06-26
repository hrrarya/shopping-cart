import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
};

const Cart: React.FC<Props> = ({ cartItems }) => (
  <Wrapper>
    <h2>Your shopping cart</h2>
    {cartItems.length === 0 ? (
      <p>No item in cart</p>
    ) : (
      cartItems.map((item) => <CartItem key={item.id} item={item} />)
    )}
  </Wrapper>
);

export default Cart;
