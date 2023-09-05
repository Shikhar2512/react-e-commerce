import styled from "styled-components";
import Button from "../button/button.component";
export const PaymentFormContainer = styled.div`
    width: 100%;
    display: flex;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const FormContainer = styled.form`
    height: 100px;
    width: 100%;
`
export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 20px;
`
export const Heading = styled.h2`
    margin-bottom: 20px;

`