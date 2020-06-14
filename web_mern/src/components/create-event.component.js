import React, { Component } from 'react';
import axios from 'axios';
import App from '../App.css';



export default class CreateUsers extends Component {

    constructor(props){
        super(props);

       
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                username : '',
                
            }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value

        });

    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data));
            
        
        this.setState({
            username: ''
        })
        window.location = '/create';
  
    }

    
    render(){
        return(
           <div>
               <div class="row">
               <div className="column">
               <img  src="/Images/bparty.jpg" alt=""/><br/>
               </div></div>

               <h3>Create new Event</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>EventName: </label>
                       <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />  
                       
                        </div>

                        <div className="form-group">
                            <input type="submit" value="create Event" className="btn btn-primary"/>
                            


                        </div>
                        
               </form>
           </div>
        )


    }



}