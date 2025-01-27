import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { unstable_cache as cache } from "next/cache";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

const getService = cache(
  async (slug: string) => {
    const payload = await getPayload({ config });
    return payload.find({
      collection: "service",
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const services = await getService(slug);
  if (!services.totalDocs) notFound();

  const service = services.docs[0];

  return (
    <>
      <div>
        <h2 className="font-red-rose text-2xl font-semibold">
          {service.title}
        </h2>
        <article className="prose prose-zinc prose-img:my-1 prose-img:rounded-xl prose-img:shadow-xl">
          <RichText data={service.description} />
        </article>

        {service.info && service.info.length > 0 ? (
          <Table>
            <TableCaption>Service Information</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {service.info.map((p, i) => (
                <TableRow key={i}>
                  <TableCell>{p.title}</TableCell>
                  <TableCell>{p.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </div>
    </>
  );
}
