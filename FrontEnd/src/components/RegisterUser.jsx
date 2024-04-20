import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAPI } from '../Service/UserService'
import { registerAPI } from '../Service/UserService'

function RegisterUser() {

    const [fullName, setfName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [confirmPassword, setConfirmPassword] = useState([])
    const [phoneNo, setPhoneNo] = useState([])

    const navigate = useNavigate()

    const loginCheck = async () => {

        if (fullName.length == 0 || email.length == 0 ||password.length == 0 ||phoneNo.length == 0 ) {
            toast.warning('All fields are mandatory')
        }else if(password != confirmPassword){
            toast.warning("Enter correct Password")
        }
        else {


            console.log(fullName ,email , password, phoneNo);
            const op = await registerAPI(fullName ,email , password, phoneNo)
            
            if (op[`status`] == 'success') {
                onCancel()
                toast.success("Registered User successfully...")
            } else {
                toast.error(op[`error`])

            }


        }





    }


const onCancel=()=>{
    navigate('/login')
}



    return (
        <div className="mt-5">

            {/* fName , lName , salary , email , password */}

            <div className="heading"><h2>Register Page</h2></div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form form-div">

                        <div className="row">
                            <div className='mt-5 col'>
                                <label >Full Name: </label>
                                <input onChange={(e) => {
                                    setfName(e.target.value)

                                }}
                                    type="text" className="form-control " />
                            </div>
                            

                        </div>

                        <div className="row">
                          
                            <div className="mt-5 col">
                                <label >Email : </label>
                                <input onChange={(e) => {
                                    setEmail(e.target.value)

                                }}

                                    type="email" className="form-control" />
                            </div>

                        </div>
                        <div className="mt-5 col">
                                <label >Phone Number : </label>
                                <input onChange={(e) => {
                                    setPhoneNo(e.target.value)

                                }}

                                    type="tel" className="form-control" />
                            </div>

                       
                            <div className='mt-5 col'>
                                <label >Password : </label>
                                <input onChange={(e) => {
                                    setPassword(e.target.value)

                                }}
                                    type="password" className="form-control " />
                            </div>

                            <div className='mt-5 col'>
                                <label >Confirm Password : </label>
                                <input onChange={(e) => {
                                    setConfirmPassword(e.target.value)

                                }}
                                    type="password" className="form-control " />
                            </div>

                   

                       

                        <div className='mb-3'>
                           
                            <center>
                                <button onClick={loginCheck} className='mt-4 btn btn-success'>
                                    REGISTER
                                </button>

                                {/* <Link to='/register'> Register here </Link> */}

                                <button onClick={onCancel} className='mt-4 ms-4 btn btn-primary'>
                                    CANCEL
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

export default RegisterUser