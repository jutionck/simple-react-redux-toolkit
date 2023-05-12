import React from 'react';
import AppSingleFormInput from "../../components/AppSingleFormInput";
import AppButton from "../../components/AppButton";

function StudentView(props){
  const {handleNameChange, handleSubmit, handleAddAgeClick, nameValue, student} = props;
  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <AppSingleFormInput value={nameValue} onValueChange={handleNameChange}/>
        <AppButton handleClick={handleSubmit} label={"CHANGE NAME"} type={"primary"}/>
        <AppButton handleClick={handleAddAgeClick} label={"ADD AGE"} type={"warning"}/>
      </div>
      <div className="text-center">
        <h4>{student.name}</h4>
        <span className="badge text-bg-light"><h5>{student.age}</h5></span>
      </div>
    </div>
  );
}

export default StudentView;