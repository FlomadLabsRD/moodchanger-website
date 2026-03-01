import Link from "next/link";
import PageLayout from "../components/PageLayout";
import CaipoText from "../components/CaipoText";

export default function PeoplePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for People
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
          Life is easier when you understand what affects how you feel. 
          <br />
          MoodChanger gives you 24/7 AI support with real-time 
          <br />
          and historical insights so you can track patterns, reduce perceived stress,
          <br />
          and build healthier habits before small issues escalate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-screen-2xl px-6">
          {/* Description */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              Your Virtual Coach & Companion
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
              <CaipoText text="CAIPO" /> is your personal AI partner, always there to guide you. 
          <br />
              It turns wearable data into clear, personalized insights, gentle nudges, 
          <br />
              and milestone support so you feel calmer, more in control, and supported every day.
            </p>
            <div className="mt-6 text-[#FDE035] font-medium">
              Real-time data + AI support → clearer patterns, calmer days, healthier outcomes.
            </div>
          </div>

          {/* Specific Challenges */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white text-center">
              For Specific Challenges
            </h3>
            <p className="mb-12 text-white/70 text-center max-w-2xl mx-auto">
              We&rsquo;ve built focused support for:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Allergies Card */}
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Allergies</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Feel more in control of your day.
                  Discover how pollen, sleep, 
                  and weather shape your mood and energy, 
                  and help you make better choices around it .
                </p>
                <Link 
                  href="/people/allergies"
                  className="mt-auto inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Stuttering Card */}
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Stuttering</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  A safe, private space to grow your voice. Build confidence with guided practice, real-life context tracking, and insights that help you speak with more ease.
                </p>
                <Link 
                  href="/people/stuttering"
                  className="mt-auto inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Cognitive Support Card */}
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Cognitive Support</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Bring more calm and structure to everyday life. Gentle reminders and routines support independence, reduce cognitive load, and help you feel steady and capable.
                </p>
                <Link 
                  href="/people/cognitive-loss"
                  className="mt-auto inline-flex items-center gap-2 text-[#FDE035] font-medium hover:text-[#FDE035]/80 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* For Everyone */}
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-semibold text-white">
              For Everyone
            </h3>
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <p className="mb-6 text-white/70 leading-relaxed">
                Even if you don&rsquo;t identify with those specific challenges, MoodChanger helps you:
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Notice patterns between mood, sleep, <br></br> and physical activity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Understand what drains or energizes you</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Make small changes that actually improve how you feel, think and adapt</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FDE035] mt-2 flex-shrink-0"></div>
                  <span className="text-white/80">Track progress over time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-12 text-2xl font-semibold text-white text-center">
            How It Works
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Daily check-in</h4>
                <p className="text-white/70">Quick mood and energy rating (30 seconds)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Passive signals</h4>
                <p className="text-white/70">Sleep data, activity, calendar patterns (optional)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Pattern insights</h4>
                <p className="text-white/70">&ldquo;Your energy is 40% higher on days you walk before noon&rdquo;</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Gentle suggestions</h4>
                <p className="text-white/70">Small, actionable changes based on your patterns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">Privacy First</h3>
            <p className="text-white/70">
              Your data stays private and is only shared with your permission.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
