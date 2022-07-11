import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useStyles } from "./Nav.styles";

type Props = {
  children: any;
};

const Nav: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" classes={{ root: classes.appbar }}>
        <Toolbar>
          <Link href="/" classes={{ root: classes.logo }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              //   sx={{ display: { xs: "none", sm: "block" } }}
            >
              Best Stores
            </Typography>
          </Link>
        </Toolbar>
        {children}
      </AppBar>
    </Box>
  );
};

export default Nav;
