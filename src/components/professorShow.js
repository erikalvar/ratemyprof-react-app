import React from "./node_modules/react";
import axios from "./node_modules/axios";

class professorShow extends React.Component {
  state = { professor: {} };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/professors/${this.state.professor.id}`)
      .then((res) => {
        const professor = res.data;
        this.setState({ professor });
      });
  }

  render() {
    return <ul>{this.state.professor}</ul>;
  }
}

export default professorShow;
