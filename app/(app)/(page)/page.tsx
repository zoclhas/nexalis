import LandingImage from "@/public/slider-c.jpeg";

import config from "@payload-config";
import { BasePayload, getPayload } from "payload";

import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Media } from "@/payload-types";

export const metadata: Metadata = {
  title: "Nexalis International - Oil & Gas",
  description:
    "At Nexalis, we focus toward Oil & Gas industry’s core Automation, Instrumentation, Information Technology & Telecommunication sector. Our current operational territories are Middle east, Africa and East Asia. We have a fully functional Valve Automation Center based in Abu Dhabi and have offices across the Middle east. A strong, customer-focused approach and the constant quest for top-class quality have enabled the Company to attain and sustain leadership in its major lines of business.",
  openGraph: {
    images: "/logo-with-bg.jpeg",
  },
  twitter: {
    images: "/logo-with-bg.jpeg",
  },
};

async function getPartners(payload: BasePayload) {
  return payload.findGlobal({
    slug: "partners",
  });
}

async function getProducts(payload: BasePayload) {
  return payload.find({
    collection: "product",
    limit: 2,
  });
}

async function getServices(payload: BasePayload) {
  return payload.find({
    collection: "service",
    limit: 2,
  });
}

export default async function Home() {
  const payload = await getPayload({ config });

  const [partners, products, services] = await Promise.all([
    getPartners(payload),
    getProducts(payload),
    getServices(payload),
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
          src={LandingImage}
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
                    src={(p.logo as Media).url!}
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

      <section className="container relative mx-auto grid gap-4 px-4 py-16 md:grid-cols-2">
        <div className="">
          <h1 className="font-red-rose text-2xl font-semibold">Our Products</h1>
        </div>
        <div className="">
          <h1 className="font-red-rose text-2xl font-semibold">Our Services</h1>
        </div>
      </section>
    </>
  );
}
