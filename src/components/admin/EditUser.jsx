import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosInstance from "../../config/axiosInstance"

function EditUser() {
    let userId = useParams()
    let navigate = useNavigate()


    function handleUpdate(){
        axiosInstance.patch('/admin/update-user',{
            username,useremail,userId
        }).then((res)=>{
            navigate('/admin/home')
        }).catch({
            //catching error
        })

    }
    const [username,setUserName] = useState('')
    const [useremail,setUserEmail] = useState('')

    useEffect(()=>{
        axiosInstance.post('/admin/find-user',{userId}).then((res)=>{
            setUserEmail(res.data.email)
            setUserName(res.data.name)
        })
    },[])

  return (
    <>
        {/* <AdminNav /> */}
        <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#008060'}}>
            <div style={{height:'50%',width:'40%',backgroundColor:'#99ffe6',paddingLeft:'10rem',paddingTop:'3rem',borderRadius:'25px'}}>
                <h3 className="mx-3">Update User</h3>

                <div style={{marginTop:'1rem'}}>
                    <input type="text" name="name" id="" value={username} onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div style={{marginTop:'2rem'}}>
                    <input type="text" name="email" id="" value={useremail} onChange={(e)=>setUserEmail(e.target.value)} />
                </div>
                <div style={{marginTop:'2rem' ,marginLeft:'2rem'}}>
                    <button onClick={()=>navigate('/admin/home')} className="btn btn-primary">Back</button>&nbsp;&nbsp;
                    <button onClick={handleUpdate} className="btn btn-primary" >Update</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditUser