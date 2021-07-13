import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Textarea extends Component {
  state = {
    commentsAdd: {
      comment: "",
      rate: 0,
      elementId: this.props.itemId,
    },
  };

  handleComment = (key, value) => {
    this.setState({
      commentsAdd: {
        ...this.state.commentsAdd,
        [key]: value,
      },
    });
  };

  addComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentsAdd),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
          },
        }
      );
      if (response.ok) {
        alert("Comment Added!");
        this.setState({
          commentsAdd: {
            comment: "",
            rate: 0,
            elementId: this.props.bookId,
          },
        });
      } else {
        alert("YOU CAN NOT ADD A COMMENT");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addComment}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.commentsAdd.comment}
              onChange={(e) => {
                this.handleComment("comment", e.target.value);
              }}
              placeholder="Add your comment here!"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>How many stars?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.commentsAdd.rate}
              onChange={(e) => this.handleComment("rate", e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </>
    );
  }
}

export default Textarea;
