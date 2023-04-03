import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
  
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    row-gap: 3rem
  }
`