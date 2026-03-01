import PageLayout from "../components/PageLayout";
import CaipoText from "../components/CaipoText";

export default function AthletesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for Athletes
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            Performance depends on both mind and body. MoodChanger helps athletes track readiness, build resilience,
            recover smarter, and stay focused with real-time insights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-screen-2xl px-6">
          {/* Description */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              AI-Powered Athletic Performance
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
              <CaipoText text="CAIPO" /> combines pre-, in-, and post-session signals to monitor workload, fatigue, recovery,
              and readiness, then turns that data into AI-powered actionable insights for smarter training and more consistent performance.
            </p>
            <div className="mt-6 text-[#FDE035] font-medium">
              Real-time biometrics + AI-powered actionable insights -&gt; stronger readiness, recovery, and performance
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white text-center">
              Built for Athletic Excellence
            </h3>
            <p className="mx-auto mb-10 max-w-3xl text-center text-white/70 leading-relaxed">
              Train smarter, recover faster, and compete with confidence. 
              MoodChanger helps you turn daily data into winning habits for both mind and body.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pre-Performance Routines */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Pre-Performance Preparation</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Build a sustainable routine that prepares your mind and body before every session, so you start focused, steady, and ready to perform.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Pre-session routine tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Mental and physical readiness check-ins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Confidence and consistency trends</span>
                  </div>
                </div>
              </div>

              {/* Recovery Insights */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Recovery & Training Load</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Balance effort and recovery with clearer insights into your levels of fatigue, workload, and your capacity to train without losing momentum.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Sleep and recovery correlation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Training load and fatigue patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Recovery optimization guidance</span>
                  </div>
                </div>
              </div>

              {/* Competition Psychology */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Performance Readiness</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Understand how pressure, environment, and mindset affect decisions and execution, so you can stay composed when performance matters most.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Pressure response patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Environmental performance factors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Focus and resilience strategies</span>
                  </div>
                </div>
              </div>

              {/* Team Dynamics */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Coordinated Performance</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Strengthen your individual impact while improving team coordination through clearer communication, leadership awareness through shared performance patterns.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Leadership moments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Communication patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Team coordination signals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Athletes */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-12 text-2xl font-semibold text-white text-center">
            Athletic Performance Tracking
          </h3>
            <p className="mx-auto mb-10 max-w-3xl text-center text-white/70 leading-relaxed">
              Turn daily check-ins into a competitive edge. 
              Track your mindset, connect it to results, 
              and get clear actions to improve every session.
            </p>
            
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Pre-performance check-in</h4>
                <p className="text-white/70 md:whitespace-nowrap">Check in before every session. Log confidence, energy, focus, and readiness so you step in prepared to perform.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Performance correlation</h4>
                <p className="text-white/70 md:whitespace-nowrap">See how your mental state impacts your results, and identify the conditions that lead to stronger performance.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Analyze your performance patterns</h4>
                <p className="text-white/70">Uncover the habits behind your best days, like quality sleep, routines, and repeat what works.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-black font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Optimization recommendations</h4>
                <p className="text-white/70">Get personalized training guidance based on your patterns to train smarter, recover faster, and compete with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Privacy */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">All Sports, All Levels</h3>
            <p className="text-white/70 mb-6">
              From first training sessions to elite competition, MoodChanger supports your journey across individual and team sports.
            </p>
            <p className="text-white/70">
              Your data stays private and is only shared with your permission.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
