import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}: CardProps) => {
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hoverable ? 'hover:shadow-lg transition-shadow duration-300' : '';
  const clickStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-4 bg-gray-50 ${className}`}>{children}</div>;
};

export default Card;