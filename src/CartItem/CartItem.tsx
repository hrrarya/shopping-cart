import { Divider } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { CartItemType } from "../App";
import { Wrapper, useStyles } from "./CartItem.styles";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (clickedItem: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({
  item,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="container">
          <div className="information">
            <p>Price: $ {item.price}</p>
          </div>
          <div className="buttons">
            <IconButton
              onClick={() => handleRemoveFromCart(item)}
              classes={{ root: classes.root }}
            >
              <Delete />
            </IconButton>
            <p>{item.amount}</p>
            <IconButton
              onClick={() => handleAddToCart(item)}
              classes={{ root: classes.root }}
            >
              <Add />
            </IconButton>
          </div>
        </div>
      </div>
      <Divider classes={{ root: classes.divider }} />
    </Wrapper>
  );
};

export default CartItem;
