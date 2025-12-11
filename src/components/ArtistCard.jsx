import { Card, Button } from 'react-bootstrap';
import GenreBadge from './GenreBadge';
import ArtistImage from './ArtistImage';

export default function ArtistCard({ artist, onFavoriteToggle, isFavorited }) {
  const handleFavorite = () => {
    onFavoriteToggle(artist.id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFavorite();
    }
  };

  return (
    <Card className="h-100 shadow-sm" style={{ borderColor: '#d32f2f' }}>
      {artist.image && (
        <ArtistImage 
          src={artist.image} 
          alt={`${artist.name} performing at the festival`}
          artistName={artist.name}
        />
      )}
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-start">
          <span>{artist.name}</span>
          <span aria-label={isFavorited ? 'Favorited' : 'Not favorited'}>
            {isFavorited ? '❤️' : '🤍'}
          </span>
        </Card.Title>
        <div className="mb-2">
          <GenreBadge genre={artist.genre} />
        </div>
        <Card.Text>{artist.description}</Card.Text>
        <Button 
          variant={isFavorited ? 'outline-danger' : 'outline-primary'}
          onClick={handleFavorite}
          onKeyDown={handleKeyDown}
          size="sm"
          aria-label={isFavorited ? `Remove ${artist.name} from favorites` : `Add ${artist.name} to favorites`}
        >
          {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Card.Body>
    </Card>
  );
}

