import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 20%;
  
  &:last-child {
    width: 12%;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

