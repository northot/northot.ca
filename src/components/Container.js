import styled from "styled-components";

const Container = styled.div`
  padding: ${props => `${props.py || "0%"} ${props.px || "10%"}`};
`;

export default Container;
