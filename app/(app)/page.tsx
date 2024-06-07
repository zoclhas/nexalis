import HeaderImage from "@/public/slider-c.jpg";
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

async function getProducts() {
  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: "product",
    limit: 4,
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
    </main>
  );
}
