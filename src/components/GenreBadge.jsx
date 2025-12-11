import { Badge } from 'react-bootstrap';

export default function GenreBadge({ genre }) {
  const colorMap = {
    'Electronic': 'primary',
    'Rock': 'danger',
    'Jazz': 'info',
    'Hip Hop': 'warning',
    'Indie': 'success',
    'Country': 'secondary'
  };

  return (
    <Badge bg={colorMap[genre] || 'secondary'} className="ms-2">
      {genre}
    </Badge>
  );
}

