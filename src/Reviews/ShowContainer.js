import React from "react";
import axios from "axios";
import ShowComponent from "./ShowComponent";

class App extends React.Component {
  state = { review: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/api/reviews/1").then((res) => {
      const review = res.data;
      console.log(res.data);
      this.setState({ review });
    });
  }

  render() {
    return (
      <div>
        <ShowComponent data={this.state} />
      </div>
    );
  }
}

export default App;
