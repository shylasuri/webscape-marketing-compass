
import React, { useState } from 'react';
import CrawlerConfig from './CrawlerConfig';
import MarketingAnalysis from './MarketingAnalysis';
import FinancialAnalysis from './FinancialAnalysis';
import SwotAnalysis from './SwotAnalysis';
import SocialMediaAnalysis from './SocialMediaAnalysis';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-8">
        <CrawlerConfig />
      </div>
      
      <Tabs defaultValue="marketing" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="swot">SWOT</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>
        
        <TabsContent value="marketing" className="animate-fade">
          <MarketingAnalysis />
        </TabsContent>
        
        <TabsContent value="financial" className="animate-fade">
          <FinancialAnalysis />
        </TabsContent>
        
        <TabsContent value="swot" className="animate-fade">
          <SwotAnalysis />
        </TabsContent>
        
        <TabsContent value="social" className="animate-fade">
          <SocialMediaAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
