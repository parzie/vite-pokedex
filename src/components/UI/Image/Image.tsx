import { FC } from 'react';

interface Props {
  src: string;
  alt?: string;
  imageBpWidths: string[];
}

const Image: FC<Props> = ({ src, alt = '', imageBpWidths }) => {
  return (
    <div>
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
