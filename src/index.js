import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: ""
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  nameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  emailHandler = (event) =>{
    this.setState({
      userEmail: event.target.value
    });
  }

  passwordHandler = (event) => {
    this.setState({
      userPassword: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert(`${this.state.userName} Registered Successfully!!`);
    console.log(this.state);
    this.setState({
      userName: "",
      userEmail: "",
      userPassword: ""
    });
    event.preventDefault();
  }

  //onSubmit={this.handleSubmit}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>User Registration</h1><br></br><br></br>
        <label>User Name:</label><br></br>
        <input type="text" value={this.state.userName} onChange={this.nameHandler} /><br></br>
        <label>User Email:</label><br></br>
        <input type="email" value={this.state.userEmail} onChange={this.emailHandler} /><br></br>
        <label>Password:</label><br></br>
        <input type="password" value={this.state.userpassword} onChange={this.passwordHandler} /><br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('root'));