import {Component} from 'react';
import {addAgeAction, changeNameAction} from "./state/StudentSlice";
import {connect} from "react-redux";

class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onNameChange = (event) => this.setState({name: event.target.value});

  onAddAgeClick = () => this.props.addAgeAction();

  onSubmit = () => this.props.changeNameAction({name: this.state.name});
  render() {
    return (
      this.props.view({
        nameValue: this.state.name,
        handleNameChange: this.onNameChange,
        handleSubmit: this.onSubmit,
        handleAddAgeClick: this.onAddAgeClick,
        student: this.props.student
      })
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);