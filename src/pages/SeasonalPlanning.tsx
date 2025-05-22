
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Clock, Image } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const seasonalData = [
  { month: 'Jan', yield: 30 },
  { month: 'Feb', yield: 40 },
  { month: 'Mar', yield: 45 },
  { month: 'Apr', yield: 55 },
  { month: 'May', yield: 70 },
  { month: 'Jun', yield: 80 },
  { month: 'Jul', yield: 100 },
  { month: 'Aug', yield: 90 },
  { month: 'Sep', yield: 75 },
  { month: 'Oct', yield: 60 },
  { month: 'Nov', yield: 50 },
  { month: 'Dec', yield: 35 },
];

const SeasonalPlanning = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      toast.success("Field image uploaded successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="farm-container">
          <div className="flex items-center gap-4 mb-8">
            <Clock size={48} className="text-farm-darkgreen" />
            <h1 className="text-4xl font-bold text-farm-darkgreen">Seasonal Planning</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 shadow-lg">
              <CardHeader>
                <CardTitle>Crop Yield Forecast</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="w-full" style={{ height: '380px' }}>
                  <ChartContainer config={{ yield: { theme: { light: '#1B5E20', dark: '#4CAF50' } } }}>
                    <AreaChart 
                      data={seasonalData}
                      margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1B5E20" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#1B5E20" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} width={30} />
                      <CartesianGrid strokeDasharray="3 3" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="yield" stroke="#1B5E20" fillOpacity={1} fill="url(#colorYield)" />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Upload Field Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-4">
                    {imagePreview ? (
                      <div className="relative w-full">
                        <img 
                          src={imagePreview} 
                          alt="Field preview" 
                          className="w-full h-auto rounded-lg border border-gray-300"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            setSelectedImage(null);
                            setImagePreview(null);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-full flex flex-col items-center justify-center">
                        <p className="text-gray-500 mb-4">Upload an image of your field</p>
                        <label className="cursor-pointer">
                          <Input 
                            type="file" 
                            accept="image/*" 
                            className="hidden"
                            onChange={handleImageSelect}
                          />
                          <Button className="bg-farm-orange hover:bg-opacity-90">
                            <Image size={18} className="mr-2" />
                            Upload Image
                          </Button>
                        </label>
                      </div>
                    )}
                    
                    {selectedImage && (
                      <div className="w-full">
                        <p className="text-sm text-green-600 font-medium">
                          Image uploaded successfully! Our AI system will analyze your field and provide recommendations.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Seasonal Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="bg-farm-darkgreen h-2 w-2 rounded-full"></span>
                      <span>Rotate corn with soybeans in Field A</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-farm-darkgreen h-2 w-2 rounded-full"></span>
                      <span>Begin barley planting mid-April</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-farm-darkgreen h-2 w-2 rounded-full"></span>
                      <span>Implement cover crops in Field C</span>
                    </li>
                  </ul>
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

export default SeasonalPlanning;
