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

export default async function OurClients() {
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

        <ul className="mt-8 flex flex-col gap-4 rounded-3xl bg-zinc-100 p-4">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="min-w-[30px]"
            >
              <path
                d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                fill="#ea3323"
              ></path>
              <path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path>
              <path fill="#fff" d="M10 11H31V21H10z"></path>
              <path
                d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z"
                fill="#317234"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            <p>
              Store 3 Block 11, Sector - 7A1, Al Saqlawi St, ICAD 1, Abu Dhabi
            </p>
          </li>

          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="min-w-[30px]"
            >
              <path fill="#fff" d="M1 11H31V21H1z"></path>
              <path
                d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                fill="#357942"
              ></path>
              <path
                d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 16 24)"
                fill="#be2a2c"
              ></path>
              <path d="M11,12L2.316,5.053c-.803,.732-1.316,1.776-1.316,2.947V24c0,1.172,.513,2.216,1.316,2.947l8.684-6.947V12Z"></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            <p>
              Office No: 310/13, 3rd Floor, Business Gate Center, Beach One
              Building, Al Qurum, Muscat, Oman
            </p>
          </li>

          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="min-w-[30px]"
            >
              <rect
                x="1"
                y="4"
                width="30"
                height="24"
                rx="4"
                ry="4"
                fill="#cd312c"
              ></rect>
              <path
                d="M11,20v8H27c2.209,0,4-1.791,4-4v-4H11Z"
                fill="#377d41"
              ></path>
              <path
                d="M27,4H11V12H31v-4c0-2.209-1.791-4-4-4Z"
                fill="#fff"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
              <path
                d="M9.225,12.667c-.582-.605-1.779-1.187-2.217-2.117-.004-.002-.004-.007,0-.009-.045-.239,.096-.503,.28-.627,.025,.382,.576,.11,.756,.091-.158,.409,1.087,.14,1.224,.213,.213,.02,.083-.53,.117-.632-.012-.162-1.501-.257-1.341,.104-.184,.036-.208-.181-.46-.151,1.727-2.926,1.109-3.078-.512-.206l.044,.02c-.209,.32-.015-.35-.105-.484h0v-.093c-.112,.006-.27-.065-.248-.18h-.007v-.002h-.037s0-.18,0-.18h-.036v-.364h-.037v-.23h.013c.405-.478,.577-.41-.148-.819-.706,.4-.55,.321-.182,.819h.013v.23h-.036v.364h-.036v.181h-.038s-.007,.001-.007,.001c.027,.085-.1,.186-.248,.181v.167h0c-.124,.175,.068,.358-.022,.539-.034-.046-.064-.089-.093-.13l.044-.02c-1.604-2.844-2.245-2.741-.529,.176-.247-.012-.251,.192-.442,.152,.13-.359-1.088-.21-1.224-.183-.191,.038-.112,.528-.117,.632-.007,.162,1.532,.273,1.341-.134,.198-.004,.566,.269,.746,.002,.117,.044,.224,.138,.275,.262h-.002s-.008,.008-.008,.008c.012,.245-1.2,.201-1.297,.201,.006,0-.125,.007-.124,.002-1.004,.066,.447,.71,.447,.71,0,0,.394,.099,.439,.099-1.192,.878-1.641,2.056-.529,1.076,0,0,.76-.864,1.268-1.024,.069-.014,.571-.2,.596-.222,.47,.476,.953,.87,1.175,1.093s2.063,1.223,1.305,.486Z"
                fill="#fff"
              ></path>
            </svg>
            <p>
              Office No: 701/03, Floor 7, Al Kaabi Tower, St No 977 - Zone 18,
              Al Safiliya Area
            </p>
          </li>
        </ul>

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
