import React from "react";
import styled from "styled-components";
import { H2 } from "../components/shared/Header";
import Box from "../components/shared/Box";
import Map from "../components/location/Map";

const Wrapper = styled.section`
  /* position: relative; */
  padding: 0 7.5%;
  margin-top: -7rem;
  /* transform: translateY(-7rem); */
  display: flex;
`;
const Location = () => {
  return (
    <Wrapper>
      <div
        css={`
          flex: 1;
          margin-right: 3.75%;
        `}
      >
        <Map />
      </div>
      <div
        css={`
          flex: 1;
          margin-left: 3.75%;
          border-bottom: 1px solid #fc0009;
        `}
      >
        <H2>
          <Box as="span" color="#404042">
            location
          </Box>
          <Box as="span" color="#fc0009">
            .
          </Box>
        </H2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          magna in elit ultricies, nec feugiat felis malesuada. Suspendisse sed
          orci dignissim, euismod quam convallis, ullamcorper velit. Duis
          molestie fermentum magna in maximus.
        </p>
        <p>
          Nulla sed porta leo, vestibulum commodo leo. Vestibulum metus dui,
          auctor id felis nec, fringilla tempor justo. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis ut ipsum a nunc tincidunt eleifend non a ipsum. Etiam
          malesuada ultricies massa, eget pellentesque arcu fringilla non.
        </p>
      </div>
    </Wrapper>
  );
};

export default Location;
