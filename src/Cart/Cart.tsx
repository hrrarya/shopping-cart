import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { ChevronRight } from "@material-ui/icons";

type Props = {
  cartItems: CartItemType[];
  setCartOpen: any;
  handleAddToCart: any;
  handleRemoveFromCart: any;
};

const getTotalAmount = (cartItems: CartItemType[]): number => {
  return +cartItems
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toFixed(2);
};

const Cart: React.FC<Props> = ({
  cartItems,
  setCartOpen,
  handleAddToCart,
  handleRemoveFromCart,
}) => (
  <Wrapper>
    <IconButton onClick={() => setCartOpen(false)}>
      <ChevronRight />
    </IconButton>
    <h2>Your shopping cart</h2>
    <Divider />
    {cartItems.length === 0 ? (
      <p>No item in cart</p>
    ) : (
      cartItems.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))
    )}
    <Divider />
    <div className="total">
      <h4>Total:</h4>
      <h4>{getTotalAmount(cartItems)}$</h4>
    </div>
  </Wrapper>
);

export default Cart;
