import React from "react";
import axios from "axios";

export default class CreateProfContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      school: "",
      title: "",
      department: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/professors", {
        name: this.state.name,
        school: this.state.school,
        title: this.state.title,
        department: this.state.department,
      })
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
            <h1>Professor Create</h1>
            <p>name</p>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            <p>school</p>
            <input
              type="text"
              value={this.state.school}
              name="school"
              onChange={this.handleChange}
            />
            <p>title</p>
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
            <p>department</p>
            <input
              type="text"
              value={this.state.department}
              name="department"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
          <p>
            input: {this.state.name}, {this.state.school}, {this.state.title},{" "}
            {this.state.department}
          </p>
        </form>
      </div>
    );
  }
}
