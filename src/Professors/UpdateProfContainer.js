import React from "react";
import axios from "axios";

export default class UpdateProfContainer extends React.Component {
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

  componentDidMount() {
    axios.get("http://localhost:3000/api/professors/1").then((res) => {
      const professor = res.data;
      console.log(professor);
      this.setState({ professor });
    });
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
      .put("http://localhost:3000/api/professors/1", {
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
            <h1>Professor Update</h1>
            <p>Name</p>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            <p>School</p>
            <input
              type="text"
              value={this.state.school}
              name="school"
              onChange={this.handleChange}
            />
            <p>Title</p>
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
            <p>Department</p>
            <input
              type="text"
              value={this.state.department}
              name="department"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
          <p>
            input: {this.state.name}, {this.state.school}, {this.state.text},{" "}
            {this.state.department}
          </p>
        </form>
      </div>
    );
  }
}
