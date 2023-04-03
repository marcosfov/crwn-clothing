import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'

export const ProdutcCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  /* min-width: 165px; */

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  
    @media (max-width: 800px) {
      display: flex;
    }
  }

  &:hover {
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton}{
      opacity: 0.85;
      display: flex;
  }
  }

`

export const ImageCard = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`
export const FooterCard = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const NameCard = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const PriceCard = styled.span`
  width: 10%;
`