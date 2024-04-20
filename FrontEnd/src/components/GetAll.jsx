import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAllAPI } from '../Service/Product'
import { deleteAPI } from '../Service/Product'

function GetAll() {



    const [proList,setproList] = useState([])
  
    let ctr = 0

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
           
                const response = await getAllAPI();
                setproList(response.data);

        };

        fetchData();
    }, []);


    const updateElement =async(id)=>{
        // console.log("id is",id)
        navigate(`/update/${id}`)
    //     const response = await deleteAPI(id);

    //     const op = await getAllAPI();
    //             setproList(op.data);

    //    toast.success(response[`data`])
    } 
   

    

    const deleteElement =async(id)=>{
        console.log("id is",id)

        const response = await deleteAPI(id);

        const op = await getAllAPI();
                setproList(op.data);

       toast.success(response[`data`])
    } 


    const createPage=()=>{
        navigate('/Create')
    }


    return (
        <div className="mt-5">

            <div className="heading"><h2>All ELEMENT</h2></div>

<button onClick={createPage} className="btn btn-primary">ADD DATA</button>

            <table className="table  table-striped border mt-5">
                <thead  >
                    <tr>
                        <th>ID</th>
                        <th>PRO NAME</th>
                        <th>PRO PRICE </th>
                        <th> EDIT </th>
                        <th> DELETE </th>
                    </tr>


                </thead>

                <tbody>
                    {proList.map((product)=>{
                        return(
                            <tr>
                                <td>{ctr = ctr + 1}</td>
                                <td>{product[`proName`]}</td>
                                <td>{product[`proPrice`]}</td>
                                <td>
<button onClick={()=>updateElement(product.id)} className="btn btn-primary">EDIT</button>

                                </td>
                                <td>
<button onClick={()=>deleteElement(product.id)} className="btn btn-danger">DELETE</button>

                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        
        </div >
    )
    
}

export default GetAll