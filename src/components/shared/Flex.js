import styled from "styled-components";
import Box from "./Box";

const Flex = styled(Box).attrs(props => ({
  display: props.display || "flex",
}))``;

export default Flex;
