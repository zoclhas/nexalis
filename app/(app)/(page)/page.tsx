import LandingImage from "@/public/slider-c.jpeg";

import config from "@payload-config";
import { getPayload } from "payload";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Media } from "@/payload-types";
import { ProductCard } from "@/components/card";
import { unstable_cache as cache } from "next/cache";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/lib/social-icons";
import { Mailbox, PhoneCall } from "lucide-react";
import { Form } from "./form";

export const metadata: Metadata = {
  title: "Nexalis International - Oil & Gas",
  description:
    "At Nexalis, we focus toward Oil & Gas industry's core Automation, Instrumentation, Information Technology & Telecommunication sector. Our current operational territories are Middle east, Africa and East Asia. We have a fully functional Valve Automation Center based in Abu Dhabi and have offices across the Middle east. A strong, customer-focused approach and the constant quest for top-class quality have enabled the Company to attain and sustain leadership in its major lines of business.",
  openGraph: {
    images: "/logo-with-bg.jpeg",
  },
  twitter: {
    images: "/logo-with-bg.jpeg",
  },
};

const getPartners = cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.findGlobal({
      slug: "partners",
    });
  },
  ["partners"],
  { revalidate: 3600 },
);

const getProducts = cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.find({
      collection: "product",
      limit: 2,
    });
  },
  ["products"],
  { revalidate: 3600 },
);

const getServices = cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.find({
      collection: "service",
      limit: 2,
    });
  },
  ["services"],
  { revalidate: 3600 },
);

