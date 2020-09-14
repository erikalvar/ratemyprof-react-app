import React from "react";
import axios from "axios";
import IndexProfComponent from "./IndexProfComponent";

class IndexProfContainer extends React.Component {
  state = { professors: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/professors").then((res) => {
      const professors = res.data;
      console.log(res.data);
      this.setState({ professors });
    });
  }

  render() {
    return (
      <div>
        <IndexProfComponent data={this.state} />
      </div>
    );
  }
}

export default IndexProfContainer;
