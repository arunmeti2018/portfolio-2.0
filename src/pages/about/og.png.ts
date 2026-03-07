import type { APIRoute } from "astro";
import { generateOgImageForPage } from "@utils/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      "About",
      "Learn more about Arun Meti — backend developer with expertise in web development and design.",
    ),
    { headers: { "Content-Type": "image/png" } },
  );
