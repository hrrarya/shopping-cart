import Button from "@material-ui/core/Button";
import { Wrapper, useStyles } from "./Item.styles";
import { CartItemType } from "../App";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.card }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.title}
          loading="lazy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {item.description.split(" ").slice(0, 10).join(" ")}
          </Typography>
          <Typography variant="h6">$ {item.price}</Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => handleAddToCart(item)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
