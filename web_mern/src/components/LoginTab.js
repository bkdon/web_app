import React from 'react';
import { Paper, withStyles } from '@material-ui/core';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

const customStyles = {
  content : {
    top                   : '38%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 :  800,
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#deffd4'
  }
};

class LoginTab extends React.Component {

  constructor(props){
    super(props);

    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onsubmit = this.onsubmit.bind(this);

    this.state ={
      email: "",
      password:""
    }
  }

  onChangeemail(e){
    this.setState({
        email: e.target.value
    });
  }

  onChangepassword(e){
    this.setState({
        password: e.target.value
    });
  }
  
  onsubmit(e){
     e.preventDefault();

     const user = {
         email: this.state.email,
         password: this.state.password
     }

     console.log(user);

     axios.post('http://localhost:5000/users/login', user)
     .then(res => console.log(res.data));
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 10500
    })

     this.setState({
         username:''
     })

     window.location = "/home";
         
 }
    render() {
        const { classes } = this.props;

        return (
          <div style={{height: 500}}>
          <div className="container">
            <Paper className={classes.padding} style={{paddingTop: 20, marginTop: 40}}>
              <h3 style={{textAlign: "center"}}>Login</h3><br/>
              <div className="container">
                  <div className="form-group">
                    <label for="inputAddress">Username</label>
                    <input type="text" className="form-control" id="inputAddress" onChange={this.onChangeemail} value={this.state.email}/>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress2">Password</label>
                    <input type="password" className="form-control" id="inputAddress2" onChange={this.onChangepassword} value={this.state.password} />
                  </div>
                  
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success btn-lg" style={{marginLeft: 490}} onClick={this.onsubmit}>Submit</button>
                  </div>
            </Paper>
            </div>
            </div>
        );
    }
}

export default withStyles(styles)(LoginTab);