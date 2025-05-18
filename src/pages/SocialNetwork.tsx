
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, MessageCircle, Heart, Share2, PlusCircle } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

const posts = [
  {
    id: 1,
    author: "Emma Johnson",
    avatar: "/placeholder.svg",
    time: "2 hours ago",
    content: "Has anyone tried the new drought-resistant corn variety? Looking for feedback before planting next season.",
    likes: 24,
    comments: 8,
    shares: 3
  },
  {
    id: 2,
    author: "Michael Chen",
    avatar: "/placeholder.svg",
    time: "Yesterday",
    content: "Excited to share that our farm's organic certification has been approved! Happy to answer any questions about the process for anyone considering it.",
    likes: 56,
    comments: 13,
    shares: 7
  },
  {
    id: 3,
    author: "Sarah Williams",
    avatar: "/placeholder.svg",
    time: "2 days ago",
    content: "Has anyone found an effective natural solution for aphid control in apple orchards? Our trees are struggling this season.",
    likes: 18,
    comments: 21,
    shares: 2
  }
];

const topExperts = [
  { name: "Dr. James Wilson", specialty: "Sustainable Agriculture", avatar: "/placeholder.svg" },
  { name: "Maria Rodriguez", specialty: "Organic Farming", avatar: "/placeholder.svg" },
  { name: "Robert Thomson", specialty: "Irrigation Systems", avatar: "/placeholder.svg" }
];

const SocialNetwork = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="farm-container">
          <div className="flex items-center gap-4 mb-8">
            <Users size={48} className="text-farm-darkgreen" />
            <h1 className="text-4xl font-bold text-farm-darkgreen">Social Network</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Create Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <textarea 
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-farm-darkgreen min-h-24"
                      placeholder="Share your farming experience or ask a question..."
                    ></textarea>
                    <div className="flex justify-between">
                      <Button variant="outline" className="border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white">
                        Add Photo
                      </Button>
                      <Button className="bg-farm-orange hover:bg-opacity-90">
                        Post
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {posts.map(post => (
                <Card key={post.id} className="shadow-lg">
                  <CardHeader>
                    <div className="flex gap-3">
                      <Avatar>
                        <img src={post.avatar} alt={post.author} className="rounded-full" />
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{post.author}</CardTitle>
                        <CardDescription>{post.time}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">{post.content}</p>
                    <div className="flex justify-between border-t pt-4">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-farm-darkgreen">
                        <Heart size={18} className="mr-1" /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-farm-darkgreen">
                        <MessageCircle size={18} className="mr-1" /> {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-farm-darkgreen">
                        <Share2 size={18} className="mr-1" /> {post.shares}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Community Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Members:</span>
                      <span className="font-bold">12,458</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Today:</span>
                      <span className="font-bold">843</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Questions Answered:</span>
                      <span className="font-bold">8,927</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Stories:</span>
                      <span className="font-bold">1,254</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Top Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topExperts.map((expert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Avatar>
                          <img src={expert.avatar} alt={expert.name} className="rounded-full" />
                        </Avatar>
                        <div>
                          <div className="font-semibold">{expert.name}</div>
                          <div className="text-xs text-gray-500">{expert.specialty}</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto text-farm-darkgreen hover:bg-green-50">
                          <PlusCircle size={16} />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2 border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white">
                      View All Experts
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Popular Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#OrganicFarming</span>
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#SoilHealth</span>
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#Irrigation</span>
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#PestControl</span>
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#CropRotation</span>
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#ClimateResilience</span>
                    <span className="bg-gray-100 text-farm-darkgreen px-3 py-1 rounded-full text-sm">#SmartFarming</span>
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

export default SocialNetwork;
