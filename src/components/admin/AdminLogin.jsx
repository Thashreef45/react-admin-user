import React, { useState ,useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
from 'mdb-react-ui-kit';
import axiosInstance from '../../config/axiosInstance';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        if(localStorage.getItem('adminJwt'))navigate('/admin/home')
    })

    function handelSubmit() {
        axiosInstance.post('admin/login', {
            email: email,
            password: password
        }).then(res => {
            if(res.data.Authentication){
                localStorage.setItem('adminJwt',res.data.jwt)
                navigate('/admin/home')
            }
            
        }).catch((error) => console.log(error.message))
    }

    return (
        <>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ height: '100vh', backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5 ' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5 mt-3'>
                        <h2 className="text-uppercase text-center mb-5">Adimin Login</h2>
                        <MDBInput value={email} wrapperClass='mb-2' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <MDBInput value={password} wrapperClass='mb-2' label='Password' size='lg' id='form3' type='password' onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <button className='btn btn-secondary mb-4 w-100 gradient-custom-4 mt-3' size='lg' onClick={()=>{handelSubmit()}}>Login</button>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    )
}

export default AdminLogin