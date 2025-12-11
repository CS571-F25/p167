import { Container, Card, Row, Col, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import GenreBadge from '../components/GenreBadge';

const scheduleData = [
  {
    id: 1,
    artistId: 1,
    name: 'Electric Dreams',
    genre: 'Electronic',
    day: 'Friday',
    time: '8:00 PM',
    stage: 'Main Stage',
    duration: '90 min'
  },
  {
    id: 2,
    artistId: 2,
    name: 'Rock Legends',
    genre: 'Rock',
    day: 'Friday',
    time: '9:30 PM',
    stage: 'Rock Stage',
    duration: '75 min'
  },
  {
    id: 3,
    artistId: 3,
    name: 'Jazz Collective',
    genre: 'Jazz',
    day: 'Saturday',
    time: '2:00 PM',
    stage: 'Jazz Lounge',
    duration: '60 min'
  },
  {
    id: 4,
    artistId: 4,
    name: 'Hip Hop Masters',
    genre: 'Hip Hop',
    day: 'Saturday',
    time: '7:00 PM',
    stage: 'Main Stage',
    duration: '80 min'
  },
  {
    id: 5,
    artistId: 5,
    name: 'Indie Vibes',
    genre: 'Indie',
    day: 'Sunday',
    time: '4:00 PM',
    stage: 'Indie Stage',
    duration: '70 min'
  },
  {
    id: 6,
    artistId: 6,
    name: 'Country Roads',
    genre: 'Country',
    day: 'Sunday',
    time: '6:30 PM',
    stage: 'Country Stage',
    duration: '75 min'
  }
];

export default function Schedule() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('festivalFavorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [filterDay, setFilterDay] = useState('All');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const handleKeyDown = (e, action, value) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (action === 'filterDay') {
        setFilterDay(value);
      } else if (action === 'toggleFavorites') {
        setShowOnlyFavorites(!showOnlyFavorites);
      }
    }
  };

  const filteredSchedule = scheduleData.filter(item => {
    const matchesDay = filterDay === 'All' || item.day === filterDay;
    const matchesFavorites = !showOnlyFavorites || favorites.includes(item.artistId);
    return matchesDay && matchesFavorites;
  });

  const groupedByDay = filteredSchedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {});

  const days = ['Friday', 'Saturday', 'Sunday'];

  return (
    <>
      <NavigationBar />
      <Container>
        <h1 className="my-4 text-center" style={{ color: '#d32f2f' }}>Festival Schedule</h1>

        <Card className="mb-4" style={{ borderColor: '#ffd93d', backgroundColor: '#fff9e6' }}>
          <Card.Body>
            <h2 className="mb-3">My Favorited Artists Schedule</h2>
            {favorites.length === 0 ? (
              <p className="text-muted">No favorited artists yet. Visit the Artists page to add favorites!</p>
            ) : (
              <p>
                You have <strong>{favorites.length}</strong> favorited artist{favorites.length !== 1 ? 's' : ''}. 
                {showOnlyFavorites ? ' Showing only your favorites below.' : ' Use the filter below to show only favorites.'}
              </p>
            )}
          </Card.Body>
        </Card>

        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Header>
                <h2 className="mb-0">Filter by Day</h2>
              </Card.Header>
              <Card.Body>
                <ButtonGroup className="w-100" role="group" aria-label="Day filter selection">
                  <Button
                    variant={filterDay === 'All' ? 'primary' : 'outline-primary'}
                    onClick={() => setFilterDay('All')}
                    onKeyDown={(e) => handleKeyDown(e, 'filterDay', 'All')}
                    aria-pressed={filterDay === 'All'}
                    aria-label="Show all days"
                  >
                    All Days
                  </Button>
                  {days.map(day => (
                    <Button
                      key={day}
                      variant={filterDay === day ? 'primary' : 'outline-primary'}
                      onClick={() => setFilterDay(day)}
                      onKeyDown={(e) => handleKeyDown(e, 'filterDay', day)}
                      aria-pressed={filterDay === day}
                      aria-label={`Show ${day} schedule`}
                    >
                      {day}
                    </Button>
                  ))}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h2 className="mb-0">Filter Options</h2>
              </Card.Header>
              <Card.Body>
                <Button
                  variant={showOnlyFavorites ? 'warning' : 'outline-warning'}
                  onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                  onKeyDown={(e) => handleKeyDown(e, 'toggleFavorites')}
                  aria-pressed={showOnlyFavorites}
                  aria-label={showOnlyFavorites ? 'Show all artists' : 'Show only favorited artists'}
                  disabled={favorites.length === 0}
                >
                  {showOnlyFavorites ? 'Show All Artists' : 'Show Only Favorites'}
                </Button>
                {favorites.length === 0 && (
                  <p className="text-muted mt-2 small">Add favorites on the Artists page to use this filter</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {Object.keys(groupedByDay).length === 0 ? (
          <Card>
            <Card.Body>
              <p className="text-muted text-center">No performances match your current filters.</p>
            </Card.Body>
          </Card>
        ) : (
          days.map(day => {
            const dayPerformances = groupedByDay[day];
            if (!dayPerformances || dayPerformances.length === 0) return null;

            return (
              <Card key={day} className="mb-4" style={{ borderColor: '#4d96ff' }}>
                <Card.Header>
                  <h2 className="mb-0">{day} Schedule</h2>
                </Card.Header>
                <Card.Body>
                  <Row className="g-3">
                    {dayPerformances.map(performance => {
                      const isFavorited = favorites.includes(performance.artistId);
                      return (
                        <Col key={performance.id} xs={12} md={6} lg={4}>
                          <Card 
                            className="h-100" 
                            style={{ 
                              borderColor: isFavorited ? '#d32f2f' : '#e0e0e0',
                              backgroundColor: isFavorited ? '#ffebee' : 'white',
                              borderWidth: isFavorited ? '2px' : '1px'
                            }}
                          >
                            <Card.Body>
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <Card.Title className="mb-0">{performance.name}</Card.Title>
                                {isFavorited && (
                                  <Badge bg="danger" aria-label="Favorited artist">❤️</Badge>
                                )}
                              </div>
                              <GenreBadge genre={performance.genre} />
                              <div className="mt-2">
                                <p className="mb-1">
                                  <strong>Time:</strong> {performance.time}
                                </p>
                                <p className="mb-1">
                                  <strong>Stage:</strong> {performance.stage}
                                </p>
                                <p className="mb-0">
                                  <strong>Duration:</strong> {performance.duration}
                                </p>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Card.Body>
              </Card>
            );
          })
        )}
      </Container>
    </>
  );
}

