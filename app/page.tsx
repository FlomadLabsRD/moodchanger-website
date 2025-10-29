import Link from "next/link";
import PageLayout from "./components/PageLayout";

export default function Page() {
  const canvaEmbed =
    "https://www.canva.com/design/DAGbplfirz8/lSCilOKokFaeeRWKz4lJ4A/view?embed"; // Canva Share → More → Embed

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-20 lg:pb-32">
          {/* Hero Text */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
              Coming Soon
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 lg:text-xl">
              We&apos;re building something amazing. While we craft the full experience, explore our presentation below to discover what MOODCHANGER.AI is all about.
            </p>
          </div>

          {/* Video Section */}
          <div className="mx-auto max-w-7xl">
            <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-[#FDE035]/30 hover:shadow-[#FDE035]/20">
              <div className="relative w-full overflow-hidden rounded-2xl pt-[45%]">
                <iframe
                  src={canvaEmbed}
                  className="absolute left-0 top-0 h-full w-full border-0 z-0"
                  allowFullScreen
                  title="MOODCHANGER.AI Presentation"
                />
              </div>
              
              {/* Video overlay controls */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#FDE035] animate-pulse" />
                  <span className="text-sm font-medium text-white/90">Live Presentation</span>
                </div>
                <a
                  href={canvaEmbed}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-[#FDE035]/20 px-4 py-2.5 text-sm font-medium text-[#2aa68a] transition-all duration-300 hover:bg-[#FDE035]/30 hover:scale-105"
                >
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open presentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How MoodChanger Works Section */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-center text-white lg:text-4xl">
            How MoodChanger Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* People Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
              <h3 className="mb-4 text-xl font-semibold text-white">For People</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                Understand patterns in mood, sleep, and daily life. Specialized support for allergies, stuttering, and cognitive changes.
              </p>
              <Link 
                href="/people"
                className="inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Athletes Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
              <h3 className="mb-4 text-xl font-semibold text-white">For Athletes</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                Train your mind as precisely as your body. Pre-performance routines and recovery insights.
              </p>
              <Link 
                href="/athletes"
                className="inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pets Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
              <h3 className="mb-4 text-xl font-semibold text-white">For Pets</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                Notice anxiety, stress, and behavior patterns your pet can&rsquo;t tell you about.
              </p>
              <Link 
                href="/pets"
                className="inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
