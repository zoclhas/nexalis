import { getPayload } from "payload";
import configPromise from "@payload-config";

import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { unstable_cache } from "next/cache";

import { ProductCard } from "@/components/ui/product-card";

import { meta } from "@/lib/meta";
export const metadata = meta({
  title: "Products",
  description: "Nexalis Products",
});

async function getProducts(q: string = "") {
  const payload = await getPayload({ config: configPromise });

  const products = await payload.find({
    collection: "product",
    limit: 9999,
    sort: "-updatedAt",
    where: {
      or: [
        {
          title: {
            like: q,
          },
        },
        {
          alt: {
            like: q,
          },
        },
      ],
    },
  });
  return products;
}

export default async function Products({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q ?? "";

  const productDocs = await getProducts(query);
  const products = productDocs.docs;

  const submitForm = async (form: FormData) => {
    "use server";

    const q = form.get("search");
    if (q) {
      redirect(`/products?q=${q}`);
    }
  };

  return (
    <main>
      <section>
        <div>
          <h1 className="text-[clamp(2rem,3vw,8rem)] font-semibold uppercase leading-[clamp(1.75rem,2.75vw,7.75rem)]">
            Products
          </h1>
          <p className="mt-4 text-lg">
            Checkout our long list of products with different specifications and
            verified rating!
          </p>
        </div>

        <form className="mt-20" action={submitForm}>
          <div className="flex items-end justify-between gap-2">
            <label htmlFor="search">Search Products</label>
            {query && (
              <Button variant="outline" size="sm" asChild>
                <Link href="/products">
                  <X height={18} /> Clear
                </Link>
              </Button>
            )}
          </div>

          <div className="mt-0.5 flex items-center gap-2 overflow-hidden rounded-lg border border-zinc-300 pl-2 focus-within:ring-2 focus-within:ring-red-500/25">
            <Search className="text-zinc-400" height={18} />
            <input
              name="search"
              id="search"
              type="search"
              placeholder="Search"
              defaultValue={query}
              className="max-w-none grow p-2 pl-0 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            />
          </div>
        </form>

        <div className="mt-20">
          {!productDocs.totalDocs ? (
            <h2 className="text-center text-xl font-medium">
              No search result for <strong>&quot;{query}&quot;</strong>
            </h2>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              // @ts-ignore
              <ProductCard key={product.id} props={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
