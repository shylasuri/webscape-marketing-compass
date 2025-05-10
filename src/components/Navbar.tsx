
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-white font-bold">
          WC
        </div>
        <h1 className="text-xl font-bold">WebCrawler Analytics</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-primary">
          Dashboard
        </Button>
        <Button variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-primary">
          History
        </Button>
        <Button variant="ghost" className="text-primary-foreground hover:text-secondary hover:bg-primary">
          Settings
        </Button>
        <Button variant="outline" className="bg-secondary text-white hover:bg-secondary/80">
          Start New Crawl
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
