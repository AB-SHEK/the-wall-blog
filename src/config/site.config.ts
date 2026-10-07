export interface NavItem {
  name: string;
  href: string;
  holdType: 'jug' | 'crimp' | 'sloper' | 'pinch' | 'pocket';
  color: string; // Tailored hold color (hex or theme token)
  heightPercent: number; // 0 (Base camp) to 100 (Summit/Climber)
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  author: string;
  bio: string;
  avatar: string;
  siteUrl: string;
  basePath: string; // Adjust based on repo name
  socials: {
    github: string;
    twitter?: string;
    email: string;
    instagram?: string;
  };
  stats: {
    highestGradeBoulder: string;
    highestGradeLead: string;
    cragsVisited: number;
    currentProject: string;
    chalkUsedKg: string;
  };
  navigation: NavItem[];
  features: {
    giscusComments: boolean;
    analytics: boolean;
    soundEffects: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Crux & Crag",
  title: "Crux & Crag — Bouldering & Field Notes",
  tagline: "Life, code, and climbing: one move at a time.",
  description: "A bouldering-themed personal blog exploring travel stories, deep-dive research, book notes, and random sends.",
  author: "Abhishek",
  bio: "Engineer by day, route-projector by evening, outdoor explorer on weekends. Fascinated by climbing biomechanics, tactile interfaces, and remote crags.",
  avatar: "/images/climber-avatar.svg",
  siteUrl: "https://localhost:4321", // will dynamically adjust with Astro config
  basePath: "",
  socials: {
    github: "https://github.com",
    email: "abhishek@example.com",
    instagram: "https://instagram.com",
  },
  stats: {
    highestGradeBoulder: "V7 (Flash: V5)",
    highestGradeLead: "5.12b",
    cragsVisited: 14,
    currentProject: "Karma (V11) dream / The Mandala (V12) beta",
    chalkUsedKg: "18.4 kg",
  },
  navigation: [
    { name: "Base Camp", href: "/", holdType: "jug", color: "#10b981", heightPercent: 10 },
    { name: "Expeditions", href: "/expeditions", holdType: "crimp", color: "#f59e0b", heightPercent: 30 },
    { name: "Beta Library", href: "/beta-library", holdType: "sloper", color: "#ec4899", heightPercent: 50 },
    { name: "Random Sends", href: "/random-sends", holdType: "pinch", color: "#8b5cf6", heightPercent: 70 },
    { name: "The Logbook", href: "/logbook", holdType: "pocket", color: "#06b6d4", heightPercent: 85 },
    { name: "The Climber", href: "/about", holdType: "jug", color: "#ef4444", heightPercent: 100 },
  ],
  features: {
    giscusComments: false, // Turn on in config when GitHub Discussions are configured
    analytics: false,
    soundEffects: false,
  },
};
