import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import jsPDF from 'jspdf'
import QRCode from "qrcode";
import { toastMessage } from '../../features/navbar/navbarSlice';

function CardDetail({data}) {

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
    

  return (
    <Container>
        {/* img  */}
        <img src={`/assests/${data.img}.png`} alt="" />
        <Content>
            <Title>{data.title}</Title>
            <Desc>{data.desc}</Desc>
            <ButtonWrapper>
                <Register onClick={setOpen}>Register</Register>
                <View href={data.redirect}>View</View>
            </ButtonWrapper>
        </Content>
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

export default CardDetail

const Container = styled.div`
    margin: 32px 0;
    max-width: 400px;
    width: 100%;
    min-width: 300px;
    box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.4);
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    box-sizing: border-box;
    border-radius: 20px;

    img {
        height: 260px;
        width: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0px 0px;
    }
`

const Content = styled.div`
    padding: 20px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
    @media(max-width: 560px) {
        font-size: 24px
    }
`

const Desc = styled.div`
    margin: 18px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #818181;
    @media(max-width: 560px) {
        font-size: 16px;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Register = styled.button`
    width: 164px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    font-weight: 400;
    border: none;
    outline: none;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
    color: #FFFFFF;
`

const View = styled.a`
    width: 164px;
    height: 41px;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
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