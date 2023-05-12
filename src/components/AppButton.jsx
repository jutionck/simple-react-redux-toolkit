import React, {Component} from 'react';

class AppButton extends Component {
  render() {
    const {handleClick, label, type} = this.props;
    return <button onClick={handleClick} className={`btn btn-${type}`}>{label}</button>
  }
}

export default AppButton;