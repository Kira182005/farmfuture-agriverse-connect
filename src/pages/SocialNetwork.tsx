
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import farmerProfile1 from '@/assets/farmer-profile-1.jpg';
import farmerProfile2 from '@/assets/farmer-profile-2.jpg';
import farmerProfile3 from '@/assets/farmer-profile-3.jpg';
import farmerProfile4 from '@/assets/farmer-profile-4.jpg';
import farmerProfile5 from '@/assets/farmer-profile-5.jpg';
import farmerProfile6 from '@/assets/farmer-profile-6.jpg';
import farmerProfile7 from '@/assets/farmer-profile-7.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, MessageCircle, Heart, Share2, PlusCircle, Image, Trash2 } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface PostImage {
  url: string;
  alt: string;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  time: string;
}

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  comments: Comment[];
  shares: number;
  image?: PostImage;
}

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Emma Johnson",
    avatar: farmerProfile1,
    time: "2 hours ago",
    content: "Has anyone tried the new drought-resistant corn variety? Looking for feedback before planting next season.",
    likes: 24,
    comments: [
      {
        id: 1,
        author: "Michael Chen",
        avatar: farmerProfile2,
        content: "I tried it last season. Good yield even with minimal rainfall!",
        time: "1 hour ago"
      }
    ],
    shares: 3
  },
  {
    id: 2,
    author: "Michael Chen",
    avatar: farmerProfile2,
    time: "Yesterday",
    content: "Excited to share that our farm's organic certification has been approved! Happy to answer any questions about the process for anyone considering it.",
    likes: 56,
    comments: [
      {
        id: 1,
        author: "Sarah Williams",
        avatar: farmerProfile3,
        content: "Congratulations! How long did the process take?",
        time: "20 hours ago"
      }
    ],
    shares: 7
  },
  {
    id: 3,
    author: "Sarah Williams",
    avatar: farmerProfile3,
    time: "2 days ago",
    content: "Has anyone found an effective natural solution for aphid control in apple orchards? Our trees are struggling this season.",
    likes: 18,
    comments: [],
    shares: 2
  }
];

const topExperts = [
  { name: "Dr. James Wilson", specialty: "Sustainable Agriculture", avatar: farmerProfile4 },
  { name: "Maria Rodriguez", specialty: "Organic Farming", avatar: farmerProfile6 },
  { name: "Robert Thomson", specialty: "Irrigation Systems", avatar: farmerProfile5 }
];

