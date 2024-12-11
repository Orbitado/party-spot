import type { Metadata } from "next";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://party-spot.vercel.app"),
  title: "Party Spot | The ultimate party planning app.",
  icons: {
    icon: "icon.svg",
  },
  description:
    "Discover Party Spot, the ultimate party planning app. Plan and manage your events with ease, from planning to execution. Get started today and let the fun begin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${onest.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
