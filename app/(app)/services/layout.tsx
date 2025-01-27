import config from "@payload-config";
import { unstable_cache as cache } from "next/cache";
import { getPayload } from "payload";
import { ServiceLinks } from "./links";

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

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const services = await getServices();

  return (
    <>
      <section className="container mx-auto grid gap-8 px-4 py-16">
        <h1 className="font-red-rose text-[clamp(2.25rem,4vw,6rem)] font-medium leading-[clamp(2rem,3.75vw,5.75rem)]">
          Services
        </h1>

        <div className="grid gap-8 md:grid-cols-[0.5fr_1.5fr]">
          <div className="space-y-4 text-sm">
            <div className="space-y-2">
              <div className="h-max w-max rounded-2xl bg-zinc-100 p-2 px-6 font-medium">
                All Services
              </div>
              <ul className="list-disc pl-6">
                <ServiceLinks services={services.docs} />
              </ul>
            </div>
            <div className="space-y-2">
              <div className="h-max w-max rounded-2xl bg-zinc-100 p-2 px-6 font-medium">
                Our Brochure
              </div>
              <p className="pl-2">
                View our brochure for an easy to read guide on all of the
                services offered by us.{" "}
                <a
                  href="/Nexalis-Oil-Gas-Company-Profile-1.pdf"
                  target="_blank"
                  className="text-brand-900 underline"
                >
                  Download the PDF
                </a>
              </p>
            </div>
          </div>

          {children}
        </div>
      </section>
    </>
  );

  return <></>;
}
