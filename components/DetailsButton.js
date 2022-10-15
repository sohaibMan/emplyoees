import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DetailsButton(props) {
    const [show, setShow] = useState(false);
    const handleClose =() =>setShow(false);
const getId=(e)=>e.target.dataset.id;
const detailsHanlder=(e)=>{
    setShow(true);
// console.log(getId(e));

}
// console.log(props);


  return (
    <>
<button onClick={detailsHanlder} className='btn btn-success' data-id={props.id}>Details</button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        <table className="table table-bordered">

            
                <tbody>
                 
                {
           Object.keys(props.el).map((key,i)=><tr key={i}><th scope="row" >{key}</th><th className="text-muted">{props.el[key]}</th></tr>)
               }     
                </tbody>
                
                
                </table>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DetailsButton;