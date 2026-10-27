import type { APIRoute } from "astro";
import { generateOgImageForPage } from "@utils/generateOgImages";
import { COLLECTION_META } from "@utils/collections";

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      "Books",
      COLLECTION_META.book.description,
    ),
    { headers: { "Content-Type": "image/png" } },
  );
