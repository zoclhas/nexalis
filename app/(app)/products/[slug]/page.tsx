import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Media } from "@/payload-types";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { unstable_cache as cache } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

import { meta } from "@/lib/utils";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const products = await getProduct(slug);
  if (!products.totalDocs) notFound();

  const product = products.docs[0];

  return meta({
    title: product.title,
    image: (product.image as Media).url!,
    size: "summary_large_image",
  });
}

const getProduct = cache(
  async (slug: string) => {
    const payload = await getPayload({ config });
    return payload.find({
      collection: "product",
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    });
  },
  ["service"],
  { revalidate: 3600 },
);

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const products = await getProduct(slug);
  if (!products.totalDocs) notFound();

  const product = products.docs[0];
  const image = product.image as Media;

  return (
    <section className="container mx-auto grid gap-8 px-4 py-16 lg:grid-cols-2">
      <div>
        <h2 className="font-red-rose text-2xl font-semibold">
          {product.title}
        </h2>
        <Image
          src={String(image.url)}
          alt={image.alt}
          width={image.width!}
          height={image.height!}
          className="aspect-square size-full max-h-80 w-full max-w-80 rounded-md object-cover object-center"
        />
        <article className="prose prose-zinc prose-img:my-1 prose-img:rounded-xl prose-img:shadow-xl">
          <RichText data={product.description} />
        </article>
      </div>

      {product.info && product.info.length > 0 ? (
        <Table>
          <TableCaption>Product Information</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.info.map((p, i) => (
              <TableRow key={i}>
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </section>
  );
}
