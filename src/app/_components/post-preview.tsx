import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
};

export function PostPreview({ title, image, slug, meta }: Props) {
  return (
    <div className="group h-full">
      <div className="relative h-full">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

        <div className="relative h-full flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2">
          <div className="overflow-hidden">
            <div className="transform transition-transform duration-500 group-hover:scale-110">
              <CoverImage slug={slug} title={title} src={image} />
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl mb-4 leading-snug font-bold">
                <Link
                  href={`/posts/${slug}`}
                  className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-sky-600 group-hover:to-blue-600 transition-all duration-300"
                >
                  {title}
                </Link>
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
                {meta}
              </p>
            </div>

            <Link
              href={`/posts/${slug}`}
              className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold mt-4 group-hover:gap-4 transition-all duration-300"
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
    </div>
  );
}
