import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useSelector } from 'react-redux';
import CustomSelect from './CustomSelect';

function EditButton(props) {
  // const getId=(e)=>e.target.dataset.id;
  const [show, setShow] = useState(false);
  const handleClose =() =>setShow(false);
  const editHanlder=(e)=>{
    setShow(true)
    // console.log(getId(e));
}  
// console.log(props);

// const DummyDepartment=[
// {name:'Informatique'},
// {name:'industrille'},
// ] 


// const {filteredjobs}=useSelector(state=>state.jobs)
const SubmitHanlder=(e)=>{
e.preventDefault(e);
// props.refrences['jobNameRef'].current.value 
// console.log(props.refrences['jobNameRef'].current)
// props.refrences['jobNameRef'].current &&
  props.onSubmit({...props.el});
// console.log({...props});
setShow(false)
// console.log('clicked')
// console.log(props.refrences.depratmentNameRef.current.value)

}
// const EditFormSubmitHandler = (el) => {
//   const Employee = {
//     birthday: birthdayRef.current.value || el.birthday,
//     depratmentName: depratmentNameRef.current.value || el.depratmentName,
//     email: emailRef.current.value || el.email,
//     id: idRef.current.value || el.id,
//     jobName: jobNameRef.current.value || el.jobName,
//     joiningDate: joiningDateRef.current.value || el. joiningDate,
//     name: nameRef.current.value || el.name,
//     phone: phoneRef.current.value || el.phone,
//     salary: salaryRef.current.value || el.salary,
//   };
//   dispatch(EditEmplooye(Employee))
//   dispatch(EditEmplooyeDb({Employee}))
// //  console.log(Employee)
// };
// console.log(props);
  return (
    <>
      <button onClick={editHanlder}  className='btn btn-primary'  data-id={props.id}>Edit</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        <form onSubmit={SubmitHanlder}>     
        <div className='edit-form'>

        {
         Object.keys(props.EditFormStructure).map((key,i)=>
         {
// console.log(key);
return (

  <div key={i} className="mb-2">
         <label className='mb-1' htmlFor={key} >{key}</label>
          <input id={key} ref={props.refrences[`${key}Ref`]} type={props.EditFormStructure[key].type} disabled={key==='id'?true:false} className="form-control"  placeholder={props.el[key]}/>  
    
    </div>
             ) 
    }
    )
         
        } 
         
      {/* <div className="mb-3">
                   <label className='mb-1'>Depratment Name</label>
                  <select ref={props.refrences.depratmentNameRef} className="form-select" aria-label="Default select example">
                    {DummyDepartment.map((el,i)=><option key={i} value={el.id}>{el.name}</option>)}
                 </select>
      </div>  
      <div className="mb-3">
                   <label className='mb-1'>Job Name</label>
                   <select  ref={props.refrences.jobNameRef}  className="form-select" aria-label="Default select example">
                      <option   defaultValue>{props.el.jobName}</option> 
            
                      {filteredjobs.filter(element=>element.name!==props.el.jobName).map((element,i)=><option key={i} value={element.id}>{element.name}</option>)}
                   </select>
                   </div> 
                */}
<CustomSelect {...props}/>                
      </div>
          
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
        </form>  
          </Modal.Body>
      </Modal>
    </>
  );
}
export default EditButton;