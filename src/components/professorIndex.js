import React from "./node_modules/react";
import axios from "./node_modules/axios";

class professorIndex extends React.Component {
  state = { professors: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/professors").then((res) => {
      const professors = res.data;
      this.setState({ professors });
    });
  }

  render() {
    return (
      <ul>
        {this.state.professors.map((professor) => (
          <li>{professor.name}</li>
        ))}
      </ul>
    );
  }
}

export default professorIndex;
