
import React from 'react';
import DataCard from './DataCard';
import AnalyticsChart from './AnalyticsChart';
import StatusBadge from './StatusBadge';

const revenueData = [
  { name: 'Q1', value: 25000 },
  { name: 'Q2', value: 35000 },
  { name: 'Q3', value: 42000 },
  { name: 'Q4', value: 58000 },
];

const expensesData = [
  { name: 'Marketing', value: 12000 },
  { name: 'Operations', value: 18000 },
  { name: 'Development', value: 22000 },
  { name: 'Admin', value: 8000 },
];

const FinancialAnalysis = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Financial Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataCard title="Revenue Trends">
          <div className="h-64">
            <AnalyticsChart 
              data={revenueData} 
              dataKey="value" 
              type="line" 
              height={230}
              color="#10b981"
            />
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Quarterly revenue</p>
              <p className="text-2xl font-bold">$58,000</p>
            </div>
            <div>
              <StatusBadge status="success" text="↑ 38%" />
            </div>
          </div>
        </DataCard>
        
        <DataCard title="Expense Breakdown">
          <div className="h-64">
            <AnalyticsChart 
              data={expensesData} 
              dataKey="value" 
              type="bar" 
              height={230}
              color="#f97316"
            />
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">Highest expense category</p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Development</p>
              <p className="text-sm font-medium">$22,000 (36.7%)</p>
            </div>
          </div>
        </DataCard>
      </div>
      
      <DataCard title="Financial Strategy Insights">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Profitability</p>
              <p className="text-2xl font-bold mt-1">27%</p>
              <p className="text-xs text-green-600 mt-1">↑ 5% from previous period</p>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">ROI</p>
              <p className="text-2xl font-bold mt-1">3.4x</p>
              <p className="text-xs text-green-600 mt-1">↑ 0.8x from previous period</p>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium text-muted-foreground">Burn Rate</p>
              <p className="text-2xl font-bold mt-1">$15K/mo</p>
              <p className="text-xs text-red-600 mt-1">↑ $2K from previous period</p>
            </div>
          </div>
          
          <div className="border rounded-md p-3">
            <p className="text-sm font-medium text-muted-foreground">Financial Recommendations</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Increase investment in marketing channels with highest ROI</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Optimize operational costs to improve margins</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <span>Review development spending to identify potential savings</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-md p-3">
            <p className="text-sm font-medium text-muted-foreground">Financial Forecast</p>
            <p className="mt-2 text-sm">
              Based on current trends, projected annual revenue: <span className="font-bold">$220,000</span> with 
              expected profit margin of <span className="font-bold">29%</span>. Consider allocating additional 
              resources to high-performing marketing channels to accelerate growth.
            </p>
          </div>
        </div>
      </DataCard>
    </div>
  );
};

export default FinancialAnalysis;
