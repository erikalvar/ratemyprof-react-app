import React from "react";

function CreateProfComponent(props) {
  return (
    <div>
      <h1>Professors Create</h1>
      {props.data.professors.map((professor) => (
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

export default CreateProfComponent;
