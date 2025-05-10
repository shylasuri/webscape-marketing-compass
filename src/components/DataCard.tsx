
import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DataCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const DataCard = ({ title, children, className = "" }: DataCardProps) => {
  return (
    <Card className={`dashboard-card animate-fade ${className}`}>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        {children}
      </CardContent>
    </Card>
  );
};

export default DataCard;
