import { ProductCard } from "@/components/card";
import config from "@payload-config";
import { unstable_cache as cache } from "next/cache";
import { getPayload } from "payload";

import { meta } from "@/lib/utils";
export const metadata = meta({
  title: "Our Services",
});

const getServices = cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.find({
      collection: "service",
      limit: 100,
    });
  },
  ["services"],
  { revalidate: 3600 },
);

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.docs.map((p) => (
          <ProductCard key={p.id} data={p} href="/services/" />
        ))}
      </div>
    </>
  );
}
