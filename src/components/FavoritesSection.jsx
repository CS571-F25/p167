import { Card, ListGroup, Button, Badge } from 'react-bootstrap';

export default function FavoritesSection({ favorites, artists, onRemoveFavorite }) {
  if (favorites.length === 0) {
    return (
      <Card className="mb-4" style={{ borderColor: '#ffd93d' }}>
        <Card.Body>
          <Card.Title>My Favorites</Card.Title>
          <Card.Text className="text-muted">No favorites yet. Start adding artists you're excited to see!</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  const favoriteArtists = artists.filter(artist => favorites.includes(artist.id));

  return (
    <Card className="mb-4" style={{ borderColor: '#ffd93d' }}>
      <Card.Header>
        <Card.Title className="mb-0">My Favorites ({favorites.length})</Card.Title>
      </Card.Header>
      <ListGroup variant="flush">
        {favoriteArtists.map(artist => (
          <ListGroup.Item key={artist.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{artist.name}</strong>
              <Badge bg="secondary" className="ms-2">{artist.genre}</Badge>
            </div>
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={() => onRemoveFavorite(artist.id)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

