import './App.css';
import BuildNavbar from './components/BuildNavbar';
import BuildFooter from './components/BuildFooter';
import BuildJumbotron from './components/BuildJumbotron';
import BuildCards from './components/BuildCards';
import { Col, Container, Row } from "react-bootstrap"
import DisplayComments from './components/DisplayComments';
import { Component } from 'react';

class App extends Component{

  state = {
    asin: null
  }

  commentsSection = (e) => {
    console.log(e)
    this.setState({
      asin: e,
    })
  }

  render(){
  return (
    <div className="App">
      <BuildNavbar />
      <Container>
        <BuildJumbotron />
        <Row>
          <Col className="col-9">
            <BuildCards initial={0} end={4} commentsSection={this.commentsSection}/>
            <BuildCards initial={4} end={8} commentsSection={this.commentsSection}/>
          </Col>
          <Col className="col-3">
          { this.state.asin !== null &&
            <DisplayComments initial={0} end={1} asin={this.state.asin}/>
          }
          </Col>
        </Row>
      </Container>
      <BuildFooter />
    </div>
  );
  }
}

export default App;
