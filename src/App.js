import React from "react";
import IndexContainer from "./Reviews/IndexContainer"
import ShowContainer from "./Reviews/ShowContainer"
import CreateContainer from "./Reviews/CreateContainer"
import DestroyContainer from "./Reviews/DestroyContainer"
import UpdateContainer from "./Reviews/UpdateContainer"

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexContainer />
        <br />
        <br />
        <br />
        <br />
        <ShowContainer />
        <br />
        <br />
        <br />
        <CreateContainer />
        <br />
        <br />
        <br />
        <DestroyContainer />
        <br />
        <br />
        <br />
        <UpdateContainer />
      </div>
    );
  }
}

export default App;