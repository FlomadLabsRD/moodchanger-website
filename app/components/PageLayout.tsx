import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import CaipoText from "./CaipoText";
import BackHomeLink from "./BackHomeLink";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0d2430] text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-[9999] border-b border-white/10 bg-[#0d2430]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-4">
          <Link href="/" className="flex items-center gap-4 group">
            {/* Logo Icon */}
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/flomadlogo.svg"
                alt="MoodChanger"
                width={52}
                height={52}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            {/* Logo Text */}
            <div className="flex items-baseline font-bold tracking-[0.05em]">
              <span className="text-2xl text-white">Mood</span>
              <span className="text-2xl text-[#FDE035]">Changer</span>
              <span className="text-2xl text-white">.ai</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-8">
            <Navigation />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      <BackHomeLink />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-8 py-16">
          <div className="flex justify-center text-sm text-white/70">
            <div className="flex flex-col items-center gap-3 text-center text-white/50">
              <p>
                <span>A </span>
                <Link
                  href="https://www.flolabsinnovations.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#FDE035] transition-colors hover:text-[#FDE035]/80"
                >
                  Flo Labs
                </Link>
                <span> product</span>
              </p>
              <p>
                Powered by{" "}
                <a
                  href="https://caipo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <CaipoText text="CAIPO" />
                </a>
              </p>
              <p>
                <CaipoText text="CAIPO is the intelligent layer that helps MoodChanger understand patterns in your daily life." />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
