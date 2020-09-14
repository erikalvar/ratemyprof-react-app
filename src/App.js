import React from "react";
import IndexContainer from "./Reviews/IndexContainer";
import ShowContainer from "./Reviews/ShowContainer";
import CreateContainer from "./Reviews/CreateContainer";
import DestroyContainer from "./Reviews/DestroyContainer";
import UpdateContainer from "./Reviews/UpdateContainer";
import IndexProfContainer from "./Professors/IndexProfContainer";
import ShowProfContainer from "./Professors/ShowProfContainer";
import CreateProfContainer from "./Professors/CreateProfContainer";
import DestroyProfContainer from "./Professors/DestroyProfContainer";
import UpdateProfContainer from "./Professors/UpdateProfContainer";

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
        <br />
        <br />
        <br />
        <IndexProfContainer />
        <br />
        <br />
        <br />
        <br />
        {/* <ShowProfContainer />
        <br />
        <br />
        <br /> */}
        <CreateProfContainer />
        <br />
        <br />
        <br />
        <DestroyProfContainer />
        <br />
        <br />
        <br />
        <UpdateProfContainer />
      </div>
    );
  }
}

export default App;
