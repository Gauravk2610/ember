import React from 'react'
import styled from 'styled-components'
import GooglePayButton from '@google-pay/button-react'
import axios from 'axios';

function DisplayCard({data}) {
    
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("http://localhost:3001/order");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_gHr3lkGYuNT6RI", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Gaurav Konde",
                email: "gauravkonde26@gmail.com",
                contact: "9987882211",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


  return (
    <Container bg={data.bg}>
        <Left src={'/assests/events/'+data.poster} />
        <Right>
            <Title>{data.title}</Title>
            <Desc>{data.desc}</Desc>
            <Date>{data.date}</Date>
            <Rate>ENTRY FEE:- ₹ {data.rate}</Rate>
            <Register onClick={displayRazorpay} >Register Now</Register>
            {/* <GooglePayButton
                environment="TEST"
                buttonType='buy'
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                        },
                    },
                    ],
                    merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: data.rate,
                    currencyCode: 'USD',
                    countryCode: 'US',
                    },
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
            /> */}
        </Right>
    </Container>
  )
}

export default DisplayCard

const Container = styled.div`
    width: 100%;
    padding: 0 64px;
    min-height: 650px;
    background-image: url(${props => props.bg ? '/assests/events/'+props.bg: ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    @media(max-width: 860px) {
        flex-direction: column;
    }

    @media(max-width: 560px) {
        padding: 0 32px;
    }
`

const Left = styled.img`
    margin: auto 0;
    min-width: 200px;
    width: 100%;
    height: 515.36px;
    max-width: 380px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    object-fit: cover;
    @media(max-width: 560px) {
        margin: 32px 0;
        height: 400px;
    }
`

const Right = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 515.36px;
    margin-left: 64px;
    max-width: 360px;
    width: 100%;
    min-width: 200px;
    @media(max-width: 860px) {
        margin-left: 0px;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #FFFFFF;
    @media(max-width: 500px) {
        font-size: 30px;
        line-height: 37px;
    }
`

const Desc = styled.div`
    padding: 6px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const Date = styled.div`
    padding: 6px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const Rate = styled.div`
    padding: 24px 0;
    color: #FFFFFF;
`

const Register = styled.button`
    border: none;
    outline: none;
    width: 164px;
    height: 41px;
    text-align: center;
    background: #000000;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
`
