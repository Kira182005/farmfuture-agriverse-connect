
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart2, Zap, AlertTriangle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const yieldData = [
  { name: 'Corn', previous: 65, current: 78 },
  { name: 'Wheat', previous: 48, current: 62 },
  { name: 'Soybeans', previous: 72, current: 85 },
  { name: 'Barley', previous: 55, current: 60 },
];

const resourceData = [
  { name: 'Water', value: 35 },
  { name: 'Fertilizer', value: 25 },
  { name: 'Pesticides', value: 15 },
  { name: 'Labor', value: 25 },
];

const COLORS = ['#1B5E20', '#4CAF50', '#8BC34A', '#CDDC39'];

const insights = [
  {
    icon: <Zap size={24} className="text-farm-orange" />,
    title: "Energy Usage Optimization",
    description: "Reduce energy consumption by scheduling irrigation during off-peak hours."
  },
  {
    icon: <AlertTriangle size={24} className="text-red-500" />,
    title: "Pest Risk Alert",
    description: "Increased risk of aphid infestation in north fields due to recent weather patterns."
  },
  {
    icon: <TrendingUp size={24} className="text-farm-darkgreen" />,
    title: "Yield Improvement Opportunity",
    description: "Adjust nitrogen application in Field C to potentially increase yields by 12%."
  }
];

const AIAnalytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="farm-container">
          <div className="flex items-center gap-4 mb-8">
            <BarChart2 size={48} className="text-farm-darkgreen" />
            <h1 className="text-4xl font-bold text-farm-darkgreen">AI Analytics</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Crop Yield Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ChartContainer 
                    config={{ 
                      previous: { theme: { light: '#8BC34A', dark: '#CDDC39' } },
                      current: { theme: { light: '#1B5E20', dark: '#4CAF50' } }
                    }}
                  >
                    <BarChart data={yieldData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="previous" name="Previous Year" fill="#8BC34A" />
                      <Bar dataKey="current" name="Current Year" fill="#1B5E20" />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Resource Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ChartContainer config={{}}>
                    <PieChart>
                      <Pie
                        data={resourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {resourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg lg:col-span-2">
              <CardHeader>
                <CardTitle>AI-Generated Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {insights.map((insight, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        {insight.icon}
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{insight.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg lg:col-span-2">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">Based on the analytics, we recommend the following actions:</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-farm-darkgreen flex items-center justify-center text-white font-bold">1</div>
                      <p>Review irrigation scheduling for all fields to optimize water usage</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-farm-darkgreen flex items-center justify-center text-white font-bold">2</div>
                      <p>Implement pest control measures in the north fields within 3 days</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-farm-darkgreen flex items-center justify-center text-white font-bold">3</div>
                      <p>Adjust nitrogen application rates according to recommendation</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button className="bg-farm-orange hover:bg-opacity-90 mr-4">
                      Generate Full Report
                    </Button>
                    <Button variant="outline" className="border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAnalytics;
