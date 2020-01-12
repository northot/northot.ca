import React from "react";
import styled, { css } from "styled-components";
import { flexbox, space, layout, typography, color } from "styled-system";

const Box = styled.div`
	${space}
	${layout}
	${typography}
	${color}
	${flexbox}

	${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}
`;

export default Box;
