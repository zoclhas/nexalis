import config from "@payload-config";
import { getPayload } from "payload";
import { unstable_cache as cache } from "next/cache";

import { meta } from "@/lib/utils";
import Image from "next/image";
import { Media } from "@/payload-types";
export const metadata = meta({
  title: "Our Clients",
  description:
    "We take pride in partnering with industry leaders across multiple sectors. Our clients trust us for innovative solutions, superior service, and long-term collaboration.",
});

const getClients = cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.findGlobal({
      slug: "clients",
    });
  },
  ["clients"],
  { revalidate: 3600 },
);

export default async function OurClients() {
  const clients = await getClients();

  return (
    <>
      <section className="container mx-auto grid gap-8 px-4 py-16 text-center">
        <h1 className="font-red-rose text-[clamp(2.25rem,4vw,6rem)] font-medium leading-[clamp(2rem,3.75vw,5.75rem)]">
          Our Clients
        </h1>
        <p className="mx-auto max-w-3xl leading-6 text-zinc-600 sm:text-lg">
          We take pride in partnering with industry leaders across multiple
          sectors. Our clients trust us for innovative solutions, superior
          service, and long-term collaboration. Here is our collection of
          clients and projects executed.{" "}
        </p>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-16">
        <div className="grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {clients.clients && clients.clients.length > 0
            ? clients.clients!.map((client, i) => {
                const img = client.logo as Media;
                return (
                  <Image
                    key={i}
                    src={img.url!}
                    alt="Some machinery and facilities at Nexalis International"
                    width={img.width || 1920}
                    height={img.height || 1080}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                );
              })
            : null}{" "}
        </div>
      </section>
    </>
  );
}
