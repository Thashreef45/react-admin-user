import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../../config/axiosInstance"
import store from '../../redux/store'
import { useDispatch } from "react-redux"

function AdminUserManagement() {
    const navigate = useNavigate()
    const [userTable, setUserTable] = useState([])
    let users // storing user table data
    useEffect(() => {
        if (!localStorage.getItem('adminJwt')) {
            navigate('/admin/login');
        } else {
            axiosInstance.get('/admin/user-details').then((res) => {
                setUserTable(res.data.users);
                users = res.data.users
            }).catch((error) => {
                // Handle error
            });
        }
    }, []);



    function handleLogout() {
        localStorage.removeItem('adminJwt')
        navigate('/admin/login')
    }

    function manageUserStatus(status, userId) {
        axiosInstance.patch('/admin/block-unblock-user',
            {
                userId, status
            }).then((res) => {
                setUserTable(res.data.users)
            })
    }

    function searchUser(key){
        axiosInstance.post('/admin/search-user',{key:key}).then((res)=>{
            setUserTable(res.data)
        })

    }


    return (
        <>
            <div className="pt-5" style={{ width: '100vw', height: '100vh', backgroundColor: 'gray' }}>
        

                <div className="container">
                    
                    <button style={{ float: 'right' }} onClick={handleLogout} className="btn btn-danger">Logout</button>

                    <div className="mb-5" style={{ height: '5vh', backgroundColor: 'gray', display: 'flex', justifyContent: 'center' }}>
                        <h3>User Management</h3>
                    </div>

                    <div style={{marginLeft:'38%',marginBottom:'5%'}}>
                        <input type='search' onChange={(e)=>searchUser(e.target.value)} />
                    </div>
    
                    <table className="table table-striped table-dark ">
                        <thead>
                            <tr>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Block</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userTable.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td> 
                                        <td><Link to={`/admin/edit-user/${user._id}`} className="btn btn-secondary">Edit</Link></td>
                                        <td>
                                            {user.status ?
                                                <button onClick={() => manageUserStatus(user.status, user._id)} className="btn btn-danger">Block</button>
                                                : <button onClick={() => manageUserStatus(user.status, user._id)} className="btn btn-success">Unblock</button>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default AdminUserManagement