import { Alert } from 'react-bootstrap';

export default function AlertMessage({ variant, heading, message, onClose, show }) {
  if (!show) return null;
  
  return (
    <Alert variant={variant} className="mb-4" dismissible onClose={onClose}>
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      <p>{message}</p>
    </Alert>
  );
}

