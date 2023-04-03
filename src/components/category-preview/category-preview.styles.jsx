import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const CategoryPreviewTitle = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
