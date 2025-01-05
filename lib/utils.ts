import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { FieldHook } from "payload";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatPageSlug = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-/]+/g, "")
    .toLowerCase();

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === "string") {
      return formatPageSlug(value);
    }
    const fallbackData =
      (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    if (fallbackData && typeof fallbackData === "string") {
      return formatPageSlug(fallbackData);
    }

    return value;
  };

export function meta({
  title,
  description,
  image,
  size = undefined,
}: MetaProps): Metadata {
  return {
    metadataBase: new URL(process.env.URL!),
    title: `${title} | Nexalis International - Oil & Gas`,
    description,
    openGraph: {
      images: `${process.env.URL}${image}`,
    },
    twitter: {
      // @ts-expect-error Ignore this, it will work
      card: size,
      images: `${process.env.URL}${image}`,
    },
  };
}

interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  size?: "summary_large_image" | undefined;
}
