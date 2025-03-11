'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlogLoading from './loading';

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // Example blog posts data with more details
  const examplePosts = [
    { 
      id: '1', 
      title: 'First Post', 
      description: 'This is a sample blog post about web development',
      date: '2023-10-15',
      author: 'John Doe'
    },
    { 
      id: '2', 
      title: 'Second Post', 
      description: 'Exploring the latest trends in UI/UX design',
      date: '2023-10-10',
      author: 'Jane Smith'
    },
    { 
      id: '3', 
      title: 'Third Post', 
      description: 'A deep dive into React performance optimization',
      date: '2023-10-05',
      author: 'Mike Johnson'
    },
  ];

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(examplePosts);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BlogLoading />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button variant="outline">Create New Post</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription className="text-sm">
                <span className="block text-gray-500">{post.date}</span>
                <span className="block text-gray-400">by {post.author}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Button variant="link" className="p-0">
                Read More →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
