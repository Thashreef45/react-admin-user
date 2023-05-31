import React, { useState,useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
from 'mdb-react-ui-kit';
import store from '../../redux/store'
import axiosInstance from '../../config/axiosInstance';
import { useNavigate ,Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {logIn} from '../../redux/slice'


function UserLogin() {
    let navigate = useNavigate()
    const {userEmail} = useSelector((state)=> state.auth)
    const dispacth = useDispatch()

    useEffect(()=>{
        if(localStorage?.getItem('jwt'))navigate('/')
    })


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handelSubmit() {
        axiosInstance.post('/login', {
            email: email,
            password: password
        }).then(res => {
            {localStorage.setItem('jwt',res.data.key);console.log(res.data.key)}
            dispacth(logIn(email))
            navigate('/')
        }).catch((error) => console.log(error.message))
    }


    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ height:'100vh',backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5 ' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5 mt-3'>
                    <h2 className="text-uppercase text-center mb-5">Login</h2>
                    <MDBInput value={email} wrapperClass='mb-2' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <MDBInput value={password} wrapperClass='mb-2' label='Password' size='lg' id='form3' type='password' onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    
                        <p className='mt-5'>Create an account? <Link to='/signup'>Signup</Link> </p>
                    <button className='mb-4 w-100 gradient-custom-4 mt-3 btn btn-primary' size='lg' onClick={() => { handelSubmit() }}>Login</button>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default UserLogin
