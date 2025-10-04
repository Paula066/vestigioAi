import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, 900px',
  loading = 'lazy'
}) => {
  const [error, setError] = useState(false);
  
  // Generate srcSet for WebP
  const generateWebPSrcSet = (src: string) => {
    const baseName = src.replace(/\.[^/.]+$/, '');
    return [300, 600, 900]
      .map(size => `/images/${baseName}-${size}w.webp ${size}w`)
      .join(', ');
  };
  
  // Generate srcSet for PNG fallback
  const generatePNGSrcSet = (src: string) => {
    const baseName = src.replace(/\.[^/.]+$/, '');
    return [300, 600, 900]
      .map(size => `/images/${baseName}-${size}w.png ${size}w`)
      .join(', ');
  };
  
  if (error) {
    // Fallback to original image if optimized versions fail
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
      />
    );
  }

  return (
    <picture onError={() => setError(true)}>
      <source
        type="image/webp"
        srcSet={generateWebPSrcSet(src)}
        sizes={sizes}
      />
      <source
        type="image/png"
        srcSet={generatePNGSrcSet(src)}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
      />
    </picture>
  );
};
