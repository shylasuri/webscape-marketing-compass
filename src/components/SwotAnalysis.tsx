
import React from 'react';
import DataCard from './DataCard';

const SwotAnalysis = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">SWOT Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataCard title="Strengths" className="border-l-4 border-l-green-500">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                S
              </div>
              <div>
                <p className="font-medium">Strong online presence</p>
                <p className="text-sm text-muted-foreground">
                  High search engine rankings for key industry terms and growing social media engagement.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                S
              </div>
              <div>
                <p className="font-medium">Technical expertise</p>
                <p className="text-sm text-muted-foreground">
                  Evidence of strong technical content and solution offerings that showcase expertise.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                S
              </div>
              <div>
                <p className="font-medium">Customer testimonials</p>
                <p className="text-sm text-muted-foreground">
                  Multiple positive reviews and case studies available on the website.
                </p>
              </div>
            </li>
          </ul>
        </DataCard>
        
        <DataCard title="Weaknesses" className="border-l-4 border-l-red-500">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
                W
              </div>
              <div>
                <p className="font-medium">Content gaps</p>
                <p className="text-sm text-muted-foreground">
                  Several key industry topics have limited or outdated content coverage.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
                W
              </div>
              <div>
                <p className="font-medium">Mobile optimization</p>
                <p className="text-sm text-muted-foreground">
                  Site performs poorly on mobile devices with slow loading times and usability issues.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
                W
              </div>
              <div>
                <p className="font-medium">Limited pricing transparency</p>
                <p className="text-sm text-muted-foreground">
                  Pricing information is difficult to find or incomplete compared to competitors.
                </p>
              </div>
            </li>
          </ul>
        </DataCard>
        
        <DataCard title="Opportunities" className="border-l-4 border-l-blue-500">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                O
              </div>
              <div>
                <p className="font-medium">Emerging market segment</p>
                <p className="text-sm text-muted-foreground">
                  Potential to expand into the rapidly growing remote work tools market.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                O
              </div>
              <div>
                <p className="font-medium">Partnership potential</p>
                <p className="text-sm text-muted-foreground">
                  Several complementary service providers identified for potential collaboration.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                O
              </div>
              <div>
                <p className="font-medium">Content marketing gap</p>
                <p className="text-sm text-muted-foreground">
                  Low competition for several high-volume industry keywords.
                </p>
              </div>
            </li>
          </ul>
        </DataCard>
        
        <DataCard title="Threats" className="border-l-4 border-l-yellow-500">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-0.5">
                T
              </div>
              <div>
                <p className="font-medium">New market entrants</p>
                <p className="text-sm text-muted-foreground">
                  Several well-funded startups have entered the market in the past quarter.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-0.5">
                T
              </div>
              <div>
                <p className="font-medium">Price competition</p>
                <p className="text-sm text-muted-foreground">
                  Major competitors have recently reduced prices on comparable offerings.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0 mt-0.5">
                T
              </div>
              <div>
                <p className="font-medium">Technology shifts</p>
                <p className="text-sm text-muted-foreground">
                  Industry moving toward AI-driven solutions which are not currently in your product roadmap.
                </p>
              </div>
            </li>
          </ul>
        </DataCard>
      </div>
      
      <DataCard title="SWOT Strategy Recommendations">
        <div className="space-y-4">
          <p className="text-sm">
            Based on the SWOT analysis, here are the key strategic recommendations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium">Leverage Strengths for Opportunities</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-1.5"></div>
                  <span>Use technical expertise to develop solutions for remote work market</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-1.5"></div>
                  <span>Feature customer testimonials in partnership outreach efforts</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium">Address Weaknesses</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5"></div>
                  <span>Prioritize mobile optimization to improve user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5"></div>
                  <span>Develop content strategy to fill identified content gaps</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium">Capture Opportunities</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <span>Develop targeted content for high-value keywords with low competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <span>Initiate partnership discussions with complementary providers</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-3">
              <p className="text-sm font-medium">Mitigate Threats</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mt-1.5"></div>
                  <span>Develop AI integration roadmap to address technology shift</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mt-1.5"></div>
                  <span>Emphasize value over price in marketing materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DataCard>
    </div>
  );
};

export default SwotAnalysis;
