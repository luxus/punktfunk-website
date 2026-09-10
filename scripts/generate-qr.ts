/**
 * Generates static SVG QR codes for the mobile client stores so the install
 * page has no runtime dependency. Re-run with `bun run qr` after changing a URL.
 *
 * The target URLs are the canonical short links on the punktfunk domain; point
 * them at the real Play Store / TestFlight destinations when those are final.
 */
import { mkdir, writeFile } from "node:fs/promises";
import QRCode from "qrcode";

const OUT = new URL("../public/qr/", import.meta.url);

const targets: Record<string, string> = {
  android: "https://punktfunk.unom.io/download/android",
  apple: "https://punktfunk.unom.io/download/apple",
};

await mkdir(OUT, { recursive: true });

for (const [name, url] of Object.entries(targets)) {
  const svg = await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: {
      dark: "#1a1330",
      light: "#ffffff",
    },
  });
  await writeFile(new URL(`${name}.svg`, OUT), svg, "utf8");
  console.log(`wrote qr/${name}.svg -> ${url}`);
}
