import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import { Media } from "@/payload-types";

import { meta } from "@/lib/meta";
export const metadata = meta({
  title: "Our Clients",
  description: "Our clients from our executed and current projects",
});

async function getClients() {
  const payload = await getPayload({ config: configPromise });

  const clients = await payload.findGlobal({
    slug: "clients",
  });
  return clients;
}

export default async function OurClients() {
  const clients = await getClients();

  return (
    <main>
      <section>
        <div>
          <strong className="text-sm font-medium text-red-900 md:text-base">
            Executed Projects
          </strong>
          <h1 className="text-[clamp(2rem,3vw,8rem)] font-semibold uppercase leading-[clamp(1.75rem,2.75vw,7.75rem)]">
            Our Clients
          </h1>
        </div>

        <ul className="mt-20 grid gap-4 rounded-3xl bg-zinc-200 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.clients!.map((client) => (
            <li key={client.id} className="flex items-center justify-center">
              <Image
                src={(client.logo as Media).url!}
                alt={`Logo for ${client.client}`}
                width={(client.logo as Media).width!}
                height={(client.logo as Media).height!}
                className="aspect-square w-full object-contain object-center"
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
