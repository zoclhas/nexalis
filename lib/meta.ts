import { Metadata } from "next";

export function meta({ title, description, image, size }: MetaProps): Metadata {
  return {
    title: `${title} | Nexalis International - Oil & Gas`,
    description,
    openGraph: {
      images: `${process.env.URL}${image}`,
    },
    twitter: {
      card: size ? "summary_large_image" : undefined,
      images: `${process.env.URL}${image}`,
    },
  };
}

interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  size?: "card" | null;
}
