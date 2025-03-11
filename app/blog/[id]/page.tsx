type Props = {
  params: { id: string }
}

export default function BlogPost({ params }: Props) {
  // Example post content
  const post = {
    id: params.id,
    title: `Blog Post ${params.id}`,
    content: `This is the content for blog post ${params.id}`,
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-muted-foreground">{post.content}</p>
      <div className="mt-6">
        <a href="/blog" className="text-primary hover:underline">
          &larr; Back to Blog
        </a>
      </div>
    </div>
  );
}
