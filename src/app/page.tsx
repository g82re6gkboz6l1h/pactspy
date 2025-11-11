import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Header />
      <Container>
        <div className="mt-16 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Article
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></div>
        </div>
        <HeroPost
          title={heroPost.title}
          image={heroPost.image}
          slug={heroPost.slug}
          meta={heroPost.meta}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
