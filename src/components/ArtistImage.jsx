import { Image } from 'react-bootstrap';

export default function ArtistImage({ src, alt, artistName }) {
  return (
    <Image
      src={src}
      alt={alt || `${artistName} artist image`}
      fluid
      rounded
      className="mb-3"
      style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
    />
  );
}

