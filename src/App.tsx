import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
// Styles
import { Wrapper, useStyles } from "./App.styles";
import Cart from "./Cart/Cart";
import IconButton from "@material-ui/core/IconButton";
import Nav from "./Nav/Nav";
// types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: { rate: number; count: number };
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (cartItems: CartItemType[]): number => {
    return cartItems.reduce((acc, cur) => acc + cur.amount, 0);
  };
  const handleAddToCart = (clickedItem: CartItemType) => {
    const isItemExists = cartItems.find((item) => item.id === clickedItem.id);

    if (isItemExists) {
      const modifiedCartItems = cartItems.map((item) => {
        if (item.id === clickedItem.id) {
          item.amount++;
        }

        return item;
      });

      setCartItems(modifiedCartItems);
    } else {
      clickedItem.amount = 1;
      setCartItems([...cartItems, clickedItem]);
    }

    // console.log(cartItems);
  };
  const handleRemoveFromCart = (clickedItem: CartItemType) => {
    const isItemExists = cartItems.find((item) => item.id === clickedItem.id);
    if (isItemExists && isItemExists.amount > 1) {
      const modifiedCartItems = cartItems.filter((item) => {
        if (item.id === clickedItem.id) {
          item.amount--;
        }
        return item;
      });
      setCartItems(modifiedCartItems);
    } else {
      const modifiedCartItems = cartItems.filter(
        (item) => item.id !== clickedItem.id
      );

      setCartItems(modifiedCartItems);
    }
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <Nav>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          classes={{ paper: classes.paper }}
        >
          <Cart
            cartItems={cartItems}
            setCartOpen={setCartOpen}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <IconButton onClick={() => setCartOpen(true)}>
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color="error"
            overlap="rectangular"
          >
            <AddShoppingCart classes={{ root: classes.icon }} />
          </Badge>
        </IconButton>
      </Nav>
      <Wrapper>
        <Grid container spacing={3} classes={{ root: classes.grid }}>
          {data?.map((item: CartItemType) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default App;
