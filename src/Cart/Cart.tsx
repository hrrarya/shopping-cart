import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { ChevronRight } from "@material-ui/icons";

type Props = {
  cartItems: CartItemType[];
  setCartOpen: any;
};

const getTotalAmount = (cartItems: CartItemType[]): number => {
  return +cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
};

const Cart: React.FC<Props> = ({ cartItems, setCartOpen }) => (
  <Wrapper>
    <IconButton onClick={() => setCartOpen(false)}>
      <ChevronRight />
    </IconButton>
    <h2>Your shopping cart</h2>
    <Divider />
    {cartItems.length === 0 ? (
      <p>No item in cart</p>
    ) : (
      cartItems.map((item) => <CartItem key={item.id} item={item} />)
    )}
    <Divider />
    <div className="total">
      <h4>Total:</h4>
      <h4>{getTotalAmount(cartItems)}$</h4>
    </div>
  </Wrapper>
);

export default Cart;
