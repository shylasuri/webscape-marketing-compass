import React from 'react';
import DataCard from './DataCard';
import AnalyticsChart from './AnalyticsChart';
import StatusBadge from './StatusBadge';

const engagementData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1400 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 1800 },
  { name: 'May', value: 2400 },
  { name: 'Jun', value: 3200 },
  { name: 'Jul', value: 3800 },
];

const platformData = [
  { name: 'Facebook', value: 38 },
  { name: 'Twitter', value: 22 },
  { name: 'Instagram', value: 58 },
  { name: 'LinkedIn', value: 42 },
  { name: 'YouTube', value: 15 },
];

const SocialMediaAnalysis = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Social Media Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataCard title="Engagement Trends">
          <div className="h-64">
            <AnalyticsChart 
              data={engagementData} 
              dataKey="value" 
              height={230}
              color="#8b5cf6"
            />
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Monthly engagement</p>
              <p className="text-2xl font-bold">3,800</p>
            </div>
            <StatusBadge status="success" text="↑ 18.7%" />
          </div>
        </DataCard>
        
        <DataCard title="Platform Performance">
          <div className="h-64">
            <AnalyticsChart 
              data={platformData} 
              dataKey="value" 
              type="bar" 
              height={230}
              color="#ec4899"
            />
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">Top performing platform</p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Instagram</p>
              <StatusBadge status="success" text="58% of total engagement" />
            </div>
          </div>
        </DataCard>
      </div>
      
      <DataCard title="Social Media Insights">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Followers</p>
              <p className="text-2xl font-bold mt-1">12.4K</p>
              <p className="text-xs text-green-600 mt-1">↑ 8% from previous month</p>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Avg. Engagement Rate</p>
              <p className="text-2xl font-bold mt-1">3.8%</p>
              <p className="text-xs text-green-600 mt-1">↑ 0.6% from previous month</p>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Most Active Time</p>
              <p className="text-2xl font-bold mt-1">2-4 PM</p>
              <p className="text-xs text-muted-foreground mt-1">Tuesday & Thursday</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Top Performing Content</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium">How-to video tutorials</p>
                    <p className="text-xs text-muted-foreground">Avg. 5.2% engagement rate</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Industry infographics</p>
                    <p className="text-xs text-muted-foreground">Avg. 4.8% engagement rate</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Customer testimonials</p>
                    <p className="text-xs text-muted-foreground">Avg. 3.9% engagement rate</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Competitor Comparison</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center justify-between">
                  <span>Competitor A (15.2K followers)</span>
                  <StatusBadge status="success" text="Outperforming" />
                </li>
                <li className="flex items-center justify-between">
                  <span>Competitor B (28.7K followers)</span>
                  <StatusBadge status="warning" text="Underperforming" />
                </li>
                <li className="flex items-center justify-between">
                  <span>Competitor C (8.3K followers)</span>
                  <StatusBadge status="success" text="Outperforming" />
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                Comparison based on engagement rate and follower growth
              </p>
            </div>
          </div>
          
          <div className="border rounded-md p-3">
            <p className="text-sm font-medium text-muted-foreground">Social Media Recommendations</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/10 transition-colors">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Increase video content production focused on tutorials and how-to guides</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/10 transition-colors">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Optimize posting schedule to align with peak engagement times (2-4 PM Tuesday/Thursday)</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/10 transition-colors">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Develop more infographic content to improve sharing and engagement</span>
              </li>
              <li className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/10 transition-colors">
                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                <span>Consider allocating more resources to Instagram which shows highest ROI</span>
              </li>
            </ul>
          </div>
        </div>
      </DataCard>
    </div>
  );
};

export default SocialMediaAnalysis;
