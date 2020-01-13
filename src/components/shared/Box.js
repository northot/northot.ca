import React from "react";
import styled, { css } from "styled-components";
import {
  flexbox,
  space,
  layout,
  typography,
  color,
  position,
} from "styled-system";

const Box = styled.div`
	${space}
	${layout}
	${typography}
	${color}
	${flexbox}
	${position}

	${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}
`;

export default Box;
