"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

/** Home embeds the footer inside UnmaskLayers; skip the layout copy there. */
export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return <Footer />;
}
