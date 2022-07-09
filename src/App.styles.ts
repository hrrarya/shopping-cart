import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  paper: {
    width: 400,
    "@media (max-width: 487px)": {
      width: 250,
    },
  },
  icon: {
    fill: "#fff",
  },
  grid: {
    marginTop: "70px",
  },
});
export const Wrapper = styled.div`
  margin: 15px 40px;
`;

export const StyledButton = styled(IconButton)``;
