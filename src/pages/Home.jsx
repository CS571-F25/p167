import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="text-center my-5">
          <h1 className="display-4 mb-4" style={{ color: '#ff6b6b' }}>
            🎵 Music Festival Lineup 🎵
          </h1>
          <p className="lead">A weekend celebration of music, art, and community</p>
        </div>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100 shadow-sm" style={{ borderColor: '#ffd93d' }}>
              <Card.Body>
                <Card.Title>📅 Date</Card.Title>
                <Card.Text>
                  <strong>June 15-17, 2025</strong><br />
                  Friday through Sunday
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm" style={{ borderColor: '#6bcf7f' }}>
              <Card.Body>
                <Card.Title>📍 Location</Card.Title>
                <Card.Text>
                  <strong>Sunset Park</strong><br />
                  123 Festival Way<br />
                  Music City, MC 12345
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm" style={{ borderColor: '#4d96ff' }}>
              <Card.Body>
                <Card.Title>🎫 Tickets</Card.Title>
                <Card.Text>
                  <Badge bg="primary" className="me-2">1-Day: $75</Badge>
                  <Badge bg="success" className="me-2">2-Day: $140</Badge>
                  <Badge bg="warning" className="text-dark">3-Day: $200</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="mb-5" style={{ borderColor: '#ff6b6b', backgroundColor: '#fff5f5' }}>
          <Card.Body>
            <Card.Title className="mb-3">About the Festival</Card.Title>
            <Card.Text>
              Join us for an unforgettable weekend of music featuring artists from around the world. 
              Explore our diverse lineup, discover new favorites, and connect with fellow music lovers. 
              From electronic beats to rock anthems, jazz melodies to hip hop rhythms, there's something 
              for everyone at this year's festival.
            </Card.Text>
            <Card.Text>
              Use the navigation above to browse artists, add them to your favorites, and purchase tickets 
              for the weekend. We can't wait to see you there!
            </Card.Text>
          </Card.Body>
        </Card>

        <Row className="text-center mb-5">
          <Col>
            <h3 style={{ color: '#ff6b6b' }}>Featured Artists</h3>
            <p className="text-muted">Check out our amazing lineup on the Artists page!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

