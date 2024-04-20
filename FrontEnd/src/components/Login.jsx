import { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"

import { loginAPI } from "../Service/UserService"
import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'
import { loginAction } from '../features/userSlice'

function Login(){
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    const navigate = useNavigate()

    // const dispatch = useDispatch()

    const onLogin = async () => {
        // client side validation
        if (email.length === 0) {
          toast.warning('enter email')
        } else if (password.length === 0) {
          toast.warning('enter password')
        } else {
          const result = await loginAPI(email, password)
            if(result['status']==='success')
            {
            const{loginId , loginName}=result['data']

            sessionStorage.setItem('loginId', loginId)
            sessionStorage.setItem('loginName', loginName)
           
           const name = sessionStorage.getItem('loginName')

        
           console.log("name",name)


            // dispatch(loginAction())
            //navigate('/Home')
               
                toast.success('WELCOME')
                navigate('/Home')
            }else{
                toast.error('invalid email or password')
            }
        }
        
    }
    return(
        <div>
            <h2 className="heading">LOGIN</h2>
            <div className="row">
                <div className="col"></div>
                <div className="col">
               <div className='form'>
               <div class="mb-3">
                    <label  class="form-label">Email address</label>
                        <input 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Password</label>
                        <input
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <div className='mb-3'>
                    <div>
                     Don't have an account yet?{' '}
                        <Link to='/register'>Register here</Link>
                    </div>
                <button onClick={onLogin} type="submit" class="btn btn-primary">Login</button>
                </div>
               </div>
                
                
                </div>
                <div className="col"></div>
            </div>
        </div>
    )

}
export default Login