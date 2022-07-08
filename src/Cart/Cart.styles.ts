import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
  },
});

export const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif
    width: 500px;
    padding: 20px;
    .cart-header {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .total {
        display: flex;
        justify-content: space-between;
    }
`;
