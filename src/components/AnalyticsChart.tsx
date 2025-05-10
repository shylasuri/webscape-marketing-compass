
import React from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartType = 'area' | 'bar' | 'line';

interface AnalyticsChartProps {
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  type?: ChartType;
  height?: number;
  color?: string;
}

const AnalyticsChart = ({ 
  data, 
  dataKey, 
  xAxisKey = "name", 
  type = 'area', 
  height = 200,
  color = "#20c997"
}: AnalyticsChartProps) => {
  
  const renderChart = (type: ChartType) => {
    switch (type) {
      case 'area':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill="url(#colorGradient)" />
          </AreaChart>
        );
        
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
        
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} />
          </LineChart>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <ResponsiveContainer width="100%" height={height}>
      {renderChart(type)}
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
