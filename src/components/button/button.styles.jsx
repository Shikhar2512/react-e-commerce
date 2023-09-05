import styled from "styled-components";
import { SpinnerContainer } from "../loading/spinner.styles";
export const BaseButton = styled.button`
      border-radius: 3px;
    min-width: 150px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: 200ms ease-out;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`
export const GoogleSignInButton = styled(BaseButton)`

      background-color: #4285f4;
      color: white;
    
      &:hover {
        background-color: white;
        border: 1px solid #4285f4;
        color: #4285f4;
      }
`


export const InvertedButton = styled(BaseButton)`
      background-color: white;
      color: black;
      border: 1px solid black;
    
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`
export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
    margin: auto auto;
`
