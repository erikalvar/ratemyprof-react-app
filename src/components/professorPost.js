import React from "react";
import axios from "axios";

export default class professorPost extends React.Component {
  state = {
    name: "",
    school: "",
    title: "",
    department: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
      school: event.target.value,
      title: event.target.value,
      department: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const professor = {
      name: this.state.name,
      school: this.state.school,
      title: this.state.title,
      department: this.state.department,
    };

    axios
      .post(`http://localhost:3000/professors`, { professor })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Professor Name:
            <input type="text" name="name" onChange={this.handleChange} />
            Professor School:
            <input type="text" school="school" onChange={this.handleChange} />
            Professor Title:
            <input type="text" title="title" onChange={this.handleChange} />
            Professor Department:
            <input
              type="text"
              department="department"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
