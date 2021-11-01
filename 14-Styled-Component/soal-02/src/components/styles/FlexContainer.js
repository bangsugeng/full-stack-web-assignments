import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
`;