import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import FavoritesSection from '../components/FavoritesSection';
import NavigationBar from '../components/NavigationBar';

const artistsData = [
  {
    id: 1,
    name: 'Electric Dreams',
    genre: 'Electronic',
    description: 'High-energy electronic music with mesmerizing beats and stunning visuals.'
  },
  {
    id: 2,
    name: 'Rock Legends',
    genre: 'Rock',
    description: 'Classic rock anthems that will have you singing along all night long.'
  },
  {
    id: 3,
    name: 'Jazz Collective',
    genre: 'Jazz',
    description: 'Smooth jazz melodies and improvisational brilliance.'
  },
  {
    id: 4,
    name: 'Hip Hop Masters',
    genre: 'Hip Hop',
    description: 'Powerful lyrics and infectious rhythms from the streets.'
  },
  {
    id: 5,
    name: 'Indie Vibes',
    genre: 'Indie',
    description: 'Thoughtful indie rock with emotional depth and catchy hooks.'
  },
  {
    id: 6,
    name: 'Country Roads',
    genre: 'Country',
    description: 'Authentic country music that tells stories of life and love.'
  }
];

export default function Artists() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('festivalFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  const handleFavoriteToggle = (artistId) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(artistId)
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId];
      localStorage.setItem('festivalFavorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleRemoveFavorite = (artistId) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(id => id !== artistId);
      localStorage.setItem('festivalFavorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <h1 className="my-4 text-center" style={{ color: '#ff6b6b' }}>🎤 Festival Artists</h1>
        <FavoritesSection 
          favorites={favorites}
          artists={artistsData}
          onRemoveFavorite={handleRemoveFavorite}
        />
        <Row className="g-4">
          {artistsData.map(artist => (
            <Col key={artist.id} xs={12} md={6} lg={4}>
              <ArtistCard
                artist={artist}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorited={favorites.includes(artist.id)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

