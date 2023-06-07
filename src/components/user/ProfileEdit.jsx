import { Link, Navigate, useNavigate } from "react-router-dom"
import UserNav from "./UserNav"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axiosInstance from "../../config/axiosInstance"
import firebase from '../../firebase/config'


function ProfileEdit() {
    const navigate = useNavigate()
    const { userEmail } = useSelector((state) => state.auth)
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [image, setImage] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp')
    let [error, setError] = useState('')
    const token = localStorage.getItem('jwt');
    
    useEffect(() => {
        axiosInstance.post('/user-profile', {
            email : userEmail
        },
        {
            headers:{Authorization:`Bearer ${token}`}
        }
        ).then((res) => {
            setName(res.data.name) 
            setEmail(res.data.email)
        })
    }, [])
    function handleUpdate() {
        if (name.trim().length < 6) setError('Name Should be atleast 6 chars')
        else {
            let trimmedName = name.trim()
            setName(trimmedName)

            if (image != 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp') {
                firebase.storage().ref(`/node-react-app/${image.name}`).put(image).then(({ ref }) => {
                    ref.getDownloadURL().then((url) => {
                        axiosInstance.patch('/edit-user', { name, email, image: url }).then((res) => {
                            navigate('/profile')
                        })
                    })
                })
            } else {
                axiosInstance.patch('/edit-user', { name, email, image },{
                    headers:{Authorization:`Bearer ${token}`}
                }).then((res) => {
                    navigate('/profile')
                })
            }

        }


    }


    return (
        <>
            <UserNav />
            <div style={{ height: '90vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ minHeight: '55%', width: '50%', backgroundColor: '#ffcccc', borderRadius: '25px' }}>
                    <div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" style={{ marginLeft: '30%', marginTop: '3rem' }} ></input>
                    </div>
                    <div>
                        <input value={name} type="text" onChange={(e) => setName(e.target.value)}
                            style={{ marginLeft: '30%', marginTop: '2rem' }} placeholder="Name" name="name"></input>
                    </div>

                    <div>
                        <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}
                            style={{ marginLeft: '30%', marginTop: '2rem' }} placeholder="Email" name="email"></input>
                    </div>

                    <div style={{ marginLeft: '17rem' }}>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>

                    <div style={{ marginLeft: '38%', marginTop: '1rem' }}>
                        <Link className="btn btn-primary" to='/profile'>Back</Link>&nbsp;&nbsp;
                        <button onClick={() => handleUpdate()} className="btn btn-primary">Update</button>
                    </div>


                </div>
            </div>
        </>
    )

}


export default ProfileEdit