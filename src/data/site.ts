/**
 * Single source of truth for site copy and links.
 * Kept deliberately plain-spoken: what it does, how to get it, why it's a
 * rebuild — no invented benchmarks, no marketing filler.
 */

export const site = {
  name: "Punktfunk",
  tagline: "Stream your PC to any screen — free, private, and rebuilt from scratch.",
  description:
    "Punktfunk turns a Linux or Windows PC into a low-latency streaming host. Play your games or use your desktop on a Mac, phone, tablet, TV or another PC — each on its own screen, at its own resolution.",
} as const;

export const links = {
  install: "/install",
  docs: "https://docs.punktfunk.unom.io",
  quickstart: "https://docs.punktfunk.unom.io/docs/quickstart",
  supportMatrix: "https://docs.punktfunk.unom.io/docs/support-matrix",
  source: "https://git.unom.io/unom/punktfunk",
  discord: "https://discord.gg/kaPNvzMuGU",
  reddit: "https://www.reddit.com/r/Punktfunk/",
  sponsors: "https://git.unom.io/unom/punktfunk#sponsors",
  installScript: "https://punktfunk.unom.io/install.sh",
} as const;

/** Short, human badges shown under the hero. */
export const heroBadges = [
  "A rebuild, not another fork",
  "Free — no accounts, no cloud",
  "Modern Rust, from the ground up",
  "First-class Linux & Windows hosts",
] as const;

export type Feature = {
  title: string;
  body: string;
  icon: string; // lucide-style key rendered by the Icon component
};

export const features: Feature[] = [
  {
    icon: "monitor-play",
    title: "A screen for every device",
    body: "Each device you stream to gets its own display at its exact size and refresh rate. A 1080p laptop and a 4K TV can play from the same PC at the same time — without touching the monitors on your desk.",
  },
  {
    icon: "plug-zap",
    title: "Pick up right where you left off",
    body: "Lose Wi-Fi or close the app and your session can stay alive on the host. Reconnect and you drop straight back into your game or desktop — no restart, no reshuffled windows.",
  },
  {
    icon: "layout-grid",
    title: "All your games in one place",
    body: "Steam and non-Steam titles show up as a single grid on every device. Add-ons pull in Epic, GOG, Lutris, Heroic, Playnite, ROMs and more, so your whole library is just there.",
  },
  {
    icon: "gamepad-2",
    title: "Built for modern controllers",
    body: "Full support for today's gamepads — the Steam Controller 2 and the DualSense, including its haptics and built-in speaker streamed to the pad in your hands.",
  },
  {
    icon: "shield-check",
    title: "Private by default",
    body: "Pair a device once with a 4-digit PIN and it's trusted from then on. No account, no login, nothing routed through a cloud. Your stream stays between your own machines.",
  },
  {
    icon: "monitor-cog",
    title: "Windows that works like Linux",
    body: "On Windows, Punktfunk ships its own display driver and pushes frames straight into it — so streaming works even on the lock screen, with no dummy HDMI plug and no screen scraping.",
  },
  {
    icon: "activity",
    title: "See exactly what's happening",
    body: "Every app has an on-screen stats overlay, and a web console graphs your host live. When something's off, you can see why instead of guessing.",
  },
  {
    icon: "refresh-cw",
    title: "Keep the clients you already have",
    body: "Punktfunk still speaks NVIDIA's old GameStream, so your existing Moonlight and Artemis apps work on day one. Switch to the faster native apps whenever you're ready.",
  },
];

/** Non-technical comparison. Each row is an honest, plain claim. */
export type CompareRow = {
  point: string;
  others: string;
  punktfunk: string;
};

export const compareRows: CompareRow[] = [
  {
    point: "Where it comes from",
    others: "Built on NVIDIA's abandoned GameStream, often forked again and again.",
    punktfunk: "A fresh codebase in modern Rust — a rebuild, not another fork.",
  },
  {
    point: "Displays",
    others: "Usually mirror or borrow one of your real monitors.",
    punktfunk: "Creates a private display per device at its own resolution and refresh.",
  },
  {
    point: "Windows support",
    others: "Relies on third-party virtual-display drivers and screen capture.",
    punktfunk: "Its own signed display driver, working even on the lock screen.",
  },
  {
    point: "If the connection drops",
    others: "The session usually ends and starts over.",
    punktfunk: "Your session can survive the drop and resume instantly.",
  },
  {
    point: "Clients",
    others: "One community client, mostly Moonlight.",
    punktfunk: "Native apps for Mac, iPhone, iPad, Apple TV, Android, Windows, Linux & Steam Deck.",
  },
  {
    point: "Price & privacy",
    others: "Free, but varies by fork.",
    punktfunk: "Free, open source, no accounts and no cloud — ever.",
  },
];

/** Client apps and where to get them. */
export type ClientApp = {
  device: string;
  os: string; // icon key under /public/os-icons
  how: string;
};

export const clientApps: ClientApp[] = [
  { device: "Mac", os: "apple", how: "Apple app — notarized download or TestFlight" },
  { device: "iPhone · iPad · Apple TV", os: "apple", how: "Apple app on TestFlight" },
  { device: "Android phone & TV", os: "linux", how: "Android app on Google Play" },
  { device: "Windows", os: "windows", how: "Signed installer, or portable download" },
  { device: "Linux desktop & laptop", os: "linux", how: "Flatpak — or apt · dnf · pacman" },
  { device: "Steam Deck", os: "steam", how: "Decky plugin in Gaming Mode, Flatpak on Desktop" },
];

export const mobileStores = [
  {
    name: "Android",
    label: "Google Play",
    icon: "linux",
    qr: "/qr/android.svg",
    href: "https://punktfunk.unom.io/download/android",
    note: "Scan to open on Google Play",
  },
  {
    name: "Apple",
    label: "TestFlight",
    icon: "apple",
    qr: "/qr/apple.svg",
    href: "https://punktfunk.unom.io/download/apple",
    note: "Scan to join the Apple TestFlight",
  },
] as const;
