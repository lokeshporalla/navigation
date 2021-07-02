import React from"react";
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import { Button } from 'react-bootstrap';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
class StaffDetails extends React.Component{

    render()
    {


        return(
            <div>

                <h2 align="center"> Staff Details</h2>

                  <table border="2px" align="center">

                        <tr>
                            <th>CustomerName</th>
                            <th>CustomerAge</th>
                            <th>CustomerNumber</th>
                            <th>CustomerAdress</th>
                           <th>Edit</th>
                           <th>Delete</th>
                        </tr>


                        <tr>
                             <td>customer1</td>
                             <td>00</td>
                             <td>00000000000</td>
                             <td>adress1</td>    
                           <ButtonToolbar className='btntool'>
                             <td><Button  variant="flat" size="lg"><a ><Link to="/EditFrom">Edit</Link></a></Button></td>
                             </ButtonToolbar>
                             
                             <td><Button  variant="flat1" size="lg"><a ><Link to="/DeleteForm">Delete</Link></a></Button></td>
                            

                        </tr>
                        <tr>
                             <td>customer2</td>
                           
                             <td>00</td>
                             <td>00000000000</td>
                             <td>adress2</td>    
                             <td><button className="btn1">Edit</button></td>
                             <td><button className="btn2">Delete</button></td>
                           
                             
                        </tr>
                        <tr>
                             <td>customer2</td>
                             <td>00</td>
                             <td>00000000000</td>
                             <td>adress3</td>    
                             <td><button  className="btn1">Edit</button></td>
                             <td><button className="btn2">Delete</button></td>
                           

                        </tr>



                  </table>
                  <>
                  <style type="text/css">
    {`
    .btn-flat {
      background-color:green;
      color: white;
      text-decoration:none;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .btn-flat1{
        background-color:red;
        color:white;
    }
    `}
  </style>
                  </>
                  
            </div>

        );
    }


}
export default StaffDetails;