import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
  isLight?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  titleAs: TitleTag = 'h2',
  isLight = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col mb-10 md:mb-14 max-w-3xl', alignmentClasses[align], className)}>
      {badge && (
        <div className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3',
          isLight
            ? 'bg-white/10 text-amber-200 border border-white/20'
            : 'bg-wood-100 text-wood-800 border border-wood-200'
        )}>
          {badge}
        </div>
      )}
      <TitleTag
        className={cn(
          'font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.2] font-semibold tracking-tight',
          isLight ? 'text-white' : 'text-charcoal-900'
        )}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={cn(
            'mt-3.5 text-base sm:text-lg leading-relaxed font-normal',
            isLight ? 'text-sand-200' : 'text-charcoal-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
