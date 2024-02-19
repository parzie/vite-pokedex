import { FC } from 'react';

interface ImageProps {
  parentClass: string,
  src: string;
  alt?: string;
  imageBpWidths?: string[];
}

const Image: FC<ImageProps> = ({ parentClass, src, alt = '', imageBpWidths=['24px', '24px'] }) => {
  const className = `image ${parentClass}__image`;

  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        sizes={imageBpWidths.join(', ')}
      />
    </div>
  );
};

export default Image;
