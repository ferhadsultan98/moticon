import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 font-mono text-xs text-muted sm:flex-row sm:px-6">
        <span>moticon · MIT license</span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a href="#" className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            npm
          </a>
          <Link href="/icons" className="transition-colors hover:text-accent">
            browse icons
          </Link>
          <Link href="/playground" className="transition-colors hover:text-accent">
            playground
          </Link>
          <Link href="/examples" className="transition-colors hover:text-accent">
            examples
          </Link>
          <Link href="/changelog" className="transition-colors hover:text-accent">
            changelog
          </Link>
        </div>
      </div>
    </footer>
  );
}
