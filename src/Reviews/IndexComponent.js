import React from "react";



function IndexComponent(props) {
  return (
    <div>
      <h1>Reviews Index</h1>
      {props.data.reviews.map((review) => (
        <div>
          <p>Rating: {review.rating}</p>
          <p>Text: {review.text}</p>
          <p>Professord ID: {review.professor_id}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default IndexComponent;