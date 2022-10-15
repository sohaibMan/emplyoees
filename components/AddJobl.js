import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddJob(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const addHanlder = () => {
    setShow(true);
  };
  const submitHandler=(e)=>{
    e.preventDefault();
    handleClose();
    props.onSubmit()
}
     
 
 const DummyDepartment=[
    {name:'Informatique'},
    {name:'industrille'},
 ] 
 

  return (
  
    <>
      <button
        onClick={addHanlder}
        className="btn btn-primary"
      >
        Add Job
      </button>
{/*       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submitHandler}>

                {
                  props.AddTemplate.map((item,index)=>
                     <div className="mb-3" key={index}>
                     <input   type={item.type} ref={item.ref} placeholder={item.placeholder} className="form-control" />
                    </div>
                  //
                  )
                }
                
                <div className="mb-3">
                <select ref={props.jobNameRef} className="form-select" aria-label="Default select example">
                        {props.Jobs.map((el,i)=><option key={i} value={el.id}>{el.name}</option>)}
                 </select>
                </div>
                 <div className="mb-3">
                  {/* <select ref={props.depratmentNameRef} className="form-select" aria-label="Default select example">
                        {DummyDepartment.map((el,i)=><option key={i} value={el.id}>{el.name}</option>)}
                 </select> 
                 </div>

            
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  type="submit" >
            Save Changes
          </Button>
        </Modal.Footer>
              </form>
        </Modal.Body>
       
      </Modal> 
    */}
      
    </>
  );
}
export default AddJob;
