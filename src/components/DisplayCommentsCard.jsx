import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentsArea from "./CommentsArea ";

class DisplayCommentsCard extends Component {
  state = {
    showComments: false,
  };

  render() {
    return (
      <Card className="w-100" style={{ width: "18rem" }}>
        <Card.Body>
          <CommentsArea asin={this.props.asin} />
        </Card.Body>
      </Card>
    );
  }
}

export default DisplayCommentsCard;
