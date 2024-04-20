import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createAPI } from '../Service/Product'

 function Create() {

    const [proName,setproName] = useState([])
    const [proPrice,setproPrice] = useState([])

    const navigate = useNavigate()

    const check = async()=>{

        if(proName.length == 0){
            toast.warning('Enter Product Name')
        }else if(proPrice.length==0){
            toast.warning('Enter Price ')
        }else{
            console.log(proName,proPrice)
           const op = await createAPI(proName,proPrice)

           if(op[`status`]=='success'){
           
            toast.success(" Element Added ...")
            navigate('/getAll')
           }else{
            toast.error(op[`error`])
           }
            
        }
    } 


    const onCancel=()=>{
        navigate('/getAll')
    }
    return (


      
        //     "id": 2,
        //     "proName": "pen",
        //     "proPrice": 10,
        //     "isDelete": 1
        
        <div className="mt-5">

            <div className="heading"><h2>Create Page</h2></div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form form-div">
                        <div className='mt-5'>
                            <label>Product Name : </label>
                            <input onChange={(e)=>{
                                setproName(e.target.value)

                            }}
                            type="email" className="form-control " />
                        </div>
                        <div className="mt-5">
                            <label>Product Price </label>
                            <input onChange={(e)=>{
                                setproPrice(e.target.value)

                            }}
                            
                            type="number" className="form-control" />
                        </div>
                        <div className='mb-3'>
                           
                        
                            <center>
                                <button onClick={check} className='mt-4 btn btn-success'>
                                 ADD ENTRY
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

export default Create