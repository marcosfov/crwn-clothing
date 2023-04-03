import styled from "styled-components";

export const SignUpContainer = styled.div`
display: flex;
  flex-direction: column;
  width: 380px;

  
  h2 {
    margin: 10px 0;
  }


  @media (max-width: 1000px) {
    width: 100%;

    h2 {
      font-size: 16px;
    }

    span {
      14px
    }
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
