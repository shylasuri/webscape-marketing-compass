
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import DataCard from './DataCard';

const CrawlerConfig = () => {
  return (
    <DataCard title="Crawler Configuration">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Target Company</label>
          <Input 
            placeholder="example - zepto" 
            className="mt-1"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Crawl Depth</label>
            <Select defaultValue="2">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select depth" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Level 1 - Homepage only</SelectItem>
                <SelectItem value="2">Level 2 - One level deep</SelectItem>
                <SelectItem value="3">Level 3 - Two levels deep</SelectItem>
                <SelectItem value="4">Level 4 - Three levels deep</SelectItem>
                <SelectItem value="5">Level 5 - Complete scan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium">Analysis Type</label>
            <Select defaultValue="all">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select analysis type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
                <SelectItem value="swot">SWOT</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="all">All Analytics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm font-medium">Crawl Speed</label>
            <span className="text-xs text-muted-foreground">5 req/second</span>
          </div>
          <Slider defaultValue={[5]} max={10} step={1} className="mt-1" />
        </div>
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button variant="outline">Save Configuration</Button>
          <Button className="bg-secondary hover:bg-secondary/80">Start Crawling</Button>
        </div>
      </div>
    </DataCard>
  );
};

export default CrawlerConfig;
