
import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { logIn } from '../../redux/slice'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import UserNav from './UserNav';
import axiosInstance from '../../config/axiosInstance';

function Home() {
    
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('jwt'))navigate('/login');
        else axiosInstance.get('/',{headers:{Authorization:`Bearer ${localStorage.getItem('jwt')}`}}).then((res)=>{
          console.log('error in auth')
        }).catch(()=>{
          console.log('erro vannu ----31')
          // error
        })
    },[])
  return (
   <>
    <UserNav />
    
    <img style={{height:'90vh',width:'100vw'}}
     src="https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
   </>
  );
}

export default Home;

