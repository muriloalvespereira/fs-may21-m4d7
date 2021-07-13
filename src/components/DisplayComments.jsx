import { Component } from "react";
import DisplayCommentsCard from "./DisplayCommentsCard";

class DisplayComments extends Component {
  render() {
    return <DisplayCommentsCard asin={this.props.asin} />;
  }
}

export default DisplayComments;
