import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  date?: string;
  meta?: string;
  tags?: string[];
};

export function PostHeader({ title, date, meta, tags }: Props) {
  return (
    <div className="animate-fade-in">
      <PostTitle>{title}</PostTitle>
      <div className="max-w-4xl mx-auto">
        {meta && (
          <div className="mb-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {meta}
          </div>
        )}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {date && (
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
              <svg
                className="w-5 h-5 text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <DateFormatter dateString={date} />
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-sky-500/10 to-blue-500/10 dark:from-sky-500/20 dark:to-blue-500/20 border border-sky-200 dark:border-sky-700 rounded-full font-medium text-sky-700 dark:text-sky-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 rounded-full mb-12"></div>
      </div>
    </div>
  );
}
