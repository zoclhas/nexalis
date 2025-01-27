import { ProductCard } from "@/components/card";
import config from "@payload-config";
import { unstable_cache as cache } from "next/cache";
import { getPayload } from "payload";

const getProducts = cache(
  async () => {
    const payload = await getPayload({ config });
    return payload.find({
      collection: "product",
      limit: 100,
    });
  },
  ["products"],
  { revalidate: 3600 },
);

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <section className="container mx-auto grid gap-8 px-4 py-16">
        <h1 className="font-red-rose text-[clamp(2.25rem,4vw,6rem)] font-medium leading-[clamp(2rem,3.75vw,5.75rem)]">
          Products
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.docs.map((p) => (
            <ProductCard key={p.id} data={p} />
          ))}
        </div>
      </section>
    </>
  );
}
