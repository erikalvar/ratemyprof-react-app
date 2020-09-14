import React from "react";
import axios from "axios";
import IndexComponent from "./IndexComponent"

class IndexContainer extends React.Component {
  state = { reviews: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/reviews").then((res) => {
      const reviews = res.data;
      console.log(res.data)
      this.setState({ reviews });
    });
  }

  render() {
    return (
      <div>
        <IndexComponent
          data={this.state}
        />
      </div>
    );
  }
}

export default IndexContainer;