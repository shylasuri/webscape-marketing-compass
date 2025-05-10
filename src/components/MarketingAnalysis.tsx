
import React from 'react';
import DataCard from './DataCard';
import AnalyticsChart from './AnalyticsChart';
import StatusBadge from './StatusBadge';

const marketingData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1900 },
  { name: 'Mar', value: 3000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 4890 },
  { name: 'Jun', value: 3390 },
  { name: 'Jul', value: 4490 },
];

const keywordData = [
  { name: 'SEO', value: 78 },
  { name: 'Content', value: 65 },
  { name: 'Social', value: 42 },
  { name: 'Email', value: 38 },
  { name: 'Ads', value: 25 },
];

const MarketingAnalysis = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Marketing Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataCard title="Traffic Trends">
          <div className="h-64">
            <AnalyticsChart 
              data={marketingData} 
              dataKey="value" 
              height={230}
              color="#20c997"
            />
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Monthly traffic</p>
              <p className="text-2xl font-bold">4,490</p>
            </div>
            <StatusBadge status="success" text="Trending Up" />
          </div>
        </DataCard>
        
        <DataCard title="Marketing Channels">
          <div className="h-64">
            <AnalyticsChart 
              data={keywordData} 
              dataKey="value" 
              type="bar" 
              height={230}
              color="#3b82f6"
            />
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">Top performing channel</p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">SEO</p>
              <StatusBadge status="info" text="78% Effectiveness" />
            </div>
          </div>
        </DataCard>
      </div>
      
      <DataCard title="Marketing Strategy Insights">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Recommendations</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Increase SEO content production</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Optimize email campaign frequency</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span>Review social media strategy</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Competition Analysis</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Competitor A</span>
                  <StatusBadge status="warning" text="Medium Threat" />
                </li>
                <li className="flex items-center justify-between">
                  <span>Competitor B</span>
                  <StatusBadge status="error" text="High Threat" />
                </li>
                <li className="flex items-center justify-between">
                  <span>Competitor C</span>
                  <StatusBadge status="info" text="Low Threat" />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-md p-3">
            <p className="text-sm font-medium text-muted-foreground">Key Takeaways</p>
            <p className="mt-2 text-sm">
              SEO efforts are paying off with a 15% increase in organic traffic. 
              Email campaigns show promising engagement rates but need optimization for frequency.
              Social media presence requires better content strategy to improve conversion rates.
            </p>
          </div>
        </div>
      </DataCard>
    </div>
  );
};

export default MarketingAnalysis;
