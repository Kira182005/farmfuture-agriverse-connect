
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Droplet } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const irrigationData = [
  { date: '06/01', moisture: 65, rainfall: 12, irrigation: 30 },
  { date: '06/02', moisture: 75, rainfall: 0, irrigation: 0 },
  { date: '06/03', moisture: 70, rainfall: 0, irrigation: 0 },
  { date: '06/04', moisture: 65, rainfall: 0, irrigation: 0 },
  { date: '06/05', moisture: 55, rainfall: 0, irrigation: 20 },
  { date: '06/06', moisture: 68, rainfall: 0, irrigation: 0 },
  { date: '06/07', moisture: 62, rainfall: 15, irrigation: 0 },
  { date: '06/08', moisture: 75, rainfall: 8, irrigation: 0 },
  { date: '06/09', moisture: 70, rainfall: 0, irrigation: 0 },
  { date: '06/10', moisture: 65, rainfall: 0, irrigation: 0 },
  { date: '06/11', moisture: 60, rainfall: 0, irrigation: 15 },
  { date: '06/12', moisture: 70, rainfall: 0, irrigation: 0 },
  { date: '06/13', moisture: 65, rainfall: 0, irrigation: 0 },
  { date: '06/14', moisture: 60, rainfall: 20, irrigation: 0 },
];

const IrrigationManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="farm-container">
          <div className="flex items-center gap-4 mb-8">
            <Droplet size={48} className="text-farm-darkgreen" />
            <h1 className="text-4xl font-bold text-farm-darkgreen">Irrigation Management</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 shadow-lg">
              <CardHeader>
                <CardTitle>Soil Moisture & Irrigation Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ChartContainer 
                    config={{ 
                      moisture: { theme: { light: '#1B5E20', dark: '#4CAF50' } },
                      rainfall: { theme: { light: '#3498db', dark: '#2980b9' } },
                      irrigation: { theme: { light: '#FF9800', dark: '#F57C00' } }
                    }}
                  >
                    <LineChart data={irrigationData}>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="moisture" stroke="#1B5E20" activeDot={{ r: 8 }} strokeWidth={2} />
                      <Line type="monotone" dataKey="rainfall" stroke="#3498db" strokeDasharray="5 5" />
                      <Line type="monotone" dataKey="irrigation" stroke="#FF9800" />
                    </LineChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Current Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Soil Moisture:</span>
                      <span className="font-bold text-farm-darkgreen">65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Last Irrigation:</span>
                      <span className="font-bold">June 11</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Next Scheduled:</span>
                      <span className="font-bold">June 16</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Water Saved:</span>
                      <span className="font-bold text-farm-orange">22% YTD</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Manual Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-farm-darkgreen hover:bg-opacity-90">
                      Begin Irrigation Now
                    </Button>
                    <Button variant="outline" className="w-full border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white">
                      View Detailed Reports
                    </Button>
                    <Button variant="outline" className="w-full border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white">
                      Edit Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IrrigationManagement;
