import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import items from "../data/horror.json";
import DisplayCard from "./DisplayCard";

class BuildCards extends Component {
  commentsSection = (e) => {
    this.props.commentsSection(e);
  };

  render() {
    return (
      <Row>
        {items
          .map((item) => (
            <Col key={item.asin} className="mb-3">
              <DisplayCard item={item} commentsSection={this.commentsSection}/>
            </Col>
          ))
          .slice(this.props.initial, this.props.end)}
      </Row>
    );
  }
}

export default BuildCards;
