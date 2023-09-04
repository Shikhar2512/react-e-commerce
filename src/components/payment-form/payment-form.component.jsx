import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        try {
            const response = await fetch('.netlify/functions/create-payment-intent', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    amount: 10000
                })
            }).then(res=>res.json())
            console.log(response);
        } catch (error) {
            console.log("shikhar",error);
        }

    }
    return (
        <PaymentFormContainer onSubmit={paymentHandler}>
            <FormContainer>
                <h2>Credit Card Payment : </h2>
                <CardElement />
                <Button buttonType='inverted'>PayNow</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm