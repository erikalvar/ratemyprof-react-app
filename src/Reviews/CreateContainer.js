import React from 'react';
import axios from 'axios';

export default class CreateContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      professor_id: '',
      rating: '',
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post("http://localhost:3000/reviews", { professor_id: this.state.professor_id, rating: this.state.rating, text: this.state.text })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Review Create</h1>
            <p>prof id</p>
            <input type="text" value={this.state.professor_id} name="professor_id" onChange={this.handleChange} />
            <p>rating</p>
            <input type="text" value={this.state.rating} name="rating" onChange={this.handleChange} />
            <p>text</p>
            <input type="text" value={this.state.text} name="text" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
          <p>input: {this.state.professor_id}, {this.state.rating}, {this.state.text}</p>
        </form>
      </div>
    )
  };
};
