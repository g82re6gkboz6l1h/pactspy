import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
};

export function HeroPost({ title, image, slug, meta }: Props) {
  return (
    <section className="mb-24 md:mb-32 animate-fade-in">
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>

        <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
          <div className="overflow-hidden">
            <CoverImage title={title} src={image} slug={slug} />
          </div>
          <div className="p-8 md:p-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-white text-sm font-semibold mb-6 shadow-glow">
              Featured
            </div>
            <h3 className="mb-6 text-4xl lg:text-6xl leading-tight font-bold">
              <Link
                href={`/posts/${slug}`}
                className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent hover:from-sky-600 hover:to-blue-600 transition-all duration-300"
              >
                {title}
              </Link>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
              {meta}
            </p>
            <Link
              href={`/posts/${slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-semibold shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
            >
              Read Article
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
