import { Form } from 'react-bootstrap';

export default function FormField({ label, id, type = 'text', value, onChange, required = false, placeholder, ariaLabel }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel || label}
      />
    </Form.Group>
  );
}

