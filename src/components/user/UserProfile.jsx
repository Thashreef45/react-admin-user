import UserNav from "./UserNav"
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../config/axiosInstance";


function UserProfile() {

    const { userEmail } = useSelector((state)=>state.auth)
    let [image,setImage] = useState('')
    let [name,setName] = useState('')
    let [email,setEmail] = useState(userEmail)
    
    useEffect(()=>{
        const token = localStorage.getItem('jwt');
        axiosInstance.post('/user-profile',{
            email : userEmail
        },{headers:{Authorization:`Bearer ${token}`}}).then((res)=>{
            setImage(res.data.image)
            setName(res.data.name)
            setEmail(res.data.email)
        })
    },[])

    return (
        <>
            <UserNav></UserNav>
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '15px' ,backgroundColor:'#ccd9ff'}}>
                            <MDBCardBody className="text-center">
                                <div className="mt-3 mb-4">
                                    <MDBCardImage src={image}
                                        // alt="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                        className="rounded-circle" fluid style={{ width: '100px' }} />
                                </div>
                                <MDBTypography tag="h4">{name}</MDBTypography>
                                <MDBCardText className="text-muted mb-4">
                                    <span className="mx-2">{email}</span> 
                                </MDBCardText>
                                {/* <div className="mb-4 pb-2">
                                    <MDBBtn outline floating>
                                        <MDBIcon fab icon="facebook" size="lg" />
                                    </MDBBtn>
                                    <MDBBtn outline floating className="mx-1">
                                        <MDBIcon fab icon="twitter" size="lg" />
                                    </MDBBtn>
                                    <MDBBtn outline floating>
                                        <MDBIcon fab icon="skype" size="lg" />
                                    </MDBBtn>
                                </div> */}
                                <div>
                                   <Link className="btn btn-primary" style={{color:'white',textDecoration:'none'}} to='/edit-profile'> Edit Profile</Link>
                                </div>
                                {/* <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                                    </div>
                                </div> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default UserProfile