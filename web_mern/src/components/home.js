import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.location}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    {/* <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td> */}
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    //this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/exercises/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     })
//   }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>ReSerVe yOur TiMe</h3>
      
        <div>
        <img src="/Images/wedding.jpg"alt=""/>
      
        </div>

        <div>
        <img src="bparty.jpg" alt=""/>
      
        </div>

       
        <br/><br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>EventName</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Location</th>
              <th>Date</th>
              
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}