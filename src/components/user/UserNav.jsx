import {Link} from 'react-router-dom'
function UserNav(){
    const handleLogout = () =>{
        localStorage.removeItem('jwt')
    }
    return(
        <>
            <div style={{height:'10vh',width:'100vw',backgroundColor:'gray',display:'flex',
             alignItems:'center',justifyContent:'space-between',paddingLeft:'5rem',paddingRight:'5rem'}}>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link className='btn btn-danger' to='/login' onClick={handleLogout}>Logout</Link>
            </div>
        </>
    )
}
export default UserNav