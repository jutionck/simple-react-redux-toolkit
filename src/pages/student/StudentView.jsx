import React, {Component} from 'react';
import {addAgeAction, changeNameAction} from "./state/StudentSlice";
import {connect} from "react-redux";

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleNameChange = (event) => this.setState({name: event.target.value});

  handleAddAgeClick = () => this.props.addAgeAction();

  handleSubmit = () => this.props.changeNameAction({name: this.state.name});
  render() {
    const {student} = this.props
    return (
      <div className="container mt-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Todo"
            value={this.state.name} onChange={this.handleNameChange}
          />
          <button className="btn btn-outline-primary" onClick={this.handleSubmit}>CHANGE NAME</button>
          <button className="btn btn-outline-warning" onClick={this.handleAddAgeClick} >ADD AGE</button>
      </div>

        <div className="text-center">
          <h4>{student.name}</h4>
          <span className="badge text-bg-light"><h5>{student.age}</h5></span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { student: state.studentReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNameAction: (name) => dispatch(changeNameAction(name)),
    addAgeAction: () => dispatch(addAgeAction()),
  };
};

// atau pake cara ini juga bisa
// const mapDispatchToProps = {
//   addAgeAction,
//   changeNameAction
// }

export default connect(mapStateToProps, mapDispatchToProps)(StudentView);