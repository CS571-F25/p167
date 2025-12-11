import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';

export default function TicketSelector({ onAddToCart }) {
  const [selectedDays, setSelectedDays] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(selectedDays);
    setSelectedDays(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddToCart();
    }
  };

  const prices = {
    1: 75,
    2: 140,
    3: 200
  };

  return (
    <Card className="mb-4" style={{ borderColor: '#2e7d32' }}>
      <Card.Header>
        <h2 className="mb-0">Ticket Options</h2>
      </Card.Header>
      <Card.Body>
        <div className="mb-3">
          <label htmlFor="ticket-selector" className="form-label">Select Pass:</label>
          <ButtonGroup className="w-100" role="group" aria-label="Ticket pass selection">
            <Button
              id="ticket-1-day"
              variant={selectedDays === 1 ? 'success' : 'outline-success'}
              onClick={() => setSelectedDays(1)}
              aria-pressed={selectedDays === 1}
              aria-label="1-Day Pass for $75"
            >
              1-Day Pass - ${prices[1]}
            </Button>
            <Button
              id="ticket-2-day"
              variant={selectedDays === 2 ? 'success' : 'outline-success'}
              onClick={() => setSelectedDays(2)}
              aria-pressed={selectedDays === 2}
              aria-label="2-Day Pass for $140"
            >
              2-Day Pass - ${prices[2]}
            </Button>
            <Button
              id="ticket-3-day"
              variant={selectedDays === 3 ? 'success' : 'outline-success'}
              onClick={() => setSelectedDays(3)}
              aria-pressed={selectedDays === 3}
              aria-label="3-Day Pass for $200"
            >
              3-Day Pass - ${prices[3]}
            </Button>
          </ButtonGroup>
        </div>
        <Button 
          variant="primary" 
          onClick={handleAddToCart} 
          onKeyDown={handleKeyDown}
          className="w-100"
          aria-label={`Add ${selectedDays}-day pass to cart`}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

