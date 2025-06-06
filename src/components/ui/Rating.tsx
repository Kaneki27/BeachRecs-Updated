import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
  type?: 'safety' | 'cleanliness' | 'default';
}

const Rating = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  className = '',
  type = 'default',
}: RatingProps) => {
  const sizeStyles = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  const textSizeStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  const colorStyles = {
    safety: 'text-emerald-500 fill-emerald-500',
    cleanliness: 'text-blue-500 fill-blue-500',
    default: 'text-amber-500 fill-amber-500',
  };
  
  const emptyStarColor = 'text-gray-300 fill-gray-300';
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">
        {[...Array(max)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeStyles[size]} ${i < value ? colorStyles[type] : emptyStarColor}`}
            fill={i < value ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      {showValue && (
        <span className={`${textSizeStyles[size]} font-medium ml-1`}>
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;