import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.div`
      background-color: white;
      border-bottom: 1px ;
      box-shadow: 0 0 11px rgba(33,33,33,.2); 
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;

    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding-left: 30px;
    padding-right: 35px;
`
export const LogoContainer = styled(Link)`
        height: 100%; 
          width: 70px;
      padding: 10px;
      position: relative;
      &:hover{
            top:-2px;
            transition: transform .6s;
            transform: scale(1.1);  

      }
      /* margin-left: 30px; */
`
export const NavLinks = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`
export const NavLink = styled(Link)`
      margin-top: 6px;
      padding: 10px 15px;
      cursor: pointer;
      position: relative;
      
      :hover{
            transition: transform .6s;
            transform: scale(1.1);
            font-weight:500;
            top: -2px;                    
      }
`

