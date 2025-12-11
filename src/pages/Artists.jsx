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
    description: 'High-energy electronic music with mesmerizing beats and stunning visuals.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Rock Legends',
    genre: 'Rock',
    description: 'Classic rock anthems that will have you singing along all night long.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Jazz Collective',
    genre: 'Jazz',
    description: 'Smooth jazz melodies and improvisational brilliance.',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Hip Hop Masters',
    genre: 'Hip Hop',
    description: 'Powerful lyrics and infectious rhythms from the streets.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Indie Vibes',
    genre: 'Indie',
    description: 'Thoughtful indie rock with emotional depth and catchy hooks.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Country Roads',
    genre: 'Country',
    description: 'Authentic country music that tells stories of life and love.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
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
        <h1 className="my-4 text-center" style={{ color: '#d32f2f' }}>Festival Artists</h1>
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

