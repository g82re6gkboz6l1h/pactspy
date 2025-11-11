import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          <span className="text-gradient-warm">Latest Articles</span>
        </h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-32">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <PostPreview
              title={post.title}
              image={post.image}
              slug={post.slug}
              meta={post.meta}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
