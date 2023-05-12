import React, {Component} from 'react';

class AppSingleFormInput extends Component {
  render() {
    const {value, onValueChange} = this.props;
    return <input
      type="text"
      className="form-control"
      placeholder="Name"
      aria-label="Name"
      value={value} onChange={onValueChange}
    />
  }
}

export default AppSingleFormInput;