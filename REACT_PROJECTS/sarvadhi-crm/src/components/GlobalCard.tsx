import React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Props for the GlobalCard component
interface GlobalCardProps extends CardProps {
  // Add any additional props specific to your global card
  title: string;
}

const GlobalCard: React.FC<GlobalCardProps> = ({ title, children, ...rest }) => {
  return (
    <Card {...rest}>
      <CardContent>
        <h2>{title}</h2>
        {children}
      </CardContent>
    </Card>
  );
};

export default GlobalCard;
