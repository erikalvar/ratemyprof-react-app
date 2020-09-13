import React from "react";



function ShowComponent(props) {
  return (
    <div>
      <h1>Reviews Show</h1>
      {props.data.review.map((review) => (
        <div>
          <p>Name: {review.name}</p>
          <p>School: {review.school}</p>
          <p>Department: {review.department}</p>
          <p>Rating: {review.rating}</p>
          <p>Text: {review.text}</p>
          <p>Professord ID: {review.professor_id}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default ShowComponent;