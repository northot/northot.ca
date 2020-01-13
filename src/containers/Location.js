import React from "react";
import styled from "styled-components";
import { H2 } from "../components/shared/Header";
import Box from "../components/shared/Box";
import Typography from "../components/shared/Typography";
import Map from "../components/location/Map";

const Container = styled.section`
  padding: 0 7.5%;
  margin-top: -4rem;
  display: flex;

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 0;
    flex-direction: column-reverse;
  }
`;

const MapWrapper = styled.div`
  flex: 1;
  width: 50%;
  padding-right: 3.75%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const CopyWrapper = styled.div`
  flex: 1;
  width: 50%;
  padding-left: 3.75%;
  padding-top: calc(4rem + 7.5%);
  border-bottom: 1px solid #fc0009;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: none;
    padding: 2rem 7.5% 0;
  }
`;

const StyledH2 = styled(H2)`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const StyledTypography = styled(Typography)`
  color: #4b4b4d;
  line-height: 1.75;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Location = () => {
  return (
    <Container id="location">
      <MapWrapper>
        <Map />
      </MapWrapper>
      <CopyWrapper>
        <StyledH2>
          <Box as="span" color="#404042">
            location
          </Box>
          <Box as="span" color="#fc0009">
            .
          </Box>
        </StyledH2>
        <StyledTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
          magna in elit ultricies, nec feugiat felis malesuada. Suspendisse sed
          orci dignissim, euismod quam convallis, ullamcorper velit. Duis
          molestie fermentum magna in maximus.
        </StyledTypography>
        <StyledTypography>
          Nulla sed porta leo, vestibulum commodo leo. Vestibulum metus dui,
          auctor id felis nec, fringilla tempor justo. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis ut ipsum a nunc tincidunt eleifend non a ipsum. Etiam
          malesuada ultricies massa, eget pellentesque arcu fringilla non.
        </StyledTypography>
      </CopyWrapper>
    </Container>
  );
};

export default Location;
