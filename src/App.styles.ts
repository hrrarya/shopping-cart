import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Box, makeStyles } from "@material-ui/core";

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
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  filterBar: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    margin: "50px 20px !important",
  },
  buttonBox: {
    display: "flex",
    "justify-content": "right",
    "margin-top": "20px",
  },
});
export const Wrapper = styled.div`
  margin: 15px 40px;
`;

export const NavWrapper = styled.div`
  div.filter-box {
  }
`;

export const Puller = styled(Box)`
  width: 250px;
  height: 6px;
  background-color: gray;
  opacity: 0.7;
  border-radius: 3px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledButton = styled(IconButton)``;
