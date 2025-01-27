import { Media, Product } from "@/payload-types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export const ProductCard = ({
  data,
  href = "/product/",
}: {
  data: Product;
  href?: string;
}) => {
  const image = data.image as Media;

  return (
    <Card>
      <CardHeader>
        <Link href={href + data.slug}>
          <Image
            src={String(image.url)}
            alt={image.alt}
            width={image.width!}
            height={image.height!}
            className="aspect-square size-full rounded-md object-cover object-center"
          />
        </Link>

        <Link href={href + data.slug}>
          <CardTitle className="!mt-4">{data.title}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-3">
          <RichText data={data.description} />
        </CardDescription>
      </CardHeader>
      <CardFooter className="grid">
        <Button variant="outline">
          View <MoveRight />
        </Button>
      </CardFooter>
    </Card>
  );
};
