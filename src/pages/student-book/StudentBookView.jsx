import AppSingleFormInput from "../../components/AppSingleFormInput";
import AppButton from "../../components/AppButton";
import React from "react";

function StudentBookView(props){
  const {handleSubmit, student, newBookValue, handleNewBookChange, books} = props;
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h4>{student.name}</h4>
      </div>
      <div className="input-group mb-3">
        <AppSingleFormInput value={newBookValue} onValueChange={handleNewBookChange}/>
        <AppButton handleClick={handleSubmit} label={"ADD"} type={"primary"}/>
      </div>
      <ul className="list-group">
        {books.map((book, i) => <li className="list-group-item" key={i}>{book}</li>)}
      </ul>

    </div>
  );
}

export default StudentBookView;