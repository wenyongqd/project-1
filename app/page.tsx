import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Routing Practice
        </h1>
        <p className="text-xl text-muted-foreground">
          Master Next.js routing with interactive exercises
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Routing</CardTitle>
            <CardDescription>Learn fundamental routing concepts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/about">Start</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dynamic Routing</CardTitle>
            <CardDescription>Explore the dynamic route patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog">Start</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Patterns</CardTitle>
            <CardDescription>Dive into nested and parallel routes</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard">Start</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Interactive Learning</h3>
            <p className="text-sm text-muted-foreground">
              Hands-on exercises with real-time feedback
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Progressive Difficulty</h3>
            <p className="text-sm text-muted-foreground">
              Start simple, then tackle advanced concepts
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with us</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
