/**
 * Data behind the guided host installer. The universal Linux script genuinely
 * detects the distro, adds the repo, installs the host + console and opens the
 * firewall, so every Linux row shares that command and links to its one-page
 * guide for the manual repo route. Windows uses winget.
 */

export type HostPlatform = {
  id: string;
  name: string;
  icon: string; // file stem under src/brand-icons/os
  family: "linux" | "windows";
  /** One-page guide for the manual / repo-add route. */
  doc: string;
  /** Optional distro-specific note shown next to the generated command. */
  note?: string;
};

export const hostPlatforms: HostPlatform[] = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    icon: "ubuntu",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/ubuntu",
  },
  {
    id: "debian",
    name: "Debian",
    icon: "debian",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/debian",
  },
  {
    id: "fedora",
    name: "Fedora",
    icon: "fedora",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/fedora",
  },
  {
    id: "arch",
    name: "Arch Linux",
    icon: "arch",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/arch",
  },
  {
    id: "cachyos",
    name: "CachyOS",
    icon: "cachyos",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/arch",
  },
  {
    id: "opensuse",
    name: "openSUSE",
    icon: "opensuse",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/install",
  },
  {
    id: "nobara",
    name: "Nobara",
    icon: "nobara",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/fedora",
  },
  {
    id: "omarchy",
    name: "Omarchy",
    icon: "omarchy",
    family: "linux",
    doc: "https://docs.punktfunk.unom.io/docs/omarchy",
  },
  {
    id: "bazzite",
    name: "Bazzite",
    icon: "bazzite",
    family: "linux",
    note: "Installs as a systemd extension — no layering, no reboot.",
    doc: "https://docs.punktfunk.unom.io/docs/bazzite",
  },
  {
    id: "steamos",
    name: "SteamOS / Steam Deck",
    icon: "steam",
    family: "linux",
    note: "Built on-device so it survives SteamOS updates.",
    doc: "https://docs.punktfunk.unom.io/docs/steamos-host",
  },
  {
    id: "nixos",
    name: "NixOS",
    icon: "nixos",
    family: "linux",
    note: "Add the module to your flake instead of running the script.",
    doc: "https://docs.punktfunk.unom.io/docs/nixos",
  },
  {
    id: "windows",
    name: "Windows 11",
    icon: "windows",
    family: "windows",
    note: "Windows 11 22H2 or newer. Includes the signed display & gamepad drivers.",
    doc: "https://docs.punktfunk.unom.io/docs/windows-host",
  },
];

export const installCommands = {
  linux: "curl -fsSL https://punktfunk.unom.io/install.sh | sh",
  windows: [
    "winget source add -n punktfunk https://winget.punktfunk.unom.io -t Microsoft.Rest",
    "winget install unom.PunktfunkHost",
  ],
} as const;