const SocialNetwork = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [commentContents, setCommentContents] = useState<{[key: number]: string}>({});
  const [showComments, setShowComments] = useState<{[key: number]: boolean}>({});
  const [postToDelete, setPostToDelete] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

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
      
      toast.success("Image selected successfully!");
    }
  };
  
  const handleCreatePost = () => {
    if (!newPostContent.trim() && !selectedImage) {
      toast.error("Please add some content or an image to your post");
      return;
    }
    
    const newPost: Post = {
      id: Date.now(),
      author: "Current User",
      avatar: farmerProfile7,
      time: "Just now",
      content: newPostContent,
      likes: 0,
      comments: [],
      shares: 0,
      image: selectedImage ? {
        url: imagePreview as string,
        alt: "User uploaded image"
      } : undefined
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setSelectedImage(null);
    setImagePreview(null);
    toast.success("Post created successfully!");
  };
  
  const toggleComments = (postId: number) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  const handleAddComment = (postId: number) => {
    const commentContent = commentContents[postId];
    
    if (!commentContent || !commentContent.trim()) {
      toast.error("Please enter a comment");
      return;
    }
    
    const newComment: Comment = {
      id: Date.now(),
      author: "Current User",
      avatar: farmerProfile7,
      content: commentContent,
      time: "Just now"
    };
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));
    
    // Clear the comment input for this post
    setCommentContents(prev => ({
      ...prev,
      [postId]: ''
    }));
    
    toast.success("Comment added successfully!");
  };
  
  const handleLike = (postId: number) => {
    if (likedPosts.has(postId)) {
      toast.error("You have already liked this post");
      return;
    }
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1
        };
      }
      return post;
    }));
    
    setLikedPosts(prev => new Set([...prev, postId]));
    toast.success("Post liked!");
  };

  const handleDeletePost = (postId: number) => {
    setPostToDelete(postId);
  };

  const confirmDeletePost = () => {
    if (postToDelete !== null) {
      setPosts(posts.filter(post => post.id !== postToDelete));
      setPostToDelete(null);
      toast.success("Post deleted successfully!");
    }
  };

  const cancelDeletePost = () => {
    setPostToDelete(null);
  };

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
                    <Textarea 
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-farm-darkgreen min-h-24"
                      placeholder="Share your farming experience or ask a question..."
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    
                    {imagePreview && (
                      <div className="relative">
                        <img 
                          src={imagePreview} 
                          alt="Selected preview" 
                          className="max-h-60 rounded-md mx-auto"
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
                    )}
                    
                    <div className="flex justify-between">
                      <div>
                        <Input 
                          type="file" 
                          accept="image/*" 
                          className="hidden"
                          onChange={handleImageSelect}
                          id="photo-upload"
                        />
                        <Button 
                          variant="outline" 
                          type="button"
                          className="border-farm-darkgreen text-farm-darkgreen hover:bg-farm-darkgreen hover:text-white"
                          onClick={() => document.getElementById('photo-upload')?.click()}
                        >
                          <Image size={18} className="mr-2" />
                          Add Photo
                        </Button>
                      </div>
                      <Button 
                        className="bg-farm-orange hover:bg-opacity-90"
                        onClick={handleCreatePost}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {posts.map(post => (
                <Card key={post.id} className="shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <Avatar>
                          <img src={post.avatar} alt={post.author} className="rounded-full" />
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{post.author}</CardTitle>
                          <CardDescription>{post.time}</CardDescription>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{post.content}</p>
                    
                    {post.image && (
                      <div className="mb-6">
                        <img 
                          src={post.image.url} 
                          alt={post.image.alt}
                          className="rounded-md max-h-96 mx-auto"
                        />
                      </div>
                    )}
                    
                    <div className="flex justify-between border-t pt-4 mb-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`${likedPosts.has(post.id) ? 'text-red-500 hover:text-red-600' : 'text-gray-600 hover:text-farm-darkgreen'}`}
                        onClick={() => handleLike(post.id)}
                        disabled={likedPosts.has(post.id)}
                      >
                        <Heart size={18} className={`mr-1 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} /> {post.likes}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600 hover:text-farm-darkgreen"
                        onClick={() => toggleComments(post.id)}
                      >
                        <MessageCircle size={18} className="mr-1" /> {post.comments.length}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-farm-darkgreen">
                        <Share2 size={18} className="mr-1" /> {post.shares}
                      </Button>
                    </div>
                    
                    {/* Comments Section */}
                    {showComments[post.id] && (
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Comments</h4>
                        {post.comments.map((comment) => (
                          <div key={comment.id} className="flex gap-2 mb-3">
                            <Avatar className="w-8 h-8">
                              <img src={comment.avatar} alt={comment.author} className="rounded-full" />
                            </Avatar>
                            <div className="flex-1 bg-gray-100 p-2 rounded-md">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-sm">{comment.author}</span>
                                <span className="text-xs text-gray-500">{comment.time}</span>
                              </div>
                              <p className="text-sm">{comment.content}</p>
                            </div>
                          </div>
                        ))}
                        
                        {/* Add Comment */}
                        <div className="flex gap-2 mt-4">
                          <Avatar className="w-8 h-8">
                            <img src={farmerProfile7} alt="Current User" className="rounded-full" />
                          </Avatar>
                          <div className="flex-1">
                            <Input
                              placeholder="Write a comment..."
                              value={commentContents[post.id] || ''}
                              onChange={(e) => setCommentContents(prev => ({
                                ...prev,
                                [post.id]: e.target.value
                              }))}
                              className="mb-2"
                            />
                            <Button
                              size="sm"
                              className="bg-farm-darkgreen hover:bg-opacity-90"
                              onClick={() => handleAddComment(post.id)}
                            >
                              Add Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
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

      {/* Delete Post Confirmation Dialog */}
      <AlertDialog open={postToDelete !== null} onOpenChange={cancelDeletePost}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDeletePost}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeletePost}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SocialNetwork;
