import { Link, useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
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

function UserSignUp() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    function handelSubmit(){
        axiosInstance.post('/signup',{
            name : name,
            email : email,
            password : password
        }).then(res=>{
            console.log('Signup success')
            navigate('/login')
        }).catch((error)=>console.log(error.message))
    }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 ' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5 mt-3'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput value={name} wrapperClass='mb-2' label='Your Name' size='lg' id='form1' type='text' onChange={(e)=>{
            setName(e.target.value)
          }}/>
          <MDBInput value={email} wrapperClass='mb-2' label='Your Email' size='lg' id='form2' type='email' onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <MDBInput value={password} wrapperClass='mb-2' label='Password' size='lg' id='form3' type='password' onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          <p>Already have an account?<Link to='/login'> Login</Link></p>
          <button className='mb-4 w-100 gradient-custom-4 btn btn-primary' size='lg' onClick={()=>{handelSubmit()}}>Register</button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default UserSignUp;