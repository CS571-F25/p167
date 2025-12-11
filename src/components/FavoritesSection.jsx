import { Card, ListGroup, Button } from 'react-bootstrap';
import GenreBadge from './GenreBadge';

export default function FavoritesSection({ favorites, artists, onRemoveFavorite }) {
  if (favorites.length === 0) {
    return (
      <Card className="mb-4" style={{ borderColor: '#ffd93d' }}>
        <Card.Body>
          <h2>My Favorites</h2>
          <p className="text-muted">No favorites yet. Start adding artists you're excited to see!</p>
        </Card.Body>
      </Card>
    );
  }

  const favoriteArtists = artists.filter(artist => favorites.includes(artist.id));

  const handleKeyDown = (e, artistId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onRemoveFavorite(artistId);
    }
  };

  return (
    <Card className="mb-4" style={{ borderColor: '#ffd93d' }}>
      <Card.Header>
        <h2 className="mb-0">My Favorites ({favorites.length})</h2>
      </Card.Header>
      <ListGroup variant="flush">
        {favoriteArtists.map(artist => (
          <ListGroup.Item key={artist.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{artist.name}</strong>
              <GenreBadge genre={artist.genre} />
            </div>
            <Button 
              variant="outline-danger" 
              size="sm"
              onClick={() => onRemoveFavorite(artist.id)}
              onKeyDown={(e) => handleKeyDown(e, artist.id)}
              aria-label={`Remove ${artist.name} from favorites`}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

