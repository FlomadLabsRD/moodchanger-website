import Link from "next/link";
import PageLayout from "./components/PageLayout";
import CaipoText from "./components/CaipoText";

export default function Page() {
  const canvaEmbed =
    "https://www.canva.com/design/DAG2FPh_Pnw/kbyAD8FOrpxqfTeDhJgYCQ/view?embed"; // Canva Share → More → Embed

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-screen-2xl px-6 pt-16 pb-24 lg:pt-20 lg:pb-32">
          {/* Hero Text */}
          <div className="mb-8 text-center">
            <p className="mb-4 text-3xl font-semibold text-[#FDE035] lg:text-4xl">
              Transforming your wellbeing, one insight at a time
            </p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 lg:text-xl">
              <span className="font-semibold text-white">All your AI in one app.</span>
              <br />
              Powered by <CaipoText text="FloBrain" />,
              <br />
              Boost productivity, wellness, and lifestyle.
            </p>
          </div>
          {/* Video Section */}
          <div className="mx-auto max-w-screen-2xl">
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
                  className="group/link inline-flex items-center gap-2 rounded-full bg-[#FDE035]/20 px-4 py-2.5 text-sm font-medium text-[#0d2430] transition-all duration-300 hover:bg-[#FDE035]/30 hover:scale-105"
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

      {/* Problem Section */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-center text-white lg:text-4xl">
            The Challenge
          </h2>
          <p className="mb-12 text-center text-white/70 max-w-3xl mx-auto text-lg">
            Managing your health and wellness can be simpler with the right support.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-20 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h1 className="text-lg font-semibold text-white mb-2">Lack of Motivation</h1>
              <p className="text-white/70 text-sm">Inconsistent routines in maintaining healthy routines, such as exercise, sleep, 
              <br></br>and nutrition.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Generic Advice</h3>
              <p className="text-white/70 text-sm">One-size-fits-all recommendations that don&rsquo;t fit your unique body and emotions.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Continuous Support</h3>
              <p className="text-white/70 text-sm">Health needs are ongoing and sometimes require support outside appointments.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Disconnected Data</h3>
              <p className="text-white/70 text-sm">Health data spread across different devices with no unified view.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Functional Imbalance</h3>
              <p className="text-white/70 text-sm">Lack of body and mind awareness leads to misaligned solutions.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6">
              <div className="w-10 h-10 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Poor performance outcomes</h3>
              <p className="text-white/70 text-sm">Reduced quality of life due to reduced poor planning and decision making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 border-t border-white/10 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-transparent">
        <div className="mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-center text-white lg:text-4xl">
            The MoodChanger Solution
          </h2>
          <p className="mb-12 text-center text-white/70 max-w-3xl mx-auto text-lg">
            <CaipoText text="CAIPO" /> and MoodChanger work together to provide intelligent, personalized support.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-[#FDE035]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 AI Support</h3>
              <p className="text-white/70">Virtual coach and companion available anytime, acting as your personal wellness assistant</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-[#FDE035]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized Insights</h3>
              <p className="text-white/70">Real-time and historical data from wearables create recommendations tailored just for you</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-[#FDE035]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proactive Nudges</h3>
              <p className="text-white/70">Smart reminders about goals, habit tracking, and milestone celebrations keep you motivated.</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-[#FDE035]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Unified Platforms</h3>
              <p className="text-white/70">All your smart devices work together seamlessly all in one view.</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-[#FDE035]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Stress Management</h3>
              <p className="text-white/70">Neurofeedback and relaxation techniques help you improve productivity and wellbeing.</p>
            </div>

            <div className="rounded-2xl border border-[#FDE035]/20 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-[#FDE035]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#FDE035]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proactive Wellness Support</h3>
              <p className="text-white/70">Lifestyle tracking and actionable guidance support healthier decisions over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How MoodChanger Works Section */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-center text-white lg:text-4xl">
            How MoodChanger Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* People Card */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
              <h3 className="mb-4 text-xl font-semibold text-white">For People</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                Understand your routines to have personalized insights and guidance.
              </p>
              <Link 
                href="/people"
                className="mt-auto inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Athletes Card */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
              <h3 className="mb-4 text-xl font-semibold text-white">For Athletes</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                Train your mind as precisely as your body. Pre-performance routines and recovery insights.
              </p>
              <Link 
                href="/athletes"
                className="mt-auto inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Pets Card */}
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
              <h3 className="mb-4 text-xl font-semibold text-white">For Pets</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                Notice anxiety, stress, and negative behavior patterns that your pet can not tell you about.
              </p>
              <Link 
                href="/pets"
                className="mt-auto inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
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
