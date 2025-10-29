import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function PetsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white">
            MoodChanger for Pets
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            Notice the patterns your pet can&rsquo;t tell you about. Understand their stress, comfort, and happiness signals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Description */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
              Beyond What You Can See
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/70 leading-relaxed">
              Your pet&rsquo;s behavior tells a story. MoodChanger helps you understand the patterns behind their anxiety, comfort, energy levels, and overall wellbeing.
            </p>
            <div className="mt-6 text-[#FDE035] font-medium">
              Daily observations + Environmental tracking → Better pet care insights.
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white text-center">
              Understanding Your Pet&rsquo;s World
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Behavior Tracking */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Behavior Patterns</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Track subtle changes in eating, sleeping, playfulness, and social behavior that indicate emotional state.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Energy level changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Appetite variations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Social interaction patterns</span>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Environmental Factors</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Understand how weather, household changes, schedules, and visitors affect your pet&rsquo;s comfort.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Weather sensitivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Routine disruptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Household dynamics</span>
                  </div>
                </div>
              </div>

              {/* Stress & Anxiety */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Stress & Anxiety Detection</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Identify early warning signs of stress before they become behavioral problems. Track triggers and recovery patterns.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Stress trigger identification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Calming activity effectiveness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Recovery time patterns</span>
                  </div>
                </div>
              </div>

              {/* Health Insights */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDE035]/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#FDE035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.636 4.636a9 9 0 1212.728 0M12 7v5l3 3" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">Health Pattern Awareness</h4>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Notice behavioral changes that might indicate health issues. Share meaningful data with your vet.
                </p>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Gradual behavior changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Vet-ready reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FDE035] flex-shrink-0"></div>
                    <span>Timeline visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pet Types */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold text-white text-center">
              For All Your Family Members
            </h3>
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDE035]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FDE035]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.5 12a7.5 7.5 0 0015 0A7.5 7.5 0 004.5 12z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Dogs</h4>
                  <p className="text-white/60 text-sm">Separation anxiety, exercise needs, social behavior</p>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDE035]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FDE035]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cats</h4>
                  <p className="text-white/60 text-sm">Territory stress, hiding behavior, social preferences</p>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDE035]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#FDE035]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Other Pets</h4>
                  <p className="text-white/60 text-sm">Birds, rabbits, reptiles—any companion animal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Pets */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="mb-12 text-2xl font-semibold text-white text-center">
            Simple Daily Observations
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Quick daily check-in</h4>
                <p className="text-white/70">Note your pet&rsquo;s energy, appetite, social behavior, and any unusual signs (2 minutes)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Environmental context</h4>
                <p className="text-white/70">Track household changes, weather, visitors, schedule disruptions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Pattern recognition</h4>
                <p className="text-white/70">&ldquo;Your dog shows anxiety 2 days before thunderstorms&rdquo; or &ldquo;Your cat is most playful after morning sun&rdquo;</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-[#FDE035] flex items-center justify-center text-[#2aa68a] font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Actionable insights</h4>
                <p className="text-white/70">Preventive care suggestions and early intervention strategies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-white">Your Pet&rsquo;s Privacy Matters</h3>
            <p className="text-white/70 mb-6">
              We believe your pet&rsquo;s behavioral data is as private as your own. Your observations and insights stay with you.
            </p>
            <p className="text-white/70">
              Optional: Share relevant patterns with your veterinarian to support better care.
            </p>
          </div>
          
          <a 
            href="mailto:hello@moodchanger.ai?subject=Early Access Interest - Pets"
            className="inline-flex items-center gap-3 rounded-full bg-[#FDE035] px-8 py-4 text-lg font-semibold text-[#2aa68a] transition-all duration-300 hover:bg-[#FDE035]/90 hover:scale-105"
          >
            Get Early Access
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#FDE035] hover:text-[#FDE035]/80 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}