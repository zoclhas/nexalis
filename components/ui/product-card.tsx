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
      className="flex flex-col overflow-hidden rounded-2xl bg-zinc-100"
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
