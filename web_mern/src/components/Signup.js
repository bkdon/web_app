import React from 'react';
import { Paper, withStyles } from '@material-ui/core';
import axios from 'axios';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class Signup extends React.Component {

  constructor(props){
    super(props);

    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onsubmit = this.onsubmit.bind(this);

    this.state ={
      firstName: "",
      lastName: "",
      email: "",
      password:""
    }
  }

  onChangefirstName(e){
    this.setState({
        firstName: e.target.value
    });
  }
  
  onChangelastName(e){
    this.setState({
        lastName: e.target.value
    });
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
    console.log(this.state.firstName+" this is name")
     e.preventDefault();

     const user = {
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         email: this.state.email,
         password: this.state.password
     }

     console.log(user);

     axios.post('http://localhost:5000/users/signup', user)
     .then(res => console.log(res.data));
   

     this.setState({
         username:''
     })

     window.location = "/login";
         
 }
    render() {
        const { classes } = this.props;

        return (
          <div style={{height: 500}}>
          <div className="container">
            <Paper className={classes.padding} style={{paddingTop: 10, marginTop: 40}}>
              <h3 style={{textAlign: "center"}}>Sign Up</h3><br/>
              <div className="container">
              <div class="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4">First Name</label>
                      <input type="email" className="form-control" placeholder="Brad" id="inputEmail4" onChange={this.onChangefirstName} value={this.state.firstName}/>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword4">Last Name</label>
                      <input type="text" className="form-control" placeholder="Gibson" id="inputLastname" onChange={this.onChangelastName} value={this.state.lastName}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">Email Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="abc@gmail.com"  onChange={this.onChangeemail} value={this.state.email}/>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress2">Password</label>
                    <input type="password" className="form-control" id="inputAddress2"  onChange={this.onChangepassword} value={this.state.password}/>
                  </div>
                  
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{marginLeft: 480}} onClick={this.onsubmit}>Register</button>
                  </div>
            </Paper>
            </div>
            </div>
        );
    }
}

export default withStyles(styles)(Signup);