export default async function Home() {
  const [partners, products, services] = await Promise.all([
    getPartners(),
    getProducts(),
    getServices(),
  ]);

  return (
    <>
      <section className="container relative mx-auto grid min-h-screen gap-10 px-4 py-16">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h1 className="font-red-rose text-[clamp(2.25rem,4vw,6rem)] font-medium leading-[clamp(2rem,3.75vw,5.75rem)]">
              Nexalis International
            </h1>
            <p className="max-w-[600px] leading-5 text-zinc-600 sm:text-lg">
              — A tech provider focused on electrical, instrumentation, controls
              automation, and telecom solutions, ensuring client satisfaction
              with timely project completion.
            </p>
          </div>

          <div className="flex gap-3 max-sm:flex-col">
            <Button
              variant="outline"
              className="px-3 py-2 text-sm text-zinc-700 md:px-[18px] md:py-2 md:text-lg"
              asChild
            >
              <Link href="/products">Products</Link>
            </Button>
            <Button
              variant="outline"
              className="px-3 py-2 text-sm text-zinc-700 md:px-[18px] md:py-2 md:text-lg"
              asChild
            >
              <Link href="/services">Services</Link>
            </Button>
            <Button className="px-3 py-2 text-sm md:px-[18px] md:py-2 md:text-lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <Image
          src={LandingImage || "/placeholder.svg"}
          alt="Nexalis factory"
          width={1800}
          height={600}
          quality={100}
          loading="eager"
          className="aspect-video max-h-[500px] object-cover object-center"
        />

        {partners.partners && (
          <div className="pt-12">
            <h3 className="text-center font-red-rose text-xl font-semibold">
              Our Partners
            </h3>
            <ul className="flex flex-wrap justify-center gap-6 pt-3">
              {partners.partners.map((p, i) => (
                <li
                  key={p.id! + i}
                  className="flex max-w-[250px] items-center justify-center"
                >
                  <Image
                    src={(p.logo as Media).url! || "/placeholder.svg"}
                    alt={p.partner}
                    width={(p.logo as Media).width!}
                    height={(p.logo as Media).height!}
                    className="object-cover object-center"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* eslint-disable-next-line */}
        <img
          src="/grid.png"
          alt="Grid background"
          loading="eager"
          className="absolute -top-[76px] left-0 -z-10 size-full select-none opacity-50"
          draggable={false}
          aria-hidden
        />
      </section>

      <section className="container relative mx-auto grid gap-8 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-2">
            <h1 className="font-red-rose text-2xl font-semibold">
              Our Products
            </h1>
            <Button variant="secondary" asChild>
              <Link href="/products">View More</Link>
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {products.docs.map((p) => (
              <ProductCard key={p.id} data={p} />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-2">
            <h1 className="font-red-rose text-2xl font-semibold">
              Our Services
            </h1>
            <Button variant="secondary" asChild>
              <Link href="/services">View More</Link>
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {services.docs.map((p) => (
              <ProductCard key={p.id} data={p} href="/services/" />
            ))}
          </div>
        </div>
      </section>

      <section className="container relative mx-auto grid gap-4 px-4 py-16">
        <div className="flex flex-col justify-center">
          <strong className="w-full text-center text-sm font-medium">
            About Us
          </strong>
          <h1 className="text-center font-red-rose text-4xl font-semibold">
            Nexalis
          </h1>
        </div>

        <p className="text-center">
          At Nexalis, we focus toward Oil &amp; Gas industry’s core Automation,
          Instrumentation, Information Technology &amp; Telecommunication
          sector. Our current operational territories are Middle east, Africa
          and East Asia. We have a fully functional Valve Automation Center
          based in Abu Dhabi and have offices across the Middle east. A strong,
          customer-focused approach and the constant quest for top-class quality
          have enabled the Company to attain and sustain leadership in its major
          lines of business
        </p>

        <strong className="mt-6 w-full text-center text-sm font-medium">
          Our Offerings
        </strong>
        <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {offerings.map((o, i) => (
            <li
              key={i}
              className={cn(
                "grid place-items-center bg-zinc-100 p-3 text-center",
                (i === offerings.length - 1 || i === offerings.length - 2) &&
                  "md:col-span-2 lg:col-span-1",
              )}
            >
              {o}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        className="container relative mx-auto grid gap-8 px-4 py-16"
      >
        <div className="flex flex-col justify-center">
          <strong className="w-full text-center text-sm font-medium">
            Get in touch
          </strong>
          <h1 className="text-center font-red-rose text-4xl font-semibold">
            Contact Us
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex w-full flex-col justify-between gap-6">
            <div className="rounded-2xl bg-zinc-50 p-4">
              <h3 className="text-xl font-medium">Our Locations</h3>
              <ul className="mt-2 flex flex-col gap-1">
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
                    Store 3 Block 11, Sector - 7A1, Al Saqlawi St, ICAD 1, Abu
                    Dhabi, UAE
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
                    Office No: 701/03, Floor 7, Al Kaabi Tower, St No 977 - Zone
                    18, Al Safiliya Area, Kuwait
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
                    Office No: 310/13, 3rd Floor, Business Gate Center, Beach
                    One Building, Al Qurum, Muscat, Oman
                  </p>
                </li>
              </ul>
            </div>

            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="mailto:info@nexalisinternational.com"
                  target="_blank"
                  className="flex w-max items-center gap-1 rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200"
                >
                  <Mailbox height={18} />
                  info@nexalisinternational.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+971553511282"
                  target="_blank"
                  className="flex w-max items-center gap-1 rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200"
                >
                  <PhoneCall height={18} />
                  +971 55 351 1282
                </a>
              </li>

              <li>
                <a
                  href="tel:+971542793483"
                  target="_blank"
                  className="flex w-max items-center gap-1 rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200"
                >
                  <WhatsAppIcon height={18} />
                  +971 54 279 3483
                </a>
              </li>
            </ul>
          </div>

          <Form />
        </div>
      </section>
    </>
  );
}

const offerings = [
  "Automation, Instrumentation & Telecom Solutions for a wide variety of industries Systems designed for optimal performance and energy efficiency",
  "Oil & Gas pipeline control system & Tank Farm Management",
  "Pressure based Tightness Monitoring system for pipeline application",
  "Various Project Studies like; Feasibility Study, Concept Study, Fire & Gas Mapping Study through 3D Software etc",
  "Life Cycle Services encompassing Annual Maintenance Contracts to Spare Parts Management",
  "Engineering Services like; Basic engineering, detail engineering, integrating diverse Instrumentation, Automation, Information Technologies & Telecommunications in real-time",
  "Turnkey Field Instrumentation & Fiber optic communication",
  "Hydrocarbon cable based Leak Detection System for pipeline",
  "Pipes, Flanges, Manual Valves, RTP pipes, Stress Analysis, Piping accessories etc",
  "Complete basic & detail engineering for plant wide CCTV system, PAGA system, Access Control System under Telecom services",
];
