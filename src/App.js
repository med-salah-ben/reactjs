import { Navbar, Container,Nav,Carousel } from 'react-bootstrap';
import { Button, Segment ,Flag} from 'semantic-ui-react'
import Attack from "./images/attack.jpg";
import Hunter from "./images/hunter.jpg";
import Death from "./images/death.jpg"

import './App.css';

function App() {
  return (
    <>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link style={{marginRight:'200px'}} href="#home">Home</Nav.Link>
      <Nav.Link className='test' href="#features">Features</Nav.Link>
      <Nav.Link className='test' href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Carousel>  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Hunter}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Death}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Attack}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Segment inverted>
      <Button inverted>Standard</Button>
      <Button inverted color='red'>
        Red
      </Button>
      <Button inverted color='orange'>
        Orange
      </Button>
      <Button inverted color='yellow'>
        Yellow
      </Button>
      <Button inverted color='olive'>
        Olive
      </Button>
      <Button inverted color='green'>
        Green
      </Button>
      <Button inverted color='teal'>
        Teal
      </Button>
      <Button inverted color='blue'>
        Blue
      </Button>
      <Button inverted color='violet'>
        Violet
      </Button>
      <Button inverted color='purple'>
        Purple
      </Button>
      <Button inverted color='pink'>
        Pink
      </Button>
      <Button inverted color='brown'>
        Brown
      </Button>
      <Button inverted color='grey'>
        Grey
      </Button>
      <Button inverted color='black'>
        Black
      </Button>
    </Segment>
    <Segment inverted>
      <Button basic inverted>
        Standard
      </Button>
      <Button basic inverted color='red'>
        Red
      </Button>
      <Button basic inverted color='orange'>
        Orange
      </Button>
      <Button basic inverted color='yellow'>
        Yellow
      </Button>
      <Button basic inverted color='olive'>
        Olive
      </Button>
      <Button basic inverted color='green'>
        Green
      </Button>
      <Button basic inverted color='teal'>
        Teal
      </Button>
      <Button basic inverted color='blue'>
        Blue
      </Button>
      <Button basic inverted color='violet'>
        Violet
      </Button>
      <Button basic inverted color='purple'>
        Purple
      </Button>
      <Button basic inverted color='pink'>
        Pink
      </Button>
      <Button basic inverted color='brown'>
        Brown
      </Button>
      <Button basic inverted color='grey'>
        Grey
      </Button>
      <Button basic inverted color='black'>
        Black
      </Button>
    </Segment>
    <Segment>
    <Flag name='ae' />
    <Flag name='france' />
    <Flag name='myanmar' />
  </Segment>
    </>
  );
}

export default App;
