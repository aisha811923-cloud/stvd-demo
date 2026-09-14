import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "St. Teresa Vidya Deep Senior Secondary School",
    short_name: "STVDS Udaipur",
    description:
      "Official portal of St. Teresa Vidya Deep Senior Secondary School, Saveena, Udaipur. CBSE Affiliated English Medium, Nursery to Class XII.",
    start_url: "/",
    display: "standalone",
    background_color: "#080F1D",
    theme_color: "#0F1E36",
    orientation: "portrait",
    categories: ["education", "school"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
