import { Button } from "@/components/ui/button";
import { Media } from "@/payload-types";
import configPromise from "@payload-config";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { twMerge } from "tailwind-merge";

import { meta } from "@/lib/meta";
import { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getService(params.slug);

  return meta({
    title: service.title,
    image: (service.image as Media).url!,
    size: "card",
  });
}

async function getService(slug: string) {
  const payload = await getPayload({ config: configPromise });

  const serviceDocs = await payload.find({
    collection: "service",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!serviceDocs.totalDocs) {
    notFound();
  }

  return serviceDocs.docs[0];
}

export default async function ServiceSlug({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getService(params.slug);

  return (
    <main>
      <section className="!py-4">
        <Button variant="ghost" asChild>
          <Link href="/services">
            <ChevronLeft height={18} /> Go Back
          </Link>
        </Button>
      </section>
      <section className="grid gap-8 !pt-0 md:grid-cols-2">
        <Image
          src={(service.image as Media).url!}
          alt={`Image for ${service.title}`}
          width={(service.image as Media).width!}
          height={(service.image as Media).height!}
          quality={100}
          className="top-[70px] aspect-square w-full rounded-3xl object-cover object-center md:sticky"
        />
        <div className="flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold md:text-3xl xl:text-4xl">
              {service.title}
            </h1>

            {service.description_html && (
              <div
                className="mt-4 text-lg xl:text-xl"
                dangerouslySetInnerHTML={{ __html: service.description_html }}
              />
            )}
          </div>

          <ul className="flex flex-col gap-1.5">
            {service.info!.map((info, i) => (
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

  const serviceDocs = await payload.find({
    collection: "service",
    limit: 100,
  });

  return serviceDocs.docs.map((d) => ({ slug: d.slug }));
}
