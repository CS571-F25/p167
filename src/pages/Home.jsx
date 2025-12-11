import { Container, Card, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import InfoCard from '../components/InfoCard';
import PriceDisplay from '../components/PriceDisplay';
import ArtistImage from '../components/ArtistImage';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="text-center my-5">
          <h1 className="display-4 mb-4" style={{ color: '#d32f2f' }}>
            Music Festival Lineup
          </h1>
          <p className="lead">A weekend celebration of music, art, and community</p>
        </div>

        <Row className="mb-5">
          <Col md={4}>
            <InfoCard title="Date" borderColor="#ffd93d">
              <strong>June 15-17, 2025</strong><br />
              Friday through Sunday
            </InfoCard>
          </Col>
          <Col md={4}>
            <InfoCard title="Location" borderColor="#6bcf7f">
              <strong>Sunset Park</strong><br />
              123 Festival Way<br />
              Music City, MC 12345
            </InfoCard>
          </Col>
          <Col md={4}>
            <InfoCard title="Tickets" borderColor="#4d96ff">
              <PriceDisplay days={1} price={75} variant="primary" />
              <PriceDisplay days={2} price={140} variant="success" />
              <PriceDisplay days={3} price={200} variant="warning" />
            </InfoCard>
          </Col>
        </Row>

        <Card className="mb-5" style={{ borderColor: '#d32f2f', backgroundColor: '#ffebee' }}>
          <Card.Body>
            <h2 className="mb-3">About the Festival</h2>
            <p>
              Join us for an unforgettable weekend of music featuring artists from around the world. 
              Explore our diverse lineup, discover new favorites, and connect with fellow music lovers. 
              From electronic beats to rock anthems, jazz melodies to hip hop rhythms, there's something 
              for everyone at this year's festival.
            </p>
            <p>
              Use the navigation above to browse artists, add them to your favorites, and purchase tickets 
              for the weekend. We can't wait to see you there!
            </p>
          </Card.Body>
        </Card>

        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ color: '#d32f2f' }}>Featured Artists</h2>
            <p className="text-muted">Check out our amazing lineup on the Artists page!</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

