import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  aspectRatio = 'auto',
  priority = false,
  className,
  containerClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    auto: '',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-sand-100/80',
        aspectClasses[aspectRatio],
        containerClassName
      )}
    >
      {/* Shimmer skeleton before image loads */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-sand-100 via-sand-200 to-sand-100 animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-charcoal-400 bg-sand-100">
          <ImageOff className="w-8 h-8 mb-2 stroke-[1.5]" />
          <span className="text-xs text-center font-medium">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'w-full h-full object-cover transition-all duration-500',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};
