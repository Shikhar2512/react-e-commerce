import styled from "styled-components";
import { ReactComponent as Shoppingsvg } from "../../asset/shopping-bag.svg";
export const ShoppingIcon = styled(Shoppingsvg)`
    width: 24px;
    height: 24px;
` 
export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    top:-2px;
    & ${ShoppingIcon}{
            transition: transform .6s;
            transform: scale(1.1);  
    }
    & ${ItemCount}{
            transition: transform .6s;
            transform: scale(1.1);  
    }
  }
`
