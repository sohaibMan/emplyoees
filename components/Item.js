import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditEmplooye, EditEmplooyeDb, remove, RemoveUserDb } from "../store/employeeSlice";
import DetailsButton from "./DetailsButton";
import EditButton from "./EditButton";

function Item(props) {
  // const dispatch = useDispatch();
  // const { employees } = useSelector((state) => state.employees);
  // const deleteHanlder = (e) => {
  //   const response = confirm(
  //     `Do you wanna really remove ${e.target.dataset.name} who has the id :${e.target.dataset.id}`
  //   );

  //   if (response) {
  //     dispatch(remove({ id: e.target.dataset.id, employees }));
  //     dispatch(RemoveUserDb({ id: e.target.dataset.id }));
  //   }
  // };
  // const idRef = useRef();
  // const nameRef = useRef();
  // const joiningDate = useRef();
  // const email = useRef();
  // const birthday = useRef();
  // const phone = useRef();
  // const salary = useRef();
  // const depratmentNameRef = useRef();
  // const jobNameRef = useRef();
  // const EditFormStructure = {
  //   id: { type: "text", ref: idRef },
  //   name: { type: "text", ref: nameRef },
  //   joiningDate: { type: "date", ref: joiningDate },
  //   email: { type: "email", ref: email },
  //   birthday: { type: "date", ref: birthday },
  //   phone: { type: "number", ref: phone },
  //   salary: { type: "number", ref: salary },
  // };
  // const EditFormSubmitHandler = () => {
  //   const Employee = {
  //     birthday: birthday.current.value || props.birthday,
  //     depratmentName: depratmentNameRef.current.value || props.depratmentName,
  //     email: email.current.value || props.email,
  //     id: idRef.current.value || props.id,
  //     jobName: jobNameRef.current.value || props.jobName,
  //     joiningDate: joiningDate.current.value || props. joiningDate,
  //     name: nameRef.current.value || props.name,
  //     phone: phone.current.value || props.phone,
  //     salary: salary.current.value || props.salary,
  //   };
  //   dispatch(EditEmplooye(Employee))
  //   dispatch(EditEmplooyeDb({Employee}))
 
  // };

  // console.log(props);
  return (
    <>
      <tr id={props.el.id}>
        {props.children}
        {/* <th scope="row">{props.el.id}</th> */}
        {/* <td>{props.el.name}</td> */}
        {/* <td>{props.el.email}</td> */}
        <td>
          <DetailsButton {...props} />
        </td>
        <td>
          <EditButton
            // depratmentNameRef={depratmentNameRef}
            // onSubmit={EditFormSubmitHandler}
            // jobNameRef={jobNameRef}
            // EditFormStructure={EditFormStructure}
            {...props}
          />
        </td>
        <td>
          <button
            onClick={props.deleteHanlder}
            className="btn btn-danger"
            data-name={props.el.name}
            data-id={props.el.id}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
