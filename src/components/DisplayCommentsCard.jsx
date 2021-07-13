import { Card } from "react-bootstrap";
import CommentsArea from "./CommentsArea ";

const DisplayCommentsCard = (props) => {
  
    return (
      <Card className="w-100" style={{ width: "18rem" }}>
        <Card.Body>
          <CommentsArea asin={props.asin} />
        </Card.Body>
      </Card>
    );

}

export default DisplayCommentsCard;
