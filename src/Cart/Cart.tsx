import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";
import { Wrapper, useStyles } from "./Cart.styles";
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
}) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <div className="cart-header">
        <IconButton
          onClick={() => setCartOpen(false)}
          classes={{ root: classes.root }}
        >
          <ChevronRight />
        </IconButton>
        <h2>Your Cart</h2>
      </div>
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
        <h4>$ {getTotalAmount(cartItems)}</h4>
      </div>
    </Wrapper>
  );
};

export default Cart;
