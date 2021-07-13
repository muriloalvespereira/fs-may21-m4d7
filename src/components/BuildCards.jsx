
import { Col, Row } from "react-bootstrap";
import items from "../data/horror.json";
import DisplayCard from "./DisplayCard";

const BuildCards = (props) => {

    return (
      <Row>
        {items
          .map((item) => (
            <Col key={item.asin} className="mb-3">
              <DisplayCard item={item} commentsSection={props.commentsSection}/>
            </Col>
          ))
          .slice(props.initial, props.end)}
      </Row>
    );
}

export default BuildCards;
