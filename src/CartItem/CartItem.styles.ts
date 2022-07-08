import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
  },
  divider: {
    marginTop: "5px",
  },
});
export const Wrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
  }
  .container div {
    width: 50%;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
