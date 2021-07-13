import { useState } from "react";
import { Card } from "react-bootstrap";
import Comments from "./Comments";

const DisplayCard = (props) => {

  const [showComments, setShowComments] = useState(false)

  const commentsSection = (e) => {
      setShowComments(!showComments);
      if(showComments === false){
      props.commentsSection(e)
      }
  };

    return (
      <Card className="w-100" style={{ width: "18rem" }}>
        <Card.Img
          className="card-height w-100"
          variant="top"
          src={props.item.img}
        />
        <Card.Body>
          <Card.Title className="card-title">
            {props.item.title}
          </Card.Title>
          <Card.Text onClick={() => commentsSection(props.item.asin)} className="show-comments">
            Show Comments
          </Card.Text>
          {showComments && <Comments item={props.item} />}
        </Card.Body>
      </Card>
    );
}

export default DisplayCard;
