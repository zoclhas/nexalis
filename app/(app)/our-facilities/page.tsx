import Image1 from "./images/1.jpeg";
import Image2 from "./images/2.jpeg";
import Image3 from "./images/3.jpeg";
import Image4 from "./images/4.jpeg";
import Image5 from "./images/5.jpeg";
import Image6 from "./images/6.jpeg";
import Image7 from "./images/7.jpeg";
import Image8 from "./images/8.jpeg";

import Image, { StaticImageData } from "next/image";

import { meta } from "@/lib/meta";
export const metadata = meta({
  title: "Our Facilities",
  description:
    "With established offices and operations in the UAE, Qatar and Oman. we support customers in all parts of the World. Strategic location of our VAC in UAE caters to supply chain around the world. Our International Facilities and Office across the Middle East provide our customers with experienced local support.",
});

export default async function OurFacilities() {
  return (
    <main>
      <section>
        <div>
          <strong className="text-sm font-medium text-red-900 md:text-base">
            Locations
          </strong>
          <h1 className="text-[clamp(2rem,3vw,8rem)] font-semibold uppercase leading-[clamp(1.75rem,2.75vw,7.75rem)]">
            Our Facilities
          </h1>
          <p className="mt-4 md:text-lg">
            With established offices and operations in the UAE, Qatar and Oman.
            we support customers in all parts of the World. Strategic location
            of our VAC in UAE caters to supply chain around the world. Our
            International Facilities and Office across the Middle East provide
            our customers with experienced local support.
          </p>
        </div>

        <div className="mt-20 flex gap-4 max-sm:flex-col">
          <div className="flex flex-col gap-4 sm:w-1/2">
            {images.slice(0, images.length / 2).map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt="Some machinary and facilities present in Nexalis International"
                width={img.width}
                height={img.heigth}
                loading={i < 2 ? "eager" : "lazy"}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:w-1/2">
            {images.slice(images.length / 2, images.length).map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt="Some machinary and facilities present in Nexalis International"
                width={img.width}
                height={img.heigth}
                loading={i < 2 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const images: ImageProp[] = [
  {
    src: Image1,
    width: 1638,
    heigth: 4000,
  },
  {
    src: Image2,
    width: 3000,
    heigth: 4000,
  },
  {
    src: Image4,
    width: 4000,
    heigth: 3000,
  },
  {
    src: Image5,
    width: 4000,
    heigth: 3000,
  },
  {
    src: Image3,
    width: 3000,
    heigth: 4000,
  },
  {
    src: Image6,
    width: 3000,
    heigth: 4000,
  },
  {
    src: Image7,
    width: 4000,
    heigth: 1638,
  },
  {
    src: Image8,
    width: 3000,
    heigth: 3088,
  },
];
interface ImageProp {
  src: StaticImageData;
  width: number;
  heigth: number;
}
