import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAPI } from '../Service/UserService'

 function LoginUser() {

    const [email,setEmail] = useState([])
    const [password,setPassword] = useState([])

    const navigate = useNavigate()

    const loginCheck = async()=>{

        if(email.length == 0){
            toast.warning('Enter email')
        }else if(password.length==0){
            toast.warning('Enter Password')
        }else{



           const op = await loginAPI(email,password)

           if(op[`status`]=='success'){
           navigate('/getAll')
            toast.success("User Login successfully...")
           }else{
            toast.error(op[`error`])

           }

        //    console.log(`email is ${email}`)
        // console.log(`password is ${password}`)
        // console.log(`result is ${op[`result`]}`)
            
        }
    } 
    return (
        <div className="mt-5">

            <div className="heading"><h2>Login Page</h2></div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form form-div">
                        <div className='mt-5'>
                            <label forhtml=''>EMAIL : </label>
                            <input onChange={(e)=>{
                                setEmail(e.target.value)

                            }}
                            type="email" className="form-control " />
                        </div>
                        <div className="mt-5">
                            <label forhtml=''>PASSWORD : </label>
                            <input onChange={(e)=>{
                                setPassword(e.target.value)

                            }}
                            
                            type="password" className="form-control" />
                        </div>
                        <div className='mb-3'>
                            <div className='mt-3'>
                                Dont have an account yet? 
                                <Link to='/register'> Register here </Link>
                            </div>
                            <center>
                            <button onClick={loginCheck}  className='mt-4 btn btn-success'>
                                Login
                            </button>
                            </center>
                            
                        </div>
                    </div>

                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default LoginUser