import React from "react";
import axios from "axios";
import ShowProfComponent from "./ShowProfComponent";

class App extends React.Component {
  state = { professor: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/api/professors/1").then((res) => {
      const professor = res.data;
      console.log(res.data);
      this.setState({ professor });
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.professor}</p>
      </div>
    );
  }
}

export default App;
