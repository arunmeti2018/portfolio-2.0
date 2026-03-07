import type { APIRoute } from "astro";
import { generateOgImageForPage } from "@utils/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(
    await generateOgImageForPage(
      "Projects",
      "Projects built by Arun Meti — web applications and tools.",
    ),
    { headers: { "Content-Type": "image/png" } },
  );
