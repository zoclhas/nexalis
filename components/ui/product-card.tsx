import { Media, Product } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
  props,
}: {
  props: Product & { image: Media };
}) => {
  return (
    <Link
      href={`/products/${props.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_4px_24px_-4px_rgb(0,0,0,0.1)] transition-shadow hover:shadow-[0_6px_28px_-2px_rgb(0,0,0,0.15)]"
    >
      <Image
        src={props.image.url!}
        alt={`Image for ${props.title}`}
        width={props.image.width!}
        height={props.image.height!}
        className="aspect-square w-full rounded-2xl object-cover object-center"
      />

      <div className="p-3">
        <h2 className="text-lg font-medium">{props.title}</h2>
      </div>
    </Link>
  );
};
