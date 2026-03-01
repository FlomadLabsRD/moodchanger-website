import PageLayout from "../components/PageLayout";
import CaipoText from "../components/CaipoText";

interface WearableProfile {
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

const wearableProfiles: WearableProfile[] = [
  {
    id: "smart-glasses",
    title: "Smart Glasses",
    intro:
      "Augmented Reality (AR) and AI converge to transform wearable technology. Equipped with advanced sensors for gesture control, mixed reality, and hands-free operation, Smart Glasses deliver real-time assistance and productivity through CAIPO integration.",
    companion:
      "When paired with MoodChanger, Smart Glasses go beyond function and help users enhance focus, relaxation, and emotional well-being in any environment.",
    tagline: "Real-time assistance + AI support -> better focus, calmer states, stronger productivity",
    capabilities: [
      { title: "Voice Commands", description: "Control your world hands-free" },
      { title: "Developer Friendly", description: "Open-source platform" },
      { title: "Mixed reality", description: "Seamless digital overlays" },
    ],
    applications: [
      { title: "Healthcare", description: "Hands-free access to patient data for surgeons or medical staff." },
      { title: "Sports", description: "Real-time performance stats, navigation, or tactical insights during games." },
      { title: "Productivity", description: "Augmented reality (AR) overlays for workflow management or multitasking." },
      {
        title: "Mood Changing",
        description: "Immersive experiences or calming environments projected through AR to influence emotional states.",
      },
    ],
  },
  {
    id: "eeg-hardware",
    title: "EEG Hardware",
    intro:
      "EEG Hardware monitors brain activity in real time, providing insights into mental states, cognitive performance, and stress.",
    companion:
      "Integrated with CAIPO, it enhances focus and productivity by identifying peak mental performance periods. Through MoodChanger, it leverages neurofeedback to promote relaxation and emotional balance.",
    tagline: "Real-time brain activity + neurofeedback -> stronger focus and emotional balance",
    capabilities: [
      { title: "Battery Life", description: "Extended operational time" },
      { title: "Software Intergration", description: "Compatible with applications" },
      { title: "EEG Signal Monitoring", description: "Tracks brainwave activity" },
    ],
    applications: [
      { title: "Healthcare", description: "Use in neurological assessments, mental health therapies." },
      { title: "Sports", description: "Brainwave analysis to improve performance through mental training." },
      {
        title: "Productivity",
        description: "Enhancing concentration and cognitive efficiency based on real-time feedback.",
      },
      {
        title: "Mood Changing",
        description: "Targeted audio stimulation or biofeedback for mood improvement.",
      },
    ],
  },
  {
    id: "smart-ring",
    title: "Smart Ring",
    intro:
      "Compact and stylish wearable that tracks health metrics such as heart rate, sleep patterns, and stress levels.",
    companion:
      "With CAIPO, it provides actionable insights to improve wellness and streamline productivity through gesture-based controls. MoodChanger integrates with the ring's haptic feedback to deliver calming vibrations and manage stress effectively.",
    tagline: "Wearable biometrics + haptic feedback -> smarter wellness and better emotional balance",
    capabilities: [
      { title: "Activity Tracking", description: "Daily activity logs" },
      { title: "Water Resistance", description: "Durable against moisture" },
      { title: "Customizable Alerts", description: "Personalized notifications setup" },
    ],
    applications: [
      { title: "Healthcare", description: "Monitoring vital signs and sleep patterns." },
      { title: "Sports", description: "Track activity, heart rate and movement patterns." },
      { title: "Productivity", description: "Quick gesture-based controls, notifications, and more." },
      { title: "Mood Changing", description: "Vibrations for stress management or mood alerts." },
    ],
  },
  {
    id: "brain-monitor",
    title: "Brain Monitoring",
    intro:
      "Products that provide real-time brain activity analysis. With CAIPO, they assist in improving cognitive performance and reducing mental fatigue.",
    companion:
      "MoodChanger uses the data to provide relaxation exercises and biofeedback for stress relief and emotional regulation.",
    tagline: "Real-time brain activity + biofeedback -> sharper focus and better emotional balance",
    capabilities: [
      { title: "Headband", description: "Instant data insights. Real-time feedback." },
      { title: "Headphones", description: "Durable against moisture. Water resistant." },
      { title: "Baseball Cap", description: "Wireless connectivity. Seamless data transfer" },
    ],
    applications: [
      { title: "Healthcare", description: "Support mental health assessments and personalized therapy." },
      {
        title: "Sports",
        description: "Enhance focus and performance with neurofeedback and mindfulness exercises.",
      },
      { title: "Productivity", description: "Improve focus and reduce stress through real-time feedback." },
      { title: "Mood Changing", description: "Promote relaxation and emotional balance with biofeedback." },
    ],
  },
  {
    id: "smart-foot-pods",
    title: "Smart Foot Pods",
    intro:
      "Advanced wearables for runners, offering insights into biomechanics, running power, and performance metrics.",
    companion:
      "CAIPO enhances these devices by providing personalized training recommendations and progress tracking. With MoodChanger, they create a motivational environment to keep users focused and engaged in achieving their fitness goals.",
    tagline: "Biomechanics + AI coaching -> measurable progress and stronger motivation",
    capabilities: [
      { title: "Power Measurement", description: "Tracks energy output" },
      { title: "Fitness Tracking", description: "Step frequency measurement" },
      { title: "Impact Analysis", description: "Assesses foot pressure" },
    ],
    applications: [
      { title: "Sports", description: "Movement tracking, running technique monitoring, and injury prevention." },
      { title: "Healthcare", description: "Motion monitoring for elderly patients or people in physical therapy." },
      {
        title: "Productivity",
        description: "Posture tracking or movement efficiency for reducing strain during daily activities.",
      },
      {
        title: "Mood Changing",
        description: "Gentle reminders to move, combined with biofeedback, to uplift energy levels or manage fatigue.",
      },
    ],
  },
  {
    id: "smart-insoles",
    title: "Smart Insoles",
    intro:
      "Designed for gait analysis, posture improvement, and health monitoring.",
    companion:
      "CAIPO leverages their data to optimize movement efficiency, reduce fatigue, and support rehabilitation. MoodChanger complements these features by providing subtle biofeedback to encourage activity and uplift energy levels.",
    tagline: "Gait intelligence + subtle biofeedback -> better movement and higher energy",
    capabilities: [
      { title: "Power Measurement", description: "Tracks energy output" },
      { title: "Fitness Tracking", description: "Step frequency measurement" },
      { title: "Impact Analysis", description: "Assesses foot pressure" },
    ],
    applications: [
      { title: "Sports", description: "Movement tracking, running technique monitoring, and injury prevention." },
      { title: "Healthcare", description: "Motion monitoring for elderly patients or people in physical therapy." },
      {
        title: "Productivity",
        description: "Posture tracking or movement efficiency for reducing strain during daily activities.",
      },
      {
        title: "Mood Changing",
        description: "Gentle reminders to move, combined with biofeedback, to uplift energy levels or manage fatigue.",
      },
    ],
  },
  {
    id: "smart-watch",
    title: "Smart Watch",
    intro:
      "Customizable device offering fitness tracking, heart rate monitoring, and GPS navigation.",
    companion:
      "Integrated with CAIPO, it enables seamless task management and real-time data visualization. MoodChanger enhances the user experience with stress tracking, guided breathing exercises, and reminders for maintaining emotional balance.",
    tagline: "Fitness tracking + AI support -> stronger performance and emotional balance",
    capabilities: [
      { title: "Customizable Watchfaces", description: "Personalized display options" },
      { title: "Fitness Tracking", description: "Activity monitoring included" },
      { title: "App Integration", description: "Compatible with phone apps" },
    ],
    applications: [
      { title: "Healthcare", description: "Continuous health monitoring." },
      { title: "Sports", description: "Heart rate monitoring, GPS tracking, and performance analytics." },
      {
        title: "Productivity",
        description: "Task management, reminders, and communication control on the go.",
      },
      {
        title: "Mood Changing",
        description: "Stress tracking, guided breathing exercises, and sleep improvement.",
      },
    ],
  },
  {
    id: "exoskeleton",
    title: "Exoskeleton",
    intro:
      "A revolutionary body measurement system that uses 3D scanning to deliver accurate data for fitness and health tracking.",
    companion:
      "With CAIPO it provides insights for personalized recommendations and ergonomic improvements. MoodChanger leverages its tracking capabilities to motivate users and enhance self-confidence through visual progress tracking.",
    tagline: "3D scanning + AI recommendations -> stronger mobility and confident progress",
    capabilities: [
      { title: "Heart Rate Monitoring", description: "Tracks heart variability" },
      { title: "Respiration Tracking", description: "Measures breathing volume." },
      { title: "Activity Tracking", description: "Monitors movement" },
    ],
    applications: [
      {
        title: "Healthcare",
        description: "Assistance for patients with mobility impairments or in physical rehabilitation.",
      },
      {
        title: "Sports",
        description: "Enhancing physical abilities for rehabilitation training or performance enhancement.",
      },
      { title: "Productivity", description: "Reducing physical strain in industrial or manual labor tasks." },
      {
        title: "Mood Changing",
        description:
          "Improved mobility and reduced physical stress can positively impact mental health and well-being.",
      },
    ],
  },
  {
    id: "smart-gloves",
    title: "Smart Gloves",
    intro:
      "Wearable device designed for precise motion tracking and gesture control.",
    companion:
      "With CAIPO, it transforms workflows by enabling seamless device navigation and remote operation for complex tasks. MoodChanger enhances its functionality by providing haptic feedback to improve user interaction, offering an engaging and calming experience for training or productivity.",
    tagline: "Gesture control + haptic feedback -> precise interaction and calmer performance",
    capabilities: [
      { title: "Gesture Control", description: "Enables seamless navigation" },
      { title: "Haptic Feedback", description: "Immersive and interactive" },
      { title: "Precision Tracking", description: "Accurate control" },
    ],
    applications: [
      {
        title: "Healthcare",
        description: "Rehabilitation for hand mobility, stroke recovery, or motor skill training.",
      },
      {
        title: "Sports",
        description: "Motion tracking for sports like golf or boxing to enhance training.",
      },
      { title: "Productivity", description: "Gesture controls for seamless device navigation." },
      {
        title: "Mood Changing",
        description:
          "Biofeedback through touch, vibration feedback, or temperature regulation to influence mood.",
      },
    ],
  },
  {
    id: "smart-shirt",
    title: "Smart Shirt",
    intro:
      "Tracks heart rate, respiration, activity, and sleep. Its seamless integration with mobile apps provides real-time insights into physical performance.",
    companion:
      "CAIPO uses this data to improve productivity and fitness outcomes, while MoodChanger focuses on stress monitoring and providing relaxation techniques.",
    tagline: "Continuous vital tracking + AI guidance -> stronger performance and emotional balance",
    capabilities: [
      { title: "Heart Rate Monitoring", description: "Tracks heart variability" },
      { title: "Respiration Tracking", description: "Measures breathing volume" },
      { title: "Activity Tracking", description: "Monitors steps and movement" },
    ],
    applications: [
      {
        title: "Healthcare",
        description:
          "Continuous monitoring of vital signs, particularly in patients with heart or respiratory conditions.",
      },
      {
        title: "Sports",
        description: "Tracks heart rate, breathing, and movement for in-depth performance insights.",
      },
      { title: "Productivity", description: "Posture correction and physical activity tracking." },
      {
        title: "Mood Changing",
        description: "Real-time monitoring of stress levels, providing insights into emotional well-being.",
      },
    ],
  },
  {
    id: "smart-suit",
    title: "Smart Suit",
    intro:
      "Revolutionary body measurement system that uses 3D scanning to deliver accurate data for fitness and health tracking.",
    companion:
      "With CAIPO, it provides insights for personalized recommendations and ergonomic improvements. MoodChanger uses its tracking capabilities to motivate users and enhance self-confidence through visual progress tracking.",
    tagline: "3D body tracking + AI insights -> measurable progress and stronger confidence",
    capabilities: [
      { title: "Heart Rate Monitoring", description: "Tracks heart variability" },
      { title: "Respiration Tracking", description: "Measures breathing volume" },
      { title: "Monitors movement", description: "Reduces plastic waste" },
    ],
    applications: [
      { title: "Healthcare", description: "Assesses body composition for health monitoring." },
      { title: "Sports", description: "Tracks body measurements for fitness progress." },
      { title: "Productivity", description: "Motivates with visual progress tracking." },
      { title: "Mood Changing", description: "Enhances self-image with body change feedback." },
    ],
  },
  {
    id: "smart-posture-trainer",
    title: "Smart Posture Trainer",
    intro:
      "Equipped with advanced wearable sensors to help users improve back health and overall posture.",
    companion:
      "With real-time feedback and personalized training, this device builds healthier habits for better physical alignment. Connected to CAIPO, it improves posture at work, while MoodChanger provides gentle reminders to reduce stress and encourage calmness.",
    tagline: "Posture feedback + AI guidance -> healthier alignment and calmer routines",
    capabilities: [
      { title: "Custom Vibration Alert", description: "Adjustable slouch reminders" },
      { title: "Wearable Flexibility", description: "Can be worn discreetly" },
      { title: "30-hour Battery", description: "Extended daily use" },
    ],
    applications: [
      {
        title: "Healthcare",
        description: "Support weight management and rehabilitation with detailed body tracking.",
      },
      {
        title: "Sports",
        description: "Monitor body measurements to improve fitness and optimize training plans.",
      },
      { title: "Productivity", description: "Enhance workplace comfort with posture and movement analysis." },
      { title: "Mood Changing", description: "Boost confidence and motivation with progress visualization." },
    ],
  },
];

export default function WearablesPage() {
  return (
    <PageLayout>
      {wearableProfiles.map((wearableProfile, index) => {
        const TitleTag = index === 0 ? "h1" : "h2";

        return (
          <section
            key={wearableProfile.id}
            id={wearableProfile.id}
            className={`scroll-mt-28 ${index === 0 ? "relative py-16 lg:py-24" : "border-t border-white/10 py-16"}`}
          >
            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#FDE035]/5 via-transparent to-[#0d2430]" />
            )}

            <div className="relative mx-auto max-w-screen-2xl px-6">
              <div className="mb-16 text-center">
                <TitleTag className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
                  {wearableProfile.title}
                </TitleTag>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80 lg:text-xl">
                  <CaipoText text={wearableProfile.intro} />
                </p>
              </div>

              <div className="mb-16 text-center">
                <h3 className="mb-6 text-2xl font-semibold text-white lg:text-3xl">
                  {wearableProfile.title} + MoodChanger
                </h3>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
                  <CaipoText text={wearableProfile.companion} />
                </p>
                <div className="mt-6 font-medium text-[#FDE035]">{wearableProfile.tagline}</div>
              </div>

              <div className="mb-16">
                <h3 className="mb-8 text-center text-2xl font-semibold text-white">Core Capabilities</h3>
                <div className="grid gap-8 md:grid-cols-3">
                  {wearableProfile.capabilities.map((capability) => (
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
                  {wearableProfile.applications.map((application) => (
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
