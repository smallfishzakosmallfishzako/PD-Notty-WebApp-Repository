import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import {client} from '../../libs/client'
import  { Navbar,Nav,Row,Col,Card } from 'react-bootstrap';

const App = ({eventinfo}) => {
  return (
    <div>
      <Navbar bg="warning" expand="md" color='yellow-400'>
        <Navbar.Toggle className='me-auto'/>
        <Navbar.Brand href="#home" className='me-auto'><b>イベント一覧</b></Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Row xs={2} md={2} className="g-2">
        {eventinfo.map((eventinfo: { EventName: string; }) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://thumb.ac-illust.com/6c/6c49457122b22005a8dcacaac54d2c17_t.jpeg" />
            <Card.Body >
            <Card.Title>{eventinfo.EventName}</Card.Title>
              <Card.Text>
                Event 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({endpoint:"eventinfo"});

  return {
    props:{
      eventinfo: data.contents,
    },
  };
};

export default App