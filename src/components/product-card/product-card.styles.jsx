import styled from "styled-components";
export const ProductCardContainer = styled.div`
  border-radius: 3px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    border-radius: 3px;
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    border-radius: 3px;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    transform:scale(1.02);
    transition: transform 0.3s;
    box-shadow: 0 0 11px rgba(33,33,33,.2); 

    
    img {
      opacity: 0.9;
    }

    button {
      opacity: 0.7;
      display: flex;
    }
  }
`
export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`
export const ProductName = styled.span`
      height: 5%;
      width: 90%;
      margin-bottom: 15px;
`
export const ProductPrice = styled.span`
      height: 5%;
      width: 10%;
`


