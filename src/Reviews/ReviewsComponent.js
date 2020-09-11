import React from "react";
import axios from "axios";


class ReviewsComponent extends React.Component {
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
        <h1>Reviews Index</h1>
        {this.state.reviews.map((review) => (
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
}

export default ReviewsComponent;