import { Badge } from 'react-bootstrap';

export default function PriceDisplay({ days, price, variant = 'primary' }) {
  return (
    <Badge bg={variant} className="me-2">
      {days}-Day: ${price}
    </Badge>
  );
}

