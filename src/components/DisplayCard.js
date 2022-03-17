import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import GooglePayButton from '@google-pay/button-react'
import axios from 'axios';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toastMessage } from '../features/navbar/navbarSlice';
import { useDispatch } from 'react-redux';
import jsPDF from 'jspdf'
import QRCode from "qrcode";

function DisplayCard({data, type}) {
    const initialState = {
        name: "",
        email: "",
        phone: "",
        college: "",
    }

    const dispatch = useDispatch()
    const [values, setValues] = useState(initialState)
    const [open, setOpen] = useState(false)
    const [qrcode, setQrcode] = useState(null)
    const [loading, setLoading] = useState(false)

    const downloadQrcode = useRef(null)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleClose = () => {
        setValues(initialState)
        setLoading(false)
        return setOpen(false)
    }

    const registerEvent = async(e) => {
        setLoading(true)
        e.preventDefault()
        const {name, email, phone, college} = values
        const res = await addDoc(collection(db, data.title.replace(" ", '')), {
            name: name,
            email: email,
            phone: phone,
            college: college,
            event: data.title.replace(" ", ''),
            cost: data.rate,
            paid: false,
            used: false,
            timestamp: serverTimestamp()
        })
        setLoading(false)
        setOpen(false)

        const uid = res.id
        var doc = new jsPDF('p', 'pt');
  
        doc.text(20, 20, 'This is the first title.')
        const response = await QRCode.toDataURL(uid)
        setQrcode(response)

        // downloadQrcode.current.click()
        console.log(response)
        
        doc.setFont('helvetica')
        doc.text(80, 610, 'Event: ' + data.title.replace(" ", ''))      
        doc.text(80, 640, 'Name: '+ name)
        doc.text(80, 670, 'Email: ' + email)      
        doc.text(80, 700, 'Contact No: ' + phone)      
        doc.text(80, 730, 'College: ' + college)      
        
        
        doc.addImage(response, 'png', 0, 0, 580, 580);
        doc.save(`${data.title.replace(" ", '')}.pdf`)
        setValues(initialState)
        dispatch(toastMessage(({trigger: true, message: 'Successfully Registerred'})))
        setTimeout(() => {
            dispatch(toastMessage(({trigger: false, message: null})))
        }, 2000);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 400,
        width: '100%',
        minWIdth: 200,
        bgcolor: '#ffffff',
        // border: '2px solid #000',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
      };
    
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
            {data.price && <Price>PRICE WORTH:- ₹ {data.price}</Price>}
            {data.Fprice && <Fprice>1st Price:- ₹ {data.Fprice}</Fprice>}
            {data.Sprice && <Fprice>2nd Price:- ₹ {data.Sprice}</Fprice>}
            {data.Tprice && <Fprice>3rd Price:- ₹ {data.Tprice}</Fprice>}
            <Register onClick={setOpen} >Register Now</Register>
            <a href={qrcode} download={true} ref={downloadQrcode}>
                <img src={qrcode}  hidden alt="" />
            </a>
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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <ModalForm onSubmit={registerEvent}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Register Now
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <input required onChange={handleChange} value={values.name} type="text" name="name" id="name" placeholder='Name' />
                        <input required onChange={handleChange} value={values.email} type="text" name="email" id="email" placeholder='Email' />
                        <input required onChange={handleChange} value={values.phone} type={'tel'} maxLength={10} name="phone" id="phone" placeholder='Phone' />
                        <input required onChange={handleChange} value={values.college} type="text" name="college" id="college" placeholder='Enter Your College Name' />
                        <button className='register-button' disabled={loading} style={{opacity: loading ? 0.4 : 1}} type="submit">Register</button>
                    </Typography>
                </Box>
            </ModalForm>
        </Modal>
    </Container>
  )
}

// name email id , mobile , colllege

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


const ModalForm = styled.form`

    input {
        width: 100%;
        padding: 14px 16px;
        margin: 4px 0;
        border-radius: 12px;
        border: 0px solid gray;
        outline: none;
        background-color: #f0f0f0;
    }

    .register-button {
        margin: 4px 0;
        width: 100%;
        padding: 12px 16px;
        background-color: #2d88ff;
        color: white;
        border: none;
        outline: none;
        border-radius: 12px;
        cursor: pointer;
    }
`

const Price = styled.div`
padding: 0px  0 18px;
color: #000;
font-weight: bold;
font-size: 20px;
`;

const Fprice = styled.div`
padding: 0px  0 18px;
color: #000;
font-weight: bold;
font-size: 20px;
`
const Sprice = styled.div`

`
const Tprice = styled.div`
`
