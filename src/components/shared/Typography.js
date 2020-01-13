import React from "react";
import styled from "styled-components";
import { color, typography, spacing } from "styled-system";

const Typography = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;

  ${color}
  ${typography}
	${spacing}
`;

export default Typography;
