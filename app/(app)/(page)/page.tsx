import HeaderImage from "@/public/slider-c.jpeg";
import Logo from "@/public/logo.png";
import Grid from "@/public/grid.png";

import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductCard } from "@/components/ui/product-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-scroll";
import { Media } from "@/payload-types";
import { Mailbox, PhoneCall } from "lucide-react";
import { Form } from "./form";

async function getProducts() {
  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: "product",
    limit: 4,
    sort: "-updatedAt",
  });
  return products;
}

async function getPartners() {
  const payload = await getPayload({ config: configPromise });

  const partners = await payload.findGlobal({
    slug: "partners",
  });
  return partners;
}

export default async function Home() {
  const [productDocs, partners] = await Promise.all([
    getProducts(),
    getPartners(),
  ]);
  const products = productDocs.docs;

  return (
    <main>
      <div className="relative">
        <section className="grid items-center !py-0 md:grid-cols-2">
          <div className="relative flex flex-col items-center py-16">
            <h1 className="text-center text-[clamp(2.25rem,4vw,6rem)] font-semibold uppercase leading-[clamp(2rem,3.75vw,5.75rem)]">
              Nexalis International
            </h1>
            <p className="mt-4 max-w-[600px] text-center text-lg leading-5">
              A tech provider focused on electrical, instrumentation, controls
              automation, and telecom solutions, ensuring client satisfaction
              with timely project completion.
            </p>

            <div className="absolute inset-0 grid size-full place-items-center">
              <Image
                src={Logo}
                alt="Nexalis Logo"
                width={508}
                height={491}
                quality={100}
                loading="eager"
                className="-z-[1] mx-auto h-[85%] w-max object-contain opacity-15"
              />
            </div>
          </div>

          <Image
            src={HeaderImage}
            alt="Sample image of a oil workplace"
            width={1800}
            height={600}
            quality={100}
            loading="eager"
            className="cool-cut absolute right-0 top-0 aspect-[2/1] h-full w-[45%] object-cover object-center max-md:hidden"
          />

          <Image
            src={Grid}
            alt="Grid background pattern"
            width={1080}
            height={1080}
            quality={100}
            loading="eager"
            className="absolute inset-0 -z-[2] size-full object-contain object-center"
            style={{
              imageRendering: "pixelated",
            }}
            aria-hidden
          />
        </section>
      </div>

      <section>
        <div className="flex items-end justify-between gap-2">
          <div>
            <strong className="text-sm font-medium text-red-900 md:text-base">
              Our Collection
            </strong>
            <h1 className="mt-2 text-[clamp(2rem,3vw,8rem)] font-semibold uppercase leading-[clamp(1.75rem,2.75vw,7.75rem)]">
              Products
            </h1>
          </div>

          <Button variant="outline" className="max-md:hidden" asChild>
            <Link href="/products">View All</Link>
          </Button>
        </div>

        <div className="grid gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            // @ts-ignore
            <ProductCard key={product.id} props={product} />
          ))}
        </div>

        <Button variant="outline" className="mt-8 w-full md:hidden" asChild>
          <Link href="/products">View All</Link>
        </Button>
      </section>

      <section>
        <div className="flex flex-col gap-3 rounded-3xl bg-zinc-100 p-4">
          <h2 className="pt-8 text-center text-3xl font-semibold">
            Our Partners
          </h2>
          <InfiniteMovingCards>
            {partners.partners!.map((p) => (
              <li key={p.id} className="flex items-center justify-center px-4">
                <Image
                  src={(p.logo as Media).url!}
                  alt={p.partner}
                  width={(p.logo as Media).width!}
                  height={(p.logo as Media).height!}
                  className="object-cover object-center saturate-0"
                  style={{
                    imageRendering: "pixelated",
                  }}
                />
              </li>
            ))}
          </InfiniteMovingCards>
        </div>
      </section>

      <div className="bg-zinc-100">
        <section>
          <div>
            <strong className="text-sm font-medium text-red-900 md:text-base">
              Nexalis
            </strong>
            <h1 className="mt-2 text-[clamp(2rem,3vw,8rem)] font-semibold uppercase leading-[clamp(1.75rem,2.75vw,7.75rem)]">
              About Us
            </h1>
          </div>

          <p className="pt-12 text-lg">
            At Nexalis, we focus toward Oil & Gas industry’s core Automation,
            Instrumentation, Information Technology & Telecommunication sector.
            Our current operational territories are Middle east, Africa and East
            Asia. We have a fully functional Valve Automation Center based in
            Abu Dhabi and have offices across the Middle east. A strong,
            customer-focused approach and the constant quest for top-class
            quality have enabled the Company to attain and sustain leadership in
            its major lines of business
          </p>
        </section>
      </div>

      <section>
        <div>
          <strong className="text-sm font-medium text-red-900 md:text-base">
            Get in touch
          </strong>
          <h1 className="mt-2 text-[clamp(2rem,3vw,8rem)] font-semibold uppercase leading-[clamp(1.75rem,2.75vw,7.75rem)]">
            Contact Us
          </h1>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl bg-zinc-50 p-4">
              <h3 className="text-xl font-medium">Our Locations</h3>
              <ul className="mt-2 flex flex-col gap-1">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
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
                  <p>PO Box: 105875, Mussaffah, Abu Dhabi, UAE</p>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
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
                  <p>PO Box: 105875, Mussaffah, Abu Dhabi, UAE</p>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M27,4H9V28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Z"
                      fill="#801d36"
                    ></path>
                    <path
                      d="M10,23.2l6-2.4-6-2.4,6-2.4-6-2.4,6-2.4-6-2.4,6-2.4-6-2.4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4h5l6-2.4-6-2.4Z"
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
                  </svg>
                  <p>PO Box: 105875, Mussaffah, Abu Dhabi, UAE</p>
                </li>
              </ul>
            </div>

            <ul className="flex flex-col gap-2">
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
            </ul>
          </div>

          <Form />
        </div>
      </section>
    </main>
  );
}
