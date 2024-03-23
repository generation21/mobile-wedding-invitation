// import { createClient } from "@sanity/client";
import { createClient } from "next-sanity";
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2022-03-07",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  perspective: "published",
});
