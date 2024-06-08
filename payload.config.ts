// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Product } from "./collections/Product";
import { Service } from "./collections/Service";

import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

import { Partners } from "./globals/Partners";
import { Clients } from "./globals/Clients";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Product, Service, Media, Users],
  globals: [Partners, Clients],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [],
});
