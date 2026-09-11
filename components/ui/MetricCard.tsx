import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from './Card';

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number | string;
    label: string;
    direction: 'up' | 'down' | 'neutral';
  };
  valueClassName?: string;
}

export function MetricCard({ title, value, icon, trend, className, valueClassName, ...props }: MetricCardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          {icon && <div className="text-slate-400">{icon}</div>}
        </div>
        <div className="mt-4">
          <h4 className={cn("text-3xl font-bold text-slate-900", valueClassName)}>{value}</h4>
          {trend && (
            <div className="flex items-center mt-2 text-sm">
              <span
                className={cn(
                  "font-medium mr-2",
                  trend.direction === 'up' ? "text-emerald-600" : 
                  trend.direction === 'down' ? "text-red-600" : "text-slate-600"
                )}
              >
                {trend.direction === 'up' ? '↑ ' : trend.direction === 'down' ? '↓ ' : ''}
                {trend.value}
              </span>
              <span className="text-slate-500">{trend.label}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
