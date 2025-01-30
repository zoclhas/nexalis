import Image1 from "@/public/1.jpeg";
import Image2 from "@/public/2.jpeg";
import Image3 from "@/public/3.jpeg";
import Image4 from "@/public/4.jpeg";
import Image5 from "@/public/5.jpeg";
import Image6 from "@/public/6.jpeg";
import Image7 from "@/public/7.jpeg";
import Image8 from "@/public/8.jpeg";

import Image, { StaticImageData } from "next/image";

import { meta } from "@/lib/utils";
export const metadata = meta({
  title: "Our Facilities",
  description:
    "With established offices and operations in the UAE, Qatar, and Oman, we support customers worldwide. Our strategically located VAC in the UAE enhances our global supply chain, while our international facilities across the Middle East provide local expertise and support.",
});

export default function OurFacilities() {
  return (
    <>
      <section className="container mx-auto grid gap-8 px-4 py-16 text-center">
        <h1 className="font-red-rose text-[clamp(2.25rem,4vw,6rem)] font-medium leading-[clamp(2rem,3.75vw,5.75rem)]">
          Our Facilities
        </h1>
        <p className="mx-auto max-w-3xl leading-6 text-zinc-600 sm:text-lg">
          With established offices and operations in the UAE, Qatar, and Oman,
          we support customers worldwide. Our strategically located VAC in the
          UAE enhances our global supply chain, while our international
          facilities across the Middle East provide local expertise and support.
        </p>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-16">
        <div className="flex gap-4 max-sm:flex-col">
          {[0, 1, 2].map((col) => (
            <div key={col} className="flex flex-col gap-4 sm:w-1/3">
              {images
                .filter((_, i) => i % 3 === col)
                .map((img, i) => (
                  <Image
                    key={i}
                    src={img.src}
                    alt="Some machinery and facilities at Nexalis International"
                    width={img.width}
                    height={img.height}
                    loading={i < 2 ? "eager" : "lazy"}
                    className="rounded-xl object-cover object-center shadow-xl"
                  />
                ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const images: ImageProp[] = [
  { src: Image1, width: 1638, height: 4000 },
  { src: Image2, width: 3000, height: 4000 },
  { src: Image3, width: 3000, height: 4000 },
  { src: Image4, width: 4000, height: 3000 },
  { src: Image5, width: 4000, height: 3000 },
  { src: Image6, width: 3000, height: 4000 },
  { src: Image7, width: 4000, height: 1638 },
  { src: Image8, width: 3000, height: 3088 },
];

interface ImageProp {
  src: StaticImageData;
  width: number;
  height: number;
}
