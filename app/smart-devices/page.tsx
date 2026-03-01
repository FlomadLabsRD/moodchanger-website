import PageLayout from "../components/PageLayout";
import CaipoText from "../components/CaipoText";

interface SmartDeviceProfile {
  id: string;
  title: string;
  intro: string;
  companion: string;
  tagline: string;
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  applications: Array<{
    title: string;
    description: string;
  }>;
}

const smartDeviceProfiles: SmartDeviceProfile[] = [
  {
    id: "ai-health-insights",
    title: "AI Health Insights",
    intro:
      "AI Health Insights analyze gut microbiome and metabolic data to generate AI-driven recommendations that improve digestion, reduce inflammation, and enhance overall well-being.",
    companion:
      "CAIPO turns these insights into personalized wellness plans that boost physical performance and energy levels. MoodChanger applies them to support emotional balance and stress reduction through the gut-brain connection.",
    tagline: "Gut microbiome intelligence + AI guidance -> better digestion, energy, and emotional balance",
    capabilities: [
      { title: "Gut Testing", description: "Analyzes microbiome health" },
      { title: "Custom Plans", description: "Personalized food and supplement recommendations" },
      { title: "AI Insights", description: "Actionable steps for wellness" },
    ],
    applications: [
      { title: "Healthcare", description: "Address inflammation and chronic disease risks." },
      { title: "Sports", description: "Improve performance with gut health optimization." },
      { title: "Productivity", description: "Enhance energy and mental clarity." },
      { title: "Mood Changing", description: "Support emotional balance via gut-brain health." },
    ],
  },
  {
    id: "smart-scale",
    title: "Smart Scale",
    intro:
      "Detailed insights into body composition, including fat percentage, muscle mass, and cardiovascular health. Help users monitor their health and track progress effortlessly.",
    companion:
      "With CAIPO, personalized health recommendations encourage healthy habits and help users achieve fitness goals. MoodChanger uses Smart Scale data to boost confidence and motivation by visualizing progress and promoting a positive self-image.",
    tagline: "Body composition insights + AI guidance -> healthier habits and stronger confidence",
    capabilities: [
      { title: "Auto-sync", description: "Connects via Wi-Fi or Bluetooth" },
      { title: "Multi-User", description: "Supports multiple profiles" },
      { title: "Health Metrics", description: "Includes heart health insights" },
    ],
    applications: [
      { title: "Healthcare", description: "Monitor weight trends and cardiovascular health." },
      { title: "Sports", description: "Track body composition for performance improvements." },
      { title: "Productivity", description: "Build healthy habits with reminders." },
      { title: "Mood Changing", description: "Boost confidence with progress tracking." },
    ],
  },
  {
    id: "smart-bottle",
    title: "Smart Bottle",
    intro:
      "Self-cleaning water bottle that uses UV-C technology to purify water and eliminate harmful bacteria. Its sleek, insulated design ensures drinks remain fresh and at the perfect temperature.",
    companion:
      "Integrated with CAIPO, it tracks hydration levels and notifies users to drink regularly. This supports cognitive and physical performance. MoodChanger uses the smart bottle to support proper hydration, helping to reduce stress and improve mood.",
    tagline: "Hydration tracking + AI reminders -> better focus, energy, and emotional balance",
    capabilities: [
      { title: "UV-C Tech", description: "Purifies water and bottle" },
      { title: "Insulated", description: "Keeps drinks hot or cold" },
      { title: "Eco-friendly", description: "Reduces plastic waste" },
    ],
    applications: [
      { title: "Healthcare", description: "Support clean water intake." },
      { title: "Sports", description: "Stay hydrated during workouts." },
      { title: "Productivity", description: "Maintain focus with proper hydration." },
      { title: "Mood Changing", description: "Boost mood with hydration reminders." },
    ],
  },
  {
    id: "smart-robots",
    title: "Smart Robots",
    intro:
      "Equipped with 3D LiDAR, depth cameras, and gyroscopes for navigation and task execution.",
    companion:
      "Integrated with CAIPO, these robots automate repetitive tasks and enhance workflow efficiency. MoodChanger brings a human touch by enabling robots to assist with emotional engagement and stress reduction, making them valuable in therapeutic and interactive settings.",
    tagline: "Robotic intelligence + AI support -> smarter automation and richer human interaction",
    capabilities: [
      { title: "3D LiDAR Navigation", description: "Enables precise movement and obstacle detection" },
      { title: "Task Automation", description: "Streamlines repetitive workflows for efficiency" },
      { title: "Emotional Engagement", description: "Assists with stress reduction and therapeutic support" },
    ],
    applications: [
      {
        title: "Healthcare",
        description:
          "Enables research into biomechanics and prosthetic development with precise locomotion analysis.",
      },
      {
        title: "Sports",
        description: "Provides dynamic agility training and testing for robotic and human movement coordination.",
      },
      {
        title: "Productivity",
        description: "Supports industrial tasks with autonomous navigation and payload transport in complex environments.",
      },
      {
        title: "Mood Changing",
        description:
          "Engages users with interactive robotic demonstrations and entertainment, fostering interest and excitement in robotics.",
      },
    ],
  },
];

export default function SmartDevicesPage() {
  return (
    <PageLayout>
      {smartDeviceProfiles.map((smartDeviceProfile, index) => {
        const TitleTag = index === 0 ? "h1" : "h2";

        return (
          <section
            key={smartDeviceProfile.id}
            id={smartDeviceProfile.id}
            className={`scroll-mt-28 ${index === 0 ? "relative py-16 lg:py-24" : "border-t border-white/10 py-16"}`}
          >
            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
            )}

            <div className="relative mx-auto max-w-screen-2xl px-6">
              <div className="mb-16 text-center">
                <TitleTag className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                  {smartDeviceProfile.title}
                </TitleTag>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80 lg:text-xl">
                  <CaipoText text={smartDeviceProfile.intro} />
                </p>
              </div>

              <div className="mb-16 text-center">
                <h3 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
                  {smartDeviceProfile.title} + MoodChanger
                </h3>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
                  <CaipoText text={smartDeviceProfile.companion} />
                </p>
                <div className="mt-6 font-medium text-[#FDE035]">{smartDeviceProfile.tagline}</div>
              </div>

              <div className="mb-16">
                <h3 className="mb-8 text-center text-2xl font-semibold text-white">Core Capabilities</h3>
                <div className="grid gap-8 md:grid-cols-3">
                  {smartDeviceProfile.capabilities.map((capability) => (
                    <div
                      key={capability.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 text-center transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10"
                    >
                      <h4 className="mb-3 text-xl font-semibold text-white">{capability.title}</h4>
                      <p className="leading-relaxed text-white/70">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h3 className="mb-8 text-center text-2xl font-semibold text-white">Features &amp; Applications</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  {smartDeviceProfile.applications.map((application) => (
                    <div
                      key={application.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-[#FDE035]/30 hover:shadow-lg hover:shadow-[#FDE035]/10"
                    >
                      <h4 className="mb-3 text-xl font-semibold text-[#FDE035]">{application.title}</h4>
                      <p className="leading-relaxed text-white/70">{application.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

    </PageLayout>
  );
}
