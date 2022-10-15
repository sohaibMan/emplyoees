import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { filterJobsbyname } from "../store/jobsSlice";
import CustomSelect from "./CustomSelect";

function AddEmploye(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const addHanlder = () => {
    setShow(true);
  };
  const submitHandler=(e)=>{
    e.preventDefault();
    handleClose();
    // console.log(props.refrences);
// console.log('clicked');
// Object.keys(props.refrences).map(el=>
  
  // console.log(props.refrences[el].current))
    props.onAdd()
}
//  console.log(props);    
 
//  const DummyDepartment=[
//     {name:'Informatique'},
//     {name:'industrille'},
//  ] 
// CustomFiltedDep.filter(el=>el.DepratmentName!==e.target.value)

// }
// let CustomFiltedDep=props.Jobs;
const dispatch=useDispatch()
// let filtedJobs=props.Jobs;
// const SelctChangeHandler=(e)=>{
//   if(e.target.value===e.target[0].innerText)setIsSelcted(false)
//   else  {
//     setIsSelcted(true)
//     dispatch(filterJobsbyname(e.target.value))
//   }

// }
// const [isSelcted,setIsSelcted]=useState(false);
// useEffect(
//   ()=>{
//     CustomFiltedDep=CustomFiltedDep.filter(el=>el.DepratmentName===e.target.value)
//   ,[SelctChangeHandler]
//   }
//   )


// console.log("🚀 ~ file: AddElment.js ~ line 31 ~ AddEmploye ~ CustomFiltedDep", CustomFiltedDep)
  return (
  
    <>
      <button
        onClick={addHanlder}
        className="btn btn-primary"
      >
        Add Employe
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submitHandler}>

                {
                  props.AddTemplate.map((item,index)=>
                     <div className="mb-3" key={index}>
                     <input required  type={item.type} ref={props.refrences[`${item.name}Ref`]} placeholder={item.placeholder} className="form-control" />
                    </div>
                  //
                  )
                }
                
{/*               
                 <div className="mb-3">
                  <select required onChange={SelctChangeHandler} ref={props.refrences['depratmentNameRef']} className="form-select" aria-label="Default select example">
                      
                    <option  defaultValue>Choose a department</option>
                        {
                        props.departments.map((el,i)=><option key={i} value={el.id}>{el.name}</option>)
                        }
                 </select>
                 </div>
              {

             isSelcted &&  <div className="mb-3">
                <select required ref={props.refrences['jobNameRef']} className="form-select" aria-label="Default select example">
                <option  defaultValue>Choose a Job</option>
               {filtedJobs.map((el,i)=><option key={i} value={el.id}>{el.name}</option>)}
                 </select>
                </div>
 }  */}
            <CustomSelect required={true} {...props}></CustomSelect>
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
    </>
  );
}
export default AddEmploye;
