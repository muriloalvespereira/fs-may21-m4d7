import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import Loading from "./Loading";

class CommentsArea extends Component {
  state = {
    asin: this.props.asin,
    comments: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
        },
      }
    );
    let commentBooks = await response.json();
    this.setState({
      asin: this.props.asin,
      comments: commentBooks,
      isLoading: false
    });
  };

  componentDidUpdate = async (prevProps, PrevState) => {
    if(this.props.asin !== PrevState.asin){
      console.log("inside", this.props.asin)
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
          },
        }
      );
      let commentBooks = await response.json();
      this.setState({
        asin: this.props.asin,
        comments: commentBooks,
        isLoading: false
      });
    }
  };

  deleteComment = async (e) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + e,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjk1ZGIzNTgxNzAwMTVjMjI3MjYiLCJpYXQiOjE2MjUwNTc2MzAsImV4cCI6MTYyNjI2NzIzMH0.PCebFyd28A7h5LkwblkqMU8Gf3BXrcfKepkegk76eaw",
          },
        }
      );
      if (response.ok) {
        alert("Comment Deleted");
        this.componentDidMount()

      } else alert("We had a problem to delete it");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
       {this.state.isLoading && <Loading />}
        <ListGroup>
          {this.state.comments
            .map((comment) => (
              <div key={comment._id} className="d-flex justify-content-between">
                <ListGroup.Item className="m-2">
                  {comment.comment}
                </ListGroup.Item>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => this.deleteComment(comment._id)}
                >
                  Delete
                </Button>
              </div>
            ))
            .slice(-10)}
        </ListGroup>
      </>
    );
  }
}

export default CommentsArea;
