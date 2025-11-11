import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-sky-200 dark:border-sky-800 bg-gradient-to-br from-sky-50/50 via-blue-50/50 to-indigo-50/50 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-slate-900/50 backdrop-blur-sm">
      <Container>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-4">
                <span className="text-gradient">Built with Next.js</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Powered by modern web technologies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Documentation
              </a>
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="px-8 py-3 glass hover:bg-white/40 dark:hover:bg-slate-800/40 font-semibold rounded-full transition-all duration-300 hover:scale-105 text-center text-gray-800 dark:text-gray-200"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-sky-200 dark:border-sky-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-400">
              <p className="text-sm">© 2025 PactSpy. All rights reserved.</p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
