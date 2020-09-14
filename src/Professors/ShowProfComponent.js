import React from "react";

function ShowProfComponent(props) {
  return (
    <div>
      <h1>Professors Show</h1>
      {props.data.professor.map((professor) => (
        <div>
          <p>Name: {professor.name}</p>
          <p>School: {professor.school}</p>
          <p>Title: {professor.title}</p>
          <p>Department: {professor.department}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default ShowProfComponent;
