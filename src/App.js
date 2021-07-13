import './App.css';
import BuildNavbar from './components/BuildNavbar';
import BuildFooter from './components/BuildFooter';
import BuildJumbotron from './components/BuildJumbotron';
import BuildCards from './components/BuildCards';
import { Col, Container, Row } from "react-bootstrap"
import DisplayComments from './components/DisplayComments';
import { useState } from 'react';

const App = () =>{

  const [asin, setAsin] = useState(null)

  const commentsSection = (e) => {
    console.log(e)
    setAsin(e)
  }

  return (
    <div className="App">
      <BuildNavbar />
      <Container>
        <BuildJumbotron />
        <Row>
          <Col className="col-9">
            <BuildCards initial={0} end={4} commentsSection={commentsSection}/>
            <BuildCards initial={4} end={8} commentsSection={commentsSection}/>
          </Col>
          <Col className="col-3">
          { asin !== null &&
            <DisplayComments initial={0} end={1} asin={asin}/>
          }
          </Col>
        </Row>
      </Container>
      <BuildFooter />
    </div>
  );
}

export default App;
