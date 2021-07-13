import { Component } from "react";
import { Card } from "react-bootstrap";
import Comments from "./Comments";

class DisplayCard extends Component {
  state = {
    showComments: false,
  };

  commentsSection = (e) => {
    this.props.commentsSection(e);
    if (this.state.showComments === false) {
      this.setState({
        showComments: true,
      });
    } else {
      this.setState({
        showComments: false,
      });
    }
  };

  render() {
    return (
      <Card className="w-100" style={{ width: "18rem" }}>
        <Card.Img
          className="card-height w-100"
          variant="top"
          src={this.props.item.img}
        />
        <Card.Body>
          <Card.Title className="card-title">
            {this.props.item.title}
          </Card.Title>
          <Card.Text onClick={() => this.commentsSection(this.props.item.asin)} className="show-comments">
            Show Comments
          </Card.Text>
          {this.state.showComments && <Comments item={this.props.item} />}
        </Card.Body>
      </Card>
    );
  }
}

export default DisplayCard;
