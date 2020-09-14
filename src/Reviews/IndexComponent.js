import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";



function IndexComponent(props) {
  return (
    <div>
      <h1>Reviews Index</h1>
      {props.data.reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Text: {review.text}</p>
          <p>Professord ID: {review.professor_id}</p>
          {/* <Link to={`/reviews/${review.id}`}>{review.id}</Link> */}
          <br />
        </div>
      ))}
    </div>
  );
}

export default IndexComponent;