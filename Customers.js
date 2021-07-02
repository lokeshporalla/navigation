import React from"react";

class CustomersDetails extends React.Component{

    render()
    {

        return(
            <div>

                 <h1 align="center">Customer Details</h1>
                  <table border="3px" align="center">

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
                             <td>000000000</td>
                             <td>adress1</td> 
                             <td><button  className="btn1">Edit</button></td>
                             <td><button className="btn2">Delete</button></td>   

                        </tr>
                        <tr>
                             <td>customer2</td>
                             <td>00</td>
                             <td>00000000</td>
                             <td>adress2</td>  
                             <td><button  className="btn1">Edit</button></td>
                             <td><button className="btn2">Delete</button></td>  

                        </tr>
                        <tr>
                             <td>customer3</td>
                             <td>00</td>
                             <td>0000000000</td>
                             <td>adress3</td> 
                             <td><button  className="btn1">Edit</button></td>
                             <td><button className="btn2">Delete</button></td>   

                        </tr>



                  </table>

            </div>

        );
    }


}
export default CustomersDetails;