import { CardElement,useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer, paymentSpinner, PaymentButton, Heading} from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";
import {  } from "./payment-form.styles";
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment,setIsProcessingPayment] = useState(false);
    const paymentHandler = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        
        try {
            setIsProcessingPayment(true);
            const response = await fetch('.netlify/functions/create-payment-intent', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amount*100  
                })
            }).then(res=>res.json())
            console.log(response);
            const {paymentIntent:{client_secret}} = response;
            const paymentResult = await stripe.confirmCardPayment(client_secret,{
                payment_method:{
                    card:elements.getElement(CardElement),
                    billing_details:{
                        name: currentUser?currentUser:'guest'
                    }
                }
            })
            setIsProcessingPayment(false);
            if(paymentResult.error){
                alert(paymentResult.error);
            }
            else{
                if(paymentResult.paymentIntent.status === "succeeded"){
                    alert("successfull")
                }
            }
        } catch (error) {
            setIsProcessingPayment(false);
            console.log("shikhar",error); 
        }

    }   
    return (
        <PaymentFormContainer onSubmit={paymentHandler}>
            <FormContainer>
                <Heading>Credit Card Payment : </Heading>
                <CardElement />
                <PaymentButton isLoading = {isProcessingPayment} buttonType='base'>PayNow</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm