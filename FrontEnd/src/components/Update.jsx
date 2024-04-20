// import { useState,useEffect } from 'react'
// import { Link, useNavigate,useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
// // import { createAPI } from '../Service/Product'
// import { updateAPI } from '../Service/Product'
// import { getByIdAPI } from '../Service/Product'

//  function UpdateUser() {

//     const [product,setProduct] = useState([])
//     const [name,setName] = useState({
//       name : ''
//     })
//     const [price,setPrice] = useState({
//       pri :''
//     })
    

//     const navigate = useNavigate()



//     const{id} = useParams()
    

//     useEffect(() => {
//       const fetchData = async() => {
         
//         const op = await getByIdAPI(id)
//         const result = op.data[0]
//        console.log(op.data)
//       //  console.log()
//         setProduct(result)

//         // console.log(result)
              

//       };

//       fetchData();
//   }, []);


//   const onUpdate=()=>{
    
//     check()

//   }


//     const onCancel=()=>{
//         navigate('/getAll')
//     }
//     return (



        
//         <div className="mt-5">

//             <div className="heading"><h2>Update Page</h2></div>
//             <div className="row">
//                 <div className="col"></div>
//                 <div className="col">
//                     <div className="form form-div">
//                         <div className='mt-5'>
//                             <label>Product Name : </label>
//                             <input onChange={(e)=>{
//                                 setName({...price , name:e.target.value})

//                             }}
//                            value={product.proName} type="email" className="form-control " />
//                         </div>
//                         <div className="mt-5">
//                             <label>Product Price </label>
//                             <input onChange={(e)=>{
//                                 setPrice({...price , pri:e.target.value})

//                             }}
                            
//                             value={product.proPrice}  type="number" className="form-control" />
//                         </div>
//                         <div className='mb-3'>
                           
                        
//                             <center>
//                                 <button onClick={onUpdate} className='mt-4 btn btn-success'>
//                                  UPDATE
//                                 </button>

//                                 {/* <Link to='/register'> Register here </Link> */}

//                                 <button onClick={onCancel} className='mt-4 ms-4 btn btn-primary'>
//                                     CANCEL
//                                 </button>
//                             </center>
                            
//                         </div>
//                     </div>

//                 </div>
//                 <div className="col"></div>
//             </div>
//         </div>
//     )
//   }

// export default UpdateUser


import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateAPI } from '../Service/Product'
import { getByIdAPI } from '../Service/Product'

function UpdateUser() {

    const [product, setProduct] = useState({ proName: '', proPrice: '' });

    const navigate = useNavigate();

    const { id } = useParams();


    
    useEffect(() => {
        const fetchData = async () => {
            const op = await getByIdAPI(id);
            const result = op.data[0];
            setProduct(result);
        };
        fetchData();
    }, []);

    const onUpdate = async () => {

      const body={
        "proName" : product.proName,
        "proPrice" : product.proPrice

      }

      
      const op = await updateAPI(id,body);

      toast.success(op.data)
      onCancel()
      // console.log(product)

      // if()

      // toast.success
    }

    const onCancel = () => {
        navigate('/getAll');
    }

    const handleNameChange = (e) => {
        setProduct(prevProduct => ({
            ...prevProduct,
            proName: e.target.value // Update only the proName field
        }));
    }

    const handlePriceChange = (e) => {
        setProduct(prevProduct => ({
            ...prevProduct,
            proPrice: e.target.value // Update only the proPrice field
        }));
    }

    return (
        <div className="mt-5">
            <div className="heading"><h2>Update Page</h2></div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form form-div">
                        <div className='mt-5'>
                            <label>Product Name : </label>
                            <input
                                onChange={handleNameChange}
                                value={product.proName}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="mt-5">
                            <label>Product Price</label>
                            <input
                                onChange={handlePriceChange}
                                value={product.proPrice}
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div className='mb-3'>
                            <center>
                                <button onClick={onUpdate} className='mt-4 btn btn-success'>
                                    UPDATE
                                </button>
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

export default UpdateUser;
