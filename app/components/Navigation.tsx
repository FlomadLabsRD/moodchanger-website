import Link from 'next/link';
import CaipoText from './CaipoText';

export default function Navigation() {
  const wearableItems = [
    { label: 'SmartGlasses', href: '/wearables#smart-glasses' },
    { label: 'EEG Hardware', href: '/wearables#eeg-hardware' },
    { label: 'Smart Ring', href: '/wearables#smart-ring' },
    { label: 'Brain Monitor', href: '/wearables#brain-monitor' },
    { label: 'Smart Foot Pods', href: '/wearables#smart-foot-pods' },
    { label: 'Smart Insoles', href: '/wearables#smart-insoles' },
    { label: 'Smart Watch', href: '/wearables#smart-watch' },
    { label: 'Exoskeleton', href: '/wearables#exoskeleton' },
    { label: 'Smart Gloves', href: '/wearables#smart-gloves' },
    { label: 'Smart Shirt', href: '/wearables#smart-shirt' },
    { label: 'Smart Suit', href: '/wearables#smart-suit' },
    { label: 'Smart Posture Trainer', href: '/wearables#smart-posture-trainer' },
  ];
  const smartDeviceItems = [
    { label: 'AI Health Insights', href: '/smart-devices#ai-health-insights' },
    { label: 'Smart Scale', href: '/smart-devices#smart-scale' },
    { label: 'Smart Bottle', href: '/smart-devices#smart-bottle' },
    { label: 'Smart Robots', href: '/smart-devices#smart-robots' },
  ];

  return (
    <nav className="flex items-center gap-8">
      <a
        href="https://www.caipo.ai/"
        className="inline-flex h-10 items-center rounded-md border border-[#8f6cff]/50 bg-[#120a2a] px-4 text-sm font-extrabold tracking-[0.2em] text-[#c9b3ff] shadow-[0_0_16px_rgba(154,111,255,0.5),inset_0_0_16px_rgba(154,111,255,0.22)] transition-all duration-200 hover:border-[#cdbbff] hover:text-white hover:shadow-[0_0_24px_rgba(154,111,255,0.65),inset_0_0_20px_rgba(154,111,255,0.32)]"
      >
        <CaipoText text="CAIPO" accentClassName="text-[#9d52eb]" />
      </a>

      {/* Wearable Dropdown */}
      <div className="group relative">
        <Link
          href="/wearables"
          className="flex items-center gap-1 text-white/80 hover:text-white transition-colors duration-200"
        >
          Wearables
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        <div className="scrollbar-hidden invisible absolute left-0 top-full z-50 mt-2 max-h-80 w-56 translate-y-1 overflow-y-auto border border-white/10 bg-[#0d2430] opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="py-2">
            {wearableItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-white/80 transition-colors duration-200 hover:bg-[#FDE035]/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Devices Dropdown */}
      <div className="group relative">
        <Link
          href="/smart-devices"
          className="flex items-center gap-1 text-white/80 hover:text-white transition-colors duration-200"
        >
          Smart Devices
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 translate-y-1 border border-white/10 bg-[#0d2430] opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="py-2">
            {smartDeviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-white/80 transition-colors duration-200 hover:bg-[#FDE035]/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* People Dropdown */}
      <div className="group relative">
        <Link
          href="/people"
          className="flex items-center gap-1 text-white/80 hover:text-white transition-colors duration-200"
        >
          People
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 translate-y-1 border border-white/10 bg-[#0d2430] opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="py-2">
            <Link
              href="/people/allergies"
              className="block px-4 py-2 text-white/80 transition-colors duration-200 hover:bg-[#FDE035]/10 hover:text-white"
            >
              Allergies
            </Link>
            <Link
              href="/people/stuttering"
              className="block px-4 py-2 text-white/80 transition-colors duration-200 hover:bg-[#FDE035]/10 hover:text-white"
            >
              Stuttering
            </Link>
            <Link
              href="/people/cognitive-loss"
              className="block px-4 py-2 text-white/80 transition-colors duration-200 hover:bg-[#FDE035]/10 hover:text-white"
            >
              Cognitive Loss
            </Link>
          </div>
        </div>
      </div>

      <Link 
        href="/athletes" 
        className="text-white/80 hover:text-white transition-colors duration-200"
      >
        Athletes
      </Link>
      
      <Link 
        href="/pets" 
        className="text-white/80 hover:text-white transition-colors duration-200"
      >
        Pets
      </Link>
    </nav>
  );
}
