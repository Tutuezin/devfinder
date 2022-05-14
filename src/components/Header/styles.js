import styled from "styled-components";

export const Topo = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
  }
`;

export const ChangeTheme = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
  }

  :hover {
    cursor: pointer;
  }
`;
