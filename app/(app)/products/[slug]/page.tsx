import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Media } from "@/payload-types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Metadata } from "next";
import { meta } from "@/lib/meta";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return meta({
    title: product.title,
    image: (product.image as Media).url!,
    size: "card",
  });
}

async function getProduct(slug: string) {
  const payload = await getPayload({ config: configPromise });

  const productDocs = await payload.find({
    collection: "product",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!productDocs.totalDocs) {
    notFound();
  }

  return productDocs.docs[0];
}

export default async function ProductSlug({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  return (
    <main>
      <section className="!py-4">
        <Button variant="ghost" asChild>
          <Link href="/products">
            <ChevronLeft height={18} /> Go Back
          </Link>
        </Button>
      </section>
      <section className="grid gap-8 !pt-0 md:grid-cols-2">
        <Image
          src={(product.image as Media).url!}
          alt={`Image for ${product.title}`}
          width={(product.image as Media).width!}
          height={(product.image as Media).height!}
          quality={100}
          className="top-[70px] aspect-square w-full rounded-3xl object-cover object-center md:sticky"
        />
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold md:text-3xl xl:text-4xl">
              {product.title}
            </h1>

            {product.description_html && (
              <div
                className="mt-4 text-lg xl:text-xl"
                dangerouslySetInnerHTML={{ __html: product.description_html }}
              />
            )}
          </div>

          <ul className="flex flex-col gap-1.5">
            {product.info!.map((info, i) => (
              <li
                key={info.id}
                className={twMerge(
                  "flex items-center overflow-hidden rounded-xl bg-zinc-200",
                  i % 2 !== 0 && "bg-zinc-100",
                )}
              >
                <div className="w-full max-w-[120px] p-3">{info.title}</div>
                <div
                  className={twMerge(
                    "flex grow items-center bg-zinc-300 p-3",
                    i % 2 !== 0 && "bg-zinc-200",
                  )}
                >
                  {info.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });

  const productDocs = await payload.find({
    collection: "product",
    limit: 100,
  });

  return productDocs.docs.map((d) => ({ slug: d.slug }));
}
