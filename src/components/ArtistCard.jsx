import { Card, Button, Badge } from 'react-bootstrap';
import { useState } from 'react';

export default function ArtistCard({ artist, onFavoriteToggle, isFavorited }) {
  const handleFavorite = () => {
    onFavoriteToggle(artist.id);
  };

  return (
    <Card className="h-100 shadow-sm" style={{ borderColor: '#ff6b6b' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-start">
          <span>{artist.name}</span>
          <Badge bg={isFavorited ? 'danger' : 'secondary'} className="ms-2">
            {isFavorited ? '❤️' : '🤍'}
          </Badge>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{artist.genre}</Card.Subtitle>
        <Card.Text>{artist.description}</Card.Text>
        <Button 
          variant={isFavorited ? 'outline-danger' : 'outline-primary'}
          onClick={handleFavorite}
          size="sm"
        >
          {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Card.Body>
    </Card>
  );
}

