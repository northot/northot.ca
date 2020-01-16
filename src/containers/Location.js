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
          NorthOT is hosted at Georgian College, Barrie Ontario in N101a.
          Fastest access to N building can be found by the Georgian Drive
          entrance.
        </StyledTypography>
        <StyledTypography>
          Parking is not covered, but typically will run around $5. The campus
          uses a system called Honk, which can manage parking both from a mobile
          device as well as several kiosks located across the campus.
        </StyledTypography>
      </CopyWrapper>
    </Container>
  );
};

export default Location;
