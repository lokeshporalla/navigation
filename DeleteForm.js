import React from 'react';
import Example1 from './Example1';
import { Button } from 'react-bootstrap';
class DeleteForm extends React.Component{

    render()
    {
       
        return(
            <div>
                <h1 align="center">Your Record   Successfully Removed</h1>
                <Example1 />
                <> <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="sm">
    flat button
  </Button>
</>
  
            </div>
        );
    }
}
export default DeleteForm;
